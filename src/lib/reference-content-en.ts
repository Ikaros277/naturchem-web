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
  documented?: boolean;
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
    title: "Paint booths — TOC emission measurements",
    operationType: "wet paint shop for industrial components",
    scope: "TOC and ventilation parameters at five paint booth exhausts",
    output: "Emission measurement report for five paint booths.",
    text: "We measured emissions at five exhausts of a wet paint shop. The report documents TOC results and ventilation parameters for each exhaust.",
    tags: ["Emissions", "TOC", "Paint shop"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request a similar project",
    documented: true
  },
  {
    id: "bps-emise",
    title: "Biogas plant — cogeneration emissions",
    operationType: "biogas plant / cogeneration unit",
    scope: "emissions measurement of one cogeneration unit under steady operation",
    output: "Emissions measurement report for the cogeneration unit.",
    text: "We measured emissions from one cogeneration unit at a biogas plant under steady operation. The results were documented in an emissions measurement report.",
    tags: ["Emissions", "Cogeneration"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request measurement / study",
    documented: true
  },
  {
    id: "bps-serie-emise",
    title: "Biogas plant — two cogeneration units",
    operationType: "biogas plant with two cogeneration units",
    scope: "emission measurements for two cogeneration units at one biogas plant",
    output: "Emission measurement report for both cogeneration units.",
    text: "We measured emissions from two cogeneration units at one biogas plant. Results for both sources were documented in one report.",
    tags: ["Emissions", "Biogas"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request a similar project",
    documented: true
  },
  {
    id: "plyn-kotelna-emise",
    title: "Central boiler plant — biomass emissions",
    operationType: "central boiler plant with two biomass boilers",
    scope: "emission measurements of two wood biomass boilers",
    output: "Emission measurement report for both biomass boilers.",
    text: "We measured emissions from two wood biomass boilers at a central boiler plant. The report documents the results for both boilers.",
    tags: ["Emissions", "Biomass"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Request measurement / study",
    documented: true
  },
  {
    id: "hala-pp",
    title: "Automotive manufacturing — workplace environment",
    operationType: "manufacturing plant with assembly lines, a foundry and mould maintenance",
    scope: "noise, microclimatic conditions and organic substances at selected workplaces",
    output: "Separate reports on noise, microclimate and workplace air measurements.",
    text: "In automotive manufacturing, we measured occupational noise, microclimatic conditions and organic substances. The outputs were documented in separate reports.",
    tags: ["Workplace environment", "Microclimate", "Noise"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Request a similar project",
    documented: true
  },
  {
    id: "svarovna-pp",
    title: "Welding shop — occupational noise",
    operationType: "welding shop / metalworking operation",
    scope: "noise measurement for the welder job role",
    output: "Noise measurement and assessment report for work categorisation.",
    text: "We measured occupational noise for a welder in a metalworking facility. The results were documented in a report for work categorisation.",
    tags: ["Noise", "Work categorisation"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Request a similar project",
    documented: true
  },
  {
    id: "tcp-hluk",
    title: "Heat pump — noise in the surroundings",
    operationType: "building technical equipment",
    scope: "outdoor noise in a protected area",
    output: "Noise measurement and assessment report for the outdoor unit.",
    text: "We measured noise during operation of a heat pump outdoor unit in a protected outdoor area. The results and assessment were documented in a report.",
    tags: ["Noise", "Occupational health"],
    href: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    cta: "Request measurement / study",
    documented: true
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
    contactService: "Hlukové studie",
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
    title: "Updated operating rules for test furnaces",
    operationType: "fire testing facility",
    scope: "updating operating rules for air protection",
    output: "Updated operating rules for the air pollution source.",
    text: "We updated the operating rules for a fire testing facility with test furnaces, covering technology, operating records and procedures for abnormal operating conditions.",
    tags: ["Operating rules", "Air"],
    documented: true,
    href: "/sluzby/provozni-rady",
    contactService: "Provozní řády",
    cta: "Request a similar project"
  },
  {
    id: "ispop-vice",
    title: "ISPOP reporting for an industrial site",
    operationType: "industrial site with boiler rooms and surface treatment",
    scope: "annual operating records and ISPOP submission",
    output: "Annual operating report and confirmation of submission.",
    text: "We prepared annual operating records for boiler rooms and surface treatment equipment and submitted the report to ISPOP. Submission is documented by a system confirmation.",
    tags: ["ISPOP", "Air"],
    documented: true,
    href: "/sluzby/ispop",
    contactService: "ISPOP",
    cta: "Request a similar project"
  },
  {
    id: "ghg-overovani",
    title: "Review of energy data and GHG calculations",
    operationType: "manufacturing company",
    scope: "review of energy data and related emission calculations",
    output: "Calculation file and written explanation of data revisions.",
    text: "We reviewed energy data and related emission calculations for purchased electricity. The work included a calculation file and an explanation of revisions. This is not accredited EU ETS verification.",
    tags: ["GHG", "Emission data"],
    documented: true,
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
