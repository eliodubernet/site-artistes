/* =========================================================
   ArtCanvas — nav-dots.js
   Navigation verticale par points (index.html)
   ========================================================= */

(function () {
  'use strict';

  /* Sections dans l'ordre d'apparition, avec leur couleur dominante */
  const SECTIONS = [
    { id: 'sec-hero',         color: '#b5872c', label: 'Accueil' },
    { id: 'sec-stats',        color: '#b5872c', label: 'Statistiques' },
    { id: 'sec-works',        color: '#b5872c', label: 'Œuvres en vedette' },
    { id: 'sec-how',          color: '#7b1fb5', label: 'Comment ça marche' },
    { id: 'sec-testimonials', color: '#b5872c', label: 'Témoignages' },
    { id: 'sec-cta',          color: '#c9a84c', label: 'Rejoindre' },
    { id: 'sec-footer',       color: '#c9a84c', label: 'Pied de page' },
  ];

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.nav-dots');
    if (!container) return;

    /* Filtrer les sections qui existent réellement dans la page */
    var items = SECTIONS.filter(function (s) {
      return !!document.getElementById(s.id);
    });

    if (!items.length) return;

    /* Créer un bouton-point par section */
    items.forEach(function (sec) {
      var btn = document.createElement('button');
      btn.className   = 'nav-dot';
      btn.style.color = sec.color;
      btn.setAttribute('aria-label', sec.label);
      btn.setAttribute('title', sec.label);

      btn.addEventListener('click', function () {
        document.getElementById(sec.id).scrollIntoView({ behavior: 'smooth' });
      });

      container.appendChild(btn);
      sec.dot = btn;
    });

    /* IntersectionObserver — zone active : bande centrale du viewport */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var sec = items.find(function (s) { return s.id === entry.target.id; });
        if (sec) sec.intersecting = entry.isIntersecting;
      });

      /* Activer le premier point dont la section est visible */
      var active = items.find(function (s) { return s.intersecting; });
      items.forEach(function (s) {
        if (s.dot) s.dot.classList.toggle('active', s === active);
      });
    }, {
      rootMargin: '-30% 0px -30% 0px', /* bande de 40 % au centre */
      threshold: 0
    });

    items.forEach(function (sec) {
      io.observe(document.getElementById(sec.id));
    });
  });
})();
