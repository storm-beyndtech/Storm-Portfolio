# RugBurn Case Study

## RugBurn: Solana Token-Risk Intelligence for Traders, Builders, and Agentic Workflows

RugBurn is a Solana-native risk intelligence product that helps traders, communities, developers, and future VASP operators screen token risk before they act. The system turns fragmented market and on-chain signals into an explainable report: safety score, risk level, contract checks, holder concentration, liquidity, deployer evidence, market pulse, maturity, metadata, hard caps, and recommended action.

I built RugBurn as a practical answer to a real workflow problem: new Solana tokens move faster than most people can investigate them, and agentic trading tools are beginning to automate decisions without a reliable risk gate.

## My Role

I led product strategy, scoring design, backend architecture, frontend implementation, API design, admin tooling, pricing, and go-to-market planning.

Key responsibilities:

- Designed the risk scoring doctrine and evidence-first product language.
- Built the Next.js dashboard, docs, pricing, settings, admin, and developer API surfaces.
- Built the Go worker that gathers token evidence and runs scans.
- Added Telegram and Discord workflows for community-based scanning.
- Integrated third-party data providers, including Birdeye enrichment and Helius-backed Solana evidence.
- Built usage counters, quota enforcement, admin subscription controls, and queued transactional email.
- Created launch strategy across traders, teams, hackathon builders, Superteam/Birdeye audiences, and VASP pilots.

## Problem

Solana token decisions are high-speed and fragmented.

Traders often check several tools before entry. Community moderators see suspicious mints before anyone has time to do deeper analysis. Builders are shipping trading agents and alert bots, but most agents still lack a pre-action risk screen. VASP and payment operators need evidence trails, not a random score screenshot.

The core problem was not “make another scanner.” It was:

- Can a user paste a token mint and immediately understand the most important risks?
- Can a bot or agent call the same evidence before recommending, alerting, or trading?
- Can the system stay affordable while third-party data costs are real?
- Can the product be honest about model limits while still being useful today?

## Constraints

RugBurn had several hard constraints:

- New-token data is incomplete by nature.
- Provider credits can be burned quickly by aggressive transaction-history calls.
- A high accuracy number can hide weak rug detection if failed-token capture is poor.
- Mobile and Telegram users need fast, readable output.
- Public claims must avoid pretending the product is financial advice or full AML compliance.
- Pricing needs to stay affordable without inviting spam or provider-credit abuse.

## Solution

RugBurn uses an evidence-first scan report instead of a naked score.

Each token report includes:

- Contract evidence: sellability, mint/freeze authority, tax, metadata, extensions.
- Liquidity evidence: pool depth, venue, LP status, liquidity-to-market-cap pressure.
- Ownership evidence: largest holder, top-10 concentration, analyzed holder count.
- Deployer evidence: resolved deployer wallet and exposure.
- Market evidence: volume, trade count, buy/sell ratio, price movement, stress caps.
- Maturity evidence: market age and launch survival.
- Metadata evidence: coverage and mutability.
- AML placeholder: reserved for wallet-risk evidence as the product matures.
- Hard caps: forced score limits when concentration, maturity, market stress, or missing evidence makes a high score unsafe.

The product surfaces that evidence across:

- Dashboard scanner for manual token checks.
- Watchlist and alert workflows.
- Telegram and Discord command scans.
- Developer API for backend integrations.
- MCP server for agentic workflows.
- Admin tools for subscriptions, usage, demos, and operational control.

## Architecture

The current architecture is intentionally pragmatic.

Flow:

1. User, bot, API client, or MCP client submits a Solana token mint.
2. RugBurn checks authentication, rate limits, subscription tier, and usage counters.
3. The Go worker gathers token evidence from Solana data providers and market data sources.
4. The scoring layer produces facets, risk alerts, hard caps, confidence notes, and final score.
5. Results are stored in Supabase for dashboard reads, cached API reads, and calibration review.
6. The frontend renders a human-readable report while API/MCP clients receive structured evidence.
7. Admin and settings pages read from durable `usage_counters`, not fragile user-row counters.
8. Transactional emails are queued so demo requests, account notices, and future login events do not block request paths.

Core stack:

- Next.js and React for dashboard, docs, marketing, admin, and API routes.
- Go for worker-side scanning and provider orchestration.
- Supabase Postgres for scans, users, subscriptions, usage counters, email queue, API keys, and calibration data.
- Better Auth for accounts.
- Birdeye for enriched market data.
- Helius for Solana RPC and on-chain evidence where direct chain access is required.
- Telegram/Discord integrations for community workflows.
- MCP for agentic clients.

## Product Decisions

### Evidence Before Claims

The scan page explains why a token received a score. This matters because users do not only need “safe” or “risky.” They need to know whether the problem is holder concentration, immature market age, weak liquidity, suspicious deployer behavior, missing evidence, or market stress.

### Hard Caps Beat False Confidence

If the largest holder owns most of the supply or the market is too immature, RugBurn can cap the final score even when some facets look clean. This avoids the product giving a high score to a token that is structurally fragile.

### Calibration Is Treated Honestly

A recent calibration snapshot showed high overall accuracy, but weak precision and recall for failed-token capture. That means the product cannot market itself as a perfect rug predictor. The correct positioning is risk evidence, screening, and workflow guardrails while v3.3 behavioral scoring matures.

### Provider Cost Is Product Design

Behavioral analysis can burn provider credits if every scan aggressively pulls transaction history. RugBurn moved toward a controlled model:

- Use Birdeye for enriched market and token data where possible.
- Use Helius where RPC/on-chain evidence is actually needed.
- Keep fresh scans quota-bound.
- Serve cached API reads separately from expensive full scans.
- Track usage in `usage_counters` by type: `fresh_scan`, `telegram_scan`, `api_read`, `ai_message`, and `behavior_index`.

### Admin Control Matters Early

The admin can manually upgrade users for comped access, pilots, grants, manual payments, and external wallet payments. This is important before billing is fully automated because early revenue and partnerships often happen manually.

## Outcomes

Shipped product surfaces:

- Dashboard token scanner with evidence-rich reports.
- Wallet-risk surface.
- API v1 with quotas and scopes.
- MCP server for agentic clients.
- Telegram and Discord scan workflows.
- Subscription tiers: Free, Pro, Whale, and Enterprise/pilot options.
- Admin manual subscription control.
- Usage counter migration for quota auditability.
- Queued email infrastructure for demo requests and transactional mail.
- Birdeye-enriched scan path to reduce dependence on aggressive direct calls.
- Build-in-public marketing strategy and X content pool.

Current pricing:

- Free: $0 with limited daily scans and starter API reads.
- Pro: $19/month for serious traders and researchers.
- Whale: $69/month for high-volume traders and private groups.
- Enterprise/pilots: $300-400/month or usage-based, depending on workflow and data cost.

## Key Metric Snapshot

Recent calibration snapshot:

- v3.2.2 accuracy: 90.4%.
- v3.3 behavioral shadow accuracy: 90.9%.
- Dataset: 177 samples.
- Failed tokens: 16.
- Safe tokens: 161.
- Current weakness: failed-token separation is still poor, so precision/recall need improvement before public rug-detection claims become strong.

This shaped the product messaging. RugBurn should not claim “we predict every rug.” It should claim “we expose token-risk evidence before you, your group, or your agent acts.”

## What I Would Improve Next

The next product improvements are clear:

- Expand the calibration dataset with more known failed launches.
- Improve v3.3 behavioral inputs without destroying provider credits.
- Add user-visible calibration notes and confidence warnings.
- Add team/API usage dashboards.
- Add more resilient email templates and login notices.
- Add a stronger demo-request funnel on marketing and docs pages.
- Produce X-native motion graphics and build-in-public content around real scans.
- Run pilots with Telegram groups, agent builders, and VASP-adjacent operators.

## Portfolio Summary

RugBurn demonstrates my ability to build a full-stack crypto product that combines product strategy, backend systems, data pipelines, frontend UX, API design, community workflows, pricing, abuse protection, and honest model evaluation.

The strongest part of the project is not only the scanner. It is the operating system around the scanner: evidence collection, quota control, admin operations, API access, agent compatibility, and a marketing strategy aimed at real users who can provide feedback.

## Screenshot Checklist

Use these screenshots when publishing the case study:

- Token scan result with facets and hard caps.
- Docs/API quickstart with request demo.
- Settings subscription usage counters.
- Admin user table showing usage from `usage_counters`.
- Telegram or Discord scan output.
- API response JSON.
- Calibration dashboard showing accuracy and precision/recall caveat.
- Birdeye build-in-public post or motion graphic.

