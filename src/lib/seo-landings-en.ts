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
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
