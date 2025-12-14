import { useState, useCallback } from 'react';
import { PipelineState } from '@/types/agent';
import { createPipelineAgents } from '@/lib/agents/config';
import { runPipeline } from '@/lib/agents/orchestrator';

const createInitialState = (): PipelineState => ({
  id: crypto.randomUUID(),
  name: 'Content Research Pipeline',
  agents: createPipelineAgents(),
  currentAgentIndex: -1,
  status: 'idle',
  userQuery: '',
});

export const usePipeline = () => {
  const [state, setState] = useState<PipelineState>(createInitialState);

  const executePipeline = useCallback(async (query: string) => {
    // Reset state with new query
    const newState: PipelineState = {
      ...createInitialState(),
      userQuery: query,
    };
    setState(newState);

    // Run the pipeline
    await runPipeline(newState, setState);
  }, []);

  const resetPipeline = useCallback(() => {
    setState(createInitialState());
  }, []);

  return {
    state,
    executePipeline,
    resetPipeline,
    isRunning: state.status === 'running',
  };
};
