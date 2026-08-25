# Storm Portfolio

Production portfolio for Victor Nwachukwu, positioned as a Software Engineer and Product Designer building high-trust systems under uncertainty.

## Stack

- Next.js 16.1.6 App Router
- React 19
- TypeScript
- Tailwind CSS 3
- Server Components by default

The active public experience does not load Three.js or Framer Motion. Those packages remain installed for now, but the previous fullscreen WebGL, cursor, glitch, and page-lifetime animation components have been retired.

## Information architecture

- `/` hiring-focused homepage
- `/work` selected systems and compressed archive
- `/work/rugburn` behavioral and forensic intelligence case study
- `/work/void` financial decision infrastructure case study
- `/work/nakupenda` social product systems case study
- `/about` professional context
- `/elsewhere` writing, music, and visual work
- `/Victor_Nwachukwu_CV_Senior.pdf` direct résumé asset

Legacy `/case-studies/*` routes redirect to the current canonical locations.

## Code structure

```text
app/                 Routes, metadata, robots, sitemap, and API
components/site/     Navigation, theme, and footer
components/home/     Homepage sections
components/work/     Reusable case-study primitives
content/             Profile and project content
lib/                 Site URL resolution
public/              Résumé, case-study evidence, and artwork
```

Only `ThemeToggle` and `MobileNavigation` are client components in the active site shell. The homepage and case studies are Server Components.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Environment

Public identity links are deliberately stored as verified static content in `content/profile.ts`. Optional deployment configuration:

```text
NEXT_PUBLIC_SITE_URL=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_SECURE=
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

`NEXT_PUBLIC_SITE_URL` is preferred for canonical URLs. Vercel production URL variables are used when it is absent. Local development falls back to `http://localhost:3000`.

The contact API requires SMTP credentials. It never ships a password or fake address fallback. The public site uses direct email links, so contact remains available even when SMTP is not configured.

## Content rules

- Do not invent traction, throughput, employers, customers, or testimonials.
- Keep RugBurn scoring policy, thresholds, and calibration internals private.
- Label VŒID implementation, mock state, and planned direction separately.
- Use the local Micro-Systems repository as the source of truth for Nakupenda.
- Treat screenshots as evidence of a decision, not as the case study itself.
- Preserve semantic status colors for status. Do not reuse them as decoration.

## Visual verification

Review both themes at 375, 390, 768, 1024, 1280, and 1440 pixels. Check the homepage, all three flagship case studies, the mobile menu, theme persistence, tables, images, focus states, and horizontal overflow.
