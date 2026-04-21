# ADR-001: Adopt CSS-pure framework-agnostic architecture

**Date**: 2025-04-21
**Status**: Accepted
**Deciders**: Emanuel Joivo

## Context

The design system (`@personal/design-system` v0.1.0) ships CSS tokens, utility classes, animations, and 7 React components in a single package. It serves three React projects: `finance-app`, `website` (`joivo.me`), and `github-years-comparison`.

Problems with the current approach:

- **Framework lock-in**: `react` and `react-dom` are peer dependencies. The package cannot be consumed by Vue, Svelte, or plain HTML without pulling in React.
- **Low component value**: The 7 React components (`Card`, `Modal`, `Button`, `Badge`, `Stat`, `Separator`, `StatusIndicator`) are each under 50 lines. They are trivial to rebuild and provide minimal shared value compared to the tokens.
- **Failed migration**: The website's Feb 2025 migration to the DS was left half-done -- CSS tokens loaded but components still reference a different color palette with hardcoded hex values.
- **Aspirational goal**: Vue support has been a stated goal since the project's inception but is impossible under the current architecture without maintaining a parallel component package.

Industry research (Open Props, Carbon, Shoelace, shadcn/ui, Pico CSS) confirms: tokens are the only artifact worth sharing across frameworks. Enterprise teams with 50+ engineers have failed to sustain multi-framework component libraries.

## Decision

Refactor the design system into a pure CSS package. Remove all React components from the DS. Each consuming project owns its own components built on DS tokens and utility classes.

The package will be structured in three CSS layers:

1. **Tokens**: CSS custom properties (colors, spacing, typography, shadows, radii, transitions)
2. **Utilities**: CSS classes (`ds-panel`, `ds-glass`, `ds-text-glow`, etc.)
3. **Animations**: Keyframes and animation classes

An optional Tailwind plugin maps tokens to Tailwind utility classes for projects that use Tailwind.

## Consequences

### Positive

- Zero JavaScript runtime. The DS becomes a CSS file -- usable by any framework, any build tool, or a plain `<link>` tag.
- Simpler package. No React peer deps, no JSX compilation, no component API surface to maintain.
- Consumers own their components and can customize freely without fighting the DS.
- Vue/Svelte/etc. support becomes automatic -- just import the CSS.
- Smaller bundle. CSS-only is lighter than CSS + React component tree.

### Negative

- The 7 React components must be copied into each consuming project. This is a one-time migration cost.
- No shared component type safety across projects. Each project defines its own component interfaces.
- Component patterns may diverge across projects over time (acceptable for personal projects).

### Neutral

- Token names (`--ds-background`, `--ds-primary`, etc.) and utility class names (`ds-panel`, `ds-glass`, etc.) remain unchanged. This is not a breaking change for CSS consumers.
- The Tailwind plugin continues to exist as an optional integration point.

## Alternatives considered

| Alternative | Why rejected |
|---|---|
| CSS core + `@personal/design-system-react` + `@personal/design-system-vue` | Multiplicative maintenance for a solo maintainer. Enterprise teams (Carbon, Spectrum) have failed at this. |
| CSS core + Web Components (custom elements) | Shadow DOM styling conflicts with Tailwind workflows. Complexity not justified for 3-5 personal projects. |
| CSS core + shadcn-style CLI (copy-paste templates) | Tooling investment (CLI, template registry) is overkill for the current project count. |
