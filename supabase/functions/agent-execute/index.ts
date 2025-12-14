import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AgentRequest {
  agentId: string;
  agentName: string;
  agentRole: string;
  userQuery: string;
  previousOutput?: Record<string, unknown>;
}

// Agent-specific system prompts
const agentPrompts: Record<string, string> = {
  'research-agent': `You are a Research Agent specializing in data gathering. Your role is to:
1. Identify relevant sources for the given query
2. Collect and organize raw information
3. Extract key topics and keywords

Return a JSON object with:
- sources: array of {title: string, relevance: number (0-1)}
- rawData: string summarizing what was found
- keywords: array of relevant keywords`,

  'analysis-agent': `You are an Analysis Agent specializing in data processing. Your role is to:
1. Analyze the research data provided
2. Identify patterns and trends
3. Extract actionable insights

Return a JSON object with:
- patterns: array of identified patterns
- insights: array of key insights
- confidence: number (0-1) representing analysis confidence`,

  'summary-agent': `You are a Summary Agent specializing in content synthesis. Your role is to:
1. Synthesize analyzed data into coherent summaries
2. Highlight key findings
3. Identify potential risks

Return a JSON object with:
- keyFindings: array of main findings
- executiveSummary: brief summary paragraph
- riskFactors: array of potential risks`,

  'report-agent': `You are a Report Agent specializing in final output generation. Your role is to:
1. Generate a structured final report
2. Provide clear recommendations
3. Create prioritized action items

Return a JSON object with:
- title: report title
- sections: array of section names
- recommendations: array of recommendations
- actionItems: array of {priority: "high"|"medium"|"low", task: string}`,
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { agentId, agentName, agentRole, userQuery, previousOutput }: AgentRequest = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = agentPrompts[agentId] || `You are a helpful AI agent named ${agentName} with role: ${agentRole}. Analyze the query and return structured JSON output.`;

    let userMessage = `User Query: "${userQuery}"`;
    if (previousOutput) {
      userMessage += `\n\nPrevious agent output to build upon:\n${JSON.stringify(previousOutput, null, 2)}`;
    }
    userMessage += '\n\nAnalyze this and return your structured JSON output.';

    console.log(`[${agentId}] Starting execution for query: ${userQuery}`);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error(`[${agentId}] Rate limit exceeded`);
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        console.error(`[${agentId}] Payment required`);
        return new Response(JSON.stringify({ error: 'Usage limit reached. Please add credits to continue.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error(`[${agentId}] AI gateway error:`, response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;
    
    console.log(`[${agentId}] Raw AI response:`, content);

    // Parse the JSON from the response
    let parsedData: Record<string, unknown> = {};
    try {
      // Try to extract JSON from the response (handles markdown code blocks)
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, content];
      const jsonStr = jsonMatch[1].trim();
      parsedData = JSON.parse(jsonStr);
    } catch (parseError) {
      console.warn(`[${agentId}] Could not parse JSON, using raw content`);
      parsedData = { rawResponse: content };
    }

    const result = {
      success: true,
      data: {
        ...parsedData,
        processedQuery: userQuery,
      },
      metadata: {
        processingTime: Date.now(),
        tokens: aiResponse.usage?.total_tokens || 0,
        model: 'google/gemini-2.5-flash',
      },
    };

    console.log(`[${agentId}] Execution complete`);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Agent execution error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
