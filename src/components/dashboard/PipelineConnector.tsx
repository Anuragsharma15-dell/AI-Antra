import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface PipelineConnectorProps {
  isActive: boolean;
  isComplete: boolean;
}

const PipelineConnector = ({ isActive, isComplete }: PipelineConnectorProps) => {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="relative flex items-center">
        {/* Connector line */}
        <div className={cn(
          'w-12 h-0.5 transition-all duration-500',
          isComplete ? 'bg-success' : isActive ? 'bg-primary' : 'bg-border'
        )}>
          {/* Animated flow indicator */}
          {isActive && !isComplete && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-4 h-full bg-primary animate-flow" />
            </div>
          )}
        </div>

        {/* Arrow */}
        <div className={cn(
          'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500',
          isComplete ? 'bg-success/20 text-success' : isActive ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
        )}>
          <ArrowRight className="w-3 h-3" />
        </div>

        {/* Connector line */}
        <div className={cn(
          'w-12 h-0.5 transition-all duration-500',
          isComplete ? 'bg-success' : 'bg-border'
        )} />
      </div>
    </div>
  );
}

export default PipelineConnector;
