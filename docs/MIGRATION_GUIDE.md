# Directory Structure Migration Guide

## Current Structure (Flat)
```
way-ahead-brews/
├── components/
├── context/
├── lib/
├── types.ts
├── App.tsx
├── index.tsx
└── ...
```

## Proposed Structure (Documentation-First)

### Option 1: Full Migration (Recommended)
Move all source code into `src/` directory:

```
way-ahead-brews/
├── docs/                    # All documentation
│   ├── ARCHITECTURE.md
│   └── MIGRATION_GUIDE.md
├── src/                     # All source code
│   ├── components/
│   ├── context/
│   ├── lib/
│   ├── types/
│   ├── App.tsx
│   └── index.tsx
├── public/                  # Static assets (unchanged)
└── ...config files
```

### Option 2: Gradual Migration
Keep current structure but organize new code in `src/`:

- New components → `src/components/`
- Existing components → migrate gradually
- Documentation → `docs/` (already created)

## Migration Steps

### Step 1: Create Directory Structure
```bash
mkdir -p src/components/{layout,pages,features,ui}
mkdir -p src/context
mkdir -p src/lib
mkdir -p src/types
mkdir -p docs
```

### Step 2: Move Files (if doing full migration)
```bash
# Move components (organize by category)
mv components/Header.tsx src/components/layout/
mv components/Footer.tsx src/components/layout/
mv components/Cart.tsx src/components/layout/
mv components/Hero.tsx src/components/pages/
mv components/FeaturedBrews.tsx src/components/pages/
# ... etc

# Move other directories
mv context/ src/
mv lib/ src/
mv types.ts src/types/index.ts
mv App.tsx src/
mv index.tsx src/
```

### Step 3: Update Imports
- Update all import paths to reflect new structure
- Update `vite.config.ts` alias if needed
- Update `tsconfig.json` paths if configured

### Step 4: Update Documentation
- Update `ARCHITECTURE.md` with actual structure
- Update file tree representation

## Recommendation

**Start with Option 2 (Gradual)**:
1. Keep current structure working
2. Create `docs/` folder (already done)
3. Create `src/` folder for new code
4. Migrate files incrementally as you work on them
5. Update `ARCHITECTURE.md` as structure evolves

This minimizes risk and allows you to test as you migrate.
