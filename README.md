# Portfolio Website

Personal portfolio for Hariprakash Karthikeyan, Data Scientist and ML/AI Engineer specializing in Bayesian modeling, marketing analytics, and healthcare data science.

## Tech Stack

- **React 18** + **TypeScript** — component-based UI with full type safety
- **Vite** — fast dev server and build tool (port 8080)
- **Tailwind CSS** + **shadcn-ui** — utility-first styling with accessible headless components
- **React Router v6** — client-side routing
- **TanStack Query** — async state management
- **Recharts** — data visualizations
- **Netlify** — deployment and hosting

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx       # Main portfolio landing page
│   ├── Resume.tsx      # Resume / CV page
│   └── NotFound.tsx    # 404 page
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Expertise.tsx
│   ├── Experience.tsx
│   ├── Writing.tsx
│   ├── WorkWithMe.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   └── ui/             # shadcn-ui component library
├── assets/             # Images, PDF resume, project reports
├── hooks/
└── lib/utils.ts
```

## Getting Started

**Prerequisites:** Node.js 18+ and npm (or Bun)

```sh
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:8080

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Deployment

The site is deployed on Netlify. Push to the main branch to trigger a deploy. Routing is configured via `netlify.toml` to support client-side navigation.
