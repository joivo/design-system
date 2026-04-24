# Brutalist Shore Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the design system from "Deep Sea Terminal" (v0.3.0) to "Brutalist Shore" (v0.4.0) with a two-axis theme system, full monospace typography, border-only layout, and ASCII breathing waves.

**Architecture:** CSS-only changes to token values, utility classes, and animations. No build system changes. Two-axis theming via `data-theme` (light/dark) + `data-surf` attribute (warm/neutral). All `--ds-*` token names stable; only values change.

**Tech Stack:** Pure CSS (custom properties, @layer, @keyframes). No JS. No build dependencies.

**Spec:** `docs/superpowers/specs/2026-04-23-brutalist-shore-design.md`

---

## File Map

### Modified Files

| File | Change |
|---|---|
| `src/tokens/colors.css` | Replace all color values, add `[data-surf]` axis |
| `src/tokens/typography.css` | Switch from Inter to JetBrains Mono everywhere |
| `src/tokens/radii.css` | Set all radii to 0 |
| `src/tokens/shadows.css` | Set all shadows to none |
| `src/utilities/index.css` | Remove panel/glass/waves imports, add nav-bracket/ascii-waves |
| `src/utilities/text.css` | Remove ds-text-glow and ds-sans, keep ds-bracket/ds-prefix/ds-mono |
| `src/utilities/indicators.css` | Remove ds-bioluminescent |
| `src/utilities/interactive.css` | Remove ds-crt-glow, update ds-kbd (no radius) |
| `src/utilities/buttons.css` | Brutalist redesign (no radius, solid fills, visible borders) |
| `src/utilities/forms.css` | Brutalist redesign (no radius, stronger focus) |
| `src/utilities/tables.css` | Remove radius, update header bg |
| `src/utilities/segmented.css` | Remove radius, solid active state |
| `src/utilities/layout.css` | No changes needed (already border-based) |
| `src/utilities/scrollbar.css` | No changes needed |
| `src/animations/effects.css` | Remove ds-scan, add ds-breathe-drift keyframes |
| `src/index.css` | Update version comment |
| `DESIGN.md` | Update to match v0.4.0 tokens and identity |
| `package.json` | Bump version to 0.4.0 |

### Deleted Files

| File | Reason |
|---|---|
| `src/utilities/panel.css` | Panels removed in brutalist direction |
| `src/utilities/glass.css` | Glassmorphism removed |
| `src/utilities/waves.css` | Pixel waves replaced by ASCII waves |

### New Files

| File | Purpose |
|---|---|
| `src/utilities/nav-bracket.css` | Bracket navigation pattern `[LINK] [LINK]` |
| `src/utilities/ascii-waves.css` | Breathing drift ASCII wave animation |

---

### Task 1: Color Tokens -- Two-Axis Theme System

**Files:**
- Modify: `src/tokens/colors.css`

- [ ] **Step 1: Replace colors.css with four-combo system**

Replace the entire contents of `src/tokens/colors.css` with:

```css
/* Design System - Color Tokens (Brutalist Shore v0.4.0) */

@layer base {
  /* Dark + Neutral (default) */
  :root {
    --ds-background: #000000;
    --ds-surface: #000000;
    --ds-surface-alt: #000000;
    --ds-text: #e0e0e0;
    --ds-text-muted: #999999;
    --ds-primary: #ffffff;
    --ds-secondary: #cccccc;
    --ds-border: #555555;
    --ds-border-focus: #ffffff;
    --ds-success: #4caf7d;
    --ds-warning: #d4a030;
    --ds-error: #cf5555;
    --ds-info: #5a9ec4;

    --ds-income: #4caf7d;
    --ds-expense: #cf5555;

    --ds-github-contrib-none: #161b22;
    --ds-github-contrib-low: #0e4429;
    --ds-github-contrib-medium: #006d32;
    --ds-github-contrib-high: #26a641;
    --ds-github-contrib-very-high: #39d353;

    --ds-chart-1: #ffffff;
    --ds-chart-2: #4caf7d;
    --ds-chart-3: #d4a030;
    --ds-chart-4: #cf5555;
    --ds-chart-5: #cccccc;
    --ds-chart-6: #c47a50;
    --ds-chart-7: #8a6aaa;
    --ds-chart-8: #667580;
    --ds-chart-9: #5a9eaa;
    --ds-chart-10: #7a9a65;
  }

  /* Dark + Surf */
  :root[data-surf],
  [data-surf] {
    --ds-primary: #d4b483;
    --ds-secondary: #b89a6a;
    --ds-text-muted: #8a8580;
    --ds-border: #3d3833;
    --ds-border-focus: #d4b483;
    --ds-chart-1: #d4b483;
    --ds-chart-5: #b89a6a;
  }

  /* Light + Neutral */
  [data-theme='light'] {
    --ds-background: #ffffff;
    --ds-surface: #ffffff;
    --ds-surface-alt: #ffffff;
    --ds-text: #1a1a1a;
    --ds-text-muted: #666666;
    --ds-primary: #000000;
    --ds-secondary: #333333;
    --ds-border: #999999;
    --ds-border-focus: #000000;
    --ds-success: #2e7d32;
    --ds-warning: #f57f17;
    --ds-error: #c62828;
    --ds-info: #0277bd;
    --ds-income: #2e7d32;
    --ds-expense: #c62828;

    --ds-github-contrib-none: #ebedf0;
    --ds-github-contrib-low: #9be9a8;
    --ds-github-contrib-medium: #40c463;
    --ds-github-contrib-high: #30a14e;
    --ds-github-contrib-very-high: #216e39;

    --ds-chart-1: #000000;
    --ds-chart-2: #2e7d32;
    --ds-chart-3: #f57f17;
    --ds-chart-4: #c62828;
    --ds-chart-5: #333333;
    --ds-chart-6: #e65100;
    --ds-chart-7: #7b1fa2;
    --ds-chart-8: #546e7a;
    --ds-chart-9: #00838f;
    --ds-chart-10: #558b2f;
  }

  /* Light + Surf */
  [data-theme='light'][data-surf] {
    --ds-background: #faf6f0;
    --ds-surface: #faf6f0;
    --ds-surface-alt: #faf6f0;
    --ds-text: #1a1a1a;
    --ds-text-muted: #6b6560;
    --ds-primary: #8b6914;
    --ds-secondary: #6b5010;
    --ds-border: #b5a48a;
    --ds-border-focus: #8b6914;
    --ds-chart-1: #8b6914;
    --ds-chart-5: #6b5010;
  }
}
```

- [ ] **Step 2: Lint**

Run: `npx stylelint src/tokens/colors.css`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/tokens/colors.css
git commit -m "feat(tokens): replace color palette with two-axis brutalist shore system"
```

---

### Task 2: Typography -- Full Monospace

**Files:**
- Modify: `src/tokens/typography.css`

- [ ] **Step 1: Replace typography.css**

Replace the entire contents of `src/tokens/typography.css` with:

```css
/* Design System - Typography Tokens (Brutalist Shore v0.4.0) */

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

@layer base {
  body {
    font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
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
    font-size: 14px;
  }
}
```

- [ ] **Step 2: Lint**

Run: `npx stylelint src/tokens/typography.css`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/tokens/typography.css
git commit -m "feat(tokens): switch to full monospace typography (JetBrains Mono)"
```

---

### Task 3: Radii and Shadows -- Zero Everything

**Files:**
- Modify: `src/tokens/radii.css`
- Modify: `src/tokens/shadows.css`

- [ ] **Step 1: Set all radii to 0**

Replace the entire contents of `src/tokens/radii.css` with:

```css
/* Design System - Border Radius Tokens (Brutalist Shore v0.4.0) */

@layer base {
  :root {
    --ds-radius-none: 0px;
    --ds-radius-sm: 0px;
    --ds-radius-md: 0px;
    --ds-radius-lg: 0px;
    --ds-radius-xl: 0px;
  }
}
```

- [ ] **Step 2: Set all shadows to none**

Replace the entire contents of `src/tokens/shadows.css` with:

```css
/* Design System - Shadow Tokens (Brutalist Shore v0.4.0) */

@layer base {
  :root {
    --ds-shadow-sm: none;
    --ds-shadow-md: none;
    --ds-shadow-lg: none;
    --ds-shadow-xl: none;
  }
}
```

- [ ] **Step 3: Lint**

Run: `npx stylelint src/tokens/radii.css src/tokens/shadows.css`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/tokens/radii.css src/tokens/shadows.css
git commit -m "feat(tokens): zero all radii and shadows for brutalist aesthetic"
```

---

### Task 4: Delete Removed Utilities + Update Index

**Files:**
- Delete: `src/utilities/panel.css`
- Delete: `src/utilities/glass.css`
- Delete: `src/utilities/waves.css`
- Modify: `src/utilities/index.css`

- [ ] **Step 1: Delete panel.css, glass.css, waves.css**

```bash
rm src/utilities/panel.css src/utilities/glass.css src/utilities/waves.css
```

- [ ] **Step 2: Update utilities/index.css**

Replace contents with:

```css
/* Design System - All Utilities (Brutalist Shore v0.4.0) */

@import './text.css';
@import './indicators.css';
@import './layout.css';
@import './scrollbar.css';
@import './interactive.css';
@import './forms.css';
@import './buttons.css';
@import './tables.css';
@import './segmented.css';
@import './nav-bracket.css';
@import './ascii-waves.css';
```

- [ ] **Step 3: Commit**

```bash
git add -A src/utilities/
git commit -m "refactor(utilities): remove panel/glass/pixel-waves, update index"
```

---

### Task 5: Update Text Utilities

**Files:**
- Modify: `src/utilities/text.css`

- [ ] **Step 1: Replace text.css**

Remove `ds-text-glow` and `ds-sans`. Keep `ds-mono`, `ds-prefix`, `ds-bracket`:

```css
/* Design System - Text Utilities (Brutalist Shore v0.4.0) */

@layer utilities {
  .ds-mono {
    font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
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

- [ ] **Step 2: Commit**

```bash
git add src/utilities/text.css
git commit -m "refactor(utilities): remove ds-text-glow and ds-sans"
```

---

### Task 6: Update Indicators and Interactive Utilities

**Files:**
- Modify: `src/utilities/indicators.css`
- Modify: `src/utilities/interactive.css`

- [ ] **Step 1: Remove ds-bioluminescent from indicators.css**

Keep only `ds-dot` and its color variants. Remove the entire `.ds-bioluminescent` block and its `[data-theme='light']` override (lines 17-37 in current file).

- [ ] **Step 2: Update interactive.css**

Remove `ds-crt-glow` and its light theme override. Update `ds-kbd` to use `--ds-background` instead of `--ds-surface-alt` for bg. Remove `border-radius` reference (radii are already 0 via tokens). Keep `ds-row-hover`, `ds-cursor-blink` as-is.

```css
/* Design System - Interactive Utilities (Brutalist Shore v0.4.0) */

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
    background-color: var(--ds-background);
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
}
```

- [ ] **Step 3: Commit**

```bash
git add src/utilities/indicators.css src/utilities/interactive.css
git commit -m "refactor(utilities): remove bioluminescent and crt-glow"
```

---

### Task 7: Brutalist Form Redesign

**Files:**
- Modify: `src/utilities/buttons.css`
- Modify: `src/utilities/forms.css`
- Modify: `src/utilities/tables.css`
- Modify: `src/utilities/segmented.css`

- [ ] **Step 1: Replace buttons.css**

```css
/* Design System - Button Utilities (Brutalist Shore v0.4.0) */

@layer utilities {
  .ds-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--ds-spacing-xs);
    padding: var(--ds-spacing-sm) var(--ds-spacing-md);
    border: 1px solid var(--ds-border);
    border-radius: var(--ds-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    font-family: inherit;
    line-height: 1.5;
    color: var(--ds-text);
    background: var(--ds-background);
    cursor: pointer;
    user-select: none;
  }

  .ds-btn:hover { border-color: var(--ds-primary); }
  .ds-btn:active { transform: translateY(1px); }
  .ds-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  .ds-btn--primary {
    background: var(--ds-primary);
    border-color: var(--ds-primary);
    color: var(--ds-background);
  }
  .ds-btn--primary:hover { opacity: 0.85; }

  .ds-btn--secondary {
    background: transparent;
    border-color: var(--ds-primary);
    color: var(--ds-primary);
  }
  .ds-btn--secondary:hover { background: var(--ds-primary); color: var(--ds-background); }

  .ds-btn--ghost {
    background: transparent;
    border-color: transparent;
    color: var(--ds-text-muted);
  }
  .ds-btn--ghost:hover { border-color: var(--ds-border); color: var(--ds-text); }

  .ds-btn--danger {
    background: transparent;
    border-color: var(--ds-error);
    color: var(--ds-error);
  }
  .ds-btn--danger:hover { background: var(--ds-error); color: var(--ds-background); }

  .ds-btn--icon {
    padding: var(--ds-spacing-sm);
    min-width: unset;
    aspect-ratio: 1;
  }
}
```

- [ ] **Step 2: Commit buttons**

```bash
git add src/utilities/buttons.css
git commit -m "feat(utilities): brutalist button redesign"
```

- [ ] **Step 3: Replace forms.css**

```css
/* Design System - Form Utilities (Brutalist Shore v0.4.0) */

@layer utilities {
  .ds-input {
    display: block;
    width: 100%;
    padding: var(--ds-spacing-sm) var(--ds-spacing-md);
    background: var(--ds-background);
    border: 1px solid var(--ds-border);
    border-radius: var(--ds-radius-md);
    color: var(--ds-text);
    font-size: 0.875rem;
    font-family: inherit;
    line-height: 1.5;
    outline: none;
  }
  .ds-input::placeholder { color: var(--ds-text-muted); }
  .ds-input:focus { border-color: var(--ds-primary); box-shadow: 0 0 0 1px var(--ds-primary); }
  .ds-input:disabled { opacity: 0.5; cursor: not-allowed; }
  .ds-input--sm { padding: var(--ds-spacing-xs) var(--ds-spacing-sm); font-size: 0.8125rem; }

  .ds-select {
    appearance: none;
    padding-right: var(--ds-spacing-xl);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right var(--ds-spacing-sm) center;
    background-size: 1rem;
    cursor: pointer;
  }

  .ds-field { display: flex; flex-direction: column; gap: var(--ds-spacing-xs); }
  .ds-field__label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ds-text-muted); }
  .ds-field__hint { font-size: 0.6875rem; color: var(--ds-text-muted); line-height: 1.4; }
}
```

- [ ] **Step 4: Commit forms**

```bash
git add src/utilities/forms.css
git commit -m "feat(utilities): brutalist form redesign"
```

- [ ] **Step 5: Update tables.css -- remove radius, use background token for th**

Change `border-radius: var(--ds-radius-md);` to `border-radius: var(--ds-radius-md);` (already 0 via tokens) and change `background: var(--ds-surface-alt);` on `th` to `background: var(--ds-background);`.

- [ ] **Step 6: Update segmented.css -- remove bg, solid active**

Replace contents with:

```css
/* Design System - Segmented Control (Brutalist Shore v0.4.0) */

@layer utilities {
  .ds-segmented {
    display: inline-flex;
    border: 1px solid var(--ds-border);
    border-radius: var(--ds-radius-md);
    background: var(--ds-background);
  }

  .ds-segmented__btn {
    padding: var(--ds-spacing-xs) var(--ds-spacing-md);
    border: none;
    border-right: 1px solid var(--ds-border);
    background: transparent;
    color: var(--ds-text-muted);
    font-size: 0.8125rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
  }
  .ds-segmented__btn:last-child { border-right: none; }
  .ds-segmented__btn:hover { color: var(--ds-text); }

  .ds-segmented__btn.is-active,
  .ds-segmented__btn[aria-pressed="true"] {
    background: var(--ds-primary);
    color: var(--ds-background);
  }
}
```

- [ ] **Step 7: Commit tables + segmented**

```bash
git add src/utilities/tables.css src/utilities/segmented.css
git commit -m "feat(utilities): brutalist tables and segmented redesign"
```

---

### Task 8: New Utility -- ds-nav-bracket

**Files:**
- Create: `src/utilities/nav-bracket.css`

- [ ] **Step 1: Create nav-bracket.css**

```css
/* Design System - Bracket Navigation (Brutalist Shore v0.4.0) */

@layer utilities {
  .ds-nav-bracket {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0;
    font-family: 'JetBrains Mono', monospace;
  }

  .ds-nav-bracket a,
  .ds-nav-bracket button {
    color: var(--ds-text);
    text-decoration: none;
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    padding: 0;
  }

  .ds-nav-bracket a::before,
  .ds-nav-bracket button::before {
    content: '[';
    color: var(--ds-text-muted);
    margin-right: 0.25em;
  }

  .ds-nav-bracket a::after,
  .ds-nav-bracket button::after {
    content: ']';
    color: var(--ds-text-muted);
    margin-left: 0.25em;
  }

  .ds-nav-bracket a:hover,
  .ds-nav-bracket button:hover {
    color: var(--ds-primary);
    text-decoration: underline;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/utilities/nav-bracket.css
git commit -m "feat(utilities): add ds-nav-bracket for bracket navigation pattern"
```

---

### Task 9: New Utility -- ds-ascii-waves

**Files:**
- Create: `src/utilities/ascii-waves.css`

- [ ] **Step 1: Create ascii-waves.css**

```css
/* Design System - ASCII Wave Texture (Brutalist Shore v0.4.0) */

@layer utilities {
  .ds-ascii-waves {
    overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 1.3;
    white-space: pre;
    padding: 0;
    color: var(--ds-primary);
  }

  .ds-ascii-waves span {
    display: block;
    width: 200%;
    white-space: nowrap;
    will-change: transform, opacity;
  }

  .ds-ascii-waves span:nth-child(1) { animation: ds-breathe-drift-1 10s ease-in-out infinite; }
  .ds-ascii-waves span:nth-child(2) { animation: ds-breathe-drift-2 13s ease-in-out infinite; }
  .ds-ascii-waves span:nth-child(3) { animation: ds-breathe-drift-3 9s ease-in-out infinite; }
  .ds-ascii-waves span:nth-child(4) { animation: ds-breathe-drift-4 11s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .ds-ascii-waves span {
      animation: none !important;
      opacity: 1;
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/utilities/ascii-waves.css
git commit -m "feat(utilities): add ds-ascii-waves with breathing drift animation"
```

---

### Task 10: Update Animations

**Files:**
- Modify: `src/animations/effects.css`

- [ ] **Step 1: Replace effects.css**

Remove `ds-scan`, add 4 breathing drift keyframes:

```css
/* Design System - Effect Animations (Brutalist Shore v0.4.0) */

@keyframes ds-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes ds-breathe-drift-1 {
  0%, 100% { transform: translateX(0); opacity: 0.9; }
  15% { opacity: 0.3; }
  35% { transform: translateX(-3%); opacity: 0.85; }
  50% { transform: translateX(-5%); opacity: 0.3; }
  65% { transform: translateX(-3%); opacity: 0.85; }
  85% { opacity: 0.3; }
}

@keyframes ds-breathe-drift-2 {
  0%, 100% { transform: translateX(0); opacity: 0.35; }
  20% { opacity: 0.9; }
  40% { transform: translateX(2%); opacity: 0.35; }
  60% { transform: translateX(3%); opacity: 0.9; }
  80% { transform: translateX(2%); opacity: 0.35; }
}

@keyframes ds-breathe-drift-3 {
  0%, 100% { transform: translateX(0); opacity: 0.7; }
  25% { opacity: 0.25; }
  50% { transform: translateX(-4%); opacity: 0.8; }
  75% { opacity: 0.25; }
}

@keyframes ds-breathe-drift-4 {
  0%, 100% { transform: translateX(0); opacity: 0.4; }
  20% { opacity: 0.95; }
  50% { transform: translateX(2%); opacity: 0.4; }
  80% { opacity: 0.95; }
}
```

- [ ] **Step 2: Remove ds-wave-drift from waves.css (already deleted in Task 4)**

No action needed -- `waves.css` was deleted in Task 4.

- [ ] **Step 3: Commit**

```bash
git add src/animations/effects.css
git commit -m "feat(animations): add breathing drift keyframes, remove ds-scan"
```

---

### Task 11: Update Entry Point and Package Version

**Files:**
- Modify: `src/index.css`
- Modify: `package.json`

- [ ] **Step 1: Update src/index.css comment**

Change the version comment from `v0.2.0` to `v0.4.0` and package name from `@personal` to `@joivo`.

- [ ] **Step 2: Bump package.json version to 0.4.0**

Change `"version": "0.2.0"` to `"version": "0.4.0"`.

- [ ] **Step 3: Commit**

```bash
git add src/index.css package.json
git commit -m "chore: bump version to 0.4.0 (Brutalist Shore)"
```

---

### Task 12: Update Showcase and DESIGN.md

**Files:**
- Modify: `DESIGN.md`
- Modify: `showcase.html`

- [ ] **Step 1: Update DESIGN.md YAML frontmatter to match new token values**

Update the color values in the YAML to match dark-neutral defaults. Update typography to JetBrains Mono. Add `data-surf` axis documentation.

- [ ] **Step 2: Update showcase.html to demonstrate all 4 theme combos**

Add a theme switcher with 4 buttons (dark-neutral, dark-surf, light-neutral, light-surf). Replace any ds-panel/ds-glass demos with border-based layout. Add ds-nav-bracket and ds-ascii-waves sections.

- [ ] **Step 3: Run full lint**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add DESIGN.md showcase.html
git commit -m "docs: update DESIGN.md and showcase for Brutalist Shore v0.4.0"
```

---

### Task 13: Tag Release

- [ ] **Step 1: Delete stale v0.3.0 tag if it conflicts**

```bash
git tag -d v0.3.0
git push origin :refs/tags/v0.3.0
```

- [ ] **Step 2: Tag v0.4.0**

```bash
git tag v0.4.0
git push origin main --tags
```
