import { Agent } from '@/types/agent';
import { cn } from '@/lib/utils';
import { Code2, Clock, Cpu } from 'lucide-react';

interface AgentOutputProps {
  agent: Agent;
}

const AgentOutput = ({ agent }: AgentOutputProps) => {
  if (!agent.output) return null;

  return (
    <div className="p-4 bg-card rounded-xl border border-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-primary" />
          <h4 className="font-semibold text-sm text-foreground">{agent.name} Output</h4>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{agent.output.metadata.processingTime}ms</span>
          </div>
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3" />
            <span>{agent.output.metadata.tokens} tokens</span>
          </div>
        </div>
      </div>
      
      <div className="bg-background rounded-lg p-3 border border-border overflow-auto max-h-48">
        <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(agent.output.data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default AgentOutput;
