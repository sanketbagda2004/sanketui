/* =========================================================
   DATA
========================================================= */
const projects = [
  {
    title: "Khushi Creation",
    desc: "A clean and modern e-commerce interface designed around product discovery and easy navigation.",
    thumb: "proj-khushi.jpg",
    tags: [["UI Design",true],["Web",false],["Figma",true],["E-Commerce",false]],
    url: "https://www.figma.com/proto/6INC16jeEGjpNR8NFCdYEC/KS?node-id=16-2&t=bCEzNh8IMtXzFdNH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A2&show-proto-sidebar=1"
  },
  {
    title: "Sharp Cameo",
    desc: "Sharp Cameo is a modern fashion education platform empowering the next generation of creative designers.",
    thumb: "proj-sharpcameo.jpg",
    tags: [["UI/UX",true],["Web",false],["Figma",true],["Gamification",false]],
    url: "https://www.figma.com/proto/crgIRsoa30CVGBraGbBP9H/Sharp-Cameo?node-id=39-5&t=Fem5QfWLjZ2jaOp8-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A4&starting-point-node-id=39%3A5"
  },
  {
    title: "LV",
    desc: "LV is a modern and minimal travel booking site for next generation of design.",
    thumb: "proj-lv.jpg",
    tags: [["UI/UX",true],["Web",false],["Figma",true],["UX",false]],
    url: "https://www.figma.com/proto/bt6HGx99zwu1EMlMsHcQ84/Untitled?node-id=3-2167&t=I5E9K5LplOOJNn0M-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3229"
  },
  {
    title: "Legacy Travel",
    desc: "A premium travel booking experience combining minimal design, glassmorphism and intuitive navigation.",
    thumb: "proj-legacy.jpg",
    tags: [["UI/UX",true],["Booking",false],["Figma",true],["UX",false]],
    url: "https://www.figma.com/proto/wCdLmSRqFxpiBiHltmv8oL/Legasy?node-id=279-3559&t=dG6uFEMfVdhOqGUI-1&scaling=min-zoom&content-scaling=fixed&page-id=6%3A327&starting-point-node-id=494%3A822"
  }
];

/* Legacy self-contained SVG thumbnail illustrations (kept as fallback, unused) */
const thumbSvgs = {
  ecom: `
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Khushi Creation preview">
      <rect width="480" height="300" fill="#FBF3E7"/>
      <rect x="0" y="0" width="480" height="34" fill="#FFFDF6"/>
      <circle cx="20" cy="17" r="4.5" fill="#FF6B6B"/>
      <circle cx="34" cy="17" r="4.5" fill="#FFD93E"/>
      <circle cx="48" cy="17" r="4.5" fill="#0E0E0E"/>
      <rect x="150" y="10" width="180" height="14" rx="7" fill="#eee"/>
      <line x1="0" y1="34" x2="480" y2="34" stroke="#0E0E0E" stroke-width="2"/>
      <rect x="40" y="70" width="120" height="14" fill="#0E0E0E"/>
      <rect x="40" y="94" width="150" height="14" fill="#0E0E0E"/>
      <rect x="40" y="130" width="200" height="8" fill="#c9c2b4"/>
      <rect x="40" y="146" width="170" height="8" fill="#c9c2b4"/>
      <rect x="40" y="178" width="110" height="30" fill="#0E0E0E"/>
      <rect x="160" y="178" width="90" height="30" fill="none" stroke="#0E0E0E" stroke-width="2"/>
      <rect x="290" y="60" width="150" height="200" fill="#e4d9c6" stroke="#0E0E0E" stroke-width="2.5"/>
      <path d="M365 100 C 345 100 335 125 335 150 C335 190 355 230 365 250 C 375 230 395 190 395 150 C395 125 385 100 365 100Z" fill="#FF6B6B" opacity="0.85"/>
      <circle cx="365" cy="118" r="14" fill="#fff" stroke="#0E0E0E" stroke-width="2"/>
    </svg>`,
  fashion: `
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sharp Cameo preview">
      <rect width="480" height="300" fill="#3A0E10"/>
      <rect width="480" height="300" fill="url(#g1)"/>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#5a1418"/>
          <stop offset="1" stop-color="#2a0a0c"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="480" height="34" fill="#3A0E10"/>
      <line x1="0" y1="34" x2="480" y2="34" stroke="#000" stroke-width="1"/>
      <circle cx="26" cy="17" r="9" fill="none" stroke="#e8c9a0" stroke-width="1.6"/>
      <rect x="330" y="10" width="120" height="14" rx="7" fill="#5a2a2c"/>
      <g opacity="0.9">
        <ellipse cx="240" cy="120" rx="26" ry="30" fill="none" stroke="#e8c9a0" stroke-width="2.5"/>
        <path d="M200 260 L215 150 Q240 138 265 150 L280 260Z" fill="none" stroke="#e8c9a0" stroke-width="2.5"/>
        <line x1="240" y1="150" x2="240" y2="230" stroke="#e8c9a0" stroke-width="1.4" stroke-dasharray="4 4"/>
      </g>
      <text x="240" y="235" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#f1e3c8" font-style="italic">Master the Art</text>
      <text x="240" y="258" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#f1e3c8" font-style="italic">of Fashion Design</text>
    </svg>`,
  travel: `
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LV travel preview">
      <rect width="480" height="300" fill="#0f2a3d"/>
      <rect width="480" height="300" fill="url(#g2)"/>
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#20465e"/>
          <stop offset="1" stop-color="#0a1e2c"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="480" height="30" fill="#0f2a3d"/>
      <circle cx="440" cy="15" r="9" fill="#fff" opacity="0.9"/>
      <rect x="30" y="10" width="90" height="10" rx="5" fill="#fff" opacity="0.7"/>
      <g fill="#12384f">
        <rect x="0" y="150" width="120" height="90" />
        <rect x="120" y="120" width="140" height="120" />
        <rect x="260" y="160" width="110" height="80" />
        <rect x="370" y="130" width="110" height="110" />
      </g>
      <g stroke="#e9e2cf" stroke-width="1.4" opacity="0.85" fill="none">
        <rect x="140" y="150" width="18" height="26"/>
        <rect x="170" y="150" width="18" height="26"/>
        <rect x="200" y="150" width="18" height="26"/>
        <rect x="280" y="180" width="16" height="24"/>
        <rect x="310" y="180" width="16" height="24"/>
      </g>
      <rect x="0" y="240" width="480" height="60" fill="#0a3752"/>
      <path d="M0 245 Q120 225 240 245 T480 245 V260 H0Z" fill="#0e4a6b" opacity="0.8"/>
      <text x="70" y="215" font-family="Georgia, serif" font-size="30" fill="#fff" font-style="italic">Italy</text>
    </svg>`,
  chauffeur: `
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Legacy Travel preview">
      <rect width="480" height="300" fill="#EDE7DC"/>
      <rect x="0" y="0" width="480" height="34" fill="#0E0E0E"/>
      <rect x="20" y="11" width="80" height="12" fill="#EDE7DC"/>
      <rect x="330" y="9" width="120" height="16" rx="8" fill="#EDE7DC"/>
      <path d="M0 200 L480 120 V300 H0Z" fill="#cfd8de"/>
      <path d="M310 150 L470 95 L460 140 L340 175Z" fill="#e8ecef" stroke="#0E0E0E" stroke-width="2"/>
      <g>
        <rect x="70" y="205" width="230" height="46" rx="10" fill="#c7c9cc" stroke="#0E0E0E" stroke-width="2.5"/>
        <path d="M100 205 Q130 175 180 175 L230 175 Q255 175 265 205Z" fill="#c7c9cc" stroke="#0E0E0E" stroke-width="2.5"/>
        <rect x="140" y="184" width="90" height="22" fill="#8fa6b3" opacity="0.7"/>
        <circle cx="115" cy="253" r="16" fill="#0E0E0E"/>
        <circle cx="255" cy="253" r="16" fill="#0E0E0E"/>
        <circle cx="115" cy="253" r="6" fill="#EDE7DC"/>
        <circle cx="255" cy="253" r="6" fill="#EDE7DC"/>
      </g>
      <text x="40" y="90" font-family="Georgia, serif" font-size="24" fill="#0E0E0E">Luxury Chauffeur Travel</text>
      <text x="40" y="118" font-family="Georgia, serif" font-size="24" fill="#0E0E0E">for Every Occasion</text>
    </svg>`
};

const aiSteps = ["Research","Ideation","Wireframing","AI Exploration","UI Design","UI Design","Prototype"];

const tools = [
  { icon:"chatgpt_1.jpg", name:"ChatGPT", desc:"Research · UX Ideas · Content · Problem Solving" },
  { icon:"figma_1.jpg", name:"Figma", desc:"UI Design · Prototyping · Design Systems" },
  { icon:"photoshop.jpg", name:"Photoshop", desc:"Graphic Design · Post · Site Mock-up" },
  { icon:"aitools.jpg", name:"AI Tools", desc:"Image Generation · Ideation · Rapid Exploration" },
  { icon:"stitch_1.jpg", name:"Stitch", desc:"Design Reference · Visuals · Prototype" },
  { icon:"claude_1.jpg", name:"Claude", desc:"Visual Assets · Icons · Branding" },
  { icon:"illustrator.jpg", name:"Illustrator", desc:"Graphics · Web design · Mock-up" },
];

const whatido = [
  { title:"UX Design", items:["User Research","User Flows","Wireframing","Information Architecture","Usability Thinking"] },
  { title:"UI Design", items:["Visual Design","Design Systems","Responsive Design","Typography","Color & Layout"] },
  { title:"AI-Assisted Design", items:["AI Ideation","Rapid Exploration","AI Image Generation","Content Generation","Design Workflow Optimization"] },
];

const dpSteps = [
  { title:"Understand", desc:"Frame the problem, audience and business goals." },
  { title:"Research", desc:"Study users, competitors and context." },
  { title:"Define", desc:"Turn insights into a clear design direction." },
  { title:"Explore", desc:"Rapid concepts, including AI-assisted exploration." },
  { title:"Design", desc:"Craft high-fidelity screens and systems." },
  { title:"Prototype", desc:"Build interactive flows that feel real." },
  { title:"Test", desc:"Validate with users and refine the details." },
];

/* =========================================================
   RENDER HELPERS
========================================================= */
function renderProjects(){
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal-up" style="--delay:${(i%2)*0.08}s">
      <div class="project-thumb">
        <img src="${p.thumb}" alt="${p.title} preview" loading="lazy">
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tag-row">
          ${p.tags.map(([label,hot]) => `<span class="tag ${hot ? 'tag-hot':''}">${label}</span>`).join('')}
        </div>
        <a class="visit-link" href="${p.url}" target="_blank" rel="noopener">Visit Site <span class="arrow">&rarr;</span></a>
      </div>
    </article>
  `).join('');
}

function renderAiSteps(){
  const wrap = document.getElementById('aiSteps');
  wrap.innerHTML = aiSteps.map((s,i) => `<div class="ai-step reveal-up" style="--delay:${i*0.05}s">${i+1}. ${s}</div>`).join('');
}

function renderTools(){
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = tools.map((t,i) => `
    <div class="tool-card reveal-up" style="--delay:${(i%3)*0.08}s">
      <div class="tool-top">
        <div class="tool-icon"><img src="${t.icon}" alt="${t.name} logo"></div>
        <span class="tool-num">${String(i+1).padStart(2,'0')}</span>
      </div>
      <h3>${t.name}</h3>
      <div class="tool-desc">${t.desc}</div>
    </div>
  `).join('');
}

function renderWhatido(){
  const grid = document.getElementById('whatidoGrid');
  grid.innerHTML = whatido.map((w,i) => `
    <div class="whatido-card reveal-up" style="--delay:${i*0.1}s">
      <div class="whatido-num">${i+1}</div>
      <h3>${w.title}</h3>
      <ul>${w.items.map(it => `<li>${it}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderDp(){
  const list = document.getElementById('dpList');
  list.innerHTML = dpSteps.map((s,i) => `
    <div class="dp-item reveal-up" style="--delay:${i*0.06}s">
      <div class="dp-marker"></div>
      <div>
        <h4>${s.title.toUpperCase()}</h4>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');
}

/* =========================================================
   INTERACTIONS
========================================================= */
function initScrollReveal(){
  const els = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initHeaderHide(){
  const header = document.getElementById('siteHeader');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if(y > lastY && y > 140){ header.classList.add('hide'); }
    else{ header.classList.remove('hide'); }
    lastY = y;
  }, { passive:true });
}

function initMobileNav(){
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mobileNav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  }));
}

function initCursor(){
  if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const dot = document.getElementById('cursorDot');
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .project-card, .tool-card, .whatido-card').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('grow'));
    el.addEventListener('mouseleave', () => dot.classList.remove('grow'));
  });
}

function initSmoothAnchors(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if(id.length > 1){
        const target = document.querySelector(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({ behavior:'smooth', block:'start' });
        }
      }
    });
  });
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderAiSteps();
  renderTools();
  renderWhatido();
  renderDp();

  initScrollReveal();
  initHeaderHide();
  initMobileNav();
  initCursor();
  initSmoothAnchors();
});
