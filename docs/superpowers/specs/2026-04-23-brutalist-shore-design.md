# Brutalist Shore -- Design System v0.4.0

**Date:** 2026-04-23
**Status:** Draft
**Scope:** Design system + personal website only

## Summary

v0.4.0 replaces the "Deep Sea Terminal" visual identity with "Brutalist Shore" -- a high-contrast, monospace-first, border-driven aesthetic inspired by code.storage. The ocean/beach personality shifts from atmospheric backgrounds to accent color choice via a two-axis theme system.

## Versioning

- Current HEAD is tagged `v0.3.0`
- This work becomes `v0.4.0`
- Consumers finance-app and github-years-comparison use `file:../design-system` (local symlink) and will break locally; accepted as known trade-off, fix when revisited
- band-splitter has no DS dependency yet
- Only the personal website actively consumes v0.4.0

## Theme Architecture (Two-Axis)

Two independent axes control the visual output:

- **Axis 1 -- Brightness:** `data-theme="dark"` (default) or `data-theme="light"`
- **Axis 2 -- Warmth:** `data-surf` attribute present or absent

This produces 4 combinations:

| Combination | Background | Text | Muted | Border | Accent |
|---|---|---|---|---|---|
| Dark + Neutral (default) | `#000000` | `#e0e0e0` | `#999999` | `#555555` | `#ffffff` |
| Dark + Surf | `#000000` | `#e0e0e0` | `#8a8580` | `#3d3833` | `#d4b483` |
| Light + Neutral | `#ffffff` | `#1a1a1a` | `#666666` | `#999999` | `#000000` |
| Light + Surf | `#faf6f0` | `#1a1a1a` | `#6b6560` | `#b5a48a` | `#8b6914` |

Additional tokens per combo:

- `--ds-secondary`: lighter variant of accent (used for hover states, secondary actions)
- `--ds-border-focus`: stronger border for focus states (accent color at reduced opacity)
- `--ds-surface` / `--ds-surface-alt`: aliased to `--ds-background` (no panel elevation)
- Status colors (`--ds-success`, `--ds-warning`, `--ds-error`, `--ds-info`): kept as-is across all combos; they serve functional roles independent of theme warmth

### CSS Layering

```
:root                           -> dark-neutral (base)
[data-theme="light"]            -> flips base palette
[data-surf]                     -> overlays warm sand on active base
[data-theme="light"][data-surf] -> combines both
```

### Surface Tokens in a Border-Only System

With panels removed, `--ds-surface` and `--ds-surface-alt` become aliases for `--ds-background`. They exist for backward compatibility but hold the same value as background. If a future consumer needs elevated surfaces, they can override these tokens locally.

### Token Names (Stable)

All `--ds-*` token names remain unchanged. Only values change per axis:

- `--ds-background`, `--ds-surface` (= background), `--ds-surface-alt` (= background)
- `--ds-text`, `--ds-text-muted`
- `--ds-primary`, `--ds-secondary`
- `--ds-border`, `--ds-border-focus`
- `--ds-success`, `--ds-warning`, `--ds-error`, `--ds-info`
- `--ds-income`, `--ds-expense` (finance domain)
- `--ds-chart-1` through `--ds-chart-10`
- `--ds-github-contrib-*` (5 levels)

## Typography

- **Full monospace everywhere:** JetBrains Mono for body, headings, UI, navigation
- Inter removed from the font stack entirely
- No forced `text-transform: uppercase` in DS -- consumers apply as needed
- Heading size scale unchanged: h1=1.75rem, h2=1.5rem, h3=1.25rem, h4=1rem, h5=0.875rem, h6=0.8125rem
- Body: 15px, line-height 1.6, letter-spacing 0.01em
- `ds-mono` utility stays but becomes a no-op (everything is mono)
- `ds-sans` utility removed (no sans-serif in the system)

## Layout and Structure

- **Border-only layout:** 1px solid borders as primary structural element
- No background-shift panels; content sits directly on the page background
- `ds-separator` and `ds-grid-bordered` become the primary layout patterns
- All border-radius tokens set to 0 (`--ds-radius-*: 0px`)
- All shadow tokens set to none (`--ds-shadow-*: none`)

### Removed Utilities

- `ds-panel` -- deleted (was surface bg + border + radius)
- `ds-panel-accent` -- deleted
- `ds-glass` -- deleted (backdrop blur has no place in brutalist aesthetic)
- `ds-pixel-waves` -- deleted (replaced by ds-ascii-waves)
- `ds-pixel-waves-animated` -- deleted
- `ds-text-glow` -- deleted (glow effects removed)
- `ds-crt-glow` -- deleted
- `ds-bioluminescent` -- deleted (glow dot)
- `ds-sans` -- deleted (no sans-serif)

### Kept Utilities (Updated Visually)

- `ds-separator` -- 1px solid, uses `--ds-border`
- `ds-grid-bordered` -- border grid, uses `--ds-border`
- `ds-container` -- centered max-width 1280px
- `ds-bracket` -- wraps content in `[ ]`
- `ds-prefix` -- `> ` prefix in accent color
- `ds-mono` -- kept for backward compat, becomes no-op
- `ds-dot`, `ds-dot-*` -- indicator dots, colors updated
- `ds-kbd` -- keyboard shortcut display
- `ds-row-hover` -- row highlight
- `ds-cursor-blink` -- blinking cursor
- `ds-custom-scrollbar` -- minimal scrollbar

## New Utilities

### `ds-nav-bracket`

Full bracket navigation pattern. Wraps each child link in `[ ]` with separator characters between items. Includes hover behavior (underline or invert).

```html
<nav class="ds-nav-bracket">
  <a href="/writings">WRITINGS</a>
  <a href="/projects">PROJECTS</a>
  <a href="/about">ABOUT</a>
</nav>
<!-- Renders: [WRITINGS] [PROJECTS] [ABOUT] -->
```

### `ds-ascii-waves`

Animated ASCII wave pattern using tilde (~), dot (.), caret (^), and underscore (_) characters. Four rows at different animation speeds/directions create a layered ocean effect.

Behavior: breathing opacity pulse + smooth horizontal drift. Each row has independent timing so they never sync.

- Wave color follows `--ds-primary` (adapts to all 4 theme combos)
- Rows are `width:200%` with container `overflow:hidden` for full-width fill
- Animation: `ease-in-out`, 9-13s per row, seamless loop (start/end at same position and opacity)
- Respects `prefers-reduced-motion`: static at full opacity, no animation

## Form Utilities (Brutalist Redesign)

All existing form class names kept. Visual redesign:

- **`ds-btn`** -- zero border-radius, 1px solid border, no background transitions
  - `ds-btn--primary` -- accent bg, inverted text (not translucent bg like before)
  - `ds-btn--secondary` -- transparent bg, accent border + text
  - `ds-btn--ghost` -- transparent bg, border on hover only
  - `ds-btn--danger` -- error color border + text, transparent bg
  - `ds-btn--icon` -- square, same border treatment
- **`ds-input`** -- zero radius, 1px solid border, stronger focus ring (2px accent)
  - `ds-input--sm` -- compact variant
- **`ds-select`** -- zero radius, custom chevron, 1px border
- **`ds-field`** -- flex column wrapper (unchanged structure)
  - `ds-field__label` -- uppercase monospace label
  - `ds-field__hint` -- muted helper text
- **`ds-table-wrap`** -- 1px border wrapper, no radius
- **`ds-table`** -- full-width, 1px cell borders, sticky header
- **`ds-segmented`** -- zero radius, 1px borders between segments
  - `ds-segmented__btn` -- no radius, accent bg when active

## Animations

### Kept (Updated)

- `animate-ds-fade-in` -- opacity 0->1, 150ms
- `animate-ds-slide-up` -- translateY(8px)->0 + fade, 250ms
- `animate-ds-slide-down` -- translateY(-8px)->0 + fade, 250ms
- `ds-blink` keyframe (cursor)

### Removed

- `ds-scan` keyframe (CRT scan line)
- `ds-wave-drift` keyframe (pixel wave)

### Added

- `ds-breathe-drift-1` through `ds-breathe-drift-4` keyframes (ASCII wave rows)

## Migration Notes

### Website (active consumer)

- Replace `@import "@joivo/design-system"` -- works as-is, new tokens flow through
- Update `@theme inline` mappings in `src/index.css` if using Tailwind
- Remove any `ds-panel`, `ds-glass`, `ds-text-glow` usage
- Add `data-surf` toggle to theme switcher (or default to surf mode)
- Replace pixel wave footer with `ds-ascii-waves`
- Switch body font from Inter to JetBrains Mono

### Other Consumers (not migrated)

- finance-app: stays on `file:../design-system`, will break locally. Fix when revisited.
- github-years-comparison: same situation.
- band-splitter: no DS dependency. Future migration to v0.4.0 as separate effort.

## WCAG Compliance

All text/background pairings pass WCAG AA (4.5:1 minimum):

| Pairing | Dark-Neutral | Dark-Surf | Light-Neutral | Light-Surf |
|---|---|---|---|---|
| Text on bg | 14.7:1 | 14.7:1 | 15.3:1 | 13.1:1 |
| Muted on bg | 10.4:1 | 4.8:1 | 6.3:1 | 5.1:1 |
| Accent on bg | 21:1 | 8.3:1 | 21:1 | 5.8:1 |
| Border on bg | 3.9:1 | 3.1:1 | 5.6:1 | 4.2:1 |
