import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isRunning: boolean;
}

const exampleQueries = [
  'Analyze market trends for AI automation tools',
  'Research competitive landscape in fintech',
  'Generate insights on sustainable energy market',
];

const QueryInput = ({ onSubmit, isRunning }: QueryInputProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isRunning) {
      onSubmit(query.trim());
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2 className="text-lg font-semibold text-foreground mb-2">Start Research Pipeline</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Enter your research query and let the AI agents collaborate to generate insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your research query..."
            disabled={isRunning}
            className={cn(
              'w-full h-24 px-4 py-3 bg-background border border-border rounded-lg',
              'text-foreground placeholder:text-muted-foreground',
              'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
              'resize-none transition-all',
              isRunning && 'opacity-50 cursor-not-allowed'
            )}
          />
        </div>

        {/* Example queries */}
        <div className="flex flex-wrap gap-2">
          {exampleQueries.map((example, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setQuery(example)}
              disabled={isRunning}
              className={cn(
                'px-3 py-1.5 text-xs rounded-full border border-border',
                'text-muted-foreground hover:text-foreground hover:bg-secondary',
                'transition-colors',
                isRunning && 'opacity-50 cursor-not-allowed'
              )}
            >
              {example}
            </button>
          ))}
        </div>

        <Button
          type="submit"
          disabled={!query.trim() || isRunning}
          className={cn(
            'w-full gap-2',
            isRunning && 'animate-pulse'
          )}
        >
          {isRunning ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Pipeline Running...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Execute Pipeline
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default QueryInput;
