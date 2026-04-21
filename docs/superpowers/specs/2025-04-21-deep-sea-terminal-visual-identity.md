# Design: Deep Sea Terminal -- Visual Identity

**Date**: 2025-04-21
**Status**: Approved
**Author**: Emanuel Joivo

## Concept

"Same ocean, different hour." The design system's theme toggle represents a time-of-day shift at the sea:

- **Dark theme = Night Dive** -- Twilight Zone ocean depths, subtle bioluminescent glow, pixel waves dissolving into the deep
- **Light theme = Day Beach** -- Sunlit parchment shore, ocean blue accents, pixel waves catching daylight

The system is TUI-first with ocean accents. Structure comes from monospace accents (navigation, code, labels), sharp borders, dense layouts, and terminal-style prefixes. The ocean comes through in the color palette, pixel wave textures, and subtle glow effects.

## Color Tokens

### Dark Theme: Night Dive

| Token | Value | Semantic name |
|---|---|---|
| `--ds-background` | `#0a1520` | deep water |
| `--ds-surface` | `#152838` | reef shelf |
| `--ds-surface-alt` | `#102030` | kelp bed |
| `--ds-text` | `#b0c4d4` | moonlit foam |
| `--ds-text-muted` | `#3a6a80` | abyssal grey |
| `--ds-primary` | `#00bcd4` | bioluminescent teal |
| `--ds-secondary` | `#80cbc4` | seafoam |
| `--ds-border` | `#264a60` | pressure line |
| `--ds-border-focus` | `#3a6a80` | sonar ring |
| `--ds-success` | `#00e676` | algae bloom |
| `--ds-warning` | `#ffc107` | lanternfish |
| `--ds-error` | `#ff5252` | red tide |
| `--ds-info` | `#29b6f6` | current |
| `--ds-income` | `#00e676` | algae bloom |
| `--ds-expense` | `#ff5252` | red tide |

#### Dark Chart Palette

| Token | Value |
|---|---|
| `--ds-chart-1` | `#00bcd4` |
| `--ds-chart-2` | `#00e676` |
| `--ds-chart-3` | `#ffc107` |
| `--ds-chart-4` | `#ff5252` |
| `--ds-chart-5` | `#80cbc4` |
| `--ds-chart-6` | `#ff8a50` |

#### Dark GitHub Contribution Colors

These remain unchanged -- they follow GitHub's standard palette and are not part of the ocean identity.

### Light Theme: Day Beach

| Token | Value | Semantic name |
|---|---|---|
| `--ds-background` | `#faf6f0` | warm parchment |
| `--ds-surface` | `#ffffff` | white sand |
| `--ds-surface-alt` | `#f0e8d8` | dry sand |
| `--ds-text` | `#2c3e50` | wet stone |
| `--ds-text-muted` | `#8a9aaa` | driftwood |
| `--ds-primary` | `#0077a8` | ocean blue |
| `--ds-secondary` | `#5ba4b5` | shallow water |
| `--ds-border` | `#e0d4b8` | shell line |
| `--ds-border-focus` | `#c4b896` | tide mark |
| `--ds-success` | `#2e7d32` | coast grass |
| `--ds-warning` | `#f57f17` | sunset amber |
| `--ds-error` | `#c62828` | warning flag |
| `--ds-info` | `#0277bd` | open water |
| `--ds-income` | `#2e7d32` | coast grass |
| `--ds-expense` | `#c62828` | warning flag |

#### Light Chart Palette

| Token | Value |
|---|---|
| `--ds-chart-1` | `#0077a8` |
| `--ds-chart-2` | `#2e7d32` |
| `--ds-chart-3` | `#f57f17` |
| `--ds-chart-4` | `#c62828` |
| `--ds-chart-5` | `#5ba4b5` |
| `--ds-chart-6` | `#e65100` |

## Typography

The type system is **sans body + mono accents**. Body text uses a readable sans-serif for comfort; TUI personality comes from monospace used selectively in navigation, code, labels, and decorators.

### Fonts

- **Body**: Inter, 15px, line-height 1.6, letter-spacing 0.01em
- **Headings**: Inter, semibold (600), line-height 1.3, letter-spacing -0.02em
- **Mono accents**: JetBrains Mono, 13px

### Heading Scale

| Element | Size |
|---|---|
| h1 | 1.75rem |
| h2 | 1.375rem |
| h3 | 1.125rem |
| h4 | 1rem |
| h5 | 0.875rem |
| h6 | 0.8125rem |

### Mono accent usage

JetBrains Mono 13px is used for:

- Navigation links
- Terminal-style prefixes (`.ds-prefix`, `.ds-bracket`)
- Code blocks and inline code
- Labels, timestamps, metadata
- Keyboard shortcuts (`.ds-kbd`)
- Status indicators
- Anything explicitly marked with `.ds-mono`

### Form inputs

Inter 14px. Matches body context instead of forcing monospace on form fields.

### Key change from previous

The body font flips from JetBrains Mono 13px to Inter 15px. This is a breaking visual change for existing consumers. The `.ds-mono` utility class continues to work for components that want monospace text.

## Texture: Pixel Waves

A new CSS utility class that renders 8px-grid pixel art wave silhouettes at the bottom of an element.

### Implementation

- **Class name**: `.ds-pixel-waves`
- **Technique**: CSS `background-image` with a repeating linear gradient creating 8px columns, masked into a wave SVG shape using `mask-image`
- **Dark theme**: teal-tinted pixels at ~6% opacity
- **Light theme**: ocean-blue-tinted pixels at ~8% opacity
- **Height**: approximately 120px wave band at the bottom of the element
- **No JavaScript, no animation**: the pixel grid is static. Movement comes from page scroll, not the texture.

### Intended usage

- Page section backgrounds
- Hero areas
- Footer
- Not intended for every panel -- use sparingly for atmosphere

## Glow Effects

Updated to the "subtle bioluminescence" direction (20-30% opacity).

### Existing utilities (updated values)

**`.ds-text-glow`**
- Dark: `text-shadow: 0 0 20px color-mix(in srgb, var(--ds-primary) 20%, transparent)`
- Light: `text-shadow: none` (daylight does not glow)

**`.ds-crt-glow`**
- Dark: `box-shadow: 0 0 8px 1px color-mix(in srgb, var(--ds-primary) 15%, transparent)`
- Light: reduced to a subtle border highlight: `box-shadow: 0 0 4px 0 color-mix(in srgb, var(--ds-primary) 10%, transparent)`

### New utility

**`.ds-bioluminescent`** -- decorative dot with subtle radial glow, for accent elements.
- Uses `::after` pseudo-element: 4px circle, absolutely positioned, primary-colored
- Dark: `box-shadow: 0 0 6px color-mix(in srgb, var(--ds-primary) 30%, transparent)`
- Light: solid dot, no glow (like a pebble on sand)
- The parent element must have `position: relative` for the dot to position correctly

## What stays the same

- **Spacing scale**: `--ds-spacing-xs` through `--ds-spacing-2xl` -- values unchanged
- **Border radius scale**: `--ds-radius-none` through `--ds-radius-xl` -- values unchanged
- **Shadow scale**: `--ds-shadow-sm` through `--ds-shadow-xl` -- values unchanged
- **All token names**: unchanged (only values change)
- **All utility class names**: unchanged
- **Theme mechanism**: `data-theme="light"` on root element
- **Tailwind plugin**: unchanged (maps token names, not values)
- **GitHub contribution colors**: unchanged (follow GitHub's standard)

## What this design does NOT cover

- Website component-by-component restyling (separate effort after DS token update)
- Migration of existing consumers (finance-app, github-years-comparison) to new palette
- Animated wave effects (the pixel waves are static CSS)
- Mobile-specific typography adjustments (may be needed, deferred)

## Success criteria

1. The dev server (`npm run dev`) renders the new palette correctly in both themes
2. Theme toggle switches between night dive and day beach with smooth transition
3. Pixel wave texture is visible at the bottom of showcase sections
4. Body text is Inter 15px with readable line-height
5. Mono accents appear only on nav, code, labels, and TUI decorators
6. Glow effects are subtle (20-30% opacity) in dark theme, absent in light
7. All existing token names and utility class names work without changes
