# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Crypgo, a cryptocurrency trading platform built with React Router v7, TypeScript, and TailwindCSS. The application was migrated from Next.js to React Router and includes a landing page with multiple sections for crypto trading features.

## Development Commands

- **Development**: `npm run dev` - Starts development server at http://localhost:5173
- **Build**: `npm run build` - Creates production build
- **Type checking**: `npm run typecheck` - Runs React Router typegen and TypeScript compiler
- **Production server**: `npm start` - Runs production server from build output

## Architecture

### Framework & Routing
- **React Router v7** with Server-Side Rendering (SSR) enabled
- Single route configuration in `app/routes.ts` pointing to `routes/home.tsx`
- Root layout and error boundaries defined in `app/root.tsx`

### Project Structure
```
app/
├── root.tsx              # Root layout, links, meta, error boundary
├── routes.ts             # Route configuration
├── routes/
│   └── home.tsx          # Main home page route
├── components/
│   └── Home/             # All landing page components
│       ├── Hero/         # Main hero section with buy/sell forms
│       ├── work/         # Work section
│       ├── GlobalReach/  # Global reach section
│       ├── timeline/     # Timeline section
│       ├── platform/     # Platform features
│       ├── portfolio/    # Portfolio section
│       ├── upgrade/      # Upgrade features
│       ├── perks/        # Perks section
│       ├── Faq/          # FAQ section
│       └── BrandLogo/    # Brand logo showcase
└── types/                # TypeScript type definitions
    ├── blog.ts
    ├── breadcrumb.ts
    └── menu.ts
```

### Component Architecture
- **Home Page**: Main route (`routes/home.tsx`) renders all sections in sequence
- **Section Components**: Each Home component represents a landing page section
- **Data Pattern**: Some components include local `data.tsx` files with static data
- **Modals**: Hero section includes buy/sell crypto modals with form handling

### Key Technologies
- **React Router v7**: Full-stack React framework with SSR
- **TypeScript**: Type safety throughout the application
- **TailwindCSS**: Styling framework (configured via Vite plugin)
- **Framer Motion**: Animations
- **React Hot Toast**: Notification system
- **React Slick**: Carousel/slider components

### Configuration Files
- `react-router.config.ts`: React Router configuration (SSR enabled)
- `vite.config.ts`: Vite bundler configuration with TailwindCSS and path aliases
- `tsconfig.json`: TypeScript configuration with path mapping

## Migration Notes (Next.js → React Router)

This project was migrated from Next.js. When working with this codebase:

- **No Next.js imports**: Replace `next/image` with regular `<img>` tags, `next/link` with React Router's `<Link>`
- **Path aliases**: Use `~/` prefix for imports (configured via vite-tsconfig-paths)
- **Data fetching**: Use React Router's data loading patterns instead of Next.js API routes
- **No app directory**: Traditional file-based routing instead of Next.js app router

## Component Patterns

### Section Components
Most Home section components follow this pattern:
- Import data from local `data.tsx` files or use hardcoded data
- Export default component with JSX structure
- Use TailwindCSS classes for styling
- Include motion animations with Framer Motion

### Form Components
The Hero buy/sell forms demonstrate:
- Local state management with useState
- Form validation and submission
- Toast notifications for user feedback
- Modal patterns with click-outside handling

When making changes:
- Maintain the existing component structure and naming conventions
- Follow the established TailwindCSS styling patterns
- Use TypeScript for all new components
- Test in development mode with `npm run dev` before building