import type { Sector } from "./sectors";

export const provozyNavLabelEn = "Facilities and technologies";

export const sectorsEn: Sector[] = [
  {
    title: "Boiler plants and combustion sources",
    href: "/provozy-a-technologie/kotelny",
    homeFeatured: true,
    description:
      "We measure emissions and prepare documentation for boiler plants, burners and cogeneration — including ISPOP and operating permits.",
    typical: "NOx, CO, O₂, TSP, operating modes, ISPOP, expert assessments, operating permits",
    ariaLabel: "View services for boiler plants and combustion sources",
    linkHint: "View services for this facility type"
  },
  {
    title: "Biogas plants and cogeneration units",
    href: "/provozy-a-technologie/bioplyn-biometan",
    homeFeatured: true,
    description:
      "Engine emissions, noise, dispersion and EIA for biogas and cogeneration — coordinated authority liaison in one sector.",
    typical: "emission measurement, dispersion studies, noise studies, EIA, ČIŽP, ISPOP",
    ariaLabel: "View services for biogas plants and cogeneration units",
    linkHint: "View services for this facility type"
  },
  {
    title: "Agricultural operations and dryers",
    href: "/provozy-a-technologie/zemedelske-provozy",
    homeFeatured: true,
    description:
      "Livestock buildings, dryers and sites — emissions, noise, workplaces and permitting documentation for KHS and regional authorities.",
    typical: "emissions, noise, workplace environment, dispersion studies, EIA, permitting documentation",
    ariaLabel: "View services for agricultural operations and dryers",
    linkHint: "View services for this facility type"
  },
  {
    title: "Paint shops and surface treatment",
    href: "/provozy-a-technologie/lakovny",
    homeFeatured: true,
    description:
      "VOC/TOC, extraction and workplace exposure at paint lines — protocols for regional authorities and ČIŽP.",
    typical:
      "VOC/TOC, TSP, coating material data sheets, operating manual, dispersion studies",
    ariaLabel: "View services for paint shops and surface treatment",
    linkHint: "View services for this facility type"
  },
  {
    title: "Wood processing operations",
    href: "/provozy-a-technologie/drevozpracujici",
    description:
      "Sawmills and joinery shops — dust, TSP, biomass emissions and documentation for KHS and regional authorities.",
    typical: "TSP, dust, noise, combustion source emissions, workplace environment, KHS and regional authorities",
    ariaLabel: "View services for wood processing operations",
    linkHint: "View services for this facility type"
  },
  {
    title: "Waste, landfills, recycling and composting",
    href: "/provozy-a-technologie/odpady-recyklace",
    homeFeatured: true,
    description:
      "Recycling, landfills and composting — EIA, noise, dispersion and operational documentation when capacity changes.",
    typical: "EIA, noise studies, dispersion studies, transport, dust, operational documentation",
    ariaLabel: "View services for waste, landfills, recycling and composting",
    linkHint: "View services for this facility type"
  },
  {
    title: "Automotive and technical textiles",
    href: "/provozy-a-technologie/automotive",
    description:
      "Component and textile manufacturing — emissions, chemical substances, noise and documentation for investors and authorities.",
    typical: "chemical substances, VOC, workplace air, noise, technology, EIA and investor documentation",
    ariaLabel: "View services for automotive and technical textiles",
    linkHint: "View services for this facility type"
  },
  {
    title: "Welding shops and metalworking",
    href: "/provozy-a-technologie/svarovny",
    homeFeatured: true,
    description:
      "Dust, metals, noise and extraction in welding shops — measurements for job categorisation and OHS.",
    typical: "metals, dust, NOx, ozone, local extraction, job categorisation, noise",
    ariaLabel: "View services for welding shops and metalworking",
    linkHint: "View services for this facility type"
  },
  {
    title: "Glass and ceramic operations",
    href: "/provozy-a-technologie/sklarstvi",
    description:
      "Furnace sources and stacks — emissions, dispersion and operating manuals for glass operations.",
    typical: "emissions, stacks, filtration, measurement points, expert assessments, operating manuals",
    ariaLabel: "View services for glass and ceramic operations",
    linkHint: "View services for this facility type"
  },
  {
    title: "HVAC, cooling and heat pumps",
    href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
    description:
      "Noise from outdoor units and HVAC — measurement, studies and measures before occupancy approval and for complaints.",
    typical: "noise measurement, noise studies, measure design, occupancy approval, complaints, KHS",
    ariaLabel: "View services for HVAC, cooling and heat pumps",
    linkHint: "View services for this facility type"
  },
  {
    title: "Healthcare, laboratories and cleanrooms",
    href: "/sluzby/pracovni-prostredi",
    description:
      "Laboratories and cleanrooms — microclimate, substances and documentation for KHS.",
    typical: "cleanrooms, microclimate, lighting, chemical substances, documentation for KHS",
    ariaLabel: "View services for healthcare, laboratories and cleanrooms",
    linkHint: "View services for this facility type"
  }
];

export const homeSectorsEn = sectorsEn
  .filter((s) => s.homeFeatured)
  .map((s) => ({ title: s.title, href: s.href }));
