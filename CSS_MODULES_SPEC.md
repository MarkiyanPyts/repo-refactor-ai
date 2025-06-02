# CSS Modules Specification

## Global CSS Variables and Setup

### `src/styles/global.css`
```css
/* Font Import */
@import url('https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&display=swap');

:root {
  /* Color Palette */
  --color-white: #ffffff;
  --color-black: #000000;
  
  /* Gray Scale */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;
  
  /* Brand Colors */
  --color-primary: #ee87cb;
  --color-secondary: #b060ff;
  --color-accent: #D15052;
  
  /* Gradient Colors */
  --color-gradient-start: #fff1be;
  --color-gradient-middle: #ee87cb;
  --color-gradient-end: #b060ff;
  
  /* Spacing Scale */
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  
  /* Font Families */
  --font-sans: 'Switzer', system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Border Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Breakpoints */
  --screen-sm: 640px;
  --screen-md: 768px;
  --screen-lg: 1024px;
  --screen-xl: 1280px;
}
```

## Component CSS Modules

### 1. `Container.module.css`
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

### 2. `Button.module.css`
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
}

.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Variants */
.primary {
  background-color: var(--color-gray-950);
  color: var(--color-white);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
}

.primary:hover {
  background-color: var(--color-gray-800);
  box-shadow: var(--shadow-lg);
}

.secondary {
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--color-white);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-full);
  box-shadow: inset 0 0 0 1px rgba(209, 80, 82, 0.15);
}

.secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.outline {
  background-color: transparent;
  color: var(--color-gray-950);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.outline:hover {
  background-color: var(--color-gray-50);
}
```

### 3. `Text.module.css`
```css
/* Heading */
.heading {
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: -0.025em;
  color: var(--color-gray-950);
  margin: 0;
}

.headingDefault {
  font-size: var(--text-4xl);
  line-height: 1;
}

@media (min-width: 640px) {
  .headingDefault {
    font-size: var(--text-6xl);
  }
}

.headingDark {
  color: var(--color-white);
}

/* Subheading */
.subheading {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gray-500);
  margin: 0;
}

.subheadingDark {
  color: var(--color-gray-400);
}

/* Lead */
.lead {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--color-gray-500);
  margin: 0;
}

.leadDark {
  color: var(--color-gray-400);
}
```

### 4. `Logo.module.css`
```css
.logo {
  display: block;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logoMark {
  display: block;
}

.logoType {
  display: none;
}

@media (min-width: 640px) {
  .logoType {
    display: block;
  }
}
```

### 5. `Navbar.module.css`
```css
.navbar {
  padding-top: var(--spacing-12);
}

@media (min-width: 640px) {
  .navbar {
    padding-top: var(--spacing-16);
  }
}

.navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navLeft {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
}

.logoWrapper {
  padding: var(--spacing-3) 0;
}

/* Desktop Navigation */
.desktopNav {
  display: none;
}

@media (min-width: 1024px) {
  .desktopNav {
    display: flex;
  }
}

.navLink {
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-gray-950);
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.navLink:hover {
  background-color: rgba(0, 0, 0, 0.025);
}

/* Mobile Menu Button */
.mobileMenuButton {
  display: flex;
  width: var(--spacing-12);
  height: var(--spacing-12);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

@media (min-width: 1024px) {
  .mobileMenuButton {
    display: none;
  }
}

.mobileMenuButton:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.menuIcon {
  width: var(--spacing-6);
  height: var(--spacing-6);
}

/* Mobile Navigation */
.mobileNav {
  display: none;
  padding: var(--spacing-4) 0;
}

.mobileNav.open {
  display: block;
}

@media (min-width: 1024px) {
  .mobileNav {
    display: none !important;
  }
}

.mobileNavLinks {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.mobileNavLink {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-gray-950);
  text-decoration: none;
}
```

### 6. `Footer.module.css`
```css
.footer {
  margin-top: var(--spacing-24);
}

@media (min-width: 640px) {
  .footer {
    margin-top: var(--spacing-32);
  }
}

/* CTA Section */
.ctaSection {
  background-color: var(--color-gray-50);
  padding: var(--spacing-16) 0;
  text-align: center;
}

.ctaContent {
  max-width: 768px;
  margin: 0 auto;
}

.ctaTitle {
  margin-bottom: var(--spacing-6);
}

.ctaDescription {
  margin-bottom: var(--spacing-8);
}

/* Footer Main */
.footerMain {
  padding: var(--spacing-16) 0;
}

.footerGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
}

@media (min-width: 768px) {
  .footerGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footerColumn {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.footerColumnTitle {
  font-weight: 600;
  color: var(--color-gray-950);
  margin-bottom: var(--spacing-2);
}

.footerLink {
  color: var(--color-gray-600);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footerLink:hover {
  color: var(--color-gray-950);
}

/* Footer Bottom */
.footerBottom {
  border-top: 1px solid var(--color-gray-200);
  padding: var(--spacing-8) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-4);
}

.copyright {
  color: var(--color-gray-500);
  font-size: var(--text-sm);
}

.socialLinks {
  display: flex;
  gap: var(--spacing-4);
}

.socialLink {
  color: var(--color-gray-400);
  transition: color 0.2s ease;
}

.socialLink:hover {
  color: var(--color-gray-600);
}
```

### 7. `Gradient.module.css`
```css
.gradient {
  background: linear-gradient(115deg, var(--color-gradient-start) 0%, var(--color-gradient-middle) 50%, var(--color-gradient-end) 100%);
  opacity: 0.2;
}

.gradientBackground {
  position: absolute;
  left: 50%;
  top: -128px;
  transform: translateX(-50%);
  width: 1216px;
  max-width: 100%;
  height: 768px;
}

@media (min-width: 640px) {
  .gradientBackground {
    top: -192px;
  }
}

.gradientBlob {
  width: 100%;
  height: 100%;
  background: conic-gradient(from 90deg at 50% 50%, #a78bfa 0deg, #ec4899 72deg, #ef4444 144deg, #eab308 216deg, #22c55e 288deg, #a78bfa 360deg);
  filter: blur(48px);
  opacity: 0.2;
}
```

### 8. `PlusGrid.module.css`
```css
.plusGrid {
  position: relative;
  width: 100%;
}

.plusGridInner {
  position: relative;
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
}

@media (min-width: 1024px) {
  .plusGridInner {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
}

.plusGridRow {
  display: flex;
  position: relative;
}

.plusGridItem {
  position: relative;
}

/* Plus decorations */
.plusIcon {
  position: absolute;
  width: var(--spacing-4);
  height: var(--spacing-4);
  display: none;
}

@media (min-width: 1024px) {
  .plusIcon {
    display: block;
  }
}

.plusIcon::before,
.plusIcon::after {
  content: '';
  position: absolute;
  background-color: var(--color-gray-950);
}

.plusIcon::before {
  width: 1px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.plusIcon::after {
  width: 100%;
  height: 1px;
  top: 50%;
  transform: translateY(-50%);
}
```

### 9. `BentoCard.module.css`
```css
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--radius-lg);
  background-color: var(--color-white);
  box-shadow: var(--shadow-xs);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: var(--spacing-8);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.cardDark {
  background-color: var(--color-gray-800);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.15);
}

.cardContent {
  position: relative;
  z-index: 10;
}

.eyebrow {
  font-size: var(--text-sm);
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-2);
}

.cardDark .eyebrow {
  color: var(--color-gray-400);
}

.title {
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-bottom: var(--spacing-4);
}

.description {
  color: var(--color-gray-600);
  line-height: var(--leading-relaxed);
}

.cardDark .description {
  color: var(--color-gray-300);
}

.graphic {
  margin-top: var(--spacing-8);
  position: relative;
  z-index: 10;
}

/* Fade overlays */
.fadeOverlay {
  position: absolute;
  left: 0;
  right: 0;
  height: 96px;
  pointer-events: none;
  z-index: 20;
}

.fadeTop {
  top: 0;
  background: linear-gradient(to bottom, var(--color-white), transparent);
}

.fadeBottom {
  bottom: 0;
  background: linear-gradient(to top, var(--color-white), transparent);
}

.cardDark .fadeTop {
  background: linear-gradient(to bottom, var(--color-gray-800), transparent);
}

.cardDark .fadeBottom {
  background: linear-gradient(to top, var(--color-gray-800), transparent);
}
```

## Additional CSS Modules Needed

10. **Screenshot.module.css** - Image display with shadows and borders
11. **AnimatedNumber.module.css** - Number animation styles
12. **LinkedAvatars.module.css** - Avatar connection animations
13. **LogoCloud.module.css** - Logo grid layout
14. **LogoCluster.module.css** - Clustered logo animations
15. **LogoTimeline.module.css** - Timeline scrolling effect
16. **Map.module.css** - Map and marker styles
17. **Testimonials.module.css** - Carousel and testimonial cards
18. **Keyboard.module.css** - Keyboard visualization (if needed)

## Implementation Notes

1. **Responsive Design**: Use CSS media queries matching Tailwind breakpoints
2. **Animations**: Replace Framer Motion with CSS animations/transitions
3. **Dark Mode**: Use CSS classes or data attributes for dark variants
4. **Hover States**: Implement with `:hover` pseudo-class
5. **Focus States**: Ensure accessibility with `:focus-visible`
6. **Typography**: Maintain consistent font scales using CSS variables
7. **Spacing**: Use the spacing scale for consistent margins/padding