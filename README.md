# Mark Alexander Ierwanto — Portfolio Hub

Modern engineering portfolio hub (`https://portfolio-web-5yv.pages.dev/`) paired with the main Blogger landing page (`https://www.markalexanderierwanto.com/`).

## Stack & Structure
- **Framework:** React 19, Vite 6, TypeScript 5.8
- **Hosting:** Cloudflare Pages (`npm run build` → `dist/`) with auto-deploy from `main`
- **Legacy Redirects:** `public/_redirects` & `vercel.json` (47 permanent `301` redirects from legacy Blogger URLs)

### Key Directories
- `src/data/` — Bilingual (`EN` / `ID`) structured data (`projects.ts`, `profile.ts`, `translations.ts`)
- `src/components/` — UI sections, Dark/Light theme navbar, Smart Video Player modal, Lightbox
- `src/utils/` — Clean URL deep-linking (`routing.ts`) & Google Drive/YouTube/MP4 resolver (`media.ts`)
- `src/styles/` — Design tokens (`tokens.css` with Dark default + Light theme), layout, and motion
- `public/` — Optimized assets (`assets/archive/*.webp`), PDF certificates, `sitemap.xml`, `robots.txt`, `_redirects`

## Development
```bash
npm install
npm run dev
npm run build
```
