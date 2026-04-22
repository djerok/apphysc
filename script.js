// AP Physics C study site — navigation, search, UI polish

(function () {
  const searchInput = document.getElementById('search');
  const units = Array.from(document.querySelectorAll('.unit'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const noResults = document.getElementById('noresults');
  const toTop = document.getElementById('toTop');

  // Keyboard shortcut: "/" focuses search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      applySearch('');
      searchInput.blur();
    }
  });

  // Search: filter sections; highlight matches in text nodes
  function clearHighlights(root) {
    root.querySelectorAll('.hl').forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
  }

  function highlight(root, term) {
    if (!term) return;
    const regex = new RegExp(
      '(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')',
      'gi'
    );
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
          p.closest('.eq-card')
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
    // Clear all previous highlights first
    units.forEach((u) => clearHighlights(u));

    if (!term) {
      units.forEach((u) => u.classList.remove('hidden'));
      noResults.hidden = true;
      return;
    }

    const lower = term.toLowerCase();
    let anyVisible = false;
    units.forEach((u) => {
      const text = (u.dataset.title + ' ' + u.textContent).toLowerCase();
      if (text.includes(lower)) {
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

  // Active-nav highlight based on scroll position
  const navByHref = Object.fromEntries(
    navLinks.map((l) => [l.getAttribute('href'), l])
  );
  const sectionIds = units.map((u) => u.id).filter(Boolean);

  function updateActive() {
    const scrollPos = window.scrollY + 120;
    let currentId = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= scrollPos) currentId = id;
    }
    navLinks.forEach((l) => l.classList.remove('active'));
    const active = navByHref['#' + currentId];
    if (active) active.classList.add('active');
  }

  // Back-to-top button visibility
  function updateToTop() {
    if (window.scrollY > 600) toTop.classList.add('visible');
    else toTop.classList.remove('visible');
  }

  let raf = null;
  window.addEventListener(
    'scroll',
    () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        updateActive();
        updateToTop();
        raf = null;
      });
    },
    { passive: true }
  );

  toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  // Smooth scroll for nav clicks (CSS handles it, but close the mobile keyboard)
  navLinks.forEach((l) =>
    l.addEventListener('click', () => {
      if (document.activeElement === searchInput) searchInput.blur();
    })
  );

  updateActive();
  updateToTop();
})();
