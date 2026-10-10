import type { SeoLanding } from "@/lib/seo-landings";

export type { SeoLanding };

type LandingSource = NonNullable<SeoLanding["sources"]>[number];

const sourceAirAct: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2012/201",
  label: "Act No. 201/2012 Coll., on Air Protection",
  description: "Current wording in the e-Sbírka collection of laws, in particular the rules for one-off emission measurements."
};

const sourceDecree415: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2012/415",
  label: "Decree No. 415/2012 Coll.",
  description: "Requirements for determining emission levels and carrying out measurements."
};

const sourceIspopJme: LandingSource = {
  href: "https://www.ispop.cz/nasazeni-formularu-jednorazoveho-mereni-emisi-f_ovz_term_jme-a-f_ovz_jme/",
  label: "ISPOP: forms for one-off emission measurements",
  description: "Official information on notifying the measurement date and the protocol data."
};

const sourcePublicHealthAct: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2000/258",
  label: "Act No. 258/2000 Coll., on Public Health Protection",
  description: "Current wording in e-Sbírka: job categorisation (Section 37 et seq.), noise measurement (Section 32a) and noise in building proceedings (Section 77)."
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "mereni-emisi-kotelen",
    title: "Emission measurements at boiler plants and combustion sources",
    metaDescription:
      "Emission measurements at boiler plants, burners and cogeneration units: NOx, CO, SO₂, particulates. Report for the Czech Environmental Inspectorate, operating permit and ISPOP. Send your permit and we will prepare a quote.",
    h1: "Emission measurements at boiler plants and combustion sources",
    intro:
      "We provide periodic and operational emission measurements from boiler plants, gas and oil burners, biomass sources and cogeneration units. The scope follows the operating permit and the actual source regime.",
    sections: [
      {
        heading: "What we measure at a boiler plant",
        paragraphs: [
          "We typically measure NOx, CO, SO₂, O₂, particulate matter and other parameters as required by the permit. The output is a report usable for operational decisions, authority requirements and the follow-up ISPOP notifications.",
          "We always verify the scope and frequency against the operating permit and the latest report, not against a generic template."
        ]
      },
      {
        heading: "How the measurement works",
        paragraphs: [
          "From the permit and the latest report we verify the source, the stack and the measured substances. We then agree the date and a representative operating regime so that the report reflects real operation.",
          "One-off emission measurements are carried out by an authorised person. The operator announces the date in ISPOP at least 5 working days before the measurement, and the protocol data are reported through ISPOP within 60 days."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "The valid operating permit, the latest report, the type of source and burner, the fuel, any technology changes and the planned operating regime. Photographs of the measuring point also help.",
          "We help operators prepare supporting documentation, select a representative operating regime and communicate with air protection authorities."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/kotelny",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Boiler plants and combustion sources",
    overviewHeading: "From the permit to the report",
    highlights: ["NOx, CO, SO₂ and particulates", "Report for inspectorate and authorities", "Link to ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Authorised emission measurements",
        description: "Who may measure, what to send and how the ISPOP notification works."
      },
      {
        href: "/sluzby/mereni-emisi",
        label: "Emission measurements by source type",
        description: "Scope, input documents, outputs and examples of operations."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "How to prepare a source before measurement",
        description: "A practical check of the permit, the source regime and the measuring point."
      }
    ],
    faq: [
      {
        question: "Which substances are measured at a boiler plant?",
        answer:
          "Typically NOx, CO, SO₂, O₂ and particulate matter. The exact scope is set by the operating permit, the fuel and the source type, so we verify it from your documents before quoting."
      },
      {
        question: "How often does measurement have to be repeated?",
        answer:
          "The frequency follows the operating permit and the nature of the source. Send us the permit and the latest report and we will determine the date of the next check."
      },
      {
        question: "Must the measurement be carried out by an authorised person?",
        answer:
          "Under the Air Protection Act, one-off emission measurements may only be carried out by an authorised person. From your permit we will confirm whether this applies to your source."
      },
      {
        question: "What is reported in ISPOP?",
        answer:
          "The operator announces the date of a one-off measurement at least 5 working days in advance. The protocol data are reported through ISPOP within 60 days."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal and methodological sources",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-emisi-lakoven",
    title: "Emission measurements at paint shops and surface treatment",
    metaDescription:
      "VOC/TOC and particulate matter emission measurements from paint lines, exhaust stacks and filters. Reports for operators and authorities.",
    h1: "Emission measurements at paint shops and surface treatment",
    intro:
      "For paint technologies we address VOC/TOC, particulate matter and related parameters from exhaust stacks and filtration equipment. Measurements are linked to operating rules and line regime.",
    sections: [
      {
        paragraphs: [
          "We assess the measurement location, select monitored substances and carry out the field work under representative operating conditions.",
          "The output serves operational decision-making, documentation updates and discussions with the building authority, Czech Environmental Inspectorate or regional authority."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/lakovny"
  },
  {
    slug: "mereni-emisi-bioplynovych-stanic",
    title: "Emission measurements at biogas plants and cogeneration",
    metaDescription:
      "Emission measurements at biogas plant engines and cogeneration units. Scheduling, reports and link to operator obligations.",
    h1: "Emission measurements at biogas plants and cogeneration units",
    intro:
      "At biogas plants and cogeneration units we address engine emission measurements, operating regime, measurement notification and link to obligations towards the Czech Environmental Inspectorate and other authorities.",
    sections: [
      {
        paragraphs: [
          "We help with measurement scheduling, preparation of supporting documentation and evaluation of results for operation and permitting documentation.",
          "Where needed, we also provide dispersion and noise studies or EIA supporting documentation for operational changes."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/bioplyn-biometan"
  },
  {
    slug: "mereni-emisi-drevozpracujicich-provoze",
    title: "Emission measurements at wood processing operations",
    metaDescription:
      "Emission measurements from sawmills, dryers, biomass boiler plants and process exhaust stacks at wood processing operations.",
    h1: "Emission measurements at wood processing operations",
    intro:
      "At wood processing operations we measure emissions from biomass combustion, dryers, process exhaust stacks and related sources. We also address dust exposure and workplace environment.",
    sections: [
      {
        paragraphs: [
          "We derive the measurement scope from the technology, fuel and authority or investor requirement.",
          "We prepare outputs for operating permits, regional hygiene station, regional authority and internal occupational health and safety."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/drevozpracujici"
  },
  {
    slug: "mereni-emisi-susaren",
    title: "Emission measurements at dryers",
    metaDescription:
      "Emission measurements from biomass dryers and process sources. Reports for operators and permitting proceedings.",
    h1: "Emission measurements at dryers",
    intro:
      "For dryers and technologies with combustion or discharge of gaseous emissions we provide emission parameter measurements under representative operating conditions.",
    sections: [
      {
        paragraphs: [
          "We typically address sources in agricultural and wood processing sites, including link to dust and workplace environment measurements.",
          "The project often includes preparation of supporting documentation for the authority and a plan for regular measurements."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/zemedelske-provozy"
  },
  {
    slug: "mereni-hluku-tepelneho-cerpadla-vzt",
    title: "Noise measurement for heat pumps and HVAC",
    metaDescription:
      "Noise measurement for heat pumps, HVAC and cooling equipment. A report for occupancy approval, building proceedings or resolving complaints from neighbours.",
    h1: "Noise measurement for heat pumps and HVAC",
    intro:
      "We verify the noise of an installed heat pump, HVAC or cooling equipment. You can use the result for occupancy approval, building proceedings or resolving a complaint.",
    sections: [
      {
        heading: "When you need a measurement",
        paragraphs: [
          "After the equipment is installed, at occupancy approval, after a complaint from neighbours or when verifying the effectiveness of a noise mitigation measure."
        ]
      },
      {
        heading: "What you send us",
        paragraphs: [
          "The location of the unit, the technical data sheet, the operating modes and the authority's requirement or a description of the complaint. Based on these documents we propose the measurement scope."
        ]
      },
      {
        heading: "What output you receive",
        paragraphs: [
          "A report on the measurement of actual operation. If the equipment is not installed yet, we recommend a noise study instead of a measurement."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    oboryHref: "/provozy-a-technologie/tepelna-cerpadla-vzt",
    layout: "demand",
    eyebrow: "Heat pumps, HVAC and cooling",
    overviewHeading: "What we need for the measurement",
    highlights: ["Measurement of actual operation", "Occupancy approval and building proceedings", "Verification after noise mitigation"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Noise measurement and acoustics",
        description: "An overview of noise measurements for operations, buildings and the workplace environment."
      },
      {
        href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
        label: "Noise study for a heat pump and HVAC",
        description: "Calculation of noise before the equipment is installed or when the project changes."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Noise studies",
        description: "Calculation-based assessment of technologies, sites and traffic."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Noise measurement for occupancy approval",
        description: "Measurement or noise study according to the authority's requirement."
      }
    ],
    faq: [
      {
        question: "Do I need a noise measurement or a noise study?",
        answer:
          "A measurement verifies the actual noise of equipment that is already installed. A noise study assesses the expected impact in advance and makes it possible to compare locations or operating variants."
      },
      {
        question: "How do I get a price for measuring the noise of a heat pump?",
        answer:
          "Send the location of the unit, the technical data sheet, the operating modes and the purpose of the measurement. From these documents we determine the scope and prepare a specific quote."
      },
      {
        question: "Do you also measure the noise of HVAC and cooling?",
        answer:
          "Yes. We also measure outdoor HVAC units, chillers, fans and related technologies in their actual operation."
      }
    ]
  },
  {
    slug: "mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Measurements for job categorisation (KHS)",
    metaDescription:
      "Measurements for job categorisation: noise, dust, chemical substances, microclimate, lighting and vibration under real operating conditions. Accredited laboratory No. 1599, documents for the hygiene station (KHS).",
    h1: "Workplace environment measurements for job categorisation",
    intro:
      "In production and operational halls we measure workplace factors for job categorisation, occupational health and safety documentation and discussions with the hygiene station. We measure under real operating conditions and deliver reports with recommended measures.",
    sections: [
      {
        heading: "When you need the measurement",
        paragraphs: [
          "The employer classifies jobs into categories according to the occurrence of factors that may affect employees' health (Section 37 of Act No. 258/2000 Coll.). You need measurements when classifying new jobs, after a significant change of technology or work organisation, or at the request of the hygiene station.",
          "We typically address dust, chemical substances, noise, lighting, microclimate and vibration under real operating conditions."
        ]
      },
      {
        heading: "Who may carry out the measurement",
        paragraphs: [
          "Measurements for classifying jobs into the second, third or fourth category may be arranged by the employer only through a holder of an accreditation certificate or a holder of an authorisation for the relevant measurements (Section 38 of Act No. 258/2000 Coll.).",
          "NATURCHEM is an accredited testing laboratory, No. 1599. Before quoting, we verify that the required methods fall within the accredited scope."
        ]
      },
      {
        heading: "What we need for the measurement",
        paragraphs: [
          "A description of work activities, shift length, number of workers, raw materials used and safety data sheets, work procedures, previous reports and any communication with the hygiene station.",
          "We prepare reports with recommendations for organisational and technical measures."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Job categorisation and hygiene station",
    overviewHeading: "From an operation description to a report for the hygiene station",
    highlights: ["Workplace environment factors", "Accredited laboratory No. 1599", "Documents for the hygiene station and OHS"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/podklady-pro-khs",
        label: "Documents for the hygiene station",
        description: "What to prepare after a hygiene station notice and how to tell the workplace from the surroundings."
      },
      {
        href: "/mereni-prasnosti",
        label: "Dust measurement",
        description: "Inhalable and respirable fractions at the workplace."
      },
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Workplace environment measurements",
        description: "Overview of factors, input documents and outputs."
      },
      {
        href: "/mereni-nove-haly",
        label: "Measurements for a new production hall",
        description: "A common scope of factors before operation starts."
      }
    ],
    faq: [
      {
        question: "Who classifies jobs into categories?",
        answer:
          "The employer classifies jobs into four categories according to the occurrence of factors and their risk (Section 37 of Act No. 258/2000 Coll.). Measurement results of the workplace environment often serve as the basis."
      },
      {
        question: "Who may carry out the measurement for categorisation?",
        answer:
          "A holder of an accreditation certificate or a holder of an authorisation for the relevant measurements (Section 38 of Act No. 258/2000 Coll.). NATURCHEM is an accredited testing laboratory, No. 1599; we verify the scope of methods before quoting."
      },
      {
        question: "Which factors are measured for categorisation?",
        answer:
          "Depending on the operation, typically dust, chemical substances in workplace air, noise, vibration, lighting and microclimate. We propose the specific scope from the description of activities and workplaces."
      },
      {
        question: "What if the jobs fall into the third or fourth category?",
        answer:
          "The public health protection authority decides on classifying jobs into higher categories on the basis of the employer's documents, including deadlines counted from the start of the work. Verify the exact obligations in the current wording of the act and with the hygiene station; we supply the measurement as an expert basis."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal sources",
    sources: [
      sourcePublicHealthAct,
      {
        href: "https://e-sbirka.gov.cz/sb/2003/432",
        label: "Decree No. 432/2003 Coll.",
        description: "Criteria for classifying jobs into categories and related employer obligations."
      }
    ]
  },
  {
    slug: "rozptylova-studie-povoleni",
    title: "Dispersion study for operating permit and EIA",
    metaDescription:
      "Immission dispersion study for operating permits, source changes or EIA. Authorised person, modelling and supporting documentation for authorities. Send your project and we will propose the scope.",
    h1: "Dispersion study for operating permit",
    intro:
      "We prepare dispersion studies of source immission contributions for operating permits, technology changes, EIA or discussions with authorities. The study is carried out by an authorised person within the relevant scope.",
    sections: [
      {
        heading: "When a study is needed",
        paragraphs: [
          "Most often for a new source, a change of technology, capacity or fuel, in operating permit proceedings or within an EIA. Whether and to what extent a study is required is determined by Act No. 201/2012 Coll. and the competent authority; we will verify your case with you.",
          "A dispersion study models the source's contribution to immission loads in the surroundings. It does not verify actual emissions; that is what emission measurements do."
        ]
      },
      {
        heading: "What we assess",
        paragraphs: [
          "We assess sources, meteorology, terrain and operating variants. The output serves as expert supporting documentation for the regional authority, Czech Environmental Inspectorate, building authority or EIA.",
          "We link the study to emission measurements, operating rules and existing project documentation."
        ]
      },
      {
        heading: "What we need for a quote",
        paragraphs: [
          "A description of the project and sources, the location of the site, stack parameters, emission data or measurement results, and the operating hours and regime. We will complete any missing data with you."
        ]
      }
    ],
    serviceHref: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Air protection and EIA",
    overviewHeading: "From the project to expert documentation",
    highlights: ["Authorised person", "Operating permit and EIA", "Link to emission measurements"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/rozptylove-studie",
        label: "Dispersion studies",
        description: "Scope, input documents and outputs of the service."
      },
      {
        href: "/odborny-posudek-zdroj-znecistovani",
        label: "Expert report on a source",
        description: "When an authority requires a report and how it follows from the study."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Authorised emission measurements",
        description: "Actual source emissions as an input for modelling."
      }
    ],
    faq: [
      {
        question: "When is a dispersion study needed?",
        answer:
          "Typically for a new source, a change of technology, capacity or fuel, and in operating permit or EIA proceedings. The specific obligation is set by the Air Protection Act and the competent authority, so we verify it for your project."
      },
      {
        question: "Who may prepare a dispersion study?",
        answer:
          "A dispersion study is prepared by an authorised person within the relevant scope. Before ordering, verify the scope of the supplier's authorisation."
      },
      {
        question: "What is the difference between a dispersion study and emission measurement?",
        answer:
          "Emission measurement determines the actual emissions of a source. A dispersion study models how the source contributes to the immission load of its surroundings. They are often used together."
      },
      {
        question: "What input documents do you need for a quote?",
        answer:
          "A description of the project and sources, the site plan, stack parameters, emission data or measurement reports and the operating regime. We will complete incomplete documents with you."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal sources",
    sources: [sourceAirAct]
  },
  {
    slug: "odborny-posudek-zdroj-znecistovani",
    title: "Expert report on an air pollution source",
    metaDescription:
      "Expert report under the Air Protection Act: operational change, permit, technology. NATURCHEM authorised person; output usable for the regional authority and the Czech Environmental Inspectorate.",
    h1: "Expert report on an air pollution source",
    intro:
      "We prepare expert reports for operational changes, new sources, permit updates or authority requirements. The report is prepared by an authorised person under Act No. 201/2012 Coll.",
    sections: [
      {
        heading: "When you need a report",
        paragraphs: [
          "For a new source, a change of technology, capacity, fuel or filtration, and when an authority requires expert documents in operating permit proceedings. The requirement of the competent authority decides; we will first verify your case with you."
        ]
      },
      {
        heading: "What the report covers",
        paragraphs: [
          "We evaluate technical and emission aspects of the source, propose the scope of measurements or modelling and prepare an output usable in administrative proceedings.",
          "We typically link the report to emission measurements, dispersion studies or operating documentation."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "A technical description of the source or technology, the operating permit or the authority's notice, project documentation and any available measurement reports. We will complete what is missing."
        ]
      }
    ],
    serviceHref: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Air protection",
    overviewHeading: "From an authority requirement to a usable report",
    highlights: ["Authorised person", "Source and technology changes", "Basis for administrative proceedings"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/odborne-posudky",
        label: "Expert reports",
        description: "Scope, input documents and outputs of the service."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Dispersion study",
        description: "Immission assessment that follows from the report."
      },
      {
        href: "/podklady-pro-cizp",
        label: "Documents for the inspectorate and regional authority",
        description: "Which documents to use after an authority notice."
      }
    ],
    faq: [
      {
        question: "Who may prepare an expert report?",
        answer:
          "An expert report under the Air Protection Act is prepared by an authorised person within the relevant scope. Before ordering, verify the scope of the supplier's authorisation."
      },
      {
        question: "When does an authority require a report?",
        answer:
          "Typically when a source or technology changes and in operating permit proceedings. It is determined unambiguously by the notice or decision of the authority, which you send us."
      },
      {
        question: "How does a report differ from a dispersion study?",
        answer:
          "A report summarises the technical and emission aspects of a source for administrative proceedings. A dispersion study models the source's contribution to the immission load. They often follow one another."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal sources",
    sources: [sourceAirAct]
  },
  {
    slug: "ispop-rocni-hlaseni-emise",
    title: "ISPOP: measurement notification and annual report",
    metaDescription:
      "ISPOP for source operators: notify the measurement date at least 5 working days in advance, report protocol data within 60 days and file the annual emission report. We help with the documents.",
    h1: "ISPOP: emission measurement notification and annual reporting",
    intro:
      "In ISPOP, the operator of an air pollution source mainly handles the notification of the date and data of a one-off emission measurement and the annual reporting. We help with operating records, checking that data are complete and linking them to measurements and the operating permit.",
    sections: [
      {
        heading: "Notifying the measurement date",
        paragraphs: [
          "Before a one-off emission measurement, the operator announces the date in ISPOP at least 5 working days in advance (form F_OVZ_TERM_JME). The site must be registered in CRŽP.",
          "An authorised representative can make the submission on the operator's behalf; the authorisation is set up in CRŽP according to the instructions on ispop.cz."
        ]
      },
      {
        heading: "Protocol and measurement data",
        paragraphs: [
          "One-off measurements are carried out by an authorised person. The authorised person prepares the protocol and reports the measurement data through ISPOP within 60 days (form F_OVZ_JME)."
        ]
      },
      {
        heading: "Annual reporting and operating records",
        paragraphs: [
          "We check the completeness of data and their consistency with measurements and the operating permit. For selected obligations we provide authorised verification.",
          "Suitable for operators after an inspection, a technology change or when taking over a new source."
        ]
      }
    ],
    serviceHref: "/sluzby/ispop",
    contactService: "ISPOP",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "ISPOP and air protection",
    overviewHeading: "What the operator reports in ISPOP",
    highlights: ["Measurement date notification", "Protocol data within 60 days", "Annual emission reporting"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Authorised emission measurements",
        description: "Who may measure and what to send before the date."
      },
      {
        href: "/sluzby/ispop",
        label: "ISPOP",
        description: "Scope of help with records and reporting."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "How to prepare a source before measurement",
        description: "A practical check of the permit, the source regime and the measuring point."
      }
    ],
    faq: [
      {
        question: "Who announces the emission measurement date in ISPOP?",
        answer:
          "The operator announces the date at least 5 working days before the measurement. An authorised representative with authorisation set up in CRŽP can make the submission on its behalf."
      },
      {
        question: "By when are the protocol data reported?",
        answer:
          "The authorised person prepares the protocol and reports the measurement data through ISPOP within 60 days."
      },
      {
        question: "What do I need before submitting the form?",
        answer:
          "The site registered in CRŽP and valid source data from the operating permit. If you are not sure, send us the permit and the latest report and we will verify how to proceed."
      },
      {
        question: "What do you help with in ISPOP?",
        answer:
          "With preparing documents, checking completeness and consistency with measurements and the operating permit, and with the link to annual reporting. We agree the scope of help in advance, including any acting on behalf of the operator."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal and methodological sources",
    sources: [sourceIspopJme, sourceAirAct, sourceDecree415]
  },
  {
    slug: "mereni-emisi-dieselagregat",
    title: "Emission measurements from diesel generators and backup sources",
    metaDescription:
      "Emission measurements from diesel generators, backup sources and standby operation. Authorised measurement and report for authorities.",
    h1: "Emission measurements from diesel generators and backup sources",
    intro:
      "We provide one-off emission measurements from diesel generators and backup sources including preparation for ISPOP measurement notification. Measurements are carried out by an authorised person.",
    sections: [
      {
        paragraphs: [
          "We typically measure NOx, CO, particulate matter and other parameters according to the permit and source type.",
          "The output serves operating rules, operating permits and annual emission reporting."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  },
  {
    slug: "autorizovana-osoba-mereni-emisi",
    title: "Authorised person for emission measurements in the Czech Republic",
    metaDescription:
      "One-off emission measurements may only be carried out by an authorised person. NATURCHEM: accredited laboratory No. 1599 with authorisation for emissions. Preparation, report and data for ISPOP.",
    h1: "Authorised emission measurements",
    intro:
      "NATURCHEM carries out authorised one-off emission measurements of stationary sources. We check your documents, measure the source in representative operation and hand over an accredited report.",
    sections: [
      {
        heading: "Send the permit and the latest report",
        paragraphs: [
          "From the permit we verify the sources, stacks, measured substances and frequency. Attach a technical description, technology changes, photographs of the measuring point and the planned operating regime."
        ]
      },
      {
        heading: "We prepare the measurement for real operation",
        paragraphs: [
          "Before the date we agree the scope, access to the stack and a representative regime of the source. The operator announces the date in ISPOP at least 5 working days before the measurement."
        ]
      },
      {
        heading: "We hand over the report and report the data",
        paragraphs: [
          "Only an authorised person may carry out a one-off measurement. We prepare the report and report the measurement data through ISPOP within 60 days.",
          "From our practice: at a casting machine we measured particulate matter and zinc at a process stack. The output was an authorised emission measurement report."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Air protection",
    overviewHeading: "From input documents to a usable report",
    highlights: ["Accredited laboratory No. 1599", "Boiler plants, paint shops and technologies", "Report and data for ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/mereni-emisi",
        label: "Emission measurements by source type",
        description: "Scope, input documents, outputs and examples of operations."
      },
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Accreditation, authorisation and documents",
        description: "The laboratory's certificates and an overview of expert authorisations."
      },
      {
        href: "/ispop-rocni-hlaseni-emise",
        label: "ISPOP: measurement notification and annual reporting",
        description: "Date, protocol data and the link to annual reporting."
      },
      {
        href: "/mereni-emisi-kotelen",
        label: "Boiler plant emission measurements",
        description: "NOx, CO, SO₂ and particulates at combustion sources."
      },
      {
        href: "/podklady-pro-cizp",
        label: "Documents for the inspectorate and regional authority",
        description: "Which documents to use after an authority notice."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "How to prepare a source before measurement",
        description: "A practical check of the permit, the source regime and the measuring point."
      }
    ],
    faq: [
      {
        question: "Who may carry out a one-off emission measurement?",
        answer:
          "Under the Air Protection Act, a one-off emission measurement may only be carried out by an authorised person. Before ordering, it is also advisable to verify the accredited scope of the methods used."
      },
      {
        question: "What do you need for a quote and for preparing the measurement?",
        answer:
          "Send the valid operating permit, the latest report, a technical description of the source and stacks, information on technology changes and the planned operating regime. Photographs of the measuring point also help."
      },
      {
        question: "Who announces the date and data in ISPOP?",
        answer:
          "The operator announces the date at least 5 working days before the measurement. The authorised person prepares the report and reports the measurement data through ISPOP within 60 days."
      },
      {
        question: "What is the difference between authorisation and accreditation?",
        answer:
          "Authorisation entitles a person to carry out activities defined by law. Accreditation confirms a laboratory's technical competence for specific methods and a defined scope of tests."
      },
      {
        question: "What do I need to have ready in ISPOP before the measurement?",
        answer:
          "The site must be registered in CRŽP. An authorised representative with authorisation set up in CRŽP can make the submission on the operator's behalf. We will go through the procedure with you before the date."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal and methodological sources",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-prasnosti",
    title: "Dust measurements in the workplace and in operations",
    metaDescription:
      "Dust measurements — inhalable and respirable fraction, workplace environment and job categorisation. NATURCHEM accredited laboratory No. 1599.",
    h1: "Dust measurements in the workplace",
    intro:
      "NATURCHEM measures dust in the workplace including inhalable and respirable fractions. Outputs serve the regional hygiene station, job categorisation, occupational health and safety and proposals for technical measures.",
    sections: [
      {
        paragraphs: [
          "We measure at selected workplaces according to actual operations and shift patterns. For bulk materials and technologies with extraction we also assess the effectiveness of protective measures.",
          "The report is usable for the hygiene station, job categorisation updates and internal occupational health and safety documentation."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "mereni-tezkych-kovu-emise",
    title: "Heavy metal measurements in flue gases and workplace air",
    metaDescription:
      "Heavy metal measurements in emissions from stationary sources and in workplace air. Accredited scope of NATURCHEM laboratory.",
    h1: "Heavy metal measurements",
    intro:
      "Within the accredited scope of the NATURCHEM laboratory we measure heavy metals in emissions from stationary sources and in workplace air. Typically As, Cd, Cr, Ni, Pb, Hg and other metals as required by the permit or hygiene station.",
    sections: [
      {
        paragraphs: [
          "For emissions we provide sampling into liquid sorbent and analytical evaluation. In the workplace we measure exposure at welding, grinding or metal handling workplaces.",
          "The output is a report with evaluation against limits or supporting documentation for job categorisation."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/svarovny"
  },
  {
    slug: "podklady-pro-khs",
    title: "Supporting documentation for the hygiene station — workplace and noise",
    metaDescription:
      "Preparation of supporting documentation for the hygiene station (KHS): noise, dust, chemical substances, microclimate and job categorisation.",
    h1: "Supporting documentation for the hygiene station",
    intro:
      "We help operators prepare supporting documentation for the hygiene station after an inspection notice, during job categorisation or a technology change. NATURCHEM measures workplace factors within the accredited scope.",
    sections: [
      {
        heading: "What the hygiene station typically requires",
        paragraphs: [
          "We typically address workplace noise, dust, chemical substances, microclimate, lighting and vibration. We propose the measurement scope according to operations and authority requirements.",
          "Reports serve as expert supporting documentation for job categorisation and communication with the hygiene station."
        ]
      },
      {
        heading: "The workplace or the surroundings of the site",
        paragraphs: [
          "The hygiene station may deal with employee exposure at the workplace as well as with noise affecting nearby protected spaces. These are different measurements with different purposes, so we first clarify which case you are dealing with.",
          "For workplaces we follow up with job categorisation. For noise from technology or a building, noise measurement or a noise study helps."
        ]
      },
      {
        heading: "How we proceed after a notice",
        paragraphs: [
          "Send the notice or decision of the hygiene station, a description of the operation and any available reports. We propose the scope and date, carry out the measurement in real operation and hand over reports with recommended measures."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Hygiene station (KHS)",
    overviewHeading: "From a hygiene station notice to reports",
    highlights: ["Workplace environment and noise", "Accredited laboratory No. 1599", "Documents for job categorisation"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/mereni-pracovniho-prostredi-kategorizace-praci",
        label: "Measurements for job categorisation",
        description: "Who may measure and what to prepare for job classification."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Noise measurement for occupancy approval",
        description: "Noise from technology and buildings in relation to protected spaces."
      },
      {
        href: "/mereni-prasnosti",
        label: "Dust measurement",
        description: "Inhalable and respirable fractions at the workplace."
      }
    ],
    faq: [
      {
        question: "What should I do after a notice from the hygiene station?",
        answer:
          "Send us the notice or decision, a description of the operation and any available reports. From them we will clarify whether it concerns the workplace or noise in the surroundings and propose the measurement scope."
      },
      {
        question: "Is a measurement carried out in-house enough?",
        answer:
          "For classifying jobs into the second, third or fourth category, only a holder of an accreditation certificate or of an authorisation for the relevant measurements may measure (Section 38 of Act No. 258/2000 Coll.). An in-house indicative measurement is therefore usually not sufficient as a basis; we will confirm this according to the notice."
      },
      {
        question: "Which workplace factors do you measure?",
        answer:
          "Depending on the nature of the operation: dust, chemical substances, noise, vibration, lighting and microclimate. We propose the specific scope from the description of operations and the requirement of the hygiene station."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal sources",
    sources: [sourcePublicHealthAct]
  },
  {
    slug: "mereni-hluku-ceske-budejovice",
    title: "Noise measurement in České Budějovice: operations and KHS",
    metaDescription:
      "Noise measurement in České Budějovice for operations, workplaces, the hygiene station (KHS) and occupancy approval. Laboratory at Rudolfovská 119/57; we propose a suitable scope.",
    h1: "Noise measurement in České Budějovice",
    intro:
      "Do you need to document noise from an operation, at a workplace or for occupancy approval? We choose a suitable measurement regime and prepare a report according to its purpose. Our laboratory is at Rudolfovská 119/57 in České Budějovice.",
    sections: [
      {
        heading: "When a noise measurement is useful",
        paragraphs: [
          "We measure noise from production technologies, ventilation, cooling and other equipment, workplace noise and noise related to occupancy approval, a change of operation or a complaint from the surrounding area.",
          "We propose the measurement scope according to the noise sources, the operating regime and the purpose of the output — for example for the hygiene station (KHS), the building authority, the employer or the operator's internal decision."
        ]
      },
      {
        heading: "What to send for a quick assessment",
        paragraphs: [
          "It is enough to state the address of the operation, describe the noise sources and their operating hours, and attach the available site plan, photographs or the authority's requirement. Based on these documents we recommend a suitable scope and measurement regime.",
          "If you are dealing with a specific complaint or occupancy approval, it also helps to identify the protected space and to tell us when the technology is under its highest load."
        ]
      },
      {
        heading: "Output and follow-up solutions",
        paragraphs: [
          "The output is a report according to the agreed purpose of the measurement. If a future state needs to be assessed or measures proposed, we follow up with a noise study or an acoustic assessment.",
          "The local office in České Budějovice makes it easier to agree on assignments in the city and the South Bohemian Region."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "České Budějovice" },
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "České Budějovice and South Bohemia",
    overviewHeading: "What we measure and document for you",
    highlights: ["Operational noise", "Workplace noise", "Documents for KHS and occupancy approval"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Noise measurement",
        description: "Operations, technologies, workplaces and protected spaces."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Noise study",
        description: "Assessment of future operation, technology or construction."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Measurements for occupancy approval",
        description: "Noise, lighting and workplace environment in one assignment."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Noise measurement for occupancy approval",
        description: "Measurement or noise study according to the authority's requirement."
      }
    ],
    faq: [
      {
        question: "What documents should I send for a noise measurement?",
        answer:
          "Send the address of the operation, a description of the noise sources and their operating hours. A site plan, photographs or the requirement of the hygiene station (KHS) or building authority also help."
      },
      {
        question: "Do you measure operational noise as well as workplace noise?",
        answer:
          "Yes. The purpose, place and regime of the measurement differ, so we first clarify whether you need to document the impact of the operation on its surroundings, the exposure of employees or a document for occupancy approval."
      },
      {
        question: "Can the measurement be used when dealing with a noise complaint?",
        answer:
          "We propose the scope according to the noise source, the time of day or night and the protected space. Before measuring we need to know the specific situation and the purpose of the output."
      }
    ]
  },
  {
    slug: "podklady-pro-cizp",
    title: "Supporting documentation for the Czech Environmental Inspectorate and regional authority",
    metaDescription:
      "Emission measurements, expert reports and operating documentation as supporting material for the Czech Environmental Inspectorate, regional authority and source operating permits.",
    h1: "Supporting documentation for the Czech Environmental Inspectorate and regional authority",
    intro:
      "We provide emission measurements, expert reports, dispersion studies or operating rules as supporting documentation for the Czech Environmental Inspectorate, regional authority or administrative proceedings on operating permits.",
    sections: [
      {
        heading: "Which document serves which purpose",
        paragraphs: [
          "A one-off emission measurement is carried out by an authorised person and shows the actual emissions of a source. A dispersion study models the source's contribution to immission loads, an expert report summarises the technical aspects of the source and operating rules govern its operation.",
          "We link the work to the operating permit, inspection notice or technology change and select the document that the authority actually requires."
        ]
      },
      {
        heading: "Link to ISPOP",
        paragraphs: [
          "We prepare outputs so they are usable in communication with authorities — including ISPOP and annual emission reporting where needed. The operator announces the measurement date at least 5 working days in advance and the protocol data are reported within 60 days."
        ]
      },
      {
        heading: "What to send after a notice",
        paragraphs: [
          "The notice of the Czech Environmental Inspectorate or regional authority, the valid operating permit, the latest report and a description of technology changes. From them we propose the scope and the order of steps."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Czech Environmental Inspectorate and regional authority",
    overviewHeading: "From an authority notice to the right document",
    highlights: ["Emission measurements", "Expert report and dispersion study", "Link to ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Authorised emission measurements",
        description: "Who may measure and how the ISPOP notification works."
      },
      {
        href: "/odborny-posudek-zdroj-znecistovani",
        label: "Expert report on a source",
        description: "Basis for operational change and permit."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Dispersion study",
        description: "Immission assessment for operating permit and EIA."
      },
      {
        href: "/ispop-rocni-hlaseni-emise",
        label: "ISPOP and annual reporting",
        description: "Date notification, protocol data and annual reporting."
      }
    ],
    faq: [
      {
        question: "Which document does the Inspectorate or regional authority require?",
        answer:
          "It is set by the authority's notice or decision. Most often it is a report from an authorised emission measurement, an expert report, a dispersion study or operating rules. Send us the notice and we will select the right document."
      },
      {
        question: "Who may measure emissions for an authority?",
        answer:
          "Under the Air Protection Act, a one-off emission measurement may only be carried out by an authorised person. Before ordering, verify the scope of authorisation and accredited methods."
      },
      {
        question: "How is a measurement notified in ISPOP?",
        answer:
          "The operator announces the measurement date at least 5 working days in advance, and the protocol data are reported through ISPOP within 60 days."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal and methodological sources",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-hluku-ke-kolaudaci",
    title: "Noise measurement for occupancy approval",
    metaDescription:
      "Noise measurement for occupancy approval of technologies, HVAC and heat pumps. We advise whether a noise study is enough or a measurement is needed. Send the requirement of the building authority or hygiene station.",
    h1: "Noise measurement for occupancy approval",
    intro:
      "Does the building authority or hygiene station require evidence of noise from technology, ventilation or a heat pump? We advise whether a noise study is enough or a measurement in operation is needed, and we arrange the measurement for the relevant protected space.",
    sections: [
      {
        heading: "Measurement or noise study",
        paragraphs: [
          "A noise study assesses the proposed state by calculation, while a measurement verifies actual operation. For permits for protected buildings, for example blocks of flats, family houses, schools, health and social buildings, as well as for buildings that are sources of noise in an area burdened by excessive noise, the law allows either a noise measurement under Section 32a or a noise study with a proposal of measures (Section 77(5) of Act No. 258/2000 Coll.).",
          "What is required for the occupancy approval of your building is determined by the conditions of the permit and the requirement of the building authority or hygiene station. Send them to us and we will recommend a suitable procedure."
        ]
      },
      {
        heading: "Who may measure noise",
        paragraphs: [
          "Under this act, noise in the human environment may only be measured by a holder of an accreditation certificate or a holder of an authorisation under Section 83c (Section 32a of Act No. 258/2000 Coll.).",
          "Before quoting, we confirm that the required method falls within the accredited scope of NATURCHEM."
        ]
      },
      {
        heading: "What we typically measure",
        paragraphs: [
          "Outdoor heat pump units, ventilation, cooling, technologies and traffic within the site. During the measurement the equipment must operate in a regime that corresponds to the purpose of the report."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "The requirement or conditions of the building authority or hygiene station, the address and designation of the protected space, a description of the noise sources and their operating hours, technical data sheets and any earlier noise study. We will complete what is missing."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku ke kolaudaci",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Occupancy approval and protected spaces",
    overviewHeading: "From an authority requirement to a report",
    highlights: ["Measurement or study", "HVAC and heat pumps", "Report for building authority and hygiene station"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-hluku-tepelneho-cerpadla-vzt",
        label: "Noise from heat pumps and HVAC",
        description: "Outdoor units, cooling and the protected outdoor space."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Noise study",
        description: "Assessment of proposed technology or a building by calculation."
      },
      {
        href: "/sluzby/mereni-hluku",
        label: "Noise measurement and acoustics",
        description: "Operations, technologies, workplaces and protected spaces."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Measurements for occupancy approval",
        description: "Noise, lighting and workplace environment in one assignment."
      }
    ],
    faq: [
      {
        question: "Is a noise measurement always needed for occupancy approval?",
        answer:
          "Not always. It depends on the conditions of the permit and the requirement of the building authority or hygiene station. Send them to us and we will recommend whether a noise study is enough or a measurement in operation is necessary."
      },
      {
        question: "Who may measure noise for a building authority or hygiene station?",
        answer:
          "Noise in the human environment may only be measured by a holder of an accreditation certificate or a holder of an authorisation under Section 83c of Act No. 258/2000 Coll. (Section 32a)."
      },
      {
        question: "Can a noise study replace a measurement?",
        answer:
          "For permits of certain buildings the law allows a noise measurement or a noise study with a proposal of measures (Section 77(5)). The authority may still require verification of actual operation after completion in the permit conditions; the specific requirement decides."
      },
      {
        question: "Do you measure the noise of a heat pump or ventilation?",
        answer:
          "Yes. We arrange the measurement for the protected space stated in the authority's requirement. The equipment must operate in a regime corresponding to the purpose of the report, so we agree the date in advance."
      }
    ],
    sourcesEyebrow: "Verified information",
    sourcesHeading: "Legal sources",
    sources: [sourcePublicHealthAct]
  },
  {
    slug: "mereni-pro-kolaudaci",
    title: "Measurements for occupancy approval: noise, lighting and workplaces",
    metaDescription:
      "Measurements for occupancy approval of an operation or building: noise, lighting, microclimate and workplace environment. Send the requirement of the hygiene station or building authority.",
    h1: "Measurements for occupancy approval — noise, lighting and workplace environment",
    intro:
      "Document noise, lighting and the workplace environment in one coordinated assignment. We determine the scope from the project and the requirement of the hygiene station (KHS) or building authority.",
    sections: [
      {
        heading: "What is usually documented",
        paragraphs: [
          "Most often the noise of technology, lighting, microclimate and workplace environment factors. The specific scope is determined by the purpose of the building and the position of the authority."
        ]
      },
      {
        heading: "Noise for occupancy approval",
        paragraphs: [
          "For HVAC, cooling or a heat pump, a noise measurement report for a living room or another protected space may be required. For a proposal, a noise study may be more suitable."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "The authority's requirement, the relevant part of the project, a description of the technology, the location and the deadline are enough. We will clarify any missing documents with you."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Kolaudační měření",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Occupancy approval and hygiene station",
    overviewHeading: "What we verify for you",
    highlights: ["Noise and acoustics", "Lighting and microclimate", "Workplace environment"],
    heroTheme: "mereni-pro-kolaudaci",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Noise measurement",
        description: "Operations, technology, HVAC and protected spaces."
      },
      {
        href: "/sluzby/mereni-osvetleni",
        label: "Lighting measurement",
        description: "Artificial and daylight lighting of workplaces and rooms."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Noise measurement for occupancy approval",
        description: "When a noise study is enough and when a measurement is needed."
      },
      {
        href: "/mereni-nove-haly",
        label: "Measurements for a new hall",
        description: "A common scope of several workplace environment factors."
      }
    ],
    faq: [
      {
        question: "What measurements do we need for occupancy approval?",
        answer:
          "It depends on the purpose of the building, the technology and the requirement of the hygiene station or building authority. Most often noise, lighting, microclimate and workplace environment are addressed."
      },
      {
        question: "Is the authority's requirement enough for a quote?",
        answer:
          "For an initial assessment, usually yes. We will then request only the relevant part of the project, a description of the operation and the data needed for the specific measurement."
      }
    ]
  },
  {
    slug: "mereni-nove-haly",
    title: "Measurements for a new production hall: hygiene station and occupancy approval",
    metaDescription:
      "Measurements for a new hall: noise, lighting, microclimate, vibration, dust and chemical substances. A common scope for the hygiene station, workplaces and occupancy approval.",
    h1: "Measurements for a new hall and the workplace environment",
    intro:
      "We prepare a common measurement scope according to the technology, the workplaces and the requirement of the hygiene station. You order only the factors that match actual operation.",
    sections: [
      {
        heading: "What can be measured",
        paragraphs: [
          "Depending on production, it may involve noise, lighting, microclimate, vibration, dust or chemical substances in workplace air."
        ]
      },
      {
        heading: "When to schedule the measurement",
        paragraphs: [
          "The technology and the workplaces must be in a representative regime. We therefore align the date with the start of operation of the hall, the shift pattern and the required output."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "A floor plan, a description of workplaces and shifts, a list of technologies, safety data sheets and the requirement of the hygiene station or building authority help."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření nové haly",
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "New or modified hall",
    overviewHeading: "A scope based on actual operation",
    highlights: ["Hygiene station and categorisation", "Several factors in one assignment", "Date based on operation"],
    heroTheme: "mereni-nove-haly",
    relatedLinks: [
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Workplace environment",
        description: "Dust, chemical substances, noise and job categorisation."
      },
      {
        href: "/sluzby/mereni-mikroklimatu",
        label: "Microclimate measurement",
        description: "Temperature, humidity and air flow."
      },
      {
        href: "/pro-stavebni-firmy",
        label: "Documents for construction companies",
        description: "Measurements and studies following on from the project and occupancy approval."
      }
    ],
    faq: [
      {
        question: "Which factors are measured in a new hall?",
        answer:
          "Depending on operation, it may be noise, lighting, microclimate, heat stress, vibration, dust or chemical substances. The scope is determined by the work and the purpose of the output."
      },
      {
        question: "Must the technology already be in operation?",
        answer:
          "To measure actual exposure and operating noise, the relevant technology must be in a representative regime. We therefore plan the date according to the readiness of the hall."
      },
      {
        question: "What should we send for a quote for measuring the hall?",
        answer:
          "A floor plan, a description of workplaces and shifts, a list of technologies, safety data sheets and the requirement of the hygiene station or building authority help."
      }
    ]
  },
  {
    slug: "pro-stavebni-firmy",
    title: "Project documentation for construction companies and designers",
    metaDescription:
      "Project documentation for construction companies and designers: noise and dispersion studies, expert reports, EIA and technical annexes.",
    h1: "Studies and documentation for the project",
    intro:
      "We prepare dispersion and noise studies, expert reports, EIA and technical annexes according to the project, the technology and the authority's requirement.",
    sections: [
      {
        heading: "Documents before construction",
        paragraphs: [
          "For a proposed state, a noise or dispersion study, an expert or acoustic report, an EIA or a technical annex to the project may be needed."
        ]
      },
      {
        heading: "Verification after construction",
        paragraphs: [
          "After technologies are installed, noise, lighting, microclimate and the workplace environment can be verified. We schedule the measurement for representative operation."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "For an initial assessment, a site plan, a technical report, technology parameters, the authority's opinion, the location and the requested deadline are enough."
        ]
      }
    ],
    serviceHref: "/sluzby/eia-posudky-poradenstvi",
    contactService: "Odborné posudky",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "For designers and contractors",
    overviewHeading: "Documentation by project phase",
    highlights: ["Studies before construction", "Expert reports and EIA", "Documents for the authority"],
    heroTheme: "technicke-prilohy",
    relatedLinks: [
      {
        href: "/sluzby/hlukove-studie",
        label: "Noise studies",
        description: "Calculation of noise from technologies, traffic and construction projects."
      },
      {
        href: "/sluzby/rozptylove-studie",
        label: "Dispersion studies",
        description: "Immission contributions and operating variants of the project."
      },
      {
        href: "/sluzby/eia-posudky-poradenstvi",
        label: "EIA and expert reports",
        description: "Documents for assessing a project and for permit proceedings."
      }
    ],
    faq: [
      {
        question: "When does a construction company need a study and when a measurement?",
        answer:
          "A study usually assesses the proposed state before construction. A measurement verifies the actual state after installation or during operation. The specific requirement is determined by the project and the administrative authority."
      },
      {
        question: "What documents should the designer send?",
        answer:
          "For an initial assessment, a site plan, a technical report, technology parameters, operating hours, traffic and the opinions of the relevant authorities help."
      },
      {
        question: "Can a study and a follow-up measurement for occupancy approval both be handled?",
        answer:
          "Yes. They are, however, separate outputs in different phases of the project. It is advisable to keep updating the parameters according to the technology actually installed."
      }
    ]
  },
  {
    slug: "mereni-hluku-havlickuv-brod",
    title: "Noise measurement in Havlíčkův Brod: operations and occupancy approval",
    metaDescription:
      "Noise measurement in Havlíčkův Brod and the Vysočina Region for operations, workplaces, technologies and occupancy approval. NATURCHEM is based in Havlíčkův Brod.",
    h1: "Noise measurement in Havlíčkův Brod and the Vysočina Region",
    intro:
      "We measure the noise of an operation, technology or workplace in Havlíčkův Brod and the Vysočina Region. We align the purpose of the measurement with the requirement of the hygiene station (KHS) or building authority.",
    sections: [
      {
        heading: "What we measure",
        paragraphs: [
          "Production equipment, HVAC, cooling, traffic within the site and noise at the workplace. The purpose of the report determines the measurement regime."
        ]
      },
      {
        heading: "Measurement or study",
        paragraphs: [
          "A measurement verifies actual operation. For proposed technology, a noise study or an acoustic report may be more suitable."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "State the address, the noise source, the operating hours, the purpose of the report and the deadline. Attach the authority's requirement, a site plan or photographs."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "AdministrativeArea", name: "Kraj Vysočina" },
    internalLinkPriority: 80,
    layout: "demand",
    eyebrow: "Havlíčkův Brod and the Vysočina Region",
    overviewHeading: "Measurements for operation and construction",
    highlights: ["Operational noise", "Workplace noise", "Occupancy approval and KHS"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-pro-kolaudaci",
        label: "Measurements for occupancy approval",
        description: "Several quantities according to the project and the authority's requirement."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Noise studies",
        description: "Assessment of a proposed state and technologies."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Noise measurement for occupancy approval",
        description: "Measurement or noise study according to the authority's requirement."
      }
    ],
    faq: [
      {
        question: "Do you measure noise in Havlíčkův Brod and the Vysočina Region?",
        answer:
          "Yes. NATURCHEM is based in Havlíčkův Brod, so we can agree the date directly. Send the address, a description of the noise source, the operating hours and the authority's requirement."
      },
      {
        question: "How do I know whether I need a measurement or a noise study?",
        answer:
          "A measurement verifies the actual operation of an existing source, while a study assesses the proposed state. According to the requirement of the hygiene station or building authority we will recommend a suitable approach."
      },
      {
        question: "What should I send for an initial assessment?",
        answer:
          "The address, the noise source, the operating hours, the purpose of the report and the deadline. Attach the authority's opinion, a site plan or photographs."
      }
    ]
  },
  {
    slug: "mereni-hluku-praha",
    title: "Noise measurement in Prague: technologies, HVAC and occupancy approval",
    metaDescription:
      "Noise measurement in Prague for premises, technologies, HVAC, heat pumps and occupancy approval. NATURCHEM office in Prague 5.",
    h1: "Noise measurement in Prague",
    intro:
      "We measure the noise of technology, HVAC, a heat pump or premises in Prague. According to the purpose we recommend a measurement, a study or both in sequence.",
    sections: [
      {
        heading: "What we measure",
        paragraphs: [
          "Outdoor units, cooling, ventilation, plant rooms and operational noise. The equipment must operate in a regime that corresponds to the purpose of the report."
        ]
      },
      {
        heading: "Measurement or study",
        paragraphs: [
          "A measurement verifies an existing source. For proposed equipment, a noise study or an acoustic report may be more suitable."
        ]
      },
      {
        heading: "What to send us",
        paragraphs: [
          "State the address, the noise source, the operating hours, the purpose of the measurement and the deadline. Attach the authority's opinion, a site plan, a technical data sheet or photographs."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "Praha" },
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "Prague and surroundings",
    overviewHeading: "Noise of technologies and premises",
    highlights: ["HVAC and cooling", "Heat pumps", "Occupancy approval and change of use"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-hluku-tepelneho-cerpadla-vzt",
        label: "Noise from heat pumps and HVAC",
        description: "A specialised page for outdoor units and cooling."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Measurements for occupancy approval",
        description: "Noise, lighting and workplace environment."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Noise measurement for occupancy approval",
        description: "Measurement or noise study according to the authority's requirement."
      }
    ],
    faq: [
      {
        question: "Do you measure noise in Prague?",
        answer:
          "Yes. NATURCHEM has an office in Prague 5. Send the address, a description of the noise source, the operating hours and the authority's requirement and we will propose the measurement scope."
      },
      {
        question: "Do you measure the noise of a heat pump or HVAC?",
        answer:
          "Yes. The equipment must operate in a regime that corresponds to the purpose of the report, so we agree the date in advance. For proposed equipment, a noise study may be more suitable."
      },
      {
        question: "What should I send for an initial assessment?",
        answer:
          "The address, the noise source, the operating hours, the purpose of the measurement and the deadline. Attach the authority's opinion, a site plan, a technical data sheet or photographs."
      }
    ]
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
