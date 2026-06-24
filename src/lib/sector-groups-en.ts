import { sectorGroups as csGroups, type SectorGroup } from "./sector-groups";

const EN_TEXT: Record<string, Pick<SectorGroup, "title" | "intro">> = {
  "prumysl-vyroba": {
    title: "Industry and manufacturing",
    intro:
      "Paint shops, galvanising, welding, printing, wood processing, glass and automotive — you typically address emissions, noise and workplace environment together. Choose your sector to see related services and typical projects."
  },
  "energetika-emise": {
    title: "Energy and combustion sources",
    intro:
      "Boiler plants, combustion, cogeneration, biogas, district heating and crematoria — emission measurements, operating records and links to operating permits."
  },
  "odpady-recyklace": {
    title: "Waste, recycling and construction projects",
    intro:
      "Landfills, recycling sites, composting, construction projects and quarries — noise, dust, transport and dispersion when capacity changes or in EIA."
  },
  zemedelstvi: {
    title: "Agriculture, food and drying plants",
    intro:
      "Farms, livestock buildings, grain dryers and food operations with emissions, noise, odours or occupational exposure."
  },
  "voda-kaly": {
    title: "Water, sludge and wastewater technology",
    intro:
      "Wastewater treatment, sludge management, sludge drying, pyrolysis and flue gas cleaning — expert documentation, emissions and permit changes."
  },
  "budovy-vzt": {
    title: "Buildings, services and workplace environment",
    intro:
      "HVAC, heat pumps, public buildings, laboratories and operations with noise and vibration — measurements, studies and documentation for public health authorities."
  },
  "evidence-dokumentace": {
    title: "Records, reporting and operating documentation",
    intro:
      "ISPOP, GHG reporting, operating manuals and expert assessments — documentation for operators of emission sources and authorities."
  }
};

export const sectorGroups: SectorGroup[] = csGroups.map((group) => ({
  ...group,
  ...(EN_TEXT[group.id] ?? { title: group.title, intro: group.intro })
}));
