# CSS-Pure Design System Refactor - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the design system from a React+CSS bundle into a pure CSS package with optional Tailwind plugin, then initialize its own git repo and push to GitHub.

**Architecture:** Three CSS layers (tokens, utilities, animations) with theme overrides. No JavaScript runtime. Optional Tailwind plugin as the only JS export. React components removed from DS, left for consumers to own.

**Tech Stack:** Pure CSS (custom properties, `@layer`, `@import`), TypeScript (Tailwind plugin only, compiled with `tsc`)

**Working directory:** `/Users/emanuel.martins/Projects/personal/design-system`

---

### Task 1: Initialize git repo and set up .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Initialize git repo inside design-system**

```bash
git init
git branch -M main
```

- [ ] **Step 2: Update .gitignore**

Replace `.gitignore` with:

```
node_modules/
dist/
.npm_cache/
*.log
.DS_Store
.env
.vscode/
.idea/
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "chore: initialize design-system repository"
```

---

### Task 2: Clean up stale files

**Files:**
- Delete: `src/components/` (entire directory -- 16 files)
- Delete: `src/index.ts`
- Delete: `src/tokens.ts`
- Delete: `src/utils.ts`
- Delete: `claude.md`
- Delete: `setup.sh`
- Delete: `MIGRATION.md`
- Delete: `QUICKSTART.md`
- Delete: `dist/` (will be rebuilt)
- Delete: all `.js` duplicate files in `src/components/`

- [ ] **Step 1: Remove React components directory**

```bash
rm -rf src/components/
```

- [ ] **Step 2: Remove JS entry points and utilities**

```bash
rm src/index.ts src/tokens.ts src/utils.ts
```

- [ ] **Step 3: Remove stale docs and scripts**

```bash
rm -f claude.md setup.sh MIGRATION.md QUICKSTART.md
```

- [ ] **Step 4: Remove dist (will be rebuilt)**

```bash
rm -rf dist/
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove React components, JS entry points, and stale files

React components (Card, Modal, Button, Badge, Stat, Separator,
StatusIndicator) are now consumer-owned per ADR-001.
JS utilities (cn, formatCurrency, tokens) removed from DS scope."
```

---

### Task 3: Split index.css into layered token files

**Files:**
- Create: `src/tokens/colors.css`
- Create: `src/tokens/spacing.css`
- Create: `src/tokens/typography.css`
- Create: `src/tokens/shadows.css`
- Create: `src/tokens/radii.css`
- Create: `src/tokens/transitions.css`
- Create: `src/tokens/index.css`

This task extracts lines 1-103 and 106-161 of the current `src/index.css` into separate token files.

- [ ] **Step 1: Create `src/tokens/colors.css`**

```css
/* Design System - Color Tokens */

@layer base {
  :root {
    /* Dark Theme (Default) */
    --ds-background: #0a0a0a;
    --ds-surface: #111111;
    --ds-surface-alt: #1a1a1a;
    --ds-text: #e0e0e0;
    --ds-text-muted: #808080;
    --ds-primary: #00e5ff;
    --ds-secondary: #b388ff;
    --ds-border: #2a2a2a;
    --ds-border-focus: #444444;
    --ds-success: #00ff88;
    --ds-warning: #ffcc00;
    --ds-error: #ff3366;
    --ds-info: #00b4d8;

    /* Semantic finance colors */
    --ds-income: #00ff88;
    --ds-expense: #ff3366;

    /* GitHub contribution colors */
    --ds-github-contrib-none: #161b22;
    --ds-github-contrib-low: #0e4429;
    --ds-github-contrib-medium: #006d32;
    --ds-github-contrib-high: #26a641;
    --ds-github-contrib-very-high: #39d353;

    /* Chart palette */
    --ds-chart-1: #00e5ff;
    --ds-chart-2: #00ff88;
    --ds-chart-3: #ffcc00;
    --ds-chart-4: #ff3366;
    --ds-chart-5: #b388ff;
    --ds-chart-6: #ff8a65;
  }

  [data-theme='light'] {
    --ds-background: #fafafa;
    --ds-surface: #ffffff;
    --ds-surface-alt: #f0f0f0;
    --ds-text: #1a1a1a;
    --ds-text-muted: #737373;
    --ds-primary: #0077b6;
    --ds-secondary: #7c3aed;
    --ds-border: #d4d4d4;
    --ds-border-focus: #a3a3a3;
    --ds-success: #047857;
    --ds-warning: #b45309;
    --ds-error: #dc2626;
    --ds-info: #0284c7;

    --ds-income: #047857;
    --ds-expense: #dc2626;

    --ds-github-contrib-none: #ebedf0;
    --ds-github-contrib-low: #9be9a8;
    --ds-github-contrib-medium: #40c463;
    --ds-github-contrib-high: #30a14e;
    --ds-github-contrib-very-high: #216e39;

    --ds-chart-1: #0077b6;
    --ds-chart-2: #059669;
    --ds-chart-3: #d97706;
    --ds-chart-4: #dc2626;
    --ds-chart-5: #7c3aed;
    --ds-chart-6: #ea580c;
  }
}
```

- [ ] **Step 2: Create `src/tokens/spacing.css`**

```css
/* Design System - Spacing Tokens */

@layer base {
  :root {
    --ds-spacing-xs: 0.25rem;
    --ds-spacing-sm: 0.5rem;
    --ds-spacing-md: 0.75rem;
    --ds-spacing-lg: 1rem;
    --ds-spacing-xl: 1.5rem;
    --ds-spacing-2xl: 2rem;
  }
}
```

- [ ] **Step 3: Create `src/tokens/typography.css`**

```css
/* Design System - Typography Tokens & Base Styles */

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

@layer base {
  body {
    font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 13px;
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', system-ui, sans-serif;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.375rem; }
  h3 { font-size: 1.125rem; }
  h4 { font-size: 1rem; }
  h5 { font-size: 0.875rem; }
  h6 { font-size: 0.8125rem; }

  input, select, textarea {
    font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
    font-size: 13px;
  }
}
```

- [ ] **Step 4: Create `src/tokens/shadows.css`**

```css
/* Design System - Shadow Tokens */

@layer base {
  :root {
    --ds-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --ds-shadow-md: 0 2px 4px rgba(0, 0, 0, 0.4);
    --ds-shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.5);
    --ds-shadow-xl: 0 8px 16px rgba(0, 0, 0, 0.6);
  }
}
```

- [ ] **Step 5: Create `src/tokens/radii.css`**

```css
/* Design System - Border Radius Tokens */

@layer base {
  :root {
    --ds-radius-none: 0px;
    --ds-radius-sm: 2px;
    --ds-radius-md: 4px;
    --ds-radius-lg: 6px;
    --ds-radius-xl: 8px;
  }
}
```

- [ ] **Step 6: Create `src/tokens/transitions.css`**

```css
/* Design System - Transition Tokens */

@layer base {
  :root {
    --ds-transition-fast: 100ms;
    --ds-transition-base: 150ms;
    --ds-transition-slow: 250ms;
  }
}
```

- [ ] **Step 7: Create `src/tokens/index.css`**

```css
/* Design System - All Tokens */

@import './colors.css';
@import './spacing.css';
@import './typography.css';
@import './shadows.css';
@import './radii.css';
@import './transitions.css';
```

- [ ] **Step 8: Commit**

```bash
git add src/tokens/
git commit -m "refactor: extract CSS tokens into separate files

Split monolithic index.css into focused token files:
colors, spacing, typography, shadows, radii, transitions."
```

---

### Task 4: Extract utilities into separate files

**Files:**
- Create: `src/utilities/panel.css`
- Create: `src/utilities/glass.css`
- Create: `src/utilities/text.css`
- Create: `src/utilities/indicators.css`
- Create: `src/utilities/layout.css`
- Create: `src/utilities/scrollbar.css`
- Create: `src/utilities/interactive.css`
- Create: `src/utilities/index.css`

This task extracts lines 164-328 of the current `src/index.css`.

- [ ] **Step 1: Create `src/utilities/panel.css`**

```css
/* Design System - Panel Utilities */

@layer utilities {
  .ds-panel {
    background-color: var(--ds-surface);
    border: 1px solid var(--ds-border);
    border-radius: var(--ds-radius-md);
  }

  .ds-panel-accent {
    background-color: var(--ds-surface);
    border: 1px solid var(--ds-border);
    border-left: 2px solid var(--ds-primary);
    border-radius: var(--ds-radius-md);
  }
}
```

- [ ] **Step 2: Create `src/utilities/glass.css`**

```css
/* Design System - Glassmorphism Utility */

@layer utilities {
  .ds-glass {
    background: color-mix(in srgb, var(--ds-background) 70%, transparent);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}
```

- [ ] **Step 3: Create `src/utilities/text.css`**

```css
/* Design System - Text Utilities */

@layer utilities {
  .ds-text-glow {
    color: var(--ds-primary);
    text-shadow: 0 0 20px color-mix(in srgb, var(--ds-primary) 30%, transparent);
  }

  [data-theme='light'] .ds-text-glow {
    text-shadow: none;
  }

  .ds-mono {
    font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
  }

  .ds-sans {
    font-family: 'Inter', system-ui, sans-serif;
  }

  .ds-prefix::before {
    content: '> ';
    color: var(--ds-primary);
    font-weight: 600;
  }

  .ds-bracket::before {
    content: '[ ';
    color: var(--ds-text-muted);
  }

  .ds-bracket::after {
    content: ' ]';
    color: var(--ds-text-muted);
  }
}
```

- [ ] **Step 4: Create `src/utilities/indicators.css`**

```css
/* Design System - Dot Indicator Utilities */

@layer utilities {
  .ds-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--ds-text-muted);
  }

  .ds-dot-success { background-color: var(--ds-success); }
  .ds-dot-warning { background-color: var(--ds-warning); }
  .ds-dot-error { background-color: var(--ds-error); }
  .ds-dot-primary { background-color: var(--ds-primary); }
}
```

- [ ] **Step 5: Create `src/utilities/layout.css`**

```css
/* Design System - Layout Utilities */

@layer utilities {
  .ds-grid-bordered {
    border: 1px solid var(--ds-border);
    border-radius: var(--ds-radius-md);
    overflow: hidden;
  }

  .ds-grid-bordered > * {
    border-bottom: 1px solid var(--ds-border);
  }

  .ds-grid-bordered > *:last-child {
    border-bottom: none;
  }

  .ds-container {
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--ds-spacing-md);
    padding-right: var(--ds-spacing-md);
  }

  .ds-separator {
    height: 1px;
    background-color: var(--ds-border);
    border: none;
    margin: var(--ds-spacing-md) 0;
  }
}
```

- [ ] **Step 6: Create `src/utilities/scrollbar.css`**

```css
/* Design System - Scrollbar Utilities */

@layer utilities {
  .ds-custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  .ds-custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .ds-custom-scrollbar::-webkit-scrollbar-thumb {
    background: var(--ds-border);
    border-radius: 0;
  }

  .ds-custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: var(--ds-border-focus);
  }
}
```

- [ ] **Step 7: Create `src/utilities/interactive.css`**

```css
/* Design System - Interactive Utilities */

@layer utilities {
  .ds-kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    line-height: 1.4;
    color: var(--ds-text-muted);
    background-color: var(--ds-surface-alt);
    border: 1px solid var(--ds-border);
    border-radius: var(--ds-radius-sm);
  }

  .ds-row-hover {
    transition: background-color var(--ds-transition-fast) ease;
  }

  .ds-row-hover:hover {
    background-color: var(--ds-surface-alt);
  }

  .ds-cursor-blink::after {
    content: '|';
    animation: ds-blink 1s step-end infinite;
    color: var(--ds-primary);
    margin-left: 2px;
  }

  .ds-crt-glow {
    box-shadow: 0 0 10px 2px color-mix(in srgb, var(--ds-primary) 40%, transparent);
  }

  [data-theme='light'] .ds-crt-glow {
    box-shadow: 0 0 8px 1px color-mix(in srgb, var(--ds-primary) 30%, transparent);
  }
}
```

- [ ] **Step 8: Create `src/utilities/index.css`**

```css
/* Design System - All Utilities */

@import './panel.css';
@import './glass.css';
@import './text.css';
@import './indicators.css';
@import './layout.css';
@import './scrollbar.css';
@import './interactive.css';
```

- [ ] **Step 9: Commit**

```bash
git add src/utilities/
git commit -m "refactor: extract CSS utilities into separate files

Split utility classes into focused files:
panel, glass, text, indicators, layout, scrollbar, interactive."
```

---

### Task 5: Extract animations into separate files

**Files:**
- Create: `src/animations/fade.css`
- Create: `src/animations/slide.css`
- Create: `src/animations/effects.css`
- Create: `src/animations/index.css`

This task extracts lines 330-366 of the current `src/index.css`.

- [ ] **Step 1: Create `src/animations/fade.css`**

```css
/* Design System - Fade Animations */

@keyframes ds-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-ds-fade-in {
  animation: ds-fade-in var(--ds-transition-base) ease-out;
}
```

- [ ] **Step 2: Create `src/animations/slide.css`**

```css
/* Design System - Slide Animations */

@keyframes ds-slide-up {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes ds-slide-down {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-ds-slide-up {
  animation: ds-slide-up var(--ds-transition-slow) ease-out;
}

.animate-ds-slide-down {
  animation: ds-slide-down var(--ds-transition-slow) ease-out;
}
```

- [ ] **Step 3: Create `src/animations/effects.css`**

```css
/* Design System - Special Effect Animations */

@keyframes ds-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes ds-scan {
  0% { background-position: 0 0; }
  100% { background-position: 0 4px; }
}
```

- [ ] **Step 4: Create `src/animations/index.css`**

```css
/* Design System - All Animations */

@import './fade.css';
@import './slide.css';
@import './effects.css';
```

- [ ] **Step 5: Commit**

```bash
git add src/animations/
git commit -m "refactor: extract CSS animations into separate files

Split animations into fade, slide, and effects modules."
```

---

### Task 6: Create themes directory and base styles

**Files:**
- Create: `src/themes/dark.css`
- Create: `src/themes/light.css`

The color tokens already define the theme values via `:root` and `[data-theme='light']`. The theme files provide the base styles that depend on tokens (body background/color, selection, focus ring, border reset).

- [ ] **Step 1: Create `src/themes/dark.css`**

```css
/* Design System - Dark Theme Base (Default) */

@layer base {
  :root {
    color-scheme: dark;
  }

  * {
    border-color: var(--ds-border);
  }

  body {
    background-color: var(--ds-background);
    color: var(--ds-text);
    transition: background-color var(--ds-transition-base) ease,
                color var(--ds-transition-base) ease;
    overflow-x: hidden;
  }

  ::selection {
    background-color: var(--ds-primary);
    color: var(--ds-background);
  }

  :focus-visible {
    outline: 1px solid var(--ds-primary);
    outline-offset: 1px;
  }

  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
}
```

- [ ] **Step 2: Create `src/themes/light.css`**

```css
/* Design System - Light Theme Base */

@layer base {
  [data-theme='light'] {
    color-scheme: light;
  }
}
```

Note: Light theme color overrides are already in `src/tokens/colors.css` via the `[data-theme='light']` selector. This file only sets the `color-scheme` property. If additional light-specific base styles are needed later, they go here.

- [ ] **Step 3: Commit**

```bash
git add src/themes/
git commit -m "refactor: create theme base style files

Dark theme is the default. Light overrides color-scheme.
Color token overrides remain in tokens/colors.css."
```

---

### Task 7: Replace src/index.css with new entry point

**Files:**
- Modify: `src/index.css` (complete rewrite)

- [ ] **Step 1: Replace `src/index.css` with imports**

```css
/* @personal/design-system v0.2.0
 *
 * Framework-agnostic design tokens, utilities, and animations.
 * Import this file to get everything, or cherry-pick individual layers:
 *
 *   @import "@personal/design-system/tokens";
 *   @import "@personal/design-system/utilities";
 *   @import "@personal/design-system/animations";
 */

@import './tokens/index.css';
@import './themes/dark.css';
@import './themes/light.css';
@import './utilities/index.css';
@import './animations/index.css';
```

- [ ] **Step 2: Verify the file imports resolve correctly**

Open `src/index.css` and confirm all import paths exist:

```bash
for f in src/tokens/index.css src/themes/dark.css src/themes/light.css src/utilities/index.css src/animations/index.css; do
  [ -f "$f" ] && echo "OK: $f" || echo "MISSING: $f"
done
```

Expected: all 5 files report OK.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "refactor: replace monolithic index.css with layered imports

Entry point now composes tokens, themes, utilities, and animations
from separate modules."
```

---

### Task 8: Update package.json for CSS-only package

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Rewrite package.json**

```json
{
  "name": "@personal/design-system",
  "version": "0.2.0",
  "type": "module",
  "description": "Framework-agnostic design tokens, utilities, and animations",
  "exports": {
    ".": "./src/index.css",
    "./tokens": "./src/tokens/index.css",
    "./utilities": "./src/utilities/index.css",
    "./animations": "./src/animations/index.css",
    "./themes/dark": "./src/themes/dark.css",
    "./themes/light": "./src/themes/light.css",
    "./tailwind-plugin": {
      "types": "./dist/tailwind-plugin.d.ts",
      "import": "./dist/tailwind-plugin.js"
    }
  },
  "scripts": {
    "build": "tsc -p tsconfig.tailwind.json"
  },
  "devDependencies": {
    "typescript": "~5.9.3"
  },
  "files": [
    "src/",
    "dist/tailwind-plugin.js",
    "dist/tailwind-plugin.d.ts",
    "README.md"
  ]
}
```

Key changes:
- Removed `react`, `react-dom` peer dependencies
- Removed `clsx`, `lucide-react`, `tailwind-merge` runtime dependencies
- Removed `@vitejs/plugin-react`, `vite`, `vite-plugin-dts`, `@types/react*`, `eslint`, `tailwindcss` dev dependencies
- CSS exports point to `src/` directly (no build step for CSS -- bundlers handle `@import` natively)
- Only the Tailwind plugin needs a TypeScript build
- Version bumped to 0.2.0

- [ ] **Step 2: Commit**

```bash
git add package.json
git commit -m "refactor: strip package to CSS-only with optional Tailwind plugin

Removed all React/JS runtime dependencies.
CSS exports point to src/ directly.
Only the Tailwind plugin requires a build step."
```

---

### Task 9: Create minimal tsconfig for Tailwind plugin only

**Files:**
- Modify: `tsconfig.json` (rename to `tsconfig.tailwind.json`)
- Delete: `vite.config.ts`

- [ ] **Step 1: Create `tsconfig.tailwind.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationDir": "./dist",
    "outDir": "./dist",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": false
  },
  "include": ["src/tailwind-plugin.ts"]
}
```

- [ ] **Step 2: Remove old config files**

```bash
rm -f vite.config.ts tsconfig.json
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "refactor: replace Vite build with minimal tsc for Tailwind plugin

Vite and React build tooling removed. Only tsc compiles the
Tailwind plugin. CSS needs no build step."
```

---

### Task 10: Rebuild and verify

**Files:** None created -- verification only.

- [ ] **Step 1: Clean install dependencies**

```bash
rm -rf node_modules package-lock.json
npm install
```

Expected: only `typescript` is installed.

- [ ] **Step 2: Build the Tailwind plugin**

```bash
npm run build
```

Expected: `dist/tailwind-plugin.js` and `dist/tailwind-plugin.d.ts` are created. No errors.

- [ ] **Step 3: Verify all CSS files exist and import chains resolve**

```bash
for f in \
  src/index.css \
  src/tokens/index.css src/tokens/colors.css src/tokens/spacing.css \
  src/tokens/typography.css src/tokens/shadows.css src/tokens/radii.css \
  src/tokens/transitions.css \
  src/utilities/index.css src/utilities/panel.css src/utilities/glass.css \
  src/utilities/text.css src/utilities/indicators.css src/utilities/layout.css \
  src/utilities/scrollbar.css src/utilities/interactive.css \
  src/animations/index.css src/animations/fade.css src/animations/slide.css \
  src/animations/effects.css \
  src/themes/dark.css src/themes/light.css \
  dist/tailwind-plugin.js dist/tailwind-plugin.d.ts; do
  [ -f "$f" ] && echo "OK: $f" || echo "MISSING: $f"
done
```

Expected: all files report OK.

- [ ] **Step 4: Verify no React/JS artifacts remain in src/**

```bash
find src/ -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v tailwind-plugin
```

Expected: no output (only `src/tailwind-plugin.ts` should exist as a TS file).

- [ ] **Step 5: Commit build artifacts tracking update**

```bash
git add -A
git commit -m "chore: verify build and clean install"
```

---

### Task 11: Update README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Rewrite README.md**

```markdown
# @personal/design-system

Framework-agnostic design tokens, CSS utilities, and animations for personal projects.

Pure CSS. No JavaScript runtime. Works with React, Vue, Svelte, plain HTML, or anything that can import a CSS file.

## Install

```bash
npm install @personal/design-system
```

Or use a local path:

```json
{
  "dependencies": {
    "@personal/design-system": "file:../design-system"
  }
}
```

## Usage

### Import everything

```css
@import "@personal/design-system";
```

Or in a JS/TS entry point:

```js
import "@personal/design-system";
```

### Cherry-pick layers

```css
@import "@personal/design-system/tokens";
@import "@personal/design-system/utilities";
@import "@personal/design-system/animations";
```

### With Tailwind CSS

```js
import designSystemPlugin from "@personal/design-system/tailwind-plugin";

export default {
  plugins: [designSystemPlugin()],
};
```

## Tokens

All tokens are CSS custom properties prefixed with `--ds-`.

### Colors

| Token | Dark | Light |
|---|---|---|
| `--ds-background` | `#0a0a0a` | `#fafafa` |
| `--ds-surface` | `#111111` | `#ffffff` |
| `--ds-surface-alt` | `#1a1a1a` | `#f0f0f0` |
| `--ds-text` | `#e0e0e0` | `#1a1a1a` |
| `--ds-text-muted` | `#808080` | `#737373` |
| `--ds-primary` | `#00e5ff` | `#0077b6` |
| `--ds-secondary` | `#b388ff` | `#7c3aed` |
| `--ds-border` | `#2a2a2a` | `#d4d4d4` |
| `--ds-success` | `#00ff88` | `#047857` |
| `--ds-warning` | `#ffcc00` | `#b45309` |
| `--ds-error` | `#ff3366` | `#dc2626` |
| `--ds-info` | `#00b4d8` | `#0284c7` |

### Spacing

| Token | Value |
|---|---|
| `--ds-spacing-xs` | 0.25rem |
| `--ds-spacing-sm` | 0.5rem |
| `--ds-spacing-md` | 0.75rem |
| `--ds-spacing-lg` | 1rem |
| `--ds-spacing-xl` | 1.5rem |
| `--ds-spacing-2xl` | 2rem |

### Border Radius

| Token | Value |
|---|---|
| `--ds-radius-none` | 0px |
| `--ds-radius-sm` | 2px |
| `--ds-radius-md` | 4px |
| `--ds-radius-lg` | 6px |
| `--ds-radius-xl` | 8px |

## Utility Classes

| Class | Description |
|---|---|
| `ds-panel` | Surface background + border + rounded corners |
| `ds-panel-accent` | Panel with primary-colored left border |
| `ds-glass` | Glassmorphism (70% bg + backdrop blur) |
| `ds-text-glow` | Primary color with glow text-shadow |
| `ds-mono` | Monospace font stack |
| `ds-sans` | Sans-serif font stack |
| `ds-prefix` | Terminal-style `> ` prefix |
| `ds-bracket` | Wraps content in `[ ]` |
| `ds-dot` | 6px status dot (variants: `-success`, `-warning`, `-error`, `-primary`) |
| `ds-crt-glow` | CRT-style box glow |
| `ds-grid-bordered` | Container with bordered children |
| `ds-container` | Centered max-width container |
| `ds-custom-scrollbar` | Minimal 4px scrollbar |
| `ds-separator` | 1px horizontal divider |
| `ds-kbd` | Keyboard shortcut display |
| `ds-row-hover` | Row highlight on hover |
| `ds-cursor-blink` | Blinking cursor `|` |

## Animations

| Class | Effect |
|---|---|
| `animate-ds-fade-in` | Fade in (150ms) |
| `animate-ds-slide-up` | Slide up + fade in (250ms) |
| `animate-ds-slide-down` | Slide down + fade in (250ms) |

## Themes

Dark is the default. Toggle light mode by setting `data-theme="light"` on the root element:

```js
document.documentElement.setAttribute('data-theme', 'light');
```

## Architecture

See [ADR-001](docs/adr/001-css-pure-framework-agnostic.md) for the decision to adopt a CSS-pure architecture.

## License

MIT
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: rewrite README for CSS-pure architecture"
```

---

### Task 12: Add ADR and spec docs

**Files:**
- Add: `docs/adr/001-css-pure-framework-agnostic.md` (already created)
- Add: `docs/superpowers/specs/2025-04-21-css-pure-design-system-design.md` (already created)

- [ ] **Step 1: Stage and commit docs**

```bash
git add docs/
git commit -m "docs: add ADR-001 and design spec for CSS-pure refactor"
```

---

### Task 13: Push to GitHub

**Files:** None -- git operations only.

- [ ] **Step 1: Add remote**

```bash
git remote add origin git@github.com:joivo/design-system.git
```

- [ ] **Step 2: Verify remote**

```bash
git remote -v
```

Expected:
```
origin  git@github.com:joivo/design-system.git (fetch)
origin  git@github.com:joivo/design-system.git (push)
```

- [ ] **Step 3: Push to GitHub**

```bash
git push -u origin main
```

Expected: successful push, branch `main` tracking `origin/main`.

- [ ] **Step 4: Verify**

```bash
git status
git log --oneline
```

Expected: clean working tree, all commits visible, branch tracking remote.
