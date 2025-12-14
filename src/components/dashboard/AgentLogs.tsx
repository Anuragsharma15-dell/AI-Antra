import { Agent } from '@/types/agent';
import { Terminal, Info, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AgentLogsProps {
  agents: Agent[];
}

const logIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

const logColors = {
  info: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
};

const AgentLogs = ({ agents }: AgentLogsProps) => {
  const allLogs = agents
    .flatMap(agent => agent.logs.map(log => ({ ...log, agentName: agent.name })))
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  if (allLogs.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Agent Logs</h2>
        </div>
        <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
          No logs yet. Start the pipeline to see agent activity.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="w-4 h-4 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Agent Logs</h2>
        <span className="ml-auto text-xs text-muted-foreground">{allLogs.length} entries</span>
      </div>
      
      <ScrollArea className="h-64">
        <div className="space-y-2 pr-4">
          {allLogs.map((log, idx) => {
            const Icon = logIcons[log.level];
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3 p-2 bg-background rounded-lg border border-border"
              >
                <Icon className={cn('w-4 h-4 shrink-0 mt-0.5', logColors[log.level])} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-foreground">{log.agentName}</span>
                    <span className="text-xs text-muted-foreground">
                      {log.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{log.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AgentLogs;
