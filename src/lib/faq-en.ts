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
  { label: "Send materials for assessment", href: contactUrl("Nejsem si jistý") },
  { label: "Non-binding inquiry", href: contactFormHref }
];

export const faqPageMetadata = {
  absoluteTitle: "FAQ – emissions measurements, studies, EIA, reports and operating rules | NATURCHEM",
  description:
    "Frequently asked questions about emission measurements, workplace environment, noise, dispersion and noise studies, EIA, expert reports, operating rules, ISPOP and documentation for authorities."
} as const;

export const faqHomeGeo = {
  homeSectionTitle: "Frequently asked questions from operators and environmental managers",
  homeSectionLead:
    "Answers to typical situations — authority requests, emission measurements, studies, expert reports and what to send first.",
  homeViewAll: "All frequently asked questions"
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
  sectorTeaserTitle: "FAQ for this facility type",
  viewAllCategory: "View all FAQ — {category}",
  contactStripLabel: "Quick contact",
  submitMaterialsCta: "Send materials for assessment",
  inquiryCta: "Non-binding inquiry",
  categoryItemCount: "{count} questions"
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "obecne",
    title: "Controls, authority requests and first orientation",
    tileLabel: "Controls and authority requests",
    ctas: [
      { label: "Send authority request for assessment", href: contactUrl("Nejsem si jistý") },
      { label: "Non-binding inquiry", href: contactFormHref }
    ],
    items: [
      {
        q: "We received a request from KHS, ČIŽP, the regional authority or the building authority. What should we do first?",
        paragraphs: [
          "First, send us the full request including annexes, decisions, inspection protocols or previous communication with the authority. From the wording of the requirement we determine whether the authority is asking for measurement, an expert assessment, a dispersion or noise study, an operating manual, application supplements, a change to the operating permit or another expert deliverable.",
          "It is important not to respond only in general terms. The authority usually requires a specific type of document, a specific scope of measurement or a specific explanation of the operational state. We help distinguish what must be submitted immediately, what can be added later and where it is advisable to verify the technical state of the operation first."
        ]
      },
      {
        q: "Can you tell us whether the authority's requirement is proportionate?",
        paragraphs: [
          "Yes. We can professionally assess whether the requirement matches the type of operation, permit, source classification, technology characteristics and available documentation. If the requirement is unclear, too general or technically problematic, a substantive statement or proposal for further procedure can be prepared.",
          "The aim is not to argue unnecessarily with the authority, but to deliver the correct expert documentation and prevent the operator from commissioning unnecessary, incomplete or methodologically unsuitable measurement."
        ]
      },
      {
        q: "Can we send you just the authority request without other documentation?",
        paragraphs: [
          "Yes. The authority request is often sufficient for initial orientation. We will then request only the documentation that is genuinely needed for the case — for example the operating permit, operating manual, project documentation, safety data sheets, photographs of the technology, previous measurement protocols or a description of the operating regime."
        ]
      },
      {
        q: "Can you also prepare a draft response to the authority?",
        paragraphs: [
          "Yes. In more complex cases we can prepare a substantive technical draft response, or documentation for supplementing an application, a statement on an inspection, justification of the operating regime or a proposal for further measurement. We formulate the text to be technically accurate, proportionate and usable in administrative proceedings."
        ]
      },
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
      },
      {
        q: "Does NATURCHEM work across the entire Czech Republic?",
        paragraphs: [
          "Yes. We carry out field measurements of emissions, workplace environment, noise and other parameters throughout the Czech Republic. Studies, expert reports and operational documentation are prepared regardless of site location — what matters is access to the technology and a representative operating regime."
        ],
        links: [{ label: "Accreditation & authorisations", href: "/akreditace-autorizace-dokumenty" }]
      },
      {
        q: "What documents does NATURCHEM need for a quote?",
        paragraphs: [
          "For an initial assessment, an authority notice, technology description, operating permit or brief situation summary is usually enough. Depending on the service, we may also request the operating rules, project documentation, safety data sheets, previous measurement reports or an operating schedule.",
          "You do not need everything ready — send what you have. We will clarify scope and timing after a technical review."
        ],
        links: [{ label: "Contact", href: contactPageHref }]
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
      },
      {
        q: "How should we prepare for emission measurement?",
        paragraphs: [
          "Before measurement, verify in particular the measurement point, safe access to the outlet or stack, the operating regime of the technology, availability of operating staff and the possibility of running the equipment at representative output. It is also advisable to prepare the operating permit, operating manual, previous protocols, fuels or raw materials, output data and operating records.",
          "For some sources the measurement date must be notified in advance through ISPOP. It is therefore advisable to plan the date with sufficient lead time."
        ]
      },
      {
        q: "What does representative operation mean during emission measurement?",
        paragraphs: [
          "Representative operation means that the equipment operates during measurement so that the results correspond to normal or required operating conditions. It is not enough for the source merely to be running. It must be clear at what output, raw material, fuel, temperature, load or operating regime measurement was carried out.",
          "If the technology is cyclic, batch-based or variable, it is necessary to describe which part of the cycle was measured and why it is relevant for the given assessment."
        ]
      },
      {
        q: "What if a limit is exceeded during emission measurement?",
        paragraphs: [
          "First, the cause must be identified. Exceedance may relate to the technical condition of the equipment, fuel, raw material, incorrect operating regime, filter failure, insufficient combustion, poor extraction performance or an unsuitable measurement point.",
          "In such a situation we help evaluate the protocol, operating conditions and possible technical steps. Depending on the case, we can propose equipment servicing, adjustment of the operating regime, supplementary emission reduction technology, repeat measurement or an expert statement for the authority."
        ]
      },
      {
        q: "Can emissions be measured on technology without a classic stack?",
        paragraphs: [
          "It depends on the specific technical solution. If the technology has an outlet, extraction, local exhaust or another defined air discharge, the possibility of measurement can be assessed. If emissions escape fugitively into the hall or through open spaces, the situation is more complex and it may be preferable to combine technical assessment, workplace environment measurement, ventilation assessment or extraction design.",
          "It is advisable to send photographs of the equipment, outlets, ducting, fans and the technology area in advance."
        ]
      },
      {
        q: "Is it better to measure first or carry out a technical assessment first?",
        paragraphs: [
          "For routine regular measurement, measurement can usually be planned directly. For new, modified or problematic technology, a technical assessment is often advisable first. This helps determine what to measure, where to measure, under what operating regime and whether measurement is likely to yield a usable result.",
          "This approach is particularly suitable for atypical technologies, cyclic operations, combustion equipment, dryers, paint shops, filtration systems, washers, pyrolysis or thermal processes."
        ]
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
      },
      {
        q: "How do we know which workplace environment factors to measure?",
        paragraphs: [
          "This is based on the specific work activity, substances used, safety data sheets, technology, shift length, ventilation, work procedures and expected employee exposure. At some workplaces the main factor is obvious — for example noise, dust or chemical substances. At others it is advisable to assess several factors simultaneously — for example noise, microclimate, lighting, chemical substances and physical load."
        ]
      },
      {
        q: "Is one day of measurement enough for job categorisation?",
        paragraphs: [
          "Often yes, if the measurement day is representative of normal work. For variable operations, however, it is necessary to consider whether measurement captures typical, highest-risk or authority-required activity. If work differs significantly from day to day, measurement may need to be supplemented with an activity description, shift time snapshot or repeat measurement."
        ]
      },
      {
        q: "Can we measure workplace environment when an employee only performs a hazardous activity for a short part of the shift?",
        paragraphs: [
          "Yes. For such activities it is important to describe exposure time and the work regime correctly. The measurement result then relates to the actual time at work and may be recalculated or evaluated according to the relevant methodology and hygienic limits.",
          "Typical examples include short-term welding, grinding, work with solvents, cleaning, mixing chemical substances or technology maintenance."
        ]
      },
      {
        q: "What if employees use respirators or other PPE?",
        paragraphs: [
          "PPE is important, but on its own it does not replace workplace environment assessment. Evaluation must distinguish pollutant concentration in workplace air, technical and organisational measures, ventilation, exposure duration and actual use of protective equipment.",
          "For higher-risk work it is advisable to document not only measurement but also the employee protection system, training, selection of suitable PPE and monitoring of its use."
        ]
      },
      {
        q: "Can you recommend a job category based on measurement results?",
        paragraphs: [
          "Yes. Based on measurement results, work description and applicable limits, an expert evaluation can be prepared to serve as documentation for a proposed job classification. The actual classification remains the employer's obligation and is subject to the relevant rules and any KHS assessment."
        ]
      }
    ]
  },
  {
    id: "hluk",
    title: "Noise, vibration and acoustics",
    tileLabel: "Noise and vibration",
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
      },
      {
        q: "What is the difference between workplace noise and noise to the surroundings?",
        paragraphs: [
          "Workplace noise is evaluated in terms of employee exposure. It concerns the workstation, shift length, worker activity and occupational hygienic limits.",
          "Noise to the surroundings is evaluated in terms of protected outdoor or indoor areas — for example near residential buildings. It concerns the impact of the facility, technology, transport, heat pumps, HVAC or other sources on the surroundings. These are two different measurements, different purposes and often different deliverables for the authority."
        ]
      },
      {
        q: "When is vibration measurement required?",
        paragraphs: [
          "Vibration measurement is addressed mainly when employees work with vibrating tools, machines, vehicles or equipment that can transmit vibration to the hands or whole body. Typical examples include grinders, hammers, compaction equipment, handling equipment, construction machinery, tractors or work machines.",
          "Measurement can serve as documentation for job categorisation, risk verification or response to a KHS requirement."
        ]
      },
      {
        q: "When is it advisable to carry out a noise study before purchasing technology?",
        paragraphs: [
          "Before purchasing or installing technology, a noise study is advisable whenever the equipment will be located near residential development, operate at night, have a significant acoustic output or be part of a larger operation. Typical cases include HVAC units, compressors, cooling systems, heat pumps, production lines, crushers, conveyors, loading, warehouses or outdoor handling.",
          "Early assessment can prevent the need to install costly noise control measures later."
        ]
      },
      {
        q: "What if neighbours complain about noise from our facility?",
        paragraphs: [
          "First it is advisable to distinguish whether the noise comes from a stationary source, transport, handling, technology, ventilation or a combination of several sources. Depending on the situation, noise measurement, acoustic assessment or technical measures can be carried out.",
          "It is important not to address a complaint by estimate alone. The operator needs to know whether noise actually exceeds the limit, when exceedance occurs and which source is decisive."
        ]
      }
    ]
  },
  {
    id: "studie",
    title: "Dispersion studies, immissions and odour",
    tileLabel: "Dispersion studies and odour",
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
      },
      {
        q: "What is the most common mistake when commissioning a dispersion study?",
        paragraphs: [
          "The most common mistake is incomplete or unrealistic input data. A dispersion study needs a technically correct description of sources, stacks, emission parameters, operating hours, raw materials, capacity, transport and surrounding development. If inputs are overstated, understated or do not match actual operation, the study result can be misleading.",
          "It is therefore advisable to have inputs professionally checked before modelling."
        ]
      },
      {
        q: "Can a dispersion study verify whether a production capacity increase will pass?",
        paragraphs: [
          "Yes. A dispersion study can compare the existing and proposed state, or multiple operating variants. It allows assessment of whether a capacity increase will significantly raise immission contributions and whether the project is defensible from an air protection perspective.",
          "For larger changes it is also advisable to address links to the operating permit, EIA, expert assessment, operating manual and transport noise."
        ]
      },
      {
        q: "Do you also address odour from operations?",
        paragraphs: [
          "Yes. For operations with odour we can assess technology, odorous substance sources, ventilation, operating regime and options for limiting emissions. Depending on the situation this may involve expert assessment, measure proposals, measurement of selected substances, dispersion assessment or preparation of documentation for authority negotiations.",
          "Typical cases include wastewater treatment plants, waste facilities, composting sites, food processing, paint shops, chemical operations, sludge treatment, agricultural operations and certain production technologies."
        ]
      },
      {
        q: "Can we use a dispersion study as an argument that no additional filter is needed?",
        paragraphs: [
          "Sometimes yes, but it depends on the specific source, emissions, immission background, legislative requirements and the authority's request. A dispersion study evaluates immission impact in the surroundings, but on its own it may not replace the obligation to comply with emission limits or use prescribed technical measures.",
          "The correct approach is to assess emissions, immissions, technology, operating permit and available measures simultaneously."
        ]
      }
    ]
  },
  {
    id: "eia",
    title: "EIA, UES, expert reports and permitting",
    tileLabel: "EIA and permitting",
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
      },
      {
        q: "How do we know whether a project needs EIA or just other permits?",
        paragraphs: [
          "It depends on project type, capacity, location, operational change and classification under the environmental impact assessment act. For some projects it is clear that EIA will be required. For others it is necessary to assess whether it is a sub-threshold project, project change, follow-on proceedings or only expert documentation for another permit.",
          "In practice it is advisable to carry out preliminary screening assessment before submitting an application."
        ]
      },
      {
        q: "What is the unified environmental statement (UES) and when should it be addressed?",
        paragraphs: [
          "The unified environmental statement is a consolidated environmental basis for project permitting. In practice it can combine several environmental requirements. For the investor it is important to establish in good time which annexes will be needed — for example a noise study, dispersion study, biological assessment, waste management, water protection or other expert documentation.",
          "We help determine which parts of the environmental documentation should be prepared in advance."
        ]
      },
      {
        q: "When is an expert assessment in air protection required?",
        paragraphs: [
          "An expert assessment is usually addressed for listed stationary sources, when permitting operation, changing technology, fuel or raw material, increasing capacity, modifying flue gas treatment or on request from the regional authority. The assessment evaluates technical, emission and operational aspects of the source and proposes conditions that should be proportionate to actual operation."
        ]
      },
      {
        q: "Does it make sense to prepare an expert assessment before meeting with the authority?",
        paragraphs: [
          "Yes, especially for more complex or unusual technologies. A preliminary expert review helps prepare technical argumentation, propose reasonable emission limits, measurement frequency, operating conditions and scope of documentation. The operator then negotiates with the authority on the basis of data, not only a general technology description."
        ]
      },
      {
        q: "What if technology, capacity or operating mode changes during the project?",
        paragraphs: [
          "A change in technology, capacity or operating mode can affect emission measurement, dispersion study, noise study, expert assessment, operating manual and operating permit. It is therefore advisable to assess the change before documentation is submitted to the authority.",
          "For more significant changes it may be necessary to update already prepared documentation."
        ]
      }
    ]
  },
  {
    id: "ispop",
    title: "Operating rules, records and ISPOP",
    tileLabel: "Operating rules and ISPOP",
    ctas: [
      { label: "Request an operating manual", href: contactUrl("Provozní řády") },
      { label: "Request ISPOP / operating records", href: contactUrl("ISPOP") }
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
      },
      {
        q: "When should the operating manual be updated?",
        paragraphs: [
          "The operating manual should be updated when technology, source, capacity, fuel, raw material, outlet, filtration equipment, operating regime, emission limits or operating permit conditions change. An update is also advisable if the operating manual no longer reflects the actual state of the facility."
        ]
      },
      {
        q: "Should startup and shutdown of technology be described in the operating manual?",
        paragraphs: [
          "Yes, if these regimes are significant for emissions or safe operation control. For cyclic, batch-based, combustion, drying, pyrolysis or otherwise variable technologies it is advisable to describe normal operation, startup, shutdown, fault states and exceptional situations.",
          "A good operating manual should not be merely a formal document. It should reflect how the technology actually works."
        ]
      },
      {
        q: "What must the operator record for an air pollution source?",
        paragraphs: [
          "The scope of records depends on source type and operating permit. Typically operating hours, fuel or raw material consumption, product quantities, operation of abatement equipment, faults, outages, emission measurement, maintenance and other data required for consolidated operating records or inspection are recorded.",
          "We help set up records so they match the permit and are practically usable during inspection."
        ]
      },
      {
        q: "Who submits ISPOP reports — the operator or the measurement supplier?",
        paragraphs: [
          "Responsibility for fulfilling obligations lies with the operator. Some tasks can, however, be technically prepared or submitted by an authorised person. For each project it is advisable to determine in advance who notifies the measurement date, who submits the protocol, who prepares consolidated operating records and who checks links to the operating permit."
        ]
      }
    ]
  },
  {
    id: "poptavka",
    title: "Inquiry, pricing and deadlines",
    tileLabel: "Pricing and deadlines",
    ctas: [
      { label: "Non-binding inquiry", href: contactFormHref },
      { label: "Send materials for assessment", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "How much does measurement, a study or an expert assessment cost?",
        paragraphs: [
          "Price depends on scope of work, technology type, number of measurement points, number of substances measured, availability of documentation, location, calculation complexity, authority requirements and deadline. For simple projects a price can be set quickly. For more complex operations it is advisable first to assess documentation and define the scope precisely.",
          "For a quick quote it helps to send the authority request, operating permit, technology description, photographs, project documentation and previous protocols."
        ]
      },
      {
        q: "How long does it take to prepare a study or assessment?",
        paragraphs: [
          "The schedule depends on project scope, completeness of documentation, need for measurement, technology complexity and links to the designer or authority. The fastest approach is to send all available documentation at the outset, including the authority requirement and the deadline by which documentation must be delivered.",
          "If the deadline is very short, we first determine what can realistically be prepared and what would be methodologically or procedurally risky."
        ]
      },
      {
        q: "Can a project be split into a quick preliminary assessment and final documentation?",
        paragraphs: [
          "Yes. For more complex cases it is often advisable to carry out a quick preliminary assessment first. This helps identify main risks, missing documentation, required measurement and the likely scope of final documentation.",
          "This approach is particularly suitable for new technologies, operational changes, EIA, IPPC, odour, noise, dispersion studies and disputed authority requirements."
        ]
      },
      {
        q: "What should we send so the quote is not only indicative?",
        paragraphs: [
          "Ideally send the authority request or requirement, operating permit or previous decision, brief technology description, operating regime and capacity, project documentation or site layout, photographs of technology, outlets, stacks, measurement points or noise sources, safety data sheets for substances used, previous protocols and studies, and the required completion date.",
          "The more accurate the documentation we receive, the more precisely price, schedule and project scope can be determined."
        ],
        links: [{ label: "Contact and enquiry", href: contactFormHref }]
      },
      {
        q: "Can we start with incomplete documentation?",
        paragraphs: [
          "Yes. If documentation is incomplete, we first determine what is essential, what can be added later and what must be supplied by the designer, operator or technology supplier."
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
