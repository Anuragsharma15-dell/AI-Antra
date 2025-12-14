# AI-Antra

A minimalistic, agent-driven AI research pipeline that autonomously gathers, analyzes, and synthesizes information into structured reports.

<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

---

## Overview

**AI-Antra** is a multi-agent research system where specialized AI agents collaborate in a deterministic pipeline to transform a user query into actionable insights.

Each agent is responsible for a clearly defined task, ensuring structured, explainable, and reproducible outputs.

---

## Demo

<p align="center">
  <img 
    src="public/preview-screenshot.svg" 
    alt="AI-Antra Agent Pipeline Preview"
    style="width:100%;max-width:1100px;border-radius:14px;box-shadow:0 15px 40px rgba(2,6,23,0.65);" 
  />
</p>

> Replace with `public/screenshot.png` if you have a real UI capture.

---

## How It Works
User Query
↓
Research Agent → Source discovery & raw data collection
↓
Analysis Agent → Pattern extraction & insights
↓
Summary Agent → Synthesis & risk identification
↓
Report Agent → Final report & action items


Each stage builds strictly on the previous agent’s output.

---

## Key Features

- 🔁 Deterministic multi-stage agent pipeline  
- 🧠 Specialized agents with scoped responsibilities  
- 📊 Structured JSON outputs at every stage  
- ⚡ Edge-native execution via Vercel  
- 🔄 Streaming responses using Vercel AI SDK  
- 🧩 Modular, extensible architecture  

---

## Tech Stack

**Frontend**
- React + TypeScript
- Tailwind CSS
- Component-driven UI

**AI & Edge**
- Vercel AI SDK
- Vercel Edge Functions
- Gemini models

**Integrations**
- Exa (web search)
- Supabase (storage & edge functions)

---

## Quick Start

```bash
# install dependencies
npm install

# start development server
npm run dev

# open in browser
http://localhost:5173

PROJECT STRUCTURE
src/
 ├─ components/        # UI components (agents, pipeline, logs)
 ├─ lib/               # Agent logic & helpers
 ├─ types/             # Shared TypeScript types
 └─ app/               # Application shell

public/
 ├─ favicon.ico
 └─ preview-screenshot.svg

supabase/
 └─ functions/         # Edge agent execution logic

Use Cases

Market & competitive research

Technical landscape analysis

Strategic planning support

Hackathon-grade AI agent demos

Agent orchestration experiments

Roadmap

Parallel agent execution

Agent memory & persistence

Tool-calling agents

PDF / Markdown report export

Vector-based retrieval

Contributing

Contributions are welcome.

Open an issue for bugs or feature requests

Submit a PR with clear changes and rationale

License

AGPL-3.0
See LICENSE for full details.

<p align="center"> <strong>AI-Antra — Where AI agents collaborate, not hallucinate.</strong> </p> ```



