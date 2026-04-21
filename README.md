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
