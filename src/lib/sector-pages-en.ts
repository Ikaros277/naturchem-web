import type { SectorPageData } from "./sector-pages";

export const sectorPagesEn: Record<string, SectorPageData> = {
  index: {
    metadataTitle: "Facilities and technologies – measurement, studies and permitting documentation",
    metadataDescription:
      "Measurement, studies and permitting documentation for boiler plants, paint shops, biogas plants, welding shops, recycling, agricultural operations, HVAC and other technologies.",
    eyebrow: "By facility type",
    heroTitle: "Facilities and technologies — measurement, studies and authority documentation",
    heroLead:
      "Which facility types we support with measurement, studies and documentation — from boiler plants and paint shops through biogas to recycling or HVAC.",
    introHeading: "Manufacturing, energy, agriculture and other sectors",
    introParagraphs: [
      "We work across sectors — from manufacturing and energy through waste and recycling to farms, food processing and site technologies. For each facility type we address measurement, studies and authority documentation in the context of the specific technology, not just a generic service list."
    ],
    introMuted:
      "Find the sector closest to you — on each facility page you will see typical situations, related services and how a project usually proceeds.",
    assessmentHeading: "Not sure which category your facility belongs to?",
    assessmentIntro:
      "Send us a brief description of the facility, technology, authority requirement or project documentation. We will determine whether measurement, a study, an expert assessment, an operating manual or other documentation is needed.",
    assessmentSubheading: "What helps us with an initial assessment",
    assessmentItems: [
      "brief description of the facility, technology or project",
      "purpose of the engagement: measurement, study, EIA, assessment, operating manual or authority requirement",
      "available documentation: project, operating manual, operating permit, technical data sheets",
      "data on operating mode, capacity, stacks, noise sources or transport",
      "photographs of technology, stacks, measurement points or the facility surroundings",
      "any communication with KHS, ČIŽP, the regional authority or building authority"
    ]
  },
  lakovny: {
    metadataTitle: "Emission and workplace environment measurement in paint shops",
    metadataDescription:
      "Sector overview for paint shops: VOC/TOC, extraction, filtration, workplace exposure and documentation for regional authorities, ČIŽP and KHS.",
    title: "Paint shops",
    slug: "lakovny",
    intro:
      "On a paint line, VOC releases to air and workplace exposure go hand in hand. We measure both and link the results to the operating manual and authority requirements.",
    typicalProblems: [
      "fluctuating emissions depending on application and curing mode",
      "insufficient or uneven extraction",
      "missing link to the operating manual and regional authority / ČIŽP requirements",
      "incomplete documentation on solvents and mixtures used"
    ],
    docs: [
      "technical and safety data sheets for coatings used",
      "technology description, line operating modes and capacity",
      "photographs of stacks, filters and measurement points",
      "current authority decision or internal measurement objective"
    ],
    process: [
      "we assess paint shop technology, operating modes and the purpose of measurement",
      "we define scope for emissions (VOC/TOC, ancillary parameters) and the workplace",
      "we carry out measurement under representative conditions",
      "we prepare a protocol and recommend practical measures"
    ],
    outputs: [
      "emission and/or workplace environment measurement protocol",
      "expert commentary on results and operational risk points",
      "documentation for administrative proceedings or internal technical measures"
    ],
    pitfalls: [
      "measurement outside the real operating mode",
      "outdated chemical substance documentation",
      "underestimating the technical condition of extraction and filtration"
    ],
    relatedServices: [
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Workplace environment measurement", href: "/sluzby/pracovni-prostredi" },
      { title: "Dispersion studies", href: "/sluzby/rozptylove-studie" }
    ],
    faq: [
      {
        q: "When should VOC/TOC measurement be addressed in a paint shop?",
        a: "Most often when fulfilling operating manual conditions, changing technology or meeting an authority requirement."
      },
      {
        q: "Is workplace environment assessment also required?",
        a: "Yes — paint shops often need a combination of emission measurement and employee exposure assessment."
      }
    ]
  },
  kotelny: {
    metadataTitle: "Emission measurement for boiler plants and combustion sources",
    metadataDescription:
      "Sector overview for boiler plants: NOx, CO, O₂, load modes, measurement points and documentation for operators and authorities.",
    title: "Boiler plants and combustion sources",
    slug: "kotelny",
    intro:
      "Does an authority or operating manual require measurement at a specific load? We deliver an emission protocol linked to your permit and actual boiler operation.",
    typicalProblems: [
      "measurement at a non-representative load mode",
      "unclear scope of components under the authority decision",
      "insufficient description of the measurement point and operating conditions",
      "fuel changes without updating related documentation"
    ],
    docs: [
      "operating permit decision and operating manual",
      "boiler technical parameters, fuel and load modes",
      "measurement point and flue gas path information",
      "previous protocols or ČIŽP / regional authority requirement"
    ],
    process: [
      "we clarify the purpose of measurement and legislative context",
      "we verify the measurement point and suitable operating mode",
      "we carry out measurement (NOx, CO, SO₂, O₂, ancillary parameters)",
      "we prepare a protocol and recommendations for next steps"
    ],
    outputs: [
      "combustion source emission measurement protocol",
      "evaluation against operating and authority requirements",
      "expert recommendations for technical or operational measures"
    ],
    pitfalls: [
      "missing link between measurement and the operating manual",
      "inaccurate fuel and operating mode documentation",
      "underestimating measurement point preparation"
    ],
    relatedServices: [
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Expert assessments", href: "/sluzby/odborne-posudky" },
      { title: "Dispersion studies", href: "/sluzby/rozptylove-studie" }
    ],
    faq: [
      {
        q: "When is one-off emission measurement required for a boiler plant?",
        a: "Typically when fulfilling authority decision conditions, changing technology or following an inspection."
      },
      {
        q: "Can you also assess the measurement point?",
        a: "Yes — before measurement we verify feasibility and representativeness of the measurement point."
      }
    ]
  },
  svarovny: {
    metadataTitle: "Workplace environment and emission measurement in welding shops",
    metadataDescription:
      "Sector overview for welding shops: dust, metals, NOx, ozone, local extraction, job categorisation and documentation for KHS.",
    title: "Welding shops",
    slug: "svarovny",
    intro:
      "Need documentation for job categorisation or extraction design in a welding shop? We measure exposure and noise and propose practical measures.",
    typicalProblems: [
      "incomplete overview of materials and additives used",
      "fluctuating exposure depending on welding type and shift pattern",
      "insufficient local extraction under real production conditions",
      "missing link between results and OHS / KHS requirements"
    ],
    docs: [
      "description of work operations and shift patterns",
      "material list and safety data sheets",
      "description of extraction, ventilation and layout",
      "KHS requirements or internal OHS objectives"
    ],
    process: [
      "we identify key exposure factors for the specific workplace",
      "we set up measurement under a representative operating mode",
      "we evaluate results in relation to the purpose (KHS/OHS)",
      "we recommend practical technical and organisational measures"
    ],
    outputs: [
      "workplace environment measurement protocol",
      "documentation for job categorisation",
      "recommendations to reduce employee exposure"
    ],
    pitfalls: [
      "measurement without knowledge of shift patterns and work operations",
      "outdated safety data sheets",
      "underestimating local extraction effectiveness"
    ],
    relatedServices: [
      { title: "Workplace environment measurement", href: "/sluzby/pracovni-prostredi" },
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Noise measurement and acoustics", href: "/sluzby/mereni-hluku" }
    ],
    faq: [
      {
        q: "What matters most for measurement in a welding shop?",
        a: "Correct identification of work operations, shift patterns and materials used, including safety data sheets."
      },
      {
        q: "Can the measurement be used for KHS?",
        a: "Yes — we prepare the output as documentation for both administrative and internal purposes."
      }
    ]
  },
  sklarstvi: {
    metadataTitle: "Emission measurement and expert documentation for glass operations",
    metadataDescription:
      "Sector overview for glassmaking: furnace sources, measurement points, filtration, operating modes and link to permitting documentation.",
    title: "Glass operations",
    slug: "sklarstvi",
    intro:
      "For furnace sources, both the measurement mode and the measurement point matter. We prepare emissions, dispersion and operational documentation for glass operations.",
    typicalProblems: [
      "unstable or cyclic furnace operation during measurement",
      "limited access to measurement points",
      "unclear link between measurement results and operational documentation",
      "underestimating connection to filtration and separation equipment"
    ],
    docs: [
      "technical description of the furnace and downstream technology",
      "operating manual and relevant decision requirements",
      "photographic documentation of stacks and measurement points",
      "description of the planned operating mode during measurement"
    ],
    process: [
      "we assess technological conditions and measurement objectives",
      "we verify measurement points and the execution mode",
      "we carry out emission and ancillary parameter measurement",
      "we prepare output with commentary for operational and administrative purposes"
    ],
    outputs: [
      "emission measurement protocol",
      "evaluation of operational context",
      "expert recommendations for follow-up steps"
    ],
    pitfalls: [
      "measurement without a representative furnace mode",
      "insufficient description of source technical conditions",
      "incomplete documentation for follow-up proceedings"
    ],
    relatedServices: [
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Dispersion studies", href: "/sluzby/rozptylove-studie" },
      { title: "EIA and project notification", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Why is furnace mode important during measurement at glass plants?",
        a: "Emission results depend strongly on the specific technological mode, so representative measurement is essential."
      },
      {
        q: "Can you also help with authority documentation?",
        a: "Yes — we prepare outputs usable in operations and in communication with authorities."
      }
    ]
  },
  "odpady-recyklace": {
    metadataTitle: "Studies and measurement for waste and recycling facilities",
    metadataDescription:
      "Sector overview for waste and recycling: dust, noise, transport, dispersion, EIA and documentation for permitting proceedings.",
    title: "Waste and recycling",
    slug: "odpady-recyklace",
    intro:
      "Changing site capacity or addressing EIA for waste and recycling? We combine noise, dust, transport and dispersion into one documentation package for proceedings.",
    typicalProblems: [
      "capacity changes without timely update of expert documentation",
      "combined technological noise and transport load",
      "dust within the site and in surrounding development",
      "unclear link to EIA and follow-up permitting processes"
    ],
    docs: [
      "site layout and surrounding development",
      "project documentation and facility capacities",
      "technology and transport operating modes",
      "authority requirement or purpose of expert assessment"
    ],
    process: [
      "we assess project risk areas (noise, dust, transport, air quality)",
      "we assemble a combination of measurement and studies according to the proceedings objective",
      "we prepare expert documentation including measure variants",
      "we deliver output usable for the investor and authorities"
    ],
    outputs: [
      "noise or dispersion study",
      "protocols from related measurements",
      "expert recommendations for technical and organisational measures"
    ],
    pitfalls: [
      "addressing individual topics in isolation without overall context",
      "incomplete input data on technology and transport",
      "late involvement of expert documentation in the project"
    ],
    relatedServices: [
      { title: "Dispersion studies", href: "/sluzby/rozptylove-studie" },
      { title: "Noise studies", href: "/sluzby/hlukove-studie" },
      { title: "EIA and project notification", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "What is the most common problem at recycling sites?",
        a: "The combined impact of technology and transport on noise and air quality in the surroundings."
      },
      {
        q: "Can documentation be prepared for project variants?",
        a: "Yes — we routinely assess variant operating and measure scenarios."
      }
    ]
  },
  "tepelna-cerpadla-vzt": {
    metadataTitle: "Noise assessments for heat pumps and HVAC",
    metadataDescription:
      "Noise assessment for heat pump and ventilation technologies for occupancy approval, complaints and technical measure design.",
    title: "Heat pumps and HVAC",
    slug: "tepelna-cerpadla-vzt",
    intro:
      "Installing an outdoor unit or HVAC and addressing noise towards neighbours? We assess daytime and nighttime scenarios before occupancy approval.",
    typicalProblems: [
      "unsuitable outdoor unit location relative to development",
      "underestimating nighttime operating mode",
      "unclear difference between verification measurement and a study",
      "ineffective measures without analysis of the dominant source"
    ],
    docs: [
      "heat pump / HVAC technical data sheets",
      "source location relative to surrounding buildings",
      "equipment operating modes (day/night)",
      "occupancy approval or authority requirement"
    ],
    process: [
      "we clarify whether measurement, a study or a combination is appropriate",
      "we set methodology and key operating scenarios",
      "we carry out measurement or model-based assessment",
      "we recommend technical measures and deliver documentation for proceedings"
    ],
    outputs: [
      "noise measurement protocol or noise study",
      "impact assessment on the surroundings",
      "noise control recommendations for implementation"
    ],
    pitfalls: [
      "measurement outside a representative technology mode",
      "missing inputs for nighttime operation",
      "technical solution without verified effectiveness"
    ],
    relatedServices: [
      { title: "Noise measurement and noise studies", href: "/sluzby/mereni-hluku" },
      { title: "Noise studies", href: "/sluzby/hlukove-studie" },
      { title: "Contact", href: "/kontakt" }
    ],
    faq: [
      {
        q: "Is measurement alone always sufficient for a heat pump?",
        a: "Not always. For new projects a noise study before implementation is often more appropriate or required."
      },
      {
        q: "Do you also design measures?",
        a: "Yes — we propose technical and organisational measures based on dominant noise sources."
      }
    ]
  },
  "bioplyn-biometan": {
    metadataTitle: "Dispersion and noise studies for biogas and biomethane",
    metadataDescription:
      "Sector overview for biogas plants and biomethane: air quality, odour, noise, transport and documentation for EIA and permitting.",
    title: "Biogas and biomethane",
    slug: "bioplyn-biometan",
    intro:
      "Preparing biogas or biomethane and need to align dispersion, noise and EIA? We prepare documentation based on actual technology, not only after authority comments.",
    typicalProblems: [
      "delayed dispersion and noise work until after authority comments",
      "incomplete inputs on technology operating modes",
      "underestimating transport scenarios",
      "missing variant technical assessment"
    ],
    docs: [
      "technology diagram and facility capacities",
      "project location and relationship to surrounding development",
      "operating modes and transport connections",
      "authority requirement or study purpose"
    ],
    process: [
      "we map project risk areas (air quality, noise, transport)",
      "we determine required studies and documentation for proceedings",
      "we prepare variant assessment and measure proposals",
      "we deliver expert documentation for the investor and authorities"
    ],
    outputs: [
      "dispersion and/or noise study",
      "expert argumentation for EIA and follow-up processes",
      "recommendations for technical optimisation of the project"
    ],
    pitfalls: [
      "insufficient description of technology and operation",
      "addressing noise and air quality separately without shared context",
      "outdated documentation when project capacity changes"
    ],
    relatedServices: [
      { title: "Dispersion studies", href: "/sluzby/rozptylove-studie" },
      { title: "Noise studies", href: "/sluzby/hlukove-studie" },
      { title: "EIA and project notification", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "When should studies be addressed for a biogas project?",
        a: "Ideally during project preparation, so documentation is robust and proceedings run more smoothly."
      },
      {
        q: "Can multiple technology variants be compared?",
        a: "Yes — we also prepare variant scenarios comparing impacts and proposed measures."
      }
    ]
  },
  "zemedelske-provozy": {
    metadataTitle: "Measurement and documentation for agricultural and food processing operations",
    metadataDescription:
      "Emission measurement, workplace environment and operational parameters for agricultural sites, livestock buildings, dryers, biogas plants and food processing technologies.",
    title: "Agricultural operations and dryers",
    slug: "zemedelske-provozy",
    intro:
      "Addressing emissions, noise or workplaces on a farm or in a dryer? We prepare measurement and assessments for operators, regional authorities and KHS.",
    typicalProblems: [
      "unclear measurement scope when technology or capacity changes",
      "concurrent requirements for emissions, workplace environment and odorous substances",
      "insufficient documentation of operating modes and sources",
      "deadline pressure before inspection or authority submission"
    ],
    docs: [
      "description of technology, livestock buildings, dryers or food processing line",
      "operating manual, authority decision or internal measurement objective",
      "technical data sheets for inputs, fuels and substances used",
      "photographs of sources, stacks and workplaces"
    ],
    process: [
      "we clarify output purpose for operations, KHS, regional authority or EIA",
      "we define scope for emission and/or workplace environment measurement",
      "we carry out field measurement under representative conditions",
      "we deliver a protocol or study with recommendations for next steps"
    ],
    outputs: [
      "emission and workplace environment measurement protocols",
      "documentation for public health stations and regional authorities",
      "follow-up studies or expert statements as required by the project"
    ],
    pitfalls: [
      "measurement outside a representative operating mode",
      "missing documentation on capacities and technology",
      "addressing emissions and workplace environment separately without shared context"
    ],
    relatedServices: [
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Workplace environment measurement", href: "/sluzby/pracovni-prostredi" },
      { title: "EIA and project notification", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Do you also address biogas plants on agricultural sites?",
        a: "Yes — including engine emission measurement, operating modes and compliance with air protection authority obligations."
      },
      {
        q: "Can emission and workplace environment measurement be combined?",
        a: "Yes — we often propose a joint approach based on technology and the required output for authorities and operations."
      }
    ]
  },
  drevozpracujici: {
    metadataTitle: "Measurement and documentation for wood processing operations",
    metadataDescription:
      "Emission, dust, noise and workplace environment measurement for sawmills, joinery shops, dryers and biomass boiler plants.",
    title: "Wood processing operations",
    slug: "drevozpracujici",
    intro:
      "In sawmills and joinery shops, dust, TSP and a biomass boiler all matter. We provide measurement and documentation for KHS, regional authorities and permitting.",
    typicalProblems: [
      "emission measurement from biomass combustion and process stacks",
      "dust at crushing lines and extraction systems",
      "operational and transport noise on site",
      "permit and operational documentation updates"
    ],
    docs: [
      "description of technology, fuel and operating mode",
      "photographs of sources, stacks and workplaces",
      "authority requirement or internal measurement objective",
      "operating manual and decisions, if available"
    ],
    process: [
      "we clarify output purpose for operations, authorities or the investor",
      "we define scope for emission and/or workplace environment measurement",
      "we carry out field measurement under representative conditions",
      "we deliver a protocol or study with recommendations for next steps"
    ],
    outputs: [
      "emission and workplace environment measurement protocols",
      "documentation for KHS and regional authorities",
      "follow-up expert assessments or operating manuals"
    ],
    pitfalls: [
      "measurement outside representative dryer or boiler operation",
      "insufficient description of technology and fuel composition",
      "addressing emissions and dust separately without shared context"
    ],
    relatedServices: [
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Workplace environment measurement", href: "/sluzby/pracovni-prostredi" },
      {
        title: "Emission measurement for wood processing operations",
        href: "/sluzby/mereni-emisi-drevozpracujicich-provoze"
      }
    ],
    faq: [
      {
        q: "Do you also address wood and biomass dryers?",
        a: "Yes — including emission measurement from dryers and combustion sources on site."
      },
      {
        q: "Can emission and workplace environment measurement be combined?",
        a: "Yes — we often propose a joint approach based on technology and the required output."
      }
    ]
  },
  automotive: {
    metadataTitle: "Measurement and documentation for automotive and technical textiles",
    metadataDescription:
      "Emission, workplace environment and noise measurement for automotive, technical textiles and production lines.",
    title: "Automotive and technical textiles",
    slug: "automotive",
    intro:
      "In component manufacturing you address chemical substances, VOC and technology noise? We prepare measurement and documentation for operations, investors and authorities.",
    typicalProblems: [
      "emission measurement from technologies and paint shops on site",
      "job categorisation and chemical substance exposure",
      "production line and logistics noise",
      "investor or authority requirements when operations change"
    ],
    docs: [
      "description of technology and work operations",
      "safety data sheets and shift patterns",
      "photographs of sources and workplaces",
      "authority, investor or internal audit requirement"
    ],
    process: [
      "we assess the purpose of measurement or a study",
      "we define scope for emissions, workplace environment or noise",
      "we carry out field measurement or prepare a study",
      "we deliver a protocol with recommendations for operations and documentation"
    ],
    outputs: [
      "emission and workplace environment measurement protocols",
      "documentation for KHS and the investment team",
      "follow-up expert assessments when technology changes"
    ],
    pitfalls: [
      "measurement outside a representative shift or operation",
      "missing documentation on chemical mixtures and extraction",
      "addressing emissions and workplace environment without coordination"
    ],
    relatedServices: [
      { title: "Emission measurement", href: "/sluzby/mereni-emisi" },
      { title: "Workplace environment measurement", href: "/sluzby/pracovni-prostredi" },
      { title: "Paint shop emission measurement", href: "/sluzby/mereni-emisi-lakoven" }
    ],
    faq: [
      {
        q: "Do you measure emissions from paint lines in automotive?",
        a: "Yes — including VOC/TOC and the link to workplace environment in the paint shop."
      },
      {
        q: "Do you work with designers and investors?",
        a: "Yes — we prepare documentation for technical supervision and permitting processes."
      }
    ]
  }
};
