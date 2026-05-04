/* =========================================================
   ArtCanvas — nav-dots.js
   Navigation verticale par points — toutes les pages
   ========================================================= */

(function () {
  'use strict';

  var PAGE_SECTIONS = {
    'index.html': [
      { id: 'sec-hero',         label: 'Accueil' },
      { id: 'sec-stats',        label: 'Statistiques' },
      { id: 'sec-works',        label: 'Œuvres en vedette' },
      { id: 'sec-how',          label: 'Œuvres de la semaine' },
      { id: 'sec-testimonials', label: 'Témoignages' },
      { id: 'sec-footer',       label: 'Pied de page' },
    ],
    'challenge.html': [
      { id: 'ch-sec-hero',        label: 'Défi' },
      { id: 'ch-sec-timeline',    label: 'Phases' },
      { id: 'ch-sec-theme',       label: 'Thème' },
      { id: 'ch-sec-criteres',    label: 'Critères' },
      { id: 'ch-sec-juges',       label: 'Juges' },
      { id: 'ch-sec-galerie',     label: 'Galerie' },
      { id: 'ch-sec-recompenses', label: 'Récompenses' },
    ],
    'communaute.html': [
      { id: 'com-sec-hero',        label: 'Communauté' },
      { id: 'com-sec-categories',  label: 'Catégories' },
      { id: 'com-sec-discussions', label: 'Discussions' },
      { id: 'com-sec-forum',       label: 'Forum' },
      { id: 'com-sec-collab',      label: 'Collaborations' },
    ],
    'galerie.html': [
      { id: 'gal-sec-hero', label: 'Galerie' },
      { id: 'gal-sec-grid', label: 'Œuvres' },
    ],
  };

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.nav-dots');
    if (!container) return;

    var path = window.location.pathname;
    var page = path.split('/').pop() || 'index.html';
    if (!page) page = 'index.html';

    var SECTIONS = PAGE_SECTIONS[page] || PAGE_SECTIONS['index.html'];

    var items = SECTIONS.filter(function (s) {
      return !!document.getElementById(s.id);
    });

    if (!items.length) return;

    items.forEach(function (sec) {
      var btn = document.createElement('button');
      btn.className   = 'nav-dot';
      btn.setAttribute('aria-label', sec.label);
      btn.setAttribute('title', sec.label);
      btn.addEventListener('click', function () {
        document.getElementById(sec.id).scrollIntoView({ behavior: 'smooth' });
      });
      container.appendChild(btn);
      sec.dot = btn;
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var sec = items.find(function (s) { return s.id === entry.target.id; });
        if (sec) sec.intersecting = entry.isIntersecting;
      });
      var active = items.find(function (s) { return s.intersecting; });
      items.forEach(function (s) {
        if (s.dot) s.dot.classList.toggle('active', s === active);
      });
    }, { rootMargin: '-30% 0px -30% 0px', threshold: 0 });

    items.forEach(function (sec) {
      io.observe(document.getElementById(sec.id));
    });
  });
})();
