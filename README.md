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
- `/contact` context-aware contact form
- `/elsewhere` writing, music, and visual work
- `/Victor_Nwachukwu_Software_Engineer.pdf` direct résumé asset

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

Client components are limited to the theme and mobile navigation controls, the hero carousel, and the contact form. The surrounding pages and case studies remain Server Components.

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

Public identity links use deployment variables when provided and verified fallbacks otherwise:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_DISCORD_URL=
NEXT_PUBLIC_TWITTER_URL=
NEXT_PUBLIC_TELEGRAM_URL=
NEXT_PUBLIC_WHATSAPP_URL=
NEXT_PUBLIC_BEHANCE_URL=
NEXT_PUBLIC_BLOG_URL=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_SECURE=
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

`NEXT_PUBLIC_SITE_URL` is preferred for canonical URLs. Vercel production URL variables are used when it is absent. Local development falls back to `http://localhost:3000`.

The contact API requires SMTP credentials and never ships a password fallback. All visible contact actions lead to the context-aware form; social channels remain available independently.

## Content rules

- Do not invent traction, throughput, employers, customers, or testimonials.
- Keep Rugburn scoring policy, thresholds, and calibration internals private.
- Label VŒID implementation, mock state, and planned direction separately.
- Use the local Micro-Systems repository as the source of truth for Nakupenda.
- Treat screenshots as evidence of a decision, not as the case study itself.
- Preserve semantic status colors for status. Do not reuse them as decoration.

## Visual verification

Review both themes at 375, 390, 768, 1024, 1280, and 1440 pixels. Check the homepage, all three flagship case studies, the mobile menu, theme persistence, tables, images, focus states, and horizontal overflow.
