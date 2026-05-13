/* =========================================================
   10Sign — nav-dots.js
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
      { id: 'ch-sec-hero',        label: 'Événement' },
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
    'artistes.html': [
      { id: 'art-sec-hero', label: 'Artistes' },
      { id: 'art-sec-grid', label: 'Catalogue' },
      { id: 'art-sec-cta',  label: 'Rejoindre' },
    ],
    'artiste.html': [
      { id: 'artiste-hero-section',      label: 'Profil' },
      { id: 'artiste-portfolio-section', label: 'Œuvres' },
    ],
    'choisir.html': [
      { id: 'cho-sec-hero',  label: 'Inscription' },
      { id: 'cho-sec-choix', label: 'Choisir' },
    ],
    'comment-ca-marche.html': [
      { id: 'ccm-sec-hero',   label: 'Guide' },
      { id: 'ccm-sec-etapes', label: 'Étapes' },
      { id: 'ccm-sec-eco',    label: 'Tarification' },
      { id: 'ccm-sec-cta',    label: 'Commencer' },
    ],
    'inscription.html': [
      { id: 'insc-sec-hero', label: 'Inscription' },
      { id: 'insc-sec-form', label: 'Formulaire' },
    ],
    'mise-en-avant.html': [
      { id: 'mea-sec-hero',     label: 'Visibilité' },
      { id: 'mea-sec-formules', label: 'Formules' },
      { id: 'mea-sec-eco',      label: 'Comment ça marche' },
      { id: 'mea-sec-cta',      label: 'Contact' },
    ],
    'rejoindre.html': [
      { id: 'rej-sec-hero', label: 'Rejoindre' },
      { id: 'rej-sec-form', label: 'Inscription' },
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
