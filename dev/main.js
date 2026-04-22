import '../src/index.css';
import './dev.css';

const app = document.getElementById('app');

app.innerHTML = `
<button class="theme-toggle" id="theme-toggle">[theme: dark]</button>

<div class="ds-container dev-container">

  <header class="dev-header">
    <h1>@personal/design-system</h1>
    <p style="color: var(--ds-text-muted);">v0.2.0 -- interactive dev preview</p>
  </header>

  <!-- COLORS -->
  <section class="dev-section">
    <h2 class="ds-prefix">Colors</h2>

    <h3>Core Palette</h3>
    <div class="dev-swatch-grid">
      ${colorSwatch('background', '--ds-background')}
      ${colorSwatch('surface', '--ds-surface')}
      ${colorSwatch('surface-alt', '--ds-surface-alt')}
      ${colorSwatch('primary', '--ds-primary', true)}
      ${colorSwatch('secondary', '--ds-secondary', true)}
      ${colorSwatch('border', '--ds-border')}
      ${colorSwatch('border-focus', '--ds-border-focus')}
    </div>

    <h3>Text</h3>
    <div class="dev-swatch-grid">
      <div class="dev-swatch" style="background: var(--ds-surface);">
        <span style="color: var(--ds-text);">text</span>
        <code>--ds-text</code>
      </div>
      <div class="dev-swatch" style="background: var(--ds-surface);">
        <span style="color: var(--ds-text-muted);">text-muted</span>
        <code>--ds-text-muted</code>
      </div>
    </div>

    <h3>Semantic</h3>
    <div class="dev-swatch-grid">
      ${colorSwatch('success', '--ds-success', true)}
      ${colorSwatch('warning', '--ds-warning', true)}
      ${colorSwatch('error', '--ds-error', true)}
      ${colorSwatch('info', '--ds-info', true)}
      ${colorSwatch('income', '--ds-income', true)}
      ${colorSwatch('expense', '--ds-expense', true)}
    </div>

    <h3>Chart Palette</h3>
    <div class="dev-swatch-grid">
      ${[1,2,3,4,5,6].map(n => colorSwatch(n, `--ds-chart-${n}`, true)).join('')}
    </div>

    <h3>GitHub Contributions</h3>
    <div style="display: flex; gap: 4px;">
      ${['none','low','medium','high','very-high'].map(level =>
        `<div class="dev-contrib" style="background: var(--ds-github-contrib-${level});" title="${level}"></div>`
      ).join('')}
    </div>
  </section>

  <!-- TYPOGRAPHY -->
  <section class="dev-section">
    <h2 class="ds-prefix">Typography</h2>
    <div class="ds-panel" style="padding: var(--ds-spacing-lg);">
      <h1>h1 -- Inter 1.75rem</h1>
      <h2>h2 -- Inter 1.375rem</h2>
      <h3>h3 -- Inter 1.125rem</h3>
      <h4>h4 -- Inter 1rem</h4>
      <h5>h5 -- Inter 0.875rem</h5>
      <h6>h6 -- Inter 0.8125rem</h6>
      <hr class="ds-separator">
      <p>Body text -- Inter 15px. The quick brown fox jumps over the lazy dog.</p>
      <p style="color: var(--ds-text-muted);">Muted text -- secondary information and labels.</p>
      <p class="ds-mono">Mono accent (.ds-mono) -- JetBrains Mono for code, nav, labels.</p>
    </div>
  </section>

  <!-- SPACING -->
  <section class="dev-section">
    <h2 class="ds-prefix">Spacing</h2>
    <div class="dev-stack">
      ${['xs|0.25rem','sm|0.5rem','md|0.75rem','lg|1rem','xl|1.5rem','2xl|2rem'].map(s => {
        const [name, val] = s.split('|');
        return `<div class="dev-spacing-row">
          <div class="dev-spacing-bar" style="width: var(--ds-spacing-${name});"></div>
          <code>${name} (${val})</code>
        </div>`;
      }).join('')}
    </div>
  </section>

  <!-- BORDER RADIUS -->
  <section class="dev-section">
    <h2 class="ds-prefix">Border Radius</h2>
    <div class="dev-flex">
      ${['none|0px','sm|2px','md|4px','lg|6px','xl|8px'].map(r => {
        const [name, val] = r.split('|');
        return `<div class="dev-radius-box" style="border-radius: var(--ds-radius-${name});">${name}<br><span>${val}</span></div>`;
      }).join('')}
    </div>
  </section>

  <!-- SHADOWS -->
  <section class="dev-section">
    <h2 class="ds-prefix">Shadows</h2>
    <div class="dev-swatch-grid">
      ${['sm','md','lg','xl'].map(s =>
        `<div class="dev-shadow-box" style="box-shadow: var(--ds-shadow-${s});">shadow-${s}</div>`
      ).join('')}
    </div>
  </section>

  <!-- UTILITY CLASSES -->
  <section class="dev-section">
    <h2 class="ds-prefix">Utilities</h2>

    <h3>Panels</h3>
    <div class="dev-swatch-grid">
      <div class="ds-panel" style="padding: var(--ds-spacing-lg);"><code>.ds-panel</code></div>
      <div class="ds-panel-accent" style="padding: var(--ds-spacing-lg);"><code>.ds-panel-accent</code></div>
      <div class="ds-glass ds-panel" style="padding: var(--ds-spacing-lg);"><code>.ds-glass</code></div>
    </div>

    <h3>Text Effects</h3>
    <div class="dev-stack">
      <p class="ds-text-glow" style="font-size: 1.5rem;">Glowing text (.ds-text-glow)</p>
      <p class="ds-prefix">Prefixed text (.ds-prefix)</p>
      <p><span class="ds-bracket">Bracketed text</span> (.ds-bracket)</p>
      <div class="ds-crt-glow ds-panel" style="padding: var(--ds-spacing-md); display: inline-block;">CRT glow (.ds-crt-glow)</div>
    </div>

    <h3>Indicators</h3>
    <div class="dev-flex">
      <span class="dev-inline"><span class="ds-dot"></span> default</span>
      <span class="dev-inline"><span class="ds-dot-success"></span> success</span>
      <span class="dev-inline"><span class="ds-dot-warning"></span> warning</span>
      <span class="dev-inline"><span class="ds-dot-error"></span> error</span>
      <span class="dev-inline"><span class="ds-dot-primary"></span> primary</span>
    </div>

    <h3>Interactive</h3>
    <div class="dev-stack">
      <p>Keyboard: <span class="ds-kbd">Ctrl</span> + <span class="ds-kbd">K</span></p>
      <div class="ds-grid-bordered" style="max-width: 300px;">
        <div class="ds-row-hover" style="padding: var(--ds-spacing-sm) var(--ds-spacing-md);">Row 1 (hover me)</div>
        <div class="ds-row-hover" style="padding: var(--ds-spacing-sm) var(--ds-spacing-md);">Row 2 (hover me)</div>
        <div class="ds-row-hover" style="padding: var(--ds-spacing-sm) var(--ds-spacing-md);">Row 3 (hover me)</div>
      </div>
      <p>Loading<span class="ds-cursor-blink"></span></p>
    </div>

    <h3>Scrollbar</h3>
    <div class="ds-panel ds-custom-scrollbar" style="max-height: 80px; overflow-y: auto; padding: var(--ds-spacing-md); max-width: 300px;">
      <p>Line 1</p><p>Line 2</p><p>Line 3</p><p>Line 4</p>
      <p>Line 5</p><p>Line 6</p><p>Line 7</p><p>Line 8</p>
    </div>
  </section>

  <!-- PIXEL WAVES -->
  <section class="dev-section">
    <h2 class="ds-prefix">Pixel Waves</h2>
    <div class="dev-swatch-grid">
      <div class="ds-pixel-waves" style="background: var(--ds-surface); border: 1px solid var(--ds-border); border-radius: var(--ds-radius-md); min-height: 200px; display: flex; align-items: center; justify-content: center; padding: var(--ds-spacing-lg);">
        <p style="color: var(--ds-text-muted);" class="ds-mono">.ds-pixel-waves (static)</p>
      </div>
      <div class="ds-pixel-waves ds-pixel-waves-animated" style="background: var(--ds-surface); border: 1px solid var(--ds-border); border-radius: var(--ds-radius-md); min-height: 200px; display: flex; align-items: center; justify-content: center; padding: var(--ds-spacing-lg);">
        <p style="color: var(--ds-text-muted);" class="ds-mono">.ds-pixel-waves-animated</p>
      </div>
    </div>
  </section>

  <!-- BIOLUMINESCENT -->
  <section class="dev-section">
    <h2 class="ds-prefix">Bioluminescent</h2>
    <div class="dev-flex">
      <div class="ds-panel ds-bioluminescent" style="padding: var(--ds-spacing-lg); width: 200px;">
        <code>.ds-bioluminescent</code>
        <p style="color: var(--ds-text-muted); font-size: 11px; margin-top: 4px;">Decorative accent dot</p>
      </div>
    </div>
  </section>

  <!-- ANIMATIONS -->
  <section class="dev-section">
    <h2 class="ds-prefix">Animations</h2>
    <p style="color: var(--ds-text-muted); margin-bottom: var(--ds-spacing-md);">Click to replay.</p>
    <div class="dev-swatch-grid">
      <div class="dev-anim-box" data-anim="animate-ds-fade-in">
        <div class="animate-ds-fade-in">fade-in</div>
      </div>
      <div class="dev-anim-box" data-anim="animate-ds-slide-up">
        <div class="animate-ds-slide-up">slide-up</div>
      </div>
      <div class="dev-anim-box" data-anim="animate-ds-slide-down">
        <div class="animate-ds-slide-down">slide-down</div>
      </div>
    </div>
  </section>

</div>
`;

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    toggleBtn.textContent = '[theme: dark]';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '[theme: light]';
  }
});

// Animation replay
document.querySelectorAll('.dev-anim-box').forEach(box => {
  box.addEventListener('click', () => {
    const anim = box.dataset.anim;
    const el = box.querySelector('div');
    el.classList.remove(anim);
    void el.offsetWidth;
    el.classList.add(anim);
  });
});

function colorSwatch(label, varName, darkText = false) {
  const color = darkText ? '#000' : 'var(--ds-text)';
  return `<div class="dev-swatch" style="background: var(${varName}); color: ${color};">
    ${label}
    <code>${varName}</code>
  </div>`;
}
