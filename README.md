# Saraswoti Mesh Jali — Website

Modern, production-ready React rebuild of the Saraswoti Mesh Jali Manufacturing Workshop website (Bharatpur, Nepal). Bilingual (Nepali / English), fully responsive, and animated with Framer Motion.

## Tech Stack

- **React 19** + **Vite** — build tooling and dev server
- **Tailwind CSS v4** — utility-first styling (CSS-based config, no `tailwind.config.js` needed)
- **Framer Motion** — scroll reveals, staggered animations, mobile drawer transitions, hero/product interactions
- **Radix UI primitives** (`react-select`, `react-label`) styled in a shadcn/ui-style component layer (`src/components/ui`)
- **lucide-react** — icon set
- **@fontsource** — self-hosted Manrope, Inter and Noto Sans Devanagari (no external font requests at runtime)

## Getting Started

Requires Node.js 18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

The optimized output is written to `dist/`.

## Project Structure

```
src/
  assets/            # images (WebP + JPEG fallback) and background videos
  components/
    ui/              # shadcn-style primitives: Button, Input, Textarea, Label, Select
    *.jsx            # one component per page section (Hero, Products, Contact, ...)
  context/
    LanguageContext.jsx   # ne/en language state + persistence (localStorage)
  data/
    content.js       # all page copy and product/application data in one place
  App.jsx
  main.jsx
  index.css          # Tailwind entry + design tokens (@theme) + small global rules
```

Editing site copy (product names, descriptions, stats, nav links, etc.) only requires changing `src/data/content.js` — no need to touch component markup.

## Notes on Functionality Carried Over From the Original Site

- **Bilingual toggle** (नेपाली / EN) in the navbar, mobile drawer, and footer — persisted to `localStorage`, matching the original site's behavior.
- **Contact form** is client-side only, same as the original static site. It shows a "Sent" confirmation state but does not deliver anywhere yet. To receive real submissions, connect it to a form backend (e.g. Formspree, Getform) or a serverless function, and wire the `handleSubmit` function in `src/components/Contact.jsx` accordingly.
- **Embedded Google Map** in the Location section uses the same map link as the original site.
- The original site's `console.js` (which disabled right-click, dev tools, and the browser console) was **intentionally not carried over** — it degrades the developer and user experience and provides no real protection.

## Deployment

### Vercel (recommended)

1. Push this project to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel auto-detects the Vite framework preset — no configuration needed. Build command: `npm run build`, output directory: `dist`.

### Any static host

Run `npm run build` and upload the contents of `dist/` to any static host (Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc).

## Performance & SEO

- Images are pre-optimized to WebP.
- Fonts are self-hosted and subset-loaded on demand (only the character sets actually used are downloaded by the browser).
- Meta tags, Open Graph/Twitter cards, and JSON-LD `Manufacturer` structured data are set in `index.html`.
- Animations respect `prefers-reduced-motion`.
