# Défi Mensuel — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer `challenge.html` avec son propre design system dark navy/ice blue/gold, entièrement autonome, sans modifier les fichiers existants.

**Architecture:** Trois fichiers autonomes — `challenge.html` (structure), `css/challenge.css` (design system complet via CSS variables + animations), `js/challenge.js` (countdown + burger). Aucune dépendance sur `css/style.css` ou les JS existants.

**Tech Stack:** HTML5 sémantique, CSS3 (variables, clip-path, backdrop-filter, keyframes), Vanilla JS ES6, Google Fonts (Cinzel Decorative + Cormorant Garamond).

---

## Fichiers à créer

| Fichier | Responsabilité |
|---|---|
| `challenge.html` | Structure complète de la page (8 sections) |
| `css/challenge.css` | Design system isolé : variables, reset partiel, composants, animations, responsive |
| `js/challenge.js` | Countdown temps réel + burger mobile |

---

### Task 1 : Squelette HTML + Design System CSS (variables, fond animé)

**Files:**
- Create: `challenge.html`
- Create: `css/challenge.css`

- [ ] **Step 1 : Créer `css/challenge.css` avec variables et fond animé**

```css
/* =========================================================
   ArtisanForge — Challenge Design System
   Dark Navy · Ice Blue · Gold Gradient
   ========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

/* ----- Variables ---------------------------------------- */
:root {
  --ch-bg:          #0a1628;
  --ch-card:        rgba(20,50,120,0.4);
  --ch-border:      rgba(122,184,255,0.3);
  --ch-border-gold: rgba(240,165,0,0.6);
  --ch-gold-1:      #ffe08a;
  --ch-gold-2:      #ffc933;
  --ch-gold-3:      #f0a500;
  --ch-gold-4:      #e8640a;
  --ch-text:        rgba(255,220,130,0.8);
  --ch-accent:      #7bb8f0;
  --ch-gradient:    linear-gradient(135deg, var(--ch-gold-1), var(--ch-gold-2), var(--ch-gold-3), var(--ch-gold-4));
  --ch-trans:       .25s ease;
  --ch-max-w:       1200px;
}

/* ----- Reset partiel ------------------------------------ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scrollbar-width: none; }
html::-webkit-scrollbar { display: none; }

.ch-page {
  background: var(--ch-bg);
  color: var(--ch-text);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 16px;
  line-height: 1.7;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { cursor: pointer; font-family: inherit; border: none; background: none; }

/* ----- Typography --------------------------------------- */
.ch-display {
  font-family: 'Cinzel Decorative', serif;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  line-height: 1.2;
}

.ch-accent-text { color: var(--ch-accent); }
.ch-body { color: var(--ch-text); }
.ch-italic { font-style: italic; font-weight: 300; }

/* ----- Layout ------------------------------------------- */
.ch-container { max-width: var(--ch-max-w); margin: 0 auto; padding: 0 24px; }
.ch-section    { padding: 96px 0; }

/* ----- Ice block clip-path ------------------------------ */
.ice-block {
  clip-path: polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px);
  background: var(--ch-card);
  border: 1px solid var(--ch-border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.ice-block--lg {
  clip-path: polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px);
}

.ice-block--gold-top {
  border-top: 2px solid var(--ch-border-gold);
}

/* ----- Fond animé --------------------------------------- */
.ch-bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.ch-grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(74,144,226,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74,144,226,0.08) 1px, transparent 1px);
  background-size: 60px 60px;
}

.ch-radial {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 20% 30%, rgba(30,80,180,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 80% 70%, rgba(240,165,0,0.06) 0%, transparent 60%);
}

.ch-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.ch-particle {
  position: absolute;
  border-radius: 50%;
  animation: ch-float linear infinite;
  opacity: 0;
}

@keyframes ch-float {
  0%   { transform: translateY(100vh) scale(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(-20vh) scale(1); opacity: 0; }
}

.ch-page > * { position: relative; z-index: 1; }
```

- [ ] **Step 2 : Créer `challenge.html` — squelette de base**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Défi des Artisans — ArtisanForge</title>
  <meta name="description" content="Le défi mensuel ArtisanForge — Avril 2026 : Le Temps Suspendu. Soumettez votre œuvre et rejoignez la compétition artistique.">
  <link rel="stylesheet" href="css/challenge.css">
</head>
<body class="ch-page">

  <!-- Fond animé -->
  <div class="ch-bg-layer" aria-hidden="true">
    <div class="ch-grid-lines"></div>
    <div class="ch-radial"></div>
    <div class="ch-particles" id="chParticles"></div>
  </div>

  <!-- NAV (Task 2) -->
  <!-- HERO (Task 3) -->
  <!-- TIMELINE (Task 5) -->
  <!-- THEME (Task 6) -->
  <!-- CRITERIA (Task 7) -->
  <!-- GALLERY (Task 8) -->
  <!-- REWARDS (Task 9) -->
  <!-- CTA (Task 10) -->

  <script src="js/challenge.js"></script>
</body>
</html>
```

- [ ] **Step 3 : Vérifier dans le navigateur**

Ouvrir `challenge.html` dans le navigateur. Attendu : fond navy sombre, grille bleue subtile, pas d'erreur console.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: challenge page skeleton with design system CSS"
```

---

### Task 2 : Navigation

**Files:**
- Modify: `challenge.html` (section NAV)
- Modify: `css/challenge.css` (ajouter styles nav)

- [ ] **Step 1 : Ajouter les styles nav dans `css/challenge.css`**

```css
/* ----- Navigation --------------------------------------- */
.ch-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10,22,40,0.85);
  border-bottom: 1px solid var(--ch-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.ch-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: var(--ch-max-w);
  margin: 0 auto;
  padding: 0 24px;
}

.ch-nav__logo {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.3rem;
  font-weight: 700;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
}

.ch-nav__links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.ch-nav__links a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--ch-accent);
  letter-spacing: 0.5px;
  transition: color var(--ch-trans);
  position: relative;
}

.ch-nav__links a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0; right: 0;
  height: 1px;
  background: var(--ch-gradient);
  transform: scaleX(0);
  transition: transform var(--ch-trans);
}

.ch-nav__links a:hover::after,
.ch-nav__links a.active::after { transform: scaleX(1); }

.ch-nav__links a.active {
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ch-nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  padding: 4px;
}

.ch-nav__burger span {
  display: block;
  height: 2px;
  background: var(--ch-gold-2);
  transition: transform var(--ch-trans), opacity var(--ch-trans);
}

/* Mobile drawer */
.ch-nav.nav-open .ch-nav__links {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  left: 0; right: 0;
  background: rgba(10,22,40,0.97);
  padding: 24px;
  gap: 20px;
  border-bottom: 1px solid var(--ch-border);
}

@media (max-width: 768px) {
  .ch-nav__links { display: none; }
  .ch-nav__burger { display: flex; }
}
```

- [ ] **Step 2 : Ajouter le HTML nav dans `challenge.html`**

Remplacer `<!-- NAV (Task 2) -->` par :

```html
  <nav class="ch-nav" id="chNav">
    <div class="ch-nav__inner">
      <a href="#" class="ch-nav__logo">ArtisanForge</a>
      <ul class="ch-nav__links">
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="challenge.html" class="active">Défi Mensuel</a></li>
        <li><a href="artistes.html">Artistes</a></li>
        <li><a href="#recompenses">Récompenses</a></li>
        <li><a href="#apropos">À Propos</a></li>
      </ul>
      <button class="ch-nav__burger" id="chBurger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : nav fixe transparente en haut, logo gold, liens bleu-glacier, "Défi Mensuel" gold. Réduire la fenêtre < 768px → burger visible, liens masqués.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: challenge nav with mobile burger"
```

---

### Task 3 : Section Hero (badge + titre + sous-titre)

**Files:**
- Modify: `challenge.html` (section HERO)
- Modify: `css/challenge.css` (styles hero)

- [ ] **Step 1 : Ajouter les styles hero dans `css/challenge.css`**

```css
/* ----- Hero --------------------------------------------- */
.ch-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
}

.ch-hero__inner { max-width: 800px; margin: 0 auto; }

.ch-hero__badge {
  display: inline-block;
  padding: 8px 24px;
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: var(--ch-gold-2);
  border: 1px solid var(--ch-border-gold);
  clip-path: polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px);
  margin-bottom: 32px;
  animation: ch-pulse-border 2s ease-in-out infinite;
}

@keyframes ch-pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 rgba(240,165,0,0); border-color: rgba(240,165,0,0.6); }
  50%       { box-shadow: 0 0 16px 2px rgba(240,165,0,0.25); border-color: rgba(240,165,0,1); }
}

.ch-hero__title {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  margin-bottom: 20px;
}

.ch-hero__subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-style: italic;
  font-weight: 300;
  color: var(--ch-accent);
  margin-bottom: 12px;
}

.ch-hero__desc {
  font-size: 1.05rem;
  color: var(--ch-text);
  max-width: 560px;
  margin: 0 auto 48px;
  line-height: 1.8;
}
```

- [ ] **Step 2 : Ajouter le HTML hero dans `challenge.html`**

Remplacer `<!-- HERO (Task 3) -->` par :

```html
  <section class="ch-hero">
    <div class="ch-hero__inner">
      <div class="ch-hero__badge">◆ Avril 2026 ◆</div>
      <h1 class="ch-display ch-hero__title">Défi des Artisans</h1>
      <p class="ch-hero__subtitle">Mensuel · Thématique · Compétitif</p>
      <p class="ch-hero__desc">
        Chaque mois, un thème. Chaque artisan, une vision. Soumettez votre œuvre,
        faites voter la communauté, et disputez-vous le titre de Maître Artisan.
      </p>
      <!-- Countdown (Task 4) -->
      <div id="chCountdown"></div>
    </div>
  </section>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : hero centré plein écran, badge pulsant doré, titre Cinzel Decorative gold gradient, sous-titre bleu-glacier, description.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: challenge hero section"
```

---

### Task 4 : Countdown JS + Particules

**Files:**
- Create: `js/challenge.js`
- Modify: `css/challenge.css` (styles countdown)

- [ ] **Step 1 : Ajouter les styles countdown dans `css/challenge.css`**

```css
/* ----- Countdown ---------------------------------------- */
.ch-countdown {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.ch-countdown__block {
  min-width: 80px;
  padding: 16px 12px;
  text-align: center;
}

.ch-countdown__num {
  font-family: 'Cinzel Decorative', serif;
  font-size: 2.2rem;
  font-weight: 700;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: block;
  margin-bottom: 8px;
}

.ch-countdown__label {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ch-accent);
  font-weight: 400;
}
```

- [ ] **Step 2 : Créer `js/challenge.js`**

```js
/* ArtisanForge — Challenge Page */

/* ── Particules flottantes ───────────────────────────────── */
(function initParticles() {
  const container = document.getElementById('chParticles');
  if (!container) return;

  const colors = [
    'rgba(122,184,255,0.6)',
    'rgba(255,220,130,0.5)',
    'rgba(74,144,226,0.5)',
    'rgba(240,165,0,0.4)',
  ];

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'ch-particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
})();

/* ── Countdown ───────────────────────────────────────────── */
(function initCountdown() {
  const deadline = new Date('2026-04-30T23:59:59');
  const container = document.getElementById('chCountdown');
  if (!container) return;

  container.className = 'ch-countdown';
  container.innerHTML = `
    <div class="ch-countdown__block ice-block">
      <span class="ch-countdown__num" id="cdDays">--</span>
      <span class="ch-countdown__label">Jours</span>
    </div>
    <div class="ch-countdown__block ice-block">
      <span class="ch-countdown__num" id="cdHours">--</span>
      <span class="ch-countdown__label">Heures</span>
    </div>
    <div class="ch-countdown__block ice-block">
      <span class="ch-countdown__num" id="cdMinutes">--</span>
      <span class="ch-countdown__label">Minutes</span>
    </div>
    <div class="ch-countdown__block ice-block">
      <span class="ch-countdown__num" id="cdSeconds">--</span>
      <span class="ch-countdown__label">Secondes</span>
    </div>
  `;

  function tick() {
    const now  = new Date();
    const diff = deadline - now;

    if (diff <= 0) {
      container.innerHTML = '<p class="ch-accent-text" style="font-size:1.2rem;letter-spacing:2px;">SOUMISSIONS CLOSES</p>';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cdDays').textContent    = pad(d);
    document.getElementById('cdHours').textContent   = pad(h);
    document.getElementById('cdMinutes').textContent = pad(m);
    document.getElementById('cdSeconds').textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();

/* ── Burger mobile ───────────────────────────────────────── */
(function initBurger() {
  const burger = document.getElementById('chBurger');
  const nav    = document.getElementById('chNav');
  if (!burger || !nav) return;
  burger.addEventListener('click', () => nav.classList.toggle('nav-open'));
})();
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : 4 blocs ice countdown avec décompte en temps réel vers le 30 avril 2026, particules flottantes visibles sur le fond.

- [ ] **Step 4 : Commit**

```bash
git add js/challenge.js css/challenge.css
git commit -m "feat: countdown timer and floating particles"
```

---

### Task 5 : Timeline horizontale

**Files:**
- Modify: `challenge.html` (section TIMELINE)
- Modify: `css/challenge.css` (styles timeline)

- [ ] **Step 1 : Ajouter les styles timeline dans `css/challenge.css`**

```css
/* ----- Timeline ----------------------------------------- */
.ch-timeline { padding: 0 0 64px; }

.ch-timeline__title {
  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 40px;
}

.ch-timeline__track {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  overflow-x: auto;
  padding: 0 24px;
}

.ch-timeline__phase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 100px;
  position: relative;
}

.ch-timeline__phase:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 11px;
  left: calc(50% + 12px);
  right: calc(-50% + 12px);
  height: 2px;
  background: linear-gradient(90deg, var(--ch-gold-3), var(--ch-border));
  z-index: 0;
}

.ch-timeline__dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--ch-border);
  background: var(--ch-bg);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.ch-timeline__phase--past .ch-timeline__dot {
  background: var(--ch-gold-3);
  border-color: var(--ch-gold-3);
  opacity: 0.6;
}

.ch-timeline__phase--active .ch-timeline__dot {
  background: var(--ch-gold-2);
  border-color: var(--ch-gold-1);
  box-shadow: 0 0 0 4px rgba(255,201,51,0.2), 0 0 16px rgba(255,201,51,0.4);
  animation: ch-dot-pulse 2s ease-in-out infinite;
}

@keyframes ch-dot-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(255,201,51,0.2), 0 0 12px rgba(255,201,51,0.3); }
  50%       { box-shadow: 0 0 0 8px rgba(255,201,51,0.1), 0 0 24px rgba(255,201,51,0.5); }
}

.ch-timeline__name {
  font-size: 0.78rem;
  letter-spacing: 1px;
  text-align: center;
  color: var(--ch-text);
  font-weight: 400;
}

.ch-timeline__phase--past .ch-timeline__name { opacity: 0.5; }

.ch-timeline__phase--active .ch-timeline__name {
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

@media (max-width: 768px) {
  .ch-timeline__track {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .ch-timeline__phase {
    flex-direction: row;
    gap: 16px;
    min-width: unset;
    width: 100%;
    padding: 8px 0;
  }
  .ch-timeline__phase:not(:last-child)::after {
    top: calc(50% + 11px);
    left: 11px;
    right: unset;
    width: 2px;
    height: calc(100% + 0px);
    bottom: 0;
  }
}
```

- [ ] **Step 2 : Ajouter le HTML timeline dans `challenge.html`**

Remplacer `<!-- TIMELINE (Task 5) -->` par :

```html
  <div class="ch-container">
    <div class="ch-timeline">
      <p class="ch-timeline__title">◆ Phases du défi ◆</p>
      <div class="ch-timeline__track">
        <div class="ch-timeline__phase ch-timeline__phase--past">
          <div class="ch-timeline__dot"></div>
          <span class="ch-timeline__name">Annonce</span>
        </div>
        <div class="ch-timeline__phase ch-timeline__phase--active">
          <div class="ch-timeline__dot"></div>
          <span class="ch-timeline__name">Création</span>
        </div>
        <div class="ch-timeline__phase">
          <div class="ch-timeline__dot"></div>
          <span class="ch-timeline__name">Soumissions</span>
        </div>
        <div class="ch-timeline__phase">
          <div class="ch-timeline__dot"></div>
          <span class="ch-timeline__name">Vote Public</span>
        </div>
        <div class="ch-timeline__phase">
          <div class="ch-timeline__dot"></div>
          <span class="ch-timeline__name">Jury</span>
        </div>
        <div class="ch-timeline__phase">
          <div class="ch-timeline__dot"></div>
          <span class="ch-timeline__name">Couronnement</span>
        </div>
      </div>
    </div>
  </div>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : 6 phases reliées par une ligne gold, dot "Création" pulsant en doré lumineux, "Annonce" légèrement transparent. Mobile : timeline verticale.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: challenge timeline with active phase indicator"
```

---

### Task 6 : Carte Thème du Mois

**Files:**
- Modify: `challenge.html` (section THEME)
- Modify: `css/challenge.css` (styles theme card)

- [ ] **Step 1 : Ajouter les styles theme card dans `css/challenge.css`**

```css
/* ----- Theme Card --------------------------------------- */
.ch-theme { background: rgba(10,20,50,0.3); }

.ch-theme__grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  align-items: start;
}

.ch-theme__label {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 16px;
}

.ch-theme__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 20px;
  line-height: 1.05;
}

.ch-theme__desc {
  font-style: italic;
  font-weight: 300;
  font-size: 1.15rem;
  color: var(--ch-accent);
  margin-bottom: 32px;
  line-height: 1.8;
}

.ch-theme__rules-title {
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ch-gold-3);
  margin-bottom: 16px;
}

.ch-theme__rules {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;
}

.ch-theme__rule {
  font-size: 0.95rem;
  color: var(--ch-text);
  display: flex;
  gap: 8px;
}

.ch-theme__rule::before {
  content: '→';
  color: var(--ch-gold-4);
  flex-shrink: 0;
  font-style: normal;
}

/* Sidebar */
.ch-theme__sidebar { display: flex; flex-direction: column; gap: 16px; }

.ch-info-block {
  padding: 16px 20px;
}

.ch-info-block__label {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 6px;
}

.ch-info-block__value {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1rem;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 900px) {
  .ch-theme__grid { grid-template-columns: 1fr; }
  .ch-theme__rules { grid-template-columns: 1fr; }
  .ch-theme__sidebar { flex-direction: row; flex-wrap: wrap; }
  .ch-info-block { flex: 1; min-width: 140px; }
}
```

- [ ] **Step 2 : Ajouter le HTML theme card dans `challenge.html`**

Remplacer `<!-- THEME (Task 6) -->` par :

```html
  <section class="ch-section ch-theme">
    <div class="ch-container">
      <div class="ch-theme__grid">
        <div class="ice-block ice-block--lg ice-block--gold-top" style="padding: 40px;">
          <p class="ch-theme__label">◆ Thème du mois</p>
          <h2 class="ch-display ch-theme__title">Le Temps<br>Suspendu</h2>
          <p class="ch-theme__desc">
            Capturez l'instant figé, l'entre-deux silencieux où le temps retient son souffle.
            Horloges immobiles, gouttes pétrifiées, regards suspendus entre deux battements.
            Explorez l'éternité dans l'éphémère.
          </p>
          <p class="ch-theme__rules-title">Règles du défi</p>
          <ul class="ch-theme__rules">
            <li class="ch-theme__rule">Œuvre originale inédite</li>
            <li class="ch-theme__rule">Une soumission par artisan</li>
            <li class="ch-theme__rule">Tous médiums acceptés</li>
            <li class="ch-theme__rule">Fichier ≤ 20 Mo (JPG, PNG, PDF)</li>
            <li class="ch-theme__rule">Titre + description obligatoires</li>
            <li class="ch-theme__rule">Pas de violence ni contenu 18+</li>
            <li class="ch-theme__rule">Soumission avant le 30 avril</li>
            <li class="ch-theme__rule">Droits d'auteur conservés</li>
          </ul>
        </div>
        <div class="ch-theme__sidebar">
          <div class="ice-block ch-info-block">
            <p class="ch-info-block__label">Médiums</p>
            <p class="ch-info-block__value">Tous</p>
          </div>
          <div class="ice-block ch-info-block">
            <p class="ch-info-block__label">Participants</p>
            <p class="ch-info-block__value">247</p>
          </div>
          <div class="ice-block ch-info-block">
            <p class="ch-info-block__label">Deadline</p>
            <p class="ch-info-block__value">30 Avril</p>
          </div>
          <div class="ice-block ch-info-block">
            <p class="ch-info-block__label">Jury</p>
            <p class="ch-info-block__value">5 Membres</p>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : grande carte ice avec le titre "Le Temps Suspendu" en giant gold gradient, liste de règles en 2 colonnes avec flèches orange, sidebar avec 4 blocs d'info.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: monthly theme card with rules and info sidebar"
```

---

### Task 7 : Grille Critères d'Évaluation

**Files:**
- Modify: `challenge.html` (section CRITERIA)
- Modify: `css/challenge.css` (styles criteria)

- [ ] **Step 1 : Ajouter les styles critères dans `css/challenge.css`**

```css
/* ----- Criteria Grid ------------------------------------ */
.ch-criteria__header {
  text-align: center;
  margin-bottom: 48px;
}

.ch-criteria__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 12px;
}

.ch-criteria__title { font-size: clamp(1.6rem, 3vw, 2.4rem); }

.ch-criteria__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.ch-criteria__card {
  padding: 28px 20px;
  text-align: center;
  transition: transform 0.25s ease;
  position: relative;
}

.ch-criteria__card:hover { transform: translateY(-4px); }

.ch-criteria__icon {
  font-size: 2rem;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 14px;
  display: block;
}

.ch-criteria__name {
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.75rem;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: block;
}

.ch-criteria__desc {
  font-style: italic;
  font-size: 0.85rem;
  color: var(--ch-accent);
  line-height: 1.5;
  margin-bottom: 16px;
}

.ch-criteria__badge {
  display: inline-block;
  padding: 4px 12px;
  font-family: 'Cinzel Decorative', serif;
  font-size: 1rem;
  font-weight: 700;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: 1px solid var(--ch-border-gold);
  clip-path: polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px);
}

@media (max-width: 900px) {
  .ch-criteria__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .ch-criteria__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2 : Ajouter le HTML critères dans `challenge.html`**

Remplacer `<!-- CRITERIA (Task 7) -->` par :

```html
  <section class="ch-section">
    <div class="ch-container">
      <div class="ch-criteria__header">
        <p class="ch-criteria__eyebrow">◆ Barème de notation</p>
        <h2 class="ch-display ch-criteria__title">Critères d'Évaluation</h2>
      </div>
      <div class="ch-criteria__grid">
        <div class="ice-block ice-block--gold-top ch-criteria__card">
          <span class="ch-criteria__icon">◆</span>
          <span class="ch-criteria__name">Originalité</span>
          <p class="ch-criteria__desc">Unicité de la vision et de l'approche créative</p>
          <span class="ch-criteria__badge">30%</span>
        </div>
        <div class="ice-block ice-block--gold-top ch-criteria__card">
          <span class="ch-criteria__icon">◈</span>
          <span class="ch-criteria__name">Maîtrise Technique</span>
          <p class="ch-criteria__desc">Qualité d'exécution et savoir-faire du médium</p>
          <span class="ch-criteria__badge">25%</span>
        </div>
        <div class="ice-block ice-block--gold-top ch-criteria__card">
          <span class="ch-criteria__icon">❋</span>
          <span class="ch-criteria__name">Cohérence Thématique</span>
          <p class="ch-criteria__desc">Fidélité et profondeur dans l'interprétation du thème</p>
          <span class="ch-criteria__badge">20%</span>
        </div>
        <div class="ice-block ice-block--gold-top ch-criteria__card">
          <span class="ch-criteria__icon">◉</span>
          <span class="ch-criteria__name">Impact Visuel</span>
          <p class="ch-criteria__desc">Puissance émotionnelle et esthétique de l'œuvre</p>
          <span class="ch-criteria__badge">15%</span>
        </div>
        <div class="ice-block ice-block--gold-top ch-criteria__card">
          <span class="ch-criteria__icon">⬡</span>
          <span class="ch-criteria__name">Vote Communauté</span>
          <p class="ch-criteria__desc">Appréciation et soutien de la communauté ArtisanForge</p>
          <span class="ch-criteria__badge">10%</span>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : 5 cards ice en ligne, icônes décoratives gold, pourcentages en badge doré, hover translateY(-4px). Mobile : 2 colonnes puis 1.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: evaluation criteria grid with 5 ice cards"
```

---

### Task 8 : Galerie Soumissions

**Files:**
- Modify: `challenge.html` (section GALLERY)
- Modify: `css/challenge.css` (styles gallery)

- [ ] **Step 1 : Ajouter les styles galerie dans `css/challenge.css`**

```css
/* ----- Gallery ------------------------------------------ */
.ch-gallery { background: rgba(10,20,50,0.3); }

.ch-gallery__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 16px;
}

.ch-gallery__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 8px;
}

.ch-gallery__title { font-size: clamp(1.5rem, 3vw, 2.2rem); }

.ch-gallery__count {
  font-style: italic;
  color: var(--ch-accent);
  font-size: 0.95rem;
}

.ch-gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ch-gallery__card {
  aspect-ratio: 3 / 4;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.ch-gallery__card:hover { transform: scale(1.03); transition: transform 0.3s ease; }

.ch-gallery__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ch-gallery__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,22,40,0.85);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
  text-align: center;
}

.ch-gallery__card:hover .ch-gallery__overlay { opacity: 1; }

.ch-gallery__artist {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ch-accent);
}

.ch-gallery__artwork {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1rem;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ch-gallery__vote {
  margin-top: 8px;
  padding: 8px 20px;
  border: 1px solid var(--ch-border-gold);
  color: var(--ch-gold-2);
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.75rem;
  letter-spacing: 1px;
  clip-path: polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px);
  transition: background 0.25s;
}

.ch-gallery__vote:hover { background: rgba(240,165,0,0.15); }

@media (max-width: 768px) {
  .ch-gallery__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .ch-gallery__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2 : Ajouter le HTML galerie dans `challenge.html`**

Remplacer `<!-- GALLERY (Task 8) -->` par :

```html
  <section class="ch-section ch-gallery">
    <div class="ch-container">
      <div class="ch-gallery__header">
        <div>
          <p class="ch-gallery__eyebrow">◆ Soumissions du mois</p>
          <h2 class="ch-display ch-gallery__title">Œuvres en Compétition</h2>
        </div>
        <span class="ch-gallery__count">247 soumissions · Vote ouvert</span>
      </div>
      <div class="ch-gallery__grid">
        <!-- Card 1 -->
        <div class="ice-block ch-gallery__card">
          <div class="ch-gallery__placeholder" style="background: linear-gradient(135deg, #0d2060 0%, #1a0a40 50%, #0a1628 100%);"></div>
          <div class="ch-gallery__overlay">
            <span class="ch-gallery__artist">Élise Morneau</span>
            <span class="ch-gallery__artwork">L'Horloge Silencieuse</span>
            <button class="ch-gallery__vote">♥ Voter</button>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="ice-block ch-gallery__card">
          <div class="ch-gallery__placeholder" style="background: linear-gradient(135deg, #1a0a40 0%, #0d2060 60%, #2a1060 100%);"></div>
          <div class="ch-gallery__overlay">
            <span class="ch-gallery__artist">Marcus Delacroix</span>
            <span class="ch-gallery__artwork">Entre Deux Battements</span>
            <button class="ch-gallery__vote">♥ Voter</button>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="ice-block ch-gallery__card">
          <div class="ch-gallery__placeholder" style="background: linear-gradient(135deg, #0a2040 0%, #1a3060 50%, #0d1640 100%);"></div>
          <div class="ch-gallery__overlay">
            <span class="ch-gallery__artist">Saoirse Brennan</span>
            <span class="ch-gallery__artwork">La Goutte Pétrifiée</span>
            <button class="ch-gallery__vote">♥ Voter</button>
          </div>
        </div>
        <!-- Card 4 -->
        <div class="ice-block ch-gallery__card">
          <div class="ch-gallery__placeholder" style="background: linear-gradient(135deg, #200a30 0%, #0a1060 50%, #1a0a50 100%);"></div>
          <div class="ch-gallery__overlay">
            <span class="ch-gallery__artist">Théo Vanlande</span>
            <span class="ch-gallery__artwork">Mélodie Suspendue</span>
            <button class="ch-gallery__vote">♥ Voter</button>
          </div>
        </div>
        <!-- Card 5 -->
        <div class="ice-block ch-gallery__card">
          <div class="ch-gallery__placeholder" style="background: linear-gradient(135deg, #0a1628 0%, #162040 50%, #0d2050 100%);"></div>
          <div class="ch-gallery__overlay">
            <span class="ch-gallery__artist">Amara Diallo</span>
            <span class="ch-gallery__artwork">Éternité Fragmentée</span>
            <button class="ch-gallery__vote">♥ Voter</button>
          </div>
        </div>
        <!-- Card 6 -->
        <div class="ice-block ch-gallery__card">
          <div class="ch-gallery__placeholder" style="background: linear-gradient(135deg, #1a2040 0%, #0a1030 50%, #201040 100%);"></div>
          <div class="ch-gallery__overlay">
            <span class="ch-gallery__artist">Yuki Tanaka</span>
            <span class="ch-gallery__artwork">Le Regard Figé</span>
            <button class="ch-gallery__vote">♥ Voter</button>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : grille 3x2 de cards ratio 3/4 avec fonds dégradés bleu-violet. Au survol : overlay semi-transparent avec nom artiste, titre, bouton vote gold. Mobile : 2 colonnes.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: submissions gallery with hover overlay and vote buttons"
```

---

### Task 9 : Section Récompenses

**Files:**
- Modify: `challenge.html` (section REWARDS)
- Modify: `css/challenge.css` (styles rewards)

- [ ] **Step 1 : Ajouter les styles récompenses dans `css/challenge.css`**

```css
/* ----- Rewards ------------------------------------------ */
.ch-rewards__header {
  text-align: center;
  margin-bottom: 56px;
}

.ch-rewards__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 12px;
}

.ch-rewards__title { font-size: clamp(1.6rem, 3vw, 2.4rem); }

.ch-rewards__grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.ch-reward-card {
  padding: 36px 28px;
  position: relative;
}

.ch-reward-card--first {
  border-top: 3px solid var(--ch-gold-2);
}

.ch-reward-card__rank {
  font-size: 2rem;
  margin-bottom: 16px;
  display: block;
}

.ch-reward-card__title {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1rem;
  background: var(--ch-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
  margin-bottom: 20px;
  display: block;
}

.ch-reward-card__list { display: flex; flex-direction: column; gap: 10px; }

.ch-reward-card__item {
  display: flex;
  gap: 10px;
  font-size: 0.92rem;
  color: var(--ch-text);
  line-height: 1.4;
}

.ch-reward-card__item::before {
  content: '◆';
  color: var(--ch-gold-3);
  font-size: 0.6rem;
  flex-shrink: 0;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .ch-rewards__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2 : Ajouter le HTML récompenses dans `challenge.html`**

Remplacer `<!-- REWARDS (Task 9) -->` par :

```html
  <section class="ch-section" id="recompenses">
    <div class="ch-container">
      <div class="ch-rewards__header">
        <p class="ch-rewards__eyebrow">◆ Prix & Distinctions</p>
        <h2 class="ch-display ch-rewards__title">Récompenses</h2>
      </div>
      <div class="ch-rewards__grid">
        <!-- 1er -->
        <div class="ice-block ice-block--lg ch-reward-card ch-reward-card--first">
          <span class="ch-reward-card__rank">✦</span>
          <span class="ch-reward-card__title">Maître Artisan</span>
          <ul class="ch-reward-card__list">
            <li class="ch-reward-card__item">Profil mis en avant 1 mois complet</li>
            <li class="ch-reward-card__item">Badge exclusif « Maître Artisan »</li>
            <li class="ch-reward-card__item">Article dédié sur le blog ArtisanForge</li>
            <li class="ch-reward-card__item">Rôle de juré au défi suivant</li>
            <li class="ch-reward-card__item">Couverture de la newsletter mensuelle</li>
          </ul>
        </div>
        <!-- 2e -->
        <div class="ice-block ch-reward-card">
          <span class="ch-reward-card__rank">◈</span>
          <span class="ch-reward-card__title">Artisan Émérite</span>
          <ul class="ch-reward-card__list">
            <li class="ch-reward-card__item">Profil mis en avant 2 semaines</li>
            <li class="ch-reward-card__item">Badge « Artisan Émérite »</li>
            <li class="ch-reward-card__item">Mention dans la newsletter</li>
            <li class="ch-reward-card__item">Accès anticipé au thème suivant</li>
          </ul>
        </div>
        <!-- 3e -->
        <div class="ice-block ch-reward-card">
          <span class="ch-reward-card__rank">◆</span>
          <span class="ch-reward-card__title">Artisan Reconnu</span>
          <ul class="ch-reward-card__list">
            <li class="ch-reward-card__item">Profil mis en avant 1 semaine</li>
            <li class="ch-reward-card__item">Badge « Artisan Reconnu »</li>
            <li class="ch-reward-card__item">Galerie Top 3 permanente</li>
            <li class="ch-reward-card__item">Votes bonus au prochain défi</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : 3 cards récompenses, la 1ère légèrement plus grande avec border-top gold, icônes ✦ ◈ ◆, liste de bénéfices avec puces ◆ orange.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: rewards section with 3 tier cards"
```

---

### Task 10 : Section CTA Final + Footer

**Files:**
- Modify: `challenge.html` (section CTA)
- Modify: `css/challenge.css` (styles CTA, boutons, footer)

- [ ] **Step 1 : Ajouter les styles CTA dans `css/challenge.css`**

```css
/* ----- CTA ---------------------------------------------- */
.ch-cta {
  background: rgba(10,20,50,0.3);
  text-align: center;
}

.ch-cta__card {
  max-width: 640px;
  margin: 0 auto;
  padding: 56px 40px;
}

.ch-cta__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ch-accent);
  margin-bottom: 16px;
}

.ch-cta__title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin-bottom: 16px;
}

.ch-cta__sub {
  font-style: italic;
  color: var(--ch-accent);
  margin-bottom: 36px;
  font-size: 1.05rem;
}

.ch-cta__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.ch-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--ch-gold-2), var(--ch-gold-3), var(--ch-gold-4));
  color: #0d1628;
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
  transition: opacity 0.25s, transform 0.25s;
}

.ch-btn-primary:hover { opacity: 0.9; transform: translateY(-2px); }

.ch-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 32px;
  border: 1px solid var(--ch-border-gold);
  color: var(--ch-gold-2);
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
  transition: background 0.25s, transform 0.25s;
}

.ch-btn-secondary:hover { background: rgba(240,165,0,0.1); transform: translateY(-2px); }

/* Footer */
.ch-footer {
  border-top: 1px solid var(--ch-border);
  padding: 32px 0;
  text-align: center;
}

.ch-footer p {
  font-size: 0.85rem;
  color: rgba(122,184,255,0.5);
  font-style: italic;
}
```

- [ ] **Step 2 : Ajouter le HTML CTA dans `challenge.html`**

Remplacer `<!-- CTA (Task 10) -->` par :

```html
  <section class="ch-section ch-cta">
    <div class="ch-container">
      <div class="ice-block ice-block--lg ch-cta__card">
        <p class="ch-cta__eyebrow">◆ Rejoignez le défi</p>
        <h2 class="ch-display ch-cta__title">Prêt à Créer ?</h2>
        <p class="ch-cta__sub">Soumettez votre vision du Temps Suspendu avant le 30 avril 2026.</p>
        <div class="ch-cta__actions">
          <a href="#" class="ch-btn-primary">Soumettre mon œuvre</a>
          <a href="#" class="ch-btn-secondary">Voir toutes les règles</a>
        </div>
      </div>
    </div>
  </section>

  <footer class="ch-footer">
    <div class="ch-container">
      <p>© 2026 ArtisanForge — Tous droits réservés · <a href="#" style="color: var(--ch-gold-3);">Contact</a></p>
    </div>
  </footer>
```

- [ ] **Step 3 : Vérifier**

Ouvrir `challenge.html`. Attendu : CTA centré, bouton primaire gold gradient avec texte sombre, bouton secondaire outline doré, footer minimaliste.

- [ ] **Step 4 : Commit**

```bash
git add challenge.html css/challenge.css
git commit -m "feat: CTA section and footer"
```

---

### Task 11 : Finitions responsive + polish général

**Files:**
- Modify: `css/challenge.css` (media queries finales + utilitaires)

- [ ] **Step 1 : Ajouter les finitions dans `css/challenge.css`**

```css
/* ----- Responsive finitions ----------------------------- */
@media (max-width: 768px) {
  .ch-section { padding: 64px 0; }

  .ch-hero { padding: 100px 24px 60px; }

  .ch-countdown { gap: 10px; }
  .ch-countdown__block { min-width: 64px; padding: 12px 8px; }
  .ch-countdown__num { font-size: 1.6rem; }

  .ch-theme { padding: 48px 0; }

  .ch-cta__card { padding: 40px 24px; }
  .ch-cta__actions { flex-direction: column; align-items: center; }

  .ch-rewards__grid { gap: 16px; }
}

/* ----- Scroll padding pour ancres nav fixe -------------- */
section[id] { scroll-margin-top: 80px; }

/* ----- Sélection de texte ------------------------------- */
::selection {
  background: rgba(240,165,0,0.3);
  color: var(--ch-gold-1);
}
```

- [ ] **Step 2 : Vérifier responsive complet**

Tester à 375px, 768px, 1024px, 1440px. Vérifier :
- 375px : burger menu fonctionne, countdown lisible, galerie 1 colonne, timeline verticale
- 768px : galerie 2 colonnes, criteria 2 colonnes
- 1024px+ : layout 3 colonnes, timeline horizontale

- [ ] **Step 3 : Commit**

```bash
git add css/challenge.css
git commit -m "feat: responsive finishes and polish"
```

---

## Self-Review

**Spec coverage :**

| Section spec | Task |
|---|---|
| Nav ArtisanForge | Task 2 |
| Hero + badge pulsant + countdown | Task 3 + 4 |
| Timeline 6 phases | Task 5 |
| Carte thème + règles + sidebar | Task 6 |
| Grille 5 critères | Task 7 |
| Galerie soumissions | Task 8 |
| 3 tiers récompenses | Task 9 |
| CTA 2 boutons | Task 10 |
| Ice block clip-path | Task 1 (CSS vars) |
| Fond animé + particules | Task 4 (JS) |
| Responsive mobile | Task 11 |
| Burger mobile JS | Task 4 (JS) |

Toutes les sections du spec sont couvertes. ✓

**Placeholders :** Aucun TBD ou TODO dans le plan. ✓

**Type consistency :** Les IDs (`chCountdown`, `chParticles`, `chBurger`, `chNav`) et les classes CSS sont cohérents entre HTML et JS dans toutes les tâches. ✓
