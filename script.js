document.addEventListener('DOMContentLoaded', () => {

  /* ---------- navbar scroll state ---------- */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (window.scrollY > 24) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  toggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- magnetic buttons ---------- */
  const magnets = document.querySelectorAll('.magnetic');
  magnets.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0,0)';
    });
  });

  /* ---------- project card glow follow ---------- */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  /* ---------- ambient cursor glow (desktop only) ---------- */
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(min-width: 860px)').matches) {
    let raf = null;
    window.addEventListener('mousemove', (e) => {
      glow.style.opacity = '1';
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      });
    });
    window.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  }

  /* ---------- rotating wireframe icosahedron ---------- */
  const icoSvg = document.getElementById('icoWire');
  if (icoSvg) {
    const PHI = (1 + Math.sqrt(5)) / 2;
    const RAW = [
      [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
      [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
      [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]
    ];
    const EDGES = [
      [0,1],[0,5],[0,7],[0,10],[0,11],
      [1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],
      [3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,8],[7,10],
      [8,9],
      [10,11]
    ];

    const SCALE = 60;
    const FOCAL = 280;
    const CENTER = 150;

    const edgesGroup = document.getElementById('icoEdges');
    const vertsGroup = document.getElementById('icoVerts');
    const NS = 'http://www.w3.org/2000/svg';

    const lineEls = EDGES.map(() => {
      const el = document.createElementNS(NS, 'line');
      el.setAttribute('stroke', 'rgba(255,255,255,0.3)');
      el.setAttribute('stroke-width', '1');
      edgesGroup.appendChild(el);
      return el;
    });
    const vertEls = RAW.map(() => {
      const el = document.createElementNS(NS, 'circle');
      el.setAttribute('r', '2');
      el.setAttribute('class', 'wire-vertex');
      el.setAttribute('opacity', '0');
      vertsGroup.appendChild(el);
      return el;
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;
    const MAX_TILT = 0.55;

    function updateTarget(clientX, clientY) {
      const rect = icoSvg.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = Math.min(1, Math.max(-1, (clientX - cx) / (rect.width / 2)));
      const ny = Math.min(1, Math.max(-1, (clientY - cy) / (rect.height / 2)));
      targetTiltY = nx * MAX_TILT;
      targetTiltX = ny * MAX_TILT;
    }

    if (!reduced) {
      window.addEventListener('mousemove', (e) => updateTarget(e.clientX, e.clientY), { passive: true });
      window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) updateTarget(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      window.addEventListener('mouseleave', () => { targetTiltX = 0; targetTiltY = 0; });
    }

    function render(angleX, angleY, angleZ) {
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ), sinZ = Math.sin(angleZ);

      const projected = RAW.map(([x, y, z]) => {
        x *= SCALE; y *= SCALE; z *= SCALE;
        let x1 = x * cosY + z * sinY;
        let z1 = -x * sinY + z * cosY;
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;
        const persp = FOCAL / (FOCAL - z2);
        return {
          sx: CENTER + x3 * persp,
          sy: CENTER + y3 * persp,
          z: z2
        };
      });

      let frontIdx = 0;
      for (let i = 1; i < projected.length; i++) {
        if (projected[i].z > projected[frontIdx].z) frontIdx = i;
      }

      EDGES.forEach((edge, i) => {
        const a = projected[edge[0]];
        const b = projected[edge[1]];
        const avgZ = (a.z + b.z) / 2;
        const t = Math.min(1, Math.max(0, (avgZ + 110) / 220));
        const isFront = edge[0] === frontIdx || edge[1] === frontIdx;
        const el = lineEls[i];
        el.setAttribute('x1', a.sx.toFixed(2));
        el.setAttribute('y1', a.sy.toFixed(2));
        el.setAttribute('x2', b.sx.toFixed(2));
        el.setAttribute('y2', b.sy.toFixed(2));
        el.setAttribute('stroke-width', (isFront ? 1.3 : 0.6 + t * 0.9).toFixed(2));
        el.setAttribute('stroke', isFront ? '#7c3aed' : 'rgba(255,255,255,' + (0.14 + t * 0.5).toFixed(2) + ')');
      });

      projected.forEach((p, i) => {
        const t = Math.min(1, Math.max(0, (p.z + 110) / 220));
        const el = vertEls[i];
        el.setAttribute('cx', p.sx.toFixed(2));
        el.setAttribute('cy', p.sy.toFixed(2));
        el.setAttribute('r', i === frontIdx ? 3 : 1.6);
        el.setAttribute('fill', i === frontIdx ? '#7c3aed' : '#ffffff');
        el.setAttribute('opacity', (0.15 + t * 0.55).toFixed(2));
      });
    }

    if (reduced) {
      render(-0.35, 0.6, 0.12);
    } else {
      const start = performance.now();
      const tick = (now) => {
        const t = (now - start) / 1000;
        tiltX += (targetTiltX - tiltX) * 0.06;
        tiltY += (targetTiltY - tiltY) * 0.06;
        const angleX = -0.35 + Math.sin(t * 0.25) * 0.22 + tiltX;
        const angleY = t * 0.22 + tiltY;
        const angleZ = Math.sin(t * 0.18) * 0.1;
        render(angleX, angleY, angleZ);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }

});
