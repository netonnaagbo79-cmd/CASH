# Project memory

## Product intent & audience

- Vite + React website intended for public production deployment.
- Includes a contact form backed by Supabase; form must function live (not just static).
- User is likely non-technical or deployment-novice; benefits from plain-English, step-by-step guidance.

## Brand personality & voice

- Communication style: direct, reassuring, beginner-friendly without condescension.
- Prefer concrete click-by-click instructions over abstract terminology when deployment/hosting is involved.

## Visual design & UX direction

- No explicit design details revealed yet; await user design requests before asserting style.
- Template baseline: JSX + Tailwind CSS, Lucide React icons, `@/` path alias to `src/`.

## Decisions, constraints & rationale

- Supabase integration requires two env vars at build/runtime: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Without them the contact form shows a "not connected" state.
- Hosting recommendation: Netlify or Vercel (auto-build from GitHub) over GitHub Pages, because the project is a Vite SPA needing build step and env var support.
- Bolt can also deploy directly, skipping GitHub upload steps — viable shortcut for simply getting live.
- White-screen bug was encountered and fixed in the current project version; fresh download/replace of old files is required to get fixes onto GitHub.

## Open questions & assumptions

- Which host (Netlify vs Vercel) the user will choose is unresolved; offer host-specific guidance once known.
- Exact pages/routes and overall site structure not yet clarified.
- Full Supabase schema/tables beyond contact form still unknown.
- Design/aesthetic direction not yet specified by user.