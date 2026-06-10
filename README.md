# Ash — Portfolio Website

A fast, responsive, and creative one-page portfolio for **Ash**, a digital
marketer and web designer based in **Darwin, NT** (studying at Charles Darwin
University). The site is built to **attract B2B customers** and showcase Ash's
digital marketing and web design projects.

## Highlights

- **Fast** — pure HTML, CSS and vanilla JavaScript. No frameworks, no build
  step, no heavy dependencies. Fonts load with `preconnect` + `display=swap`,
  and JS is deferred.
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

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content |
| `styles.css` | Design system, layout, responsive rules, animations |
| `script.js` | Nav, scroll reveals, counters, portfolio filtering, form validation |

## Sections

Hero → Trusted-by → Services → Work (filterable) → Process → About →
Testimonial → Contact (form) → Footer.

## Run it locally

It's a static site, so just open `index.html` in a browser, or serve it:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customising

- **Content / copy:** edit `index.html`.
- **Colours & fonts:** tweak the CSS variables in the `:root` block of
  `styles.css`.
- **Projects:** duplicate a `.project` article in the Work section and set its
  `data-category` (`web`, `marketing`, or `branding`).
- **Contact form:** currently shows a friendly confirmation on the client side.
  To receive real enquiries, point the `<form>` at a provider such as Formspree,
  Netlify Forms, or your own endpoint.

---

Made in Darwin, NT.
