import { usePipeline } from '@/hooks/usePipeline';
import Header from '@/components/dashboard/Header';
import QueryInput from '@/components/dashboard/QueryInput';
import PipelineStatus from '@/components/dashboard/PipelineStatus';
import AgentCard from '@/components/dashboard/AgentCard';
import PipelineConnector from '@/components/dashboard/PipelineConnector';
import AgentOutput from '@/components/dashboard/AgentOutput';
import AgentLogs from '@/components/dashboard/AgentLogs';
import FinalReport from '@/components/dashboard/FinalReport';

const Index = () => {
  const { state, executePipeline, isRunning } = usePipeline();

  return (
    <div className="min-h-screen bg-background bg-grid">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Multi-Agent Research Pipeline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Autonomous AI agents collaborate to research, analyze, and generate comprehensive reports.
            Watch the pipeline execute in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - Input and Status */}
          <div className="space-y-6">
            <QueryInput onSubmit={executePipeline} isRunning={isRunning} />
            <PipelineStatus state={state} />
            <AgentLogs agents={state.agents} />
          </div>

          {/* Right column - Agent Pipeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent cards with connectors */}
            <div className="bg-card/50 rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">Agent Pipeline</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {state.agents.map((agent, idx) => (
                  <div key={agent.id} className="space-y-2">
                    <AgentCard
                      agent={agent}
                      isActive={state.currentAgentIndex === idx}
                      index={idx}
                    />
                    {idx < state.agents.length - 1 && idx % 2 === 0 && (
                      <div className="hidden md:block">
                        <PipelineConnector
                          isActive={state.currentAgentIndex >= idx}
                          isComplete={state.agents[idx].status === 'complete'}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Agent outputs */}
            {state.agents.some(a => a.output) && (
              <div className="bg-card/50 rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Agent Outputs</h2>
                <div className="space-y-4">
                  {state.agents
                    .filter(agent => agent.output)
                    .map(agent => (
                      <AgentOutput key={agent.id} agent={agent} />
                    ))}
                </div>
              </div>
            )}

            {/* Final report */}
            <FinalReport state={state} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built for <span className="text-primary">AI Agents Assemble</span> Hackathon by WeMakeDevs
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Powered by Vercel AI SDK • Multi-Agent Orchestration
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
