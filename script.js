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
