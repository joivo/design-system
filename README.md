# @joivo/design-system

[![CI](https://github.com/joivo/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/joivo/design-system/actions/workflows/ci.yml)
[![Showcase](https://github.com/joivo/design-system/actions/workflows/pages.yml/badge.svg)](https://joivo.github.io/design-system/)

Framework-agnostic CSS design tokens, utilities, and animations. "Deep Sea Terminal" visual identity -- same ocean, different hour.

Pure CSS. No JavaScript runtime. Works with React, Vue, Svelte, plain HTML, or anything that can import a CSS file.

**[Live Showcase](https://joivo.github.io/design-system/)** -- interactive preview of all tokens, utilities, and animations.

## Install

From GitHub:

```bash
npm install github:joivo/design-system
```

Pin to a specific version:

```bash
npm install github:joivo/design-system#v0.2.0
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@joivo/design-system": "github:joivo/design-system"
  }
}
```

## Usage

### Import everything

```css
@import "@joivo/design-system";
```

Or in a JS/TS entry point:

```js
import "@joivo/design-system";
```

### Cherry-pick layers

```css
@import "@joivo/design-system/tokens";
@import "@joivo/design-system/utilities";
@import "@joivo/design-system/animations";
```

### With Tailwind CSS v4

Use `@theme inline` to map DS tokens to Tailwind utility classes:

```css
@import "tailwindcss";
@import "@joivo/design-system";

@theme inline {
  --color-background: var(--ds-background);
  --color-surface: var(--ds-surface);
  --color-primary: var(--ds-primary);
  --color-secondary: var(--ds-secondary);
  --color-text: var(--ds-text);
  --color-muted: var(--ds-text-muted);
  --color-border: var(--ds-border);
  /* ... map any tokens you need */
}
```

This generates `bg-background`, `text-primary`, `border-border` etc. as proper Tailwind v4 utilities. Theme switching works automatically because the `--ds-*` variables change with `[data-theme]`.

### With Tailwind CSS v3 (legacy)

```js
import designSystemPlugin from "@joivo/design-system/tailwind-plugin";

export default {
  plugins: [designSystemPlugin()],
};
```

## Tokens

All tokens are CSS custom properties prefixed with `--ds-`.

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
| `ds-mono` | Monospace font stack (JetBrains Mono) |
| `ds-sans` | Sans-serif font stack (Inter) |
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
| `ds-cursor-blink` | Blinking cursor `\|` |
| `ds-pixel-waves` | 8px grid pixel wave texture at element bottom |
| `ds-bioluminescent` | Decorative accent dot with subtle glow (dark only) |

## Animations

| Class | Effect |
|---|---|
| `animate-ds-fade-in` | Fade in (150ms) |
| `animate-ds-slide-up` | Slide up + fade in (250ms) |
| `animate-ds-slide-down` | Slide down + fade in (250ms) |

## Themes

"Same ocean, different hour." Dark is the Night Dive (default). Light is the Day Beach.

Toggle by setting `data-theme="light"` on the root element:

```js
document.documentElement.setAttribute('data-theme', 'light');
```

## Architecture

See [ADR-001](docs/adr/001-css-pure-framework-agnostic.md) for the decision to adopt a CSS-pure architecture.

## License

[MIT](LICENSE)
