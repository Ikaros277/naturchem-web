import { contactFormHref, contactPageHref, contactUrl } from "@/lib/contact-url";
import type { FaqCategory, FaqItem, FaqLink } from "./faq";

const L = {
  z201: "https://www.zakonyprolidi.cz/cs/2012-201",
  v415: "https://www.zakonyprolidi.cz/cs/2012-415",
  p32: "https://krajta.slv.cz/2012/201/par_32",
  ispop: "https://www.ispop.cz/",
  z258: "https://www.zakonyprolidi.cz/cs/2000-258",
  p37: "https://www.zakonyprolidi.cz/cs/2000-258",
  p38: "https://www.zakonyprolidi.cz/cs/2000-258",
  p39: "https://www.zakonyprolidi.cz/cs/2000-258",
  nv272: "https://www.zakonyprolidi.cz/cs/2011-272",
  p30: "https://www.zakonyprolidi.cz/cs/2000-258",
  z100: "https://www.zakonyprolidi.cz/cs/2001-100",
  pril12: "https://krajta.slv.cz/2012/415/pril_12",
  p17: "https://www.zakonyprolidi.cz/cs/2012-201"
} as const;

export const faqPageTitle = "Frequently asked questions";

export const faqPageIntro =
  "Find out whether you need measurement, a study or an operating manual — and what to send ČIŽP, KHS or the building authority as initial documentation.";

export const faqIntroCtas: FaqLink[] = [
  { label: "Send materials for assessment", href: contactUrl("Nejsem si jistý") }
];

export const faqPageMetadata = {
  absoluteTitle: "FAQ – emissions measurements, studies, EIA, reports and operating rules | NATURCHEM",
  description:
    "Frequently asked questions about emission measurements, workplace environment, noise, dispersion and noise studies, EIA, expert reports, operating rules, ISPOP and documentation for authorities."
} as const;

export const faqUiLabels = {
  searchLabel: "Search questions",
  searchPlaceholder: "e.g. emissions, noise, KHS, ISPOP",
  categoriesNavAria: "FAQ categories",
  emptyTitle: "No results found",
  emptyText: "Try a broader term or send us your question via the contact form.",
  tip: "Recommendation:",
  legal: "Legal basis",
  related: "Related services:",
  serviceTeaserTitle: "FAQ for this service",
  viewAllCategory: "View all FAQ — {category}"
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "obecne",
    title: "General questions",
    tileLabel: "General questions",
    ctas: [
      { label: "Request a service", href: contactFormHref },
      { label: "Send materials for assessment", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "How do we determine which service we need?",
        paragraphs: [
          "Send an authority decision or request, operating manual, project documentation, technology description or a brief description of the situation. From these materials we determine whether measurement, a study, an assessment, operating manual, EIA documentation, ISPOP or another deliverable is required."
        ],
        links: [
          { label: "Emission measurement", href: "/sluzby/mereni-emisi" },
          { label: "Dispersion studies", href: "/sluzby/rozptylove-studie" },
          { label: "EIA and project notification", href: "/sluzby/eia-oznameni-zameru" },
          { label: "Contact", href: contactPageHref }
        ]
      },
      {
        q: "What is the difference between measurement, a study and an expert assessment?",
        paragraphs: [
          "Measurement verifies the actual state in operation or in the protected environment. A study typically evaluates an expected or modelled state — for example immission contributions or the noise situation. An expert assessment evaluates technical, emission and operational aspects of a source or project and serves as expert documentation for permitting."
        ],
        tip: "Not sure? Send the authority request, facility description and attachments. We will distinguish measurement, a study and an assessment according to the purpose of the deliverable."
      },
      {
        q: "Are deliverables acceptable to authorities?",
        paragraphs: [
          "Yes. For protocols, studies and assessments we align with the specific recipients: the operator, designer, investor, KHS, ČIŽP, regional authority, building authority or EIA proceedings."
        ]
      },
      {
        q: "Where do you operate?",
        paragraphs: [
          "We are based in Havlíčkův Brod, České Budějovice and Prague. We also handle projects in other regions depending on the service type, site accessibility, representative operating mode and any notification deadlines."
        ]
      }
    ]
  },
  {
    id: "emise",
    title: "Emission measurement",
    tileLabel: "Emission measurement",
    ctas: [
      { label: "Request emission measurement", href: contactUrl("Měření emisí") },
      { label: "Send operating permit for assessment", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "When is one-off emission measurement required?",
        paragraphs: [
          "One-off emission measurement is required for regular verification of obligations, after commissioning a source, after a technology, fuel or raw material change, on authority instruction or as documentation for compliance with emission limits."
        ],
        legal: {
          summary:
            "Government Regulation No. 415/2012 Coll. sets intervals for one-off emission measurement, including measurement after first commissioning, after fuel or raw material change, or after work on the source structure or equipment that could change emissions.",
          refs: [{ label: "Government Regulation No. 415/2012 Coll.", href: L.v415 }]
        },
        links: [{ label: "Emission measurement from stationary sources", href: "/sluzby/mereni-emisi" }]
      },
      {
        q: "Who may carry out one-off emission measurement?",
        paragraphs: [
          "One-off emission measurement may only be carried out by an authorised person within the relevant scope. When selecting a supplier, verify not only the schedule but also the scope of authorisation and accredited methods."
        ],
        legal: {
          summary:
            "Section 32 of Act No. 201/2012 Coll. states that one-off emission measurement, preparation of expert assessments, dispersion studies and verification of emission reports may only be performed by an authorised person.",
          refs: [
            { label: "Section 32 of Act No. 201/2012 Coll.", href: L.p32 },
            { label: "Act No. 201/2012 Coll.", href: L.z201 }
          ]
        }
      },
      {
        q: "Must emission measurement be notified in advance?",
        paragraphs: [
          "For one-off emission measurement, notification obligations must be observed. ISPOP states for form F_OVZ_TERM_JME that the measurement date must be notified at least 5 working days before measurement. The protocol is notified using form F_OVZ_JME."
        ],
        legal: {
          summary: "The date and protocol of one-off emission measurement are notified through ISPOP.",
          refs: [{ label: "ISPOP – emission measurement", href: L.ispop }]
        },
        tip: "When planning the date, allow for the notification period and determine who will submit the notification."
      },
      {
        q: "How often is emission measurement carried out?",
        paragraphs: [
          "The interval depends on source type, classification, operating permit and implementing regulations. In general this may be, for example, once per calendar year or once every three calendar years for selected source groups."
        ],
        legal: {
          summary:
            "Section 3 of Government Regulation No. 415/2012 Coll. regulates intervals for one-off emission measurement and also cases where calculation is used instead of measurement.",
          refs: [{ label: "Government Regulation No. 415/2012 Coll.", href: L.v415 }]
        }
      },
      {
        q: "What if we do not have a suitable measurement point?",
        paragraphs: [
          "We assess the measurement point before measurement. If the outlet or stack is not ideal, we propose a technically achievable solution, adjust access, add flanges or professionally describe limitations and measurement representativeness in the protocol."
        ],
        tip: "For enquiries, attach photographs of the outlet, stack, access, flanges and available project documentation."
      },
      {
        q: "Which substances are typically monitored during emission measurement?",
        paragraphs: [
          "Depending on source type, operating permit and technology characteristics, we monitor for example TSP, VOC/TOC, NOx, CO, SO₂, O₂, HCl, HF, metals or other substances."
        ]
      },
      {
        q: "What do we receive after emission measurement?",
        paragraphs: [
          "You receive a protocol or report with description of the source, operating conditions, methods used, measured values and evaluation against limits or permit requirements. For authorised measurement, data must be complete, accurate and based on the applied methodology."
        ],
        legal: {
          summary:
            "Act No. 201/2012 Coll. requires the authorised person to perform authorised activities professionally and provide accurate and complete data.",
          refs: [{ label: "Act No. 201/2012 Coll.", href: L.z201 }]
        }
      }
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Workplace environment and job categorisation",
    tileLabel: "Workplace environment",
    ctas: [
      { label: "Request workplace environment measurement", href: contactUrl("Měření pracovního prostředí") },
      { label: "Send safety data sheets and workplace description", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "When is workplace environment measurement required?",
        paragraphs: [
          "Workplace environment measurement is addressed during job categorisation, technology change, a new workplace, KHS instruction or when verifying employee exposure."
        ],
        links: [{ label: "Workplace environment measurement", href: "/sluzby/pracovni-prostredi" }]
      },
      {
        q: "Which workplace environment factors do you measure?",
        paragraphs: [
          "Typically dust, chemical substances in workplace air, noise, vibration, lighting, microclimate and other factors depending on workplace characteristics, technology and work activity."
        ]
      },
      {
        q: "Can measurement serve as documentation for job categorisation?",
        paragraphs: [
          "Yes. Workplace environment measurement results are often used as documentation for job classification or reclassification."
        ],
        legal: {
          summary:
            "Section 37 of Act No. 258/2000 Coll. provides that jobs are classified into four categories according to the occurrence and risk of factors that may affect employee health.",
          refs: [{ label: "Act No. 258/2000 Coll.", href: L.p37 }]
        }
      },
      {
        q: "Who may carry out measurement for job categorisation?",
        paragraphs: [
          "Measurement for classification into category 2, 3 or 4 may only be carried out by the employer through a holder of an accreditation certificate or authorisation for the relevant measurements, unless the employer is so qualified."
        ],
        legal: {
          summary: "Section 38 of Act No. 258/2000 Coll. regulates measurement for job categorisation purposes.",
          refs: [{ label: "Section 38 of Act No. 258/2000 Coll.", href: L.p38 }]
        }
      },
      {
        q: "What is hazardous work?",
        paragraphs: [
          "Hazardous work is work classified in category 3 or 4, and also category 2 work designated as such by the relevant public health authority."
        ],
        legal: {
          summary: "Section 39 of Act No. 258/2000 Coll. defines hazardous work.",
          refs: [{ label: "Section 39 of Act No. 258/2000 Coll.", href: L.p39 }]
        }
      },
      {
        q: "What materials should we send for workplace environment measurement?",
        paragraphs: [
          "A description of work activities, shift length, number of workers, raw materials used, safety data sheets, operating regime, ventilation, work procedures, previous protocols and any KHS communication will help."
        ]
      }
    ]
  },
  {
    id: "hluk",
    title: "Noise, acoustics and noise studies",
    tileLabel: "Noise and acoustics",
    ctas: [
      { label: "Request noise measurement", href: contactUrl("Měření hluku a akustika") },
      { label: "Request a noise study", href: contactUrl("Hlukové studie") }
    ],
    items: [
      {
        q: "When do we need noise measurement?",
        paragraphs: [
          "Order noise measurement for occupancy approval, complaints, technology change, new equipment, workplace inspection, verification of measures or on instruction from KHS or the building authority."
        ],
        links: [{ label: "Noise measurement and acoustics", href: "/sluzby/mereni-hluku" }]
      },
      {
        q: "What is the difference between noise measurement and a noise study?",
        paragraphs: [
          "Noise measurement verifies the actual state at a specific location and time. A noise study evaluates an expected or modelled state — for example a new technology, industrial site, transport, HVAC, heat pump or operational change."
        ],
        links: [
          { label: "Noise studies", href: "/sluzby/hlukove-studie" },
          { label: "Noise measurement and acoustics", href: "/sluzby/mereni-hluku" }
        ]
      },
      {
        q: "What standards apply to noise evaluation?",
        paragraphs: [
          "It depends on whether the noise is at the workplace, in a protected outdoor area, in the protected outdoor area of buildings or in the protected indoor area of buildings."
        ],
        legal: {
          summary:
            "Government Regulation No. 272/2011 Coll. regulates hygienic limits for noise and vibration at workplaces, in protected outdoor and indoor areas, and the method of noise and vibration measurement and evaluation for daytime and nighttime periods.",
          refs: [{ label: "Government Regulation No. 272/2011 Coll.", href: L.nv272 }]
        }
      },
      {
        q: "Who is responsible for ensuring noise does not exceed hygienic limits?",
        paragraphs: [
          "A person who uses or operates machinery, equipment or a facility whose operation generates noise is obliged to ensure by technical, organisational and other measures that noise does not exceed hygienic limits in protected areas."
        ],
        legal: {
          summary: "Section 30 of Act No. 258/2000 Coll. regulates obligations of persons operating noise or vibration sources.",
          refs: [{ label: "Section 30 of Act No. 258/2000 Coll.", href: L.p30 }]
        }
      },
      {
        q: "Can noise be addressed before technology installation?",
        paragraphs: [
          "Yes. Before installing technology, prepare a noise study or acoustic assessment — this allows timely adjustment of source location, output, operating mode or noise control measures."
        ],
        links: [
          { label: "Noise studies", href: "/sluzby/hlukove-studie" },
          { label: "Noise measurement and acoustics", href: "/sluzby/mereni-hluku" }
        ]
      },
      {
        q: "Do you also propose noise control measures?",
        paragraphs: [
          "Yes. Following measurement or calculation we can recommend measures — for example an acoustic enclosure, screen, silencer, source relocation, operating mode restriction or building modification."
        ]
      }
    ]
  },
  {
    id: "studie",
    title: "Dispersion and noise studies",
    tileLabel: "Dispersion and noise studies",
    ctas: [
      { label: "Request a dispersion study", href: contactUrl("Rozptylové studie") },
      { label: "Request a noise study", href: contactUrl("Hlukové studie") },
      { label: "Send project documentation", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "When is a dispersion study required?",
        paragraphs: [
          "Prepare a dispersion study for a new or modified emission source, technology change, capacity increase, EIA, permitting proceedings or on instruction from the regional authority."
        ],
        links: [{ label: "Dispersion studies", href: "/sluzby/rozptylove-studie" }]
      },
      {
        q: "Who may prepare a dispersion study?",
        paragraphs: ["A dispersion study may be prepared by an authorised person within the relevant scope."],
        legal: {
          summary:
            "Section 32 of Act No. 201/2012 Coll. lists preparation of dispersion studies among activities that may only be performed by an authorised person.",
          refs: [{ label: "Section 32 of Act No. 201/2012 Coll.", href: L.p32 }]
        }
      },
      {
        q: "What documentation is needed for a dispersion study?",
        paragraphs: [
          "Typically a technology description, emission parameters, stack height and diameter, volumetric flow, temperature, operating hours, site layout, transport data, surrounding development data and the study purpose."
        ]
      },
      {
        q: "Can a dispersion study be prepared for variants?",
        paragraphs: [
          "Yes. For projects in preparation, multiple technology, stack, operating mode, capacity or transport intensity variants can be compared. Variant assessment helps the investor and designer find a technically and environmentally preferable solution."
        ]
      },
      {
        q: "When is a noise study appropriate?",
        paragraphs: [
          "A noise study is appropriate before implementing a new noise source, during technology change, for industrial sites, HVAC, heat pumps, transport, storage and production operations, or as documentation for building proceedings, KHS or EIA."
        ],
        links: [{ label: "Noise studies", href: "/sluzby/hlukove-studie" }]
      },
      {
        q: "What documentation is needed for a noise study?",
        paragraphs: [
          "Typically project layout, noise source locations, acoustic parameters of equipment, operating mode, transport data, drawings, protected area locations and the study purpose."
        ]
      }
    ]
  },
  {
    id: "eia",
    title: "EIA, expert assessments, operating manuals and IPPC",
    tileLabel: "EIA, assessments and operating manuals",
    ctas: [
      { label: "Request EIA / project notification", href: contactUrl("EIA a oznámení záměru") },
      {
        label: "Request an expert assessment",
        href: contactUrl("Odborné posudky")
      },
      {
        label: "Request an operating manual",
        href: contactUrl("Provozní řády")
      }
    ],
    items: [
      {
        q: "When should EIA be addressed?",
        paragraphs: [
          "Address EIA during project preparation — for new technology, capacity change, waste, a significant emission, noise or transport source, or land intervention. Early assessment limits documentation rework."
        ],
        legal: {
          summary:
            "Act No. 100/2001 Coll. states that the purpose of environmental impact assessment is to obtain objective expert documentation for issuing decisions or measures under special legislation.",
          refs: [{ label: "Act No. 100/2001 Coll.", href: L.z100 }]
        },
        links: [{ label: "EIA and project notification", href: "/sluzby/eia-oznameni-zameru" }]
      },
      {
        q: "Which impacts are assessed in EIA?",
        paragraphs: [
          "Impacts on public health and the environment are assessed, including effects on animals, plants, ecosystems, soil, water, air, climate, landscape, natural resources, tangible property and cultural monuments."
        ],
        legal: {
          summary:
            "The scope of impact assessment is defined in Act No. 100/2001 Coll.; assessment includes identification, description, evaluation and assessment of significant direct and indirect project impacts.",
          refs: [{ label: "Act No. 100/2001 Coll.", href: L.z100 }]
        }
      },
      {
        q: "What is an expert assessment in air protection?",
        paragraphs: [
          "An expert assessment evaluates the source, technology, emissions, operational context and link to the operating permit or operational change. It serves as expert documentation for the operator and administrative authorities."
        ],
        legal: {
          summary: "Preparation of expert assessments is an authorised activity under Section 32 of Act No. 201/2012 Coll.",
          refs: [{ label: "Section 32 of Act No. 201/2012 Coll.", href: L.p32 }]
        },
        links: [{ label: "Expert assessments", href: "/sluzby/odborne-posudky" }]
      },
      {
        q: "What must a source operating manual contain?",
        paragraphs: [
          "An operating manual typically contains identification of stationary sources and the facility, design capacity data, description of technological operations, operation control and monitoring methods, block diagram, and data on stacks, chimneys and emission reduction equipment."
        ],
        legal: {
          summary:
            "Annex No. 12 to Government Regulation No. 415/2012 Coll. sets operating manual requirements, including source identification, design capacity and description of technological operations.",
          refs: [{ label: "Annex No. 12 to Government Regulation No. 415/2012 Coll.", href: L.pril12 }]
        }
      },
      {
        q: "Can you help with an operating permit change?",
        paragraphs: [
          "Yes. We help prepare technical documentation, description of technology change, links to emission measurement, operating manual, dispersion study, expert assessment or other annexes according to authority requirements."
        ]
      },
      {
        q: "Do you also address IPPC?",
        paragraphs: [
          "Yes. Depending on project scope we prepare or supplement documentation for integrated permits and their amendments, especially in relation to air quality, noise, waste, operating mode and technical source parameters."
        ],
        links: [{ label: "IPPC and integrated permits", href: "/sluzby/ippc-integrovana-povoleni" }]
      }
    ]
  },
  {
    id: "ispop",
    title: "ISPOP, operating records and GHG",
    tileLabel: "ISPOP, GHG and records",
    ctas: [
      { label: "Request ISPOP / operating records", href: contactUrl("ISPOP") },
      { label: "Request GHG", href: contactUrl("GHG") }
    ],
    items: [
      {
        q: "Can you help with ISPOP?",
        paragraphs: [
          "Yes. We help prepare documentation, verify links to emission measurement, operating permits, fuel or raw material consumption, operating hours and other data required for reporting."
        ],
        links: [{ label: "ISPOP and operating records", href: "/sluzby/ispop" }]
      },
      {
        q: "Who submits consolidated operating records?",
        paragraphs: [
          "Consolidated operating records are submitted by the operator of a listed stationary source through ISPOP, usually by 31 March for the previous calendar year."
        ],
        legal: {
          summary:
            "ISPOP lists form F_OVZ_SPE for notification of consolidated operating records under Section 17(3)(c) of Act No. 201/2012 Coll. with a deadline of 31 March.",
          refs: [
            { label: "ISPOP", href: L.ispop },
            { label: "Section 17 of Act No. 201/2012 Coll.", href: L.p17 }
          ]
        }
      },
      {
        q: "How long must operating records be retained?",
        paragraphs: [
          "For listed stationary sources, retain operating records for the statutory period so they are available during inspection."
        ],
        legal: {
          summary:
            "Section 17 of Act No. 201/2012 Coll. regulates obligations of the operator of a listed stationary source, including keeping and reporting consolidated operating records.",
          refs: [{ label: "Act No. 201/2012 Coll.", href: L.z201 }]
        }
      },
      {
        q: "Do you provide GHG / greenhouse gas emission verification?",
        paragraphs: [
          "Yes. For projects related to greenhouse gas emissions we prepare or verify documentation according to the scope of authorisation and operator requirements."
        ],
        legal: {
          summary:
            "Section 32 of Act No. 201/2012 Coll. includes verification of emission reports among authorised activities.",
          refs: [{ label: "Section 32 of Act No. 201/2012 Coll.", href: L.p32 }]
        },
        links: [{ label: "Greenhouse gas emission verification", href: "/sluzby/ghg-overovani" }]
      }
    ]
  },
  {
    id: "poptavka",
    title: "Enquiries, schedules and documentation",
    tileLabel: "Enquiries and documentation",
    ctas: [
      { label: "Request a service", href: contactFormHref },
      { label: "Send materials for assessment", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "What materials should we send with an enquiry?",
        paragraphs: [
          "Best practice is to send an authority decision or request, project documentation, technology description, location, operating mode, available protocols, operating manual, safety data sheets and photographs of measurement points, stacks or noise sources."
        ],
        links: [{ label: "Contact and enquiry", href: contactFormHref }]
      },
      {
        q: "Can we start with incomplete documentation?",
        paragraphs: [
          "Yes. If documentation is incomplete, we first determine what is essential, what can be added later and what must be supplied by the designer, operator or technology supplier."
        ]
      },
      {
        q: "Can you assess an authority requirement?",
        paragraphs: [
          "Yes. From a KHS, ČIŽP, regional authority or building authority requirement we determine what type of deliverable is needed and which annexes will be decisive for further proceedings."
        ]
      },
      {
        q: "Can an initial orientation assessment be done first?",
        paragraphs: [
          "Yes. For more complex projects we first carry out an orientation assessment of technology, measurement points, noise, emissions or authority requirements — and then define the exact project scope."
        ]
      }
    ]
  }
];

export const faqFlatItemsEn = faqCategories.flatMap((c) => c.items);

export function getFaqCategoryEn(id: string): FaqCategory | undefined {
  return faqCategories.find((c) => c.id === id);
}

export function getFaqTeaserItemsEn(categoryId: string, limit = 5): FaqItem[] {
  const category = getFaqCategoryEn(categoryId);
  if (!category) return [];
  return category.items.slice(0, limit);
}
