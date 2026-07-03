export type SectorGroup = {
  id: string;
  title: string;
  /** Úvod skupiny na indexu provozů — delší než popisek karty. */
  intro: string;
  sectorIds: readonly string[];
};

export const sectorGroups: SectorGroup[] = [
  {
    id: "prumysl-vyroba",
    title: "Průmysl a výroba",
    intro:
      "Lakovny, galvanovny, svařovny, tiskárny, dřevozpracující provozy, sklářství i automotive — typicky řešíte emise, hluk i pracovní prostředí najednou. Vyberte svůj obor a uvidíte související služby i typické zakázky z praxe.",
    sectorIds: [
      "lakovny",
      "galvanovny",
      "svarovny",
      "tiskarny-textilie",
      "drevozpracujici",
      "sklarstvi",
      "automotive"
    ]
  },
  {
    id: "energetika-emise",
    title: "Energetika a spalovací zdroje",
    intro:
      "Kotelny, spalovací zdroje, kogenerace, bioplyn, teplárny i krematoria — měření emisí, provozní evidence a návaznost na povolení provozu.",
    sectorIds: ["kotelny", "bioplyn-biometan", "teplarny", "krematoria"]
  },
  {
    id: "odpady-recyklace",
    title: "Odpady, recyklace a stavební záměry",
    intro:
      "Skládky, recyklační areály, kompostárny, stavební záměry i kamenolomy — hluk, prašnost, doprava a rozptyl při změně kapacity nebo v EIA.",
    sectorIds: [
      "skladky-odpady",
      "odpady-recyklace",
      "kompostarny",
      "stavebni-zamery",
      "kamenolomy"
    ]
  },
  {
    id: "zemedelstvi",
    title: "Zemědělství, potravinářství a sušárny",
    intro:
      "Zemědělské areály, stáje, sušárny obilí a biomasy i potravinářské provozy s emisemi, hlukem, pachem nebo pracovní expozicí.",
    sectorIds: ["zemedelske-provozy", "susarny-zemedelstvi", "potravinarstvi"]
  },
  {
    id: "voda-kaly",
    title: "Voda, kaly a čistírenské technologie",
    intro:
      "ČOV, kalové hospodářství, sušárny kalů, pyrolýza a technologie čištění spalin — odborné podklady, emise a změny povolení provozu.",
    sectorIds: ["cov-kaly", "susarny-kalu", "pyrolyza-kalu", "cisteni-spalin"]
  },
  {
    id: "budovy-vzt",
    title: "Budovy, služby a pracovní prostředí",
    intro:
      "VZT, tepelná čerpadla, veřejné budovy, laboratoře i provozy s hlukem a vibracemi — měření, studie a podklady pro KHS.",
    sectorIds: [
      "tepelna-cerpadla-vzt",
      "verejne-budovy",
      "laboratore",
      "lesnictvi-doprava"
    ]
  },
  {
    id: "evidence-dokumentace",
    title: "Evidence, výkaznictví a provozní dokumentace",
    intro:
      "ISPOP, výkazování GHG, provozní řády a odborné posudky — podklady pro provozovatele zdrojů a plnění povinností vůči úřadům.",
    sectorIds: ["ispop-evidence", "ghg-cnr", "provozni-rady", "odborne-posudky-povoleni"]
  }
];
