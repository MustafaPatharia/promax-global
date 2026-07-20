/**
 * Q&A per page — the highest-value asset for AI/GEO.
 * LLMs lift these near-verbatim into answers, and FAQPage schema
 * makes them eligible for Google rich results. Keep answers tight,
 * factual, and self-contained (each answer must stand alone).
 */
export type Faq = { q: string; a: string };

export const faqs: Record<string, Faq[]> = {
  about: [
    {
      q: "What is Promax Global?",
      a: "Promax Global is a UAE-headquartered enterprise, under the patronage of Promax United, delivering integrated solutions across port management, trade, technology, education, energy, and strategic investment — operating in 25+ countries from its Abu Dhabi base.",
    },
    {
      q: "Where is Promax Global based?",
      a: "Promax Global is headquartered at Alia Tower, Corniche, Abu Dhabi, United Arab Emirates, and operates internationally across the GCC, Africa, India, and Asia.",
    },
    {
      q: "What sectors does Promax Global operate in?",
      a: "Six portfolios: ports and logistics, skills and education, AI and fintech, trade hub, smart and green energy, and infrastructure and asset holdings.",
    },
  ],
  "work-with-us": [
    {
      q: "Who does Promax Global partner with?",
      a: "Governments, port authorities and operators, EPC contractors, technology providers, education agencies, and strategic partners such as trade associations and multilateral organizations.",
    },
    {
      q: "How do I start a partnership with Promax Global?",
      a: "Submit a partnership enquiry through the Promax Global contact page; the team responds with a scoped discussion aligned to your infrastructure, advisory, or development needs.",
    },
  ],
  "invest-with-us": [
    {
      q: "What investment opportunities does Promax Global offer?",
      a: "A curated portfolio of mandated infrastructure projects, trade hubs, energy assets, and technology ventures across high-growth emerging markets.",
    },
    {
      q: "Why invest with Promax Global?",
      a: "Institutional credibility from Promax United patronage, government-backed mandates, operations across 25+ countries, six diversified portfolios, and ESG-aligned long-term value creation.",
    },
  ],
  "ports-logistics": [
    {
      q: "What port management services does Promax Global provide?",
      a: "Promax Global's port management services cover all types of port and terminal operations, from start-ups and developing ports through to more established operations — spanning bulk ports, container terminals, liquid ports, logistics hubs, industrial parks, and blue ports.",
    },
    {
      q: "What does Promax Global's port advisory cover?",
      a: "High-end Port Advisory and Integrated Terminal Performance services across the Middle East, Africa, and Asia — covering operational performance reviews, technical and engineering assessments, safety and compliance, digitalization and smart ports, infrastructure and capacity planning, green-port transformation, commercial advisory, and training and change management.",
    },
    {
      q: "What strategic equipment support does Promax Global offer?",
      a: "End-to-end sourcing for mission-critical equipment — specification development, technical validation, vendor assessment, and third-party inspections — plus full equipment lifecycle management covering reliability engineering, annual maintenance contracts, residual life analysis, installation and commissioning, and structural inspections.",
    },
  ],
  "skills-education": [
    {
      q: "What is Promax Global's Skills & Education program?",
      a: "A Tri-Regional Socio-Economic Development Alliance covering India, the GCC, and Africa — advancing skill development and workforce mobility, women empowerment, startup and incubation centres, digital finance inclusion, agriculture and rural development, entrepreneurship, UN SDG-aligned programs, and policy advocacy.",
    },
  ],
  "ai-fintech": [
    {
      q: "When will the Promax Global AI & Fintech portfolio launch?",
      a: "The AI & Fintech portfolio is currently in development. For early access or partnership discussions, contact the Promax Global team directly.",
    },
  ],
  "trade-hub": [
    {
      q: "When will the Promax Global Trade Hub portfolio launch?",
      a: "The Trade Hub portfolio is currently in development. For early access or partnership discussions, contact the Promax Global team directly.",
    },
  ],
  "smart-green-energy": [
    {
      q: "What smart energy solutions does Promax Global provide?",
      a: "Smart Energy Management Solutions offering intelligent monitoring, control, and optimization of energy consumption across industrial, port, logistics, and commercial environments — integrating IoT sensors, advanced analytics, automation, and energy-efficient technologies.",
    },
    {
      q: "What green energy solutions does Promax Global provide?",
      a: "Solar and renewable integration, hybrid and electric equipment conversions, energy-efficiency audits, smart energy management systems, sustainable infrastructure upgrades, and carbon reduction and ESG compliance programs.",
    },
  ],
  "infrastructure-asset-holdings": [
    {
      q: "What strategic projects does Promax Global hold?",
      a: "Eight mandated strategic projects — the Atlantic Blue Port fisheries project, a Burkina Faso dry port development mandate, a bulk/breakbulk port in Lumut Malaysia, industrial manufacturing and freehold real estate in Duqm Oman, a UAE trailer manufacturing plant, a UAE smart city development, and mining rights and natural resource development.",
    },
    {
      q: "Why invest with Promax Global?",
      a: "Mandated and exclusive project rights, government-aligned development frameworks, multi-country presence across GCC, Africa, Asia and the Atlantic, high-growth sectors with long-term demand, strong regulatory and execution capability, and flexible investment models including JV, PPP, equity, BOT/BOOT, and concessions.",
    },
  ],
};
