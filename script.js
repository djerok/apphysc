// The Physicist's Notebook — interactive logic
// Theme toggle, scroll progress, intersection-observer reveals,
// scroll-spy navigation, debounced search with highlight,
// mobile drawer, keyboard shortcuts.

(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const searchInput = $('#search');
  const units = $$('.unit');
  const navLinks = $$('.nav-link');
  const noResults = $('#noresults');
  const toTop = $('#toTop');
  const themeToggle = $('#themeToggle');
  const menuBtn = $('#menuBtn');
  const sidebar = $('.sidebar');
  const backdrop = $('#sidebarBackdrop');
  const progressFill = $('#progressFill');
  const body = document.body;

  /* ============ Replace external images with inline SVG diagrams ============ */
  const DIAGRAMS = {
    'unit-1': { caption: 'Projectile motion — constant $v_x$, parabolic $y$. Trajectory is the vector sum of independent $x$ and $y$ motions.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Projectile trajectory"><defs><marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><line x1="40" y1="220" x2="500" y2="220" class="stroke-faint" stroke-width="1"/><line x1="40" y1="220" x2="40" y2="30" class="stroke-faint" stroke-width="1"/><path d="M40,220 Q 270,-30 500,220" class="stroke-accent fill-none" stroke-width="2"/><line x1="40" y1="220" x2="110" y2="160" class="stroke-ink" stroke-width="2" marker-end="url(#a1)"/><text x="85" y="175" class="fill-ink">v₀</text><path d="M40,220 A30,30 0 0,1 70,195" class="stroke-dim fill-none" stroke-width="1"/><text x="65" y="215">θ</text><text x="260" y="45" text-anchor="middle">apex: vᵧ=0, vₓ≠0</text><text x="480" y="240" text-anchor="end" class="label">x</text><text x="50" y="40" class="label">y</text></svg>` },
    'unit-2': { caption: 'Free-body diagram on an incline. Weight decomposes into $mg\\sin\\theta$ (along) and $mg\\cos\\theta=N$ (perpendicular).', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Incline FBD"><defs><marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-ink"/></marker><marker id="a2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><line x1="30" y1="230" x2="490" y2="60" class="stroke-ink" stroke-width="2"/><line x1="30" y1="230" x2="490" y2="230" class="stroke-faint" stroke-width="1"/><path d="M30,230 A40,40 0 0,0 70,230" fill="none" class="stroke-dim"/><text x="85" y="226">θ</text><g transform="translate(220,150) rotate(-20)"><rect x="-30" y="-22" width="60" height="44" class="fill-paper stroke-ink" stroke-width="2"/><text x="0" y="4" text-anchor="middle" class="fill-ink" style="font-style:normal;font-weight:600;">m</text></g><line x1="220" y1="150" x2="260" y2="90" class="stroke-accent" stroke-width="2" marker-end="url(#a2a)"/><text x="270" y="88" class="fill-accent">N</text><line x1="220" y1="150" x2="220" y2="230" class="stroke-ink" stroke-width="2" marker-end="url(#a2)"/><text x="195" y="250">mg</text><line x1="220" y1="150" x2="267" y2="227" stroke-dasharray="3,3" class="stroke-dim" stroke-width="1.5"/><line x1="220" y1="150" x2="160" y2="112" stroke-dasharray="3,3" class="stroke-dim" stroke-width="1.5"/><text x="278" y="200">mg sinθ</text><text x="110" y="115">mg cosθ</text></svg>` },
    'unit-3': { caption: 'Potential-energy curve $U(x)=x^4-8x^2+10$. Valleys are stable equilibria; the hilltop is unstable. Horizontal $E$-line locates turning points.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="U(x) well"><line x1="40" y1="230" x2="500" y2="230" class="stroke-faint"/><line x1="260" y1="30" x2="260" y2="250" class="stroke-faint"/><path d="M 100,40 C 160,200 190,180 260,70 C 330,180 360,200 420,40" class="stroke-accent fill-none" stroke-width="2.5"/><line x1="40" y1="130" x2="500" y2="130" class="stroke-ochre" stroke-width="1.5" stroke-dasharray="5,5"/><text x="495" y="124" text-anchor="end" class="fill-ochre" style="font-style:normal">E = 5 J</text><circle cx="260" cy="70" r="4" class="fill-ink"/><text x="268" y="60" class="fill-ink">unstable</text><circle cx="190" cy="172" r="4" class="fill-teal"/><circle cx="330" cy="172" r="4" class="fill-teal"/><text x="185" y="195" class="fill-teal">stable</text><text x="325" y="195" class="fill-teal">stable</text><text x="495" y="248" class="label" text-anchor="end">x</text><text x="48" y="42" class="label">U(x)</text></svg>` },
    'unit-4': { caption: 'Impulse equals the signed area under $F(t)$. Deflecting a ball reverses its sign; total $J$ adds the two regions.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Impulse F(t)"><line x1="40" y1="200" x2="500" y2="200" class="stroke-faint"/><line x1="40" y1="30" x2="40" y2="240" class="stroke-faint"/><path d="M40,200 L120,60 L200,60 L280,200 Z" class="fill-accent" opacity="0.18"/><path d="M40,200 L120,60 L200,60 L280,200" class="stroke-accent fill-none" stroke-width="2.2"/><text x="160" y="130" text-anchor="middle" class="fill-accent" style="font-style:normal">J = ∫F dt = Δp</text><text x="495" y="220" class="label" text-anchor="end">t</text><text x="48" y="40" class="label">F(t)</text><line x1="280" y1="200" x2="280" y2="205" class="stroke-ink" stroke-width="1"/><text x="280" y="220" text-anchor="middle" class="label">T</text></svg>` },
    'unit-5': { caption: 'Rolling without slipping: contact point is instantaneously at rest. $v_{cm}=R\\omega$ relates translation and rotation.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Rolling disk"><defs><marker id="a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><line x1="30" y1="200" x2="500" y2="200" class="stroke-ink" stroke-width="2"/><g transform="translate(260,140)"><circle r="60" class="fill-paper stroke-ink" stroke-width="2"/><line x1="0" y1="0" x2="45" y2="-40" class="stroke-ink" stroke-width="1.5"/><circle r="3" class="fill-ink"/><path d="M -35,-15 A 40,40 0 0,1 35,-15" class="stroke-accent fill-none" stroke-width="1.8" marker-end="url(#a5)"/><text x="0" y="-75" text-anchor="middle" class="fill-accent" style="font-style:normal">ω</text><text x="12" y="-5" class="label">CM</text></g><line x1="335" y1="140" x2="420" y2="140" class="stroke-accent" stroke-width="2" marker-end="url(#a5)"/><text x="380" y="133" text-anchor="middle" class="fill-accent">v = Rω</text><circle cx="260" cy="200" r="4" class="fill-accent"/><text x="260" y="228" text-anchor="middle" class="label">v = 0 (contact)</text></svg>` },
    'unit-6': { caption: 'Kepler\'s 2nd law: the line from focus to planet sweeps equal areas in equal times — a direct consequence of angular-momentum conservation.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Kepler orbit"><ellipse cx="280" cy="130" rx="200" ry="90" class="stroke-accent fill-none" stroke-width="2"/><circle cx="160" cy="130" r="10" class="fill-ochre"/><text x="160" y="155" text-anchor="middle" class="fill-ochre" style="font-style:normal">Sun</text><circle cx="80" cy="130" r="4" class="fill-ink"/><text x="80" y="115" text-anchor="middle">perihelion</text><circle cx="480" cy="130" r="4" class="fill-ink"/><text x="480" y="115" text-anchor="middle">aphelion</text><path d="M160,130 L 96,90 A 200,90 0 0,1 130,75 Z" class="fill-teal" opacity="0.3"/><path d="M160,130 L 410,205 A 200,90 0 0,1 470,165 Z" class="fill-teal" opacity="0.3"/><text x="260" y="55" text-anchor="middle" class="fill-teal">equal areas in equal times</text></svg>` },
    'unit-7': { caption: 'Simple harmonic motion — $x(t)=A\\cos(\\omega t)$. Velocity leads position by $\\pi/2$; acceleration is $180°$ out of phase.', svg: `<svg class="diagram" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" aria-label="SHM"><line x1="40" y1="120" x2="500" y2="120" class="stroke-faint"/><path d="M 40,120 Q 95,10 150,120 T 260,120 T 370,120 T 480,120" class="stroke-accent fill-none" stroke-width="2.2"/><text x="495" y="110" class="fill-accent" style="font-style:normal" text-anchor="end">x(t)</text><line x1="150" y1="120" x2="150" y2="215" class="stroke-dim" stroke-dasharray="3,3"/><text x="150" y="230" text-anchor="middle" class="label">T/2</text><line x1="260" y1="120" x2="260" y2="215" class="stroke-dim" stroke-dasharray="3,3"/><text x="260" y="230" text-anchor="middle" class="label">T</text><line x1="40" y1="45" x2="495" y2="45" class="stroke-faint" stroke-dasharray="2,4"/><text x="38" y="48" text-anchor="end" class="label">+A</text><line x1="40" y1="195" x2="495" y2="195" class="stroke-faint" stroke-dasharray="2,4"/><text x="38" y="200" text-anchor="end" class="label">−A</text></svg>` },
    'unit-8': { caption: 'Pillbox through an infinite sheet of charge. Flux exits both caps, giving $E=\\sigma/(2\\varepsilon_0)$ on either side.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Gauss pillbox"><defs><marker id="a8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><rect x="40" y="120" width="460" height="12" class="fill-ochre" opacity="0.35"/><line x1="40" y1="126" x2="500" y2="126" class="stroke-ochre" stroke-width="1"/><text x="495" y="116" class="fill-ochre" style="font-style:normal" text-anchor="end">+σ (infinite sheet)</text><rect x="200" y="60" width="120" height="130" fill="none" class="stroke-accent" stroke-width="2" stroke-dasharray="5,3"/><line x1="230" y1="60" x2="230" y2="30" class="stroke-accent" stroke-width="2" marker-end="url(#a8)"/><line x1="260" y1="60" x2="260" y2="30" class="stroke-accent" stroke-width="2" marker-end="url(#a8)"/><line x1="290" y1="60" x2="290" y2="30" class="stroke-accent" stroke-width="2" marker-end="url(#a8)"/><line x1="230" y1="190" x2="230" y2="220" class="stroke-accent" stroke-width="2" marker-end="url(#a8)"/><line x1="260" y1="190" x2="260" y2="220" class="stroke-accent" stroke-width="2" marker-end="url(#a8)"/><line x1="290" y1="190" x2="290" y2="220" class="stroke-accent" stroke-width="2" marker-end="url(#a8)"/><text x="320" y="50" class="fill-accent">E above</text><text x="320" y="215" class="fill-accent">E below</text><text x="260" y="250" text-anchor="middle" class="label">Φ = 2EA = σA/ε₀</text></svg>` },
    'unit-9': { caption: 'Equipotentials (dashed) are perpendicular to field lines. Moving along an equipotential does no work.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Dipole equipotentials"><circle cx="200" cy="130" r="14" class="fill-accent"/><text x="200" y="135" text-anchor="middle" class="fill-paper" style="font-weight:700;font-style:normal;font-size:14px">+</text><circle cx="340" cy="130" r="14" class="fill-teal"/><text x="340" y="135" text-anchor="middle" class="fill-paper" style="font-weight:700;font-style:normal;font-size:14px">−</text><path d="M200,130 C 250,30 290,30 340,130" class="stroke-ink fill-none"/><path d="M200,130 C 240,60 300,60 340,130" class="stroke-ink fill-none"/><path d="M200,130 C 240,200 300,200 340,130" class="stroke-ink fill-none"/><path d="M200,130 C 250,230 290,230 340,130" class="stroke-ink fill-none"/><ellipse cx="235" cy="130" rx="70" ry="100" fill="none" class="stroke-dim" stroke-dasharray="3,3"/><ellipse cx="305" cy="130" rx="70" ry="100" fill="none" class="stroke-dim" stroke-dasharray="3,3"/><text x="260" y="248" text-anchor="middle" class="label">field lines — · — equipotentials</text></svg>` },
    'unit-10': { caption: 'Parallel-plate capacitor: uniform $E$ between plates, $V=Ed$, $C=\\varepsilon_0 A/d$. Fringing fields ignored in the ideal case.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Parallel plate capacitor"><defs><marker id="a10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><rect x="80" y="55" width="360" height="12" class="fill-accent"/><rect x="80" y="180" width="360" height="12" class="fill-teal"/><text x="260" y="45" text-anchor="middle" class="fill-accent" style="font-style:normal">+Q</text><text x="260" y="215" text-anchor="middle" class="fill-teal" style="font-style:normal">−Q</text><g class="stroke-ink" stroke-width="1.6"><line x1="140" y1="73" x2="140" y2="175" marker-end="url(#a10)"/><line x1="200" y1="73" x2="200" y2="175" marker-end="url(#a10)"/><line x1="260" y1="73" x2="260" y2="175" marker-end="url(#a10)"/><line x1="320" y1="73" x2="320" y2="175" marker-end="url(#a10)"/><line x1="380" y1="73" x2="380" y2="175" marker-end="url(#a10)"/></g><text x="475" y="130" class="label">E</text><path d="M70,90 Q 55,125 70,160" class="stroke-dim fill-none" stroke-dasharray="2,3"/><path d="M450,90 Q 465,125 450,160" class="stroke-dim fill-none" stroke-dasharray="2,3"/><text x="260" y="245" text-anchor="middle" class="label">C = ε₀A/d</text></svg>` },
    'unit-11': { caption: 'RC charging: $q(t)=Q_f(1-e^{-t/\\tau})$ approaches the asymptote $Q_f=C\\varepsilon$; at $t=\\tau$, $q=0.632\\,Q_f$.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="RC charging"><line x1="40" y1="210" x2="500" y2="210" class="stroke-faint"/><line x1="40" y1="30" x2="40" y2="230" class="stroke-faint"/><line x1="40" y1="60" x2="500" y2="60" class="stroke-dim" stroke-dasharray="4,4"/><text x="495" y="54" class="label" text-anchor="end">Q_f = Cε</text><path d="M 40,210 Q 120,100 220,75 T 500,62" class="stroke-accent fill-none" stroke-width="2.2"/><line x1="125" y1="210" x2="125" y2="115" class="stroke-ochre" stroke-dasharray="3,3"/><circle cx="125" cy="115" r="4" class="fill-ochre"/><text x="125" y="226" text-anchor="middle" class="label fill-ochre" style="fill:var(--d-ochre)">τ</text><text x="135" y="108" class="fill-ochre" style="font-style:normal">0.632 Q_f</text><text x="495" y="228" class="label" text-anchor="end">t</text><text x="48" y="42" class="label">q(t)</text></svg>` },
    'unit-12': { caption: 'Right-hand rule: thumb along current $I$, fingers curl in the direction of $\\vec B$. For a wire, field circles around it.', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="B-field of wire"><defs><marker id="a12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><line x1="260" y1="20" x2="260" y2="240" class="stroke-ink" stroke-width="4"/><polygon points="260,10 253,28 267,28" class="fill-ink"/><text x="272" y="20" class="fill-ink" style="font-style:normal">I</text><g class="stroke-accent fill-none" stroke-width="1.8"><path d="M 330,70 A 70,30 0 0,1 330,130" marker-end="url(#a12)"/><path d="M 340,170 A 80,35 0 0,1 340,230" marker-end="url(#a12)"/><path d="M 180,130 A 80,30 0 0,1 180,70" marker-end="url(#a12)"/></g><circle cx="400" cy="100" r="10" fill="none" class="stroke-accent" stroke-width="1.5"/><circle cx="400" cy="100" r="2.5" class="fill-accent"/><text x="420" y="104" class="fill-accent" style="font-style:normal">B out</text><circle cx="120" cy="200" r="10" fill="none" class="stroke-accent" stroke-width="1.5"/><line x1="113" y1="193" x2="127" y2="207" class="stroke-accent" stroke-width="1.5"/><line x1="127" y1="193" x2="113" y2="207" class="stroke-accent" stroke-width="1.5"/><text x="75" y="204" class="fill-accent" style="font-style:normal">B in</text><text x="260" y="255" text-anchor="middle" class="label">B = μ₀I / (2πr)</text></svg>` },
    'unit-13': { caption: 'Motional EMF: a rod of length $L$ moves at $v$ through $\\vec B$ into the page. Flux grows → induced current opposes the change (Lenz).', svg: `<svg class="diagram" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Sliding rod"><defs><marker id="a13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fill-accent"/></marker></defs><g class="fill-ochre" opacity="0.8"><circle cx="100" cy="70" r="3"/><circle cx="150" cy="70" r="3"/><circle cx="200" cy="70" r="3"/><circle cx="250" cy="70" r="3"/><circle cx="300" cy="70" r="3"/><circle cx="350" cy="70" r="3"/><circle cx="400" cy="70" r="3"/><circle cx="450" cy="70" r="3"/><circle cx="100" cy="130" r="3"/><circle cx="150" cy="130" r="3"/><circle cx="200" cy="130" r="3"/><circle cx="250" cy="130" r="3"/><circle cx="300" cy="130" r="3"/><circle cx="350" cy="130" r="3"/><circle cx="400" cy="130" r="3"/><circle cx="450" cy="130" r="3"/><circle cx="100" cy="190" r="3"/><circle cx="150" cy="190" r="3"/><circle cx="200" cy="190" r="3"/><circle cx="250" cy="190" r="3"/><circle cx="300" cy="190" r="3"/><circle cx="350" cy="190" r="3"/><circle cx="400" cy="190" r="3"/><circle cx="450" cy="190" r="3"/></g><line x1="80" y1="50" x2="80" y2="210" class="stroke-ink" stroke-width="2.5"/><line x1="80" y1="50" x2="350" y2="50" class="stroke-ink" stroke-width="2.5"/><line x1="80" y1="210" x2="350" y2="210" class="stroke-ink" stroke-width="2.5"/><rect x="60" y="115" width="40" height="30" class="fill-paper stroke-ink" stroke-width="2"/><text x="80" y="135" text-anchor="middle" class="label fill-ink" style="fill:var(--d-ink);font-size:11px">R</text><line x1="350" y1="40" x2="350" y2="220" class="stroke-accent" stroke-width="3"/><text x="355" y="35" class="fill-accent" style="font-style:normal">rod</text><line x1="360" y1="130" x2="430" y2="130" class="stroke-accent" stroke-width="2" marker-end="url(#a13)"/><text x="395" y="122" text-anchor="middle" class="fill-accent" style="font-style:normal">v</text><text x="480" y="70" class="fill-ochre" style="font-style:normal">B into page</text></svg>` }
  };
  Object.keys(DIAGRAMS).forEach((id) => {
    const unit = document.getElementById(id);
    if (!unit) return;
    const fig = unit.querySelector('figure');
    if (!fig) return;
    const { svg, caption } = DIAGRAMS[id];
    fig.innerHTML = svg + '<figcaption>' + caption + '</figcaption>';
  });

  /* ============ Inject expanded examples ============ */
  // Replace the original "Worked Examples" block in each unit with the
  // comprehensive archetype-by-archetype examples from examples.js.
  if (window.EXAMPLES) {
    Object.keys(window.EXAMPLES).forEach((id) => {
      const unit = document.getElementById(id);
      if (!unit) return;
      const h3s = Array.from(unit.querySelectorAll('h3'));
      const examplesHeader = h3s.find((h) => /worked examples/i.test(h.textContent));
      if (!examplesHeader) return;
      // Collect and remove old examples between "Worked Examples" and next h3
      let node = examplesHeader.nextElementSibling;
      const toRemove = [];
      while (node && node.tagName !== 'H3') {
        toRemove.push(node);
        node = node.nextElementSibling;
      }
      toRemove.forEach((n) => n.remove());
      // Inject new content
      const wrapper = document.createElement('div');
      wrapper.innerHTML = window.EXAMPLES[id];
      Array.from(wrapper.childNodes).forEach((child) => {
        examplesHeader.parentNode.insertBefore(child, node);
      });
    });
    // Inject a diagram before the Problem paragraph in each example
    if (window.EX_DIAGRAM_MAP && window.EX_SVG_LIB) {
      Object.keys(window.EX_DIAGRAM_MAP).forEach((unitId) => {
        const unit = document.getElementById(unitId);
        if (!unit) return;
        const details = Array.from(unit.querySelectorAll('details.example'));
        const keys = window.EX_DIAGRAM_MAP[unitId] || [];
        details.forEach((det, i) => {
          const key = keys[i];
          if (!key || !window.EX_SVG_LIB[key]) return;
          const summary = det.querySelector('summary');
          if (!summary) return;
          const fig = document.createElement('div');
          fig.className = 'ex-figure';
          fig.innerHTML = window.EX_SVG_LIB[key];
          summary.insertAdjacentElement('afterend', fig);
        });
      });
    }
    // Tell MathJax to typeset the new content
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch(() => {});
    }
  }

  /* ============ Theme ============ */
  const THEME_KEY = 'apc-theme';
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'ink' || savedTheme === 'paper') {
    body.dataset.theme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.dataset.theme = 'ink';
  }

  function toggleTheme() {
    const next = body.dataset.theme === 'ink' ? 'paper' : 'ink';
    body.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
  }
  themeToggle && themeToggle.addEventListener('click', toggleTheme);

  /* ============ Mobile menu ============ */
  function openMenu() {
    sidebar.classList.add('open');
    menuBtn.classList.add('open');
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add('visible'));
    body.style.overflow = 'hidden';
  }
  function closeMenu() {
    sidebar.classList.remove('open');
    menuBtn.classList.remove('open');
    backdrop.classList.remove('visible');
    setTimeout(() => { backdrop.hidden = true; }, 300);
    body.style.overflow = '';
  }
  menuBtn && menuBtn.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeMenu() : openMenu();
  });
  backdrop && backdrop.addEventListener('click', closeMenu);
  navLinks.forEach((l) =>
    l.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) closeMenu();
    })
  );

  /* ============ Keyboard shortcuts ============ */
  document.addEventListener('keydown', (e) => {
    const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
    if (e.key === '/' && !typing) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape') {
      if (document.activeElement === searchInput) {
        searchInput.value = '';
        applySearch('');
        searchInput.blur();
      } else if (sidebar.classList.contains('open')) {
        closeMenu();
      }
    } else if ((e.key === 't' || e.key === 'T') && !typing && !e.metaKey && !e.ctrlKey) {
      toggleTheme();
    }
  });

  /* ============ Search: debounced filter + highlight ============ */
  function clearHighlights(root) {
    root.querySelectorAll('.hl').forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlight(root, term) {
    if (!term) return;
    const regex = new RegExp('(' + escapeRegex(term) + ')', 'gi');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if (
          tag === 'SCRIPT' ||
          tag === 'STYLE' ||
          tag === 'MJX-CONTAINER' ||
          p.closest('mjx-container') ||
          p.closest('figure') ||
          p.closest('.eq-block') ||
          p.closest('.eq-card') ||
          p.closest('code')
        )
          return NodeFilter.FILTER_REJECT;
        return regex.test(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    const targets = [];
    let n;
    while ((n = walker.nextNode())) targets.push(n);
    targets.forEach((node) => {
      const frag = document.createDocumentFragment();
      const parts = node.nodeValue.split(regex);
      parts.forEach((part) => {
        if (regex.test(part)) {
          const span = document.createElement('span');
          span.className = 'hl';
          span.textContent = part;
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
        regex.lastIndex = 0;
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function applySearch(raw) {
    const term = raw.trim();
    units.forEach((u) => clearHighlights(u));

    if (!term) {
      units.forEach((u) => u.classList.remove('hidden'));
      noResults.hidden = true;
      return;
    }

    const lower = term.toLowerCase();
    let anyVisible = false;
    units.forEach((u) => {
      const hay = ((u.dataset.title || '') + ' ' + u.textContent).toLowerCase();
      if (hay.includes(lower)) {
        u.classList.remove('hidden');
        highlight(u, term);
        anyVisible = true;
      } else {
        u.classList.add('hidden');
      }
    });
    noResults.hidden = anyVisible;
  }

  let searchTimer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => applySearch(e.target.value), 120);
  });

  /* ============ Scroll-spy sidebar ============ */
  const linkByHref = Object.fromEntries(
    navLinks.map((l) => [l.getAttribute('href'), l])
  );

  const spyObserver = new IntersectionObserver(
    (entries) => {
      // Find the entry with the smallest positive top (most recently crossed into view)
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.target.offsetTop - b.target.offsetTop);
      if (!visible.length) return;
      const id = visible[0].target.id;
      if (!id) return;
      navLinks.forEach((l) => l.classList.remove('active'));
      const active = linkByHref['#' + id];
      if (active) active.classList.add('active');
    },
    { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
  );
  units.forEach((u) => u.id && spyObserver.observe(u));

  /* ============ Scroll-triggered fade-up reveal ============ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -80px 0px', threshold: 0.04 }
  );
  units.forEach((u) => revealObserver.observe(u));

  /* ============ Scroll progress + back-to-top ============ */
  function updateScrollUI() {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = height > 0 ? (scroll / height) * 100 : 0;
    if (progressFill) progressFill.style.width = pct + '%';
    if (toTop) {
      if (scroll > 600) toTop.classList.add('visible');
      else toTop.classList.remove('visible');
    }
  }
  let raf = null;
  window.addEventListener(
    'scroll',
    () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        updateScrollUI();
        raf = null;
      });
    },
    { passive: true }
  );
  toTop && toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
  updateScrollUI();
})();
