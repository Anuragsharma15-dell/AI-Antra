import { PipelineState } from '@/types/agent';
import { Activity, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PipelineStatusProps {
  state: PipelineState;
}

const PipelineStatus = ({ state }: PipelineStatusProps) => {
  const completedAgents = state.agents.filter(a => a.status === 'complete').length;
  const totalAgents = state.agents.length;
  const progress = (completedAgents / totalAgents) * 100;

  const getElapsedTime = () => {
    if (!state.startedAt) return '0s';
    const end = state.completedAt || new Date();
    const elapsed = Math.floor((end.getTime() - state.startedAt.getTime()) / 1000);
    return `${elapsed}s`;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Pipeline Status</h2>
        <div className={cn(
          'flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium',
          state.status === 'idle' && 'bg-muted text-muted-foreground',
          state.status === 'running' && 'bg-primary/20 text-primary',
          state.status === 'complete' && 'bg-success/20 text-success',
          state.status === 'error' && 'bg-destructive/20 text-destructive'
        )}>
          {state.status === 'running' && <Activity className="w-3 h-3 animate-pulse" />}
          {state.status === 'complete' && <CheckCircle2 className="w-3 h-3" />}
          {state.status === 'error' && <XCircle className="w-3 h-3" />}
          <span className="capitalize">{state.status}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-mono font-bold text-foreground">{completedAgents}/{totalAgents}</p>
          <p className="text-xs text-muted-foreground">Agents</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-mono font-bold text-foreground">{getElapsedTime()}</p>
          <p className="text-xs text-muted-foreground">Elapsed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-mono font-bold text-foreground">{Math.round(progress)}%</p>
          <p className="text-xs text-muted-foreground">Complete</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn(
            'h-full rounded-full transition-all duration-500',
            state.status === 'complete' ? 'bg-success' : 'bg-primary'
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Current query */}
      {state.userQuery && (
        <div className="mt-4 p-3 bg-background rounded-lg border border-border">
          <p className="text-xs text-muted-foreground mb-1">Current Query</p>
          <p className="text-sm text-foreground">{state.userQuery}</p>
        </div>
      )}
    </div>
  );
};

export default PipelineStatus;
