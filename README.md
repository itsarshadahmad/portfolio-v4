# Cloud/DevOps Engineer Portfolio

## Overview

A personal portfolio website for a Cloud & DevOps Engineer showcasing experience, projects, skills, and contact information. The app is now a frontend-only React + TypeScript project for simpler static deployment on platforms like Netlify and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## Architecture

### Frontend
- **Framework**: React 18 + TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with CSS variables for light/dark themes
- **Component Library**: shadcn/ui + Radix primitives
- **Build Tool**: Vite

Project layout:
- `src/pages` for pages
- `src/components` for feature components
- `src/components/ui` for reusable UI primitives
- `src/data/portfolio-data.ts` for static portfolio content
- `src/types/portfolio.ts` for portfolio types

### Data model
- Portfolio content is static and bundled with the frontend.
- No backend APIs are required for runtime.

## Deployment

- Build command: `npm run build`
- Output directory: `dist`
- Preview command: `npm run preview`

This project is optimized for static hosting.


## Netlify deployment

This repo includes a `netlify.toml` configured for SPA hosting.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`
- SPA redirects: all routes -> `index.html`

You can connect this GitHub repo directly in Netlify and deploy with defaults.
