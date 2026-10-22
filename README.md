# CodeCrafter

Two sided platform. Developers build a profile and look for work. Recruiters post jobs and look at candidates.

**Live:** https://codecrafter-red.vercel.app

## What it does

- Developer dashboard and profile editor
- Browsable developer directory
- Recruiter dashboard for postings and candidates
- Login and signup
- 3D hero pieces built with React Three Fiber, plus spring driven and spotlight components
- HeroUI components on Tailwind, Radix primitives, Tabler icons

About 3,600 lines across 55 files, 21 components.

## Stack

Next.js (App Router), HeroUI, Tailwind CSS, Radix UI, React Three Fiber, React Spring, Tabler Icons.

## Layout

```
src/app/
  dashboard/
    developer/
    profile/
    recruiter/
  developers/
  jobs/
  login/  signup/
src/components/     globe, lamp, spotlight-card, stepper, split-text, floating-nav
```

## Run it

```bash
npm install
npm run dev         # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Serve the build |
| `npm run lint` | ESLint |

## Notes

The repo carries a vendored copy of the `next-app-template-main` starter next to the real app. Nothing under `src/` imports it. Removing it would make the tree much easier to follow.
