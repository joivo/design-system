---
version: "0.4.0"
name: Brutalist Shore
description: >
  High-contrast, monospace-first, border-driven design system.
  Two-axis theming: light/dark + neutral/surf.
  Ocean personality lives in the accent color, not the background.
colors:
  background: "#000"
  surface: "#000"
  surface-alt: "#000"
  text: "#e0e0e0"
  text-muted: "#999"
  primary: "#fff"
  secondary: "#ccc"
  border: "#555"
  border-focus: "#fff"
  success: "#4caf7d"
  warning: "#d4a030"
  error: "#cf5555"
  info: "#5a9ec4"
  income: "#4caf7d"
  expense: "#cf5555"
typography:
  h1:
    fontFamily: JetBrains Mono
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  h2:
    fontFamily: JetBrains Mono
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  h3:
    fontFamily: JetBrains Mono
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  body:
    fontFamily: JetBrains Mono
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: 0.01em
rounded:
  none: 0px
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  2xl: 2rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.none}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    padding: 12px
  button-danger:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.error}"
    rounded: "{rounded.none}"
    padding: 12px
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: 8px
  input-focus:
    backgroundColor: "{colors.background}"
    textColor: "{colors.border-focus}"
    rounded: "{rounded.none}"
    padding: 8px
  nav-bracket:
    textColor: "{colors.text-muted}"
    backgroundColor: "{colors.background}"
  separator:
    backgroundColor: "{colors.border}"
    size: 1px
  table-header:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-muted}"
  status-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.background}"
  status-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.background}"
  status-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.background}"
  finance-income:
    backgroundColor: "{colors.income}"
    textColor: "{colors.background}"
  finance-expense:
    backgroundColor: "{colors.expense}"
    textColor: "{colors.background}"
---

## Overview

Brutalist Shore. High-contrast, monospace-first, border-driven.

Two-axis theming: light/dark controls the base palette, surf mode overlays warm sand accent. The ocean identity lives in the accent color choice, not the background. Structure comes from 1px borders, full monospace typography, dense layouts, and ASCII wave textures.

## Colors

Binary contrast as the foundation. Four theme combos via two axes:

- **Dark + Neutral:** Black bg, white text/accent, grey borders. Maximum contrast.
- **Dark + Surf:** Black bg, warm sand (#d4b483) accent, warm borders. Beach at night.
- **Light + Neutral:** White bg, black text/accent, grey borders. Clean binary.
- **Light + Surf:** Parchment (#faf6f0) bg, dark sand (#8b6914) accent, warm borders.

All text/bg pairings pass WCAG AA (4.5:1 minimum). Status colors (success, warning, error, info) remain constant across all combos.

## Typography

Full monospace. JetBrains Mono everywhere.

- **Body:** JetBrains Mono, 15px, line-height 1.6.
- **Headings:** JetBrains Mono, semibold. h1 at 1.75rem down to h6 at 0.8125rem.
- **Form inputs:** JetBrains Mono, 14px.
- No sans-serif in the system. `ds-mono` utility kept for backward compat (no-op).

## Layout & Spacing

Spacing uses a tight scale for density:
- **xs (0.25rem)** through **2xl (2rem)**
- Container max-width: 1280px, centered with md padding

Border radius is sharp by default: 0px to 8px maximum. No rounded pills, no large radii. TUI elements have straight edges.

## Shapes

Zero corners. All radius tokens are 0. No rounded elements anywhere.

## Components

**Bracket navigation** (`ds-nav-bracket`): Wraps child links in `[LINK]` brackets with hover underline. The primary navigation pattern.

**ASCII waves** (`ds-ascii-waves`): Breathing drift animation using tilde/dot/caret/underscore characters. Four rows at independent speeds. Respects prefers-reduced-motion.

**Terminal decorators** (`ds-prefix`, `ds-bracket`, `ds-cursor-blink`): TUI-style text prefixes and indicators.

**Interactive** (`ds-kbd`, `ds-row-hover`, `ds-separator`): Keyboard shortcut display, row highlights, divider lines.

**Forms** (`ds-btn`, `ds-input`, `ds-select`, `ds-field`, `ds-table`, `ds-segmented`): Brutalist form elements with zero radius, solid fills, visible borders.

## Do's and Don'ts

**Do:**
- Use `ds-nav-bracket` for navigation links
- Use `ds-separator` and `ds-grid-bordered` for layout structure
- Use `ds-prefix` for terminal-style section headings
- Use semantic color tokens (`--ds-primary`, `--ds-background`) instead of hardcoded hex
- Keep borders at 1px using `--ds-border` token
- Use `data-surf` attribute to toggle warm sand mode

**Don't:**
- Use `rounded-full`, `rounded-2xl`, or any border-radius
- Use gradients, shadows, or backdrop-blur
- Use background color shifts for panel elevation (borders only)
- Use `whileHover={{ scale }}` or `whileTap={{ scale }}`
- Hardcode color values (use tokens)
- Use emojis or decorative icons
- Use sans-serif fonts
