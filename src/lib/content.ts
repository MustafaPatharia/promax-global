import type { PageContent } from "@/components/PageShell";

/** Page copy sourced from _ref/REF-SUMMARY.md (old-site scrape). */
export const pages: Record<string, PageContent & { metaDescription: string }> = {
  about: {
    eyebrow: "About Promax United",
    title: "Relentless Allies — From UAE to the World",
    heroVideo: "dubai-skyline-burj-aerial.mp4",
    heroStyle: "focus-blur",
    bodyStyle: "rows",
    intro:
      "Promax United is powered by a dynamic collaboration of adept experts, creative innovators, and forward-thinking visionaries — united by a profound dedication to crafting a legacy of global success stories.",
    metaDescription:
      "Learn about Promax United — a collaboration of experts and visionaries crafting a legacy of global success stories from our UAE hub.",
    sections: [
      {
        heading: "Crafting a legacy of global success stories",
        body: "From our UAE hub we extend our influence globally, blending expertise, forward-thinking leadership, and financial resilience to craft far-reaching success stories through strategic partnerships. Committed to excellence, we are not just partners — we are your relentless allies.",
      },
      {
        heading: "Corporate leadership",
        items: [
          { title: "H.E. Louai Mohamed Ali", text: "Chairman — strategic direction and global partnerships." },
          { title: "Board of Directors", text: "Structured oversight driving global development operations." },
          { title: "Executive Office", text: "Operational leadership across the group's five verticals." },
        ],
      },
    ],
    stats: [
      { value: "25+", label: "Countries — Global Presence" },
      { value: "8", label: "Mandated Projects" },
      { value: "5", label: "Industry Verticals" },
      { value: "50+", label: "Active Terminal Advisories" },
    ],
    quote: {
      text:
        "Rooted in the UAE's spirit of innovation, we transform bold local ideas into global realities — delivering future-forward solutions from the heart of the Middle East.",
      who: "Promax Global — Strategic Intent",
    },
    band: {
      video: "world-map-grid-motion-bg.mp4",
      style: "split",
      eyebrow: "Our Advisory & Partnership Ecosystem",
      heading: "One UAE hub, a global reach",
      text:
        "We support governments, regulators, port authorities, energy-transition stakeholders and institutional investors with integrated, future-ready capabilities that strengthen national competitiveness and long-term economic resilience.",
    },
    cta: { label: "Explore the Portfolio", href: "/portfolio" },
  },

  "work-with-us": {
    eyebrow: "Strategic Partnerships",
    title: "Work With Us",
    heroVideo: "trot-port-crew-hivis-briefing-a.mp4",
    heroStyle: "letterbox",
    bodyStyle: "grid-num",
    intro:
      "Partner with Promax Global — a UAE-headquartered enterprise delivering integrated solutions across ports, logistics, trade, technology, education, energy, and strategic development.",
    metaDescription:
      "Partner with Promax Global. Open to governments, port authorities, operators, EPC contractors, technology providers, and strategic partners.",
    sections: [
      {
        heading: "Who we work with",
        items: [
          { title: "Governments", text: "Infrastructure development, trade facilitation, food security, and public-sector modernization." },
          { title: "Port Authorities & Operators", text: "Operational excellence, advisory, digital transformation, asset lifecycle management." },
          { title: "EPC Contractors", text: "Port infrastructure, industrial parks, logistics hubs, and smart-city development." },
          { title: "Technology Providers", text: "AI, IoT, data centre, cybersecurity, smart grid, and fintech deployment." },
          { title: "Strategic Partners", text: "Trade associations, multilateral organizations, and advisory firms co-developing solutions." },
          { title: "Education & Training", text: "Universities and skill-development agencies aligned with UN SDG mandates." },
        ],
      },
    ],
    band: {
      video: "digital-globe-iot-network-loop.mp4",
      eyebrow: "How We Collaborate",
      heading: "Co-develop, co-implement, co-market",
      text:
        "We engage mission-critical stakeholders across the global trade, infrastructure, governance, and technology spectrum — structuring partnerships that turn national priorities into deployable programs.",
    },
    cta: { label: "Submit a Partnership Enquiry", href: "/contact" },
  },

  "invest-with-us": {
    eyebrow: "Investment Opportunities",
    title: "Invest With Us",
    heroVideo: "smart-port-3d-digital-shipping.mp4",
    heroStyle: "kenburns",
    intro:
      "Access a curated portfolio of mandated infrastructure projects, trade hubs, energy assets, and technology ventures across high-growth emerging markets — backed by UAE government alignment and Promax United patronage.",
    metaDescription:
      "Invest with Promax Global — mandated port, infrastructure, logistics, energy, fintech, and food-security ventures across GCC, Africa, India, and Asia.",
    sections: [
      {
        heading: "Why invest with Promax Global",
        items: [
          { title: "Institutional credibility", text: "Billion-dollar Promax United patronage." },
          { title: "8 mandated projects", text: "Government-backed investment rights." },
          { title: "25+ countries", text: "Multi-country operations across emerging markets." },
          { title: "5 resilient verticals", text: "Diversified across ports, trade, tech, energy, and skills." },
          { title: "ESG-aligned", text: "Long-term value creation with sustainable infrastructure." },
        ],
      },
    ],
    stats: [
      { value: "8", label: "Mandated Projects (~$1B each)" },
      { value: "25+", label: "Countries of Operation" },
      { value: "5", label: "Resilient Verticals" },
      { value: "4", label: "Regions — GCC · Africa · India · Asia" },
    ],
    band: {
      video: "smart-port-3d-digital-shipping.mp4",
      style: "split",
      eyebrow: "How We Structure Investments",
      heading: "Real assets, mandated rights, flexible models",
      text:
        "Our projects span ports, dry ports, logistics hubs, manufacturing, smart cities, real estate, food security, renewable energy, and digital ecosystems — structured for institutional investors, sovereign wealth funds, private equity, and family offices.",
    },
    cta: { label: "Submit Investment Interest", href: "/contact" },
  },

  "port-management": {
    eyebrow: "Ports & Logistics",
    title: "Port Management Services",
    heroVideo: "container-port-night-topdown-aerial.mp4",
    heroStyle: "duotone",
    bodyStyle: "rows",
    intro:
      "Structured, tiered port operations and container-terminal program execution — optimizing asset uptime, fluidity, and safety compliance across international waters.",
    metaDescription:
      "Promax Global Port Management Services — bulk ports, container terminals, and end-to-end port operations optimized to global marine standards.",
    sections: [
      {
        heading: "Capabilities",
        items: [
          { title: "Bulk Ports Management", text: "Dry, liquid, and breakbulk cargo with custom handling infrastructure." },
          { title: "Container Terminals", text: "Throughput acceleration via automated weighing, conveyor routing, high-speed loading." },
          { title: "End-to-End Operations", text: "From start-ups and developing ports through to established operations." },
        ],
      },
    ],
    band: {
      video: "shipping-port-aerial-panorama.mp4",
      style: "split",
      eyebrow: "Operational Precision",
      heading: "Maximizing berth utilization and cargo turnaround",
      text:
        "We manage all types of port and terminal operations — minimizing environmental dust, controlling product degradation, and giving port owners complete control over throughput.",
    },
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  "port-advisory": {
    eyebrow: "Ports & Logistics",
    title: "Port Advisory Services",
    heroVideo: "shipping-port-aerial-panorama.mp4",
    heroStyle: "kenburns",
    bodyStyle: "grid-num",
    intro:
      "Independent, data-driven assessments from senior port engineers and operational managers — strengthening performance, asset reliability, and long-term strategic development across the Middle East, Africa, and Asia.",
    metaDescription:
      "Independent, data-driven port advisory from senior professionals. Optimize terminal capacity, safety, sustainability, and smart-port systems globally.",
    sections: [
      {
        heading: "Advisory framework",
        items: [
          { title: "Commercial & Strategic", text: "Tariff review, concession agreements, PPP structuring, vendor evaluation." },
          { title: "Infrastructure & Capacity", text: "Berth occupancy, yard configuration, fleet sizing, growth simulation." },
          { title: "Operational Performance", text: "Vessel turnaround, yard sequencing, labor utilization, queue reduction." },
          { title: "Safety, Compliance & Risk", text: "Risk management aligned to international standards." },
          { title: "Sustainability & Green Port", text: "Green-port transformation and emissions strategy." },
          { title: "Digitalization & Smart Port", text: "TOS, automation, and smart-port solutions." },
        ],
      },
    ],
    band: {
      video: "container-port-night-topdown-aerial.mp4",
      eyebrow: "Independent & Data-Driven",
      heading: "World-class standards, future-ready transformation",
      text:
        "We assist port authorities, terminal operators, logistics zones, and maritime stakeholders in achieving world-class operational standards through evidence-based assessment and engineering.",
    },
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  infrastructure: {
    eyebrow: "Ports & Logistics",
    title: "Infrastructure Solutions",
    heroVideo: "container-port-night-topdown-aerial.mp4",
    heroStyle: "clip-wipe",
    intro:
      "We plan, invest in, and deploy high-yield port layouts, heavy warehousing structures, and integrated software platforms that improve marine asset values.",
    metaDescription:
      "Acquire, construct, and optimize global marine assets — civil port developments, high-density warehousing, and smart digital systems.",
    sections: [
      {
        heading: "What we build",
        items: [
          { title: "Civil Infrastructure", text: "Deep-water berths, dredging layouts, dock reinforcement for massive vessels." },
          { title: "Warehousing & Logistics", text: "Heavy pavement yards for RTGs/reachstackers and high-density storage." },
          { title: "Digital Infrastructure", text: "Integrated software platforms and smart operational systems." },
        ],
      },
    ],
    band: {
      video: "shipping-port-aerial-panorama.mp4",
      style: "split",
      eyebrow: "Build · Operate · Sustain",
      heading: "World-class assets, agile operations",
      text:
        "We combine heavy marine civil assets with agile operational processes to achieve superior throughput, reduced vessel turnaround, and enhanced supply-chain fluidity.",
    },
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  "strategic-equipment": {
    eyebrow: "Ports & Logistics",
    title: "Strategic Equipment Solutions",
    heroVideo: "foundry-furnace-molten-metal-worker.mp4",
    heroStyle: "duotone",
    bodyStyle: "rows",
    intro:
      "From multi-brand machinery procurement to engineering maintenance contracts and Drives/PLC integrations, we keep port operations running at their peak.",
    metaDescription:
      "Source and maintain heavy port gantry machinery globally — multi-brand procurement pipelines and lifecycle engineering maintenance programs.",
    sections: [
      {
        heading: "Sourcing & lifecycle",
        items: [
          { title: "Equipment Sourcing", text: "From Ship-to-Shore (STS) cranes down to terminal yard IT installations." },
          { title: "Lifecycle Management", text: "Annual maintenance (AMC), third-party inspections, structural restorations." },
          { title: "Systems Integration", text: "Drives, PLC systems, and automation for maximum uptime." },
        ],
      },
    ],
    band: {
      video: "container-port-night-topdown-aerial.mp4",
      eyebrow: "Uptime Engineered",
      heading: "Keeping heavy machinery at peak performance",
      text:
        "We represent multiple global brands to distribute, assemble, and support heavy machinery worldwide — with preventative systems that maximize uptime and extend asset lifetimes.",
    },
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  "skills-education": {
    eyebrow: "Portfolio Vertical",
    title: "Skills & Education",
    heroVideo: "dubai-skyline-burj-aerial.mp4",
    heroStyle: "focus-blur",
    bodyStyle: "grid-num",
    intro:
      "Establishing the Tri-Regional Socio-Economic Development Alliance covering India, GCC, and Africa — empowering students, women, and entrepreneurs for a brighter future.",
    metaDescription:
      "Promax United Skills & Education — the Tri-Regional Socio-Economic Development Alliance covering India, GCC, and Africa.",
    sections: [
      {
        heading: "Strategic pillars",
        items: [
          { title: "Skill Development & Workforce Mobility" },
          { title: "Women Empowerment" },
          { title: "Startup & Incubation Centres" },
          { title: "Digital Finance & Fintech Inclusion" },
          { title: "Agriculture & Rural Development" },
          { title: "UN SDG-Aligned Programs" },
        ],
      },
    ],
    band: {
      video: "world-map-grid-motion-bg.mp4",
      style: "split",
      eyebrow: "Tri-Regional Alliance",
      heading: "Inclusive development across India, GCC, and Africa",
      text:
        "We collaborate with governments, sovereign wealth funds, institutional investors, and academic partners to deploy scaled education and inclusive-development programs.",
    },
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "trade-hub": {
    eyebrow: "Portfolio Vertical",
    title: "Trade Hub & Food Security",
    heroVideo: "shipping-port-aerial-panorama.mp4",
    heroStyle: "shutter",
    intro:
      "Integrated trade hubs and food-security systems connecting GCC, India, Africa, and Asia — global sourcing, commodity management, storage infrastructure, and port-centric logistics.",
    metaDescription:
      "Resilient Promax Trade Hub connecting GCC, India, Africa, and Asia — supporting the UAE National Food Security Strategy 2051.",
    sections: [
      {
        heading: "Competitive strengths",
        items: [
          { title: "Integrated Supply Chains", text: "Secured supply lines from major agricultural zones globally." },
          { title: "Regulatory Alignment", text: "Customs alignment across regions for expedited cargo turnarounds." },
          { title: "Corridor Connectivity", text: "Connecting maritime hubs to landlocked regional corridors." },
          { title: "Food Security 2051", text: "Supporting the UAE's long-horizon National Food Security Strategy." },
        ],
      },
    ],
    band: {
      video: "dubai-earth-zoom-location-marker.mp4",
      eyebrow: "National Food Security Strategy 2051",
      heading: "Securing essential supply lines across regions",
      text:
        "Promax Global supports the UAE's blueprint to top the Global Food Security Index by 2051 — through sustainable production, diversified imports, and technology-enabled agriculture.",
    },
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "technology-fintech": {
    eyebrow: "Portfolio Vertical",
    title: "Technology & Fintech",
    heroVideo: "smart-port-3d-digital-shipping.mp4",
    heroStyle: "parallax",
    bodyStyle: "rows",
    intro:
      "Large-scale digital infrastructure and inclusive financial ecosystems that accelerate national development, strengthen economic transparency, and uplift underserved communities.",
    metaDescription:
      "Promax United Technology & Fintech — digital infrastructure, cybersecurity, smart grids, digital banking, and rural financial inclusion.",
    sections: [
      {
        heading: "High-impact projects",
        items: [
          { title: "Data Centres & Digital Infrastructure", text: "Hyperscale data centres for national data sovereignty." },
          { title: "Electricity Distribution & Smart Grid", text: "IoT and SCADA for intelligent energy metering." },
          { title: "Industrial & Port Digitalization", text: "TOS integration, OCR gate tracking, visual analytics." },
          { title: "Cybersecurity & Compliance", text: "Securing critical state assets to international standards." },
          { title: "Digital Banking Platforms", text: "Inclusive financial ecosystems and payment gateways." },
          { title: "Financial Inclusion", text: "Rural upliftment and transparent economic ecosystems." },
        ],
      },
    ],
    band: {
      video: "digital-globe-iot-network-loop.mp4",
      style: "split",
      eyebrow: "Digital Backbone of Modern Economies",
      heading: "From the quay to the cloud",
      text:
        "We lead and execute large-scale, high-impact technology projects — the digital infrastructure that guarantees data sovereignty, connected operations, and inclusive finance.",
    },
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "smart-energy": {
    eyebrow: "Portfolio Vertical",
    title: "Smart & Green Energy",
    heroVideo: "recycle-symbol-sign-sunset.mp4",
    heroStyle: "letterbox",
    bodyStyle: "grid-num",
    intro:
      "Integrated green-energy solutions — renewable integration, hybrid equipment conversions, smart energy management, and ESG-aligned decarbonization for ports, industries, and governments.",
    metaDescription:
      "Promax United Smart & Green Energy — IoT energy management, solar microgrids, green conversions, and ESG decarbonization.",
    sections: [
      {
        heading: "Green energy portfolio",
        items: [
          { title: "Solar & Renewable Integration", text: "Solar PV, hybrid microgrids, renewable-powered infrastructure." },
          { title: "Hybrid & Electric Equipment", text: "Electrification of cranes, RTGs, and terminal tractors." },
          { title: "Energy-Efficiency Audits", text: "Identify losses and optimize consumption across facilities." },
          { title: "Smart Energy Management (SEMS)", text: "IoT monitoring, analytics, and intelligent control." },
          { title: "Carbon Reduction & ESG", text: "ESG-aligned decarbonization programs." },
        ],
      },
    ],
    band: {
      video: "digital-globe-iot-network-loop.mp4",
      eyebrow: "Toward Zero-Emission Operations",
      heading: "Intelligent energy for sustainable trade",
      text:
        "We help ports, industries, and government entities transition to cleaner, more efficient operations — integrating IoT sensors, advanced analytics, and energy-efficient technologies.",
    },
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "strategic-projects": {
    eyebrow: "Portfolio Vertical",
    title: "Strategic Projects & Investments",
    heroVideo: "dubai-skyline-burj-aerial.mp4",
    heroStyle: "shutter",
    intro:
      "A diversified portfolio of mandated, acquired, and high-value strategic projects — 8 flagship developments valued around $1 billion each, spanning GCC, Africa, Asia, and the Atlantic.",
    metaDescription:
      "Promax United Strategic Investment Portfolio — 8 high-value mandated projects across GCC, Africa, Asia, and the Atlantic.",
    sections: [
      {
        heading: "The mandated portfolio",
        items: [
          { title: "1. Blue Port Project — Atlantic Ocean", text: "Exclusive rights to a Blue Port ecosystem with Atlantic fisheries access." },
          { title: "2. Dry Port Development — Burkina Faso", text: "National dry port strengthening West Africa's trade corridors." },
          { title: "3. Bulk & Break-Bulk Port — Lumut, Malaysia", text: "Terminal for minerals, agri-commodities, and industrial cargo." },
          { title: "4. Industrial Manufacturing — Duqm, Oman", text: "Manufacturing units within a SEZAD industrial park." },
          { title: "5. Freehold Real Estate — Duqm, Oman", text: "Residential, commercial, and mixed-use developments." },
          { title: "6. Trailer Manufacturing — UAE", text: "Domestic heavy-transport manufacturing." },
          { title: "7. Smart City Development — UAE", text: "Integrated smart-infrastructure city project." },
          { title: "8. Mining Rights & Natural Resources", text: "Access to strategic natural-resource assets." },
        ],
      },
    ],
    stats: [
      { value: "8", label: "Flagship Projects" },
      { value: "$1B", label: "Typical Project Value" },
      { value: "4", label: "Continents Engaged" },
      { value: "25+", label: "Countries of Operation" },
    ],
    band: {
      video: "smart-port-3d-digital-shipping.mp4",
      style: "split",
      eyebrow: "Mandated & Exclusive Rights",
      heading: "High-growth, real-asset opportunities",
      text:
        "Structured for institutional investors seeking government-aligned exposure to ports, logistics, industry, real estate, food security, and natural resources across global economic corridors.",
    },
    cta: { label: "Initiate Institutional Discussion", href: "/contact" },
  },
};
