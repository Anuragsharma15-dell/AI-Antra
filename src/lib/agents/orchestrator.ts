import { Agent, AgentOutput, PipelineState, AgentLog } from '@/types/agent';
import { mockAgentResponses } from './config';

// Agent Orchestrator - manages the execution flow between agents
// This is where Vercel AI SDK would be integrated for real LLM calls

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateAgentLog = (message: string, level: AgentLog['level'] = 'info'): AgentLog => ({
  timestamp: new Date(),
  level,
  message,
});

// Simulates agent execution with realistic delays and progress updates
export const executeAgent = async (
  agent: Agent,
  input: Record<string, unknown>,
  onProgress: (progress: number) => void,
  onLog: (log: AgentLog) => void
): Promise<AgentOutput> => {
  const startTime = Date.now();
  
  // Log initialization
  onLog(generateAgentLog(`Initializing ${agent.name}...`));
  await delay(500);
  onProgress(10);

  // Log input processing
  onLog(generateAgentLog(`Processing input data...`));
  await delay(800);
  onProgress(25);

  // Simulate LLM reasoning
  // NOTE: In production, this would use Vercel AI SDK's generateText()
  // Example: const result = await generateText({ model, prompt, system });
  onLog(generateAgentLog(`Running AI inference...`));
  await delay(1200);
  onProgress(50);

  // Log intermediate steps
  onLog(generateAgentLog(`Analyzing results...`));
  await delay(600);
  onProgress(70);

  // Generate structured output
  onLog(generateAgentLog(`Generating structured output...`));
  await delay(400);
  onProgress(90);

  // Get mock response based on agent type
  const mockData = mockAgentResponses[agent.id as keyof typeof mockAgentResponses] || {};
  
  onLog(generateAgentLog(`${agent.name} completed successfully`, 'success'));
  onProgress(100);

  const processingTime = Date.now() - startTime;

  return {
    success: true,
    data: {
      ...mockData,
      processedQuery: input.query || 'Default query',
    },
    metadata: {
      processingTime,
      tokens: Math.floor(Math.random() * 500) + 200,
      model: 'gemini-2.5-flash', // Would be dynamic with real Vercel AI SDK
    },
  };
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
      const previousOutput = i > 0 ? currentState.agents[i - 1].output : undefined;
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

      // Update agent with output
      currentState = {
        ...currentState,
        agents: currentState.agents.map((a, idx) =>
          idx === i ? { ...a, status: 'complete', output } : a
        ),
      };
      onStateChange(currentState);

      // Small delay between agents
      await delay(500);
    } catch (error) {
      // Handle agent failure
      currentState = {
        ...currentState,
        status: 'error',
        agents: currentState.agents.map((a, idx) =>
          idx === i ? { ...a, status: 'error' as const } : a
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
