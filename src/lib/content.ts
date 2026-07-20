import type { PageContent } from "@/components/PageShell";

/**
 * Page copy sourced from the old-site scrape (output/pages/*.json), rebranded
 * Promax United → Promax Global. Each page composes ported Transland section
 * blocks (see components/sections). Video rule: every clip is used at most once
 * across the whole site — gradient heroes (no heroVideo) vary the rhythm and
 * keep us inside the brand-safe clip budget. Bands were dropped (no spare clips);
 * richness now lives in the image blocks.
 */
export const pages: Record<string, PageContent & { metaDescription: string }> = {
  about: {
    eyebrow: "About Promax Global",
    title: "Relentless Allies — From UAE to the World",
    intro:
      "Promax Global is powered by a dynamic collaboration of adept experts, creative innovators, and forward-thinking visionaries — united by a profound dedication to crafting a legacy of global success stories.",
    metaDescription:
      "Learn about Promax Global — a collaboration of experts and visionaries crafting a legacy of global success stories from our UAE hub.",
    bodyStyle: "rows",
    sections: [
      {
        heading: "Crafting a legacy of global success stories",
        body: "From our UAE hub we extend our influence globally, blending expertise, forward-thinking leadership, and financial resilience to craft far-reaching success stories through strategic partnerships. Committed to excellence, we are not just partners — we are your relentless allies.",
        image: "36e82067_about.jpg",
        imageAlt: "Promax Global — global operations and partnership",
      },
    ],
    blocks: [
      {
        type: "chairman",
        eyebrow: "Chairman's Message",
        heading: "A message from our Chairman",
        photo: "b029c743_Mohamed_Ali.png",
        name: "H.E. Louai Mohamed Ali",
        role: "Chairman",
        arabic:
          "تُبنى بروماكس جلوبال على تعاونٍ ديناميكيٍّ يجمع خبراءَ بارعين، ومبتكرين مبدعين، وأصحابَ رؤى استشرافية، يوحّدهم التزامٌ عميق بأدوارهم. يزدهر تناغمنا بالعمل الجماعي والالتزام الراسخ بتحقيق التميّز. نحتضن أدوارنا كلَّ يوم بهدفٍ مشترك: أن نحوّل أحلامكم إلى واقع، ونتجاوز أهدافكم، ونضعكم في مصافِّ الروّاد في مجالاتكم. ملتزمون بالتميّز، لسنا شركاءَ فحسب؛ بل حلفاؤكم الدائمون.",
        english:
          "Promax Global is powered by a dynamic collaboration of adept experts, creative innovators, and forward-thinking visionaries, all united by a profound dedication to their respective roles. Our synergy thrives on collaborative efforts and an unyielding commitment to achieving excellence. Each day, we embrace our roles with a collective purpose — to transform your dreams to life, exceed your goals, and position you as pioneers in your respective fields. Committed to excellence, we are not just partners; we're your relentless allies.",
      },
      {
        type: "feature-cards",
        eyebrow: "Why Promax Global",
        heading: "One hub, global conviction",
        columns: 3,
        items: [
          { icon: "briefcase", title: "Relentless allies", text: "Not just partners — we align to your national priorities and see them through." },
          { icon: "globe", title: "UAE hub, global reach", text: "From the heart of the Middle East to 25+ countries across four regions." },
          { icon: "layers", title: "Financial resilience", text: "Institutional credibility and diversified strength across resilient verticals." },
        ],
      },
      {
        type: "feature-cards",
        eyebrow: "Sustainability",
        heading: "ESG at the core",
        intro: "Three pillars, aligned with the UN SDGs, UAE Net Zero 2050, and Responsible Investment principles.",
        columns: 3,
        items: [
          { icon: "globe", title: "Environmental", text: "Decarbonization, renewable integration, and green-port transformation aligned with UAE Net Zero 2050." },
          { icon: "briefcase", title: "Social", text: "Skills, women & youth empowerment, and inclusive development across India, the GCC, and Africa — mapped to the UN SDGs." },
          { icon: "clipboard", title: "Governance", text: "Transparent reporting, institutional oversight, and responsible-investment discipline across every mandate." },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Across the Group",
        heading: "Operations, partners, and reach",
        intro: "A cross-section of the group's brand, facilities, and reference imagery.",
        images: [
          { src: "1ea8c37b_ports_logistics.png", alt: "Ports and logistics operations" },
          { src: "fe3a08cb_logo-white-orange.png", alt: "Promax Global brand mark" },
          { src: "3540a76a_img2.jpg", alt: "Group operations" },
          { src: "50566d7a_img1.jpg", alt: "Group operations" },
          { src: "41d8432c_s43.jpg", alt: "Facilities reference" },
          { src: "57574be9_s2.png", alt: "Facilities reference" },
          { src: "60e1fd06_sa.jpg", alt: "Operations reference" },
          { src: "61f11cbe_df.jpg", alt: "Operations reference" },
          { src: "9f5a8fda_s1a.png", alt: "Facilities reference" },
          { src: "e851a02e_s23.png", alt: "Facilities reference" },
        ],
      },
    ],
    stats: [
      { value: "27", label: "Countries — Global Presence" },
      { value: "18", label: "Mandated Strategic Projects" },
      { value: "9", label: "Core Industry Verticals" },
      { value: "36", label: "Partners — Global Network" },
    ],
    quote: {
      text:
        "Rooted in the UAE's spirit of innovation, we transform bold local ideas into global realities — delivering future-forward solutions from the heart of the Middle East.",
      who: "Promax Global — Strategic Intent",
    },
    cta: { label: "Explore the Portfolio", href: "/portfolio" },
  },

  "work-with-us": {
    eyebrow: "Strategic Partnerships",
    title: "Work With Us",
    heroVideo: "trot-port-crew-hivis-briefing-a.mp4",
    heroStyle: "letterbox",
    intro:
      "Partner with Promax Global — a UAE-headquartered enterprise delivering integrated solutions across ports, logistics, trade, technology, education, energy, and strategic development.",
    metaDescription:
      "Partner with Promax Global. Open to governments, port authorities, operators, EPC contractors, technology providers, and strategic partners.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Who We Work With",
        heading: "Mission-critical stakeholders",
        columns: 3,
        items: [
          { icon: "building", title: "Governments", text: "Infrastructure development, trade facilitation, food security, and public-sector modernization." },
          { icon: "anchor", title: "Port Authorities & Operators", text: "Operational excellence, advisory, digital transformation, asset lifecycle management." },
          { icon: "crane", title: "EPC Contractors", text: "Port infrastructure, industrial parks, logistics hubs, and smart-city development." },
          { icon: "globe", title: "Technology Providers", text: "AI, IoT, data centre, cybersecurity, smart grid, and fintech deployment." },
          { icon: "briefcase", title: "Strategic Partners", text: "Trade associations, multilateral organizations, and advisory firms co-developing solutions." },
          { icon: "clipboard", title: "Education & Training", text: "Universities and skill-development agencies aligned with UN SDG mandates." },
        ],
      },
      {
        type: "service-overlay",
        eyebrow: "How We Collaborate",
        heading: "Co-develop, co-implement, co-market",
        intro: "We structure partnerships that turn national priorities into deployable programs across trade, infrastructure, governance, and technology.",
        columns: 4,
        items: [
          { image: "0665834b_photo-1558494949-ef010cbdcc31.jpg", icon: "globe", title: "Trade corridors" },
          { image: "10c34884_photo-1454165804606-c3d57bc86b40.jpg", icon: "anchor", title: "Port operations" },
          { image: "1318030e_photo-1494412574643-ff11b0a5c1c3.jpg", icon: "crane", title: "Industrial zones" },
          { image: "23f9bc2f_photo-1509391366360-2e959784a276.jpg", icon: "layers", title: "Digital infrastructure" },
        ],
      },
    ],
    cta: { label: "Submit a Partnership Enquiry", href: "#inquiry" },
  },

  "invest-with-us": {
    eyebrow: "Investment Opportunities",
    title: "Invest With Us",
    heroVideo: "digital-globe-iot-network-loop.mp4",
    heroStyle: "kenburns",
    intro:
      "Access a curated portfolio of mandated infrastructure projects, trade hubs, energy assets, and technology ventures across high-growth emerging markets — backed by UAE government alignment and billion-dollar group patronage.",
    metaDescription:
      "Invest with Promax Global — mandated port, infrastructure, logistics, energy, fintech, and food-security ventures across GCC, Africa, India, and Asia.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Why Invest With Promax Global",
        heading: "Institutional strength, mandated rights",
        columns: 3,
        items: [
          { icon: "briefcase", title: "Institutional credibility", text: "Billion-dollar group backing and government alignment." },
          { icon: "layers", title: "8 mandated projects", text: "Government-backed investment rights, ~$1B each." },
          { icon: "globe", title: "25+ countries", text: "Multi-country operations across emerging markets." },
          { icon: "compass", title: "5 resilient verticals", text: "Diversified across ports, trade, tech, energy, and skills." },
          { icon: "bolt", title: "ESG-aligned", text: "Long-term value creation with sustainable infrastructure." },
        ],
      },
      {
        type: "service-overlay",
        eyebrow: "Investment Sectors",
        heading: "Real assets across the corridor",
        intro: "Structured for institutional investors, sovereign wealth funds, private equity, and family offices.",
        columns: 3,
        items: [
          { image: "705a5901_photo-1611974789855-9c2a0a7236a3.jpg", icon: "anchor", title: "Ports & terminals" },
          { image: "878dc9be_photo-1586528116311-ad8dd3c8310d.jpg", icon: "layers", title: "Logistics hubs" },
          { image: "9203de11_photo-1578575437130-527eed3abbec.jpg", icon: "crane", title: "Industrial & manufacturing" },
          { image: "99d9424c_photo-1524178232363-1fb2b075b655.jpg", icon: "building", title: "Real estate" },
          { image: "b807bc74_photo-1558494949-ef010cbdcc31.jpg", icon: "globe", title: "Food security" },
          { image: "b769338c_photo-1454165804606-c3d57bc86b40.jpg", icon: "bolt", title: "Energy & resources" },
        ],
      },
    ],
    stats: [
      { value: "8", label: "Mandated Projects (~$1B each)" },
      { value: "25+", label: "Countries of Operation" },
      { value: "5", label: "Resilient Verticals" },
      { value: "4", label: "Regions — GCC · Africa · India · Asia" },
    ],
    cta: { label: "Submit Investment Interest", href: "#inquiry" },
  },

  "port-management": {
    eyebrow: "Ports & Logistics",
    title: "Port Management Services",
    heroVideo: "port-containers-network-topdown.mp4",
    heroStyle: "duotone",
    intro:
      "Structured, tiered port operations and container-terminal program execution — optimizing asset uptime, fluidity, and safety compliance across international waters.",
    metaDescription:
      "Promax Global Port Management Services — bulk ports, container terminals, and end-to-end port operations optimized to global marine standards.",
    blocks: [
      {
        type: "service-overlay",
        eyebrow: "Capabilities",
        heading: "Full-spectrum port operations",
        intro: "From start-ups and developing ports through to established, high-throughput operations.",
        columns: 3,
        items: [
          { image: "6c067065_Bulk_Ports_Management.png", icon: "anchor", title: "Bulk ports management", text: "Dry, liquid, and breakbulk cargo with custom handling infrastructure." },
          { image: "f6a007dc_Container_Terminals_Optimization.jpg", icon: "crane", title: "Container terminals", text: "Automated weighing, conveyor routing, and high-speed loading." },
          { image: "a148740f_End_to_End_Port_Operations.png", icon: "layers", title: "End-to-end operations", text: "From port start-ups through to established operations." },
        ],
      },
      {
        type: "service-overlay",
        eyebrow: "Operational Disciplines",
        heading: "Precision across every berth",
        intro: "Maximizing berth utilization and cargo turnaround while controlling dust, degradation, and risk.",
        columns: 4,
        items: [
          { image: "59dbd351_commercial_strategic.jpg", icon: "briefcase", title: "Commercial & strategic" },
          { image: "0d7cc51f_infrastructure_capacity.jpg", icon: "building", title: "Infrastructure & capacity" },
          { image: "8af45d08_operational_performance.jpg", icon: "compass", title: "Operational performance" },
          { image: "0616d0d8_safety_compliance.jpg", icon: "clipboard", title: "Safety & compliance" },
          { image: "150e6b22_sustainability_green.jpg", icon: "globe", title: "Sustainability" },
          { image: "81f48c6c_digitalization_smart.jpg", icon: "layers", title: "Digitalization" },
          { image: "8f1925dd_technical_engineering.jpg", icon: "bolt", title: "Technical engineering" },
          { image: "f8a755b9_marine_port.jpg", icon: "anchor", title: "Marine operations" },
        ],
      },
    ],
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  "port-advisory": {
    eyebrow: "Ports & Logistics",
    title: "Port Advisory Services",
    heroVideo: "port-night-digital-hologram-overlay.mp4",
    heroStyle: "kenburns",
    intro:
      "Independent, data-driven assessments from senior port engineers and operational managers — strengthening performance, asset reliability, and long-term strategic development across the Middle East, Africa, and Asia.",
    metaDescription:
      "Independent, data-driven port advisory from senior professionals. Optimize terminal capacity, safety, sustainability, and smart-port systems globally.",
    blocks: [
      {
        type: "service-overlay",
        eyebrow: "Advisory Framework",
        heading: "Eight disciplines, one evidence base",
        intro: "We assist port authorities, terminal operators, logistics zones, and maritime stakeholders in achieving world-class operational standards.",
        columns: 4,
        items: [
          { image: "8fccce35_commercial_strategic_advisory.jpg", icon: "briefcase", title: "Commercial & strategic", text: "Tariff review, concessions, PPP structuring, vendor evaluation." },
          { image: "1c6a02f1_infrastructure_capacity_planning.jpg", icon: "building", title: "Infrastructure & capacity", text: "Berth occupancy, yard configuration, growth simulation." },
          { image: "4b0e1e70_operational_performance_efficiency_reviews.jpg", icon: "compass", title: "Operational performance", text: "Vessel turnaround, yard sequencing, queue reduction." },
          { image: "07efc8f7_safety_compliance_risk_management.jpg", icon: "clipboard", title: "Safety, compliance & risk", text: "Risk management aligned to international standards." },
          { image: "801a58c0_sustainability_green_port_transformation.jpg", icon: "globe", title: "Sustainability & green port", text: "Green-port transformation and emissions strategy." },
          { image: "13b05caf_digitalization_smart_port_solutions.jpg", icon: "layers", title: "Digitalization & smart port", text: "TOS, automation, and smart-port solutions." },
          { image: "a3053c46_technical_engineering_assessments.jpg", icon: "bolt", title: "Technical & engineering", text: "Structural, mechanical, and asset-integrity assessments." },
          { image: "0b46d0da_training_change.jpg", icon: "briefcase", title: "Training & change", text: "Workforce capability and operational change management." },
        ],
      },
    ],
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  infrastructure: {
    eyebrow: "Ports & Logistics",
    title: "Infrastructure Solutions",
    heroVideo: "trot-port-crew-hivis-briefing-b.mp4",
    heroStyle: "clip-wipe",
    intro:
      "Promax Global plans, invests in, and deploys high-yield port layouts, heavy warehousing structures, and integrated software platforms that raise the value of global marine assets.",
    metaDescription:
      "Acquire, construct, and optimize global marine assets — civil port developments, high-density warehousing, and smart digital systems.",
    sections: [
      {
        heading: "Acquire, construct, and optimize marine assets",
        body: "Promax Global plans, invests in, and deploys high-yield port layouts, heavy warehousing structures, and integrated software platforms — spanning construction, operations, and lifecycle optimization of ports, logistics hubs, and strategic industrial facilities.",
        image: "111626d9_banner.png",
        imageAlt: "Promax Global infrastructure — port development banner",
      },
      {
        heading: "Civil Infrastructure Development",
        body: "Our primary strategy is to acquire and design heavy marine civil assets. From dredging layouts and dock reinforcements to deep-water berths, we construct the foundational structures that let the largest vessels berth, load, and turn around at pace.",
        image: "c820e038_Civil_Infrastructure_Development.png",
        imageAlt: "Civil infrastructure development — deep-water berths and dock works",
      },
      {
        heading: "Warehousing & Logistics Excellence",
        body: "We design, build, and equip high-volume warehouse hubs engineered for fast loading, storage safety, and throughput — racking and shelving systems, temperature-controlled cold storage, and heavy-pavement yards built for RTGs and reachstackers.",
        image: "c67c3f81_Warehousing_Logistics_Excellence.jpg",
        imageAlt: "High-density warehousing and logistics facility",
      },
      {
        heading: "Digital Infrastructure",
        body: "We deliver end-to-end digital infrastructure that enables smarter operations and seamless integration — enterprise systems applications, smart-energy management, and applied artificial intelligence that turn a terminal into a connected, data-driven asset.",
        image: "4cae52b3_Digital_Infrastructure.png",
        imageAlt: "Digital infrastructure — smart, connected port systems",
      },
    ],
    blocks: [
      {
        type: "work-steps",
        eyebrow: "Build · Operate · Sustain",
        heading: "How we deliver marine infrastructure",
        intro: "From feasibility to handover, a disciplined lifecycle that de-risks capital and compresses time-to-throughput.",
        steps: [
          { title: "Assess & Plan", text: "Feasibility, layout modelling, and yield analysis for the asset.", icon: "clipboard" },
          { title: "Acquire & Design", text: "Dredging, berth and reinforcement engineering for the largest vessels.", icon: "compass" },
          { title: "Construct", text: "Civil works, heavy-pavement yards, and warehousing built to spec.", icon: "building" },
          { title: "Digitize & Operate", text: "Smart systems, automation, and lifecycle optimization for uptime.", icon: "layers" },
        ],
      },
      {
        type: "feature-cards",
        eyebrow: "Why Promax Global",
        heading: "Engineered advantages",
        columns: 3,
        items: [
          { icon: "anchor", title: "Deep-water capability", text: "Berths and dredging layouts sized for the largest classes of vessel." },
          { icon: "crane", title: "Heavy civil expertise", text: "Dock reinforcement, RTG/reachstacker yards, and high-density storage." },
          { icon: "globe", title: "Digital by default", text: "Systems, smart energy, and AI integrated from day one — not bolted on." },
        ],
      },
    ],
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  "strategic-equipment": {
    eyebrow: "Ports & Logistics",
    title: "Strategic Equipment Solutions",
    heroVideo: "scrapyard-grapple-claw-metal.mp4",
    heroStyle: "duotone",
    intro:
      "From multi-brand machinery procurement to engineering maintenance contracts and Drives/PLC integrations, we keep port operations running at their peak.",
    metaDescription:
      "Source and maintain heavy port gantry machinery globally — multi-brand procurement pipelines and lifecycle engineering maintenance programs.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Sourcing & Lifecycle",
        heading: "Uptime, engineered",
        columns: 3,
        items: [
          { icon: "crane", title: "Equipment sourcing", text: "From Ship-to-Shore (STS) cranes down to terminal yard IT installations." },
          { icon: "clipboard", title: "Lifecycle management", text: "Annual maintenance (AMC), third-party inspections, structural restorations." },
          { icon: "bolt", title: "Systems integration", text: "Drives, PLC systems, and automation for maximum uptime." },
        ],
      },
      {
        type: "service-overlay",
        eyebrow: "Equipment Programs",
        heading: "Keeping heavy machinery at peak",
        intro: "We represent multiple global brands to distribute, assemble, and support heavy machinery worldwide.",
        columns: 2,
        items: [
          { image: "ccf444a6_Strategic_Equipment_Sourcing_Lifecycle_Management.png", icon: "crane", title: "Sourcing & distribution", text: "Multi-brand procurement pipelines and on-site assembly." },
          { image: "12197b32_Equipment_Life_Cycle_Management.png", icon: "layers", title: "Lifecycle management", text: "Preventative maintenance that extends asset lifetimes." },
        ],
      },
    ],
    cta: { label: "Connect with an Expert", href: "/contact" },
  },

  "skills-education": {
    eyebrow: "Portfolio Vertical",
    title: "Skill Development & Education",
    heroVideo: "skills-education-pexels-19229819.mp4",
    heroStyle: "kenburns",
    intro:
      "Establishing the Tri-Regional Socio-Economic Development Alliance covering India, GCC, and Africa — empowering students, women, and entrepreneurs for a brighter future.",
    metaDescription:
      "Promax Global Skills & Education — the Tri-Regional Socio-Economic Development Alliance covering India, GCC, and Africa.",
    bodyStyle: "rows",
    sections: [
      {
        heading: "The Tri-Regional Alliance",
        body: "We collaborate with governments, sovereign wealth funds, institutional investors, and academic partners to deploy scaled education and inclusive-development programs across India, the GCC, and Africa — empowering students, women, and entrepreneurs.",
        image: "75287166_Skills_Education.jpg",
        imageAlt: "Skills and education — inclusive development programs",
      },
    ],
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Strategic Pillars",
        heading: "Inclusive development, at scale",
        columns: 3,
        items: [
          { icon: "briefcase", title: "Skill Development & Workforce Mobility" },
          { icon: "globe", title: "Women Empowerment" },
          { icon: "bolt", title: "Startup & Incubation Centres" },
          { icon: "layers", title: "Digital Finance & Fintech Inclusion" },
          { icon: "compass", title: "Agriculture & Rural Development" },
          { icon: "clipboard", title: "UN SDG-Aligned Programs" },
        ],
      },
    ],
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "trade-hub": {
    eyebrow: "Portfolio Vertical",
    title: "Trade Hub & Food Security",
    heroVideo: "aluminium-baled-cubes-recycling.mp4",
    heroStyle: "shutter",
    intro:
      "Integrated trade hubs and food-security systems connecting GCC, India, Africa, and Asia — global sourcing, commodity management, storage infrastructure, and port-centric logistics.",
    metaDescription:
      "Resilient Promax Trade Hub connecting GCC, India, Africa, and Asia — supporting the UAE National Food Security Strategy 2051.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Competitive Strengths",
        heading: "Securing essential supply lines",
        columns: 4,
        items: [
          { icon: "globe", title: "Integrated supply chains", text: "Secured supply lines from major agricultural zones globally." },
          { icon: "clipboard", title: "Regulatory alignment", text: "Customs alignment across regions for expedited cargo turnarounds." },
          { icon: "anchor", title: "Corridor connectivity", text: "Connecting maritime hubs to landlocked regional corridors." },
          { icon: "layers", title: "Food Security 2051", text: "Supporting the UAE's long-horizon National Food Security Strategy." },
        ],
      },
      {
        type: "service-overlay",
        eyebrow: "Corridors & Commodities",
        heading: "From source to shelf",
        intro: "Supporting the UAE's blueprint to top the Global Food Security Index by 2051.",
        columns: 4,
        items: [
          { image: "345d5917_Trade_Hub_Food_Security.jpg", icon: "layers", title: "Food-security systems" },
          { image: "b48f949c_Global_Connectivity.jpeg", icon: "globe", title: "Global connectivity" },
          { image: "f2003c9f_photo-1509391366360-2e959784a276.jpg", icon: "anchor", title: "Commodity corridors" },
          { image: "f9d77639_photo-1578575437130-527eed3abbec.jpg", icon: "building", title: "Storage & logistics" },
        ],
      },
      {
        type: "feature-cards",
        eyebrow: "Partner with Promax Trade Hub",
        heading: "Our strengths",
        columns: 4,
        items: [
          { icon: "briefcase", title: "Billion-dollar patronage", text: "Backed by the Promax United Group." },
          { icon: "clipboard", title: "Mandated & exclusive rights", text: "Government-granted project rights across regions." },
          { icon: "globe", title: "Multi-country presence", text: "GCC, Africa, Asia, and the Atlantic corridor." },
          { icon: "compass", title: "Strong government alignment", text: "Working directly with national priorities." },
          { icon: "bolt", title: "Proven execution", text: "Delivery capability in real-asset sectors." },
          { icon: "layers", title: "High-growth real assets", text: "Resilient, essential supply-chain sectors." },
          { icon: "anchor", title: "Transparent governance", text: "Clear reporting and accountable structures." },
          { icon: "building", title: "Long-term value", text: "Sustainable, generational value creation." },
        ],
      },
    ],
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "technology-fintech": {
    eyebrow: "Portfolio Vertical",
    title: "AI & Fintech",
    heroVideo: "technology-fintech-pexels-1085656.mp4",
    heroStyle: "duotone",
    intro:
      "Large-scale digital infrastructure and inclusive financial ecosystems that accelerate national development, strengthen economic transparency, and uplift underserved communities.",
    metaDescription:
      "Promax Global AI & Fintech — data centres, smart grids, AI, cybersecurity, digital banking, and rural financial inclusion across high-growth markets.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "High-Impact Projects",
        heading: "From the quay to the cloud",
        columns: 3,
        items: [
          { icon: "layers", title: "Data Centres & Digital Infrastructure", text: "Hyperscale data centres for national data sovereignty." },
          { icon: "bolt", title: "Electricity Distribution & Smart Grid", text: "IoT and SCADA for intelligent energy metering." },
          { icon: "anchor", title: "Industrial & Port Digitalization", text: "TOS integration, OCR gate tracking, visual analytics." },
          { icon: "briefcase", title: "Cybersecurity & Compliance", text: "Securing critical state assets to international standards." },
          { icon: "globe", title: "Digital Banking Platforms", text: "Inclusive financial ecosystems and payment gateways." },
          { icon: "compass", title: "Financial Inclusion", text: "Rural upliftment and transparent economic ecosystems." },
        ],
      },
      {
        type: "service-overlay",
        eyebrow: "Digital & Financial Platforms",
        heading: "The digital backbone of modern economies",
        intro: "The digital infrastructure that guarantees data sovereignty, connected operations, and inclusive finance.",
        columns: 3,
        items: [
          { image: "4fc30b83_Technology_Fintech.jpg", icon: "layers", title: "Enterprise & cloud" },
          { image: "ae497055_photo-1524178232363-1fb2b075b655.jpg", icon: "globe", title: "Fintech platforms" },
          { image: "b2fad0d2_photo-1586528116311-ad8dd3c8310d.jpg", icon: "briefcase", title: "Data & security" },
        ],
      },
    ],
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "smart-energy": {
    eyebrow: "Portfolio Vertical",
    title: "Smart & Green Energy",
    heroVideo: "recycle-symbol-sign-sunset.mp4",
    heroStyle: "letterbox",
    intro:
      "Integrated green-energy solutions — renewable integration, hybrid equipment conversions, smart energy management, and ESG-aligned decarbonization for ports, industries, and governments.",
    metaDescription:
      "Promax Global Smart & Green Energy — IoT energy management, solar microgrids, green conversions, and ESG decarbonization.",
    bodyStyle: "rows",
    sections: [
      {
        heading: "Toward zero-emission operations",
        body: "We help ports, industries, and government entities transition to cleaner, more efficient operations — integrating IoT sensors, advanced analytics, and energy-efficient technologies for sustainable trade.",
        image: "3065eb1c_Smart_Green_Energy.jpg",
        imageAlt: "Smart and green energy — sustainable operations",
      },
    ],
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Green Energy Portfolio",
        heading: "Intelligent energy for sustainable trade",
        columns: 3,
        items: [
          { icon: "bolt", title: "Solar & Renewable Integration", text: "Solar PV, hybrid microgrids, renewable-powered infrastructure." },
          { icon: "crane", title: "Hybrid & Electric Equipment", text: "Electrification of cranes, RTGs, and terminal tractors." },
          { icon: "clipboard", title: "Energy-Efficiency Audits", text: "Identify losses and optimize consumption across facilities." },
          { icon: "layers", title: "Smart Energy Management (SEMS)", text: "IoT monitoring, analytics, and intelligent control." },
          { icon: "globe", title: "Carbon Reduction & ESG", text: "ESG-aligned decarbonization programs." },
        ],
      },
    ],
    band: {
      video: "smart-energy-pexels-9789926.mp4",
      eyebrow: "Green Energy",
      heading: "Cleaner, more efficient, future-ready operations",
      text: "From renewable integration and hybrid equipment conversions to smart energy management and ESG-aligned decarbonization — we help ports, industries, and governments transition to low-carbon operations. Solar & renewable integration, hybrid & electric equipment conversions, energy-efficiency audits, and sustainable infrastructure upgrades.",
    },
    cta: { label: "Initiate Strategic Alignment", href: "/contact" },
  },

  "strategic-projects": {
    eyebrow: "Portfolio Vertical",
    title: "Infrastructure & Asset Holdings",
    intro:
      "A diversified portfolio of mandated, acquired, and high-value strategic assets — 8 flagship developments valued around $1 billion each, spanning GCC, Africa, Asia, and the Atlantic — structured for institutional investors, sovereign funds, and global operators.",
    metaDescription:
      "Promax Global Infrastructure & Asset Holdings — 8 mandated, high-value projects across ports, logistics, industry, real estate, manufacturing, and natural resources in GCC, Africa, Asia, and the Atlantic.",
    bodyStyle: "grid-num",
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
    blocks: [
      {
        type: "service-overlay",
        eyebrow: "Portfolio Dimensions",
        heading: "High-growth, real-asset opportunities",
        intro: "Structured for institutional investors seeking government-aligned exposure across global economic corridors.",
        columns: 3,
        items: [
          { image: "40b2f196_Strategic_Projects.jpg", icon: "layers", title: "Flagship developments" },
          { image: "87eaa230_Multi_Dimensional_Portfolio.jpeg", icon: "compass", title: "Multi-dimensional portfolio" },
          { image: "b48f949c_Global_Connectivity.jpeg", icon: "globe", title: "Global connectivity" },
        ],
      },
    ],
    stats: [
      { value: "8", label: "Flagship Projects" },
      { value: "$1B", label: "Typical Project Value" },
      { value: "4", label: "Continents Engaged" },
      { value: "25+", label: "Countries of Operation" },
    ],
    cta: { label: "Initiate Institutional Discussion", href: "/contact" },
  },

  "strategic-ventures": {
    eyebrow: "Strategic Ventures",
    title: "Strategic Ventures",
    heroVideo: "trade-hub-pexels-30899354.mp4",
    heroStyle: "kenburns",
    intro:
      "A live portfolio of mandated and co-developed ventures spanning ports, industrial parks, technology cities, smart energy, digital finance, and workforce mobility — structured for institutional partners across GCC, Africa, and Asia.",
    metaDescription:
      "Promax Global Strategic Ventures — blue ports, dry ports, logistics and industrial parks, technology cities, smart energy metering, manufacturing, digital investment platforms, and digital wallets across GCC, Africa, and Asia.",
    blocks: [
      {
        type: "service-overlay",
        eyebrow: "The Portfolio",
        heading: "Twelve ventures, one platform",
        intro: "Each venture is structured for co-investment, joint venture, or concession — with government alignment and clear development mandates.",
        columns: 4,
        items: [
          { image: "705a5901_photo-1611974789855-9c2a0a7236a3.jpg", icon: "anchor", title: "Blue Ports", text: "Sustainable blue-economy ports with fisheries, processing, and cold-chain." },
          { image: "878dc9be_photo-1586528116311-ad8dd3c8310d.jpg", icon: "anchor", title: "Dry Port", text: "ICD, bonded warehousing, and multimodal rail/road connectivity." },
          { image: "10c34884_photo-1454165804606-c3d57bc86b40.jpg", icon: "layers", title: "Logistics Hub", text: "Port-centric distribution and consolidation infrastructure." },
          { image: "9203de11_photo-1578575437130-527eed3abbec.jpg", icon: "crane", title: "Industrial Park", text: "Trot Industrial Park — light and medium manufacturing zones." },
          { image: "23f9bc2f_photo-1509391366360-2e959784a276.jpg", icon: "building", title: "Technology City", text: "Dhafra Project — a next-generation smart urban district." },
          { image: "b769338c_photo-1454165804606-c3d57bc86b40.jpg", icon: "bolt", title: "Smart Energy Metering", text: "Burkina Faso — national smart-metering and grid intelligence." },
          { image: "1318030e_photo-1494412574643-ff11b0a5c1c3.jpg", icon: "crane", title: "Manufacturing", text: "Fabrication, engineering, and export-oriented production lines." },
          { image: "ae497055_photo-1524178232363-1fb2b075b655.jpg", icon: "globe", title: "Digital Investment Platform", text: "Institutional-grade digital investment and capital-access rails." },
          { image: "99d9424c_photo-1524178232363-1fb2b075b655.jpg", icon: "briefcase", title: "Digital Wallet", text: "Inclusive payments and digital-finance wallet infrastructure." },
          { image: "0665834b_photo-1558494949-ef010cbdcc31.jpg", icon: "anchor", title: "Breakbulk Port", text: "Bulk and breakbulk terminals for minerals and project cargo." },
          { image: "0d7cc51f_infrastructure_capacity.jpg", icon: "compass", title: "Workforce Mobility", text: "Cross-border skills mobility and standardized certification." },
          { image: "75287166_Skills_Education.jpg", icon: "clipboard", title: "Skill Development", text: "Tri-regional academies for India–GCC–Africa mobility." },
        ],
      },
    ],
    cta: { label: "Co-Develop a Venture", href: "/invest-with-us" },
  },

  "why-us": {
    eyebrow: "Why Us",
    title: "Why Governments Choose Promax",
    intro:
      "From opportunity to long-term stewardship, Promax Global combines government engagement, investment structuring, integrated delivery, and institutional governance — turning national priorities into operating assets.",
    metaDescription:
      "Why governments and investors choose Promax Global — government engagement, investment structuring, global partnerships, integrated delivery, operational excellence, and long-term asset stewardship.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Our Advantages",
        heading: "Eight reasons partners choose Promax",
        columns: 4,
        items: [
          { icon: "building", title: "Government Engagement", text: "Direct alignment with national development agendas." },
          { icon: "briefcase", title: "Investment Structuring", text: "PPP, concessions, project finance, and co-investment." },
          { icon: "globe", title: "Global Partnerships", text: "Technology, academic, and institutional networks." },
          { icon: "layers", title: "Integrated Delivery", text: "From strategy through design, build, and operations." },
          { icon: "compass", title: "Operational Excellence", text: "Proven execution and performance discipline." },
          { icon: "anchor", title: "Long-Term Asset Stewardship", text: "Lifecycle ownership and value protection." },
          { icon: "bolt", title: "Technology Integration", text: "Smart, connected, data-driven infrastructure." },
          { icon: "clipboard", title: "Institutional Governance", text: "Transparent reporting and accountable structures." },
        ],
      },
      {
        type: "work-steps",
        eyebrow: "From Strategy to Delivery",
        heading: "How a national priority becomes an operating asset",
        intro: "A disciplined, end-to-end delivery model that de-risks capital and compresses time-to-value.",
        steps: [
          { title: "Identify Opportunity", text: "Screen national priorities and market gaps.", icon: "compass" },
          { title: "Strategic Assessment", text: "Feasibility, structuring, and risk analysis.", icon: "clipboard" },
          { title: "Government Engagement", text: "Mandates, approvals, and alignment.", icon: "building" },
          { title: "Investment Structuring", text: "Capital architecture and bankability.", icon: "briefcase" },
          { title: "Design", text: "Engineering and master planning.", icon: "layers" },
          { title: "Development", text: "Construction and systems integration.", icon: "crane" },
          { title: "Operations", text: "Commissioning and performance management.", icon: "anchor" },
          { title: "Long-term Management", text: "Lifecycle stewardship and value growth.", icon: "globe" },
        ],
      },
      {
        type: "feature-cards",
        eyebrow: "Our Ecosystem",
        heading: "A structured partner network",
        intro: "Not logos for show — a deliberately structured ecosystem across six partner classes.",
        columns: 3,
        items: [
          { icon: "briefcase", title: "Strategic Partners" },
          { icon: "bolt", title: "Technology Partners" },
          { icon: "building", title: "Government Partners" },
          { icon: "clipboard", title: "Academic Partners" },
          { icon: "layers", title: "Investment Partners" },
          { icon: "globe", title: "International Organizations" },
        ],
      },
    ],
    cta: { label: "Start a Conversation", href: "/contact" },
  },

  insights: {
    eyebrow: "Insights",
    title: "Insights",
    intro:
      "Leadership thought, industry reports, whitepapers, research, and media from Promax Global — perspectives on ports, trade, energy transition, digital economy, and national development.",
    metaDescription:
      "Promax Global Insights — articles, leadership thoughts, industry reports, whitepapers, research, media, events, and videos on ports, trade, energy, and national development.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Explore",
        heading: "Knowledge, research & media",
        intro: "New Promax Global publications and media are being curated. Explore the streams below.",
        columns: 4,
        items: [
          { icon: "clipboard", title: "Articles", text: "Short-form perspective on markets and mandates." },
          { icon: "briefcase", title: "Leadership Thoughts", text: "Views from the Promax Global leadership." },
          { icon: "layers", title: "Industry Reports", text: "Sector analysis across ports, trade, and energy." },
          { icon: "compass", title: "Whitepapers", text: "In-depth positions on infrastructure and policy." },
          { icon: "globe", title: "Research", text: "Tri-regional development and economic research." },
          { icon: "anchor", title: "Media", text: "Press, coverage, and announcements." },
          { icon: "building", title: "Events", text: "Forums, roundtables, and roadshows." },
          { icon: "bolt", title: "Videos", text: "Films and briefings from across the group." },
        ],
      },
    ],
    cta: { label: "Contact the Press Office", href: "/contact" },
  },
};
