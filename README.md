# Scira

A minimalistic AI-powered Research agent 

<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

<br />




<br />



[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/zaidmukaddam/scira)


## Powered By

<div align="center">

|          [Vercel AI SDK](https://sdk.vercel.ai/docs)          |                [Exa AI](https://exa.ai)                |
| :-----------------------------------------------------------: | :----------------------------------------------------: |
| <img src="/public/one.svg" alt="Vercel AI SDK" height="40" /> | <img src="/public/exa.png" alt="Exa AI" height="40" /> |
|            For AI model integration and streaming             |          For web search and content retrieval          |

</div>

## Special Thanks

<div align="center" markdown="1">

[![Warp](https://github.com/user-attachments/assets/2bda420d-4211-4900-a37e-e3c7056d799c)](https://www.warp.dev/?utm_source=github&utm_medium=referral&utm_campaign=scira)<br>

### **[Warp, the intelligent terminal](https://www.warp.dev/?utm_source=github&utm_medium=referral&utm_campaign=scira)**<br>

[Available for MacOS, Linux, & Windows](https://www.warp.dev/?utm_source=github&utm_medium=referral&utm_campaign=scira)<br>
[Visit warp.dev to learn more](https://www.warp.dev/?utm_source=github&utm_medium=referral&utm_campaign=scira)

</div>
🧠 Research AI Agent

A minimal, agent-driven AI research system that autonomously gathers information, analyzes data, synthesizes insights, and generates structured research outputs using a multi-stage AI Agent Pipeline.

Built on Vercel + Vercel AI SDK for fast, streaming, edge-native intelligence.

🚀 Overview

Research AI Agent transforms a simple user query into a well-structured research report by orchestrating multiple specialized agents.
Each agent focuses on a single responsibility, ensuring accuracy, depth, and clarity.

The system is designed for:

Research

Analysis

Knowledge synthesis

Decision support

🧩 Agent Pipeline

The research workflow is executed through a deterministic, multi-step agent pipeline:

1️⃣ Research Agent — Data Gatherer

Status: ✅ Complete
Responsibility:

Searches and collects relevant information from multiple trusted sources

Grounds responses using real-world data

Extracts raw content, keywords, and sources

Output Includes:

Source titles

Relevance scores

Raw gathered content

Processed user query

2️⃣ Analysis Agent — Data Processor

Status: ✅ Complete
Responsibility:

Processes gathered data

Identifies recurring patterns

Extracts key insights

Evaluates confidence levels

Output Includes:

Patterns detected across sources

High-level insights

Confidence score

Refined query context

3️⃣ Summary Agent — Content Synthesizer

Status: ✅ Complete
Responsibility:

Converts analytical insights into structured, readable summaries

Removes redundancy

Preserves factual accuracy

Output Includes:

Key findings

Concise explanations

Structured narrative ready for reporting

4️⃣ Report Agent — Output Generator

Status: ❌ Error
Responsibility:

Generates the final structured research report

Produces actionable recommendations

Formats content for end-user consumption

Current Issue:

Pipeline stopped: Failed to send a request to the Edge Function


The Report Agent failure does not affect the integrity of earlier agents.
Research, analysis, and summary stages complete successfully.

📊 Example Agent Outputs
🔍 Research Agent Output

Latency: ~5923ms

Tokens: 615

Collected Sources: Investopedia, Forbes, Wikipedia, AIHR, The Balance Careers

Keywords: HR, recruitment, employee lifecycle, compliance, benefits, engagement

🧠 Analysis Agent Output

Latency: ~4595ms

Tokens: 1001

Confidence: 0.98

Insights:

HR is both a function and a department

Modern HR is strategic, not administrative

Core responsibilities span recruitment, compliance, culture, and development

📝 Summary Agent Output

Latency: ~3989ms

Tokens: 817

Key Findings:

HR manages the full employee lifecycle

Plays a strategic role in organizational success

Includes multiple specialized roles and functions

✨ Key Features

Multi-agent AI architecture

Deterministic research pipeline

Source-grounded outputs

Structured agent outputs (JSON)

High confidence scoring

Edge-native execution

Streaming AI responses

🧠 Powered By

Vercel AI SDK — AI model orchestration & streaming

Vercel Edge Functions — Low-latency execution

Next.js (App Router) — Application framework

Modern LLMs — For reasoning, synthesis, and analysis

🎯 Use Cases

Academic research

Market research

Business analysis

Policy analysis

Technical documentation

Knowledge discovery

⚠️ Known Limitations

Report Agent currently fails due to an Edge Function request issue

Final report generation is temporarily unavailable

Pipeline halts at the final stage

🛣️ Roadmap

✅ Stable multi-agent pipeline

✅ Streaming AI outputs

🔄 Fix Report Agent Edge Function failure

🔜 Export reports (PDF / Markdown)

🔜 Persistent research history

🔜 Citation linking

📜 License

This project is licensed under the AGPLv3 License.
See the LICENSE
 file for details.**🧠 Research AI Agent

A minimal, agent-driven AI research system that autonomously gathers information, analyzes data, synthesizes insights, and generates structured research outputs using a multi-stage AI Agent Pipeline.

Built on Vercel + Vercel AI SDK for fast, streaming, edge-native intelligence.

🚀 Overview

Research AI Agent transforms a simple user query into a well-structured research report by orchestrating multiple specialized agents.
Each agent focuses on a single responsibility, ensuring accuracy, depth, and clarity.

The system is designed for:

Research

Analysis

Knowledge synthesis

Decision support

🧩 Agent Pipeline

The research workflow is executed through a deterministic, multi-step agent pipeline:

1️⃣ Research Agent — Data Gatherer

Status: ✅ Complete
Responsibility:

Searches and collects relevant information from multiple trusted sources

Grounds responses using real-world data

Extracts raw content, keywords, and sources

Output Includes:

Source titles

Relevance scores

Raw gathered content

Processed user query

2️⃣ Analysis Agent — Data Processor

Status: ✅ Complete
Responsibility:

Processes gathered data

Identifies recurring patterns

Extracts key insights

Evaluates confidence levels

Output Includes:

Patterns detected across sources

High-level insights

Confidence score

Refined query context

3️⃣ Summary Agent — Content Synthesizer

Status: ✅ Complete
Responsibility:

Converts analytical insights into structured, readable summaries

Removes redundancy

Preserves factual accuracy

Output Includes:

Key findings

Concise explanations

Structured narrative ready for reporting

4️⃣ Report Agent — Output Generator

Status: ❌ Error
Responsibility:

Generates the final structured research report

Produces actionable recommendations

Formats content for end-user consumption

Current Issue:

Pipeline stopped: Failed to send a request to the Edge Function


The Report Agent failure does not affect the integrity of earlier agents.
Research, analysis, and summary stages complete successfully.

📊 Example Agent Outputs
🔍 Research Agent Output

Latency: ~5923ms

Tokens: 615

Collected Sources: Investopedia, Forbes, Wikipedia, AIHR, The Balance Careers

Keywords: HR, recruitment, employee lifecycle, compliance, benefits, engagement

🧠 Analysis Agent Output

Latency: ~4595ms

Tokens: 1001

Confidence: 0.98

Insights:

HR is both a function and a department

Modern HR is strategic, not administrative

Core responsibilities span recruitment, compliance, culture, and development

📝 Summary Agent Output

Latency: ~3989ms

Tokens: 817

Key Findings:

HR manages the full employee lifecycle

Plays a strategic role in organizational success

Includes multiple specialized roles and functions

✨ Key Features

Multi-agent AI architecture

Deterministic research pipeline

Source-grounded outputs

Structured agent outputs (JSON)

High confidence scoring

Edge-native execution

Streaming AI responses

🧠 Powered By

Vercel AI SDK — AI model orchestration & streaming

Vercel Edge Functions — Low-latency execution

Next.js (App Router) — Application framework

Modern LLMs — For reasoning, synthesis, and analysis

🎯 Use Cases

Academic research

Market research

Business analysis

Policy analysis

Technical documentation

Knowledge discovery

⚠️ Known Limitations

Report Agent currently fails due to an Edge Function request issue

Final report generation is temporarily unavailable

Pipeline halts at the final stage

🛣️ Roadmap

✅ Stable multi-agent pipeline

✅ Streaming AI outputs

🔄 Fix Report Agent Edge Function failure

🔜 Export reports (PDF / Markdown)

🔜 Persistent research history

🔜 Citation linking

📜 License

This project is licensed under the AGPLv3 License.
See the LICENSE
 file for details.**
