# Portfolio

This repository hosts **two independent, static portfolio websites** that live
side-by-side. Each is plain HTML/CSS/JavaScript — no frameworks and no build
step — so either can be opened directly or served as-is.

## Sites in this repo

| Site | Location | Live entry point | Description |
| --- | --- | --- | --- |
| **Alex Carter — Software Engineer** | repo root | `index.html` | Dark, developer-focused portfolio with an animated terminal card, project showcase, skills, and experience timeline. |
| **Ash — Digital Marketing & Web Design** | `ash/` | `ash/index.html` | Fast, B2B-focused portfolio for a Darwin-based digital marketer & web designer. |

```
.
├── index.html        # Alex Carter (software engineer) — site entry
├── css/
│   └── style.css     # Alex Carter styles
├── js/
│   └── main.js       # Alex Carter data + interactions
└── ash/              # Ash (digital marketer & web designer)
    ├── index.html
    ├── styles.css
    └── script.js
```

## Run locally

It's all static. Serve the repo root and you can reach both sites:

```bash
python3 -m http.server 8000
# Alex Carter:  http://localhost:8000/
# Ash:          http://localhost:8000/ash/
```

---

## 1. Alex Carter — Software Engineer (root)

A fast, modern, single-page portfolio for showcasing software engineering
projects.

### Features

- **Dark, developer-focused design** with an animated terminal card, typing effect, and subtle grid/glow background
- **Project showcase** — large featured project cards (alternating layout) plus a responsive grid of smaller projects, all driven by a simple data file
- **Skills, experience timeline, about, and contact sections**
- **Scroll-reveal animations, animated stat counters, and scroll-spy navigation**
- **Fully responsive** with a slide-in mobile menu
- **Accessible**: semantic HTML, ARIA labels, and `prefers-reduced-motion` support
- **Zero dependencies** — only two Google Fonts loaded from a CDN

### Make it yours

All content lives in two places:

**`js/main.js` — data.** Edit the constants at the top of the file:

| Constant            | What it controls                                          |
| ------------------- | --------------------------------------------------------- |
| `FEATURED_PROJECTS` | Large showcase cards (title, description, tags, links)    |
| `OTHER_PROJECTS`    | Smaller project grid cards                                |
| `SKILLS`            | Skill categories and tech chips                           |
| `EXPERIENCE`        | Work history timeline                                     |
| `SOCIALS`           | Footer social links (GitHub, LinkedIn, X, email)          |
| `TYPED_ROLES`       | Words cycled by the hero typing animation                 |

**`index.html` — copy.** Update name, tagline, bio, the About section, stats
(`data-count` attributes), and the contact email. Drop your résumé PDF in the
root as `resume.pdf`.

**Theme.** Change the palette by editing the CSS variables at the top of
`css/style.css` (`--bg`, `--accent`, fonts, etc.).

---

## 2. Ash — Digital Marketing & Web Design (`ash/`)

A fast, responsive, and creative one-page portfolio for **Ash**, a digital
marketer and web designer based in **Darwin, NT** (studying at Charles Darwin
University). Built to **attract B2B customers** and showcase Ash's digital
marketing and web design projects.

### Highlights

- **Fast** — pure HTML, CSS and vanilla JavaScript. Fonts load with
  `preconnect` + `display=swap`, and JS is deferred.
- **Responsive** — mobile-first layout with a slide-down mobile menu and fluid
  typography (`clamp()`) that scales from phones to large screens.
- **Creative** — Darwin-sunset palette (coral → amber → teal on deep navy),
  animated gradient orbs, a scrolling skills marquee, scroll-reveal animations,
  and animated stat counters.
- **B2B focused** — copy, services, case-study style work cards, a transparent
  process, social proof, and a lead-capture contact form all aimed at booking
  qualified business enquiries.
- **Accessible** — skip link, semantic landmarks, keyboard-friendly nav, ARIA
  labels, and full `prefers-reduced-motion` support.

### Structure

| File | Purpose |
| --- | --- |
| `ash/index.html` | Page markup and content |
| `ash/styles.css` | Design system, layout, responsive rules, animations |
| `ash/script.js` | Nav, scroll reveals, counters, portfolio filtering, form validation |

Sections: Hero → Trusted-by → Services → Work (filterable) → Process → About →
Testimonial → Contact (form) → Footer.

### Customising

- **Content / copy:** edit `ash/index.html`.
- **Colours & fonts:** tweak the CSS variables in the `:root` block of
  `ash/styles.css`.
- **Projects:** duplicate a `.project` article in the Work section and set its
  `data-category` (`web`, `marketing`, or `branding`).
- **Contact form:** currently shows a friendly confirmation on the client side.
  To receive real enquiries, point the `<form>` at a provider such as Formspree,
  Netlify Forms, or your own endpoint.

---

## Deploying

Both sites are fully static, so they work on any static host:

- **GitHub Pages**: Settings → Pages → deploy from the `main` branch root. Alex
  Carter's site serves at `/`, Ash's at `/ash/`.
- **Netlify / Vercel / Cloudflare Pages**: point at the repo; no build command,
  output directory `/`.

## License

MIT — use it freely for your own portfolio.

---

Ash's site made in Darwin, NT.
