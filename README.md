# Design System

Centralized design system for personal projects with shared components, design tokens, and styling utilities.

## Features

- ✨ Shared React components (Card, Modal, Button)
- 🎨 Design tokens (colors, spacing, typography)
- 🌓 Dark/light theme support
- 💎 Glassmorphism utilities
- 🎭 Custom animations
- 🎯 Tailwind CSS integration

## Installation

### Using Local Path (Recommended for Development)

In your project's `package.json`:

```json
{
  "dependencies": {
    "@personal/design-system": "file:../design-system"
  }
}
```

### Using npm Link

```bash
# In design-system directory
cd design-system
npm link

# In your project directory
cd finance-app
npm link @personal/design-system
```

## Usage

### 1. Import CSS in Your Main Entry Point

```tsx
// src/main.tsx
import '@personal/design-system/css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 2. Configure Tailwind CSS

Create or update `tailwind.config.js`:

```javascript
import designSystemPlugin from '@personal/design-system/tailwind-plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Custom extensions can go here
    },
  },
  plugins: [
    designSystemPlugin(),
  ],
};
```

### 3. Use Components

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@personal/design-system/components';

function MyComponent() {
  return (
    <Card glass>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a shared card component!</p>
      </CardContent>
    </Card>
  );
}
```

### 4. Use Utilities

```tsx
import { cn } from '@personal/design-system';

function MyComponent() {
  return (
    <div className={cn('p-4 bg-surface rounded-lg', 'hover:bg-surface/80')}>
      <p className="ds-text-gradient">Gradient Text</p>
      <div className="ds-glass p-4">Glass Effect</div>
    </div>
  );
}
```

## Theme Switching

The design system supports dark/light themes via the `data-theme` attribute:

```tsx
function ThemeToggle() {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

## Design Tokens

### Colors
- `--ds-background`: Background color
- `--ds-surface`: Surface color for cards/modals
- `--ds-text`: Primary text color
- `--ds-text-muted`: Secondary text color
- `--ds-primary`: Primary accent color
- `--ds-secondary`: Secondary accent color
- `--ds-border`: Border color
- `--ds-success`: Success color
- `--ds-warning`: Warning color
- `--ds-error`: Error color

### Spacing
- `--ds-spacing-xs`: 0.25rem
- `--ds-spacing-sm`: 0.5rem
- `--ds-spacing-md`: 1rem
- `--ds-spacing-lg`: 1.5rem
- `--ds-spacing-xl`: 2rem

### Border Radius
- `--ds-radius-sm`: 0.375rem
- `--ds-radius-md`: 0.5rem
- `--ds-radius-lg`: 0.75rem
- `--ds-radius-xl`: 1rem

### Shadows
- `--ds-shadow-sm`, `--ds-shadow-md`, `--ds-shadow-lg`, `--ds-shadow-xl`

## Development

```bash
cd design-system

# Install dependencies
npm install

# Build the package
npm run build

# Watch for changes
npm run dev

# Run linting
npm run lint
```

## Migration Guide

To migrate existing projects to use the centralized design system:

1. **Replace CSS imports:**
   ```tsx
   // Old
   import './index.css';
   
   // New
   import '@personal/design-system/css';
   ```

2. **Update Tailwind config:**
   - Add design system plugin
   - Remove duplicate color/font definitions

3. **Replace shared components:**
   ```tsx
   // Old
   import { Card } from './components/ui/Card';
   
   // New
   import { Card } from '@personal/design-system/components';
   ```

4. **Update color references:**
   - Use Tailwind classes (`bg-surface`, `text-text-muted`)
   - Or CSS variables (`var(--ds-surface)`)

## License

MIT
