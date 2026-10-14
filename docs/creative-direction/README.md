# STORM — creative direction and resumption brief
Updated 2026-10-14. Status: **research hypothesis / not approved for implementation**.

## Mission and immediate priorities
Make the portfolio credible for near-term engineering/product-design job applications while developing an exceptional personal visual language. Do **not** hold applications hostage to a redesign. Preserve direct access to résumé, work, contribution, code, and contact. No invented impact or claims.

## Identity
**Research × Design × Engineering → evolving archive.**
Working editorial metaphor: **An Unfinished Atlas / Living Monograph**. Not a literal antique atlas, not an invented research institution, not a Moebius imitation. An authored collection of engineered systems, experiments, and evidence. Visitors should feel something before understanding the construction; deeper inspection must justify curiosity.

Desired encounter: **contemplation first, discovery through interaction**. A calm surface revealing intricate, real mechanisms. Atmosphere → curiosity → evidence → understanding. The work should remain compelling to visitors unfamiliar with its artistic references.

## Visual influences — study principles, not recognizable motifs
- **Moebius / Jean Giraud**: unfamiliar but calm worlds, unusual chromatic harmony, scenery, negative space, density versus emptiness.
- **Lebbeus Woods**: speculative architecture, structural contradiction, spatial systems, exposed mechanisms.
- **Kentaro Miura / Berserk**: monumental scale, emotional consequence, selective density and intricate rendering.
- **Carlo Scarpa**: material junctions, precision at transitions, thresholds.
- Editorial monographs and scientific atlases: reading rhythm, annotation, cartographic relationships.
A/B/D reference interest: ahead-of-time work, alternative histories, sometimes artifacts of an unknown future. Avoid standard neon-cyberpunk, generic SaaS grids, performative glitch, and one-color branding.

## Composition rules
1. Feeling precedes explanation, but **intended reaction is a hypothesis** to test.
2. Detail → consequence → relationship → world; bottom-up is an option, not a mandate.
3. Generative specificity over arbitrary ornament.
4. Local component excellence **and** global compositional coherence are independent gates.
5. Structure beneath surface: diagrams and motion reveal real causality, not decorative circuitry.
6. Detail must reward attention; unfamiliarity must not destroy orientation.
7. Unusual project-specific chromatic environments; no palette locked before references and experiments.
8. Quiet moments are necessary for extraordinary moments to register.
9. Semantic accessibility, keyboard navigation, reduced motion, responsive layout, and performance are mandatory.
10. A recruiter should understand role, contributions, shipped status, and contact route quickly.

## Proposed information architecture (subject to audit)
- Homepage: strong first encounter + immediately available work/résumé/contact.
- Selected work: Seametry, Rugburn, Nakupenda, VŒID as appropriate; verify each project's implementation status and sources.
- Case studies: **Overview → Mechanism → Evidence**, with problem, personal contribution, decisions, constraints, outcome, limits, and next questions.
- Archive / elsewhere: experiments, writing, visual work, music; not a dumping ground.
- About and contact: professionally useful, no fictional persona.
Current repository has existing /work, /about, /contact, /elsewhere routes and existing content. Audit before restructuring.

## Flagship case study: Seametry
An open creation/redemption layer for tokenized-equity baskets on Solana. Distinguish live **Allocations** (direct constituent purchases) from **The Hall** (devnet Anchor/Rust mechanism for Alloy creation/redemption). Hall redemption burns Alloy and records per-leg claims; delivery is independent and issuer restrictions remain effective. Recorded mock-issuer devnet freeze test is evidence, **not** audit or mainnet validation. Verify all project claims and citations from Seametry source before publishing. Diagram opportunity: redemption succeeds while one constituent delivery remains restricted.

## Execution plan and gates
0. Preserve this brief; no immediate aesthetic rewrite.
1. Audit real repo, live site, existing case studies, assets, dependencies, performance, and claims.
2. Curate specific illustrated, architectural, editorial, and interactive references; document what each teaches and what not to copy.
3. Prototype **three materially different** visual grammars at small scale (typography, one object, one technical relationship, one mobile treatment). Critique before choosing.
4. Build **one vertical slice**: homepage encounter + Seametry case-study mechanism. Review mobile/desktop, accessibility, legibility, and truthfulness.
5. Expand only after passing the slice. Keep existing job-application paths functional throughout.

## Definition of done for the first slice
- Distinctive emotional encounter without delaying recognition of the creator's skills.
- Mechanism visually accurate and comprehensible to an unfamiliar reviewer.
- Aesthetic choices explainable beyond novelty.
- Both local and global hierarchy pass.
- Mobile works without visual cropping or obligatory animations.
- Clear evidence versus proposals; no fake metrics.
- Build/typecheck/lint and manual viewport review documented.

## Decisions pending
Actual live site and complete code/content audit; reference shortlist; palette; typography licensing; motion grammar; exact page IA; which case studies are verifiable; visual prototype approval. None are decided by this document.

## Existing repo constraints
Read root README.md and agent.md first. Preserve server-component defaults and semantic tokens; avoid speculative dependency changes. Note: README currently says Next 16.1.6 but package.json specifies 16.3.3; reconcile during audit, do not silently downgrade.
