/* HAYATI Paris — front-end (maquette fonctionnelle, sans backend) */

// Numéro WhatsApp de la boutique (format international, sans + ni espaces, ex. '212612345678')
// Tant qu'il est vide, WhatsApp s'ouvre et laisse choisir le contact.
const WHATSAPP = '';

const C = {
  taupe: ['Taupe', '#A99686'], noir: ['Noir', '#1A1A1A'], beige: ['Beige', '#E4D3BD'],
  creme: ['Crème', '#F4EDDE'], marine: ['Marine', '#1F2D55'], chocolat: ['Chocolat', '#4A3428'],
  kaki: ['Kaki', '#7E8160'], blanc: ['Blanc cassé', '#F7F3EC'], bordeaux: ['Bordeaux', '#6A1F2C'],
  ciel: ['Bleu ciel', '#9DB9DA'], leopard: ['Léopard', '#9A6B3E'], rose: ['Rose', '#F2B8CB'],
  mauve: ['Mauve', '#8E5A6E'], jaune: ['Jaune', '#E9B44C'], gris: ['Gris', '#9C978F']
};

const CATEGORIES = {
  nouveautes: 'Nouveautés', ensembles: 'Ensembles', robes: 'Robes', chemises: 'Chemises', blazers: 'Blazers & Vestes'
};

const PRODUCTS = [
  { id: "ensemble-mandarin", name: "Ensemble Mandarin taupe", cat: "ensembles", price: 549, isNew: true, badge: "Nouveau", colors: ["taupe", "noir", "beige"],
    desc: "Ensemble deux pièces au col mandarin, fermé par de délicats boutons brandebourg. Veste ample aux manches larges et pantalon fluide : une silhouette pudique et moderne, de jour comme de soir." },
  { id: "ensemble-raye", name: "Ensemble rayé chemise + pantalon", cat: "ensembles", price: 489, isNew: true, badge: "Best-seller", colors: ["marine", "creme"],
    desc: "Chemise fluide et pantalon large à bandes graphiques marine sur fond crème. Un ensemble assorti, facile et élégant, pour un look parisien sans effort." },
  { id: "robe-maille-blanche", name: "Robe maille blanche boutons dorés", cat: "robes", price: 449, isNew: true, badge: "Nouveau", colors: ["blanc", "noir"],
    desc: "Robe longue en maille côtelée, boutonnage doré sur toute la longueur et bas légèrement évasé. Une pièce raffinée et confortable." },
  { id: "ensemble-kimono", name: "Ensemble kimono satin kaki", cat: "ensembles", price: 599, isNew: true, badge: "", colors: ["kaki", "beige"],
    desc: "Veste kimono croisée en satin jacquard, nouée sur le côté, et pantalon large assorti. Fluide, lumineux et délicatement pudique." },
  { id: "robe-longue-beige", name: "Robe longue beige boutons dorés", cat: "robes", price: 429, isNew: true, badge: "", colors: ["beige", "taupe"],
    desc: "Robe longue au col chemise, épaules froncées et boutons dorés. Coupe ample et tombé fluide pour une élégance au quotidien." },
  { id: "robe-noire-brodee", name: "Robe noire brodée", cat: "robes", price: 559, isNew: true, badge: "Édition limitée", colors: ["noir"],
    desc: "Robe longue noire ornée de fleurs brodées en relief, avec un bas en voile. Une pièce d’exception pour vos soirées." },
  { id: "blazer-noir", name: "Blazer noir", cat: "blazers", price: 499, isNew: true, badge: "", colors: ["noir"],
    desc: "Blazer coupe droite, revers crantés et deux boutons. L’indispensable qui structure toutes vos tenues." },
  { id: "veste-leopard", name: "Veste léopard", cat: "blazers", price: 529, isNew: true, badge: "Nouveau", colors: ["leopard"],
    desc: "Veste courte effet fourrure à motif léopard, col chemise et boutons pression. La touche audacieuse de la saison." },
  { id: "ensemble-bordeaux", name: "Ensemble bordeaux jupe plissée", cat: "ensembles", price: 579, isNew: true, badge: "Nouveau", colors: ["bordeaux"],
    desc: "Cardigan en maille texturée aux boutons dorés et jupe longue plissée assortie. Un ensemble chic et enveloppant." },
  { id: "robe-longue-plissee-beige", name: "Robe longue plissée col chemise", cat: "robes", price: 469, isNew: true, badge: "", colors: ["beige"],
    desc: "Robe longue à plis couchés, col chemise et boutons dorés. Une ligne pure et pudique, d’une grande douceur." },
  { id: "ensemble-satin-creme", name: "Ensemble satin crème", cat: "ensembles", price: 529, isNew: true, badge: "", colors: ["creme"],
    desc: "Blouse en satin drapée au col montant, manches bouffantes et pantalon assorti. Une allure lumineuse et sophistiquée." },
  { id: "chemise-rayee-creme", name: "Chemise rayée crème", cat: "chemises", price: 299, isNew: false, badge: "", colors: ["creme"],
    desc: "Chemise à fines rayures, taille marquée par des plis et manches amples. Se porte avec un pantalon large ou une jupe longue." },
  { id: "ensemble-satin-mauve", name: "Ensemble satin mauve", cat: "ensembles", price: 519, isNew: false, badge: "", colors: ["mauve"],
    desc: "Chemise et jupe longue évasée en satin mauve, à accessoiriser d’un foulard noué à la taille." },
  { id: "robe-fleurie-jaune", name: "Robe fleurie aquarelle", cat: "robes", price: 469, isNew: false, badge: "", colors: ["creme", "jaune"],
    desc: "Robe longue fluide à grandes fleurs effet aquarelle et manches évasées. Douce, lumineuse et pudique." },
  { id: "robe-noire-drapee", name: "Robe satin noire drapée", cat: "robes", price: 579, isNew: false, badge: "", colors: ["noir"],
    desc: "Robe longue en satin, col chemise et drapé noué à la taille. Une élégance intemporelle." },
  { id: "robe-maille-taupe", name: "Robe maille côtelée taupe", cat: "robes", price: 459, isNew: false, badge: "", colors: ["taupe"],
    desc: "Robe longue en maille côtelée, col polo et boutonnage nacré, jupe plissée. Confortable et raffinée." },
  { id: "robe-mousseline-bordeaux", name: "Robe mousseline bordeaux", cat: "robes", price: 399, isNew: false, badge: "", colors: ["bordeaux"],
    desc: "Robe en mousseline au col montant, manches bouffantes et jupe à volants." },
  { id: "ensemble-rose", name: "Ensemble chemise rayée rose", cat: "ensembles", price: 459, isNew: false, badge: "", colors: ["rose"],
    desc: "Chemise rayée nouée à la taille, poignets volantés et pantalon large assorti. Frais et féminin." },
  { id: "ensemble-maille-chocolat", name: "Ensemble maille chocolat", cat: "ensembles", price: 449, isNew: false, badge: "", colors: ["chocolat"],
    desc: "Polo en maille côtelée aux boutons dorés et jupe à volant assortie." },
  { id: "ensemble-dentelle-taupe", name: "T-shirt dentelle & pantalon", cat: "ensembles", price: 349, isNew: false, badge: "", colors: ["taupe", "chocolat"],
    desc: "T-shirt ample finition dentelle et pantalon droit à pinces. Une tenue simple et chic." },
  { id: "tailleur-beige", name: "Tailleur blazer beige", cat: "blazers", price: 599, isNew: false, badge: "", colors: ["beige"],
    desc: "Blazer croisé asymétrique et pantalon large assorti. Une silhouette structurée et moderne." },
  { id: "blazer-bordeaux", name: "Blazer croisé bordeaux", cat: "blazers", price: 549, isNew: false, badge: "", colors: ["bordeaux"],
    desc: "Blazer croisé oversize, revers crantés et poches à rabat." },
  { id: "veste-kaki", name: "Veste kaki col contrasté", cat: "blazers", price: 549, isNew: false, badge: "", colors: ["kaki"],
    desc: "Veste ample en coton, col contrasté, boutons dorés et grandes poches plaquées." },
  { id: "veste-maille-chocolat", name: "Veste maille chocolat boutons dorés", cat: "blazers", price: 489, isNew: false, badge: "", colors: ["chocolat"],
    desc: "Veste cintrée en maille structurée, col rond et boutons dorés. Se porte avec le pantalon assorti." },
  { id: "chemise-lin-bleu", name: "Chemise lin bleu bijoux dorés", cat: "chemises", price: 389, isNew: false, badge: "", colors: ["ciel"],
    desc: "Chemise en lin chiné ornée de boutons bijoux dorés : soleil, étoile de mer et coquillage." },
  { id: "chemise-rayee-noire", name: "Chemise rayée noire ceinturée", cat: "chemises", price: 339, isNew: false, badge: "", colors: ["noir"],
    desc: "Chemise longue à rayures tennis, ceinture à nouer et poignets larges." },
  { id: "chemise-grise", name: "Chemise grise oversize", cat: "chemises", price: 319, isNew: false, badge: "", colors: ["gris"],
    desc: "Chemise oversize au col asymétrique et patte boutonnée cachée." },
  { id: "tshirt-bleu-marine", name: "T-shirt bleu marine", cat: "chemises", price: 299, isNew: false, badge: "", colors: ["marine"],
    desc: "T-shirt ajusté en coton stretch, col rond. La base parfaite sous un blazer." }
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
// Panier : [{ id, color, size, qty }]
let CART_MEM = null;
const getCart = () => { const c = store.get('hayati-cart', CART_MEM || []); return Array.isArray(c) ? c.filter((x) => x && x.id).map((x) => ({ ...x, qty: x.qty || 1 })) : []; };
const setCart = (c) => { CART_MEM = c; store.set('hayati-cart', c); updateCart(); renderCart(); };
const cartCount = () => getCart().reduce((n, x) => n + (x.qty || 1), 0);
function updateCart() {
  const n = cartCount();
  document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = n; el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); });
}
function addToCart(item) {
  const c = getCart();
  const same = c.find((x) => x.id === item.id && x.color === item.color && x.size === item.size);
  if (same) same.qty = (same.qty || 1) + 1; else c.push({ ...item, qty: 1 });
  setCart(c);
}
function cartTotals(items) {
  const c = items || getCart();
  const pieces = c.reduce((n, x) => n + (x.qty || 1), 0);
  const sub = c.reduce((t, x) => { const p = PRODUCTS.find((y) => y.id === x.id); return t + (p ? p.price * (x.qty || 1) : 0); }, 0);
  const rate = pieces >= 3 ? 0.2 : pieces === 2 ? 0.15 : 0;
  const disc = Math.round(sub * rate);
  return { pieces, sub, rate, disc, total: sub - disc, label: pieces >= 3 ? 'Offre TRIO -20%' : pieces === 2 ? 'Offre DUO -15%' : '' };
}
/* ---------- Commande : formulaire paiement à la livraison (COD) ---------- */
const CITIES = ['Oujda', 'Casablanca', 'Rabat', 'Salé', 'Témara', 'Kénitra', 'Fès', 'Meknès', 'Marrakech', 'Agadir', 'Tanger', 'Tétouan', 'Al Hoceïma', 'Nador', 'Berkane', 'Taourirt', 'Saïdia', 'Guercif', 'Taza', 'El Jadida', 'Safi', 'Essaouira', 'Béni Mellal', 'Khouribga', 'Settat', 'Mohammedia', 'Larache', 'Ouarzazate', 'Errachidia', 'Laâyoune', 'Dakhla'];
let CHECKOUT_ITEMS = [];

function orderLines(items) {
  return items.map((x) => { const p = PRODUCTS.find((y) => y.id === x.id); return p ? `• ${p.name} — ${C[x.color] ? C[x.color][0] : ''}, taille ${x.size} × ${x.qty || 1} = ${p.price * (x.qty || 1)} DH` : ''; }).filter(Boolean);
}

function renderCheckoutModal() {
  if (document.getElementById('checkout')) return;
  const saved = store.get('hayati-client', {});
  const esc = (v) => String(v || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  document.body.insertAdjacentHTML('beforeend', `
  <div class="drawer modal" id="checkout" aria-hidden="true">
    <div class="drawer-bg" data-close-checkout></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="co-title">
      <div class="cart-head"><h2 id="co-title">Finaliser ma commande</h2><button class="icon-btn" type="button" aria-label="Fermer" data-close-checkout>${icon('close')}</button></div>
      <form class="co-form" id="co-form" novalidate>
        <div class="co-recap" id="co-recap"></div>
        <p class="co-cod">${icon('truck')}<span><b>Paiement à la livraison</b> — vous payez en espèces à la réception, partout au Maroc.</span></p>
        <div class="field"><label for="co-name">Nom complet *</label><input id="co-name" name="name" autocomplete="name" value="${esc(saved.name)}" required><small class="f-err">Veuillez indiquer votre nom complet.</small></div>
        <div class="field"><label for="co-phone">Téléphone *</label><input id="co-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="06 12 34 56 78" value="${esc(saved.phone)}" required><small class="f-err">Numéro marocain valide requis (ex. 06 12 34 56 78).</small></div>
        <div class="field-row">
          <div class="field"><label for="co-city">Ville *</label><input id="co-city" name="city" list="co-cities" autocomplete="address-level2" value="${esc(saved.city)}" required><datalist id="co-cities">${CITIES.map((c) => `<option value="${c}">`).join('')}</datalist><small class="f-err">Veuillez indiquer votre ville.</small></div>
          <div class="field"><label for="co-qty">Quartier</label><input id="co-qty" name="district" value="${esc(saved.district)}"></div>
        </div>
        <div class="field"><label for="co-addr">Adresse de livraison *</label><textarea id="co-addr" name="address" rows="2" autocomplete="street-address" placeholder="Rue, numéro, immeuble, repère…" required>${esc(saved.address)}</textarea><small class="f-err">Veuillez indiquer votre adresse.</small></div>
        <div class="field"><label for="co-note">Remarque (optionnel)</label><input id="co-note" name="note" placeholder="Horaire préféré, précision…"></div>
        <button type="submit" class="btn btn-wa btn-block">${icon('wa')}Envoyer ma commande sur WhatsApp</button>
        <p class="co-legal">Votre commande est confirmée par notre équipe sur WhatsApp avant l’expédition.</p>
      </form>
    </div>
  </div>`);
  document.querySelectorAll('[data-close-checkout]').forEach((b) => b.addEventListener('click', () => openCheckout(false)));
  const form = document.getElementById('co-form');
  form.addEventListener('input', (e) => { const f = e.target.closest('.field'); if (f) f.classList.remove('invalid'); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form).entries());
    Object.keys(d).forEach((k) => { d[k] = String(d[k]).trim(); });
    const phone = d.phone.replace(/[\s.\-()]/g, '');
    const checks = {
      name: d.name.length >= 3,
      phone: /^(?:\+212|00212|0)[5-7]\d{8}$/.test(phone),
      city: d.city.length >= 2,
      address: d.address.length >= 5
    };
    let first = null;
    Object.entries(checks).forEach(([k, ok]) => {
      const f = form.querySelector(`[name="${k}"]`).closest('.field');
      f.classList.toggle('invalid', !ok);
      if (!ok && !first) first = form.querySelector(`[name="${k}"]`);
    });
    if (first) { first.focus(); return; }
    store.set('hayati-client', { name: d.name, phone: d.phone, city: d.city, district: d.district, address: d.address });
    const t = cartTotals(CHECKOUT_ITEMS);
    const msg = `Bonjour HAYATI Paris, je souhaite passer commande :\n\n${orderLines(CHECKOUT_ITEMS).join('\n')}\n\n` +
      `Sous-total : ${t.sub} DH` + (t.disc ? `\n${t.label} : -${t.disc} DH` : '') + `\nTOTAL : ${t.total} DH\n` +
      `Paiement : à la livraison (COD)\n\n` +
      `— Informations de livraison —\nNom : ${d.name}\nTéléphone : ${d.phone}\nVille : ${d.city}` + (d.district ? `\nQuartier : ${d.district}` : '') +
      `\nAdresse : ${d.address}` + (d.note ? `\nRemarque : ${d.note}` : '') + `\n\nMerci !`;
    openWA(msg);
    openCheckout(false);
    toast('Commande prête : envoyez le message sur WhatsApp');
  });
}

function openCheckout(o = true, items) {
  renderCheckoutModal();
  const m = document.getElementById('checkout');
  if (o) {
    CHECKOUT_ITEMS = (items || []).map((x) => ({ ...x, qty: x.qty || 1 }));
    const t = cartTotals(CHECKOUT_ITEMS);
    document.getElementById('co-recap').innerHTML = CHECKOUT_ITEMS.map((x) => {
      const p = PRODUCTS.find((y) => y.id === x.id); if (!p) return '';
      return `<div class="co-item"><span class="co-img">${img(p.id, '')}</span><span class="co-txt"><b>${p.name}</b><small>${C[x.color] ? C[x.color][0] : ''} · Taille ${x.size} · Qté ${x.qty}</small></span><span class="co-p">${p.price * x.qty} DH</span></div>`;
    }).join('') + (t.disc ? `<div class="sum-row disc"><span>${t.label}</span><span>-${t.disc} DH</span></div>` : '') +
      `<div class="sum-row total"><span>Total à payer à la livraison</span><span>${t.total} DH</span></div>`;
    openCart(false);
  }
  m.classList.toggle('open', o);
  m.setAttribute('aria-hidden', !o);
  document.documentElement.style.overflow = o ? 'hidden' : '';
  if (o) setTimeout(() => { const f = document.querySelector('#co-form input:placeholder-shown, #co-name'); const empty = [...document.querySelectorAll('#co-form [required]')].find((i) => !i.value); (empty || f).focus({ preventScroll: true }); }, 350);
}

function renderCart() {
  const body = document.getElementById('cart-body');
  if (!body) return;
  const c = getCart();
  const t = cartTotals();
  document.getElementById('cart-title-n').textContent = t.pieces ? `(${t.pieces})` : '';
  if (!c.length) {
    body.innerHTML = `<div class="cart-empty">${icon('bag')}<p>Votre panier est vide.</p><a class="btn btn-dark" href="collection.html?cat=nouveautes">Découvrir la collection</a></div>`;
    document.getElementById('cart-foot').hidden = true;
    return;
  }
  document.getElementById('cart-foot').hidden = false;
  body.innerHTML = c.map((x, i) => {
    const p = PRODUCTS.find((y) => y.id === x.id); if (!p) return '';
    return `<div class="cart-item">
      <a class="ci-img" href="produit.html?id=${p.id}">${img(p.id, p.name)}</a>
      <div class="ci-info">
        <a class="ci-name" href="produit.html?id=${p.id}">${p.name}</a>
        <span class="ci-meta">${C[x.color] ? C[x.color][0] : ''} · Taille ${x.size}</span>
        <div class="ci-row">
          <div class="qty"><button type="button" data-q="${i}" data-d="-1" aria-label="Diminuer">−</button><span>${x.qty}</span><button type="button" data-q="${i}" data-d="1" aria-label="Augmenter">+</button></div>
          <span class="ci-price">${p.price * x.qty} DH</span>
        </div>
        <button type="button" class="ci-remove" data-rm="${i}">Retirer</button>
      </div>
    </div>`;
  }).join('');
  const hint = t.pieces === 1 ? 'Ajoutez 1 pièce pour profiter de -15% (DUO)' : t.pieces === 2 ? 'Ajoutez 1 pièce pour profiter de -20% (TRIO)' : 'Offre TRIO -20% appliquée';
  document.getElementById('cart-sum').innerHTML = `
    <p class="cart-hint">${icon('tag')}${hint}</p>
    <div class="sum-row"><span>Sous-total</span><span>${t.sub} DH</span></div>
    ${t.disc ? `<div class="sum-row disc"><span>${t.label}</span><span>-${t.disc} DH</span></div>` : ''}
    <div class="sum-row"><span>Livraison</span><span>Partout au Maroc</span></div>
    <div class="sum-row total"><span>Total</span><span>${t.total} DH</span></div>`;
}
function openCart(o = true) {
  const d = document.getElementById('cart');
  if (!d) return;
  if (o) renderCart();
  d.classList.toggle('open', o);
  d.setAttribute('aria-hidden', !o);
  document.documentElement.style.overflow = o ? 'hidden' : '';
}

function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.innerHTML = icon('check') + msg;
  t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
}

const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const openWA = (text) => { const w = window.open(waLink(text), '_blank'); if (w) { try { w.opener = null; } catch (e) {} } else { location.href = waLink(text); } };

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
          <button class="icon-btn" type="button" aria-label="Ouvrir le panier" data-open-cart>${icon('bag')}<span class="cart-count" data-cart-count>0</span></button>
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
  document.body.insertAdjacentHTML('beforeend', `
  <div class="drawer cart-drawer" id="cart" aria-hidden="true">
    <div class="drawer-bg" data-close-cart></div>
    <aside class="cart-panel" role="dialog" aria-label="Panier">
      <div class="cart-head"><h2>Mon panier <span id="cart-title-n"></span></h2><button class="icon-btn" type="button" aria-label="Fermer le panier" data-close-cart>${icon('close')}</button></div>
      <div class="cart-body" id="cart-body"></div>
      <div class="cart-foot" id="cart-foot" hidden>
        <div id="cart-sum"></div>
        <button type="button" class="btn btn-wa btn-block" data-cart-wa>${icon('wa')}Commander sur WhatsApp</button>
        <button type="button" class="btn btn-line btn-block" data-close-cart>Continuer mes achats</button>
      </div>
    </aside>
  </div>`);
  document.querySelectorAll('[data-open-cart]').forEach((b) => b.addEventListener('click', () => openCart(true)));
  document.querySelectorAll('[data-close-cart]').forEach((b) => b.addEventListener('click', () => openCart(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { openCart(false); if (document.getElementById('checkout')) openCheckout(false); } });
  document.querySelector('[data-cart-wa]').addEventListener('click', () => openCheckout(true, getCart()));
  document.getElementById('cart-body').addEventListener('click', (e) => {
    const c = getCart();
    const q = e.target.closest('[data-q]'); const rm = e.target.closest('[data-rm]');
    if (q) { const it = c[+q.dataset.q]; it.qty = Math.max(1, Math.min(9, it.qty + +q.dataset.d)); setCart(c); }
    if (rm) { c.splice(+rm.dataset.rm, 1); setCart(c); }
  });
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
    const ids = ['ensemble-satin-mauve', 'robe-fleurie-jaune', 'tailleur-beige', 'ensemble-rose', 'robe-noire-drapee', 'chemise-lin-bleu'];
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

  const COL = ['beige', 'creme', 'taupe', 'chocolat', 'noir', 'kaki', 'bordeaux', 'marine', 'rose', 'mauve', 'ciel', 'gris'];
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

  const err = document.getElementById('p-size-err');
  const needSize = () => {
    if (size) return false;
    err.hidden = false;
    sz.classList.remove('shake'); void sz.offsetWidth; sz.classList.add('shake');
    toast('Choisissez d’abord votre taille');
    sz.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return true;
  };
  sz.addEventListener('click', () => { if (size) { err.hidden = true; sz.classList.remove('shake'); } });
  document.querySelectorAll('[data-add]').forEach((b) => b.addEventListener('click', () => {
    if (needSize()) return;
    addToCart({ id: p.id, color, size });
    toast(`${p.name} ajouté au panier`);
    setTimeout(() => openCart(true), 350);
  }));
  document.querySelectorAll('[data-wa]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    if (needSize()) return;
    openCheckout(true, [{ id: p.id, color, size, qty: 1 }]);
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
  updateCart(); renderCart(); bindFavs(); reveal(); fixBroken();
});
window.addEventListener('load', fixBroken);
