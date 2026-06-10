# Software Engineer Portfolio

A fast, modern, single-page portfolio website for showcasing software engineering projects. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, deployable anywhere in seconds.

## Features

- **Dark, developer-focused design** with an animated terminal card, typing effect, and subtle grid/glow background
- **Project showcase** — large featured project cards (alternating layout) plus a responsive grid of smaller projects, all driven by a simple data file
- **Skills, experience timeline, about, and contact sections**
- **Scroll-reveal animations, animated stat counters, and scroll-spy navigation**
- **Fully responsive** with a slide-in mobile menu
- **Accessible**: semantic HTML, ARIA labels, and `prefers-reduced-motion` support
- **Zero dependencies** — only two Google Fonts loaded from a CDN

## Project Structure

```
.
├── index.html        # Page structure and copy (name, bio, about, contact)
├── css/
│   └── style.css     # All styling; theme colors via CSS variables at the top
└── js/
    └── main.js       # Project/skill/experience data + rendering and interactions
```

## Quick Start

No tooling required. Either open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Make It Yours

All content lives in two places:

### 1. `js/main.js` — data

Edit the constants at the top of the file:

| Constant            | What it controls                                          |
| ------------------- | --------------------------------------------------------- |
| `FEATURED_PROJECTS` | Large showcase cards (title, description, tags, links)    |
| `OTHER_PROJECTS`    | Smaller project grid cards                                |
| `SKILLS`            | Skill categories and tech chips                           |
| `EXPERIENCE`        | Work history timeline                                     |
| `SOCIALS`           | Footer social links (GitHub, LinkedIn, X, email)          |
| `TYPED_ROLES`       | Words cycled by the hero typing animation                 |

To add a project, append an object like:

```js
{
  title: "My Project",
  description: "One or two sentences about what it does and why it matters.",
  tags: ["TypeScript", "React"],
  github: "https://github.com/you/my-project",
  live: "https://my-project.example.com", // or null
}
```

### 2. `index.html` — copy

Update your name, tagline, bio, the About section, stats (`data-count` attributes), and the contact email. Drop your résumé PDF in the root as `resume.pdf`.

### Theme

Change the palette by editing the CSS variables at the top of `css/style.css` (`--bg`, `--accent`, fonts, etc.).

## Deploying

The site is fully static, so it works on any static host:

- **GitHub Pages**: Settings → Pages → deploy from the `main` branch root
- **Netlify / Vercel / Cloudflare Pages**: point at the repo; no build command, output directory `/`

## License

MIT — use it freely for your own portfolio.
