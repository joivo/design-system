---
version: alpha
name: Deep Sea Terminal
description: >
  TUI-first design system with ocean accents. Same ocean, different hour.
  Dark theme is the Night Dive. Light theme is the Day Beach.
colors:
  background: "#0a1520"
  surface: "#152838"
  surface-alt: "#102030"
  text: "#b0c4d4"
  text-muted: "#3a6a80"
  primary: "#00bcd4"
  secondary: "#80cbc4"
  border: "#264a60"
  border-focus: "#3a6a80"
  success: "#00e676"
  warning: "#ffc107"
  error: "#ff5252"
  info: "#29b6f6"
  income: "#00e676"
  expense: "#ff5252"
  background-light: "#faf6f0"
  surface-light: "#ffffff"
  surface-alt-light: "#f0e8d8"
  text-light: "#2c3e50"
  text-muted-light: "#8a9aaa"
  primary-light: "#0077a8"
  secondary-light: "#5ba4b5"
  border-light: "#e0d4b8"
  border-focus-light: "#c4b896"
  success-light: "#2e7d32"
  warning-light: "#f57f17"
  error-light: "#c62828"
  info-light: "#0277bd"
typography:
  h1:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  body:
    fontFamily: Inter
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: 0.01em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    lineHeight: 1.6
    letterSpacing: 0.01em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  2xl: 2rem
components:
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  panel-accent:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

Deep Sea Terminal. TUI-first structure with ocean accents.

The design system operates on a day/night duality: the dark theme is a "Night Dive" into twilight ocean depths, the light theme is a "Day Beach" under sunlit parchment skies. Toggling themes feels like a time-of-day shift at the sea.

Structure comes from monospace accents (navigation, code, labels, terminal prefixes), sharp borders, dense layouts, and minimal decoration. The ocean identity comes through the color palette, pixel wave textures, and subtle bioluminescent glow effects.

## Colors

The palette is rooted in ocean depth for dark and sunlit shore for light.

**Dark theme (Night Dive):**
- **Primary (#00bcd4):** Bioluminescent teal. The accent that catches light in the deep.
- **Secondary (#80cbc4):** Seafoam. Softer complement for secondary elements.
- **Background (#0a1520):** Deep water. Near-black with blue undertone.
- **Surface (#152838):** Reef shelf. Panels and cards float here.
- **Text (#b0c4d4):** Moonlit foam. Readable against the dark depth.
- **Border (#264a60):** Pressure line. Subtle structural separation.

**Light theme (Day Beach):**
- **Primary (#0077a8):** Ocean blue. The sea seen from shore.
- **Secondary (#5ba4b5):** Shallow water. Lighter teal for accents.
- **Background (#faf6f0):** Warm parchment. Sun-bleached sand tone.
- **Surface (#ffffff):** White sand. Clean card backgrounds.
- **Text (#2c3e50):** Wet stone. High readability.
- **Border (#e0d4b8):** Shell line. Warm structural separation.

## Typography

Sans body with mono accents. Body text uses Inter 15px for readability. TUI personality comes from JetBrains Mono used selectively.

- **Body:** Inter, 15px. Paragraphs, descriptions, blog content.
- **Headings:** Inter, semibold. h1 at 1.75rem down to h6 at 0.8125rem.
- **Mono accents:** JetBrains Mono, 13px. Navigation links, terminal prefixes, code, labels, timestamps, keyboard shortcuts, metadata.
- **Form inputs:** Inter, 14px.

The `.ds-mono` utility applies monospace. The `.ds-sans` utility applies sans-serif. Body default is sans-serif.

## Layout & Spacing

Spacing uses a tight scale for density:
- **xs (0.25rem)** through **2xl (2rem)**
- Container max-width: 1280px, centered with md padding

Border radius is sharp by default: 0px to 8px maximum. No rounded pills, no large radii. TUI elements have straight edges.

## Shapes

Sharp corners throughout. The radius scale tops out at 8px (xl). Buttons, panels, badges, and inputs all use sm (2px) or md (4px) radius. No `rounded-full` or large radii anywhere.

## Components

**Panels** (`ds-panel`, `ds-panel-accent`): Surface background with 1px border and md radius. Accent variant adds a primary left border.

**Glass** (`ds-glass`): 70% background opacity with backdrop blur. Use sparingly.

**Text effects** (`ds-text-glow`, `ds-crt-glow`): Subtle glow at 20% opacity in dark theme. No glow in light theme (daylight does not glow).

**Pixel waves** (`ds-pixel-waves`, `ds-pixel-waves-animated`): 8px grid pixel art wave silhouette at element bottom. Static by default, animated with slow horizontal drift. Respects prefers-reduced-motion.

**Bioluminescent** (`ds-bioluminescent`): 4px decorative dot with glow. Dark only.

**Terminal decorators** (`ds-prefix`, `ds-bracket`, `ds-cursor-blink`): TUI-style text prefixes and indicators.

**Interactive** (`ds-kbd`, `ds-row-hover`, `ds-separator`): Keyboard shortcut display, row highlights, divider lines.

## Do's and Don'ts

**Do:**
- Use `ds-mono` on navigation, labels, timestamps, and metadata
- Use `ds-panel` instead of manually composing bg + border + radius
- Use `ds-prefix` for terminal-style section headings
- Use semantic color tokens (`text-primary`, `bg-surface`) instead of hardcoded hex
- Keep borders at 1px, subtle, using border tokens
- Use `text-background` for inverted text on primary backgrounds

**Don't:**
- Use `rounded-full`, `rounded-2xl`, or `rounded-xl` anywhere
- Use `bg-gradient-to-*` for backgrounds (solid colors only)
- Use `backdrop-blur-*` for glassmorphism effects on content areas
- Use `whileHover={{ scale }}` or `whileTap={{ scale }}` (TUI does not bounce)
- Use `text-white` hardcoded (breaks in light theme)
- Use emojis or decorative icons in content
- Use em dashes or AI-isms in copy
