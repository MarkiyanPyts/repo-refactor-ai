# Refactoring Plan: Next.js/Tailwind to Docusaurus/CSS Modules

## Overview
This plan outlines the conversion of a Next.js application using Tailwind CSS to a Docusaurus-compatible landing page using plain CSS with CSS modules. All converted components will be output to a `docusaurus-output` folder.

## Key Considerations
1. **Remove Next.js specific features**: App Router, Link component, Image optimization
2. **Convert Tailwind utilities to CSS**: Each component needs its own CSS module
3. **Remove 'use client' directives**: Not needed in Docusaurus
4. **Adapt routing**: Convert Next.js routing to Docusaurus pages
5. **Remove Sanity CMS integration**: Blog functionality will use Docusaurus's built-in blog
6. **Maintain TypeScript**: Components will remain in TypeScript with proper type definitions
7. **CSS Module Types**: Generate or create type definitions for CSS modules

## Component Refactoring Order

### Phase 1: Core Layout Components (No dependencies)
1. **Container** (`container.tsx` → `Container.tsx` + `Container.module.css`)
   - Simple wrapper with max-width and padding
   - CSS: `.container` with responsive padding and max-width

2. **Gradient** (`gradient.tsx` → `Gradient.tsx` + `Gradient.module.css`)
   - Static gradient backgrounds
   - CSS: Linear gradients, blur effects, positioning

3. **Text** (`text.tsx` → `Text.tsx` + `Text.module.css`)
   - Typography components (Heading, Subheading, Lead)
   - CSS: Font sizes, weights, line heights, responsive text

### Phase 2: Basic UI Components
4. **Button** (`button.tsx` → `Button.tsx` + `Button.module.css`)
   - Three variants: primary, secondary, outline
   - CSS: Button styles, hover states, focus states

5. **Link** (`link.tsx` → Remove or adapt)
   - Replace with standard `<a>` tags or Docusaurus Link

6. **Logo** (`logo.tsx` → `Logo.tsx` + `Logo.module.css`)
   - SVG logo with hover animations
   - CSS: SVG animations, transitions

### Phase 3: Layout System
7. **PlusGrid** (`plus-grid.tsx` → `PlusGrid.tsx` + `PlusGrid.module.css`)
   - Grid layout with decorative elements
   - CSS: Grid system, pseudo-elements for plus icons

### Phase 4: Complex Components
8. **Navbar** (`navbar.tsx` → `Navbar.tsx` + `Navbar.module.css`)
   - Desktop and mobile navigation
   - CSS: Flexbox layout, mobile menu styles, transitions
   - Replace Headless UI Disclosure with custom mobile menu

9. **Footer** (`footer.tsx` → `Footer.tsx` + `Footer.module.css`)
   - Multi-section footer layout
   - CSS: Grid layouts, responsive design

10. **BentoCard** (`bento-card.tsx` → `BentoCard.tsx` + `BentoCard.module.css`)
    - Card component with hover effects
    - CSS: Card styles, shadows, hover animations

### Phase 5: Animation Components
11. **AnimatedNumber** (`animated-number.tsx` → `AnimatedNumber.tsx`)
    - May need vanilla JS or CSS animations instead of Framer Motion

12. **LinkedAvatars** (`linked-avatars.tsx` → `LinkedAvatars.tsx` + `LinkedAvatars.module.css`)
    - Avatar connection animation
    - CSS: Keyframe animations for rings and checkmark

13. **LogoCloud** (`logo-cloud.tsx` → `LogoCloud.tsx` + `LogoCloud.module.css`)
    - Responsive logo display
    - CSS: Flexbox, responsive sizing

14. **LogoCluster** (`logo-cluster.tsx` → `LogoCluster.tsx` + `LogoCluster.module.css`)
    - Animated logo arrangement
    - CSS: Positioning, hover effects, pulse animations

15. **LogoTimeline** (`logo-timeline.tsx` → `LogoTimeline.tsx` + `LogoTimeline.module.css`)
    - Scrolling timeline effect
    - CSS: Keyframe animations, masking

16. **Map** (`map.tsx` → `Map.tsx` + `Map.module.css`)
    - Background map with markers
    - CSS: Absolute positioning, animations

### Phase 6: Content Components
17. **Screenshot** (`screenshot.tsx` → `Screenshot.tsx` + `Screenshot.module.css`)
    - Image display with styling
    - CSS: Shadows, borders, aspect ratios

18. **Testimonials** (`testimonials.tsx` → `Testimonials.tsx` + `Testimonials.module.css`)
    - Scrollable testimonial carousel
    - CSS: Scroll snap, opacity transitions

19. **Keyboard** (`keyboard.tsx` → Evaluate necessity)
    - Complex component - assess if needed for landing page

## CSS Module Structure

Each CSS module should include:
```css
/* Component.module.css */

/* Base styles */
.component { }

/* Variants */
.primary { }
.secondary { }

/* States */
.component:hover { }
.component:focus { }
.component:active { }

/* Responsive */
@media (min-width: 640px) { }
@media (min-width: 768px) { }
@media (min-width: 1024px) { }
```

For TypeScript support, create corresponding type definitions:
```typescript
/* Component.module.css.d.ts */
declare const styles: {
  readonly component: string;
  readonly primary: string;
  readonly secondary: string;
  // ... other classes
};
export default styles;
```

Or use CSS Modules TypeScript plugins for automatic generation.

## Global CSS Requirements

Create a global CSS file (`global.css`) for:
- CSS reset/normalize
- CSS variables for colors, spacing, typography
- Font imports (Switzer from Fontshare)
- Base typography styles
- Utility classes that are reused

```css
:root {
  /* Colors */
  --color-gray-50: #f9fafb;
  --color-gray-950: #030712;
  --color-primary: #ee87cb;
  
  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  /* ... */
  
  /* Typography */
  --font-sans: 'Switzer', system-ui, sans-serif;
  --font-mono: monospace;
}
```

## Output Structure

The converted files will be organized in the `docusaurus-output` folder:

```
docusaurus-output/
├── src/
│   ├── components/
│   │   ├── Container/
│   │   │   ├── Container.tsx
│   │   │   └── Container.module.css
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   └── ... (other components)
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.tsx
└── static/
    └── (copied assets from public/)
```

## Migration Steps

1. **Create output directory structure** in `docusaurus-output`
2. **Setup global CSS** with variables and base styles
3. **Convert components** following the order above, outputting to respective folders
4. **Create page layouts** using converted components
5. **Copy static assets** from `public/` to `static/`
6. **Test in Docusaurus project** by copying the output files

## Considerations for Docusaurus

- Use Docusaurus's built-in blog instead of Sanity CMS
- Leverage Docusaurus themes for consistent styling
- Consider using Docusaurus's MDX support for content pages
- Adapt to Docusaurus's routing structure

## Estimated Effort

- Simple components (1-2 hours each): Container, Text, Button, Logo
- Medium components (2-4 hours each): Navbar, Footer, Cards
- Complex components (4-6 hours each): Animations, Testimonials
- Total estimated time: 40-60 hours for complete refactoring