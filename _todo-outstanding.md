# Outstanding TODO — Promax Global

> Rebuilt 2026-07-20 by re-reading the **meeting transcript** and the **content doc** directly,
> not the summary matrix. Timestamps are transcript references.
>
> **Source precedence:** meeting notes > content doc > old website.
> **Known doc errors (client-confirmed, only 2):** (1) Infrastructure listed under Ports &
> Logistics — belongs to Infrastructure & Asset Holdings; (2) "5 Core Portfolios" → **6**.
>
> **Framing rule (client, 2026-07-20):** Promax Global is an **investment firm / portfolio**,
> NOT a consultancy or service provider. Every label, CTA and section must read that way.

---

## 🔴 1. BLOCKED ON CLIENT — cannot build without these

> **35 images extracted** from the client .docx → `_references/docx-images/`. This closed
> several items previously listed as blocked. Remaining blockers below are ones the .docx
> genuinely does not contain — verified by reading `word/media/` + the paragraph context map.

| # | Item | Needed for |
|---|------|-----------|
| ~~C1~~ | ~~Arabic logo~~ | ✅ **FOUND** — `image5.jpeg` (بروماكس جلوبال). English marks: `image4.jpeg` (dark-on-light), `image17.jpeg` (footer) |
| C2 | **15 partner logos** — ⚠️ **NOT in the .docx.** Para 152–153 gives the *names only*, as text: Promax Global, Promax United, Trot Global, Youth Chamber of Commerce, Plambeck, Promax Enjoy, Trot Solutions, Solveeasy, Promax Digital, Trot Holdings, Abu Dhabi International Factory, Promax Investments, Promax Easypay, Goldwin Mines, Starboard Ports | Above-footer strip (§2.2). Still needed as image files |
| C3 | **Abu Dhabi skyline drone footage** | Corporate Overview AD → Africa → Europe → Global (00:13:05). Using a stand-in clip meanwhile; client to source from Unsplash/Pexels |
| ~~C4~~ | ~~Management Services description text~~ | ✅ **NOT BLOCKED — it was in the doc all along** (paras 419–421) and is already on the site verbatim. The meeting action item at 00:46:11 was superseded by the doc |
| C5 | **Strategic Ventures — 12 box descriptions** | ≥100 chars each, per doc |
| C6 | **Chairman's Message** — the doc itself says the photo is interim: *"H.E Loui Mohammed Ali High resolution Image will be shared. Meanwhile use the option given"* (para 186). Interim photo = `image14.png`. **Two scripts (Arabic + English) still outstanding** (para 188) | About page. Layout is specified: picture LEFT, scripts RIGHT |
| C7 | **Insights content** | 8 categories defined, zero items |
| C8 | **Our Ecosystem partner names** | 6 categories (para 280–285), no names. Doc: *"avoid using logos randomly"* |
| ~~C9~~ | ~~Abu Dhabi Economic Gateway / LEGACY artwork~~ | ✅ **FOUND** — `image28.jpeg`, the "Global Connectivity / Abu Dhabi Economic Gateway" board. Doc: *"use similar closest template and retain all the content as it is"* |
| C10 | **About-page stats 27/18/9/36** vs Home 25+/6/6/50+ | Doc contradicts itself; currently using Home numbers |
| C11 | ⚠️ **Rights check** — `image30.jpeg` is a port photo with visible **Adani** branding on the cranes. Third-party mark; confirm before publishing or swap | Any portfolio/ports section |

### Image inventory (from `_references/docx-images/`)
| File | What it is |
|------|-----------|
| `image4.jpeg` / `image17.jpeg` | Promax Global English logo (header / footer variants) |
| `image5.jpeg` | **Promax Global Arabic logo** |
| `image14.png` | Chairman H.E. Louai Mohamed Ali (interim — high-res pending) |
| `image28.jpeg` | Abu Dhabi Economic Gateway "Global Connectivity" board |
| `image18–23` | Management Services 3×2: Bulk Ports · Container Terminals · Liquid Port · Logistics Hub · Industrial Park · Blue Ports |
| `image31–35` | Portfolio tiles: Skills & Education · Trade Hub & Food Security · Smart & Green Energy · Strategic Projects |
| `image27`, `image29`, `image30` | Port / logistics photography (⚠️ see C11 on `image30`) |
| `image3`, `image8`, `image15`, `image24`, `image25` | **Transland template screenshots — reference only, NOT assets** |

**Note on the doc's own spelling:** the chairman is *H.E. Louai Mohamed Ali* per the About
section; para 186 writes it *"Loui Mohammed Ali"*. Confirm the correct spelling before publishing.

---

## ✅ 2′. BUILT 2026-07-20 (this pass)

- [x] **Bilingual header** — full-bleed bar; English mark extreme LEFT, Arabic mark extreme RIGHT, both always visible; nav centred; header pinned `dir="ltr"` so the marks never mirror under Arabic RTL. Mobile keeps the Arabic mark hard right (`Nav.tsx`)
- [x] **Utility bar** — location · email · phone from `site.ts`, + EN|AR|FR|LA selector. AR/FR/LA rendered INERT (not links) since those locales aren't built — a live link would 404 (`UtilityBar.tsx`)
- [x] **Strategic Partners strip** — above the footer on EVERY page via `layout.tsx`; **max 6 at a time, auto-rotating** (client 2026-07-20, replaced the continuous ticker); faded grayscale → full colour on hover; pauses on hover/focus; static under reduced motion. 8 logos wired (`PartnerStrip.tsx`, list in `site.ts`)
- [x] **Consultancy framing removed** — "Connect with an expert / Talk to our team about your operations" → "Explore this opportunity / Discuss investment, partnership, or co-development" (`PageShell.tsx`)
- [x] **Hero globe moved LEFT** — copy occupies the right half from lg up; readability veil flipped; hero accent gradient corrected from leftover **orange** to brand green (`HeroParticles.tsx`, `page.tsx`)
- [x] **No CTA on portfolio pages** — `noCta` prop on `PageShell` kills both the hero button and the closing band; wired to `[slug]` and `[slug]/[sub]` (00:43:53). Non-portfolio pages keep theirs
- [x] **"Where we manage" images** now the client's own — docx `image18–23` → `public/images/mgmt-*`; replaced the scraped stand-ins (incl. the Adani photo)
- [x] **"What management services covers"** rebuilt as an `overview` block matching Home's Corporate Overview (5fr/7fr, 4:5 media left, tinted copy panel), and reordered **WHERE → WHAT**. Both bands moved into `blocks` because `PageShell` renders all `sections` before any `blocks`
- [x] **Green icons removed** from the where-grid cards; title `text-lg` → `text-2xl/1.7rem`; gradient wash deepened to `via-navy-900/55` for contrast under the larger type
- [x] **Icons** — no icon library is installed anywhere; every call site already routes through the duotone `Icons` registry. Added duotone `pin` and retired the last stray 24×24 stroke SVG in `Branches.tsx`; `statIcon` remapped to match the stats in order

---

## 🟠 2. BUILDABLE NOW — highest priority first

### 2.1 Header / bilingual logo lockup (00:33:22) — ✅ **BUILT**, see §2′
### 2.2 Above-footer partner strip (00:35:19) — ✅ **BUILT**, see §2′ (10 of 18 logos still missing → C2)
### 2.3 Kill consultancy framing — ✅ **BUILT**, see §2′
- [ ] One line survives: `content.ts:243` *"Talk to our friendly team … online or in person"*. Consultancy-flavoured, but **verbatim client-doc copy**, so left alone pending a decision

### 2.4 Multilingual (00:29:09, 00:33:22) — **NOT BUILT** (switcher is a visual shell only)
- [ ] AR/FR/LA are inert `<span>`s in `UtilityBar.tsx` — no locale routes exist
- [ ] `layout.tsx:60` hardcodes `lang="en"` → must be dynamic
- [ ] **Arabic renders RTL** (body flips; header logos do not — see §2.1)

### 2.5 Hero (00:08:16, 00:09:24)
- [x] **Globe moved LEFT**, copy to the right half
- [x] Dots in a contrast colour (`#dbe6f3` over navy) + green accent layer
- [ ] Continent **borders** — dots only at present, no border linework
- [ ] Background uses the provided video assets — blocked on **C3**

### 2.6 Navigation
- [x] Portfolio **multi-level dropdown** — level-2 flyout via nested `<details>`, all 6 portfolios
- [x] Utility bar (location / email / phone / language)

### 2.7 Portfolio inner pages
- [x] **Level-2 dropdown items are REAL pages**, not anchors — `/portfolio/ports-logistics/{management-services,advisory-planning,strategic-equipment}`. The transcript contradicts itself (00:38 "one page" vs 00:40–00:53 "there will be a new page coming"); the later, more specific pass governs. Route is generic (`[slug]/[sub]`) and driven by `portfolioSubPages` in `site.ts` + a `"<slug>/<sub>"` key in `content.ts`
- [x] Every sub-page header carries the parent portfolio name (00:41:47) — eyebrow *"Portfolio of Ports & Logistics"* over the service title
- [x] Ports & Logistics landing reads *Portfolio → Ports & Logistics* and now lists the three service pages as cards
- [x] Management Services **3×2 grid** — wired to the client's own docx images (`mgmt-*`)
- [x] Advisory Service **4×2 grid** with a bright header photo per discipline — `service-freight` gained optional `columns` + per-item `image`; the 8 discipline photos were sitting unused in `public/images/`
- [x] Management Services body text — doc paras 419–421, in place verbatim. Not blocked (earlier note claiming an old-site stand-in was wrong)
- [ ] Remaining portfolios' level-2 items stay as anchors — their sub-items are card content, not page content, until the client sends copy. Promoting them = add to `portfolioSubPages` + a `content.ts` entry, no new route code

### 2.8 Icons
- [ ] Roll the new duotone icon set out **site-wide** — client asked for it everywhere instead of an icon library. `statIcon` in `page.tsx` and other call sites still unaudited

---

## ✅ 3. DONE (verified this session)

- [x] Contact details confirmed — `info@promaxglobal.ae`, doc is authoritative over the old site
- [x] **6** Core Portfolios — `site.stats` + "five verticals" copy swept from `faqs.ts`, `content.ts`, `page.tsx`, `portfolio/page.tsx`
- [x] Infrastructure removed from Ports & Logistics
- [x] Strategic Business Platforms: 6 blocks, auto + forced-arrow rotation, card = heading + Learn More, bullets in panel below
- [x] Platforms colour rule: green glow, gold edges/glyphs only, animated gold running border on the open card
- [x] Duotone vector icon set hand-built in the template's flaticon style (no library)
- [x] Hero verbatim copy + buttons; Corporate Overview rename + verbatim paragraphs
- [x] All "Service / What We Do / Featured Service" wording removed from Home
- [x] `$8B` mask band restored (client-confirmed)
- [x] Portfolios grid image/text proportion rebalanced
- [x] Coming Soon pages (Trade Hub, AI & Fintech)
- [x] Reach Us: Work / Invest / Partner paths, CV upload field (no submission wiring — per A7)
- [x] Invest With Us at 500 words (doc is correct)

---

## ⚠️ 4. FLAGS

- **A8 — hyphens.** The .docx contains `endtoend`, `datadriven`, `highend`, `missioncritical`,
  `longterm`, `worldclass`, `futureready`, `IoTenabled`. Read as an export artifact, hyphens
  **restored**. Not counted as a doc error since it's formatting. Confirm.
- **Meeting says "five core portfolios" (00:27:58)** — client has since corrected to **6**. Applied.
- **Lint debt:** 149 errors / 1199 warnings across earlier untracked work. Verified pre-existing,
  none from recent edits, but it's there before handover.
- **The Strategic Business Platforms section has never been visually reviewed.**
