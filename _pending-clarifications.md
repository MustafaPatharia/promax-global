# Pending Clarifications — needed from client

> Compiled by cross-checking `Promax_Global_Website_Content 15072026.docx` against the
> `Meeting 2026-07-20` notes. Grouped by whether it **blocks** the build.

---

## ✅ A. RESOLVED — client answers, 2026-07-20

| # | Question | **Answer — implemented** |
|---|----------|--------------------------|
| A1 | Trade Hub + AI & Fintech | **Coming Soon** pages. Doc content is NOT to be published yet; build the pages when the client releases content. ✔ built |
| A2 | Ports & Logistics Infrastructure | **Removed** from Ports & Logistics — Infrastructure lives under the Infrastructure & Asset Holdings portfolio. Ports & Logistics = Management Services · Advisory & Planning · Strategic Equipment. ✔ built |
| A4 | Reach Us tabs | **Two only** — Work With Us / Invest With Us. Full redesign with the two paths. ✔ built |
| A6 | Languages | **English first.** Fix and approve all English content, then move to Arabic / French / Latin. An Arabic branch already exists. ✔ deferred |
| A7 | Form submissions | **No submission wiring now.** Build the forms only. Backend later — PHP form if managed hosting, otherwise a form service. ✔ built (forms show the doc's confirmation message; no data leaves the browser) |
| — | Domain | **promaxglobal.ae** ✔ set in `site.ts` |

## ✅ A′. RESOLVED 2026-07-20 — "only 2 things are wrong in the docs"

> **Client ruling:** the content doc is correct EXCEPT two errors — (1) Infrastructure is
> listed under Ports & Logistics but belongs to Infrastructure & Asset Holdings, and
> (2) "5 Core Portfolios" should be **6**. Everything else in the doc stands as written.

| # | Question | Resolution |
|---|----------|------------|
| A3 | "5 Core Portfolios" vs 6 | **6.** ✔ `site.stats` updated; "five verticals" copy swept from `faqs.ts`, `content.ts`, `page.tsx`, `portfolio/page.tsx` |
| A5 | Invest With Us length | **500 words** — doc is correct. ✔ already built at 500 |
| A2 | Infrastructure placement | Doc is wrong; Infrastructure lives under Infrastructure & Asset Holdings. ✔ already built |

## 🔴 A″. STILL OPEN

| # | Question | The conflict |
|---|----------|--------------|
| A8 | **Hyphens stripped in the source doc** | The .docx has `endtoend`, `datadriven`, `highend`, `missioncritical`, `longterm`, `worldclass`, `futureready`, `IoTenabled`. This is an export artifact, not authored content — **I have restored the hyphens** (`end-to-end`, `data-driven`, …) since publishing `endtoend` would look broken. Not counted among the "2 errors" because it's formatting, not content. Flag only. |
| D7 | **About-page stats (27 / 18 / 9 / 36)** | The doc contradicts *itself* here — these conflict with the Home stats (25+ / 6 / 5→6 / 50+) that the meeting corrected. Cannot be settled by "the doc is correct". *Currently using the Home numbers.* |

---

## 🟡 B. CONTENT / ASSETS PENDING FROM YOUR SIDE

| # | Item | Note |
|---|------|------|
| B1 | **Management Services description text** | Paresh action item: *"Forward Service Description."* Not yet received. |
| B2 | **Strategic Ventures — 12 box descriptions** | Doc: *"content below will be provided by us separately… at least 100 characters per box."* |
| B3 | **Chairman's Message** | Needs (a) H.E. Loui Mohammed Ali high-res photo, (b) the **two scripts — Arabic + English**. |
| B4 | **Partner logos ×15** | Promax Global, Promax United, Trot Global, Youth Chamber of Commerce, Plambeck, Promax Enjoy, Trot Solutions, Solveeasy, Promax Digital, Trot Holdings, Abu Dhabi International Factory, Promax Investments, Promax Easypay, Goldwin Mines, Starboard Ports. |
| B5 | **"Abu Dhabi Economic Gateway / LEGACY"** | Doc says *"use similar closest template and retain all the content as it is"* — which template + which content? |
| B6 | **Insights content** | 8 categories listed (Articles, Leadership Thoughts, Industry Reports, Whitepapers, Research, Media, Events, Videos) but zero actual items. Placeholder for now? |
| B7 | **Our Ecosystem partner names** | 6 categories given (Strategic / Technology / Government / Academic / Investment / International Orgs) but no names. Doc says *"avoid using logos randomly."* |
| B8 | **Abu Dhabi skyline drone footage** | Needed for Corporate Overview (AD → Africa → Europe → Global). Not in current video library. |

---

## ✅ C. CONTACT DETAILS — RESOLVED 2026-07-20

> **Client ruling: the content doc is authoritative, NOT the old live website.**
> Anything on the old site that contradicts the doc is old-brand and is to be ignored.

| Field | Value | Status |
|-------|-------|--------|
| Email | `info@promaxglobal.ae` | ✔ confirmed — set in `site.ts`, used in top bar + footer |
| Email | ~~`info@promaxunited.com`~~ | ✔ **dropped** — old brand. Verified absent from `src/` |
| Phone | `+971 56 601 0848` | ✔ per doc (digits match the old listing, but the doc governs) |
| Address | `Alia Tower 05, Corniche Abu Dhabi, United Arab Emirates` | ✔ per doc |
| Domain | `promaxglobal.ae` | ✔ set in `site.ts` |

---

## 🟢 D. MINOR / I'll assume unless told otherwise

| # | Item | My assumption |
|---|------|---------------|
| D1 | "Hero Banner: From Abu Dhabi. Building the Future of Nations." | Treating as a **separate band between Hero and Corporate Overview** |
| D2 | Work With Us form: *"Name, Full Name, Mobile, Email"* | Reading as **Full Name, Mobile, Email** (the double "Name" is a typo) |
| D3 | Ports & Logistics "looking for: Service / Investment / Partnering" dropdown | Renaming "Service" → **Management** (no "service" terminology allowed) |
| D4 | Advisory page grid | **4×2** = the 8 advisory categories |
| D5 | Management Services grid | **3×2** = Bulk Ports, Container Terminals, Liquid Port, Logistics Hub, Industrial Park, Blue Ports |
| D6 | Strategic Ventures grid | **4×3** = 12 boxes (grid list ≠ dropdown list — using the 12-item grid list) |
| D7 | About-page stats (27 / 18 / 9 / 36) vs Home stats (25+ / 6 / 5 / 50+) | Using **Home numbers** as corrected in the meeting; About numbers look like old-brand leftovers — **please confirm** |
