# Way Ahead Brews - Architecture Documentation

> **Master Context Document** - This file contains all essential information about the project structure, patterns, and status. Reference this file to understand the entire codebase without reading individual files.

## Project Goal

Way Ahead Brews is an e-commerce website for a non-alcoholic craft beer brand. The site features:
- Multi-page navigation (Home, Story, Process, Shop)
- Product catalog with shopping cart functionality
- Animated hero sections with parallax effects
- Responsive design with modern UI/UX

## Tech Stack

### Core Framework
- **React**: 18.2.0
- **TypeScript**: ~5.8.2
- **Vite**: ^6.2.0 (Build tool & dev server)

### Key Libraries
- **framer-motion**: 11.1.7 (Animations & transitions)
- **lucide-react**: 0.378.0 (Icon library)

### Styling
- **Tailwind CSS** (Utility-first CSS framework)
- Custom color scheme: `#ec1c24` (red), `#d4af37` (gold), slate-900/950 (dark)

### Development
- **@vitejs/plugin-react**: ^5.0.0
- **@types/node**: ^22.14.0

## Directory Structure

### Current Structure (Actual)
```
way-ahead-brews/
├── docs/                          # Documentation (non-code) - NEW
│   ├── ARCHITECTURE.md            # This file - master context
│   └── MIGRATION_GUIDE.md          # Migration instructions
├── components/                    # React components (flat structure)
│   ├── Header.tsx                 # Navigation & logo
│   ├── Footer.tsx                  # Footer navigation
│   ├── Cart.tsx                    # Shopping cart modal
│   ├── Hero.tsx                    # Hero section (home)
│   ├── FeaturedBrews.tsx           # Can showcase (fixed bottom)
│   ├── WingStory.tsx               # Brand story section
│   ├── Process.tsx                 # Process overview
│   ├── Commitment.tsx              # Brand commitment
│   ├── Shop.tsx                    # Product catalog
│   ├── OurStory.tsx                # Full story page
│   ├── OurProcess.tsx              # Full process page
│   ├── ProductCard.tsx             # Product display card
│   ├── Bubbles.tsx                 # Animated background bubbles
│   └── icons/
│       └── WingLogo.tsx            # Wing logo SVG
├── context/                        # React Context providers
│   └── CartContext.tsx             # Shopping cart state management
├── lib/                            # Utilities & business logic
│   ├── data.ts                     # Static product data & brand stories
│   └── shopify.ts                  # Shopify API integration
├── public/                         # Static assets
│   ├── images/
│   │   ├── cans/                   # Product can images
│   │   ├── logo/                   # Brand logos
│   │   └── wordmark/               # Wordmark variations
│   └── index.html                  # HTML template
├── App.tsx                         # Root component & routing logic
├── index.tsx                       # Application entry point
├── types.ts                        # TypeScript type definitions
├── .cursorrules                    # AI assistant rules
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies & scripts
└── README.md                       # Project overview
```

### Proposed Structure (Future - See docs/MIGRATION_GUIDE.md)
The ideal structure would organize components by category:
- `src/components/layout/` - Header, Footer, Cart
- `src/components/pages/` - Hero, FeaturedBrews, Shop, etc.
- `src/components/features/` - ProductCard
- `src/components/ui/` - Bubbles, reusable UI
- `src/components/icons/` - Custom icons

**Note**: Current structure works fine. Migration is optional and can be done gradually.

## Key Patterns & Conventions

### State Management
- **Cart State**: React Context (`CartContext.tsx`)
  - Global cart state accessible via `useCart()` hook
  - Functions: `addToCart`, `removeFromCart`, `clearCart`
  - State: `cartItems`, `cartCount`, `isCartOpen`

### Navigation Pattern
- **Client-side routing**: Manual state-based (`currentPage` in `App.tsx`)
- **Page types**: `'home' | 'story' | 'shop' | 'process'`
- **Navigation function**: `navigateTo(page: Page)` with scroll reset

### Component Structure
- **Functional Components**: All components use React.FC
- **Props Pattern**: Explicit interfaces for component props
- **Animation**: Framer Motion for all transitions and interactions
- **Styling**: Tailwind utility classes with custom color palette

### Data Flow
1. **Static Data**: `lib/data.ts` exports `products` and `brandStories` arrays
2. **Dynamic Data**: `lib/shopify.ts` provides `fetchProducts()` for API calls
3. **Components**: Import data directly or use context for shared state
4. **Props Drilling**: Minimal - Context used for cart, props for page-specific data

### Animation Patterns
- **Entrance**: `initial`, `whileInView`, `viewport={{ once: true }}`
- **Hover**: `whileHover` with scale/transform
- **Scroll**: `useScroll`, `useTransform` for parallax effects
- **Floating**: `animate={{ y: [...] }}` with infinite repeat

### Styling Rules
- **Color Palette**:
  - Primary Red: `#ec1c24` (brand color)
  - Gold: `#d4af37` (accent)
  - Dark: `slate-900`, `slate-950` (backgrounds)
  - White: `white`, `slate-50` (text/backgrounds)
- **Spacing**: Tailwind scale (4px base unit)
- **Typography**: Custom `font-heading` class for brand fonts
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints

### File Naming
- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Utilities**: camelCase (e.g., `data.ts`, `shopify.ts`)
- **Types**: `types.ts` or `types/index.ts`
- **Constants**: UPPER_SNAKE_CASE for exported constants

## Current Status

### ✅ Completed Features
- [x] Multi-page navigation system
- [x] Hero section with animated text and CTAs
- [x] Fixed bottom can showcase (FeaturedBrews) with parallax
- [x] Product catalog with Shopify integration
- [x] Shopping cart functionality (add/remove/view)
- [x] Brand story sections (WingStory, OurStory)
- [x] Process explanation pages
- [x] Responsive header with mobile menu
- [x] Animated background bubbles
- [x] Product card components with hover effects
- [x] Logo integration from `/public/images/logo/`

### 🚧 In Progress / Needs Refinement
- [ ] Can images background removal (may need image processing)
- [ ] Parallax effect fine-tuning for can showcase
- [ ] Shopify API error handling
- [ ] Loading states for async operations
- [ ] SEO optimization (meta tags, structured data)

### 📋 Pending Features
- [ ] Checkout flow integration
- [ ] User authentication (if needed)
- [ ] Product reviews/ratings
- [ ] Newsletter signup
- [ ] Social media integration
- [ ] Analytics integration
- [ ] Performance optimization (image lazy loading, code splitting)
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Error boundaries
- [ ] Unit tests
- [ ] E2E tests

## Important Implementation Details

### Can Showcase (FeaturedBrews)
- **Position**: Fixed at bottom of viewport (`fixed bottom-0`)
- **Visibility**: Only top 25% visible via `clipPath: 'inset(0 0 75% 0)'`
- **Parallax**: Scroll-based Y transform per can
- **Overlap**: Negative margins (`-ml-32 md:-ml-52`) for squad effect
- **Z-index**: Center cans (index 1,2) in front (z-30), outer cans (z-10)

### Hero Section
- **Height**: Full viewport on desktop (`min-h-screen`)
- **Scroll Effect**: Text fades out as user scrolls (`opacityText`, `yText` transforms)
- **Background**: Dark gradient with animated bubbles overlay

### Cart System
- **Context Provider**: Wraps entire app in `App.tsx`
- **Storage**: Currently in-memory (no persistence)
- **Modal**: Opens/closes via `isCartOpen` state

### Product Data
- **Static**: 4 products defined in `lib/data.ts`
- **Dynamic**: `lib/shopify.ts` fetches from Shopify API
- **Fallback**: Uses static data if API fails

## Environment Variables

- `GEMINI_API_KEY` (if using AI features)
- Shopify API credentials (if needed in future)

## Build & Deployment

- **Dev Server**: `npm run dev` → `http://localhost:3000`
- **Build**: `npm run build` → `dist/` directory
- **Preview**: `npm run preview` → Test production build locally

## Notes for AI Assistant

When modifying this project:
1. **Always read this file first** to understand structure
2. **Update this file** if you change:
   - Directory structure
   - Dependencies (package.json)
   - Core patterns (state management, routing)
   - Component organization
3. **Keep components small** - split large files into feature modules
4. **Follow existing patterns** - maintain consistency with current code style
5. **Document complex logic** - add comments for non-obvious implementations

---

**Last Updated**: 2026-01-23
**Version**: 0.0.0
