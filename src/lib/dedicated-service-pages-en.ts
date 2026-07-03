import type { DedicatedServicePage } from "./dedicated-service-pages";

export const dedicatedServicePagesEn: Record<string, DedicatedServicePage> = {
  "hlukove-studie": {
    slug: "sluzby/hlukove-studie",
    title: "Noise studies",
    description:
      "Noise studies for technologies, sites, transport, HVAC, heat pumps and construction projects. Supporting documentation for KHS, building permitting and EIA.",
    intro:
      "Has an authority requested a noise study or are you addressing a neighbourhood complaint? We prepare calculations for technologies, the site and transport — documentation for KHS, building permitting and EIA.",
    contactService: "Hlukové studie",
    faqCategoryId: "hluk",
    scope: [
      "We prepare noise calculations for technologies, sites, HVAC, heat pumps and transport",
      "We assess daytime and nighttime operating modes and source location variants",
      "We evaluate results against limits and protected outdoor areas",
      "We propose noise mitigation or operational adjustments when limit exceedance is likely"
    ],
    whenNeeded: [
      "A new noise source is being introduced or technology is changing",
      "KHS, the building authority or EIA requires a noise study",
      "Occupancy approval, change of use or a neighbourhood complaint is in progress",
      "You are verifying the effectiveness of noise control measures before implementation"
    ],
    practicalSituations: [
      "noise study for outdoor heat pump units and HVAC",
      "noise study for an industrial site with night-time operation",
      "assessment of transport noise within a site or service road",
      "noise study as an EIA or project documentation appendix"
    ],
    docs: [
      "project layout and noise source locations",
      "project documentation or equipment technical data sheets",
      "operating schedule for daytime and nighttime periods",
      "requirement from KHS, the building authority or the competent authority"
    ],
    outputs: [
      "noise study with calculation and evaluation",
      "proposal of noise control or operational measures",
      "supporting documentation for KHS, building permitting, occupancy approval or EIA"
    ],
    commonMistakes: [
      "Confusing a noise study with noise measurement for a project not yet implemented",
      "Incomplete data on night-time operating mode",
      "Overlooking concurrent operation of multiple noise sources on site"
    ],
    relatedLinks: [
      {
        title: "Noise measurement and acoustics",
        href: "/sluzby/mereni-hluku",
        description: "Field measurement and verification of actual operational noise."
      },
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        description: "A noise study is a common appendix for projects with neighbourhood impacts."
      }
    ]
  },
  "odborne-posudky": {
    slug: "sluzby/odborne-posudky",
    title: "Expert assessments",
    description:
      "Expert assessments under the Air Protection Act for sources, technologies, operational changes and permitting procedures.",
    intro:
      "Has the regional authority requested an expert assessment for a source or technology change? We prepare assessments under the Air Protection Act — in connection with emission measurements and operating permits.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "We prepare assessments for a source, technology change or capacity change",
      "We link emission measurements, dispersion studies and operating manuals",
      "We prepare responses to requests from the regional authority or ČIŽP",
      "Summary for the investor before submitting an operating permit application"
    ],
    whenNeeded: [
      "You are planning a new source or technology change",
      "You are changing capacity, fuel, filtration or operating mode",
      "An authority requires an assessment in operating permit proceedings",
      "You need a technically substantiated opinion"
    ],
    practicalSituations: [
      "expert assessment for new coating technology",
      "assessment for a combustion source or cogeneration unit change",
      "expert statement to supplement an operating permit application",
      "assessment of the link between emission measurements and dispersion studies"
    ],
    docs: [
      "technical description of the source or technology",
      "project documentation and site layout",
      "operating permit, decision or authority request",
      "available measurement reports, emission data and operating schedule"
    ],
    outputs: [
      "expert assessment or expert statement",
      "summary of documentation and conclusions for administrative proceedings",
      "recommendations for follow-up steps, measurements or documentation"
    ],
    commonMistakes: [
      "Assessing technology without current operational data",
      "Missing link to operating permit and limits",
      "Incomplete documentation on stacks, filtration or source operating mode"
    ],
    relatedLinks: [
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Immission assessment often follows an expert assessment."
      },
      {
        title: "Operating manuals",
        href: "/sluzby/provozni-rady",
        description: "Operating documentation for a source after permitting or operational change."
      }
    ]
  },
  "provozni-rady": {
    slug: "sluzby/provozni-rady",
    title: "Operating manuals for air pollution sources",
    description:
      "Preparation and updates of operating manuals for stationary air pollution sources for operators and regional authorities.",
    intro:
      "Does the operating manual no longer reflect actual operation after a filtration, fuel or capacity change? We prepare a new manual or revision — aligned with the permit and emission measurements.",
    contactService: "Provozní řády",
    faqCategoryId: "eia",
    scope: [
      "We prepare a new operating manual for an air pollution source",
      "We update after technology, stack or emergency procedure changes",
      "We align with the operating permit and latest emission measurements",
      "We revise on request from the regional authority or ČIŽP"
    ],
    whenNeeded: [
      "You are planning a new source or operating permit change",
      "You are changing technology, fuel, stack or abatement equipment",
      "The operating manual no longer reflects actual operation",
      "The regional authority or ČIŽP requires documentation revision"
    ],
    practicalSituations: [
      "operating manual update after filtration replacement",
      "operating manual for a paint shop or process stack",
      "supplementing operating schedules after capacity change",
      "aligning documentation with emission measurement results"
    ],
    docs: [
      "existing operating manual and operating permit",
      "description of technology, filtration, stacks and emergency states",
      "emission measurement reports and operating records",
      "authority request or requirement"
    ],
    outputs: [
      "operating manual or operating manual update",
      "overview of incorporated operating conditions",
      "recommendations for follow-up records and measurements"
    ],
    commonMistakes: [
      "Operating manual does not match actual technology",
      "Missing link to measured pollutants and limits",
      "Documentation does not address non-standard or emergency states"
    ],
    relatedLinks: [
      {
        title: "Emission measurement",
        href: "/sluzby/mereni-emisi",
        description: "Measurement outputs often form the basis for the operating manual."
      },
      {
        title: "ISPOP and consolidated operating records",
        href: "/sluzby/ispop",
        description: "The operating manual follows on from operating records and reporting."
      }
    ]
  },
  "ippc-integrovana-povoleni": {
    slug: "sluzby/ippc-integrovana-povoleni",
    title: "IPPC and integrated permits",
    description:
      "Supporting documentation for integrated permits, IPPC changes and expert coordination of measurements, studies and operating documentation.",
    intro:
      "Are you changing a facility with an integrated permit? We consolidate measurements, studies and operating inputs for IPPC proceedings or a permit change.",
    contactService: "IPPC a integrovaná povolení",
    faqCategoryId: "eia",
    scope: [
      "We prepare documentation for a new integrated permit or IPPC change",
      "We consolidate measurements, studies and operating inputs in one package",
      "We describe the change relative to the existing permit and BAT",
      "We supplement documentation after comments from the regional authority"
    ],
    whenNeeded: [
      "You are planning a new integrated permit",
      "You are addressing a substantial or non-substantial IPPC change",
      "You are changing capacity, technology or emission parameters",
      "An authority requires supplementary documentation"
    ],
    practicalSituations: [
      "technology change at a facility with an integrated permit",
      "supplementing measurements and studies for an IPPC change application",
      "consolidating operating data, emission documentation and records",
      "responding to authority comments during proceedings"
    ],
    docs: [
      "current integrated permit and description of the change",
      "project documentation and process diagram",
      "operating data, measurements, balances and records",
      "authority request or list of required supplements"
    ],
    outputs: [
      "expert documentation for IPPC or integrated permit change",
      "coordination overview of measurements, studies and operating data",
      "documentation supplements for administrative proceedings"
    ],
    commonMistakes: [
      "Treating measurements and permitting documentation separately without a common conclusion",
      "Outdated data on capacity, operating mode or stacks",
      "Documentation without clear distinction between existing and proposed state"
    ],
    relatedLinks: [
      {
        title: "Expert assessments",
        href: "/sluzby/odborne-posudky",
        description: "Technical assessment of source and facility changes."
      },
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        description: "For larger changes, IPPC may follow the EIA process."
      }
    ]
  },
  "eia-oznameni-zameru": {
    slug: "sluzby/eia-oznameni-zameru",
    title: "EIA and project notification",
    description:
      "EIA project notification, expert appendices and coordination of documentation for screening proceedings and follow-on permitting.",
    intro:
      "Are you preparing a project with environmental impacts? We prepare EIA notification and align documentation for air quality, noise and transport in one document.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "We prepare project notification under the EIA Act",
      "We consolidate dispersion, noise and transport appendices",
      "We prepare technical appendices for the investor and EIA practitioner",
      "We revise after comments from authorities or the public"
    ],
    whenNeeded: [
      "You are planning a new project with environmental impacts",
      "You are changing capacity, technology or site layout",
      "An authority requires screening proceedings",
      "You need to supplement expert appendices for permitting"
    ],
    practicalSituations: [
      "EIA notification for expansion of a production site",
      "EIA documentation for waste or energy facilities",
      "coordination of noise and dispersion studies for one project",
      "documentation supplement after authority comments"
    ],
    docs: [
      "project description, capacity and location",
      "project documentation, site layout and transport solution",
      "technology data, emissions, noise and operating schedule",
      "authority requirements or previous opinions"
    ],
    outputs: [
      "EIA project notification",
      "coordination overview of expert appendices",
      "documentation for screening proceedings and follow-on permitting"
    ],
    commonMistakes: [
      "Uncoordinated technical appendices with inconsistent input data",
      "Underestimating night-time operation, transport or cumulative impacts",
      "Incomplete description of variants and operating mode"
    ],
    relatedLinks: [
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Immission contributions of a project as a common EIA appendix."
      },
      {
        title: "Noise studies",
        href: "/sluzby/hlukove-studie",
        description: "Noise assessment for technology, transport and site."
      }
    ]
  },
  "ispop": {
    slug: "sluzby/ispop",
    title: "ISPOP and consolidated operating records",
    description:
      "ISPOP, consolidated operating records and annual reporting for source operators in connection with emission measurements and operating permits.",
    intro:
      "Is annual ISPOP reporting approaching or is an authority inspection due? We check consolidated records against emission measurements, permits and actual operation.",
    contactService: "ISPOP",
    faqCategoryId: "ispop",
    scope: [
      "We prepare consolidated operating records for a source",
      "We review and supplement annual ISPOP reporting",
      "We align with emission measurements, permits and operating manuals",
      "We incorporate fuel, capacity or operating hours changes"
    ],
    whenNeeded: [
      "You are planning annual reporting and consolidated operating records",
      "You are changing the source or operating data",
      "You are checking the link to emission measurements",
      "An authority requires supplements or you are conducting an internal review"
    ],
    practicalSituations: [
      "preparing annual reporting after routine emission measurements",
      "data review after fuel or operating hours change",
      "aligning operating permit, measurements and records",
      "supplementing data after a request or inspection"
    ],
    docs: [
      "operating permit and operating manual",
      "emission measurement reports",
      "operating hours, fuel or raw material consumption",
      "previous reports and available records"
    ],
    outputs: [
      "documentation for ISPOP and consolidated operating records",
      "review of consistency with operating permit and measurements",
      "overview of missing or at-risk data"
    ],
    commonMistakes: [
      "Copying old data without checking operational changes",
      "Inconsistency between emission measurements, permit and records",
      "Overlooking fuel, output or operating hours changes"
    ],
    relatedLinks: [
      {
        title: "Emission measurement",
        href: "/sluzby/mereni-emisi",
        description: "Measurement results are a common input for records and reporting."
      },
      {
        title: "Operating manuals",
        href: "/sluzby/provozni-rady",
        description: "Operating documentation must match the actual source operating mode."
      }
    ]
  },
  "ghg-overovani": {
    slug: "sluzby/ghg-overovani",
    title: "GHG and greenhouse gas emission verification",
    description:
      "GHG, greenhouse gas emission verification, emission data review and reporting documentation for operators.",
    intro:
      "Are you verifying greenhouse gas emissions before reporting? We assess methodology, inputs and the link to consumption, measurements and operating balances.",
    contactService: "GHG",
    faqCategoryId: "ispop",
    scope: [
      "We verify greenhouse gas emissions and calculation sheets",
      "We review emission factors, consumption and operating data",
      "We link to emission measurements and operating records",
      "We prepare an overview of discrepancies before report submission"
    ],
    whenNeeded: [
      "You are planning greenhouse gas emission reporting",
      "You need to verify calculations or emission data",
      "You are changing technology, fuel or operating data",
      "An investor, auditor or authority requires a review"
    ],
    practicalSituations: [
      "greenhouse gas emission calculation review",
      "input data verification before reporting",
      "linking GHG data to emission measurements and operating balances",
      "preparing documentation for audit or investor"
    ],
    docs: [
      "calculation methodology and input data",
      "fuel and raw material consumption and operating balances",
      "emission measurement reports and operating records",
      "reporting or audit requirement"
    ],
    outputs: [
      "verification or review of emission data",
      "overview of inputs, methodology and identified discrepancies",
      "documentation for GHG reporting"
    ],
    commonMistakes: [
      "Outdated emission factors or calculation methodology",
      "Inconsistency between consumption and operating records",
      "Missing substantiation of source data"
    ],
    relatedLinks: [
      {
        title: "ISPOP and consolidated operating records",
        href: "/sluzby/ispop",
        description: "Reporting agendas often share operating data and balances."
      },
      {
        title: "Emission measurement",
        href: "/sluzby/mereni-emisi",
        description: "Measurement outputs support emission data review."
      }
    ]
  },
  "bezpecnostni-listy": {
    slug: "sluzby/bezpecnostni-listy",
    title: "Safety data sheets and chemical substance labelling",
    description:
      "Review of safety data sheets, labelling of chemical substances and mixtures, labels, internal containers and links to occupational health and safety.",
    intro:
      "Safety data sheets must match storage and handling of substances on site. We review documentation, labelling and propose revisions where gaps exist.",
    contactService: "Bezpečnostní listy",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "revision of safety data sheets and their availability at the workplace",
      "labels on internal containers, stores and workstations",
      "consistency of storage and PPE with sheet information",
      "documentation for training and internal operating instructions"
    ],
    whenNeeded: [
      "new chemical substances or mixtures in operation",
      "unclear safety data sheets, labels or storage arrangements",
      "preparation for inspection or internal audit",
      "need for practical documentation for employee training"
    ],
    practicalSituations: [
      "label review on internal containers",
      "safety data sheet revision for a chemical store",
      "preparing documentation for employee training",
      "aligning operating rules for chemical substances"
    ],
    docs: [
      "list of chemical substances and mixtures",
      "safety data sheets and labels",
      "description of storage and use in operation",
      "internal procedures, operating rules or inspection requirement"
    ],
    outputs: [
      "findings overview for safety data sheets and labelling",
      "recommendations for label, storage and internal procedure revisions",
      "documentation for training or internal records"
    ],
    commonMistakes: [
      "safety data sheets not available to employees in a practical form",
      "internal containers not correctly labelled",
      "storage does not match risks stated in safety data sheets"
    ],
    relatedLinks: [
      {
        title: "Chemical legislation training",
        href: "/sluzby/skoleni-chemicke-legislativy",
        description: "Practical training follows on from safety data sheets and labelling."
      },
      {
        title: "Chemical substances in operation",
        href: "/sluzby/chemicke-latky",
        description: "Setting rules for use, storage and operational responsibility."
      }
    ]
  },
  "chemicke-latky": {
    slug: "sluzby/chemicke-latky",
    title: "Chemical substances in operation",
    description:
      "Practical support for handling chemical substances in operation, storage, labelling, rules for employees and links to occupational health and safety.",
    intro:
      "We assess chemical substances at the point of storage, decanting and use. We prepare rules for shift supervisors based on actual handling, not just inventory tables.",
    contactService: "Chemické látky v provozu",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "mapping substances and mixtures from delivery to workstations",
      "rules for handling, decanting and storage",
      "link to safety data sheets and occupational health and safety",
      "responsibility design and documentation for operator training"
    ],
    whenNeeded: [
      "expansion of chemical substances or mixtures in use",
      "preparing a store, operation or workstations",
      "uncertainties in labelling, handling or responsibilities",
      "preparing training or responding to inspection findings"
    ],
    practicalSituations: [
      "setting rules for a chemical substance store",
      "reviewing mixture use in production or maintenance",
      "preparing employees for safe handling of chemical substances",
      "aligning safety data sheets, labels and work procedures"
    ],
    docs: [
      "list of substances and mixtures used in operation",
      "safety data sheets, labels and store inventory",
      "description of work activities and storage locations",
      "internal rules, audit findings or inspection requirement"
    ],
    outputs: [
      "recommendations for safe use and storage of chemical substances",
      "overview of weaknesses in labelling and operating rules",
      "documentation for training, internal procedure or inspection"
    ],
    commonMistakes: [
      "chemical substances addressed only on paper, without link to actual operation",
      "employees lack clear rules for decanting and labelling",
      "storage does not match risks and operating mode"
    ],
    relatedLinks: [
      {
        title: "Safety data sheets",
        href: "/sluzby/bezpecnostni-listy",
        description: "Safety data sheets are the starting point for operating rules."
      },
      {
        title: "Chemical legislation training",
        href: "/sluzby/skoleni-chemicke-legislativy",
        description: "Training translates rules into practice for employees."
      }
    ]
  },
  "mereni-vibraci": {
    slug: "sluzby/mereni-vibraci",
    title: "Vibration measurement",
    description:
      "Accredited vibration measurement at workplaces for job categorisation, occupational health and safety and KHS requirements. Hand tools, machinery, transport equipment.",
    intro:
      "Job categorisation or a KHS request regarding vibrations? We measure exposure at tools and machinery based on actual operations — report for KHS and occupational health and safety.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "We measure HAV — hand-arm vibration from hand tools and machinery",
      "We assess whole-body vibration from machinery, handling equipment and vehicles",
      "We evaluate exposure based on actual operations and shift patterns",
      "We propose job rotation or technical measures when limits are exceeded"
    ],
    whenNeeded: [
      "You need job categorisation or an update",
      "KHS or an internal occupational health and safety audit requires vibration measurement",
      "You are introducing new technology or changing work operations",
      "You are verifying employee complaints or measure effectiveness"
    ],
    practicalSituations: [
      "vibration measurement at grinders and pneumatic tools in production",
      "vibration measurement for machine operators and handling equipment",
      "vibration assessment during maintenance or construction work",
      "documentation for job categorisation update"
    ],
    docs: [
      "description of work operations and shift patterns",
      "list of tools and machinery in use",
      "workplace layout and number of exposed workers",
      "KHS requirement or internal audit documentation"
    ],
    outputs: [
      "vibration measurement report with evaluation",
      "documentation for job categorisation and occupational health and safety",
      "recommendations for technical and organisational measures"
    ],
    commonMistakes: [
      "Measurement without considering actual exposure duration and shift patterns",
      "Confusing vibration with noise or another workplace factor",
      "Incomplete description of tools and operations in use"
    ],
    relatedLinks: [
      {
        title: "Workplace environment measurement",
        href: "/sluzby/pracovni-prostredi",
        description: "Comprehensive hygienic measurements including noise, dust and chemicals."
      },
      {
        title: "Welding shops and metalworking",
        href: "/provozy-a-technologie/svarovny",
        description: "Vibration, noise, dust and chemicals in welding shops."
      }
    ]
  },
  "mereni-osvetleni": {
    slug: "sluzby/mereni-osvetleni",
    title: "Lighting measurement",
    description:
      "Workplace lighting measurement for KHS, job categorisation and occupational health and safety. Artificial and daylight, offices and production halls.",
    intro:
      "Occupancy approval, KHS request or a new workplace? We measure artificial and daylight lighting according to visual demands — output for KHS, job categorisation and occupational health and safety.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "We measure artificial and daylight lighting at the workplace",
      "We evaluate conditions according to activity type and visual demands",
      "We assess halls, laboratories, stores and administrative areas",
      "We propose luminaire or layout adjustments when levels are insufficient"
    ],
    whenNeeded: [
      "You need job categorisation or a new workplace",
      "KHS or occupancy approval requires lighting measurement",
      "You are changing layout, technology or lighting type",
      "You are addressing complaints about insufficient lighting"
    ],
    practicalSituations: [
      "lighting measurement in a production hall after technology change",
      "lighting assessment for offices and meeting rooms",
      "lighting measurement in a laboratory or clean room",
      "documentation for occupancy approval or workplace reconstruction"
    ],
    docs: [
      "workplace layout and activity description",
      "lighting type and workplace layout",
      "shift patterns and number of workers at stations",
      "KHS requirement or project documentation"
    ],
    outputs: [
      "lighting measurement report with evaluation",
      "documentation for job categorisation and occupational health and safety",
      "recommendations for lighting or layout adjustments"
    ],
    commonMistakes: [
      "Measurement without considering actual visual demands and operations",
      "Assessment based only on design without measurement in operation",
      "Incomplete description of activity type at the workplace"
    ],
    relatedLinks: [
      {
        title: "Workplace environment measurement",
        href: "/sluzby/pracovni-prostredi",
        description: "Additional workplace environment factors in one assignment."
      },
      {
        title: "Microclimate measurement",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Temperature, humidity and air movement at workplaces."
      }
    ]
  },
  "mereni-mikroklimatu": {
    slug: "sluzby/mereni-mikroklimatu",
    title: "Microclimate measurement",
    description:
      "Measurement of microclimatic conditions at workplaces: temperature, humidity, air movement. Documentation for KHS and job categorisation.",
    intro:
      "Thermal load, KHS request or ventilation change? We measure temperature, humidity and air movement in actual operation — report for KHS and job categorisation.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "We measure temperature, humidity and air velocity at the workstation",
      "We assess conditions according to physical work load (light / moderate / heavy)",
      "We measure in halls, dryers and stores with thermal load",
      "We propose ventilation, air conditioning or shift organisation adjustments"
    ],
    whenNeeded: [
      "You need job categorisation or an update",
      "KHS is responding to thermal load complaints",
      "You are introducing new technology or changing ventilation",
      "Occupancy approval or operating mode change is in progress"
    ],
    practicalSituations: [
      "microclimate measurement in a store or production hall",
      "condition assessment at furnaces, dryers and hot operations",
      "measurement when introducing new ventilation or air conditioning",
      "documentation for job categorisation update"
    ],
    docs: [
      "description of work operations and physical load",
      "workplace layout and ventilation type",
      "shift patterns and number of workers",
      "KHS requirement or complaint description"
    ],
    outputs: [
      "microclimate measurement report with evaluation",
      "documentation for job categorisation and occupational health and safety",
      "recommendations for technical and organisational measures"
    ],
    commonMistakes: [
      "Measurement without considering actual physical work load",
      "Assessment at only one time without representative operating mode",
      "Incomplete description of ventilation and technology"
    ],
    relatedLinks: [
      {
        title: "Workplace environment measurement",
        href: "/sluzby/pracovni-prostredi",
        description: "Comprehensive measurement of risk factors at workplaces."
      },
      {
        title: "Heat and cold stress measurement",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        description: "Specialised measurement for hot and cold operations, work class and permissible exposure times."
      },
      {
        title: "Agricultural operations and dryers",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Microclimate, dust and chemicals in agriculture."
      }
    ]
  },
  "mereni-tepelna-chladova-zatez": {
    slug: "sluzby/mereni-tepelna-chladova-zatez",
    title: "Heat and cold stress measurement",
    description:
      "Authorised measurement of heat and cold stress at workplaces: microclimatic parameters, work class and permissible exposure times. Documentation for regional hygiene station and job categorisation.",
    intro:
      "Does the regional hygiene station require assessment of heat or cold stress? We measure microclimatic parameters in actual operation — report with work class and permissible exposure time recommendations.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "We measure microclimatic parameters according to Czech Ministry of Health methodology",
      "We assess conditions according to physical work load (light / moderate / heavy)",
      "We measure in halls, dryers, cold stores and during outdoor work",
      "We recommend work class, permissible exposure times and fluid replacement"
    ],
    whenNeeded: [
      "Regional hygiene station or job categorisation requires heat or cold stress measurement",
      "Workers are exposed to heat at furnaces, dryers or outdoor work in summer",
      "Operations in cold stores, freezers or unheated halls in winter",
      "You need documentation for shift organisation and technical measures"
    ],
    practicalSituations: [
      "heat stress measurement at furnaces, dryers and hot operations",
      "cold stress assessment in cold stores and freezers",
      "measurement during outdoor construction and agricultural work",
      "documentation for updating job categorisation and OHS"
    ],
    docs: [
      "description of work operations and physical load",
      "workplace layout, ventilation type and clothing",
      "shift pattern and number of workers",
      "regional hygiene station requirement or complaint description"
    ],
    outputs: [
      "heat or cold stress measurement report with assessment",
      "work class and permissible exposure time recommendations",
      "documentation for job categorisation, OHS and operational measures"
    ],
    commonMistakes: [
      "Assessment based only on air temperature without considering physical work load",
      "Measurement without considering actual operating mode and clothing",
      "Incomplete description of ventilation, technology and shift pattern"
    ],
    relatedLinks: [
      {
        title: "Microclimate measurement",
        href: "/sluzby/mereni-mikroklimatu",
        description: "General measurement of temperature, humidity and air flow at workplaces."
      },
      {
        title: "Workplace environment measurement",
        href: "/sluzby/pracovni-prostredi",
        description: "Comprehensive hygienic measurements including dust, chemicals and noise."
      },
      {
        title: "Agricultural operations and dryers",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Heat stress, dust and microclimate in agriculture."
      }
    ]
  },
  "mereni-diisokyanatu": {
    slug: "sluzby/mereni-diisokyanatu",
    title: "Diisocyanate measurement (MDI, TDI, HDI)",
    description:
      "Authorised measurement of diisocyanate exposure at workplaces: MDI, TDI, HDI and others. Personal and stationary sampling for regional hygiene station, job categorisation and exposure reduction measures.",
    intro:
      "PUR foams, painting or bonding with isocyanates? We measure exposure to MDI, TDI, HDI and other diisocyanates in actual operation — report for regional hygiene station, job categorisation and measure proposals.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "We measure diisocyanate exposure (MDI, TDI, HDI and others) with personal and stationary sampling",
      "We focus on concentration peaks during spraying, pouring and hot processes",
      "We assess exposure against hygiene limits and regional hygiene station requirements",
      "We propose technical and organisational measures to reduce exposure"
    ],
    whenNeeded: [
      "Job categorisation or regional hygiene station request regarding isocyanates",
      "PUR spraying, painting or bonding with diisocyanates in operation",
      "Technology, materials or ventilation change for reactive systems",
      "Verifying extraction and PPE effectiveness after a complaint or inspection"
    ],
    practicalSituations: [
      "MDI measurement during PUR foam production and processing",
      "TDI exposure in paint shops and polyurethane system application",
      "measurement during bonding and lamination with isocyanate adhesives",
      "secondary emissions during heating or cutting cured PUR materials"
    ],
    docs: [
      "safety data sheets of materials and mixtures used",
      "description of work operations, extraction and PPE",
      "workplace layout and shift pattern",
      "regional hygiene station requirement or internal audit documentation"
    ],
    outputs: [
      "diisocyanate measurement report with exposure assessment",
      "documentation for job categorisation and measures under public health legislation",
      "technical and organisational measure recommendations"
    ],
    commonMistakes: [
      "Exposure estimated from safety data sheet only without operational measurement",
      "Measurement outside peaks during spraying or pouring",
      "Failure to consider secondary emissions during further PUR processing"
    ],
    relatedLinks: [
      {
        title: "Workplace environment measurement",
        href: "/sluzby/pracovni-prostredi",
        description: "Comprehensive measurement of chemicals, dust and other factors."
      },
      {
        title: "Automotive and production halls",
        href: "/provozy-a-technologie/automotive",
        description: "Isocyanates in painting, bonding and PUR in interior production."
      },
      {
        title: "Chemical substances in operation",
        href: "/sluzby/chemicke-latky",
        description: "Rules for storage, handling and responsibilities for chemicals."
      }
    ]
  },
  "akusticke-posudky": {
    slug: "sluzby/akusticke-posudky",
    title: "Acoustic assessments",
    description:
      "Acoustic assessments and expert statements on noise from technologies, plant rooms and building modifications with process operation. Documentation for building permitting and KHS.",
    intro:
      "Do you need an acoustic assessment for a plant room or technology within a building? We assess noise for building permitting and KHS — a different scope than a neighbourhood noise study for a project.",
    contactService: "Měření hluku a akustika",
    faqCategoryId: "hluk",
    scope: [
      "We prepare assessments for building modifications or change of building use",
      "We propose soundproofing for plant rooms, HVAC and technologies within a building",
      "We prepare statements for building permitting and occupancy approval",
      "We link to operational measurements or acoustic calculation"
    ],
    whenNeeded: [
      "You are planning building modifications with impact on noise within the building",
      "Occupancy approval or change of building use is in progress",
      "The building authority or KHS requires an acoustic statement",
      "You need a soundproofing design before implementation"
    ],
    practicalSituations: [
      "acoustic assessment for an HVAC plant room or boiler room in a building",
      "soundproofing assessment for a production hall or technology",
      "acoustic statement for change of building use",
      "link to neighbourhood noise study for a project"
    ],
    docs: [
      "project documentation or project description",
      "layout plans and noise source locations",
      "operating schedule and authority requirement",
      "existing measurements or equipment technical data sheets"
    ],
    outputs: [
      "acoustic assessment with evaluation and recommendations",
      "noise control measure design",
      "documentation for building permitting or KHS"
    ],
    commonMistakes: [
      "Confusing an acoustic assessment with a neighbourhood noise study for a project",
      "Assessment without link to actual operating schedule",
      "Incomplete project documentation of noise sources"
    ],
    relatedLinks: [
      {
        title: "Noise studies",
        href: "/sluzby/hlukove-studie",
        description: "Computational assessment of project and site noise in the neighbourhood."
      },
      {
        title: "Noise measurement and acoustics",
        href: "/sluzby/mereni-hluku",
        description: "Field measurement to verify actual conditions."
      }
    ]
  },
  "modelove-vypocty": {
    slug: "sluzby/modelove-vypocty",
    title: "Modelling calculations",
    description:
      "Immission and noise modelling calculations for projects, operational changes and technology variants. Documentation for dispersion and noise studies.",
    intro:
      "Do you need to quickly compare stack, plant room or transport variants? We perform immission and noise modelling calculations — documentation for a study, EIA or authority consultation.",
    contactService: "Rozptylové studie",
    faqCategoryId: "studie",
    scope: [
      "We model immission contributions from air sources and transport on site",
      "We prepare noise calculations for technologies, site and roads",
      "We compare operational or source location variants",
      "We prepare outputs for a study, EIA or authority consultation"
    ],
    whenNeeded: [
      "You are planning a new project or source capacity change",
      "You need variant assessment of operation",
      "An authority requires immission or noise evaluation",
      "You are preparing a dispersion or noise study"
    ],
    practicalSituations: [
      "immission modelling calculation for new technology on site",
      "noise calculation for plant room or HVAC location variants",
      "immission contributions for a landfill or boiler dispersion study",
      "documentation for EIA and permitting"
    ],
    docs: [
      "source technical parameters and emission data",
      "project layout and surrounding development",
      "operating schedule and variants",
      "authority requirement or study brief"
    ],
    outputs: [
      "modelling calculation results with evaluation",
      "documentation for dispersion or noise study",
      "variant comparison and recommendations for next steps"
    ],
    commonMistakes: [
      "Calculation without verified input emission data",
      "Failure to consider all relevant sources on site",
      "Confusing calculation with field measurement for existing operation"
    ],
    relatedLinks: [
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Complete dispersion study including modelling calculations."
      },
      {
        title: "Noise studies",
        href: "/sluzby/hlukove-studie",
        description: "Noise modelling for projects and sites."
      }
    ]
  },
  "imisni-dopady": {
    slug: "sluzby/imisni-dopady",
    title: "Immission and noise impacts of projects",
    description:
      "Integrated immission and noise assessment for investment projects, operational changes and EIA. Dispersion, noise and variants in one process.",
    intro:
      "Does a project affect both air quality and noise? We prepare an integrated assessment using the same data — consistent documentation for EIA, the regional authority and KHS.",
    contactService: "Rozptylové studie",
    faqCategoryId: "studie",
    scope: [
      "We consolidate immission and noise briefs for one project",
      "We model technology location variants",
      "We prepare documentation for EIA, the regional authority and KHS",
      "We deliver one consolidated output for the investor and designer"
    ],
    whenNeeded: [
      "A project has concurrent impact on air quality and noise",
      "An authority requires immission and noise evaluation",
      "You are preparing EIA or project notification",
      "You need variant comparison of technology location"
    ],
    practicalSituations: [
      "immission and noise impacts of an industrial site",
      "assessment of a landfill, biogas plant or production project",
      "technology location variants from air quality and noise perspectives",
      "documentation for EIA and permitting proceedings"
    ],
    docs: [
      "project documentation and site layout",
      "source technical parameters and operating schedule",
      "project variants",
      "authority requirement or investor brief"
    ],
    outputs: [
      "integrated immission and noise impact assessment",
      "variant comparison and measure recommendations",
      "documentation for EIA, authorities and investor"
    ],
    commonMistakes: [
      "Addressing noise and immissions separately without link to the same project",
      "Incomplete input data for modelling",
      "Overlooking transport or ancillary sources on site"
    ],
    relatedLinks: [
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Immission modelling and dispersion studies."
      },
      {
        title: "Noise studies",
        href: "/sluzby/hlukove-studie",
        description: "Noise assessment for projects and sites."
      }
    ]
  },
  "povoleni-provozu": {
    slug: "sluzby/povoleni-provozu",
    title: "Source operating permits",
    description:
      "Documentation for issuing or changing an operating permit for a stationary source. Measurements, assessments, operating manuals and authority liaison.",
    intro:
      "Are you addressing issuance or change of a source operating permit? We propose the scope of measurements, assessment and operating manual according to technology type and regional authority requirements.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "We propose documentation scope before submission to the regional authority",
      "We coordinate emission measurements, assessment and operating manual",
      "We consider links to IPPC and ISPOP for larger sources",
      "We provide technical support when supplementing the application"
    ],
    whenNeeded: [
      "You are planning a new source or capacity change",
      "You need an operating permit after a technology change",
      "An authority requires supplementary documentation",
      "You are changing fuel, filtration or operating mode"
    ],
    practicalSituations: [
      "operating permit for a new coating line",
      "permit change for a boiler or cogeneration unit",
      "documentation supplement after regional authority request",
      "link between emission measurements and expert assessment"
    ],
    docs: [
      "source technical documentation",
      "existing permit or authority request",
      "operating schedule and emission data",
      "project documentation of the change"
    ],
    outputs: [
      "proposed documentation scope for proceedings",
      "expert assessment, measurement reports or operating manual",
      "technical support during authority consultation"
    ],
    commonMistakes: [
      "Submitting an application without measurements or assessment in the required scope",
      "Failure to consider technology change relative to the original permit",
      "Uncoordinated documentation from multiple suppliers"
    ],
    relatedLinks: [
      {
        title: "Expert assessments",
        href: "/sluzby/odborne-posudky",
        description: "Expert assessments under the Air Protection Act."
      },
      {
        title: "Operating manuals",
        href: "/sluzby/provozni-rady",
        description: "Operating manuals as part of permitting documentation."
      }
    ]
  },
  "zjistovaci-rizeni-eia": {
    slug: "sluzby/zjistovaci-rizeni-eia",
    title: "EIA screening proceedings",
    description:
      "Expert documentation for EIA screening proceedings. Technical inputs, coordination of measurements and studies for the investor and EIA practitioner.",
    intro:
      "Is a project entering EIA screening proceedings? We deliver technical inputs from measurements and studies on time — in a form usable by the EIA practitioner.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "We prepare technical appendices for screening proceedings",
      "We arrange emission measurements, dispersion and noise per EIA brief",
      "We align data from operation and project",
      "We supplement after authority comments during screening"
    ],
    whenNeeded: [
      "A project falls within screening proceedings",
      "You need technical appendices on time in the process",
      "You want to align measurements, studies and project",
      "You are preparing documentation for the public and authorities"
    ],
    practicalSituations: [
      "documentation for screening of an industrial project",
      "technical inputs for a landfill, biogas plant or production facility",
      "coordination of immission and noise documentation in one assignment",
      "documentation supplement after authority comments"
    ],
    docs: [
      "project description and project documentation",
      "documentation on existing state and operation",
      "screening proceedings brief",
      "schedule and EIA practitioner requirements"
    ],
    outputs: [
      "technical documentation for screening proceedings",
      "coordinated inputs from measurements and studies",
      "recommendations for next steps in the EIA process"
    ],
    commonMistakes: [
      "Late delivery of technical documentation to EIA",
      "Inconsistency between project and actual operation",
      "Separate studies without a common brief"
    ],
    relatedLinks: [
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Project notification and EIA documentation preparation."
      },
      {
        title: "Technical appendices for investors",
        href: "/sluzby/technicke-prilohy",
        description: "Documentation for investment and project preparation."
      }
    ]
  },
  "technicke-prilohy": {
    slug: "sluzby/technicke-prilohy",
    title: "Technical appendices for investors",
    description:
      "Technical appendices for investors and designers: dispersion, noise, emissions, transport and links to permitting and EIA.",
    intro:
      "Are you deciding on technology location before submission to authorities? We prepare technical appendices on immissions, noise and transport for the investor and designer.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "We prepare appendices for feasibility studies and project preparation",
      "We assess dispersion, noise, emissions and transport for project variants",
      "We coordinate measurements and studies for the designer",
      "We link to EIA, building permitting and operating permits"
    ],
    whenNeeded: [
      "You are preparing an investment before submission to authorities",
      "You need to align the project with environmental requirements",
      "You are comparing technology location variants",
      "You want to prepare EIA or permitting documentation in good time"
    ],
    practicalSituations: [
      "technical appendices for a new production site",
      "documentation for investor technology and location choice",
      "preparing documentation before EIA submission",
      "aligning project with measurements and studies"
    ],
    docs: [
      "project documentation or feasibility study",
      "project description, variants and schedule",
      "documentation on existing state",
      "investor or designer requirements"
    ],
    outputs: [
      "technical appendices for investment decisions",
      "summary of measurements and studies in usable form",
      "recommendations for next steps in permitting"
    ],
    commonMistakes: [
      "Late involvement of expert documentation after project design",
      "Inconsistency between technical appendices and actual operation",
      "Overlooking transport or ancillary sources"
    ],
    relatedLinks: [
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        description: "EIA process and project notification."
      },
      {
        title: "Immission and noise impacts of projects",
        href: "/sluzby/imisni-dopady",
        description: "Integrated project impact assessment."
      }
    ]
  },
  "skoleni-chemicke-legislativy": {
    slug: "sluzby/skoleni-chemicke-legislativy",
    title: "Chemical legislation training",
    description:
      "Practical training on chemical legislation, safety data sheets, labelling, storage and handling of chemical substances for operations, stores, production and laboratories.",
    intro:
      "Practical chemical legislation training for operations handling substances and mixtures. We cover obligations, safety data sheets and rules for storage and handling.",
    contactService: "Školení chemického zákona / chemické legislativy",
    heroPanelTitle: "Typical reasons for enquiry",
    scope: [
      "basic obligations when handling chemical substances and mixtures",
      "orientation in safety data sheets and their practical use",
      "labelling, storage and safe use of chemical substances",
      "links to occupational health and safety, health protection and the environment",
      "operating records, internal rules and common mistakes in operations"
    ],
    whenNeeded: [
      "new chemical substances or mixtures in operation",
      "preparation for inspection or internal occupational health and safety audit",
      "need for practical documentation for employees",
      "expansion of operation, store or work activities involving chemicals"
    ],
    practicalSituations: [
      "training for a production plant, store or laboratory",
      "training for a paint shop, electroplating plant or automotive operation",
      "training for environmental officers, occupational health and safety staff and shift supervisors",
      "training for persons responsible for chemical substances and mixtures on site"
    ],
    docs: [
      "list of chemical substances and mixtures in use",
      "safety data sheets and internal procedures",
      "description of operation, store or work activities",
      "target employee group and training scope"
    ],
    outputs: [
      "attendance sheet",
      "training outline",
      "training completion certificate",
      "recommendations for internal documentation supplements as needed"
    ],
    commonMistakes: [
      "training conducted only formally without link to actual substances on site",
      "safety data sheets not available at workplaces",
      "employees lack clear rules for decanting and container labelling"
    ],
    relatedLinks: [
      {
        title: "Safety data sheets and labelling",
        href: "/sluzby/bezpecnostni-listy",
        description: "Sheet and label review as documentation for training."
      },
      {
        title: "Chemical substances in operation",
        href: "/sluzby/chemicke-latky",
        description: "Rules for storage, handling and responsibilities."
      },
      {
        title: "Expert articles",
        href: "/poradna",
        description: "Practical articles on chemical legislation and operations."
      }
    ]
  }
};
