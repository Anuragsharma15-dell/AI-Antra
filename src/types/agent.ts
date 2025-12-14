// Agent type definitions for the multi-agent orchestration system

export type AgentStatus = 'idle' | 'running' | 'complete' | 'error';

export interface AgentInput {
  query?: string;
  context?: Record<string, unknown>;
  previousOutput?: AgentOutput;
}

export interface AgentOutput {
  success: boolean;
  data: Record<string, unknown>;
  metadata: {
    processingTime: number;
    tokens?: number;
    model?: string;
  };
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  status: AgentStatus;
  input?: AgentInput;
  output?: AgentOutput;
  progress: number;
  logs: AgentLog[];
}

export interface AgentLog {
  timestamp: Date;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export interface PipelineState {
  id: string;
  name: string;
  agents: Agent[];
  currentAgentIndex: number;
  status: 'idle' | 'running' | 'complete' | 'error';
  startedAt?: Date;
  completedAt?: Date;
  userQuery: string;
  finalOutput?: AgentOutput;
}

// Vercel AI SDK integration types (mocked for frontend)
export interface AIModelConfig {
  provider: 'openai' | 'gemini' | 'together';
  model: string;
  temperature: number;
  maxTokens: number;
}

export interface GenerateTextParams {
  model: AIModelConfig;
  prompt: string;
  system: string;
}
