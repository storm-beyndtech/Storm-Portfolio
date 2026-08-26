# Agent notes

## Non-negotiable architecture

- Preserve Next.js 16.1.6 and the App Router.
- Keep Server Components as the default.
- Do not add `use client` to page roots.
- Keep interactivity inside small client islands.
- Use `next/image` for public imagery.
- Respect reduced motion and visible focus.

## Design system

`app/globals.css` defines the semantic theme contract:

- surfaces: canvas, subtle, well, raised, overlay
- text: primary, secondary, tertiary
- borders: subtle, default, interactive
- brand: accent, hover, quiet
- interaction: focus ring
- status: positive, warning, critical, unknown

Components consume semantic roles. Theme-specific raw color values belong only in the token mappings. Status colors must not become decorative chrome.

The visual direction is restrained, editorial, technical, and slightly uneasy. Do not restore fullscreen cursor effects, random glitches, autoplay media, decorative WebGL, or constant page motion.

## Product truth

- Rugburn source: `../RUGBURN` (read-only reference)
- VŒID source: `../VOID` (read-only reference)
- Nakupenda source: `../Micro-Systems` (read-only reference)

Re-check these repositories before changing product claims. Never expose proprietary Rugburn scoring, policy, calibration thresholds, or private operational data.

## Public identity

Verified contact and profile links are resolved in `content/profile.ts` from `NEXT_PUBLIC_*` deployment variables with reviewed public fallbacks. Missing Discord or Telegram URLs must route to the context-aware contact form, never to a fake profile.

## Verification

Before handoff:

```bash
npm run typecheck
npm run lint
npm run build
git diff --check
```

Then run the production server and inspect both themes at 375, 390, 768, 1024, 1280, and 1440 pixels. If browser tooling is unavailable, state that visual review is incomplete and provide the exact routes and states for a human eyeball pass.
