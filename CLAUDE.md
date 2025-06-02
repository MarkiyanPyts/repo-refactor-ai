# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Radiant is a marketing website template built with:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Sanity CMS for blog content
- Framer Motion for animations

## Common Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run Next.js linting
npm run typegen      # Generate TypeScript types from Sanity schema
```

### Sanity Studio
- Access at http://localhost:3000/studio when dev server is running
- Manages blog content (posts, authors, categories)

## Architecture

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `studio/` - Embedded Sanity Studio
  - `company/`, `pricing/`, `login/` - Static marketing pages
- `/src/components/` - React components (all client-side)
- `/src/sanity/` - Sanity configuration, schemas, and client
- `/public/` - Static assets organized by feature

### Key Patterns
- All components use 'use client' directive
- Tailwind CSS v4 with custom Fontshare fonts (Switzer)
- Path alias `@/` maps to `./src/`
- Blog uses Sanity CMS with:
  - Post, Author, Category, and BlockContent schemas
  - RSS feed generation at `/blog/feed.xml`
  - Image optimization via Sanity image URLs

### Styling
- Tailwind CSS v4 configuration
- Custom utility classes in components
- PlusGrid component system for layout
- Consistent use of Headless UI for interactive elements

### Type Safety
- Strict TypeScript configuration
- Sanity type generation via `npm run typegen`
- All components properly typed