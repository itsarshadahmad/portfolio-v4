# Cloud/DevOps Engineer Portfolio

## Overview

A personal portfolio website for a Cloud & DevOps Engineer showcasing experience, projects, skills, and contact information. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed with a modern, professional aesthetic inspired by Linear and Stripe's design systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Build Tool**: Vite

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature components (hero, experience, projects, etc.) in `client/src/components/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **API Pattern**: RESTful endpoints under `/api/`
- **Data Source**: Static data file (`server/portfolio-data.ts`) serving portfolio content
- **Development Server**: Vite middleware for HMR during development
- **Production**: Static file serving from built assets

The backend provides simple read-only API endpoints:
- `/api/portfolio` - Full portfolio data
- `/api/portfolio/profile` - Profile information
- `/api/portfolio/experiences` - Work experience
- `/api/portfolio/projects` - Featured projects
- `/api/portfolio/skills` - Technical skills

### Design System
- Typography: Inter for headings/body, JetBrains Mono for code
- Color scheme: HSL-based CSS variables supporting light/dark themes
- Spacing: Tailwind's utility-first approach with consistent scale
- Components: shadcn/ui with new-york style variant

### Data Validation
- **Schema Definition**: Zod schemas in `shared/schema.ts`
- **Type Safety**: TypeScript types derived from Zod schemas
- Shared types between frontend and backend via `@shared/` alias

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Output to `./migrations` directory
- **Note**: Database is configured but currently uses static data; can be extended to persist portfolio content

### UI Libraries
- **Radix UI**: Comprehensive set of accessible primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **React Icons**: Additional brand icons (technology logos)
- **Embla Carousel**: Carousel component
- **React Day Picker**: Calendar component
- **Vaul**: Drawer component

### Development Tools
- **Vite**: Build tool and dev server
- **TSX**: TypeScript execution for server
- **Drizzle Kit**: Database migration tooling
- **PostCSS/Autoprefixer**: CSS processing

### Fonts (External)
- Google Fonts: DM Sans, Fira Code, Geist Mono, Architects Daughter