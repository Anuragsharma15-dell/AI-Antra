import { Agent } from '@/types/agent';
import { Bot, CheckCircle2, Loader2, AlertCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AgentCardProps {
  agent: Agent;
  isActive: boolean;
  index: number;
}

const statusConfig = {
  idle: {
    icon: Circle,
    color: 'text-muted-foreground',
    bgColor: 'bg-muted/50',
    borderColor: 'border-border',
    label: 'Idle',
  },
  running: {
    icon: Loader2,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/50',
    label: 'Running',
  },
  complete: {
    icon: CheckCircle2,
    color: 'text-success',
    bgColor: 'bg-success/10',
    borderColor: 'border-success/50',
    label: 'Complete',
  },
  error: {
    icon: AlertCircle,
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    borderColor: 'border-destructive/50',
    label: 'Error',
  },
};

const AgentCard = ({ agent, isActive, index }: AgentCardProps) => {
  const config = statusConfig[agent.status];
  const StatusIcon = config.icon;

  return (
    <div
      className={cn(
        'relative p-5 rounded-xl border-2 transition-all duration-500',
        config.bgColor,
        config.borderColor,
        isActive && agent.status === 'running' && 'glow-primary',
        agent.status === 'complete' && 'glow-success'
      )}
    >
      {/* Agent number badge */}
      <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-mono font-semibold text-muted-foreground">
        {index + 1}
      </div>

      <div className="flex items-start gap-4">
        {/* Agent icon */}
        <div className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center shrink-0',
          agent.status === 'running' ? 'bg-primary/20' : 'bg-secondary'
        )}>
          <Bot className={cn('w-6 h-6', agent.status === 'running' ? 'text-primary' : 'text-muted-foreground')} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{agent.name}</h3>
            <div className={cn('flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs', config.bgColor)}>
              <StatusIcon className={cn('w-3 h-3', config.color, agent.status === 'running' && 'animate-spin')} />
              <span className={config.color}>{config.label}</span>
            </div>
          </div>

          {/* Role */}
          <p className="text-sm text-primary font-medium mb-2">{agent.role}</p>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed">{agent.description}</p>

          {/* Progress bar */}
          {(agent.status === 'running' || agent.status === 'complete') && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground font-mono">{agent.progress}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={cn(
                    'h-full rounded-full transition-all duration-500',
                    agent.status === 'complete' ? 'bg-success' : 'bg-primary'
                  )}
                  style={{ width: `${agent.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Latest log */}
          {agent.logs.length > 0 && (
            <div className="mt-3 p-2 bg-background/50 rounded-lg border border-border">
              <p className="text-xs font-mono text-muted-foreground truncate">
                {agent.logs[agent.logs.length - 1].message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
