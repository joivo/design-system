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

MIT
