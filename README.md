# AI-Antra

A minimalistic AI-powered Research agent 

<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

<br />




<br />






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

<!--
  Polished README for AI-Antra (Agent Pipeline)
  - The screenshot will prefer `/public/screenshot.png` and fall back to `/public/preview-screenshot.svg`.
  - If you want the exact screenshot from the attachments placed into the repo, put it at `public/screenshot.png`.
-->

# AI-Antra — Agent Pipeline

> Multi-Agent research pipeline that orchestrates autonomous AI agents to gather, analyze, and synthesize research into structured reports.

[![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)

## Quick demo

<p align="center">
  <picture>
    <source srcset="/public/screenshot.png" type="image/png">
    <img src="/public/preview-screenshot.svg" alt="Agent Pipeline screenshot" style="width:100%;max-width:1100px;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.6);" />
  </picture>
</p>

<p align="center">A clean, modern interface demonstrating the multi-agent research flow and real-time pipeline execution.</p>

## Features

- Deterministic multi-agent pipeline: Research → Analysis → Summarize → Report
- Source-grounded outputs with confidence scoring
- Streaming, edge-native responses using Vercel AI SDK
- Structured JSON outputs that are easy to consume or export

## Tech Stack

- Frontend: Vite + React + TypeScript
- UI: Tailwind CSS + Custom components
- Edge & AI: Vercel Edge Functions + Vercel AI SDK
- Integrations: Exa (web search) and Supabase for persistence

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open http://localhost:5173 (or the port displayed by Vite)

## Screenshot placement

The README uses a fallback mechanism so the file renders even if the exact screenshot is not yet in the repo.

- Preferred location for the real screenshot: `public/screenshot.png`
- Fallback preview (already included): `public/preview-screenshot.svg`

If you want me to embed the exact screenshot from your attachments into the repo, drop the image into `public/screenshot.png` and I'll add it for you.

## Project structure (relevant)

- `src/` — React app source
- `public/` — static assets (favicons, screenshots)
- `supabase/functions/` — serverless Edge Functions (agent execution)

## Usage

- Enter a research query in the left panel and watch the pipeline execute.
- Pipeline stages are visible in the main dashboard with progress and logs.

## Contributing

Contributions are welcome. Please open issues or PRs for bugs, improvements, or feature requests.

## License

This project is licensed under AGPLv3. See `LICENSE` for details.

---

If you want, I can also embed the supplied screenshot image directly into the repository at `public/screenshot.png` now — would you like me to add that file (I can add it if you confirm)?


