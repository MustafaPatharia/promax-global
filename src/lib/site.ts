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
  // Contact confirmed by client (content doc, 15 Jul 2026).
  contact: {
    address: "Alia Tower 05, Corniche Abu Dhabi, United Arab Emirates",
    poBox: "P.O. Box 54300, Abu Dhabi, UAE",
    email: "info@promaxglobal.ae",
    careersEmail: "careers@promaxglobal.ae",
    phone: "+971 56 601 0848",
  },
  stats: [
    { value: "25+", label: "Countries — Global Presence" },
    { value: "8", label: "Mandated Projects" },
    { value: "5", label: "Industry Verticals" },
    { value: "50+", label: "Active Terminal Advisories" },
  ],
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    // Portfolio dropdown = the client doc's 6 headline verticals. Deeper
    // ports sub-services (advisory, infrastructure-assets, strategic sourcing)
    // live inside /portfolio/port-management and remain in the sitemap.
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Ports & Logistics", href: "/portfolio/port-management" },
      { label: "Skills & Education", href: "/portfolio/skills-education" },
      { label: "AI & Fintech", href: "/portfolio/technology-fintech" },
      { label: "Trade Hub", href: "/portfolio/trade-hub" },
      { label: "Smart & Green Energy", href: "/portfolio/smart-energy" },
      { label: "Infrastructure & Asset Holdings", href: "/portfolio/strategic-projects" },
    ],
  },
  { label: "Strategic Ventures", href: "/strategic-ventures" },
  { label: "Why Us", href: "/why-us" },
  { label: "Insights", href: "/insights" },
  { label: "Reach Us", href: "/contact" },
];

/** Flat list of every route for sitemap generation (explicit — covers pages
 *  not surfaced in the nav dropdown, e.g. the ports sub-services). */
export const allRoutes: string[] = [
  "/",
  "/about",
  "/portfolio",
  "/portfolio/port-management",
  "/portfolio/port-advisory",
  "/portfolio/infrastructure",
  "/portfolio/strategic-equipment",
  "/portfolio/skills-education",
  "/portfolio/trade-hub",
  "/portfolio/technology-fintech",
  "/portfolio/smart-energy",
  "/portfolio/strategic-projects",
  "/strategic-ventures",
  "/why-us",
  "/insights",
  "/work-with-us",
  "/invest-with-us",
  "/contact",
];

/** The 5 headline portfolio verticals shown on the homepage grid. */
export const verticals = [
  {
    slug: "port-management",
    title: "Ports & Logistics",
    blurb:
      "End-to-end capabilities across port operations, terminal efficiency, supply-chain optimization, multimodal logistics, and infrastructure modernization.",
  },
  {
    slug: "skills-education",
    title: "Skills & Education",
    blurb:
      "National-priority programs for workforce development, vocational training, digital skills, and sector-specific capability building.",
  },
  {
    slug: "trade-hub",
    title: "Trade Hub & Food Security",
    blurb:
      "Cross-border sourcing, commodity management, strategic reserves, and resilient supply-chain frameworks connecting GCC, India, Africa, and Asia.",
  },
  {
    slug: "technology-fintech",
    title: "AI & Fintech",
    blurb:
      "Large-scale digital infrastructure and inclusive finance — data centres, smart grids, cybersecurity, AI, digital banking, and rural financial inclusion.",
  },
  {
    slug: "smart-energy",
    title: "Smart & Green Energy",
    blurb:
      "Decarbonization strategies, solar microgrids, hybrid/electric equipment conversion, and ESG-aligned sustainable infrastructure.",
  },
  {
    slug: "strategic-projects",
    title: "Infrastructure & Asset Holdings",
    blurb:
      "Diversified portfolio of mandated, acquired, high-value assets across ports, logistics, industrial development, real estate, manufacturing, and natural resources.",
  },
] as const;
