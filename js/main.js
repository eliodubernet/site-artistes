/* =========================================================
   ArtCanvas — main.js
   Pure vanilla JS — DOMContentLoaded wrapper
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Navbar scroll shadow --------------------------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ----- Burger menu ------------------------------------ */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    // Close on nav link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ----- Scroll fade-in avec cascade -------------------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    /* Délai de cascade : chaque élément .fade-in se décale
       par rapport à ses frères dans le même parent */
    fadeEls.forEach(el => {
      const siblings = Array.from(
        el.parentElement.querySelectorAll(':scope > .fade-in, .fade-in')
      ).filter(s => s.parentElement === el.parentElement);
      const pos = siblings.indexOf(el);
      if (pos > 0) el.style.transitionDelay = (pos * 0.09).toFixed(2) + 's';
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    fadeEls.forEach(el => io.observe(el));
  }

  /* ----- Animated stat counters ------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur    = 1800; // ms
        const start  = performance.now();
        function tick(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / dur, 1);
          // ease-out
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString('fr-FR');
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('fr-FR');
        }
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => counterIO.observe(el));
  }

  /* ----- Gallery / Artist filters ----------------------- */
  function initFilters(containerId, gridId) {
    const container = document.getElementById(containerId);
    const grid      = document.getElementById(gridId);
    if (!container || !grid) return;

    const btns  = container.querySelectorAll('.filter-btn');
    const items = grid.querySelectorAll('.grid-item');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        items.forEach(item => {
          const match = filter === 'all' || item.dataset.category === filter;
          item.classList.toggle('hidden', !match);
        });
      });
    });
  }

  initFilters('galleryFilters', 'galleryGrid');
  initFilters('artistFilters',  'artistsGrid');

  /* ----- Lightbox --------------------------------------- */
  const lightbox      = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryGrid   = document.getElementById('galleryGrid');

  if (lightbox && galleryGrid) {
    const lbImg    = document.getElementById('lightboxImg');
    const lbTitle  = document.getElementById('lightboxTitle');
    const lbArtist = document.getElementById('lightboxArtist');
    const lbPrice  = document.getElementById('lightboxPrice');
    const lbDesc   = document.getElementById('lightboxDesc');
    const lbCat    = document.getElementById('lightboxCat');
    const lbContact = document.getElementById('lightboxContact');

    function openLightbox(card) {
      const title  = card.dataset.title   || '';
      const artist = card.dataset.artist  || '';
      const price  = card.dataset.price   || '';
      const desc   = card.dataset.desc    || '';
      const cat    = card.dataset.category || '';

      // Clone SVG from the card
      const svgEl = card.querySelector('svg');
      lbImg.innerHTML = '';
      if (svgEl) {
        const clone = svgEl.cloneNode(true);
        clone.setAttribute('width',  '100%');
        clone.setAttribute('height', '100%');
        clone.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        lbImg.appendChild(clone);
      }

      lbTitle.textContent  = title;
      lbArtist.textContent = 'par ' + artist;
      lbPrice.textContent  = price;
      lbDesc.textContent   = desc;
      lbCat.textContent    = cat.charAt(0).toUpperCase() + cat.slice(1);
      lbContact.href = 'mailto:contact@artcanvas.fr?subject=' + encodeURIComponent(title);

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Open on card click (but not on the "Contacter" button)
    galleryGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.artwork-card');
      if (!card) return;
      if (e.target.closest('.artwork-card__action')) return;
      openLightbox(card);
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ----- Forum like toggle ------------------------------ */
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach(btn => {
    const countEl = btn.querySelector('.like-count');
    let liked  = false;
    let count  = parseInt(btn.dataset.likes || '0', 10);

    btn.addEventListener('click', () => {
      liked = !liked;
      count = liked ? count + 1 : count - 1;
      btn.classList.toggle('liked', liked);
      if (countEl) countEl.textContent = count;
    });
  });

  /* ----- Multi-step form -------------------------------- */
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    let currentStep = 1;
    const totalSteps = 3;

    function showStep(n) {
      for (let i = 1; i <= totalSteps + 1; i++) {
        const stepEl = document.getElementById('step' + (i === totalSteps + 1 ? 'Confirm' : i));
        if (stepEl) stepEl.classList.toggle('active', i === n);
      }
      // Update progress dots
      for (let i = 1; i <= totalSteps; i++) {
        const dot = document.getElementById('step-dot-' + i);
        if (!dot) continue;
        dot.classList.remove('active', 'done');
        if (i < n)  dot.classList.add('done');
        if (i === n) dot.classList.add('active');
      }
      // Update progress lines
      for (let i = 1; i < totalSteps; i++) {
        const line = document.getElementById('line-' + i);
        if (line) line.classList.toggle('done', i < n);
      }
      currentStep = n;
    }

    function validateStep(n) {
      let valid = true;
      const requiredGroups = {
        1: ['fg-prenom', 'fg-nom', 'fg-email', 'fg-ville', 'fg-discipline'],
        2: ['fg-bio', 'fg-style', 'fg-motivation'],
        3: ['fg-oeuvre1', 'fg-prix', 'fg-desc-oeuvre']
      };
      const groups = requiredGroups[n] || [];
      groups.forEach(id => {
        const group = document.getElementById(id);
        if (!group) return;
        const input = group.querySelector('input, select, textarea');
        if (!input) return;
        const isEmpty = !input.value.trim();
        const isInvalidEmail = input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
        const isInvalid = isEmpty || isInvalidEmail;
        group.classList.toggle('has-error', isInvalid);
        if (isInvalid) valid = false;
      });
      // CGU checkbox (step 3)
      if (n === 3) {
        const cgu = document.getElementById('cgu');
        const cguErr = document.getElementById('cgu-error');
        if (cgu && !cgu.checked) {
          if (cguErr) cguErr.style.display = 'block';
          valid = false;
        } else if (cguErr) {
          cguErr.style.display = 'none';
        }
      }
      return valid;
    }

    // Clear error state on input
    joinForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        if (group) group.classList.remove('has-error');
      });
    });

    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const prev2 = document.getElementById('prev2');
    const prev3 = document.getElementById('prev3');

    if (next1) next1.addEventListener('click', () => { if (validateStep(1)) showStep(2); });
    if (next2) next2.addEventListener('click', () => { if (validateStep(2)) showStep(3); });
    if (prev2) prev2.addEventListener('click', () => showStep(1));
    if (prev3) prev3.addEventListener('click', () => showStep(2));

    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateStep(3)) return;

      // Build recap
      const recap = document.getElementById('confirmRecap');
      if (recap) {
        const prenom     = document.getElementById('prenom')?.value || '';
        const nom        = document.getElementById('nom')?.value || '';
        const email      = document.getElementById('email')?.value || '';
        const discipline = document.getElementById('discipline')?.value || '';
        const oeuvre1    = document.getElementById('oeuvre1')?.value || '';

        recap.innerHTML = `
          <li><strong>Nom :</strong> ${prenom} ${nom}</li>
          <li><strong>E-mail :</strong> ${email}</li>
          <li><strong>Discipline :</strong> ${discipline}</li>
          <li><strong>Première œuvre :</strong> ${oeuvre1}</li>
        `;
      }
      showStep(4); // Confirmation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
