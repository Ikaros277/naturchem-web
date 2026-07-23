type InlineServicePage = {
  slug: string;
  title: string;
  intro: string;
  scope: string[];
  whenNeeded: string[];
  practicalSituations: string[];
  docs: string[];
  outputs: string[];
  commonMistakes: string[];
  relatedLinks: { title: string; href: string; description: string }[];
  faqCategoryId: string;
};

export const inlineServicePagesEn: Record<string, InlineServicePage> = {
  "mereni-emisi": {
    slug: "sluzby/mereni-emisi",
    faqCategoryId: "emise",
    title: "Emission measurement from stationary sources",
    intro:
      "Authority request or scheduled compliance measurement? We measure **emissions** from a stack or vent and deliver an accredited **report** for **operating permits**, ČIŽP, the regional authority or ISPOP.",
    scope: [
      "We measure NOx, CO, SO₂, O₂, TOC/VOC, particulates, HCl, metals and other components per **operating permit** and brief",
      "We assess the measurement point, vent and consistency with the **operating manual**",
      "We agree preparation and conduct of measurement with operations",
      "We evaluate results against limits, the permit and any authority request"
    ],
    whenNeeded: [
      "You need periodic or one-off measurement under Decree No. 415/2012 Coll. and the **operating permit**",
      "The regional authority, **ČIŽP** or inspection body requires measurement",
      "You are changing fuel, raw material, technology or source capacity",
      "You need documentation for a **dispersion study**, **EIA**, expert assessment or operating documentation"
    ],
    practicalSituations: [
      "emission measurement at a paint shop after technology or filtration change",
      "boiler emission measurement per operating permit",
      "cogeneration unit measurement",
      "process vent measurement before permit change",
      "measurement as documentation for ISPOP, expert assessment or dispersion study",
      "measurement following regional authority or ČIŽP request"
    ],
    docs: [
      "**operating permit** decision or extract from **integrated permit** / operating manual",
      "technical source description, vent and filtration diagrams and current operating mode",
      "measurement history or previous reports (if available)",
      "photographs of the vent, measurement point and access conditions"
    ],
    outputs: [
      "emission measurement **report** with methodology and evaluation against limits",
      "brief summary for authority consultation or documentation supplement",
      "recommendations for next steps (repeat measurement, technology adjustment, follow-up studies)"
    ],
    commonMistakes: [
      "Measurement in non-representative operation (low load, atypical mode, maintenance state)",
      "Unclear measurement point or inconsistency with drawings",
      "Missing operating data on fuels, materials or actual mode",
      "Overlooked notification deadlines or site conditions"
    ],
    relatedLinks: [
      {
        title: "ISPOP and operating records",
        href: "/sluzby/ispop",
        description: "Consolidated operating records, emission data and link to annual reporting."
      },
      {
        title: "Expert assessments and operating manuals",
        href: "/sluzby/odborne-posudky",
        description: "Technical evaluation of the source, operating permit and documentation updates."
      },
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Follow-on assessment of source immission contribution in the project neighbourhood."
      }
    ]
  },
  "mereni-hluku": {
    slug: "sluzby/mereni-hluku",
    faqCategoryId: "hluk",
    title: "Noise measurement and acoustics",
    intro:
      "Noise complaint, **occupancy approval** or authority requirement? We perform field **noise measurement** and acoustic calculations according to noise sources and protected areas in the neighbourhood.",
    scope: [
      "We measure LAeq and LAFmax during normal operation in the field",
      "We assess transport and technology noise on site",
      "We verify the effectiveness of noise control measures after implementation",
      "We measure noise from HVAC, heat pumps and plant rooms"
    ],
    whenNeeded: [
      "Building permitting or **occupancy approval** is in progress",
      "You are addressing a noise complaint from operation",
      "You need a **noise study** for **EIA** or project change",
      "You are assessing noise from a heat pump, HVAC, cooling or industrial site"
    ],
    practicalSituations: [
      "noise measurement for occupancy approval or change of use",
      "noise study for a heat pump, HVAC or cooling system",
      "noise study for an industrial site with day and night operation",
      "verification of a noise complaint from technology or transport on site",
      "acoustic assessment as an EIA or building permitting appendix"
    ],
    docs: [
      "noise source locations and operating schedule",
      "building authority or **KHS** requirement",
      "layout of nearest protected development, transport and day/night operating mode"
    ],
    outputs: [
      "**noise measurement** **report**",
      "acoustic statement on technologies within a building",
      "**noise study** with measure recommendations"
    ],
    commonMistakes: [
      "Measurement at an unsuitable time or without considering operating mode",
      "Confusing measurement and computational study for a new project",
      "Incomplete description of noise sources and operating schedule"
    ],
    relatedLinks: [
      {
        title: "HVAC, cooling and heat pumps",
        href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
        description: "Noise from outdoor units, technology, occupancy approval and neighbourhood complaints."
      },
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Follow-on air quality assessment for industrial and transport projects."
      },
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Coordination of noise study with other permitting documentation."
      }
    ]
  },
  "pracovni-prostredi": {
    slug: "sluzby/pracovni-prostredi",
    faqCategoryId: "pracovni-prostredi",
    title: "Workplace environment measurement",
    intro:
      "Do you need to update **job categorisation** or have a **KHS** request? We measure noise, dust, chemicals, microclimate, lighting (including **outdoor artificial lighting**) and vibration — outputs for KHS, job categorisation and OHS.",
    scope: [
      "We measure noise, dust, chemicals, vibration, microclimate and lighting according to operations and shift patterns",
      "We assess exposure in welding shops, paint shops, halls and clean rooms",
      "We evaluate results in the context of limits and actual work load",
      "We prepare documentation for **job categorisation**, occupational health and safety and **KHS** consultation"
    ],
    whenNeeded: [
      "You need **job categorisation** or an update",
      "**KHS** requires workplace environment measurement",
      "You are changing technology or workplace layout",
      "Occupancy approval, internal occupational health and safety audit or verification of extraction and technical measures is in progress"
    ],
    practicalSituations: [
      "workplace environment measurement in a welding shop during job categorisation update",
      "dust measurement at a workstation after technology or extraction change",
      "workplace air chemical measurement during coating, cleaning or production",
      "microclimate, lighting or vibration verification for occupational health and safety and KHS",
      "documentation for occupancy approval or hygiene station inspection"
    ],
    docs: [
      "description of work operations and shift patterns",
      "**safety data sheets** of substances in use",
      "workplace layout and source locations",
      "information on extraction, technology, protective equipment and number of exposed workers"
    ],
    outputs: [
      "measurement reports with evaluation",
      "documentation for **job categorisation** and occupational health and safety",
      "recommendations for organisational and technical measures"
    ],
    commonMistakes: [
      "Measurement without considering shift patterns and actual operations",
      "Outdated categorisation after technology change",
      "Incomplete safety data sheets or workplace description"
    ],
    relatedLinks: [
      {
        title: "Vibration measurement",
        href: "/sluzby/mereni-vibraci",
        description: "Hand-arm and whole-body vibration."
      },
      {
        title: "Lighting measurement",
        href: "/sluzby/mereni-osvetleni",
        description: "Workplace and outdoor artificial lighting for KHS and job categorisation."
      },
      {
        title: "Microclimate measurement",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Temperature, humidity and air movement."
      },
      {
        title: "Noise measurement and acoustics",
        href: "/sluzby/mereni-hluku",
        description: "Workplace noise, occupancy approval, HVAC and technology sources."
      },
      {
        title: "Welding shops and metalworking",
        href: "/provozy-a-technologie/svarovny",
        description: "Dust, metals, NOx, ozone, noise and local extraction."
      },
      {
        title: "Paint shops and surface treatment",
        href: "/provozy-a-technologie/lakovny",
        description: "Chemicals, VOC, technical data sheets and coating line extraction."
      }
    ]
  },
  "rozptylove-studie": {
    slug: "sluzby/rozptylove-studie",
    faqCategoryId: "studie",
    title: "Dispersion studies",
    intro:
      "Has the regional authority or **EIA** requested a **dispersion study**? We model **immission contributions** from sources and transport — documentation for the investor, designer and authority.",
    scope: [
      "We model immission contribution of stationary sources and transport on site",
      "We assess operational variants and technical measures",
      "We evaluate impacts on surrounding development",
      "We prepare studies for boilers, landfills, recycling, biogas, glassworks and paint shops"
    ],
    whenNeeded: [
      "You are planning a new project or operation expansion",
      "The regional authority or **EIA** requires a **dispersion study**",
      "You need to compare technical solution variants",
      "You are changing the source, capacity, fuel, transport or emission parameters"
    ],
    practicalSituations: [
      "dispersion study for a new or modified air pollution source",
      "dispersion study for a landfill, recycling site or composting facility",
      "assessment of a boiler, paint shop, biogas plant or glassworks",
      "variant assessment of capacity, fuel, stack or transport load",
      "study as an EIA, expert assessment or operating permit appendix"
    ],
    docs: [
      "source parameters and emission data",
      "operating schedules and transport on site",
      "project layout and map documentation",
      "stack height, flue gas temperature and velocity, filtration technical data sheets and previous **emission measurements**"
    ],
    outputs: [
      "**dispersion study** with conclusions and recommendations",
      "variant assessment (if part of the brief)",
      "documentation for the investor, designer and authority"
    ],
    commonMistakes: [
      "Outdated emission data or operating schedules",
      "Study without variant assessment for capacity change",
      "Insufficient map and transport documentation"
    ],
    relatedLinks: [
      {
        title: "Emission measurement",
        href: "/sluzby/mereni-emisi",
        description: "Actual emission data for the source, vent or technology."
      },
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Link between dispersion study and screening proceedings and permitting."
      },
      {
        title: "Waste, landfills and recycling",
        href: "/provozy-a-technologie/odpady-recyklace",
        description: "Typical projects with transport, dust, immissions and capacity changes."
      }
    ]
  },
  "eia-posudky-poradenstvi": {
    slug: "sluzby/eia-posudky-poradenstvi",
    faqCategoryId: "eia",
    title: "EIA, assessments, operating manuals and IPPC",
    intro:
      "**EIA**, assessment, measurement and operating manual for one source? We coordinate permitting steps so data for the regional authority are consistent — including **IPPC** and **ISPOP**.",
    scope: [
      "We coordinate **EIA** — notification, screening proceedings, **technical appendices**",
      "We arrange expert assessments and source **operating permits**",
      "We prepare operating manuals and **IPPC** changes",
      "We review **ISPOP**, **consolidated records** and GHG"
    ],
    whenNeeded: [
      "You are planning a new project or capacity change",
      "**EIA screening** proceedings are in progress or you are supplementing after authority comments",
      "You are changing technology, **operating permit**, **operating manual** or integrated permit",
      "You are addressing annual **ISPOP**, **consolidated records** or GHG reporting"
    ],
    practicalSituations: [
      "EIA project notification for capacity change",
      "air expert assessment during technology or operating permit change",
      "air pollution source operating manual after mode or filtration change",
      "IPPC integrated permit change and coordination of expert appendices",
      "ISPOP, consolidated operating records or GHG reporting linked to operating data"
    ],
    docs: [
      "project description and process diagram",
      "site layout and transport",
      "existing decisions, opinions, **integrated permit** or **operating permit**",
      "emission, noise, transport and operating data including available reports"
    ],
    outputs: [
      "**expert assessment** or technical statement",
      "**operating manual** or update",
      "**EIA** project notification, **IPPC**, ISPOP or GHG documentation",
      "structured response to authority comments"
    ],
    commonMistakes: [
      "Uncoordinated noise and dispersion studies in EIA",
      "Outdated operating manual after technology change",
      "Incomplete response to authority comments"
    ],
    relatedLinks: [
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        description: "Source and transport immission contribution as a common EIA and permitting appendix."
      },
      {
        title: "Noise measurement and noise studies",
        href: "/sluzby/hlukove-studie",
        description: "Noise from technology, transport, HVAC and industrial sites."
      },
      {
        title: "Expert assessments",
        href: "/sluzby/odborne-posudky",
        description: "Standalone detail on expert assessments for sources and permitting."
      }
    ]
  }
};
