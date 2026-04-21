# Design: CSS-Pure Framework-Agnostic Design System

**Date**: 2025-04-21
**Status**: Approved
**Author**: Emanuel Joivo

## Problem

The design system (`@personal/design-system`) currently ships a single package that bundles CSS tokens, utility classes, animations, and React components together. This creates several problems:

1. **Framework lock-in**: The package has `react` and `react-dom` as peer dependencies. Vue, Svelte, or plain HTML projects cannot consume it without pulling in React.
2. **Half-done migrations**: The website (`joivo.me`) attempted a migration in Feb 2025 but was left in a conflicting state -- DS CSS tokens loaded but components still reference the old ocean color palette with hardcoded hex values.
3. **Visual identity conflict**: The DS defines a TUI aesthetic (cyan/purple, JetBrains Mono) while the website was built around an ocean theme (cerulean blue, seafoam teal, Inter). The migration forced the DS palette onto components designed for a different look.
4. **Tailwind v3/v4 conflict**: The website's `tailwind.config.js` uses v3 syntax but the project runs Tailwind v4 (`@tailwindcss/postcss`), meaning the JS config may be partially ignored.
5. **Component value is low**: The 7 React components (Card, Modal, Button, Badge, Stat, Separator, StatusIndicator) are each under 50 lines. They are trivial to rebuild per-project. The real shared value is the tokens and utility classes.

## Research

Industry analysis of framework-agnostic design systems (Open Props, Shoelace/Web Awesome, Carbon, shadcn/ui, Pico CSS) produced a clear consensus:

- **Tokens are the only thing worth sharing across frameworks.** Components are cheap to rebuild when tokens are solid.
- Enterprise teams (Carbon with 50+ engineers, Adobe Spectrum, Salesforce Lightning) all struggled or failed to maintain multi-framework component libraries. A solo maintainer should not attempt what those teams could not sustain.
- **Open Props** (pure CSS custom properties, zero JS, framework-agnostic) is the proven pattern for small/personal design systems.
- **shadcn/ui** (copy-paste components) validates that component ownership should live in consuming projects, not in the DS.

## Decision

Refactor the design system into a **pure CSS package**. Remove all React components. Each consuming project owns its own components built on top of DS tokens and utility classes.

### Chosen approach: Open Props-inspired layered CSS

Three CSS layers, no JavaScript runtime (except an optional Tailwind plugin):

| Layer | Contents | Purpose |
|---|---|---|
| **Tokens** | CSS custom properties | Colors, spacing, typography, shadows, radii, transitions |
| **Utilities** | CSS classes | `ds-panel`, `ds-glass`, `ds-text-glow`, `ds-prefix`, etc. |
| **Animations** | Keyframes + classes | `animate-ds-fade-in`, `animate-ds-slide-up`, etc. |

Themes (dark/light) are implemented as token overrides scoped to `[data-theme]` attributes.

### Rejected alternatives

**CSS core + React/Vue component packages**: Maintaining `@personal/design-system-react` and `@personal/design-system-vue` as separate packages. Rejected because the component count is small (7), the maintenance burden is multiplicative, and enterprise teams with dedicated staffing have failed at this pattern.

**CSS core + Web Components**: Framework-agnostic components via custom elements. Rejected because shadow DOM styling constraints conflict with Tailwind-based workflows, and the complexity is not justified for 3-5 personal projects.

**CSS core + shadcn-style CLI**: Copy-paste components via a CLI (`npx ds add button`). Rejected because the tooling investment (template registry, CLI, scaffolding) is overkill for the current project count.

## Architecture

### Directory structure

```
design-system/
  src/
    tokens/
      colors.css            -- semantic color variables
      spacing.css           -- spacing scale
      typography.css        -- font families, sizes, weights, line-heights
      shadows.css           -- shadow scale
      radii.css             -- border-radius scale
      transitions.css       -- duration/easing tokens
    utilities/
      panel.css             -- ds-panel, ds-panel-accent
      glass.css             -- ds-glass (glassmorphism)
      text.css              -- ds-text-glow, ds-mono, ds-sans, ds-prefix, ds-bracket
      indicators.css        -- ds-dot variants
      layout.css            -- ds-container, ds-grid-bordered, ds-separator
      scrollbar.css         -- ds-custom-scrollbar
      interactive.css       -- ds-kbd, ds-row-hover, ds-cursor-blink
    animations/
      fade.css              -- fade-in
      slide.css             -- slide-up, slide-down
      scan.css              -- CRT scan effect
      blink.css             -- cursor blink
    themes/
      dark.css              -- default theme (`:root` + `[data-theme="dark"]`)
      light.css             -- light theme (`[data-theme="light"]`)
    index.css               -- imports all layers in correct order
  tailwind-plugin.ts        -- maps tokens to Tailwind utility classes (optional)
  docs/
    adr/                    -- architectural decision records
  package.json
  README.md
```

### Package exports

```json
{
  "exports": {
    ".":                  "./dist/index.css",
    "./tokens":           "./dist/tokens/index.css",
    "./utilities":        "./dist/utilities/index.css",
    "./animations":       "./dist/animations/index.css",
    "./themes/dark":      "./dist/themes/dark.css",
    "./themes/light":     "./dist/themes/light.css",
    "./tailwind-plugin":  "./dist/tailwind-plugin.js"
  }
}
```

Consumers can import everything or cherry-pick layers.

### Consumption patterns

**Minimal (any framework, plain HTML):**
```css
@import "@personal/design-system";
```

**Cherry-pick (only tokens):**
```css
@import "@personal/design-system/tokens";
```

**With Tailwind:**
```js
// tailwind.config.js or CSS @plugin
import designSystemPlugin from "@personal/design-system/tailwind-plugin";
```

**Components**: Each project builds its own using DS tokens. Example:
```html
<div class="ds-panel" style="padding: var(--ds-spacing-md)">
  <h3 class="ds-mono" style="color: var(--ds-primary)">Title</h3>
  <p style="color: var(--ds-text-muted)">Content</p>
</div>
```

Or with Tailwind:
```html
<div class="ds-panel p-ds-md">
  <h3 class="ds-mono text-primary">Title</h3>
  <p class="text-muted">Content</p>
</div>
```

### Visual direction

"Deep sea terminal" -- TUI-first structure with ocean color palette and flow-inspired motion.

- **Structure**: Monospace typography, sharp borders, dense layouts, terminal-style prefixes
- **Color**: Deep ocean blues and teals for depth, bioluminescent highlights for accents
- **Motion**: Subtle flow animations inspired by ocean currents
- **Texture**: Pixel/bit-art wave patterns as background texture (to be designed in follow-up session)

Concrete palette values will be defined in a dedicated visual design brainstorming session after the architectural refactor is complete.

### Theme mechanism

- Dark is the default (`:root`)
- Light activates via `[data-theme="light"]` on the root element
- Each theme overrides the same set of semantic token variables
- No framework-specific theme provider needed -- just set/read the `data-theme` attribute

## Migration plan for existing consumers

### finance-app, github-years-comparison

1. Copy the 7 React components (`Card`, `Modal`, `Button`, `Badge`, `Stat`, `Separator`, `StatusIndicator`) into each project's own `src/components/ds/` directory
2. Copy `cn()` utility into each project's `src/utils/`
3. Update imports from `@personal/design-system/components` to local paths
4. Update `package.json` dependency -- the DS no longer exports JS, only CSS
5. Remove `react`/`react-dom` peer dependency warnings

### website (joivo.me)

The website requires a deeper integration pass (separate effort):
1. Same component extraction as above
2. Replace all hardcoded hex colors in `Wave.tsx` and `DesignSystem.tsx` with DS token references
3. Remove the unused local `DesignSystem.tsx` component definitions
4. Fix the Tailwind v3/v4 config conflict
5. Apply the new "deep sea terminal" visual identity
6. Clean up pre-migration backup files

## What this design does NOT cover

- Concrete color palette values (deferred to visual design session)
- Bit-art wave texture design (deferred to visual design session)
- Website component-by-component restyling (separate effort after DS refactor)
- Versioning/publishing strategy (npm registry, semver -- future decision)
- CI/CD for the DS package

## Success criteria

1. The DS package has zero JavaScript runtime dependencies (no React, no react-dom)
2. The DS can be consumed by importing a single CSS file
3. All current token names and utility class names are preserved (no breaking changes to the interface). Token values (colors, sizes) may change when the new visual identity is applied in a follow-up session.
4. The Tailwind plugin continues to work for projects that use it
5. Each consumer project has its own working copy of the React components it was using
6. The DS builds and the website renders correctly after integration
