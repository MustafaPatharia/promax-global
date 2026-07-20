# Home Page — Build Matrix

> **Sources:** `Promax_Global_Website_Content 15072026.docx` (content — use text **verbatim**, do not rephrase) +
> `Meeting 2026-07-20 Notes by Gemini.docx` (client corrections / where the site is lagging).
> **Rule:** Content, headings, descriptions = exactly as written in the content doc. No paraphrasing, no invented copy.
> **File this tracks:** `src/app/page.tsx` (+ `src/lib/site.ts`, `Nav`, `Footer`).

---

## 0. Global rules (apply everywhere, not just Home)

| # | Rule | Source | Status |
|---|------|--------|--------|
| G1 | **No "Service" / "What We Do" / "Featured Service" terminology.** We are wealth creators, not a service provider. Use **Portfolio** / **Strategic Business Platforms**. | Meeting 00:16–00:19 | ☐ |
| G2 | Business offerings label = **"Strategic Business Platforms"** (replaces "Services"). | Meeting decision | ☐ |
| G3 | Company structure = **"Portfolios"**, NOT "Divisions". Must match the Portfolio dropdown. | Meeting 00:26 | ☐ |
| G4 | Header nav uses **Invest With Us** (not "Work with us") — this is an investor/partner platform, not employment. All three (work / invest / partner) live only on **Reach Us**. | Meeting 00:11–00:12 | ☐ |
| G5 | Languages: **EN (active) · AR · FR · LA** (English, Arabic, French, Latin). Arabic renders **RTL**. | Content + Meeting 00:29 | ☐ |
| G6 | **Logo always LEFT-aligned** across ALL language versions (EN/AR/FR/LA). Arabic logo on right, English on left, other info centered. | Meeting 00:33 | ☐ |
| G7 | Images are placeholders — pick any *relevant* image; Rizwan/Imran finalize color/combos later. Vectors must be **high-quality**, bought if needed (billion-$ investor audience). | Meeting 00:21–00:24 | ☐ |
| G8 | Nav order: **HOME · ABOUT US · PORTFOLIO · STRATEGIC VENTURES · INSIGHTS · REACH US** (+ WHY US page). | Content doc | ☐ |

---

## 1. Top Utility Bar

| Field | Required content (verbatim) | Current | Action | Status |
|-------|-----------------------------|---------|--------|--------|
| Location | `Abu Dhabi, UAE` | — | Add utility bar | ☐ |
| Email | `info@promaxglobal.ae` ⚠️ *confirm before writing* | — | Confirm w/ client, then add | ☐ |
| Phone | `+971 56 601 0848` (tel:+971566010848) ⚠️ *confirm* | — | Confirm, add | ☐ |
| Language selector | `EN (active) \| AR \| FR \| LA` | — | Add EN/AR/FR/LA switcher | ☐ |

> ⚠️ Two different emails appear in the doc (`info@promaxglobal.ae` vs old `info@promaxunited.com`). Old = Trot/United = **drop**. Per global rule: confirm real contact before writing. Identity lives in `lib/site.ts` only.

---

## 2. Header / Navigation

| Item | Required | Current (`page.tsx` / Nav) | Action | Status |
|------|----------|----------------------------|--------|--------|
| Logo placement | English logo LEFT, Arabic logo RIGHT, rest centered — LEFT-aligned in ALL languages | Single logo | Add bilingual logo lockup, left-lock | ☐ |
| Nav items | HOME · ABOUT US · PORTFOLIO · STRATEGIC VENTURES · INSIGHTS · REACH US (+ WHY US) | Check Nav | Align to this exact set | ☐ |
| **Portfolio dropdown** | PORTS & LOGISTICS · SKILLS & EDUCATION · AI & FINTECH · TRADE HUB · SMART & GREEN ENERGY · INFRASTRUCTURE & ASSET HOLDINGS | Verify | Multi-level dropdown; each → its portfolio page (scrolls to section, single page per portfolio) | ☐ |

---

## 3. HERO (Landing) — Section 1

**Required (verbatim):**
- Eyebrow / tagline: **From UAE to the World**
- Sub / body: *"We support governments, regulators, Port Authorities, Energy Transition stakeholders and industry leaders with integrated, future-ready capabilities that strengthen national competitiveness and long-term economic resilience"*
- Buttons: **Explore Our Platforms** · **Global Projects**

**Hero visual (Meeting 00:08–00:10):**
- Black star-sky + **rotating globe** with shiny border running around UAE then disappearing; line connects: `UAE, Iraq, Oman, USA, Germany, Malaysia, Mauritius, Guinea, Ghana, Burkina Faso, Somaliland, South Sudan, Bangladesh`.
- If full map not achievable → **continent borders only + contrast-color dots** (one dot enough).
- **Globe on the LEFT side** (so it doesn't get absorbed by the content).

| Element | Current | Action | Status |
|---------|---------|--------|--------|
| Tagline "From UAE to the World" | ✅ present (KineticHeading) | Keep | ☑ |
| Body copy | ❌ generic paraphrase | Replace with **verbatim** support-governments sentence | ☐ |
| Buttons | "Invest With Us" / "Explore Portfolio" | Change to **Explore Our Platforms** + **Global Projects** | ☐ |
| Hero globe | `HeroParticles` (dots, no borders) | Add continent borders + contrast dots + UAE shiny border; **move globe to LEFT** | ☐ |
| In-hero counters | present | Keep — but fix values (see §5) | ☐ |

---

## 4. Section 2 — CORPORATE OVERVIEW  *(NOT "Company Overview")*

**Required (verbatim heading):** **Corporate Overview** · subhead *Proudly Headquartered in Abu Dhabi* / *Inspired by the UAE. Connected to the World.*

**Body copy (verbatim — 3 paragraphs, use as-is):**
> Promax Global is proudly headquartered in Abu Dhabi, United Arab Emirates—a nation internationally recognized for visionary leadership, economic resilience, world-class infrastructure, and its role as a global bridge connecting East and West.
> As the international strategic investment and development platform of the Promax United Group, Promax Global leverages Abu Dhabi's strategic position to originate, structure, and deliver transformative projects across port management and development, strategic infrastructure, logistics, energy, digital economy, commodities, and sustainable development.
> Inspired by the UAE's commitment to innovation, international cooperation, and long-term prosperity, Promax Global partners with governments, institutional investors, port authorities, and global industry leaders to develop integrated platforms that generate sustainable economic growth and lasting national impact across the GCC and international markets.

**Video (Meeting 00:13–00:15):** **Abu Dhabi skyline** Ultra-HD drone footage, transitioning Abu Dhabi → Africa → Europe → Global. (NOT the current shipping-port clip.)

| Element | Current | Action | Status |
|---------|---------|--------|--------|
| Section title | "Company Overview" | Rename → **Corporate Overview** | ☐ |
| Body copy | ❌ paraphrase | Replace with 3 verbatim paragraphs above | ☐ |
| Video | `shipping-port-aerial-panorama` | Swap → Abu Dhabi skyline drone (Abu Dhabi→Africa→Europe→Global) | ☐ |
| Kicker | "Under Promax United Patronage" | OK to keep | ☑ |

---

## 5. Strategic Business Platforms  *(replaces "What We Do" service cards)*

**Required:** **6 blocks**, infinite rotation with **two controls: auto-rotation + forced-rotation arrows**. Each block = header + **relevant vector icon**; "Learn more" scrolls to bullet details below (no separate page — pages only for Portfolio). High-value/billion-$ vectors.

**The 6 platforms + their bullet points (verbatim):**

1. **Infrastructure & Economic Cities** — Ports & Marine Infrastructure · Industrial & Manufacturing Zones · Special Economic Zones (SEZ) · Logistics & Distribution Hubs · Transport & Mobility Corridors · Smart Urban Infrastructure · Technology & Innovation Cities · Housing & Community Infrastructure
2. **Natural Resources** — Mining & Mineral Development · Gold & Precious Metals · Critical Minerals & Energy Transition Materials · Commodity Trading & Global Procurement · Food Security Systems · Agriculture & Agri-Infrastructure · Fisheries & Marine Resources
3. **Digital Economy** — Artificial Intelligence & Automation · Fintech & Digital Finance · Tokenization & Blockchain Systems · Digital Assets & Custody Infrastructure · Cybersecurity & Digital Protection · Smart Government & Public Digital Services
4. **Energy Transition** — Renewable Energy Systems · Utilities & Clean Infrastructure · Smart Grid & Digital Energy · Hydrogen & Future Fuels · Carbon Management & CCUS
5. **Investment & Capital** — PPP Structuring & Concessions · Project Finance & Bankability · Investment Structuring & Capital Architecture · Institutional Capital & Co-Investment Platforms · Asset Development & Monetization
6. **National Capability Development** — Education & Workforce Development · Women & Youth Empowerment Programs · Innovation Ecosystems & R&D · Government Advisory & Public Sector Transformation

| Element | Current | Action | Status |
|---------|---------|--------|--------|
| Section label | "What We Do / Featured Service" | Rename → **Strategic Business Platforms** (kill "Service") | ☐ |
| Block count | 4 port service cards | Rebuild as **6 platform blocks** w/ verbatim titles | ☐ |
| Rotation | none | Infinite rotation: auto **+** forced arrows (3-then-3 or 6) | ☑ |
| Icons | generic | Buy/replace **relevant high-quality vectors** per platform | ☐ |
| Detail reveal | links to pages | "Learn more" → **scroll to bullet details** (no page nav) | ☑ |
| Card contents | bullets printed on every card | Card = **heading + Learn More only**; bullets live in the panel below (client 2026-07-20) | ☑ |
| Accent | brand green only | **Gold accent on green** (`--color-gold`) — numerals, icon rings, rules, bullet markers | ☑ |

---

## 6. Animated Statistics (top utility / metrics band)

**Required values (verbatim, corrected in meeting 00:26–00:28):**
- **UAE Headquarters**
- **25 +** Multi-Jurisdiction Operations
- **6** Strategic Platforms *(doc said 8 → meeting corrected to 6)*
- **5** Core Portfolios *(doc said "Core Verticals" → meeting: "5 core portfolios")*
- **50 +** Institutional Network

| Element | Current | Action | Status |
|---------|---------|--------|--------|
| Stat labels | check `site.stats` | Set to the 5 above; use **relevant vectors** | ☐ |
| "8 Strategic Platforms" | wrong | → **6 Strategic Platforms** | ☐ |
| "5 Core Verticals" | wrong term | → **5 Core Portfolios** | ☐ |
| `$8B` mask + "In mandated flagship projects across four continents" | **restored** | Client 2026-07-20 (2nd pass): **keep the `$8B` mask band.** Restored verbatim from commit `8d5573d`. The unsupported `$1 billion each` (faqs) and `billion-dollar patronage` (content) stay stripped | ☑ |

---

## 7. Portfolios grid  *(was "Global Division")*

**Required:** relabel **Global Division → Portfolios**; must match Portfolio dropdown exactly:
PORTS & LOGISTICS · SKILLS & EDUCATION · AI & FINTECH · TRADE HUB · SMART & GREEN ENERGY · INFRASTRUCTURE & ASSET HOLDINGS

| Element | Current | Action | Status |
|---------|---------|--------|--------|
| Section label | "Division"/HorizontalScroll | Relabel **Portfolios** | ☐ |
| Items | `verticals` (5?) | Ensure exactly the **6** portfolio names above | ☐ |
| Image/content ratio | image too big vs content | Rebalance image ↔ text proportion | ☐ |

---

## 8. Strategic Partners strip

**Required:** small **faded logos, right-to-left marquee** (min infinite loop), verbatim list:
`Promax Global, Promax United, Trot Global, Youth Chamber of Commerce, Plambeck, Promax Enjoy, Trot Solutions, Solveeasy, Promax Digital, Trot Holdings, Abu Dhabi International Factory, Promax Investments, Promax Easypay, Goldwin Mines, Starboard Ports`

| Element | Current | Action | Status |
|---------|---------|--------|--------|
| Marquee | stakeholders text marquee | Replace/add **partner logo** strip, faded, R→L | ☐ |

---

## 9. Sections to REMOVE / FIX on Home (meeting flags)

| Item | Current | Action | Status |
|------|---------|--------|--------|
| "What We Do" service framing | present | Remove — see §5 | ☐ |
| "Featured Service" kickers (Sectors band too) | present ×2 | Remove "Service" wording everywhere | ☐ |
| `$8B` / "8 billion" claim | present | Rework/remove — see §6 | ☐ |
| CTA button "Transmit Corporate Inquiry" | present | Keep pattern; final submit label = **Transmit Inquiry** (Reach Us) | ☐ |
| Leadership "Meet our Team" | present | Per About doc → replaced by **Chairman's Message** (About page, not Home) — confirm if it stays on Home | ☐ |

---

## 10. Footer

| Column | Required (verbatim) | Status |
|--------|---------------------|--------|
| Logo | LEFT | ☐ |
| Our Portfolio | Ports & Logistics · Skills & Education · AI & Fintech · Trade Hub · Smart & Green Energy · Infrastructure & Asset Holdings | ☐ |
| Strategic Platforms | Infrastructure & Economic Cities · Natural Resources · Digital Economy · Energy Transition · Investment & Capital · National Capability Development | ☐ |
| Find Us | 📍 `Alia Tower 05, Corniche Abu Dhabi, United Arab Emirates` · ✉️ `info@promaxglobal.ae` ⚠️confirm · 📞 `+971 56 601 0848` ⚠️confirm | ☐ |
| Tagline block | *"Rooted in the UAE's spirit of innovation. We transform bold local ideas into global realities, delivering future-forward solutions from the heart of the Middle East."* | ☐ |
| Strap | `BUILDING THE FUTURE OF NATIONS` | ☐ |

---

## Home page — done-when checklist

**CONTENT (priority — done first):**
- [x] Hero: verbatim support-governments body copy
- [x] Hero buttons → **Explore Our Platforms** / **Global Projects**
- [x] Section 2 renamed **Corporate Overview** + subhead + verbatim 3 paragraphs
- [x] **Strategic Business Platforms**: 6 blocks, verbatim titles + verbatim bullets (text done)
- [x] Stats corrected: 25+ Multi-Jurisdiction / 6 Strategic Platforms / 5 Core Portfolios / 50+ Institutional Network
- [x] "Global Division" → **Our Portfolios** label
- [x] All "Service / What We Do / Featured Service" wording removed from Home
- [x] `$8B` mask band kept on Home (client-confirmed); unsupported "~$1 billion each" / "billion-dollar patronage" removed
- [x] Icon set rebuilt as flat pictorial duotone SVGs in the template's flaticon style (`Icons.tsx`) — no icon library

**VISUAL / STRUCTURAL (deferred — after content sign-off):**
- [ ] Utility bar (location/email/phone/lang) added
- [ ] Bilingual left-locked logo; nav = exact 6 + Why Us
- [ ] Portfolio multi-dropdown wired
- [ ] Hero globe: continent borders + contrast dots (or fallback video) — *client will decide visual later*
- [ ] Corporate Overview video → Abu Dhabi skyline drone (AD→Africa→Europe→Global)
- [x] Strategic Business Platforms: 6-block auto+forced-arrow rotation; heading + Learn More card, gold-accented bullet panel below
- [x] Strategic Business Platforms: hand-built duotone vector icons in the template's flaticon style (no icon library, nothing bought)
- [x] Portfolios grid image/text proportion rebalanced (bigger title/subtext, shorter photos)
- [ ] Strategic Partners faded R→L logo strip (verbatim list)
- [ ] Footer columns per §10
- [x] Contact details confirmed with client (2026-07-20: content doc is authoritative, not the old site)

---

> **Next matrices to build (later files):** About Us · Portfolio/Ports & Logistics (Management / Advisory / Infrastructure→removed / Strategic Equipment) · Skills & Education · Smart & Green Energy · Trade Hub (Coming Soon) · AI & Fintech (Coming Soon) · Infrastructure & Asset Holdings · Strategic Ventures · Why Us · Insights · Reach Us (Work / Invest / Partner forms).
