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
  const deadline = new Date('2026-04-30T23:59:59+02:00');
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

  const pad = n => String(n).padStart(2, '0');
  let intervalId;

  function tick() {
    const now  = new Date();
    const diff = deadline - now;

    if (diff <= 0) {
      clearInterval(intervalId);
      container.innerHTML = '<p class="ch-accent-text" style="font-size:1.2rem;letter-spacing:2px;">SOUMISSIONS CLOSES</p>';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById('cdDays').textContent    = pad(d);
    document.getElementById('cdHours').textContent   = pad(h);
    document.getElementById('cdMinutes').textContent = pad(m);
    document.getElementById('cdSeconds').textContent = pad(s);
  }

  tick();
  intervalId = setInterval(tick, 1000);
})();

/* ── Burger mobile ───────────────────────────────────────── */
(function initBurger() {
  const burger = document.getElementById('chBurger');
  const nav    = document.getElementById('chNav');
  if (!burger || !nav) return;
  burger.setAttribute('aria-expanded', 'false');
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
})();
