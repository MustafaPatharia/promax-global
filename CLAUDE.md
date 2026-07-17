# CLAUDE.md — Promax Global site

Marketing site for **Promax Global** (UAE-headquartered ports / trade / infra / energy /
investment group; brand line "From UAE to the World"). Goal: a cinematic, motion-heavy site
that stays **fast and rankable** — full technical SEO **and GEO** (generative-engine / AI-crawler
optimization) so LLMs cite Promax as a known entity.

## Stack

- **Next.js 16** App Router + **React 19**, **TypeScript**, **Tailwind v4** (`@tailwindcss/postcss`).
- Package manager: **pnpm**. Scripts: `pnpm dev` · `pnpm build` · `pnpm start` · `pnpm lint`.
- Motion libs installed: `motion` (Framer Motion, import `motion/react`), `gsap` + `@gsap/react`,
  `lenis`, `three` + `@react-three/fiber` + `@react-three/drei`.
- CodeGraph indexed (`.codegraph/`) — use `codegraph_explore` before grep/Read.

## Where things live

```
src/app/            App Router pages + route handlers
  layout.tsx        Root: global <Metadata>, fonts (Poppins/Inter), JsonLd, SmoothScroll, Nav, Footer
  page.tsx          Home — hand-composed sections (hero → marquee → intent → services → …)
  portfolio/        Listing + [slug] division pages
  {about,contact,invest-with-us,work-with-us}/page.tsx  data-driven via <PageShell>
  robots.ts         allows AI bots by name (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…)
  sitemap.ts        from lib/site allRoutes
  llms.txt/route.ts GEO: machine-readable site summary for LLMs
src/lib/
  site.ts           SINGLE SOURCE OF TRUTH — identity, contact, nav, allRoutes, verticals, stats
  seo.ts            pageMeta() helper — per-page title/description/canonical/OG/Twitter
  videos.ts         video()/poster() URL builders (NEXT_PUBLIC_VIDEO_BASE → CDN swap, no code change)
  gsap.ts           registers ScrollTrigger once; exports prefersReducedMotion()
  content.ts, faqs.ts  page copy + quotable FAQ Q&A (feeds PageShell + FAQ schema)
src/components/
  PageShell.tsx     generic content-driven inner page (hero/sections/stats/scrub band/quote/FAQ/CTA)
  JsonLd.tsx        global Organization + WebSite schema.org
  Nav, Footer, SmoothScroll (Lenis), Icons, JsonLd, PageSchema
  anim/             ALL motion primitives (see below)
```

## Animation primitives (reuse these — don't reinvent)

In `src/components/anim/`:

- **HeroParticles / hero/HeroScene** — WebGL point-cloud globe, cursor-follow (R3F, `ssr:false`).
- **BackgroundVideo** — full-bleed muted loop + poster + overlay; cursor-parallax drift.
- **LoopVideo** — autoplay loop that fills positioned parent (no seek, no jank).
- **ParallaxMedia** — LoopVideo that drifts/zooms on scroll + tilts to cursor.
- **VideoScrub** — scroll position drives `currentTime` (GSAP ScrollTrigger). For slow cinematic clips.
- **VideoGrid** — hover-to-play tiles + click-to-lightbox (keyboard + Esc).
- **HorizontalScroll** — pinned Apple-style sideways scroll track.
- **Reveal** — one-shot scroll-into-view (Motion); variants: up/left/right/scale/blur.
- **KineticHeading, Marquee, Counter, ScrubBand** — text/stat motion.

Library routing (per `_animation.json`): CSS first → Lenis (smooth scroll) → Motion (React UI) →
GSAP+ScrollTrigger (choreography/scrub) → Three/R3F (3D, lazy). Full decision framework in
`_animation.json`.

### Motion production rules (enforce)

- Animate **only `transform` + `opacity`** (GPU compositing; no layout-triggering props).
- **Never `setState` in `useFrame`** (R3F) — mutate refs.
- Respect **`prefers-reduced-motion`** — Motion auto; GSAP via `prefersReducedMotion()` from `lib/gsap`.
- Lazy-load heavy libs via `next/dynamic { ssr:false }` (Three, Lottie, Rive).
- One heavy playing video per viewport; lazy-mount near viewport, poster holds until then.

## Video system

- 21 source clips in `Trot Videos/`; served copies + posters in `public/videos/` (+ `posters/`).
- **`Trot Videos/_videos.json`** = the video catalog: per-clip `duration`, `mood`, `dominant_colors`,
  `loop_friendly`, `has_text/has_people`, and `best_for` placement hints. **Read it before choosing
  a clip for a section** — match `best_for` to the section role.
- **`_video-plan.md`** = the section-by-section placement + interaction plan.
- URLs always via `video("file.mp4")` / `poster("file")` from `lib/videos` — never hardcode paths.
- Videos long-cached (immutable) via `next.config.ts` headers.
- Off-brand / rights caveats: `running-track-aerial-flyover` = drop (off-brand);
  `dubai-google-earth-zoom` = verify Google Earth rights before public use.

## Source content (scraped reference site)

The new site is rebuilt from the **existing Promax United site** (`itechtheme.com`), scraped
with `scraper.py` (venv `.scraper-venv`) into `output/`:

- **`output/pages/*.json`** — one JSON per source page (13 unique pages; `index` + `index.html`
  duplicate the homepage). Each has `url`, `title`, `meta`, and `sections[]`. Every section carries
  `title/subtitle/heading`, `image_count`, `images[]`, `image_details[]` (name+alt+src),
  a plain-language `description`, and an **`ai_agent_description`** (what the section is about +
  how it's laid out + guessed role) — read these to decide layout + motion for the rebuild.
- **`output/images/`** — 59 unique images, named `<hash>_<name>.<ext>`. Extensions are sniffed
  from magic bytes (not the URL), so they always open. Copy into `public/` when wiring a page.
- **`output/index.json`** — crawl summary (page list + counts).

Three inputs feed the rebuild: **(1)** `Trot Videos/_videos.json` (21 clips), **(2)** the scraped
section metadata above, **(3)** the 59 images.

### Rebuild rules (hard constraints)

- **One video, one place.** Each of the 21 clips is used AT MOST ONCE across the entire site —
  never the same clip in two sections/pages. ~21 sections get video (heroes/banners/feature
  bands); the rest use images. Track the used-video set globally while building.
- **Vary the animation.** Don't lean on one style (e.g. vertical scrub) everywhere — rotate across
  the `anim/` primitives (Reveal, Parallax, VideoScrub, HorizontalScroll, HeroParticles, Marquee…)
  so no style dominates. Match primitive to section role from `ai_agent_description`.
- **Use every image.** All 59 images must appear somewhere; no orphans. Cross-check coverage.
- Section/page structure mirrors the scraped `sections[]`, re-designed with brand tokens + motion —
  not a pixel copy of the old site.
- **Rebrand, don't copy names.** The scraped content is the OLD brand — **Trot / Promax United**
  (hence the `Trot Videos/` folder, `promaxunited.com`, old phone/email in the JSON). The new site
  is **Promax Global**. Swap every brand mention to Promax Global; identity/contact lives in
  `lib/site.ts` only. Do NOT copy the old email/domain/phone from the scrape — per the user's global
  rule, confirm real contact details before writing them anywhere.

## SEO / GEO conventions

- Every page exports Next `metadata` — build it with **`pageMeta()`** (`lib/seo.ts`) for consistent
  title/description/canonical/OG/Twitter. Root defaults + title template live in `layout.tsx`.
- Structured data: global `JsonLd` (Organization + WebSite); per-page schema via `PageSchema`.
  FAQ Q&A (`faqs.ts`) renders as `<details>` AND should feed FAQ schema — quotable by answer engines.
- GEO: `robots.ts` explicitly allow-lists AI crawlers; `/llms.txt` gives them a clean summary.
- Any new route → add to `allRoutes` in `site.ts` (drives sitemap).

## Rules of thumb

- **Identity/contact/nav/copy → edit `lib/site.ts` (or `content.ts`), not components.** One source.
- Reuse an `anim/` primitive before writing new motion.
- Brand tokens: navy + `brand` orange (Tailwind theme in `globals.css`); fonts Poppins (display) / Inter.
- **Before launch:** set real domain in `site.ts` (`url` is a placeholder `.example`), fill JsonLd
  `sameAs` (LinkedIn/registry — strongest AI entity-trust signal), confirm contact details.
- Per the user's global rule: **do not write real email addresses / domains into files without asking.**
- No test suite yet; verify motion on a real mid-range mobile, not an emulator.
