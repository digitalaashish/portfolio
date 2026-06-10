/* ============================================================
   Portfolio data — edit the objects below to make it yours.
   ============================================================ */

const FEATURED_PROJECTS = [
  {
    title: "DeployDeck",
    description:
      "A self-hosted deployment platform that turns any Git repository into a zero-downtime production service. Features preview environments per pull request, automatic TLS, and a real-time log streaming dashboard built on WebSockets.",
    tags: ["Go", "Kubernetes", "React", "gRPC", "PostgreSQL"],
    github: "https://github.com/username/deploydeck",
    live: "https://deploydeck.example.com",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    art: "▲ deploydeck",
  },
  {
    title: "QueryLens",
    description:
      "An open-source SQL observability tool that captures slow queries in production, explains their execution plans visually, and suggests indexes. Used by 2,000+ developers and featured in a popular database newsletter.",
    tags: ["Rust", "TypeScript", "PostgreSQL", "WASM", "D3.js"],
    github: "https://github.com/username/querylens",
    live: "https://querylens.example.com",
    gradient: "linear-gradient(135deg, #232526 0%, #414345 60%, #6b2d5c 100%)",
    art: "◉ querylens",
  },
  {
    title: "Syncline",
    description:
      "A real-time collaborative whiteboard with CRDT-based conflict resolution, offline-first sync, and sub-50ms latency cursors. Handles 100+ concurrent editors per board on a single node.",
    tags: ["TypeScript", "CRDTs", "WebRTC", "Node.js", "Redis"],
    github: "https://github.com/username/syncline",
    live: "https://syncline.example.com",
    gradient: "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)",
    art: "✎ syncline",
  },
];

const OTHER_PROJECTS = [
  {
    title: "git-undo",
    description:
      "A CLI that makes any git mistake reversible with a single command. Parses the reflog and presents a human-readable timeline of recoverable states.",
    tags: ["Rust", "CLI", "Git"],
    github: "https://github.com/username/git-undo",
    live: null,
  },
  {
    title: "Loadshape",
    description:
      "A lightweight load-testing tool that replays sampled production traffic against staging environments with configurable ramp profiles.",
    tags: ["Go", "Distributed Systems"],
    github: "https://github.com/username/loadshape",
    live: null,
  },
  {
    title: "Markdown Resume",
    description:
      "Write your résumé in Markdown, get a beautifully typeset PDF and an ATS-friendly plain-text version from one source of truth.",
    tags: ["TypeScript", "Puppeteer", "CI/CD"],
    github: "https://github.com/username/markdown-resume",
    live: "https://mdresume.example.com",
  },
  {
    title: "Tiny Feature Flags",
    description:
      "A feature-flag service in under 1,000 lines: edge-cached flag evaluation, percentage rollouts, and an audit log. No vendor lock-in.",
    tags: ["Go", "SQLite", "Edge"],
    github: "https://github.com/username/tiny-flags",
    live: null,
  },
  {
    title: "Algo Visualizer",
    description:
      "Interactive visualizations of classic algorithms — pathfinding, sorting, and consensus protocols — with step-through debugging.",
    tags: ["React", "Canvas", "Algorithms"],
    github: "https://github.com/username/algo-visualizer",
    live: "https://algoviz.example.com",
  },
  {
    title: "dotfiles",
    description:
      "My fully reproducible development environment: Neovim, tmux, and shell config bootstrapped onto any machine in under two minutes.",
    tags: ["Shell", "Lua", "Nix"],
    github: "https://github.com/username/dotfiles",
    live: null,
  },
];

const SKILLS = [
  {
    category: "Languages",
    icon: "code",
    items: ["TypeScript", "Go", "Rust", "Python", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "Web Components", "Accessibility"],
  },
  {
    category: "Backend & Data",
    icon: "server",
    items: ["Node.js", "gRPC", "PostgreSQL", "Redis", "Kafka", "REST / GraphQL"],
  },
  {
    category: "Infrastructure",
    icon: "cloud",
    items: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Observability"],
  },
];

const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Nimbus Cloud",
    url: "https://example.com",
    period: "2023 — Present",
    points: [
      "Lead engineer on the internal deployment platform serving 400+ engineers, cutting median deploy time from 22 to 4 minutes.",
      "Designed a multi-region job scheduler in Go handling 50M tasks/day with exactly-once semantics.",
      "Mentor four engineers and run the backend architecture guild.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lumen Labs",
    url: "https://example.com",
    period: "2021 — 2023",
    points: [
      "Built the real-time collaboration engine behind the flagship editor using CRDTs, reaching 99.95% sync reliability.",
      "Drove a TypeScript strict-mode migration across a 300k LOC monorepo with zero feature freezes.",
      "Reduced P95 API latency by 60% via query optimization and read-path caching.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Freelance & Open Source",
    url: "https://example.com",
    period: "2019 — 2021",
    points: [
      "Shipped production web apps for early-stage startups across fintech and developer tooling.",
      "Maintained open-source libraries with a combined 4k+ GitHub stars.",
    ],
  },
];

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/username", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Twitter / X", url: "https://x.com/username", icon: "twitter" },
  { name: "Email", url: "mailto:alex.carter@example.com", icon: "mail" },
];

const TYPED_ROLES = ["web", "cloud", "terminal", "future"];

/* ============================================================
   Inline SVG icons
   ============================================================ */

const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  folder:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  twitter:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.5 16h4.5L8.5 4H4z"/><path d="M4 20l6.77-7.74M13.27 11.7 20 4"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  layout:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  server:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
  cloud:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
};

/* ============================================================
   Rendering
   ============================================================ */

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderFeatured() {
  const wrap = document.getElementById("featured-projects");
  FEATURED_PROJECTS.forEach((p, i) => {
    const links = [
      p.github && `<a class="icon-link" href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub repository">${ICONS.github}</a>`,
      p.live && `<a class="icon-link" href="${p.live}" target="_blank" rel="noopener" aria-label="Live site">${ICONS.external}</a>`,
    ].filter(Boolean).join("");

    wrap.appendChild(el(`
      <article class="featured ${i % 2 === 1 ? "flip" : ""} reveal">
        <a class="featured-media" href="${p.live || p.github}" target="_blank" rel="noopener" aria-label="${escapeHtml(p.title)}">
          <div class="media-art" style="background:${p.gradient}">${escapeHtml(p.art)}</div>
        </a>
        <div class="featured-content">
          <p class="featured-label">Featured Project</p>
          <h3 class="featured-title"><a href="${p.live || p.github}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a></h3>
          <div class="featured-desc">${escapeHtml(p.description)}</div>
          <ul class="featured-tags">${p.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
          <div class="featured-links">${links}</div>
        </div>
      </article>
    `));
  });
}

function renderProjectGrid() {
  const grid = document.getElementById("project-grid");
  OTHER_PROJECTS.forEach((p) => {
    const links = [
      p.github && `<a class="icon-link" href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub repository">${ICONS.github}</a>`,
      p.live && `<a class="icon-link" href="${p.live}" target="_blank" rel="noopener" aria-label="Live site">${ICONS.external}</a>`,
    ].filter(Boolean).join("");

    grid.appendChild(el(`
      <article class="project-card reveal">
        <div class="project-card-top">
          <span class="folder-icon">${ICONS.folder}</span>
          <div class="project-card-links">${links}</div>
        </div>
        <h3><a href="${p.live || p.github}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a></h3>
        <p>${escapeHtml(p.description)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
      </article>
    `));
  });
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  SKILLS.forEach((s) => {
    grid.appendChild(el(`
      <div class="skill-card reveal">
        <h3><span class="skill-icon">${ICONS[s.icon]}</span>${escapeHtml(s.category)}</h3>
        <div class="chip-row">${s.items.map((i) => `<span class="chip">${escapeHtml(i)}</span>`).join("")}</div>
      </div>
    `));
  });
}

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  EXPERIENCE.forEach((e) => {
    wrap.appendChild(el(`
      <div class="timeline-item reveal">
        <h3 class="timeline-role">${escapeHtml(e.role)} <span class="at">@ <a href="${e.url}" target="_blank" rel="noopener" style="color:inherit">${escapeHtml(e.company)}</a></span></h3>
        <p class="timeline-period">${escapeHtml(e.period)}</p>
        <ul class="timeline-points">${e.points.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      </div>
    `));
  });
}

function renderSocials() {
  const row = document.getElementById("social-row");
  SOCIALS.forEach((s) => {
    row.appendChild(el(`
      <a class="icon-link" href="${s.url}" target="_blank" rel="noopener" aria-label="${escapeHtml(s.name)}">${ICONS[s.icon]}</a>
    `));
  });
}

/* ============================================================
   Interactions
   ============================================================ */

function setupTyping() {
  const target = document.getElementById("typed-target");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let roleIdx = 0;
  let charIdx = TYPED_ROLES[0].length;
  let deleting = true;

  function tick() {
    const word = TYPED_ROLES[roleIdx];
    charIdx += deleting ? -1 : 1;
    target.textContent = word.slice(0, charIdx);

    let delay = deleting ? 70 : 110;
    if (!deleting && charIdx === word.length) {
      deleting = true;
      delay = 2400;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % TYPED_ROLES.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 2400);
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((n) => observer.observe(n));
}

function setupCounters() {
  const counters = document.querySelectorAll(".stat-value[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const node = entry.target;
      const end = parseInt(node.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      function frame(now) {
        const t = Math.min((now - start) / duration, 1);
        node.textContent = Math.round(end * (1 - Math.pow(1 - t, 3))).toLocaleString();
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => observer.observe(c));
}

function setupNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // scroll-spy: highlight the nav link of the section in view
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-link");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => spy.observe(s));
}

/* ============================================================
   Boot
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderProjectGrid();
  renderSkills();
  renderTimeline();
  renderSocials();
  document.getElementById("year").textContent = new Date().getFullYear();

  setupReveal();
  setupCounters();
  setupTyping();
  setupNav();
});
