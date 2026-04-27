/* =========================================================
   ArtCanvas — Données des artistes
   Source de vérité pour artiste.html?slug=
   ========================================================= */

const ARTISTES = [

  /* ── 1. Elena Marcov ────────────────────────────────── */
  {
    slug:       'elena-marcov',
    nom:        'Elena Marcov',
    discipline: 'Peintre',
    badgeClass: 'badge--violet',
    ville:      'Bruxelles, Belgique',
    bio:        'Artiste abstraite explorant les liens entre cosmos et émotions humaines. Acrylique et huile sur toile depuis 12 ans.',
    bioLong:    'Elena Marcov développe depuis plus de douze ans une peinture abstraite qui cherche à rendre visible l\'invisible. Ses toiles à l\'acrylique et à l\'huile oscillent entre explosion cosmique et introspection silencieuse. Formée à l\'Académie Royale des Beaux-Arts de Bruxelles, elle a exposé dans une vingtaine de galeries en Europe.',
    couleur:    '#8b2fc9',
    telephone:  '+32 470 12 34 56',
    email:      'elena.marcov@artcanvas.fr',
    instagram:  'https://instagram.com/elena.marcov',
    shopify:    '',
    stripeLink: '#',
    nbOeuvres:  47,
    oeuvres: [
      { titre: 'Spirales cosmiques',   prix: 1200, cat: 'Peinture',    desc: 'Acrylique sur toile, 120×90 cm. Exploration des forces invisibles qui relient les êtres.',   badgeClass: 'badge--violet' },
      { titre: 'Nébuleuse intérieure', prix: 850,  cat: 'Peinture',    desc: 'Huile sur toile, 80×80 cm. Série "Cosmos intérieur", 2025.',                                   badgeClass: 'badge--violet' },
      { titre: 'Confluence dorée',     prix: 640,  cat: 'Peinture',    desc: 'Technique mixte, 60×60 cm. Feuille d\'or et acrylique.',                                       badgeClass: 'badge--violet' },
      { titre: 'Silence violet',       prix: 420,  cat: 'Peinture',    desc: 'Encre et acrylique sur papier, 40×50 cm.',                                                     badgeClass: 'badge--violet' }
    ]
  },

  /* ── 2. Julien Fabre ────────────────────────────────── */
  {
    slug:       'julien-fabre',
    nom:        'Julien Fabre',
    discipline: 'Photographe',
    badgeClass: 'badge--blue',
    ville:      'Lyon, France',
    bio:        'Photographie argentique et numérique. Spécialisé en architecture urbaine nocturne et portraits de rue.',
    bioLong:    'Julien Fabre capture la ville la nuit, entre béton et lumière artificielle. Son œil de photographe argentique lui confère un sens aigu du grain et de l\'atmosphère. Ses tirages sont numérotés, signés, et accompagnés d\'un certificat d\'authenticité.',
    couleur:    '#60a5fa',
    telephone:  '+33 6 12 34 56 78',
    email:      'julien.fabre@artcanvas.fr',
    instagram:  'https://instagram.com/julien.fabre.photo',
    shopify:    'https://julien-fabre.myshopify.com',
    stripeLink: '#',
    nbOeuvres:  31,
    oeuvres: [
      { titre: 'Architecture nocturne', prix: 480, cat: 'Photographie', desc: 'Tirage argentique numéroté, 50×70 cm. Série "Béton & lumière", Lyon 2024.',                  badgeClass: 'badge--blue' },
      { titre: 'Passage Saint-Paul',    prix: 320, cat: 'Photographie', desc: 'Tirage argentique, 30×45 cm. Passage secret de Lyon à l\'aube.',                              badgeClass: 'badge--blue' },
      { titre: 'Néons et pluie',        prix: 560, cat: 'Photographie', desc: 'Tirage numérique, 60×90 cm. Rue mouillée reflétant les enseignes, Tokyo.',                   badgeClass: 'badge--blue' }
    ]
  },

  /* ── 3. Sofia Herrera ───────────────────────────────── */
  {
    slug:       'sofia-herrera',
    nom:        'Sofia Herrera',
    discipline: 'Illustratrice',
    badgeClass: 'badge--green',
    ville:      'Paris, France',
    bio:        'Illustrations géométriques et symboliques. Inspirée des mandalas, de la géométrie sacrée et du cosmique.',
    bioLong:    'Sofia Herrera construit chaque illustration à partir d\'un système de proportions, de symétries et de symboles universels. Son trait précis, hérité de cinq ans de formation en design graphique, révèle des univers intérieurs d\'une grande densité. Ses œuvres sont disponibles en original et en impression numérotée.',
    couleur:    '#34d399',
    telephone:  '+33 7 23 45 67 89',
    email:      'sofia.herrera@artcanvas.fr',
    instagram:  'https://instagram.com/sofia.herrera.art',
    shopify:    '',
    stripeLink: '#',
    nbOeuvres:  58,
    oeuvres: [
      { titre: 'Géométrie sacrée',   prix: 320,  cat: 'Illustration', desc: 'Encre de chine sur papier, 30×30 cm. Série "Fibonacci".',                                      badgeClass: 'badge--green' },
      { titre: 'Mandala solaire',    prix: 180,  cat: 'Illustration', desc: 'Impression numérotée sur papier Fine Art, 40×40 cm.',                                           badgeClass: 'badge--green' },
      { titre: 'Fleur de vie XXL',   prix: 790,  cat: 'Illustration', desc: 'Original encre et or, 60×60 cm. Pièce unique.',                                                badgeClass: 'badge--green' }
    ]
  },

  /* ── 4. Marius Dent ─────────────────────────────────── */
  {
    slug:       'marius-dent',
    nom:        'Marius Dent',
    discipline: 'Artiste digital',
    badgeClass: 'badge--gold',
    ville:      'Amsterdam, Pays-Bas',
    bio:        'Pionnier de l\'art génératif et des univers cosmiques digitaux. Travaille avec des algorithmes et des outils de synthèse visuelle.',
    bioLong:    'Marius Dent est l\'un des précurseurs de l\'art génératif en Europe. Ses œuvres sont produites par des algorithmes qu\'il code lui-même, puis retravaillées manuellement pour leur conférer une âme. Chaque tirage est accompagné du code source ayant servi à le générer.',
    couleur:    '#c9a84c',
    telephone:  '+31 6 12 34 56 78',
    email:      'marius.dent@artcanvas.fr',
    instagram:  'https://instagram.com/mariusdent.art',
    shopify:    'https://mariusdent.myshopify.com',
    stripeLink: '#',
    nbOeuvres:  24,
    oeuvres: [
      { titre: 'Horizon céleste',     prix: 650, cat: 'Art digital', desc: 'Impression Giclée sur aluminium, 80×60 cm. Tirage unique + code source.',                       badgeClass: 'badge--gold' },
      { titre: 'Particules #7',       prix: 430, cat: 'Art digital', desc: 'Impression Giclée, 50×50 cm. Série "Particules", algorithme de dispersion.',                    badgeClass: 'badge--gold' }
    ]
  },

  /* ── 5. Camille Roux ────────────────────────────────── */
  {
    slug:       'camille-roux',
    nom:        'Camille Roux',
    discipline: 'Sculpteur',
    badgeClass: 'badge--red',
    ville:      'Toulouse, France',
    bio:        'Sculptrice en bronze et résine. Ses figures en mouvement explorent la danse, l\'équilibre et la fragilité de l\'existence.',
    bioLong:    'Camille Roux travaille le bronze à la cire perdue depuis 2014. Chaque sculpture naît d\'une maquette en argile, passe par la fonderie, et est patinée à la main dans son atelier toulousain. Ses pièces figuratives capturent un instant suspendu entre équilibre et chute.',
    couleur:    '#f87171',
    telephone:  '+33 5 34 56 78 90',
    email:      'camille.roux@artcanvas.fr',
    instagram:  'https://instagram.com/camille.roux.sculpture',
    shopify:    '',
    stripeLink: '#',
    nbOeuvres:  19,
    oeuvres: [
      { titre: 'Figure en mouvement', prix: 2800, cat: 'Sculpture', desc: 'Bronze patiné, H. 35 cm. Édition de 8 exemplaires numérotés.',                                   badgeClass: 'badge--red' },
      { titre: 'L\'envol',            prix: 1600, cat: 'Sculpture', desc: 'Résine et bronze, H. 22 cm. Pièce unique.',                                                      badgeClass: 'badge--red' }
    ]
  },

  /* ── 6. Naomi Klee ──────────────────────────────────── */
  {
    slug:       'naomi-klee',
    nom:        'Naomi Klee',
    discipline: 'Peintre',
    badgeClass: 'badge--violet',
    ville:      'Berlin, Allemagne',
    bio:        'Peinture minimaliste géométrique. Inspirée par Mondrian et Rothko, elle explore la tension des formes simples et des couleurs pures.',
    bioLong:    'Naomi Klee réunit dans sa peinture la rigueur du Bauhaus et la sensibilité chromatique de l\'expressionnisme abstrait américain. Ses toiles, toujours carrées, jouent sur les rapports de proportions et les vibrations de couleurs pures adjacentes.',
    couleur:    '#a78bfa',
    telephone:  '+49 30 12 34 56 78',
    email:      'naomi.klee@artcanvas.fr',
    instagram:  'https://instagram.com/naomi.klee.painting',
    shopify:    '',
    stripeLink: '#',
    nbOeuvres:  36,
    oeuvres: [
      { titre: 'Composition dorée',   prix: 900,  cat: 'Peinture', desc: 'Acrylique sur toile, 80×80 cm. Hommage à Mondrian.',                                              badgeClass: 'badge--violet' },
      { titre: 'Carré rouge n°3',     prix: 550,  cat: 'Peinture', desc: 'Huile sur toile, 60×60 cm. Série "Primaires".',                                                   badgeClass: 'badge--violet' }
    ]
  },

  /* ── 7. Hugo Levert ─────────────────────────────────── */
  {
    slug:       'hugo-levert',
    nom:        'Hugo Levert',
    discipline: 'Illustrateur',
    badgeClass: 'badge--green',
    ville:      'Nantes, France',
    bio:        'Univers oniriques entre forêts enchantées et paysages nocturnes. Encre de chine et aquarelle numérique.',
    bioLong:    'Hugo Levert crée des univers de papier habités par des créatures lumineuses, des architectures impossibles et des ciels criblés d\'étoiles. Autodidacte, il alterne travaux à l\'encre de chine sur papier Arches et création numérique sous Procreate.',
    couleur:    '#34d399',
    telephone:  '+33 2 40 12 34 56',
    email:      'hugo.levert@artcanvas.fr',
    instagram:  'https://instagram.com/hugo.levert.illustration',
    shopify:    'https://hugolevert.myshopify.com',
    stripeLink: '#',
    nbOeuvres:  42,
    oeuvres: [
      { titre: 'Forêt de minuit',      prix: 290, cat: 'Illustration', desc: 'Encre de chine sur papier Arches, 30×40 cm. Édition de 5.',                                   badgeClass: 'badge--green' },
      { titre: 'Archipel des rêves',   prix: 160, cat: 'Illustration', desc: 'Impression Fine Art, 20×30 cm. Aquarelle numérique.',                                          badgeClass: 'badge--green' }
    ]
  },

  /* ── 8. Ryo Tanaka ──────────────────────────────────── */
  {
    slug:       'ryo-tanaka',
    nom:        'Ryo Tanaka',
    discipline: 'Artiste digital',
    badgeClass: 'badge--gold',
    ville:      'Tokyo, Japon',
    bio:        'Art digital inspiré des villes néon et de la culture pop japonaise. Ses œuvres fusionnent réel et virtuel.',
    bioLong:    'Ryo Tanaka grandit entre les néons d\'Akihabara et les galeries de Shimokitazawa. Son art digital mêle photographie retravaillée, 3D temps réel et illustration vectorielle dans des compositions où Tokyo devient un personnage à part entière.',
    couleur:    '#f59e0b',
    telephone:  '+81 90 1234 5678',
    email:      'ryo.tanaka@artcanvas.fr',
    instagram:  'https://instagram.com/ryo.tanaka.digital',
    shopify:    'https://ryotanaka.myshopify.com',
    stripeLink: '#',
    nbOeuvres:  29,
    oeuvres: [
      { titre: 'Néon dreams',   prix: 380, cat: 'Art digital', desc: 'Impression Giclée, 60×40 cm. Rue d\'Akihabara revisitée.',                                             badgeClass: 'badge--gold' },
      { titre: 'Shibuya 2049',  prix: 520, cat: 'Art digital', desc: 'Impression sur toile, 80×60 cm. Vision futuriste de Shibuya.',                                        badgeClass: 'badge--gold' }
    ]
  },

  /* ── 9. Marie Fleur ─── ARTISTE FLORALE (niche) ─────── */
  {
    slug:       'marie-fleur',
    nom:        'Marie Fleur',
    discipline: 'Impressions florales',
    badgeClass: 'badge--teal',
    ville:      'Bordeaux, France',
    bio:        'Spécialiste en impressions botaniques et arrangements floraux sur toile. Art délicat et naturel.',
    bioLong:    'Marie Fleur pratique l\'éco-impression (gyotaku végétal) : elle presse des fleurs fraîches directement sur papier et tissu pour en capturer l\'empreinte exacte. Chaque œuvre est unique, portant l\'empreinte de la plante originale. Elle propose aussi des commandes personnalisées avec vos fleurs de mariage ou de jardin.',
    couleur:    '#2dd4bf',
    telephone:  '+33 5 56 12 34 56',
    email:      'marie.fleur@artcanvas.fr',
    instagram:  'https://instagram.com/marie.fleur.botanica',
    shopify:    'https://mariefleur.myshopify.com',
    stripeLink: '#',
    nbOeuvres:  63,
    oeuvres: [
      { titre: 'Pivoine sauvage',       prix: 140, cat: 'Floral',    desc: 'Éco-impression sur papier Washi, 30×40 cm. Pivoines de Dordogne, printemps 2025.',              badgeClass: 'badge--teal' },
      { titre: 'Bouquet de mariée',     prix: 280, cat: 'Floral',    desc: 'Commande personnalisée — impression de votre bouquet sur lin, 50×70 cm.',                       badgeClass: 'badge--teal' },
      { titre: 'Herbier doré',          prix: 95,  cat: 'Floral',    desc: 'Impression botanique encadrée, format A4. Fond or mat.',                                        badgeClass: 'badge--teal' },
      { titre: 'Cerisiers en fleurs',   prix: 210, cat: 'Floral',    desc: 'Éco-impression sur soie, 40×60 cm. Édition limitée.',                                           badgeClass: 'badge--teal' }
    ]
  },

  /* ── 10. Lucas Craft ─── OBJETS PERSONNALISABLES ─────── */
  {
    slug:       'lucas-craft',
    nom:        'Lucas Craft',
    discipline: 'Objets personnalisables',
    badgeClass: 'badge--gold',
    ville:      'Strasbourg, France',
    bio:        'Artisan créateur d\'objets uniques personnalisables : céramiques, bois gravé, affiches sur-mesure.',
    bioLong:    'Lucas Craft combine artisanat traditionnel et design contemporain pour créer des objets qui racontent une histoire. Chaque pièce peut être personnalisée avec un prénom, une date, un motif au choix. Parfaits pour les cadeaux, mariages, naissances. Délai de fabrication : 5 à 10 jours ouvrés.',
    couleur:    '#c9a84c',
    telephone:  '+33 3 88 12 34 56',
    email:      'lucas.craft@artcanvas.fr',
    instagram:  'https://instagram.com/lucas.craft.studio',
    shopify:    'https://lucascraft.myshopify.com',
    stripeLink: '#',
    nbOeuvres:  88,
    oeuvres: [
      { titre: 'Tasse gravée prénom',   prix: 35,  cat: 'Céramique',   desc: 'Céramique émaillée, gravure laser personnalisée. Prénom ou message au choix.',                badgeClass: 'badge--gold' },
      { titre: 'Planche à découper',    prix: 65,  cat: 'Bois gravé',  desc: 'Chêne massif 30×20 cm, gravure prénom + date. Idéal cadeau mariage.',                        badgeClass: 'badge--gold' },
      { titre: 'Affiche naissance',     prix: 45,  cat: 'Impression',  desc: 'A3 Fine Art, prénom, date, heure, poids, taille. Livré encadrable sous 5j.',                  badgeClass: 'badge--gold' },
      { titre: 'Cartes de vœux custom', prix: 28,  cat: 'Papeterie',   desc: 'Lot de 10 cartes avec votre photo ou illustration, impression offset.',                       badgeClass: 'badge--gold' }
    ]
  }

];

/* Utilitaire : trouver un artiste par slug */
function getArtiste(slug) {
  return ARTISTES.find(a => a.slug === slug) || null;
}
