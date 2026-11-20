/* HAYATI Paris — front-end (maquette fonctionnelle, sans backend) */

// Numéro WhatsApp de la boutique (format international, sans + ni espaces) — À REMPLACER
const WHATSAPP = '212600000000';

const C = {
  taupe: ['Taupe', '#A99686'], noir: ['Noir', '#1A1A1A'], beige: ['Beige', '#E4D3BD'],
  creme: ['Crème', '#F4EDDE'], marine: ['Marine', '#1F2D55'], chocolat: ['Chocolat', '#4A3428'],
  kaki: ['Kaki', '#7E8160'], blanc: ['Blanc cassé', '#F7F3EC'], bordeaux: ['Bordeaux', '#6A1F2C'],
  ciel: ['Bleu ciel', '#BFD0E2'], leopard: ['Léopard', '#B98A57']
};

const CATEGORIES = {
  nouveautes: 'Nouveautés', ensembles: 'Ensembles', robes: 'Robes', chemises: 'Chemises', blazers: 'Blazers & Vestes'
};

const PRODUCTS = [
  { id: 'ensemble-mandarin', name: 'Ensemble Mandarin taupe', cat: 'ensembles', price: 549, isNew: true, badge: 'Nouveau', colors: ['taupe', 'noir', 'beige'],
    desc: 'Ensemble deux pièces au col mandarin, fermé par de délicats boutons brandebourg. Veste ample aux manches larges et pantalon fluide : une silhouette pudique et moderne, de jour comme de soir.',
    extra: ['images/illustrations/ensemble-mandarin-detail.svg', 'images/illustrations/ensemble-mandarin-dos.svg'] },
  { id: 'ensemble-raye', name: 'Ensemble rayé chemise + pantalon', cat: 'ensembles', price: 489, isNew: true, badge: 'Best-seller', colors: ['marine', 'chocolat'],
    desc: 'Chemise fluide et pantalon large à rayures graphiques marine sur fond crème. Un ensemble assorti, facile et élégant, pour un look parisien sans effort.' },
  { id: 'robe-maille-blanche', name: 'Robe maille blanche boutons dorés', cat: 'robes', price: 449, isNew: true, badge: 'Nouveau', colors: ['blanc', 'noir'],
    desc: 'Robe longue en maille côtelée, boutonnage doré sur toute la longueur et bas légèrement évasé. Une pièce raffinée et confortable.' },
  { id: 'ensemble-kimono', name: 'Ensemble kimono satin kaki', cat: 'ensembles', price: 599, isNew: true, badge: '', colors: ['kaki', 'beige'],
    desc: 'Veste kimono croisée en satin jacquard, nouée sur le côté, et pantalon large assorti. Fluide, lumineux et délicatement pudique.' },
  { id: 'robe-longue-beige', name: 'Robe longue beige', cat: 'robes', price: 429, isNew: true, badge: '', colors: ['beige', 'taupe'],
    desc: 'Robe longue au col chemise, plis froncés et boutons dorés. Coupe ample et tombé fluide pour une élégance au quotidien.' },
  { id: 'robe-noire-brodee', name: 'Robe noire brodée', cat: 'robes', price: 559, isNew: true, badge: 'Édition limitée', colors: ['noir'],
    desc: 'Robe longue noire ornée de fleurs brodées en relief, avec un bas en voile. Une pièce d’exception pour vos soirées.' },
  { id: 'chemise-rayee-creme', name: 'Chemise rayée crème', cat: 'chemises', price: 299, isNew: false, badge: '', colors: ['creme', 'ciel'],
    desc: 'Chemise à fines rayures, taille marquée par des plis et manches bouffantes. Se porte avec un pantalon large ou une jupe longue.' },
  { id: 'blazer-noir', name: 'Blazer noir', cat: 'blazers', price: 499, isNew: true, badge: '', colors: ['noir', 'beige', 'bordeaux'],
    desc: 'Blazer coupe droite, revers crantés et deux boutons. L’indispensable qui structure toutes vos tenues.' },
  { id: 'veste-leopard', name: 'Veste léopard', cat: 'blazers', price: 529, isNew: true, badge: 'Nouveau', colors: ['leopard'],
    desc: 'Veste courte effet fourrure à motif léopard, col chemise et boutons pression. La touche audacieuse de la saison.' },
  { id: 'ensemble-bordeaux', name: 'Ensemble bordeaux jupe plissée', cat: 'ensembles', price: 579, isNew: false, badge: '', colors: ['bordeaux', 'chocolat'],
    desc: 'Cardigan en maille texturée aux boutons dorés et jupe longue plissée assortie. Un ensemble chic et enveloppant.' }
];

/* ---------- Images : photo réelle si présente, sinon illustration ---------- */
// Les vraies photos vont dans images/produits/<id>.jpg (et <id>-2.jpg, <id>-3.jpg pour la galerie)
const photo = (id) => `images/produits/${id}.jpg`;
const fallback = (id) => `images/illustrations/${id}.svg`;
const img = (id, alt = '', cls = '') =>
  `<img src="${photo(id)}" data-fallback="${fallback(id)}" alt="${alt}" class="${cls}" loading="lazy">`;

document.addEventListener('error', (e) => {
  const el = e.target;
  if (el.tagName !== 'IMG') return;
  if (el.dataset.fallback && el.src.indexOf(el.dataset.fallback) === -1) {
    el.src = el.dataset.fallback;
  } else if (el.dataset.optional !== undefined) {
    const host = el.closest('[data-slide]');
    if (host) host.remove();
  }
}, true);

// images déjà en erreur avant le chargement du script
function fixBroken() {
  document.querySelectorAll('img[data-fallback]').forEach((el) => {
    if (el.complete && el.naturalWidth === 0 && el.src.indexOf(el.dataset.fallback) === -1) el.src = el.dataset.fallback;
  });
}

/* ---------- Icônes ---------- */
const I = {
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  bag: '<path d="M5.5 8h13l-1 12h-11z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5"/>',
  menu: '<path d="M4 8h16M4 16h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  pin: '<path d="M12 21s-6-5.7-6-11a6 6 0 0 1 12 0c0 5.3-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/>',
  wa: '<path d="M4.5 19.5l1.2-3.6A7.5 7.5 0 1 1 8.4 18.6z"/><path d="M9.3 9.2c.2 2.3 2.4 4.5 4.8 4.9l1-1.1-1.6-.9-.8.6c-.9-.4-1.6-1.1-2-2l.6-.8-.8-1.6z"/>',
  insta: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".6" fill="currentColor"/>',
  truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/>',
  tag: '<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="8" r="1.3"/>',
  store: '<path d="M4 10v10h16V10"/><path d="M3 10l2-5h14l2 5"/><path d="M10 20v-5h4v5"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  ruler: '<path d="M3 16l13-13 5 5-13 13z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>'
};
const icon = (n, cls = 'icon') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;
const FLAG = '<svg class="flag" width="18" height="12" viewBox="0 0 18 12" role="img" aria-label="Maroc"><rect width="18" height="12" rx="1.5" fill="#C1272D"/><path d="M9 3.6L10.53 8.3L6.53 5.4L11.47 5.4L7.47 8.3Z" fill="none" stroke="#006233" stroke-width=".8" stroke-linejoin="round"/></svg>';

/* ---------- Panier & favoris (stockage local) ---------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const cartCount = () => store.get('hayati-cart', []).length;
function updateCart() { document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = cartCount(); }); }
function addToCart(item) { const c = store.get('hayati-cart', []); c.push(item); store.set('hayati-cart', c); updateCart(); }

function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.innerHTML = icon('check') + msg;
  t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
}

const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* ---------- Header & footer communs ---------- */
function renderHeader(active) {
  const nav = Object.entries(CATEGORIES).map(([k, v]) =>
    `<a href="collection.html?cat=${k}" class="${active === k ? 'active' : ''}">${v}</a>`).join('');
  const el = document.getElementById('site-header');
  if (!el) return;
  el.outerHTML = `
  <div class="promo">
    <span>Offre DUO <strong>-15%</strong></span><span class="dot" aria-hidden="true">·</span>
    <span>Offre TRIO <strong>-20%</strong></span><span class="dot" aria-hidden="true">·</span>
    <span>Livraison <span class="long">partout </span>au Maroc${FLAG}</span>
  </div>
  <header class="header">
    <div class="wrap">
      <div class="header-top">
        <div style="display:flex;align-items:center">
          <button class="icon-btn burger" type="button" aria-label="Ouvrir le menu" data-open-menu>${icon('menu')}</button>
          <label class="search"><span class="sr-only">Rechercher</span>${icon('search', 'icon')}<input type="search" placeholder="Rechercher une pièce"></label>
        </div>
        <a class="logo" href="index.html" aria-label="HAYATI Paris, accueil">
          <span class="logo-word">HAYATI</span><span class="logo-sub">Merychor · Paris</span>
        </a>
        <div class="header-icons">
          <a class="icon-btn hide-m" href="#" aria-label="Mon compte">${icon('user')}</a>
          <a class="icon-btn" href="#" aria-label="Favoris">${icon('heart')}</a>
          <a class="icon-btn" href="#" aria-label="Panier">${icon('bag')}<span class="cart-count" data-cart-count>0</span></a>
        </div>
      </div>
      <nav class="nav" aria-label="Menu principal">${nav}</nav>
    </div>
  </header>
  <div class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer-bg" data-close-menu></div>
    <div class="drawer-panel" role="dialog" aria-label="Menu">
      <div class="drawer-head">
        <span class="logo-word" style="font-size:24px">HAYATI</span>
        <button class="icon-btn" type="button" aria-label="Fermer le menu" data-close-menu>${icon('close')}</button>
      </div>
      ${Object.entries(CATEGORIES).map(([k, v]) => `<a class="dlink" href="collection.html?cat=${k}">${v}</a>`).join('')}
      <a class="btn btn-wa" style="margin-top:24px" href="${waLink('Bonjour HAYATI Paris, j’aimerais avoir des informations.')}" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
    </div>
  </div>`;
  const drawer = document.getElementById('drawer');
  document.querySelectorAll('[data-open-menu]').forEach((b) => b.addEventListener('click', () => { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); }));
  document.querySelectorAll('[data-close-menu]').forEach((b) => b.addEventListener('click', () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); }));
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.outerHTML = `
  <footer class="footer">
    <div class="wrap">
      <div class="news">
        <div><p class="ttl">Rejoignez le cercle <em>HAYATI</em></p><p>Nouveautés, offres privées et arrivages en avant-première.</p></div>
        <form onsubmit="event.preventDefault(); this.reset(); toast('Merci ! Vous êtes inscrite.');">
          <label class="sr-only" for="nl">Votre adresse e-mail</label>
          <input id="nl" type="email" placeholder="Votre adresse e-mail" required>
          <button type="submit">S’inscrire</button>
        </form>
      </div>
      <div class="foot-cols">
        <div class="foot-brand">
          <span class="logo-word">HAYATI</span><span class="logo-sub">Merychor · Paris</span>
          <p>Mode féminine chic et pudique, inspirée de Paris, depuis Oujda.</p>
        </div>
        <nav aria-label="Boutique"><h4>Boutique</h4>${Object.entries(CATEGORIES).map(([k, v]) => `<a href="collection.html?cat=${k}">${v}</a>`).join('')}</nav>
        <nav aria-label="Aide"><h4>Aide</h4><a href="#">Livraison</a><a href="#">Échanges &amp; retours</a><a href="#">Guide des tailles</a><a href="index.html#boutique">Contact</a></nav>
        <div><h4>Contact</h4>
          <span class="l">À côté de Café Abdou,<br>Lazaret, Oujda</span>
          <a href="${waLink('Bonjour HAYATI Paris !')}" target="_blank" rel="noopener">${icon('wa', 'icon')}WhatsApp</a>
          <a href="https://www.instagram.com/hayati_paris/" target="_blank" rel="noopener">${icon('insta', 'icon')}@hayati_paris</a>
        </div>
      </div>
      <div class="foot-bottom"><span>© ${new Date().getFullYear()} HAYATI Paris · Oujda, Maroc</span><span>Livraison partout au Maroc ${FLAG}</span></div>
    </div>
  </footer>`;
}

/* ---------- Carte produit ---------- */
function card(p) {
  const dots = p.colors.map((c) => `<i title="${C[c][0]}" style="background:${C[c][1]}"></i>`).join('');
  return `
  <article class="card reveal">
    <div class="card-media">
      <a href="produit.html?id=${p.id}" aria-label="${p.name}">${img(p.id, p.name)}</a>
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <button class="fav" type="button" aria-label="Ajouter aux favoris" aria-pressed="false" data-fav>${icon('heart')}</button>
      <a class="btn btn-dark quick" href="produit.html?id=${p.id}">Voir la pièce</a>
    </div>
    <a class="card-name" href="produit.html?id=${p.id}">${p.name}</a>
    <div class="card-foot"><span class="price">${p.price} DH</span><span class="dots">${dots}</span></div>
  </article>`;
}

function bindFavs(root = document) {
  root.querySelectorAll('[data-fav]').forEach((b) => {
    if (b._b) return; b._b = true;
    b.addEventListener('click', () => {
      const on = b.classList.toggle('on');
      b.setAttribute('aria-pressed', on);
      if (on) toast('Ajouté à vos favoris');
    });
  });
}

/* ---------- Animation d'apparition ---------- */
function reveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -40px 0px' });
  els.forEach((e) => io.observe(e));
}

/* ---------- Pages ---------- */
function pageHome() {
  const grid = document.getElementById('new-grid');
  if (grid) grid.innerHTML = PRODUCTS.filter((p) => p.isNew).slice(0, 8).map(card).join('');
  const insta = document.getElementById('insta');
  if (insta) {
    const ids = ['blouse-satin-creme', 'ensemble-maille-chocolat', 'boutique', 'blazer-bordeaux', 'ensemble-bordeaux', 'ensemble-raye'];
    insta.innerHTML = ids.map((id) => `<a href="https://www.instagram.com/hayati_paris/" target="_blank" rel="noopener" aria-label="Voir sur Instagram">${img(id, '')}</a>`).join('');
  }
}

function pageCollection() {
  const params = new URLSearchParams(location.search);
  let cat = params.get('cat') || 'nouveautes';
  if (!CATEGORIES[cat]) cat = 'nouveautes';
  const state = { cats: new Set(cat === 'nouveautes' ? [] : [cat]), sizes: new Set(), colors: new Set(), max: 600, sort: 'new' };

  document.getElementById('cat-title').textContent = CATEGORIES[cat];
  document.getElementById('cat-crumb').textContent = CATEGORIES[cat];
  document.title = `${CATEGORIES[cat]} — HAYATI Paris`;

  // tabs mobile
  const tabs = document.getElementById('cat-tabs');
  tabs.innerHTML = Object.entries(CATEGORIES).map(([k, v]) => `<button type="button" class="${k === cat ? 'on' : ''}" data-tab="${k}">${v}</button>`).join('');
  tabs.addEventListener('click', (e) => { const b = e.target.closest('[data-tab]'); if (b) location.href = `collection.html?cat=${b.dataset.tab}`; });

  // filtres
  const fc = document.getElementById('f-cats');
  fc.innerHTML = Object.entries(CATEGORIES).filter(([k]) => k !== 'nouveautes').map(([k, v]) =>
    `<label class="check"><input type="checkbox" value="${k}" ${state.cats.has(k) ? 'checked' : ''}>${v}</label>`).join('');
  fc.addEventListener('change', (e) => { e.target.checked ? state.cats.add(e.target.value) : state.cats.delete(e.target.value); draw(); });

  const SZ = ['S', 'M', 'L', 'XL', 'XXL'];
  const fs = document.getElementById('f-sizes');
  fs.innerHTML = SZ.map((s) => `<button type="button" class="size" data-size="${s}" aria-pressed="false">${s}</button>`).join('');
  fs.addEventListener('click', (e) => { const b = e.target.closest('[data-size]'); if (!b) return; const s = b.dataset.size; state.sizes.has(s) ? state.sizes.delete(s) : state.sizes.add(s); draw(); });

  const COL = ['taupe', 'beige', 'creme', 'noir', 'chocolat', 'kaki', 'bordeaux', 'marine'];
  const fco = document.getElementById('f-colors');
  fco.innerHTML = COL.map((c) => `<button type="button" class="sw" data-color="${c}" aria-label="${C[c][0]}" title="${C[c][0]}" aria-pressed="false"><i style="background:${C[c][1]}"></i></button>`).join('');
  fco.addEventListener('click', (e) => { const b = e.target.closest('[data-color]'); if (!b) return; const c = b.dataset.color; state.colors.has(c) ? state.colors.delete(c) : state.colors.add(c); draw(); });

  const range = document.getElementById('f-price');
  range.addEventListener('input', () => { state.max = +range.value; draw(); });
  document.getElementById('sort').addEventListener('change', (e) => { state.sort = e.target.value; draw(); });
  document.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => {
    state.cats.clear(); state.sizes.clear(); state.colors.clear(); state.max = 600; range.value = 600;
    fc.querySelectorAll('input').forEach((i) => { i.checked = false; }); draw();
  }));

  // panneau filtres mobile
  const panel = document.getElementById('filters'); const scrim = document.getElementById('scrim');
  const openF = (o) => { panel.classList.toggle('open', o); scrim.classList.toggle('open', o); };
  document.querySelectorAll('[data-open-filters]').forEach((b) => b.addEventListener('click', () => openF(true)));
  document.querySelectorAll('[data-close-filters]').forEach((b) => b.addEventListener('click', () => openF(false)));

  function draw() {
    let list = PRODUCTS.slice();
    if (cat === 'nouveautes' && state.cats.size === 0) list = list.filter((p) => p.isNew);
    if (state.cats.size) list = list.filter((p) => state.cats.has(p.cat));
    if (state.colors.size) list = list.filter((p) => p.colors.some((c) => state.colors.has(c)));
    list = list.filter((p) => p.price <= state.max);
    if (state.sort === 'asc') list.sort((a, b) => a.price - b.price);
    if (state.sort === 'desc') list.sort((a, b) => b.price - a.price);

    document.getElementById('grid').innerHTML = list.length ? list.map(card).join('') :
      '<p class="empty" style="grid-column:1/-1">Aucune pièce ne correspond à ces filtres.</p>';
    const n = `${list.length} pièce${list.length > 1 ? 's' : ''}`;
    document.querySelectorAll('[data-count]').forEach((el) => { el.textContent = n; });
    document.getElementById('f-price-val').textContent = `${state.max} DH`;

    fs.querySelectorAll('.size').forEach((b) => { const on = state.sizes.has(b.dataset.size); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    fco.querySelectorAll('.sw').forEach((b) => { const on = state.colors.has(b.dataset.color); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });

    const chips = [];
    state.cats.forEach((c) => chips.push([CATEGORIES[c], () => { state.cats.delete(c); fc.querySelector(`[value="${c}"]`).checked = false; }]));
    state.sizes.forEach((s) => chips.push([`Taille ${s}`, () => state.sizes.delete(s)]));
    state.colors.forEach((c) => chips.push([C[c][0], () => state.colors.delete(c)]));
    const chipsEl = document.getElementById('chips');
    chipsEl.innerHTML = chips.map(([l], i) => `<button type="button" class="chip" data-chip="${i}" aria-label="Retirer le filtre ${l}">${l} <span aria-hidden="true">×</span></button>`).join('');
    chipsEl.querySelectorAll('[data-chip]').forEach((b) => b.addEventListener('click', () => { chips[+b.dataset.chip][1](); draw(); }));
    bindFavs(); reveal();
  }
  draw();
}

function pageProduct() {
  const params = new URLSearchParams(location.search);
  const p = PRODUCTS.find((x) => x.id === params.get('id')) || PRODUCTS[0];
  document.title = `${p.name} — HAYATI Paris`;
  const words = p.name.split(' ');
  const last = words.pop();
  document.getElementById('p-name').innerHTML = `${words.join(' ')} <em>${last}</em>`;
  document.getElementById('p-crumb-cat').textContent = CATEGORIES[p.cat];
  document.getElementById('p-crumb-cat').href = `collection.html?cat=${p.cat}`;
  document.getElementById('p-crumb-name').textContent = p.name;
  document.getElementById('p-cat').textContent = CATEGORIES[p.cat] + (p.isNew ? ' · Nouvelle collection' : '');
  document.getElementById('p-price').textContent = `${p.price} DH`;
  document.getElementById('p-desc').textContent = p.desc;

  // galerie : photo principale + photos supplémentaires optionnelles
  const slides = [
    { src: photo(p.id), fb: fallback(p.id) },
    { src: `images/produits/${p.id}-2.jpg`, fb: (p.extra || [])[0] },
    { src: `images/produits/${p.id}-3.jpg`, fb: (p.extra || [])[1] },
    { src: `images/produits/${p.id}-4.jpg` }
  ];
  const thumbs = document.getElementById('thumbs');
  const dotsEl = document.getElementById('g-dots');
  const main = document.getElementById('main-img');
  thumbs.innerHTML = slides.map((s, i) => `<button type="button" data-slide="${i}" aria-label="Photo ${i + 1}"><img src="${s.src}" ${s.fb ? `data-fallback="${s.fb}"` : 'data-optional'} alt=""></button>`).join('');
  main.innerHTML = `<img src="${slides[0].src}" data-fallback="${slides[0].fb}" alt="${p.name}">`;
  let cur = 0;
  function show(i) {
    const btns = [...thumbs.querySelectorAll('[data-slide]')];
    if (!btns.length) return;
    cur = (i + btns.length) % btns.length;
    const t = btns[cur].querySelector('img');
    main.innerHTML = `<img src="${t.getAttribute('src')}" ${t.dataset.fallback ? `data-fallback="${t.dataset.fallback}"` : ''} alt="${p.name}, photo ${cur + 1}">`;
    btns.forEach((b, k) => b.classList.toggle('on', k === cur));
    document.getElementById('counter').textContent = `${cur + 1} / ${btns.length}`;
    dotsEl.innerHTML = btns.map((b, k) => `<button type="button" class="${k === cur ? 'on' : ''}" data-dot="${k}" aria-label="Photo ${k + 1}"><span></span></button>`).join('');
  }
  thumbs.addEventListener('click', (e) => { const b = e.target.closest('[data-slide]'); if (b) show([...thumbs.querySelectorAll('[data-slide]')].indexOf(b)); });
  dotsEl.addEventListener('click', (e) => { const b = e.target.closest('[data-dot]'); if (b) show(+b.dataset.dot); });
  // swipe mobile
  let x0 = null;
  main.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  main.addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
  setTimeout(() => show(0), 600);
  show(0);

  // couleurs
  let color = p.colors[0];
  const sw = document.getElementById('p-colors');
  sw.innerHTML = p.colors.map((c) => `<button type="button" class="sw" data-c="${c}" aria-label="${C[c][0]}" aria-pressed="false"><i style="background:${C[c][1]}"></i></button>`).join('');
  const drawColor = () => {
    sw.querySelectorAll('.sw').forEach((b) => { const on = b.dataset.c === color; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    document.getElementById('p-color-name').textContent = C[color][0];
  };
  sw.addEventListener('click', (e) => { const b = e.target.closest('[data-c]'); if (b) { color = b.dataset.c; drawColor(); } });
  drawColor();

  // tailles
  let size = null;
  const SZ = ['S', 'M', 'L', 'XL', 'XXL'];
  const sz = document.getElementById('p-sizes');
  sz.innerHTML = SZ.map((s) => `<button type="button" class="size" data-s="${s}" aria-pressed="false" ${s === 'XXL' ? 'disabled' : ''}>${s}</button>`).join('');
  const drawSize = () => {
    sz.querySelectorAll('.size').forEach((b) => { const on = b.dataset.s === size; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    document.getElementById('p-size-name').textContent = size || 'choisir';
  };
  sz.addEventListener('click', (e) => { const b = e.target.closest('[data-s]'); if (b && !b.disabled) { size = b.dataset.s; drawSize(); } });
  drawSize();

  const needSize = () => { if (!size) { toast('Choisissez votre taille'); sz.scrollIntoView({ behavior: 'smooth', block: 'center' }); return true; } return false; };
  document.querySelectorAll('[data-add]').forEach((b) => b.addEventListener('click', () => {
    if (needSize()) return;
    addToCart({ id: p.id, color, size }); toast(`${p.name} ajouté au panier`);
  }));
  document.querySelectorAll('[data-wa]').forEach((a) => a.addEventListener('click', (e) => {
    if (needSize()) { e.preventDefault(); return; }
    a.href = waLink(`Bonjour HAYATI Paris, je souhaite commander :\n• ${p.name}\n• Couleur : ${C[color][0]}\n• Taille : ${size}\n• Prix : ${p.price} DH\n\nMerci !`);
  }));

  // suggestions
  const rel = PRODUCTS.filter((x) => x.id !== p.id).sort((a, b) => (b.cat === p.cat) - (a.cat === p.cat)).slice(0, 4);
  document.getElementById('related').innerHTML = rel.map(card).join('');
  document.body.classList.add('has-bar');
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  const active = page === 'collection' ? (new URLSearchParams(location.search).get('cat') || 'nouveautes') :
    page === 'product' ? (PRODUCTS.find((x) => x.id === new URLSearchParams(location.search).get('id')) || PRODUCTS[0]).cat : '';
  renderHeader(active);
  renderFooter();
  if (page === 'home') pageHome();
  if (page === 'collection') pageCollection();
  if (page === 'product') pageProduct();
  updateCart(); bindFavs(); reveal(); fixBroken();
});
window.addEventListener('load', fixBroken);
