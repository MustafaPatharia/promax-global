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
      a: "Five verticals: ports and logistics, skills and education, trade hub and food security, technology and fintech, and smart and green energy — plus a portfolio of mandated strategic projects.",
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
      a: "A curated portfolio of mandated infrastructure projects, trade hubs, energy assets, and technology ventures across high-growth emerging markets — including 8 flagship projects valued around $1 billion each.",
    },
    {
      q: "Why invest with Promax Global?",
      a: "Institutional credibility from Promax United patronage, government-backed mandates, operations across 25+ countries, five diversified verticals, and ESG-aligned long-term value creation.",
    },
  ],
  "port-management": [
    {
      q: "What port management services does Promax Global provide?",
      a: "Structured, tiered port operations covering bulk ports, container terminals, and end-to-end operations — from port start-ups to established terminals — optimized for asset uptime, cargo fluidity, and safety compliance to global marine standards.",
    },
    {
      q: "What types of ports does Promax Global manage?",
      a: "Bulk ports (dry, liquid, and breakbulk cargo) and container terminals, with capabilities spanning developing ports through to established international operations.",
    },
  ],
  "port-advisory": [
    {
      q: "What is Promax Global port advisory?",
      a: "Independent, data-driven port assessments from senior port engineers and operational managers, strengthening terminal performance, asset reliability, safety, sustainability, and long-term strategy across the Middle East, Africa, and Asia.",
    },
    {
      q: "What areas does Promax Global's port advisory cover?",
      a: "Commercial and strategic advisory, infrastructure and capacity planning, operational performance, safety and risk, green-port sustainability, and smart-port digitalization.",
    },
  ],
  infrastructure: [
    {
      q: "What port infrastructure does Promax Global build?",
      a: "Civil marine infrastructure such as deep-water berths and dredging layouts, heavy warehousing and logistics yards, and integrated digital platforms that raise marine asset value.",
    },
  ],
  "strategic-equipment": [
    {
      q: "What port equipment services does Promax Global offer?",
      a: "Multi-brand equipment sourcing from Ship-to-Shore cranes to yard IT, lifecycle maintenance (AMC, inspections, structural restoration), and Drives/PLC systems integration for maximum uptime.",
    },
  ],
  "skills-education": [
    {
      q: "What is Promax Global's Skills & Education program?",
      a: "The Tri-Regional Socio-Economic Development Alliance across India, the GCC, and Africa — advancing skill development, women empowerment, startup incubation, fintech inclusion, and rural development aligned to UN SDGs.",
    },
  ],
  "trade-hub": [
    {
      q: "What is the Promax Global Trade Hub?",
      a: "An integrated trade and food-security network connecting the GCC, India, Africa, and Asia through global sourcing, commodity management, storage infrastructure, and port-centric logistics — supporting the UAE National Food Security Strategy 2051.",
    },
  ],
  "technology-fintech": [
    {
      q: "What technology and fintech solutions does Promax Global deliver?",
      a: "Hyperscale data centres, smart-grid electricity distribution, port and industrial digitalization, cybersecurity, digital banking platforms, and rural financial inclusion.",
    },
  ],
  "smart-energy": [
    {
      q: "What green energy solutions does Promax Global provide?",
      a: "Solar and renewable integration, hybrid and electric conversion of port equipment, energy-efficiency audits, IoT smart energy management, and ESG-aligned carbon reduction.",
    },
  ],
  "strategic-projects": [
    {
      q: "What strategic projects does Promax Global hold?",
      a: "Eight mandated flagship projects valued around $1 billion each — including the Atlantic Blue Port, Burkina Faso dry port, Lumut bulk port in Malaysia, Duqm industrial and real-estate developments in Oman, UAE trailer manufacturing and smart city, and mining rights.",
    },
  ],
};
