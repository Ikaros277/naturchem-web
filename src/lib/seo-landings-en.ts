export type SeoLanding = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading?: string; paragraphs: string[] }[];
  serviceHref: string;
  contactService: string;
  oboryHref?: string;
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "mereni-emisi-kotelen",
    title: "Emission measurements at boiler plants and combustion sources",
    metaDescription:
      "Emission measurements at boiler plants, burners and cogeneration units. Reports for operators, the Czech Environmental Inspectorate and operating permits.",
    h1: "Emission measurements at boiler plants and combustion sources",
    intro:
      "We provide periodic and operational emission measurements from boiler plants, gas and oil burners, biomass sources and cogeneration units. The scope follows the operating permit and the actual source regime.",
    sections: [
      {
        paragraphs: [
          "We typically measure NOx, CO, SO₂, O₂, particulate matter and other parameters as required by the permit. The output is a report usable for operational decision-making, authority requirements and follow-up ISPOP.",
          "We help operators prepare supporting documentation, select a representative operating regime and communicate with air protection authorities."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/kotelny"
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
    title: "Noise measurements for heat pumps and HVAC",
    metaDescription:
      "Noise measurements of outdoor heat pump units, HVAC and cooling equipment. Reports and studies for occupancy approval and authorities.",
    h1: "Noise measurements for heat pumps and HVAC",
    intro:
      "We measure noise from outdoor heat pump units, HVAC, coolers and auxiliary technologies. Outputs serve occupancy approval, building proceedings and resolving neighbourhood complaints.",
    sections: [
      {
        paragraphs: [
          "We assess source location, operating regime and possible noise mitigation measures.",
          "Where needed, we prepare a noise study or building acoustics assessment."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    oboryHref: "/provozy-a-technologie/tepelna-cerpadla-vzt"
  },
  {
    slug: "mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Workplace environment measurements for job categorisation",
    metaDescription:
      "Workplace factor measurements for job categorisation, regional hygiene station and occupational health and safety. Dust, chemical substances, noise, microclimate.",
    h1: "Workplace environment measurements for job categorisation",
    intro:
      "In production and operational halls we measure workplace factors for job categorisation, occupational health and safety documentation and discussions with the hygiene station.",
    sections: [
      {
        paragraphs: [
          "We typically address dust, chemical substances, noise, lighting, microclimate and vibration under real operating conditions.",
          "We prepare reports with recommendations for organisational and technical measures."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "rozptylova-studie-povoleni",
    title: "Dispersion study for operating permit and EIA",
    metaDescription:
      "Immission dispersion study for operating permits, source changes or EIA. Authorised person, modelling and supporting documentation for authorities.",
    h1: "Dispersion study for operating permit",
    intro:
      "We prepare dispersion studies of source immission contributions for operating permits, technology changes, EIA or discussions with authorities. The study is carried out by an authorised person within the relevant scope.",
    sections: [
      {
        paragraphs: [
          "We assess sources, meteorology, terrain and operating variants. The output serves as expert supporting documentation for the regional authority, Czech Environmental Inspectorate, building authority or EIA.",
          "We link the study to emission measurements, operating rules and existing project documentation."
        ]
      }
    ],
    serviceHref: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie"
  },
  {
    slug: "odborny-posudek-zdroj-znecistovani",
    title: "Expert report on an air pollution source",
    metaDescription:
      "Expert report under the Air Protection Act — operational change, permit, technology. NATURCHEM authorised person.",
    h1: "Expert report on an air pollution source",
    intro:
      "We prepare expert reports for operational changes, new sources, permit updates or authority requirements. The report is prepared by an authorised person under Act No. 201/2012 Coll.",
    sections: [
      {
        paragraphs: [
          "We evaluate technical and emission aspects of the source, propose the scope of measurements or modelling and prepare an output usable in administrative proceedings.",
          "We typically link the report to emission measurements, dispersion studies or operating documentation."
        ]
      }
    ],
    serviceHref: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky"
  },
  {
    slug: "ispop-rocni-hlaseni-emise",
    title: "ISPOP — annual reporting and emission operating records",
    metaDescription:
      "ISPOP, operating records and annual emission reporting. Inputs from measurements, report verification and link to operator obligations.",
    h1: "ISPOP and annual emission reporting",
    intro:
      "We help with operating records, annual emission reporting in ISPOP and verification of emission reports. We link the work to emission measurements and source documentation.",
    sections: [
      {
        paragraphs: [
          "We check data completeness, consistency with measurements and the operating permit. For selected obligations we provide authorised verification.",
          "Suitable for operators after an inspection, technology change or when taking over a new source."
        ]
      }
    ],
    serviceHref: "/sluzby/ispop",
    contactService: "ISPOP"
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
      "One-off emission measurements may only be carried out by an authorised person. NATURCHEM — accredited laboratory No. 1599 with authorisation for emissions.",
    h1: "Authorised person for emission measurements",
    intro:
      "NATURCHEM is accredited laboratory No. 1599 and an authorised person for one-off emission measurements, dispersion studies and expert reports under the Air Protection Act.",
    sections: [
      {
        paragraphs: [
          "When selecting a supplier, verify the scope of authorisation, accredited methods and experience with your source type — boiler plant, paint shop, biogas, process exhaust.",
          "We provide a complete report, ISPOP measurement notification and supporting documentation for authorities."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
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
        paragraphs: [
          "We typically address workplace noise, dust, chemical substances, microclimate, lighting and vibration. We propose the measurement scope according to operations and authority requirements.",
          "Reports serve as expert supporting documentation for job categorisation and communication with the hygiene station."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
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
        paragraphs: [
          "One-off emission measurements are carried out by an authorised person. We link the work to the operating permit, inspection notice or technology change.",
          "We prepare outputs so they are usable in communication with authorities — including ISPOP and annual emission reporting where needed."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
