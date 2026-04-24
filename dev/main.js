import '../src/index.css';
import './dev.css';

const app = document.getElementById('app');

app.innerHTML = `
<div style="position: fixed; top: 12px; right: 12px; z-index: 100; display: flex; gap: 4px;">
  <button class="ds-btn" id="theme-toggle">[theme: dark]</button>
  <button class="ds-btn" id="surf-toggle">[surf: off]</button>
</div>

<div class="ds-container dev-container">

  <header class="dev-header">
    <h1>@joivo/design-system</h1>
    <p style="color: var(--ds-text-muted);">v0.4.0 -- Brutalist Shore</p>
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
    <div style="border: 1px solid var(--ds-border); padding: var(--ds-spacing-lg);">
      <h1>h1 -- JetBrains Mono 1.75rem</h1>
      <h2>h2 -- JetBrains Mono 1.375rem</h2>
      <h3>h3 -- JetBrains Mono 1.125rem</h3>
      <h4>h4 -- JetBrains Mono 1rem</h4>
      <h5>h5 -- JetBrains Mono 0.875rem</h5>
      <h6>h6 -- JetBrains Mono 0.8125rem</h6>
      <hr class="ds-separator">
      <p>Body text -- JetBrains Mono 15px. The quick brown fox jumps over the lazy dog.</p>
      <p style="color: var(--ds-text-muted);">Muted text -- secondary information and labels.</p>
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

    <h3>Bracket Navigation</h3>
    <nav class="ds-nav-bracket">
      <a href="#">WRITINGS</a>
      <a href="#">PROJECTS</a>
      <a href="#">ABOUT</a>
      <a href="#">CONTACT</a>
    </nav>

    <h3>Text Decorators</h3>
    <div class="dev-stack">
      <p class="ds-prefix">Prefixed text (.ds-prefix)</p>
      <p><span class="ds-bracket">Bracketed text</span> (.ds-bracket)</p>
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
    <div class="ds-custom-scrollbar" style="max-height: 80px; overflow-y: auto; padding: var(--ds-spacing-md); max-width: 300px; border: 1px solid var(--ds-border);">
      <p>Line 1</p><p>Line 2</p><p>Line 3</p><p>Line 4</p>
      <p>Line 5</p><p>Line 6</p><p>Line 7</p><p>Line 8</p>
    </div>
  </section>

  <!-- ASCII WAVES -->
  <section class="dev-section">
    <h2 class="ds-prefix">ASCII Waves</h2>
    <div class="ds-ascii-waves" style="border: 1px solid var(--ds-border);">
      <span>~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_~.~.~^~.~.~_</span>
      <span>_.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_~.~^~.~_</span>
      <span>~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_~.~^~_</span>
      <span>.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_~^~.~_</span>
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

// Surf toggle
const surfBtn = document.getElementById('surf-toggle');
surfBtn.addEventListener('click', () => {
  if (document.documentElement.hasAttribute('data-surf')) {
    document.documentElement.removeAttribute('data-surf');
    surfBtn.textContent = '[surf: off]';
  } else {
    document.documentElement.setAttribute('data-surf', '');
    surfBtn.textContent = '[surf: on]';
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
