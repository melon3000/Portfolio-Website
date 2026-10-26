(() => {
  const P = PROJECTS;

  let lang = 'en';
  try { const s = localStorage.getItem('mp-lang'); if (s === 'et' || s === 'en') lang = s; } catch (e) {}
  let filter = 'all';

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arrow = '<svg viewBox="0 0 16 16"><path d="M5 11 11 5M6 5h5v5"/></svg>';

  function renderFeatured() {
    const g = document.getElementById('featGrid');
    g.innerHTML = P.filter(p => p.feat).map(p => {
      const t = p[lang];
      const badge = p.feat.best ? `<span class="tag-best">${T[lang].best}</span>` : p.feat.team ? `<span class="tag-team">${T[lang].team}</span>` : '';
      return `<article class="card reveal${p.feat.wide ? ' wide' : ''}">
        <div class="card-top"><div class="card-ico"><svg viewBox="0 0 24 24">${ICON[p.feat.icon]}</svg></div>${badge}</div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(t.d)}</p>
        <ul>${t.pts.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <div class="chips">${p.tech.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
        <a class="card-link" href="${GH + p.repo}" target="_blank" rel="noopener">${T[lang].code} ${arrow}</a>
      </article>`;
    }).join('');
  }

  function renderFilters() {
    const f = document.getElementById('filters');
    f.innerHTML = CATS.map(c => {
      const n = c.id === 'all' ? P.length : P.filter(p => p.cats.includes(c.id)).length;
      return n ? `<button type="button" data-f="${c.id}" class="${c.id === filter ? 'on' : ''}" aria-pressed="${c.id === filter}">${c[lang]}<small>${n}</small></button>` : '';
    }).join('');
  }

  function renderList() {
    const l = document.getElementById('list');
    l.innerHTML = P.map(p => `<a class="row${filter !== 'all' && !p.cats.includes(filter) ? ' hide' : ''}" href="${GH + p.repo}" target="_blank" rel="noopener">
        <h4>${esc(p.name)} <small>${p.year}</small></h4>
        <p>${esc(p[lang].d)}</p>
        <div class="chips">${p.tech.slice(0, 3).map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
        <span class="arrow">${arrow}</span>
      </a>`).join('');
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = T[lang][el.dataset.i18n]; if (v != null) el.textContent = v; });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = T[lang][el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    document.title = lang === 'et' ? 'Milan Petrovski — tarkvaraarendaja' : 'Milan Petrovski — Software Developer';
    renderFeatured(); renderFilters(); renderList(); observe(); bindGlow();
  }

  /* ---------- function chart (real math: f(x)=x³−3x) ---------- */
  function buildChart() {
    const X = x => 200 + x * 75;          // x in [-2.67, 2.67]
    const Y = y => 110 - y * 22.5;        // y scaled
    const pts = (fn) => { let d = ''; for (let i = 0; i <= 120; i++) { const x = -2.4 + i * 4.8 / 120; const y = fn(x); d += (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Math.max(-20, Math.min(240, Y(y))).toFixed(1) + ' '; } return d; };
    document.getElementById('fPath').setAttribute('d', pts(x => x ** 3 - 3 * x));
    document.getElementById('dfPath').setAttribute('d', pts(x => 3 * x * x - 3));
    const marks = [[-1, 2, '#4ADE80', 1.6], [1, -2, '#F87171', 1.75], [0, 0, '#F4F1FA', 1.9], [-Math.sqrt(3), 0, '#A8A8A8', 2.05], [Math.sqrt(3), 0, '#A8A8A8', 2.2]];
    document.getElementById('fxPts').innerHTML = marks.map(([x, y, c, d]) => `<circle class="pt" cx="${X(x)}" cy="${Y(y)}" r="4.5" fill="${c}" stroke="#08070D" stroke-width="2" style="animation-delay:${d}s"/>`).join('');
  }

  /* ---------- showcase tabs ---------- */
  const tabs = [...document.querySelectorAll('.win-tabs button')];
  const panes = [...document.querySelectorAll('.pane')];
  let cur = 0, timer = null, userTouched = false;
  function show(i) {
    cur = i;
    tabs.forEach((t, k) => { t.classList.toggle('on', k === i); t.setAttribute('aria-selected', k === i); });
    panes.forEach((p, k) => {
      if (k === i) { p.classList.remove('on'); void p.offsetWidth; p.classList.add('on'); }
      else p.classList.remove('on');
    });
    const bar = tabs[i].parentElement, t = tabs[i];
    if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({left: t.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2, behavior: 'smooth'});
  }
  tabs.forEach((t, i) => t.addEventListener('click', () => { userTouched = true; clearInterval(timer); show(i); }));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let onScreen = true;
  function autoplay() { if (reduce || userTouched) return; clearInterval(timer); timer = setInterval(() => { if (onScreen && !document.hidden) show((cur + 1) % panes.length); }, 7000); }
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { onScreen = es[0].isIntersecting; }, {threshold: .35}).observe(document.querySelector('.window'));

  /* ---------- reveal on scroll ---------- */
  let io;
  function observe() {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach(e => e.classList.add('in')); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .12, rootMargin: '0px 0px -40px 0px'});
    document.querySelectorAll('.reveal:not(.in)').forEach((e, i) => { e.style.transitionDelay = (e.closest('.feat-grid,.stack-grid') ? (i % 3) * 0.08 : 0) + 's'; io.observe(e); });
  }

  /* ---------- card glow follows cursor ---------- */
  function bindGlow() {
    document.querySelectorAll('.card').forEach(c => {
      if (c.dataset.glow) return; c.dataset.glow = 1;
      c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    });
  }

  /* ---------- events ---------- */
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; try { localStorage.setItem('mp-lang', lang); } catch (e) {} applyLang();
  }));
  document.getElementById('filters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return; filter = b.dataset.f; renderFilters(); renderList();
  });
  const nav = document.getElementById('nav'), menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', () => { const o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); });
  document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }));
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive: true});
  document.getElementById('copyBtn').addEventListener('click', async () => {
    const ok = document.getElementById('copyOk');
    try { await navigator.clipboard.writeText('Milan.Petrovski8@gmail.com'); ok.classList.add('show'); setTimeout(() => ok.classList.remove('show'), 1800); } catch (e) { location.href = 'mailto:Milan.Petrovski8@gmail.com'; }
  });

  /* ---------- init ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('marquee').innerHTML = [...STACK, ...STACK].map(s => `<span>${esc(s)}</span>`).join('');
  buildChart();
  applyLang();
  autoplay();
})();
