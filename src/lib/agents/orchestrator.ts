import { Agent, AgentOutput, PipelineState, AgentLog } from '@/types/agent';
import { supabase } from '@/integrations/supabase/client';

// Agent Orchestrator - manages the execution flow between agents
// Uses Lovable AI Gateway via edge functions for real LLM calls

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateAgentLog = (message: string, level: AgentLog['level'] = 'info'): AgentLog => ({
  timestamp: new Date(),
  level,
  message,
});

// Executes a single agent using the AI edge function
export const executeAgent = async (
  agent: Agent,
  input: Record<string, unknown>,
  onProgress: (progress: number) => void,
  onLog: (log: AgentLog) => void
): Promise<AgentOutput> => {
  const startTime = Date.now();
  
  // Log initialization
  onLog(generateAgentLog(`Initializing ${agent.name}...`));
  await delay(300);
  onProgress(10);

  // Log input processing
  onLog(generateAgentLog(`Processing input data...`));
  await delay(200);
  onProgress(20);

  // Call the AI edge function
  onLog(generateAgentLog(`Running AI inference with Gemini 2.5 Flash...`));
  onProgress(30);

  try {
    const { data, error } = await supabase.functions.invoke('agent-execute', {
      body: {
        agentId: agent.id,
        agentName: agent.name,
        agentRole: agent.role,
        userQuery: input.query as string,
        previousOutput: input.previousOutput,
      },
    });

    if (error) {
      onLog(generateAgentLog(`Error: ${error.message}`, 'error'));
      throw error;
    }

    if (!data.success) {
      onLog(generateAgentLog(`Agent failed: ${data.error}`, 'error'));
      throw new Error(data.error || 'Agent execution failed');
    }

    onProgress(80);
    onLog(generateAgentLog(`Analyzing results...`));
    await delay(200);

    onProgress(90);
    onLog(generateAgentLog(`Generating structured output...`));
    await delay(100);

    const processingTime = Date.now() - startTime;

    onLog(generateAgentLog(`${agent.name} completed successfully`, 'success'));
    onProgress(100);

    return {
      success: true,
      data: data.data,
      metadata: {
        processingTime,
        tokens: data.metadata?.tokens || 0,
        model: data.metadata?.model || 'google/gemini-2.5-flash',
      },
    };
  } catch (error) {
    const processingTime = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    onLog(generateAgentLog(`${agent.name} failed: ${errorMessage}`, 'error'));
    onProgress(100);

    return {
      success: false,
      error: errorMessage,
      data: {},
      metadata: {
        processingTime,
        tokens: 0,
        model: 'google/gemini-2.5-flash',
      },
    };
  }
};

// Runs the entire pipeline sequentially
export const runPipeline = async (
  state: PipelineState,
  onStateChange: (state: PipelineState) => void
): Promise<PipelineState> => {
  let currentState: PipelineState = { ...state, status: 'running', startedAt: new Date() };
  onStateChange(currentState);

  for (let i = 0; i < currentState.agents.length; i++) {
    const agent = currentState.agents[i];
    
    // Update agent status to running
    currentState = {
      ...currentState,
      currentAgentIndex: i,
      agents: currentState.agents.map((a, idx) => 
        idx === i ? { ...a, status: 'running' } : a
      ),
    };
    onStateChange(currentState);

    try {
      // Execute the agent
      const previousOutput = i > 0 ? currentState.agents[i - 1].output?.data : undefined;
      const output = await executeAgent(
        agent,
        { query: currentState.userQuery, previousOutput },
        (progress) => {
          currentState = {
            ...currentState,
            agents: currentState.agents.map((a, idx) =>
              idx === i ? { ...a, progress } : a
            ),
          };
          onStateChange(currentState);
        },
        (log) => {
          currentState = {
            ...currentState,
            agents: currentState.agents.map((a, idx) =>
              idx === i ? { ...a, logs: [...a.logs, log] } : a
            ),
          };
          onStateChange(currentState);
        }
      );

      // Check if agent failed
      if (!output.success) {
        throw new Error(output.error || 'Agent execution failed');
      }

      // Update agent with output
      currentState = {
        ...currentState,
        agents: currentState.agents.map((a, idx) =>
          idx === i ? { ...a, status: 'complete', output } : a
        ),
      };
      onStateChange(currentState);

      // Small delay between agents for visual effect
      await delay(300);
    } catch (error) {
      // Handle agent failure
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      currentState = {
        ...currentState,
        status: 'error',
        agents: currentState.agents.map((a, idx) =>
          idx === i 
            ? { 
                ...a, 
                status: 'error' as const,
                logs: [...a.logs, generateAgentLog(`Pipeline stopped: ${errorMessage}`, 'error')]
              } 
            : a
        ),
      };
      onStateChange(currentState);
      return currentState;
    }
  }

  // Pipeline complete
  currentState = {
    ...currentState,
    status: 'complete',
    completedAt: new Date(),
    finalOutput: currentState.agents[currentState.agents.length - 1].output,
  };
  onStateChange(currentState);

  return currentState;
};