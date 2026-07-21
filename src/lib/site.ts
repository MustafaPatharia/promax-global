/**
 * Single source of truth: identity, contact, navigation, route map.
 * Pulled from old-site scrape (_ref/REF-SUMMARY.md).
 */

export const site = {
  name: "Promax Global",
  legalName: "Promax Global (under patronage of Promax United)",
  tagline: "From UAE to the World",
  description:
    "Promax Global is a UAE-headquartered group delivering integrated port management, trade, technology, energy, and strategic investment — Abu Dhabi to the world.",
  url: "https://promaxglobal.ae",
  locale: "en_AE",
  contact: {
    address: "Alia Tower 05, Corniche Abu Dhabi, United Arab Emirates",
    // Client-confirmed 2026-07-20: the content doc is authoritative, NOT the old
    // live site. Anything reading info@promaxunited.com is old-brand and wrong.
    email: "info@promaxglobal.ae",
    // From the client content doc's top utility bar. Same digits as the old
    // Promax United listing — kept per the doc-is-authoritative rule above.
    phone: "+971 56 601 0848",
    phoneHref: "tel:+971566010848",
  },
  // Animated statistics — verbatim from the client content doc (Section 1,
  // "Develop Animated statistics"). The doc lists a 5th qualitative stat,
  // "UAE Headquarters / Based in Abu Dhabi"; that is carried by the eyebrow +
  // Corporate Overview, so the numeric four fill the 4-up stat grid.
  stats: [
    { value: "25+", label: "Countries & Jurisdictions" },
    { value: "8", label: "Integrated Port Capabilities" },
    { value: "5", label: "Core Service Areas" },
    { value: "50+", label: "Institutional Relationships" },
  ],
} as const;

/**
 * Strategic Partners — the 15 names are verbatim from the client content doc
 * (para 152–153), in the doc's own order.
 *
 * `logo: null` = the file has not been supplied yet. The doc lists the names as
 * TEXT only; these six logos come from the old-site scrape. `PartnerStrip` renders
 * only the entries that have a logo, so adding one is a two-step change: drop the
 * file into `public/partners/` and set the path here.
 *
 * FICCI and GTSC are not on the doc's list of 15 but the client supplied their
 * logo files directly (2026-07-20) and asked for them to be included.
 */
export const partners: { name: string; logo: string | null }[] = [
  { name: "Promax Global", logo: "/partners/promax-global.png" },
  { name: "Promax United", logo: "/partners/promax-united.jpg" },
  { name: "Trot Global", logo: "/partners/trot-global.png" },
  { name: "Youth Chamber of Commerce", logo: "/partners/youth-chamber-of-commerce.jpg" },
  // Supplied as a 1200×630 social "sharepic": white mark on a solid navy field,
  // not a transparent logo. It reads as a dark rectangle in the faded strip —
  // ask the client for the plain mark before launch.
  { name: "Plambeck", logo: "/partners/plambeck.jpg" },
  { name: "Promax Enjoy", logo: "/partners/promax-enjoy.jpeg" },
  { name: "Trot Solutions", logo: "/partners/trot-solutions.png" },
  { name: "Solveeasy", logo: "/partners/solveeasy.jpg" },
  { name: "Promax Digital", logo: "/partners/promax-digital.jpeg" },
  { name: "Trot Holdings", logo: "/partners/trot-holdings.png" },
  { name: "Abu Dhabi International Factory", logo: "/partners/abu-dhabi-international-factory.png" },
  { name: "Promax Investments", logo: "/partners/promax-investments.png" },
  { name: "Promax Easypay", logo: null },
  { name: "Goldwin Mines", logo: null },
  { name: "Starboard Ports", logo: null },
  // Client-supplied 2026-07-20, additional to the doc's list of 15.
  // FICCI removed per client (2026-07-21).
  { name: "GTSC", logo: "/partners/gtsc.png" },
];

export type NavItem = { label: string; href: string; children?: NavItem[] };

/**
 * Level-2 dropdown entries that are REAL routes (/portfolio/<slug>/<sub>), not
 * anchors. Meeting 2026-07-20 contradicts itself here: at 00:38 Paresh says
 * "ports and logistics will be on one page", but from 00:40 he specs each
 * sub-item as its own page with its own header ("Portfolio of Ports & Logistics
 * → Port Management Services"), its own grid (3×2 management, 4×2 advisory) and
 * at 00:53 "now advisory there will be a new page coming, right?". The later,
 * more specific pass governs.
 *
 * Only Ports & Logistics is rolled out — the other portfolios' level-2 items are
 * still card content, not page content, and stay as anchors until the client
 * sends copy. Adding them later is a data change here + a content.ts entry.
 */
export const portfolioSubPages: Record<string, { slug: string; label: string }[]> = {
  "ports-logistics": [
    { slug: "management-services", label: "Management Services" },
    { slug: "advisory-planning", label: "Advisory & Planning" },
    { slug: "strategic-equipment", label: "Strategic Equipment" },
  ],
};

/** Build level-2 nav children from the sub-page map so nav can't drift from routes. */
const subNav = (parent: string): NavItem[] =>
  (portfolioSubPages[parent] ?? []).map((s) => ({
    label: s.label,
    href: `/portfolio/${parent}/${s.slug}`,
  }));

/**
 * Primary navigation per client content doc + 2026-07-20 meeting.
 * Portfolio is a MULTI-LEVEL dropdown: level 1 = the 6 portfolios, level 2 = real
 * sub-pages where `portfolioSubPages` defines them, anchors otherwise.
 */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      {
        label: "Ports & Logistics",
        href: "/portfolio/ports-logistics",
        children: subNav("ports-logistics"),
      },
      {
        label: "Skills & Education",
        href: "/portfolio/skills-education",
        children: [
          { label: "Skill Development & Workforce Mobility", href: "/portfolio/skills-education#skill-development" },
          { label: "Women Empowerment", href: "/portfolio/skills-education#women-empowerment" },
          { label: "Startup & Incubation Centres", href: "/portfolio/skills-education#startup-incubation" },
          { label: "Digital Finance & Fintech Inclusion", href: "/portfolio/skills-education#digital-finance" },
          { label: "Agriculture & Rural Development", href: "/portfolio/skills-education#agriculture-rural" },
          { label: "Entrepreneurship & Innovation", href: "/portfolio/skills-education#entrepreneurship" },
          { label: "UN SDG-Aligned Programs", href: "/portfolio/skills-education#un-sdg" },
          { label: "Policy Advocacy & Research", href: "/portfolio/skills-education#policy-advocacy" },
        ],
      },
      { label: "AI & Fintech", href: "/portfolio/ai-fintech" },
      { label: "Trade Hub", href: "/portfolio/trade-hub" },
      {
        label: "Smart & Green Energy",
        href: "/portfolio/smart-green-energy",
        children: [
          { label: "Smart Energy Management", href: "/portfolio/smart-green-energy#smart-energy" },
          { label: "Green Energy", href: "/portfolio/smart-green-energy#green-energy" },
        ],
      },
      {
        label: "Infrastructure & Asset Holdings",
        href: "/portfolio/infrastructure-asset-holdings",
        children: [
          { label: "Blue Port Project", href: "/portfolio/infrastructure-asset-holdings#blue-port" },
          { label: "Dry Port Development", href: "/portfolio/infrastructure-asset-holdings#dry-port" },
          { label: "Bulk / BreakBulk Port", href: "/portfolio/infrastructure-asset-holdings#bulk-breakbulk" },
          { label: "Industrial Manufacturing Investments", href: "/portfolio/infrastructure-asset-holdings#industrial-manufacturing" },
          { label: "Freehold Real Estate Development", href: "/portfolio/infrastructure-asset-holdings#freehold-real-estate" },
          { label: "Trailer Manufacturing Plant", href: "/portfolio/infrastructure-asset-holdings#trailer-manufacturing" },
          { label: "Smart City Development Project", href: "/portfolio/infrastructure-asset-holdings#smart-city" },
          { label: "Mining Rights & Natural Resource Development", href: "/portfolio/infrastructure-asset-holdings#mining-rights" },
        ],
      },
    ],
  },
  { label: "Strategic Projects", href: "/strategic-projects" },
  { label: "Why Us", href: "/why-us" },
  { label: "Insights", href: "/insights" },
  { label: "Reach Us", href: "/reach-us" },
];

/** The 6 portfolio page slugs (level-1 dropdown → real routes). */
export const portfolioSlugs = [
  "ports-logistics",
  "skills-education",
  "ai-fintech",
  "trade-hub",
  "smart-green-energy",
  "infrastructure-asset-holdings",
] as const;

/**
 * Strategic Projects grid (spec §8 "Global Project Portfolio" + meeting 2026-07-21
 * 01:22:45). A 3×3 layout: six core categories + Workforce Mobility + Skill
 * Development (last row not fully filled is fine). Blue Ports / Dry Ports /
 * Logistic Hubs / Industrial Parks were CONSOLIDATED into "Port Development"
 * (meeting 01:20:11) — they live as `highlights` on that card, not standalone.
 * `tag`/`location`/`body` are verbatim from the spec. `imagePending` = client will
 * supply the real image (⏳ in spec); current image is a fitting placeholder.
 * Copy for Workforce Mobility / Skill Development is not in the doc — confirm.
 */
export const strategicProjects = [
  {
    slug: "port-development",
    tag: "Port Development",
    location: "Malaysia • Burkina Faso • Germany",
    body: "Strategic port development initiatives enhancing regional trade, maritime connectivity, and economic growth.",
    image: "1ea8c37b_ports_logistics.png",
    status: "Strategic Development",
    role: "Strategic Partner & Developer",
    highlights: ["Blue Ports", "Dry Ports", "Logistic Hubs", "Bulk / Breakbulk Ports"],
  },
  {
    slug: "national-infrastructure",
    tag: "National Infrastructure",
    location: "Burkina Faso",
    body: "National infrastructure modernization supporting utility transformation and sustainable development.",
    image: "c820e038_Civil_Infrastructure_Development.png",
    status: "Strategic Development",
    role: "Strategic Partner & Developer",
    highlights: ["National Smart Meter Infrastructure"],
    imagePending: true,
  },
  {
    slug: "food-security",
    tag: "Food Security",
    location: "Guinea-Bissau",
    body: "Integrated fisheries development strengthening maritime industries and food security.",
    image: "345d5917_Trade_Hub_Food_Security.jpg",
    highlights: ["Integrated Fisheries Development"],
    imagePending: true,
  },
  {
    slug: "industrial-development",
    tag: "Industrial Development",
    location: "United Arab Emirates",
    body: "Industrial infrastructure supporting advanced manufacturing and economic diversification.",
    image: "6c067065_Bulk_Ports_Management.png",
    highlights: ["Abu Dhabi International Factory"],
    imagePending: true,
  },
  {
    slug: "digital-infrastructure",
    tag: "Digital Infrastructure",
    location: "TokenEazy",
    body: "Digital investment platform enabling secure and innovative investment ecosystems.",
    image: "4cae52b3_Digital_Infrastructure.png",
    imagePending: true,
  },
  {
    slug: "digital-assets",
    tag: "Digital Assets",
    location: "GoldFi",
    body: "Asset-backed digital platform advancing innovative financial infrastructure solutions.",
    image: "4fc30b83_Technology_Fintech.jpg",
  },
  {
    slug: "workforce-mobility",
    tag: "Workforce Mobility",
    body: "[ TBA ]",
    image: "0b46d0da_training_change.jpg",
  },
  {
    slug: "skill-development",
    tag: "Skill Development",
    body: "[ TBA ]",
    image: "75287166_Skills_Education.jpg",
  },
] as const;

export type StrategicProject = (typeof strategicProjects)[number];

/** Flat list of every route for sitemap generation. */
export const allRoutes: string[] = [
  "/",
  "/about",
  "/portfolio",
  ...portfolioSlugs.flatMap((s) => [
    `/portfolio/${s}`,
    ...(portfolioSubPages[s] ?? []).map((sub) => `/portfolio/${s}/${sub.slug}`),
  ]),
  "/strategic-projects",
  "/why-us",
  "/insights",
  "/reach-us",
  "/work-with-us",
  "/invest-with-us",
];

/** The 6 portfolios — must match the Portfolio dropdown exactly (meeting 00:26). */
export const verticals = [
  {
    slug: "ports-logistics",
    title: "Ports & Logistics",
    blurb:
      "Management services, advisory and planning, and strategic equipment across port and terminal operations — from start-ups and developing ports through to established operations.",
  },
  {
    slug: "skills-education",
    title: "Skills & Education",
    blurb:
      "A tri-regional socio-economic development alliance covering India, GCC, and Africa — empowering students, women, and entrepreneurs for a bright future.",
  },
  {
    slug: "ai-fintech",
    title: "AI & Fintech",
    blurb:
      "Large-scale digital infrastructure and inclusive financial systems that accelerate national development and strengthen economic transparency.",
  },
  {
    slug: "trade-hub",
    title: "Trade Hub",
    blurb:
      "Integrated trade hubs and food security systems connecting GCC, India, Africa, and Asia — reliable, cost-efficient, and resilient supply chains.",
  },
  {
    slug: "smart-green-energy",
    title: "Smart & Green Energy",
    blurb:
      "Intelligent monitoring and optimization of energy consumption, plus renewable integration, hybrid conversions, and ESG-aligned decarbonization.",
  },
  {
    slug: "infrastructure-asset-holdings",
    title: "Infrastructure & Asset Holdings",
    blurb:
      "A diversified portfolio of mandated, acquired, and high-value strategic projects across ports, logistics, industrial development, real estate, and natural resources.",
  },
] as const;
