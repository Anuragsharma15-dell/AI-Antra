import { Agent } from '@/types/agent';

// Agent configurations for the Content Research Pipeline
// Each agent has a specific role and processes data sequentially

export const createResearchAgent = (): Agent => ({
  id: 'research-agent',
  name: 'Research Agent',
  role: 'Data Gatherer',
  description: 'Searches and collects relevant information from multiple sources based on the user query.',
  status: 'idle',
  progress: 0,
  logs: [],
});

export const createAnalysisAgent = (): Agent => ({
  id: 'analysis-agent',
  name: 'Analysis Agent',
  role: 'Data Processor',
  description: 'Processes collected data, identifies patterns, and extracts key insights.',
  status: 'idle',
  progress: 0,
  logs: [],
});

export const createSummaryAgent = (): Agent => ({
  id: 'summary-agent',
  name: 'Summary Agent',
  role: 'Content Synthesizer',
  description: 'Synthesizes analyzed data into structured, coherent summaries.',
  status: 'idle',
  progress: 0,
  logs: [],
});

export const createReportAgent = (): Agent => ({
  id: 'report-agent',
  name: 'Report Agent',
  role: 'Output Generator',
  description: 'Generates the final structured report with actionable recommendations.',
  status: 'idle',
  progress: 0,
  logs: [],
});

export const createPipelineAgents = (): Agent[] => [
  createResearchAgent(),
  createAnalysisAgent(),
  createSummaryAgent(),
  createReportAgent(),
];

// Mock AI responses for each agent
export const mockAgentResponses = {
  'research-agent': {
    sources: [
      { title: 'Industry Report 2024', relevance: 0.95 },
      { title: 'Market Analysis Study', relevance: 0.89 },
      { title: 'Expert Interviews', relevance: 0.82 },
    ],
    rawData: 'Collected 15 relevant sources with 98% confidence score',
    keywords: ['innovation', 'market trends', 'growth opportunities'],
  },
  'analysis-agent': {
    patterns: ['Emerging market segment', 'Technology adoption curve'],
    insights: [
      'Key trend: 40% YoY growth in target sector',
      'Competitive landscape shifting towards AI integration',
      'Customer sentiment shows high demand for automation',
    ],
    confidence: 0.87,
  },
  'summary-agent': {
    keyFindings: [
      'Market opportunity valued at $2.5B',
      'Primary competitors lack AI capabilities',
      'Target audience prioritizes efficiency',
    ],
    executiveSummary: 'Analysis reveals significant untapped potential in the AI-powered automation sector.',
    riskFactors: ['Regulatory uncertainty', 'Technology adoption barriers'],
  },
  'report-agent': {
    title: 'Strategic Analysis Report',
    sections: ['Executive Summary', 'Market Analysis', 'Competitive Landscape', 'Recommendations'],
    recommendations: [
      'Prioritize AI integration in product roadmap',
      'Target enterprise segment for initial launch',
      'Build strategic partnerships in key markets',
    ],
    actionItems: [
      { priority: 'high', task: 'Develop MVP with core AI features' },
      { priority: 'medium', task: 'Establish partner network' },
      { priority: 'low', task: 'Create marketing strategy' },
    ],
  },
};
