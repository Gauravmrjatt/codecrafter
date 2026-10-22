# CodeCrafter

A two-sided platform for developers and recruiters: developers build a profile and browse roles, recruiters post jobs and review candidates.

**Live demo** → https://codecrafter-red.vercel.app

## Features

- **Developer side** — profile, dashboard, and a browsable developer directory
- **Recruiter side** — dedicated dashboard for postings and candidates
- **Auth** — login and signup flows
- **Motion and 3D** — `@react-three/fiber` / `drei` for the globe, plus spring-based and spotlight components
- **UI** — HeroUI components, Tailwind CSS, Radix primitives, Tabler icons

## Stack

Next.js (App Router) · HeroUI · Tailwind CSS · Radix UI · React Three Fiber · React Spring · Tabler Icons

## Structure

```
src/app/
  dashboard/
    developer/      developer dashboard
    profile/        profile editor
    recruiter/      recruiter dashboard
  developers/       developer directory
  jobs/             job listings
  login/  signup/
src/components/     globe · lamp · spotlight-card · stepper · split-text · floating-nav
```

## Getting started

```bash
npm install
npm run dev         # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Notes

- The repository contains a vendored copy of the `next-app-template-main` starter alongside the real app. It isn't imported by `src/` — removing it would make the tree much easier to read.
