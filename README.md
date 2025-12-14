# AI-Antra

A minimalistic AI-powered Research agent 

<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

<br />




<br />





<!--
  Clean, well-formatted README for AI-Antra (Agent Pipeline)
  Fixes:
  - Correct link targets
  - Proper markdown-only layout (no raw HTML blocks)
  - Image paths use repository-relative locations (`public/`)
-->

# AI-Antra — Agent Pipeline

> Multi-agent research pipeline: autonomous agents collaborate to gather, analyze, and synthesize research into structured reports.

[Vercel AI SDK](https://vercel.com/docs/concepts/ai) • [Exa](https://exa.ai) • [Supabase](https://supabase.com)

---

## Demo

<p align="center">
  <img src="public/preview-screenshot.svg" alt="Agent Pipeline preview" style="width:100%;max-width:1100px;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.6);" />
</p>

If you have the exact screenshot image, place it at `public/screenshot.png` and the README will use it instead of the preview.

## What it is

- A minimal, agent-driven research system that orchestrates specialized AI agents in a deterministic pipeline.
- Agents include: Research (data gatherer), Analysis (data processor), Summary (synthesizer), and Report (final generator).

## Key Features

- Deterministic multi-stage pipeline
- Source-grounded outputs with confidence scores
- Streaming responses via Vercel AI SDK
- Edge-native execution with Vercel Edge Functions

## Tech Stack

- Frontend: Vite + React + TypeScript
- Styling: Tailwind CSS + Design system components
- AI & Edge: Vercel AI SDK + Vercel Edge Functions
- Persistence & Integrations: Supabase, Exa (web search)

## Quickstart

```bash
npm install
npm run dev
# then open http://localhost:5173
```

## Files of interest

- `src/` — React application source
- `public/` — static assets (favicons, screenshots)
- `supabase/functions/` — Edge Functions used by agents

## Contributing

Please open issues or PRs for bugs, improvements, or feature suggestions.

## License

AGPLv3 — see `LICENSE`.

---

Next steps:
- I can embed the exact screenshot from your attachments into `public/screenshot.png` now (confirm and I'll add it).
- I can also generate PNG/ICO favicon fallbacks and add link tags for broader browser support.


## Quick demo

