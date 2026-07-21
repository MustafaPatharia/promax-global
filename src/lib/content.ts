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
        type: "team-photos",
        eyebrow: "Corporate Leadership",
        heading: "The people behind the group",
        intro: "Strategic direction, structured governance, and operational leadership across six portfolios.",
        members: [
          { name: "H.E. Louai Mohamed Ali", role: "Chairman", photo: "b029c743_Mohamed_Ali.png" },
          { name: "Group Chief Executive", role: "Group CEO", photo: "50f8d446_CEO_1_.png" },
          { name: "Board of Directors", role: "Governance & Oversight" },
          { name: "Executive Office", role: "Group Operations" },
        ],
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
      { value: "25+", label: "Countries — Global Presence" },
      { value: "8", label: "Mandated Projects" },
      { value: "6", label: "Core Portfolios" },
      { value: "50+", label: "Active Terminal Advisories" },
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
          { image: "gallery-trade-corridors.jpg", icon: "globe", title: "Trade corridors" },
          { image: "gallery-port-operations.jpg", icon: "anchor", title: "Port operations" },
          { image: "gallery-industrial-zones.jpg", icon: "crane", title: "Industrial zones" },
          { image: "gallery-digital-infrastructure.jpg", icon: "layers", title: "Digital infrastructure" },
        ],
      },
    ],
    cta: { label: "Submit a Partnership Enquiry", href: "/reach-us" },
  },

  "invest-with-us": {
    eyebrow: "Investment Opportunities",
    title: "Invest With Us",
    heroVideo: "digital-globe-iot-network-loop.mp4",
    heroStyle: "kenburns",
    intro:
      "Access a curated portfolio of mandated infrastructure projects, trade hubs, energy assets, and technology projects across high-growth emerging markets — backed by UAE government alignment and Promax United Group patronage.",
    metaDescription:
      "Invest with Promax Global — mandated port, infrastructure, logistics, energy, fintech, and food-security projects across GCC, Africa, India, and Asia.",
    blocks: [
      {
        type: "feature-cards",
        eyebrow: "Why Invest With Promax Global",
        heading: "Institutional strength, mandated rights",
        columns: 3,
        items: [
          { icon: "briefcase", title: "Institutional credibility", text: "Billion-dollar group backing and government alignment." },
          { icon: "layers", title: "Mandated projects", text: "Government-backed investment rights, ~$1B each." },
          { icon: "globe", title: "Global presence", text: "Multi-country operations across emerging markets." },
          { icon: "compass", title: "Resilient portfolios", text: "Diversified across ports and logistics, skills and education, AI and fintech, trade hub, energy, and infrastructure." },
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
          { image: "gallery-ports-terminals.jpg", icon: "anchor", title: "Ports & terminals" },
          { image: "gallery-logistics-hubs.jpg", icon: "layers", title: "Logistics hubs" },
          { image: "gallery-industrial-manufacturing.jpg", icon: "crane", title: "Industrial & manufacturing" },
          { image: "gallery-real-estate.jpg", icon: "building", title: "Real estate" },
          { image: "gallery-food-security.jpg", icon: "globe", title: "Food security" },
          { image: "gallery-energy-resources.jpg", icon: "bolt", title: "Energy & resources" },
        ],
      },
    ],
    stats: [
      { value: "8", label: "Mandated Projects (~$1B each)" },
      { value: "25+", label: "Countries of Operation" },
      { value: "6", label: "Resilient Portfolios" },
      { value: "4", label: "Regions — GCC · Africa · India · Asia" },
    ],
    cta: { label: "Submit Investment Interest", href: "/reach-us" },
  },

  /* ------------------------------------------------------------------ *
   * PORTFOLIO 1 — Ports & Logistics
   * One page; the nav's second-level dropdown deep-links to these sections.
   * Infrastructure was REMOVED from this portfolio (client, 2026-07-20) — it
   * lives under Infrastructure & Asset Holdings instead.
   * ------------------------------------------------------------------ */
  "ports-logistics": {
    eyebrow: "Portfolio",
    title: "Ports & Logistics",
    heroVideo: "port-night-digital-hologram-overlay.mp4",
    heroStyle: "duotone",
    intro:
      "Promax Global's Port management services cover all types of port and terminal operations, from start-ups and developing ports through to more established operations.",
    metaDescription:
      "Promax Global Ports & Logistics portfolio — port and terminal management services, advisory and planning, and strategic equipment sourcing and lifecycle management.",
    blocks: [
      // Portfolio landing → the three service sub-pages (meeting 00:38–00:41:
      // the level-2 dropdown items are their own pages, each still carrying the
      // parent portfolio name in its header).
      {
        type: "service-overlay",
        eyebrow: "Portfolio of Ports & Logistics",
        heading: "Our services",
        intro:
          "Three service lines across the portfolio — day-to-day terminal management, independent advisory and planning, and strategic equipment sourcing and lifecycle care.",
        columns: 3,
        items: [
          {
            image: "a148740f_End_to_End_Port_Operations.png",
            icon: "anchor",
            title: "Management Services",
            text: "End-to-end operation of bulk, container, liquid, and blue-port terminals.",
            href: "/portfolio/ports-logistics/management-services",
          },
          {
            image: "8af45d08_operational_performance.jpg",
            icon: "clipboard",
            title: "Advisory & Planning",
            text: "Independent, data-driven performance, engineering, and compliance reviews.",
            href: "/portfolio/ports-logistics/advisory-planning",
          },
          {
            image: "ccf444a6_Strategic_Equipment_Sourcing_Lifecycle_Management.png",
            icon: "crane",
            title: "Strategic Equipment",
            text: "Sourcing, inspection, commissioning, and full lifecycle management.",
            href: "/portfolio/ports-logistics/strategic-equipment",
          },
        ],
      },
    ],
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  /* ---- Ports & Logistics → sub-pages (level-2 dropdown = real routes) ---- */

  "ports-logistics/management-services": {
    eyebrow: "Portfolio of Ports & Logistics",
    title: "Management Services",
    heroStyle: "duotone",
    intro:
      "Promax Global's port management services cover all types of port and terminal operations, from start-ups and developing ports through to more established operations.",
    metaDescription:
      "Promax Global port management services — end-to-end operation of bulk ports, container terminals, liquid ports, logistics hubs, industrial parks, and blue ports.",
    bodyStyle: "rows",
    // Order is WHERE → WHAT (client, 2026-07-20; meeting 00:46 "where", then
    // "what"). Both now live in `blocks` so the sequence is explicit — anything
    // left in `sections` renders BEFORE all blocks and would jump the queue.
    blocks: [
      // WHERE we manage — 3×2 grid
      {
        type: "service-overlay",
        eyebrow: "Management Services",
        heading: "Where we manage",
        intro:
          "Full-spectrum management across every terminal type — from bulk and container gateways to integrated industrial and blue-port ecosystems.",
        columns: 3,
        items: [
          // Images extracted from the client content doc (word/media image18–23),
          // which pairs each photo with its caption directly — these are the
          // client's own picks, not scrape substitutes.
          { image: "mgmt-bulk-ports.png", icon: "anchor", title: "Bulk Ports" },
          { image: "mgmt-container-terminals.png", icon: "layers", title: "Container Terminals" },
          { image: "mgmt-liquid-port.jpeg", icon: "compass", title: "Liquid Port" },
          { image: "mgmt-logistics-hub.jpeg", icon: "briefcase", title: "Logistics Hub" },
          { image: "mgmt-industrial-park.jpeg", icon: "building", title: "Industrial Park" },
          { image: "mgmt-blue-ports.jpeg", icon: "ship", title: "Blue Ports" },
        ],
      },
      // WHAT it covers — Corporate Overview styling (client: "same style like
      // company overview section"). Body copy is VERBATIM from the client doc.
      {
        type: "overview",
        ghost: "Scope",
        eyebrow: "Management Services",
        heading: "What management services",
        accent: "covers",
        paragraphs: [
          "Our management teams provide unparalleled expertise for the development of modern, efficient ports – delivering the right solutions for companies looking to enhance the quality and productivity of their operations. Talk to our friendly team about what we can do to assist your terminal operations. We're always happy to take you through our capabilities online or in person.",
        ],
        image: "a148740f_End_to_End_Port_Operations.png",
        imageAlt: "End-to-end port and terminal operations",
      },
    ],
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  "ports-logistics/advisory-planning": {
    eyebrow: "Portfolio of Ports & Logistics",
    title: "Advisory & Planning",
    heroStyle: "duotone",
    intro:
      "Independent, data-driven assessments that strengthen operational performance, enhance asset reliability, and support long-term strategic development.",
    metaDescription:
      "Promax Global port advisory and planning — operational performance reviews, technical and engineering assessments, safety and compliance, digitalization, capacity planning, and commercial advisory.",
    blocks: [
      // ADVISORY — 4×2 grid of the 8 advisory disciplines (meeting 00:53)
      {
        type: "service-freight",
        eyebrow: "Advisory & Planning",
        heading: "Advisory & Specialist Services",
        intro:
          "Promax Global provides high-end Port Advisory & Integrated Terminal Performance and operational excellence services to ports and terminals across the Middle East, Africa, and Asia. We deliver independent, data-driven assessments that strengthen operational performance, enhance asset reliability, and support long-term strategic development.",
        columns: 4,
        items: [
          {
            icon: "clipboard",
            image: "4b0e1e70_operational_performance_efficiency_reviews.jpg",
            title: "Operational Performance & Efficiency Reviews",
            checklist: [
              "End-to-end terminal operations assessment",
              "Yard, quay, and gate process optimization",
              "Vessel turnaround time improvement strategies",
              "Equipment utilization and productivity benchmarking",
              "Workforce planning and shift-pattern optimization",
            ],
          },
          {
            icon: "crane",
            image: "a3053c46_technical_engineering_assessments.jpg",
            title: "Technical & Engineering Assessments",
            checklist: [
              "Structural integrity assessments for STS, RTG, RMGC, MHC",
              "Mechanical, electrical, and PLC system evaluations",
              "Asset condition surveys and lifecycle analysis",
              "Reliability-Centered Maintenance (RCM) planning",
              "Failure-mode analysis and risk mitigation",
            ],
          },
          {
            icon: "compass",
            image: "07efc8f7_safety_compliance_risk_management.jpg",
            title: "Safety, Compliance & Risk Management",
            checklist: [
              "HSE audits aligned with international port standards",
              "Emergency response planning and incident-prevention programs",
              "Safety culture development and competency assessments",
              "Regulatory compliance reviews (ISPS, IMO, OSHA, etc.)",
            ],
          },
          {
            icon: "globe",
            image: "13b05caf_digitalization_smart_port_solutions.jpg",
            title: "Digitalization & Smart Port Solutions",
            checklist: [
              "Terminal automation readiness studies",
              "OCR, RFID, and gate automation advisory",
              "Digital twin development for cranes and yard assets",
              "AI-driven operational analytics and predictive maintenance",
              "Port community system (PCS) integration guidance",
            ],
          },
          {
            icon: "building",
            image: "1c6a02f1_infrastructure_capacity_planning.jpg",
            title: "Infrastructure & Capacity Planning",
            checklist: [
              "Berth productivity and quay wall capacity studies",
              "Yard layout optimization and traffic-flow redesign",
              "Equipment fleet planning and procurement advisory",
              "Expansion feasibility studies and master planning support",
            ],
          },
          {
            icon: "bolt",
            image: "801a58c0_sustainability_green_port_transformation.jpg",
            title: "Sustainability & Green Port Transformation",
            checklist: [
              "Energy-efficiency audits for port equipment",
              "RTGC electrification and hybrid-conversion feasibility",
              "Carbon-reduction strategies and ESG compliance",
              "Shore power (cold ironing) readiness assessments",
              "Lighting-as-a-Service and renewable-energy integration",
            ],
          },
          {
            icon: "briefcase",
            image: "8fccce35_commercial_strategic_advisory.jpg",
            title: "Commercial & Strategic Advisory",
            checklist: [
              "Tariff structure review and revenue-enhancement strategies",
              "Concession agreement advisory and PPP structuring",
              "Vendor evaluation and technical due diligence",
              "Cost-benefit analysis for new technologies and equipment",
            ],
          },
          {
            icon: "layers",
            image: "0b46d0da_training_change.jpg",
            title: "Training, Capability Building & Change Management",
            checklist: [
              "Tailored training programs for operators, technicians, and supervisors",
              "Leadership development for terminal management teams",
              "Change-management support for digital and operational transitions",
              "LMS-based competency development frameworks",
            ],
          },
        ],
      },
    ],
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  "ports-logistics/strategic-equipment": {
    eyebrow: "Portfolio of Ports & Logistics",
    title: "Strategic Equipment",
    heroStyle: "duotone",
    intro:
      "End-to-end sourcing, inspection, commissioning, and lifecycle management for the mission-critical equipment that determines a port's capacity and competitiveness.",
    metaDescription:
      "Promax Global strategic equipment services — sourcing, technical validation, vendor assessment, third-party inspection, commissioning, and full equipment lifecycle management for ports and terminals.",
    blocks: [
      // STRATEGIC EQUIPMENT
      {
        type: "feature-cards",
        eyebrow: "Strategic Equipment",
        heading: "Strategic Sourcing",
        intro:
          "We provide end-to-end sourcing support for mission-critical and strategic equipment, including specification development, technical validation, vendor assessment, and independent third-party inspections. From manufacturing oversight to installation and commissioning, our experts ensure full compliance, quality assurance, and operational readiness.",
        columns: 4,
        tone: "dark",
        items: [
          { icon: "crane", title: "Container Cranes" },
          { icon: "layers", title: "Spreaders" },
          { icon: "anchor", title: "Grabs" },
          { icon: "compass", title: "Ship Unloaders" },
          { icon: "building", title: "Stacker & Reclaimers" },
          { icon: "bolt", title: "Conveyors" },
          { icon: "briefcase", title: "Forklifts" },
          { icon: "globe", title: "Reachstackers" },
          { icon: "crane", title: "Mobile Harbour Cranes" },
          { icon: "crane", title: "Luffing Cranes" },
        ],
      },
      {
        type: "service-freight",
        eyebrow: "Strategic Equipment",
        heading: "Equipment Life Cycle Management",
        intro:
          "Comprehensive, end-to-end support across the entire equipment lifecycle to maximize uptime, performance, safety, and long-term asset value. Our teams ensure every asset remains reliable, compliant, and operationally aligned from commissioning to retirement.",
        items: [
          {
            icon: "crane",
            title: "Engineering Capabilities",
            checklist: [
              "Asset Reliability Engineering",
              "Annual Maintenance Contracts",
              "Corporate Rebranding & Painting",
              "Residual Life Analysis",
              "Installation & Commissioning",
              "Structural Inspections",
            ],
          },
        ],
      },
    ],
    quote: {
      text:
        "Strategic equipment are the backbone of modern port operations. They directly influence a port's capacity, efficiency, safety and competitiveness, making them one of the most critical investment areas for any maritime gateway or logistics hub.",
      who: "Promax Global — Strategic Equipment",
    },
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  /* ------------------------------------------------------------------ *
   * PORTFOLIO 2 — Skills & Education
   * ------------------------------------------------------------------ */
  "skills-education": {
    eyebrow: "Portfolio",
    title: "Skill Development & Education",
    intro:
      "To establish a Tri-Regional Socio-Economic Development Alliance covering India, GCC, and Africa — empowering students, women, entrepreneurs for a bright future.",
    metaDescription:
      "Promax Global Skills & Education portfolio — a tri-regional alliance across India, GCC, and Africa covering skills, women empowerment, startups, fintech inclusion, agriculture, and UN SDG-aligned programs.",
    bodyStyle: "rows",
    sections: [
      {
        heading: "Empowering students, women, entrepreneurs for a bright future",
        body:
          "Recognizing the shared commitment to inclusive socio-economic development, women empowerment, skills and employment, digital finance inclusion, agriculture and rural transformation, entrepreneurship, Startups & Incubation Centres and UN SDG-aligned programs.",
        image: "75287166_Skills_Education.jpg",
        imageAlt: "Skills and education programs",
      },
    ],
    blocks: [
      {
        type: "service-freight",
        eyebrow: "Programs",
        heading: "Program areas",
        intro:
          "A tri-regional platform connecting India, the GCC, and Africa across skills, enterprise, finance, agriculture, and policy.",
        items: [
          {
            icon: "clipboard",
            title: "Skill Development & Workforce Mobility",
            checklist: [
              "Establish tri-regional skill academies.",
              "Develop standardized certifications for India–GCC–Africa mobility.",
              "Implement youth apprenticeship and exchange programs.",
            ],
          },
          {
            icon: "globe",
            title: "Women Empowerment",
            checklist: [
              "Launch women entrepreneurship accelerators.",
              "Create a GCC–India–Africa Women Business Council.",
              "Promote women participation in logistics, digital finance, and agribusiness.",
            ],
          },
          {
            icon: "bolt",
            title: "Startup & Incubation Centre",
            checklist: [
              "Launch startup platforms",
              "Facilitate Institutional Investors, Angel Investors, Corporate Funds",
              "Facilitate setting up Incubation Centres with Educational Institutes",
            ],
          },
          {
            icon: "briefcase",
            title: "Digital Finance & Fintech Inclusion",
            checklist: [
              "Implement digital finance inclusion programs for MSMEs, farmers, and women.",
              "Support fintech pilots and regulatory sandbox collaboration.",
              "Enable digital trade and e-commerce adoption.",
            ],
          },
          {
            icon: "layers",
            title: "Agriculture & Rural Development",
            checklist: [
              "Enhance farmer productivity through training and digital tools.",
              "Modernize Agri-logistics, cold chain, and market linkages.",
              "Facilitate FPO (Farmer Producer Organization) exchange programs.",
            ],
          },
          {
            icon: "compass",
            title: "Entrepreneurship & Innovation",
            checklist: [
              "Launch a tri-regional startup accelerator.",
              "Facilitate MSME market access across India, GCC, and Africa.",
              "Organize investor roadshows and innovation missions.",
            ],
          },
          {
            icon: "globe",
            title: "UN SDG-Aligned Programs",
            checklist: [
              "Jointly design SDG-focused initiatives (SDG 4, 5, 8, 9, 10, 17).",
              "Promote climate resilience, green skills, and renewable energy programs.",
            ],
          },
          {
            icon: "building",
            title: "Policy Advocacy & Research",
            checklist: [
              "Co-author white papers and policy briefs.",
              "Conduct tri-regional policy forums and roundtables.",
              "Engage with ministries, regulators, and development agencies.",
            ],
          },
        ],
      },
    ],
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  /* ------------------------------------------------------------------ *
   * PORTFOLIO 3 — AI & Fintech  (COMING SOON per client 2026-07-20)
   * Content exists in the doc but the client has not released these pages.
   * ------------------------------------------------------------------ */
  "ai-fintech": {
    eyebrow: "Portfolio",
    title: "AI & Fintech",
    intro: "Coming soon.",
    metaDescription:
      "Promax Global AI & Fintech portfolio — digital infrastructure and inclusive financial systems. Page coming soon.",
    comingSoon: true,
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  /* ------------------------------------------------------------------ *
   * PORTFOLIO 4 — Trade Hub  (COMING SOON per client 2026-07-20)
   * ------------------------------------------------------------------ */
  "trade-hub": {
    eyebrow: "Portfolio",
    title: "Trade Hub",
    intro: "Coming soon.",
    metaDescription:
      "Promax Global Trade Hub portfolio — integrated trade hubs and food security systems. Page coming soon.",
    comingSoon: true,
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  /* ------------------------------------------------------------------ *
   * PORTFOLIO 5 — Smart & Green Energy
   * ------------------------------------------------------------------ */
  "smart-green-energy": {
    eyebrow: "Portfolio",
    title: "Smart Energy Management",
    heroVideo: "recycle-symbol-sign-sunset.mp4",
    heroStyle: "letterbox",
    intro:
      "Our Smart Energy Management Solutions offers intelligent monitoring, control, and optimization of energy consumption across industrial, port, logistics, and commercial environments. It integrates IoT sensors, advanced analytics, automation, and energy-efficient technologies to reduce costs, improve reliability, and support national sustainability goals.",
    metaDescription:
      "Promax Global Smart & Green Energy portfolio — smart energy management, renewable integration, hybrid equipment conversions, and ESG-aligned decarbonization programs.",
    bodyStyle: "rows",
    sections: [
      {
        heading: "Green Energy",
        body:
          "Promax Global delivers integrated green energy solutions — from renewable integration and hybrid equipment conversions to smart energy management and ESG-aligned decarbonization programs. We help ports, industries, and government entities transition to cleaner, more efficient, and future-ready operations.",
        image: "3065eb1c_Smart_Green_Energy.jpg",
        imageAlt: "Smart and green energy systems",
      },
    ],
    blocks: [
      {
        type: "service-freight",
        eyebrow: "Our Green Energy Portfolio",
        heading: "Delivery capabilities",
        items: [
          {
            icon: "bolt",
            title: "Solar & Renewable Integration",
            text: "Design, deployment, and optimization of solar PV systems, hybrid microgrids, and renewable-powered infrastructure for ports, logistics hubs, and industrial zones.",
          },
          {
            icon: "crane",
            title: "Hybrid & Electric Equipment Conversions",
            text: "Electrification and hybridization of cranes, RTGs, terminal tractors, and industrial machinery to reduce emissions and fuel dependency.",
          },
          {
            icon: "clipboard",
            title: "Energy-Efficiency Audits & Optimization",
            text: "Comprehensive assessments to identify energy losses, optimize consumption, and improve asset performance across facilities and equipment.",
          },
          {
            icon: "globe",
            title: "Smart Energy Management Systems (SEMS)",
            text: "IoT-enabled monitoring, analytics, and automation platforms that provide real-time visibility, predictive insights, and intelligent control of energy usage.",
          },
          {
            icon: "building",
            title: "Sustainable Infrastructure Upgrades",
            text: "LED retrofits, efficient drives, regenerative systems, and low-carbon engineering solutions that extend asset life and reduce operational overhead.",
          },
          {
            icon: "layers",
            title: "Carbon Reduction & ESG Compliance Programs",
            text: "Roadmaps, reporting frameworks, and implementation strategies aligned with national sustainability mandates and global ESG standards.",
          },
        ],
      },
      {
        type: "feature-cards",
        eyebrow: "Who We Work With",
        heading: "Reach out to Promax Global if you are",
        columns: 4,
        tone: "dark",
        items: [
          { icon: "building", title: "Government bodies & authority" },
          { icon: "briefcase", title: "Sovereign wealth funds" },
          { icon: "layers", title: "Private & institutional investors" },
          { icon: "globe", title: "Technology providers & OEMs" },
          { icon: "crane", title: "EPC contractors & integrators" },
          { icon: "anchor", title: "Industrial & port operators" },
          { icon: "bolt", title: "Utility companies & regulators" },
        ],
      },
    ],
    cta: { label: "Reach Us", href: "/reach-us" },
  },

  /* ------------------------------------------------------------------ *
   * PORTFOLIO 6 — Infrastructure & Asset Holdings
   * ------------------------------------------------------------------ */
  "infrastructure-asset-holdings": {
    eyebrow: "Portfolio",
    title: "Infrastructure & Asset Holdings",
    heroVideo: "aluminium-baled-cubes-recycling.mp4",
    heroStyle: "duotone",
    intro:
      "Promax Global offers a diversified portfolio of mandated, acquired, and high-value strategic projects across ports, logistics, industrial development, food security, real estate, manufacturing, smart infrastructure, and natural resources. These opportunities are structured for institutional investors, sovereign funds, private equity, and global operators seeking long-term, scalable, and regulator-aligned investments.",
    metaDescription:
      "Promax Global Infrastructure & Asset Holdings — eight mandated strategic projects across ports, logistics, industry, real estate, smart cities, and mining, spanning GCC, Africa, Asia, and the Atlantic.",
    bodyStyle: "rows",
    sections: [
      {
        heading: "Our Strategic Investment Portfolio",
        body:
          "Our portfolio spans GCC, Africa, Asia, and the Atlantic region, enabling investors to participate in high-growth markets with strong government alignment and clear development mandates.",
        image: "87eaa230_Multi_Dimensional_Portfolio.jpeg",
        imageAlt: "Multi-dimensional strategic investment portfolio",
      },
    ],
    blocks: [
      {
        type: "service-freight",
        eyebrow: "Mandated Projects",
        heading: "Strategic investment opportunities",
        items: [
          {
            icon: "anchor",
            title: "Blue Port Project – Atlantic Ocean Fisheries Rights",
            text: "Exclusive rights to develop a Blue Port ecosystem with access to fisheries in the Atlantic Ocean. A high-growth opportunity aligned with global food security and export markets.",
            checklist: [
              "Sustainable fisheries operations",
              "Processing & export facilities",
              "Cold-chain & logistics",
              "Maritime fleet expansion",
            ],
          },
          {
            icon: "building",
            title: "Dry Port Development Mandate – Burkina Faso",
            text: "Official mandate to develop a national dry port and logistics hub, strengthening West Africa's trade corridors and regional integration.",
            checklist: [
              "ICD & bonded warehousing",
              "Multimodal logistics",
              "Rail/road connectivity",
              "Industrial & commercial zones",
            ],
          },
          {
            icon: "crane",
            title: "Bulk / BreakBulk Port – Lumut, Malaysia",
            text: "Co-development of a bulk and break-bulk terminal in a strategic Southeast Asian location. Ideal for serving minerals, agri-commodities, and industrial cargo markets.",
            checklist: [
              "Berths & port infrastructure ready",
              "Material handling systems",
              "Storage yards & silos",
              "Marine services",
            ],
          },
          {
            icon: "layers",
            title: "Industrial Manufacturing Investments – Duqm, Oman",
            text: "Opportunities to establish manufacturing units within our industrial park in SEZAD, supported by Duqm's tax incentives and global connectivity.",
            checklist: [
              "Light & Medium Industry manufacturing",
              "Fabrication & engineering",
              "Logistics & supply-chain industries",
              "Renewable & greentech manufacturing",
            ],
          },
          {
            icon: "briefcase",
            title: "Freehold Real Estate Development – Duqm, Oman",
            text: "Investment participation in freehold residential, commercial, and mixed-use developments, leveraging Duqm's rapid transformation into a major industrial and logistics hub.",
            checklist: [
              "Residential communities",
              "Commercial complexes",
              "Hospitality assets",
              "Workforce housing",
            ],
          },
          {
            icon: "compass",
            title: "Trailer Manufacturing Plant – UAE (Global Brand Partnership)",
            text: "Strategic partnership to establish a trailer manufacturing facility for a globally reputed brand, positioning investors in the GCC's fast-growing logistics equipment market.",
            checklist: [
              "Manufacturing line setup",
              "Technology transfer",
              "Regional distribution",
              "Export-oriented production",
            ],
          },
          {
            icon: "globe",
            title: "Smart City Development Project – United Arab Emirates",
            text: "A next-generation Smart City in the UAE integrating digital infrastructure, sustainable mobility, and intelligent urban systems — a flagship project aligned with the UAE's national digital transformation and sustainability vision.",
            checklist: [
              "Smart utilities & energy systems",
              "Digital governance platforms",
              "Smart mobility & EV infrastructure",
              "Residential & commercial smart districts",
              "IoT-enabled public services",
            ],
          },
          {
            icon: "bolt",
            title: "Mining Rights & Natural Resource Development",
            text: "Access to mining rights in select high-value mineral regions — a strategic opportunity in a sector with strong global demand and long-term value potential.",
            checklist: [
              "Exploration & extraction",
              "Mineral processing units",
              "Export-oriented value chains",
              "Infrastructure development around mining clusters",
            ],
          },
        ],
      },
      {
        type: "feature-cards",
        eyebrow: "Why Invest",
        heading: "Why Invest with Promax Global",
        columns: 3,
        tone: "dark",
        items: [
          { icon: "clipboard", title: "Mandated & exclusive project rights" },
          { icon: "building", title: "Government-aligned development frameworks" },
          { icon: "globe", title: "Multi-country presence across GCC, Africa, Asia, and the Atlantic" },
          { icon: "layers", title: "High-growth sectors with long-term demand" },
          { icon: "compass", title: "Strong regulatory, operational, and execution capability" },
          { icon: "briefcase", title: "Flexible investment models (JV, PPP, equity, BOT/BOOT, concessions)" },
        ],
      },
    ],
    cta: { label: "Invest With Us", href: "/invest-with-us" },
  },
};
