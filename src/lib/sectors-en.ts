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
