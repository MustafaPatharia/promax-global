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
  url: "https://promaxglobal.com",
  locale: "en_AE",
  contact: {
    address: "Alia Tower 05, Corniche Abu Dhabi, United Arab Emirates",
    poBox: "P.O. Box 54300, Abu Dhabi, UAE",
    email: "hello@promaxglobal.com",
    careersEmail: "career@promaxglobal.com",
    // PLACEHOLDER — dummy number. Replace with real number before launch.
    // (Old scrape number was Promax United's — never ship it.)
    phone: "+971 00 000 0000",
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
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Port Management", href: "/portfolio/port-management" },
      { label: "Port Advisory", href: "/portfolio/port-advisory" },
      { label: "Infrastructure", href: "/portfolio/infrastructure" },
      { label: "Strategic Equipment", href: "/portfolio/strategic-equipment" },
      { label: "Skills & Education", href: "/portfolio/skills-education" },
      { label: "Trade Hub & Food Security", href: "/portfolio/trade-hub" },
      { label: "Technology & Fintech", href: "/portfolio/technology-fintech" },
      { label: "Smart & Green Energy", href: "/portfolio/smart-energy" },
      { label: "Strategic Projects", href: "/portfolio/strategic-projects" },
    ],
  },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Invest With Us", href: "/invest-with-us" },
  { label: "Contact", href: "/contact" },
];

/** Flat list of every route for sitemap generation. */
export const allRoutes: string[] = [
  "/",
  "/about",
  "/portfolio",
  ...(nav.find((n) => n.href === "/portfolio")?.children?.map((c) => c.href) ?? []),
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
    title: "Technology & Fintech",
    blurb:
      "Enterprise-grade digital infrastructure — data centres, cybersecurity, smart grids, digital banking, and financial inclusion.",
  },
  {
    slug: "smart-energy",
    title: "Smart & Green Energy",
    blurb:
      "Decarbonization strategies, solar microgrids, hybrid/electric equipment conversion, and ESG-aligned sustainable infrastructure.",
  },
  {
    slug: "strategic-projects",
    title: "Strategic Projects",
    blurb:
      "Diversified portfolio of mandated, high-value projects across ports, logistics, industrial development, real estate, and natural resources.",
  },
] as const;
