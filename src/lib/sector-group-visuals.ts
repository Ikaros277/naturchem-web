import type { HeroTheme } from "@/lib/hero-images";

/** Hero téma pro náhled provozu v koláži skupiny. */
export const sectorHeroThemes: Record<string, HeroTheme> = {
  lakovny: "poradna-paint-spray",
  galvanovny: "mereni-emisi",
  svarovny: "forge-worker",
  "tiskarny-textilie": "poradna-automotive",
  drevozpracujici: "poradna-woodworking",
  sklarstvi: "industrial-plant",
  automotive: "poradna-automotive",
  kotelny: "poradna-boiler-room",
  "bioplyn-biometan": "ghg-overovani",
  teplarny: "industrial-plant",
  krematoria: "mereni-emisi",
  "skladky-odpady": "poradna-waste-landfill",
  "odpady-recyklace": "poradna-recycling",
  kompostarny: "poradna-recycling",
  "stavebni-zamery": "homepage-eia",
  kamenolomy: "industrial-plant",
  "zemedelske-provozy": "mereni-emisi",
  "susarny-zemedelstvi": "mereni-emisi",
  potravinarstvi: "pracovni-prostredi",
  "cov-kaly": "odborne-posudky",
  "susarny-kalu": "odborne-posudky",
  "pyrolyza-kalu": "odborne-posudky",
  "cisteni-spalin": "mereni-emisi",
  "tepelna-cerpadla-vzt": "poradna-hvac-units",
  "verejne-budovy": "poradna-hvac-units",
  laboratore: "pracovni-prostredi",
  "lesnictvi-doprava": "mereni-hluku",
  "ispop-evidence": "ispop",
  "ghg-cnr": "ghg-overovani",
  "provozni-rady": "provozni-rady",
  "odborne-posudky-povoleni": "odborne-posudky"
};

export function sectorHeroTheme(sectorId: string): HeroTheme {
  return sectorHeroThemes[sectorId] ?? "provozy-a-technologie";
}
