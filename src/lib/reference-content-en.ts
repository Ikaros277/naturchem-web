/** Reference page content — areas, segments and anonymised project examples. */

export type ReferenceArea = {
  title: string;
  description: string;
  contactService: string;
  imageSrc: string;
};

export type ReferenceExample = {
  id: string;
  title: string;
  operationType: string;
  scope: string;
  output: string;
  text: string;
  tags: readonly string[];
  href: string;
  contactService: string;
  cta: "Request a similar project" | "Send documents for review" | "Request measurement / study";
};

export const referenceEyebrow = "36 years on the market · references from practice";

export const referenceIntro =
  "Over 36 years on the market, we have worked with many leading companies in industry and energy.";

export const referenceCustomersIntro =
  "Companies that rely on us for measurements, studies and authority documentation — from automotive and energy to the public sector.";

export const referenceExamplesHeading = "Project examples from practice";

export const referenceAreasHeading = "References by industry and operation type";

export function getReferenceExamplesById(): Map<string, ReferenceExample> {
  return new Map(referenceExamples.map((example) => [example.id, example]));
}

export const referenceAreas: readonly ReferenceArea[] = [
  {
    title: "Industry and automotive",
    description:
      "Emission and workplace measurements, technology noise, VOC/TOC, operating documentation and supporting documentation for production changes.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/automotive.webp"
  },
  {
    title: "Energy, boiler plants and cogeneration",
    description:
      "Emission measurements at boiler plants and cogeneration units, dispersion studies, operating permits, ISPOP and operating rules.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/kotelny.webp"
  },
  {
    title: "Paint shops and surface treatment",
    description:
      "VOC/TOC and particulate matter measurements, new exhaust stacks, EIA, dispersion studies and supporting documentation for permitting paint technologies.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/lakovny.webp"
  },
  {
    title: "Agriculture and biogas",
    description:
      "Biogas plant emission measurements, EIA and scoping, dispersion studies, operating rules and supporting documentation for agricultural sites.",
    contactService: "Rozptylové studie",
    imageSrc: "/hero/provozy/bioplyn-biometan.webp"
  },
  {
    title: "Waste, recycling and landfills",
    description:
      "Dispersion and noise studies, expert reports, EIA, operating rules and capacity changes at waste facilities.",
    contactService: "Rozptylové studie",
    imageSrc: "/hero/provozy/odpady-recyklace.webp"
  },
  {
    title: "Construction and infrastructure",
    description:
      "Noise studies, noise measurements for occupancy approval, HVAC and technology assessment, supporting documentation for investment projects.",
    contactService: "Měření hluku a akustika",
    imageSrc: "/hero/provozy/stavebni-zamery.webp"
  },
  {
    title: "Public sector and healthcare",
    description:
      "Noise and dispersion assessment, workplace measurements, supporting documentation for public buildings and operations.",
    contactService: "Měření hluku a akustika",
    imageSrc: "/hero/provozy/verejne-budovy.webp"
  },
  {
    title: "Designers, investors and EIA",
    description:
      "Coordination of measurements, studies and technical appendices for EIA, operating permits and communication with authorities.",
    contactService: "EIA a oznámení záměru",
    imageSrc: "/hero/provozy/odborne-posudky-povoleni.webp"
  }
] as const;

/** Selection of 16 anonymised examples for the website (from internal records). */
export const referenceExamples: readonly ReferenceExample[] = [
  {
    id: "lak-automotive-emise",
    title: "Automotive paint shop — VOC/TOC and particulate matter measurements",
    operationType: "paint shop, automotive",
    scope: "VOC/TOC and particulate matter measurements at process exhaust stacks",
    output: "emission measurement report and supporting documentation for operating permit / compliance verification",
    text: "We measured emissions from the paint technology including VOC/TOC and particulates at exhaust stacks. The report supported compliance with operating conditions and communication with the authority.",
    tags: ["Emissions", "VOC", "Regional authority"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request a similar project"
  },
  {
    id: "bps-emise",
    title: "Biogas plant — cogeneration emissions",
    operationType: "biogas plant / cogeneration unit",
    scope: "cogeneration unit emissions, operating data, link to ISPOP",
    output: "report and supporting documentation for operating records",
    text: "We measured cogeneration unit emissions under an agreed operating regime and linked the results to operating records and ISPOP.",
    tags: ["Emissions", "ISPOP", "Regional authority"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request measurement / study"
  },
  {
    id: "bps-serie-emise",
    title: "Multiple biogas plants — series of emission measurements",
    operationType: "group of biogas plants",
    scope: "multiple sites, multiple cogeneration units",
    output: "set of reports and unified results records",
    text: "At several sites we measured cogeneration unit emissions using a uniform procedure. The outputs served for clear operating records across the group of plants.",
    tags: ["Emissions", "ISPOP"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request a similar project"
  },
  {
    id: "plyn-kotelna-emise",
    title: "Gas boiler plant — emission measurements",
    operationType: "municipal / site boiler plant",
    scope: "two gas boilers, flue gases, operating regime",
    output: "emission measurement report",
    text: "We measured emissions from two boilers at representative output. The report served as supporting documentation for the source operator's obligations.",
    tags: ["Emissions", "Regional authority", "CZ EPA"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request measurement / study"
  },
  {
    id: "hala-pp",
    title: "Production hall — workplace environment measurements",
    operationType: "production plant",
    scope: "noise, dust, chemical substances, work positions",
    output: "supporting documentation for regional hygiene station and job categorisation",
    text: "We measured noise, dust and chemical substances at selected workplaces. The results supported job categorisation and communication with the regional hygiene station.",
    tags: ["Occupational health", "Noise", "Dust"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Request a similar project"
  },
  {
    id: "svarovna-pp",
    title: "Welding shop — exposure and noise",
    operationType: "welding shop / metalworking operation",
    scope: "dust, metals, ozone, noise, vibration",
    output: "reports for employee exposure assessment",
    text: "We measured dust, metals, noise and vibration in the welding shop. The reports supported occupational health and safety and proposed workplace measures.",
    tags: ["Occupational health", "Dust", "Noise"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Request a similar project"
  },
  {
    id: "tcp-hluk",
    title: "Heat pump — noise in the surroundings",
    operationType: "building technical equipment",
    scope: "outdoor noise in a protected area",
    output: "measurement / acoustic assessment and recommendations for next steps",
    text: "We measured noise from the outdoor unit in a protected area. The output helped in communication with neighbours and planning next steps.",
    tags: ["Noise", "Occupational health"],
    href: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    cta: "Request measurement / study"
  },
  {
    id: "vzt-hluk-studie",
    title: "HVAC — noise study",
    operationType: "HVAC / process equipment",
    scope: "calculation or measurement of technology noise",
    output: "supporting documentation for occupancy approval, regional hygiene station or building authority",
    text: "We prepared a noise assessment of the technology relative to the nearest buildings. The documentation supported occupancy approval and discussions with authorities.",
    tags: ["Noise", "Occupational health", "HVAC"],
    href: "/sluzby/hlukove-studie",
    contactService: "Měření hluku a akustika",
    cta: "Request measurement / study"
  },
  {
    id: "rozptyl-kotelna",
    title: "New gas boiler plant — dispersion study",
    operationType: "food / industrial operation",
    scope: "several gas boilers, exhaust stacks, immission contributions",
    output: "dispersion study for the permitting process",
    text: "We prepared a dispersion study for a new boiler plant with immission contributions to the surroundings. Inputs: exhaust stacks, operating regime and source parameters.",
    tags: ["Dispersion", "Regional authority", "EIA"],
    href: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie",
    cta: "Request measurement / study"
  },
  {
    id: "kompost-studie",
    title: "Composting facility — expert report, dispersion and noise",
    operationType: "composting facility / waste treatment plant",
    scope: "expert report, dispersion study, noise study",
    output: "set of supporting documentation for permitting proceedings",
    text: "We combined an expert report, dispersion study and noise study for a waste facility. The outputs went into a single permitting process.",
    tags: ["Dispersion", "Noise", "EIA", "Regional authority"],
    href: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky",
    cta: "Request measurement / study"
  },
  {
    id: "eia-lak",
    title: "Sheet metal paint shop — EIA",
    operationType: "paint shop / surface treatment",
    scope: "EIA, technology, emissions, operating regime",
    output: "project notification and appendices for the permitting process",
    text: "We prepared EIA and technical appendices for a sheet metal paint shop including emission inputs and operating regime.",
    tags: ["EIA", "Emissions", "Regional authority"],
    href: "/sluzby/eia-oznameni-zameru",
    contactService: "EIA a oznámení záměru",
    cta: "Request measurement / study"
  },
  {
    id: "slevarna-eia",
    title: "Foundry — modernisation and EIA",
    operationType: "foundry / metal production",
    scope: "EIA, expert report, dispersion study, noise study",
    output: "comprehensive set of permitting documentation",
    text: "For foundry modernisation we aligned EIA, expert report, dispersion and noise into a single set of documentation for the technology change.",
    tags: ["EIA", "Dispersion", "Noise", "Regional authority"],
    href: "/sluzby/eia-posudky-poradenstvi",
    contactService: "EIA a oznámení záměru",
    cta: "Request measurement / study"
  },
  {
    id: "provozni-rad-odpady",
    title: "Waste — operating rules for a capacity change",
    operationType: "waste / recycling",
    scope: "operating rules, capacity increase, discussions with the authority",
    output: "operating documentation for permitting",
    text: "We prepared operating rules for a capacity increase and processing of construction rubble. The documentation went into official proceedings.",
    tags: ["Regional authority", "CZ EPA", "Air"],
    href: "/sluzby/provozni-rady",
    contactService: "Provozní řády",
    cta: "Request a similar project"
  },
  {
    id: "ispop-vice",
    title: "Multiple operations — ISPOP and records",
    operationType: "multiple operations, various sectors",
    scope: "air, waste, link to emission measurements",
    output: "annual reporting and operating records",
    text: "We annually prepare integrated pollution reporting records and ISPOP submissions linked to emission measurements and operating permits.",
    tags: ["ISPOP", "Regional authority"],
    href: "/sluzby/ispop",
    contactService: "ISPOP",
    cta: "Request a similar project"
  },
  {
    id: "ghg-overovani",
    title: "GHG — verification of emission data",
    operationType: "operation with greenhouse gas obligations",
    scope: "annual verification, capacity changes, operating data",
    output: "verification outputs for the operator",
    text: "We verified annual emission data and supporting documentation for a capacity change under the greenhouse gas regime.",
    tags: ["GHG", "ISPOP"],
    href: "/sluzby/ghg-overovani",
    contactService: "GHG",
    cta: "Request a similar project"
  },
  {
    id: "zjistovaci-zemedelstvi",
    title: "Agricultural site — scoping proceedings",
    operationType: "agricultural site",
    scope: "EIA / scoping, operating and spatial context",
    output: "project notification",
    text: "We prepared supporting documentation for scoping during modernisation of cattle farming including capacity and impacts on the surroundings.",
    tags: ["EIA", "Regional authority"],
    href: "/sluzby/zjistovaci-rizeni-eia",
    contactService: "EIA a oznámení záměru",
    cta: "Request measurement / study"
  }
] as const;
