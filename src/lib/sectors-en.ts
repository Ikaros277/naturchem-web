import { sectors, type Sector } from "./sectors";

export const provozyNavLabelEn = "Facilities and technologies";

type SectorText = Pick<
  Sector,
  "title" | "description" | "serviceTags" | "factors" | "ariaLabel" | "linkHint"
>;

const EN: Partial<Record<string, SectorText>> = {
  lakovny: {
    title: "Paint shops and surface treatment",
    description:
      "For paint shops we handle TOC/VOC measurements, coating consumption, data sheets, spray booths, drying, sandblasting, filters, activated carbon, extraction, operating manuals and links to operating permits. Where staff are present we can also assess workplace exposure — chemicals, noise, microclimate or ventilation effectiveness.",
    serviceTags: "Emissions, VOC/TOC, workplace environment, operating manual, ČIŽP, regional authority",
    factors: "VOC, TOC, TSP, solvents, extraction, filtration",
    ariaLabel: "View services for paint shops and surface treatment",
    linkHint: "View services for this facility type"
  },
  galvanovny: {
    title: "Galvanising, blasting and metal surface treatment",
    description:
      "For galvanising, blasting and sandblasting we assess stack emissions, dust, metals, HCl, workplace exposure and links to operating permits or KHS requirements.",
    serviceTags: "Emissions, workplace environment, expert assessments, KHS, ČIŽP",
    factors: "metals, dust, HCl, acids, extraction, dust",
    ariaLabel: "View services for galvanising and blasting",
    linkHint: "View services for this facility type"
  },
  svarovny: {
    title: "Welding shops and metalworking",
    description:
      "In welding and metalworking we address welding fumes, metals, noise, extraction, microclimate, lighting and job categorisation for KHS.",
    serviceTags: "Workplace environment, emissions, job categorisation, KHS",
    factors: "welding fumes, metals, NOx, ozone, noise, dust",
    ariaLabel: "View services for welding shops and metalworking",
    linkHint: "View services for this facility type"
  },
  kotelny: {
    title: "Boiler plants and combustion sources",
    description:
      "For boiler plants we handle CO, NOx, O₂, TSP and SO₂ measurements, ISPOP, operating manuals and operating permits.",
    serviceTags: "Emissions, ISPOP, operating manual, expert assessments, ČIŽP",
    factors: "CO, NOx, O₂, TSP, SO₂, solid fuels, gases",
    ariaLabel: "View services for boiler plants",
    linkHint: "View services for this facility type"
  },
  "bioplyn-biometan": {
    title: "Biogas plants and cogeneration units",
    description:
      "For biogas and cogeneration we handle engine emissions, dispersion, noise, EIA, ISPOP and operating permits.",
    serviceTags: "Emissions, dispersion studies, noise studies, EIA, ISPOP",
    factors: "engine emissions, cogeneration, catalyst, methane, NOx",
    ariaLabel: "View services for biogas plants",
    linkHint: "View services for this facility type"
  },
  "odpady-recyklace": {
    title: "Recycling centres, shredders, sorters and storage yards",
    description:
      "For recycling sites we handle noise, dust, dispersion, transport and EIA documentation when capacity changes.",
    serviceTags: "EIA, noise studies, dispersion studies, expert assessments",
    factors: "noise, dust, transport, imissions, capacity",
    ariaLabel: "View services for recycling operations",
    linkHint: "View services for this facility type"
  },
  "tepelna-cerpadla-vzt": {
    title: "HVAC, cooling and heat pumps",
    description:
      "For HVAC and heat pumps we handle noise from outdoor units, measurements, studies and measures before occupancy approval and for complaints.",
    serviceTags: "Noise studies, noise measurement, KHS, building authority",
    factors: "noise, HVAC, cooling, heat pumps, night operation",
    ariaLabel: "View services for HVAC and heat pumps",
    linkHint: "View services for this facility type"
  },
  "zemedelske-provozy": {
    title: "Agricultural operations and livestock buildings",
    description:
      "For farms and livestock buildings we handle emissions, odours, noise, workplace environment and documentation for KHS and regional authorities.",
    serviceTags: "Emissions, noise, workplace environment, dispersion studies, EIA",
    factors: "ammonia, odours, noise, dust, microclimate",
    ariaLabel: "View services for agricultural operations",
    linkHint: "View services for this facility type"
  },
  sklarstvi: {
    title: "Glass and ceramic operations",
    description:
      "For glass and ceramic plants we handle furnace emissions, stacks, fluorides, TSP, NOx, CO, dispersion and operating manuals.",
    serviceTags: "Emissions, dispersion studies, operating manual, ČIŽP",
    factors: "furnaces, fluorides, TSP, NOx, CO, stacks",
    ariaLabel: "View services for glass operations",
    linkHint: "View services for this facility type"
  },
  drevozpracujici: {
    title: "Wood processing and joinery",
    description:
      "For sawmills and joinery we handle dust, TSP, biomass combustion emissions, noise and workplace environment.",
    serviceTags: "Emissions, workplace environment, noise, KHS, regional authority",
    factors: "TSP, dust, noise, biomass boiler emissions",
    ariaLabel: "View services for wood processing",
    linkHint: "View services for this facility type"
  },
  automotive: {
    title: "Automotive and production lines",
    description:
      "For automotive and production lines we handle emissions, chemicals, noise, workplace environment and documentation for investors or authorities.",
    serviceTags: "Emissions, workplace environment, chemicals, EIA",
    factors: "VOC, chemicals, noise, technology, transport",
    ariaLabel: "View services for automotive",
    linkHint: "View services for this facility type"
  },
  laboratore: {
    title: "Laboratories and cleanrooms",
    description:
      "In laboratories and cleanrooms we assess chemicals, microclimate, lighting, noise and ventilation for KHS.",
    serviceTags: "Workplace environment, chemicals, KHS",
    factors: "chemicals, microclimate, lighting, ventilation",
    ariaLabel: "View services for laboratories",
    linkHint: "View services for this facility type"
  },
  "ispop-evidence": {
    title: "ISPOP and summary operating records",
    description:
      "For air pollution sources we prepare ISPOP, summary operating records, emission balances and links to emission measurements.",
    serviceTags: "ISPOP, emissions, operating manual, ČIŽP",
    factors: "emission balance, fuel consumption, operating data",
    ariaLabel: "View services for ISPOP",
    linkHint: "View services for this facility type"
  },
  "tiskarny-textilie": {
    title: "Printing, lamination, technical textiles and bonding",
    description:
      "For printing, lamination and technical textiles we handle VOC, chemicals, workplace air, noise and documentation for investors or authorities.",
    serviceTags: "Emissions, workplace environment, chemicals, EIA",
    factors: "VOC, organic compounds, adhesives, solvents, noise",
    ariaLabel: "View services for printing and textiles",
    linkHint: "View services for this facility type"
  },
  teplarny: {
    title: "District heating plants and larger energy sources",
    description:
      "For district heating and larger energy sources we handle emission measurements, dispersion studies, ISPOP and documentation for capacity changes.",
    serviceTags: "Emissions, dispersion studies, ISPOP, expert assessments",
    factors: "NOx, CO, TSP, SO₂, multiple sources, transport",
    ariaLabel: "View services for district heating plants",
    linkHint: "View services for this facility type"
  },
  krematoria: {
    title: "Crematoria and incineration furnaces",
    description:
      "For crematoria and incineration furnaces we handle emissions, measurement points, operating manuals and documentation for air protection authorities.",
    serviceTags: "Emissions, operating manual, expert assessments, ČIŽP",
    factors: "CO, NOx, TSP, organic compounds, metals",
    ariaLabel: "View services for crematoria",
    linkHint: "View services for this facility type"
  },
  "skladky-odpady": {
    title: "Landfills and waste handling facilities",
    description:
      "For landfills and waste facilities we handle noise, dust, transport, dispersion and EIA when operations change.",
    serviceTags: "EIA, noise studies, dispersion studies, expert assessments",
    factors: "noise, dust, transport, odours, landfill gas",
    ariaLabel: "View services for landfills",
    linkHint: "View services for this facility type"
  },
  kompostarny: {
    title: "Composting sites and biodegradation areas",
    description:
      "For composting and biodegradation sites we handle odours, emissions, noise, dispersion and permitting documentation.",
    serviceTags: "EIA, dispersion studies, noise studies, emissions",
    factors: "odours, ammonia, noise, transport, dust",
    ariaLabel: "View services for composting sites",
    linkHint: "View services for this facility type"
  },
  "stavebni-zamery": {
    title: "Construction and investment projects",
    description:
      "For construction and investment projects we handle EIA, noise, dispersion and expert annexes for designers and investors.",
    serviceTags: "EIA, noise studies, dispersion studies, technical annexes",
    factors: "transport, noise, imissions, capacity, operating variants",
    ariaLabel: "View services for construction projects",
    linkHint: "View services for this facility type"
  },
  kamenolomy: {
    title: "Quarries, sand pits and dusty operations",
    description:
      "For quarries, sand pits and dusty operations we handle dust, noise, transport, dispersion and documentation for authorities.",
    serviceTags: "Dispersion studies, noise studies, emissions, EIA",
    factors: "dust, TSP, noise, transport, crushing",
    ariaLabel: "View services for quarries",
    linkHint: "View services for this facility type"
  },
  "susarny-zemedelstvi": {
    title: "Grain, biomass and agricultural drying plants",
    description:
      "For grain and biomass dryers we handle combustion emissions, dust, noise and documentation for operating permits.",
    serviceTags: "Emissions, noise, dispersion studies, operating manual",
    factors: "TSP, NOx, CO, dust, biomass",
    ariaLabel: "View services for agricultural dryers",
    linkHint: "View services for this facility type"
  },
  potravinarstvi: {
    title: "Food processing operations",
    description:
      "For food processing we handle emissions, odours, workplace environment, noise and hygiene documentation for public health authorities.",
    serviceTags: "Workplace environment, emissions, noise, KHS",
    factors: "odours, dust, microclimate, cooling technology",
    ariaLabel: "View services for food processing",
    linkHint: "View services for this facility type"
  },
  "cov-kaly": {
    title: "Wastewater treatment and sludge management",
    description:
      "For wastewater treatment and sludge management we handle vents, sludge dryers, pyrolysis, flue gas cleaning and operating permit changes.",
    serviceTags: "Expert assessments, operating manual, emissions, dispersion studies",
    factors: "vents, sludge dryer, pyrolysis, biogas, H₂S",
    ariaLabel: "View services for wastewater treatment",
    linkHint: "View services for this facility type"
  },
  "susarny-kalu": {
    title: "Sludge drying plants",
    description:
      "For sludge dryers we handle emissions, vents, operating manuals and documentation for air protection authorities.",
    serviceTags: "Emissions, expert assessments, operating manual, ČIŽP",
    factors: "TSP, odours, vents, gas combustion",
    ariaLabel: "View services for sludge dryers",
    linkHint: "View services for this facility type"
  },
  "pyrolyza-kalu": {
    title: "Pyrolysis and thermal sludge treatment",
    description:
      "For pyrolysis and thermal sludge treatment we handle emissions, vents, flue gas cleaning and expert documentation for authorities.",
    serviceTags: "Expert assessments, emissions, operating manual, dispersion studies",
    factors: "organic compounds, CO, NOx, vents, flue gas",
    ariaLabel: "View services for sludge pyrolysis",
    linkHint: "View services for this facility type"
  },
  "cisteni-spalin": {
    title: "Flue gas and exhaust gas cleaning technology",
    description:
      "For flue gas cleaning we handle inlet and outlet measurements, separation efficiency and operating documentation.",
    serviceTags: "Emissions, expert assessments, operating manual",
    factors: "TSP, metals, HCl, HF, filtration efficiency",
    ariaLabel: "View services for flue gas cleaning",
    linkHint: "View services for this facility type"
  },
  "verejne-budovy": {
    title: "Public buildings, schools, hospitals and social facilities",
    description:
      "For public buildings we handle noise, HVAC, workplace environment and documentation for public health or building authorities.",
    serviceTags: "Noise studies, workplace environment, noise measurement",
    factors: "noise, HVAC, microclimate, lighting, chemicals",
    ariaLabel: "View services for public buildings",
    linkHint: "View services for this facility type"
  },
  "lesnictvi-doprava": {
    title: "Forestry, construction, transport and maintenance",
    description:
      "For forestry, construction firms and transport we handle noise, vibration and job categorisation for public health authorities.",
    serviceTags: "Workplace environment, noise, vibration, job categorisation",
    factors: "noise, HAV/WBV vibration, hand tools, machinery",
    ariaLabel: "View services for forestry and transport",
    linkHint: "View services for this facility type"
  },
  "ghg-cnr": {
    title: "GHG and greenhouse gases",
    description:
      "For operations we handle greenhouse gas reporting, GHG verification and links to measurements and operating data.",
    serviceTags: "GHG, ISPOP, emissions, reporting",
    factors: "CO₂, greenhouse gases, fuels, emission factors",
    ariaLabel: "View services for greenhouse gas reporting",
    linkHint: "View services for this facility type"
  },
  "provozni-rady": {
    title: "Operating manuals",
    description:
      "For air pollution sources we prepare and update operating manuals in line with technology and measurements.",
    serviceTags: "Operating manual, expert assessments, emissions",
    factors: "operating regimes, measurement points, operating conditions",
    ariaLabel: "View services for operating manuals",
    linkHint: "View services for this facility type"
  },
  "odborne-posudky-povoleni": {
    title: "Expert assessments and operating permits",
    description:
      "For technology, capacity or vent changes we prepare expert assessments and documentation for operating permits.",
    serviceTags: "Expert assessments, operating manual, emissions, ČIŽP",
    factors: "technology change, capacity, vent, fuel",
    ariaLabel: "View services for expert assessments and permits",
    linkHint: "View services for this facility type"
  }
};

function localizeSector(sector: Sector): Sector {
  const text = EN[sector.id];
  if (!text) return sector;
  return {
    ...sector,
    ...text,
    typical: `${text.serviceTags}; ${text.factors}`
  };
}

export const sectorsEn: Sector[] = sectors.map(localizeSector);

export const homeSectorsEn = sectorsEn
  .filter((s) => s.homeFeatured)
  .map((s) => ({ title: s.title, href: s.href }));
