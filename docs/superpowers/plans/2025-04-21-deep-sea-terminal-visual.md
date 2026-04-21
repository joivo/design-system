# Deep Sea Terminal Visual Identity - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the "Deep Sea Terminal" visual identity to the design system -- new color palette (Night Dive / Day Beach), updated typography (sans body + mono accents), pixel wave texture utility, and refined glow effects.

**Architecture:** Update existing CSS token files with new color values, modify typography base styles, add new utility classes, and update the dev server showcase to verify all changes visually.

**Tech Stack:** Pure CSS (custom properties, `@layer`, `@import`)

**Working directory:** `/Users/emanuel.martins/Projects/personal/design-system`

---

### Task 1: Update color tokens -- Night Dive dark palette

**Files:**
- Modify: `src/tokens/colors.css:3-38` (`:root` block)

- [ ] **Step 1: Replace the `:root` color values**

Replace the entire `:root` block inside `@layer base` with:

```css
@layer base {
  :root {
    /* Dark Theme: Night Dive */
    --ds-background: #0a1520;
    --ds-surface: #152838;
    --ds-surface-alt: #102030;
    --ds-text: #b0c4d4;
    --ds-text-muted: #3a6a80;
    --ds-primary: #00bcd4;
    --ds-secondary: #80cbc4;
    --ds-border: #264a60;
    --ds-border-focus: #3a6a80;
    --ds-success: #00e676;
    --ds-warning: #ffc107;
    --ds-error: #ff5252;
    --ds-info: #29b6f6;

    /* Semantic finance colors */
    --ds-income: #00e676;
    --ds-expense: #ff5252;

    /* GitHub contribution colors */
    --ds-github-contrib-none: #161b22;
    --ds-github-contrib-low: #0e4429;
    --ds-github-contrib-medium: #006d32;
    --ds-github-contrib-high: #26a641;
    --ds-github-contrib-very-high: #39d353;

    /* Chart palette */
    --ds-chart-1: #00bcd4;
    --ds-chart-2: #00e676;
    --ds-chart-3: #ffc107;
    --ds-chart-4: #ff5252;
    --ds-chart-5: #80cbc4;
    --ds-chart-6: #ff8a50;
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/tokens/colors.css
git commit -m "style: apply Night Dive dark palette

Twilight Zone depths: #0a1520 base, bioluminescent teal primary,
seafoam secondary, ocean-depth borders."
```

---

### Task 2: Update color tokens -- Day Beach light palette

**Files:**
- Modify: `src/tokens/colors.css:40-70` (`[data-theme='light']` block)

- [ ] **Step 1: Replace the light theme color values**

Replace the entire `[data-theme='light']` block with:

```css
  [data-theme='light'] {
    /* Light Theme: Day Beach */
    --ds-background: #faf6f0;
    --ds-surface: #ffffff;
    --ds-surface-alt: #f0e8d8;
    --ds-text: #2c3e50;
    --ds-text-muted: #8a9aaa;
    --ds-primary: #0077a8;
    --ds-secondary: #5ba4b5;
    --ds-border: #e0d4b8;
    --ds-border-focus: #c4b896;
    --ds-success: #2e7d32;
    --ds-warning: #f57f17;
    --ds-error: #c62828;
    --ds-info: #0277bd;

    --ds-income: #2e7d32;
    --ds-expense: #c62828;

    /* GitHub contribution colors -- unchanged */
    --ds-github-contrib-none: #ebedf0;
    --ds-github-contrib-low: #9be9a8;
    --ds-github-contrib-medium: #40c463;
    --ds-github-contrib-high: #30a14e;
    --ds-github-contrib-very-high: #216e39;

    --ds-chart-1: #0077a8;
    --ds-chart-2: #2e7d32;
    --ds-chart-3: #f57f17;
    --ds-chart-4: #c62828;
    --ds-chart-5: #5ba4b5;
    --ds-chart-6: #e65100;
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/tokens/colors.css
git commit -m "style: apply Day Beach light palette

Sunlit parchment shore: warm sand backgrounds, ocean blue primary,
shell/driftwood borders."
```

---

### Task 3: Update typography -- sans body + mono accents

**Files:**
- Modify: `src/tokens/typography.css` (complete rewrite)

- [ ] **Step 1: Replace typography.css**

```css
/* Design System - Typography Tokens & Base Styles */

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

@layer base {
  body {
    font-family: 'Inter', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
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
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 14px;
  }
}
```

Key changes:
- Body: `JetBrains Mono 13px` -> `Inter 15px`
- Form inputs: `JetBrains Mono 13px` -> `Inter 14px`
- Headings: unchanged (already Inter)
- Google Fonts import: unchanged (still loads both fonts for `.ds-mono` utility)

- [ ] **Step 2: Commit**

```bash
git add src/tokens/typography.css
git commit -m "style: switch body to Inter 15px, mono for accents only

Body and form inputs now use Inter for readability.
JetBrains Mono remains available via .ds-mono utility class."
```

---

### Task 4: Update glow effects -- subtle bioluminescence

**Files:**
- Modify: `src/utilities/text.css:4-11` (ds-text-glow rules)
- Modify: `src/utilities/interactive.css:33-39` (ds-crt-glow rules)

- [ ] **Step 1: Update ds-text-glow opacity from 30% to 20%**

In `src/utilities/text.css`, replace:

```css
  .ds-text-glow {
    color: var(--ds-primary);
    text-shadow: 0 0 20px color-mix(in srgb, var(--ds-primary) 30%, transparent);
  }
```

with:

```css
  .ds-text-glow {
    color: var(--ds-primary);
    text-shadow: 0 0 20px color-mix(in srgb, var(--ds-primary) 20%, transparent);
  }
```

- [ ] **Step 2: Update ds-crt-glow to subtle values**

In `src/utilities/interactive.css`, replace:

```css
  .ds-crt-glow {
    box-shadow: 0 0 10px 2px color-mix(in srgb, var(--ds-primary) 40%, transparent);
  }

  [data-theme='light'] .ds-crt-glow {
    box-shadow: 0 0 8px 1px color-mix(in srgb, var(--ds-primary) 30%, transparent);
  }
```

with:

```css
  .ds-crt-glow {
    box-shadow: 0 0 8px 1px color-mix(in srgb, var(--ds-primary) 15%, transparent);
  }

  [data-theme='light'] .ds-crt-glow {
    box-shadow: 0 0 4px 0 color-mix(in srgb, var(--ds-primary) 10%, transparent);
  }
```

- [ ] **Step 3: Commit**

```bash
git add src/utilities/text.css src/utilities/interactive.css
git commit -m "style: reduce glow to subtle bioluminescence (20-30%)

ds-text-glow: 30% -> 20% opacity
ds-crt-glow: 40% -> 15% dark, 30% -> 10% light"
```

---

### Task 5: Add pixel waves utility

**Files:**
- Create: `src/utilities/waves.css`
- Modify: `src/utilities/index.css`

- [ ] **Step 1: Create `src/utilities/waves.css`**

```css
/* Design System - Pixel Wave Texture */

@layer utilities {
  .ds-pixel-waves {
    position: relative;
  }

  .ds-pixel-waves::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    pointer-events: none;
    background-image:
      linear-gradient(to right,
        transparent 0px, transparent 8px,
        color-mix(in srgb, var(--ds-primary) 6%, transparent) 8px,
        color-mix(in srgb, var(--ds-primary) 6%, transparent) 16px,
        transparent 16px, transparent 24px,
        color-mix(in srgb, var(--ds-primary) 4%, transparent) 24px,
        color-mix(in srgb, var(--ds-primary) 4%, transparent) 32px
      );
    background-size: 32px 8px;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='120'%3E%3Cpath d='M0,80 Q80,40 160,60 Q240,80 320,50 Q400,20 480,55 Q560,90 640,70 L640,120 L0,120Z' fill='white'/%3E%3C/svg%3E");
    mask-size: 100% 100%;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='120'%3E%3Cpath d='M0,80 Q80,40 160,60 Q240,80 320,50 Q400,20 480,55 Q560,90 640,70 L640,120 L0,120Z' fill='white'/%3E%3C/svg%3E");
    -webkit-mask-size: 100% 100%;
  }

  [data-theme='light'] .ds-pixel-waves::after {
    background-image:
      linear-gradient(to right,
        transparent 0px, transparent 8px,
        color-mix(in srgb, var(--ds-primary) 8%, transparent) 8px,
        color-mix(in srgb, var(--ds-primary) 8%, transparent) 16px,
        transparent 16px, transparent 24px,
        color-mix(in srgb, var(--ds-primary) 5%, transparent) 24px,
        color-mix(in srgb, var(--ds-primary) 5%, transparent) 32px
      );
  }
}
```

- [ ] **Step 2: Add waves.css to utilities index**

In `src/utilities/index.css`, add the import after `interactive.css`:

```css
/* Design System - All Utilities */

@import './panel.css';
@import './glass.css';
@import './text.css';
@import './indicators.css';
@import './layout.css';
@import './scrollbar.css';
@import './interactive.css';
@import './waves.css';
```

- [ ] **Step 3: Commit**

```bash
git add src/utilities/waves.css src/utilities/index.css
git commit -m "feat: add ds-pixel-waves utility class

8px grid pixel art wave silhouette at element bottom.
Dark: 6% teal tint. Light: 8% ocean blue tint.
CSS-only, no JavaScript, no animation."
```

---

### Task 6: Add bioluminescent dot utility

**Files:**
- Modify: `src/utilities/indicators.css`

- [ ] **Step 1: Add ds-bioluminescent class**

In `src/utilities/indicators.css`, add after the `.ds-dot-primary` rule:

```css
  .ds-bioluminescent {
    position: relative;
  }

  .ds-bioluminescent::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--ds-primary);
    box-shadow: 0 0 6px color-mix(in srgb, var(--ds-primary) 30%, transparent);
    top: 4px;
    right: 4px;
    pointer-events: none;
  }

  [data-theme='light'] .ds-bioluminescent::after {
    box-shadow: none;
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/utilities/indicators.css
git commit -m "feat: add ds-bioluminescent decorative dot utility

4px accent dot with subtle glow in dark theme.
Light theme: solid dot, no glow (pebble on sand)."
```

---

### Task 7: Update dev server showcase

**Files:**
- Modify: `dev/main.js` (add pixel waves and bioluminescent demos)
- Modify: `dev/dev.css` (add pixel waves demo styles)

- [ ] **Step 1: Add pixel waves demo section in `dev/main.js`**

Find the `<!-- ANIMATIONS -->` section comment in the template literal and add the following section before it:

```html
  <!-- PIXEL WAVES -->
  <section class="dev-section">
    <h2 class="ds-prefix">Pixel Waves</h2>
    <div class="ds-pixel-waves" style="background: var(--ds-surface); border: 1px solid var(--ds-border); border-radius: var(--ds-radius-md); min-height: 200px; display: flex; align-items: center; justify-content: center; padding: var(--ds-spacing-lg);">
      <p style="color: var(--ds-text-muted);" class="ds-mono">.ds-pixel-waves -- 8px grid wave texture at bottom</p>
    </div>
  </section>

  <!-- BIOLUMINESCENT -->
  <section class="dev-section">
    <h2 class="ds-prefix">Bioluminescent</h2>
    <div class="dev-flex">
      <div class="ds-panel ds-bioluminescent" style="padding: var(--ds-spacing-lg); width: 200px;">
        <code>.ds-bioluminescent</code>
        <p style="color: var(--ds-text-muted); font-size: 11px; margin-top: 4px;">Decorative accent dot</p>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add dev/main.js
git commit -m "feat: add pixel waves and bioluminescent demos to dev server"
```

---

### Task 8: Update showcase.html

**Files:**
- Modify: `showcase.html`

- [ ] **Step 1: Add pixel waves section to showcase.html**

Find the `<!-- ANIMATIONS -->` comment and add before it:

```html
    <!-- PIXEL WAVES -->
    <section class="showcase-section">
      <h2>Pixel Waves</h2>
      <div class="ds-pixel-waves" style="background-color: var(--ds-surface); border: 1px solid var(--ds-border); border-radius: var(--ds-radius-md); min-height: 200px; display: flex; align-items: center; justify-content: center; padding: var(--ds-spacing-lg);">
        <p style="color: var(--ds-text-muted); font-family: 'JetBrains Mono', monospace; font-size: 11px;">.ds-pixel-waves</p>
      </div>
    </section>

    <!-- BIOLUMINESCENT -->
    <section class="showcase-section">
      <h2>Bioluminescent</h2>
      <div style="display: flex; gap: var(--ds-spacing-md);">
        <div class="ds-panel ds-bioluminescent" style="padding: var(--ds-spacing-lg); width: 200px;">
          <code style="font-size: 11px;">.ds-bioluminescent</code>
          <p style="color: var(--ds-text-muted); font-size: 11px; margin-top: 4px;">Accent dot with glow</p>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Commit**

```bash
git add showcase.html
git commit -m "feat: add pixel waves and bioluminescent demos to showcase"
```

---

### Task 9: Update Tailwind plugin with new token defaults

**Files:**
- Modify: `src/tailwind-plugin.ts` (no structural changes, just verify it still works)

The Tailwind plugin maps token names to `var(--ds-*)` references, not to hardcoded color values. Since we only changed values, not names, the plugin requires no code changes. This task verifies it still builds.

- [ ] **Step 1: Rebuild the Tailwind plugin**

```bash
npm run build
```

Expected: `dist/tailwind-plugin.js` and `dist/tailwind-plugin.d.ts` generated with no errors.

- [ ] **Step 2: Verify the built file references correct variable names**

```bash
grep 'ds-background' dist/tailwind-plugin.js
```

Expected: output includes `var(--ds-background)`.

- [ ] **Step 3: No commit needed** -- no files changed.

---

### Task 10: Visual verification

**Files:** None -- verification only.

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Open `http://localhost:5180` in browser.

- [ ] **Step 2: Verify dark theme (Night Dive)**

Check:
- Background is deep blue-black (#0a1520), not pure black
- Surface panels are dark blue-grey (#152838)
- Primary accent is teal (#00bcd4), not bright cyan
- Text is light blue-grey (#b0c4d4)
- Glow effects are subtle (barely visible halos)
- Pixel waves visible at bottom of demo section
- Body text is Inter 15px (sans-serif), not monospace
- Navigation/labels/code are still monospace (JetBrains Mono)

- [ ] **Step 3: Toggle to light theme (Day Beach)**

Click the theme toggle. Check:
- Background is warm parchment (#faf6f0), not cold white
- Surfaces are white (#ffffff) with sand-toned borders (#e0d4b8)
- Primary is ocean blue (#0077a8)
- Glow effects are absent (no text-shadow, minimal box-shadow)
- Pixel waves visible in lighter register

- [ ] **Step 4: Commit any fixes if needed, then final commit**

```bash
git add -A
git commit -m "chore: visual verification complete"
```

---

### Task 11: Update README color table

**Files:**
- Modify: `README.md` (color token tables)

- [ ] **Step 1: Update the Colors table in README.md**

Replace the existing Colors table with:

```markdown
### Colors

| Token | Dark (Night Dive) | Light (Day Beach) |
|---|---|---|
| `--ds-background` | `#0a1520` | `#faf6f0` |
| `--ds-surface` | `#152838` | `#ffffff` |
| `--ds-surface-alt` | `#102030` | `#f0e8d8` |
| `--ds-text` | `#b0c4d4` | `#2c3e50` |
| `--ds-text-muted` | `#3a6a80` | `#8a9aaa` |
| `--ds-primary` | `#00bcd4` | `#0077a8` |
| `--ds-secondary` | `#80cbc4` | `#5ba4b5` |
| `--ds-border` | `#264a60` | `#e0d4b8` |
| `--ds-success` | `#00e676` | `#2e7d32` |
| `--ds-warning` | `#ffc107` | `#f57f17` |
| `--ds-error` | `#ff5252` | `#c62828` |
| `--ds-info` | `#29b6f6` | `#0277bd` |
```

- [ ] **Step 2: Add pixel waves and bioluminescent to utility class table**

Add these rows to the Utility Classes table:

```markdown
| `ds-pixel-waves` | 8px grid pixel wave texture at element bottom |
| `ds-bioluminescent` | Decorative accent dot with subtle glow (dark only) |
```

- [ ] **Step 3: Update the Themes section**

Replace the Themes section with:

```markdown
## Themes

"Same ocean, different hour." Dark is the Night Dive (default). Light is the Day Beach.

Toggle by setting `data-theme="light"` on the root element:

\```js
document.documentElement.setAttribute('data-theme', 'light');
\```
```

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: update README with Night Dive / Day Beach palette"
```

---

### Task 12: Push to GitHub

**Files:** None -- git operations only.

- [ ] **Step 1: Push all commits**

```bash
git push
```

Expected: successful push to `origin/main`.

- [ ] **Step 2: Verify commit history**

```bash
git log --oneline -10
```

Expected: all visual identity commits visible, clean history.
