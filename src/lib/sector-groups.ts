export type SectorGroup = {
  id: string;
  title: string;
  /** Úvod skupiny na indexu provozů — delší než popisek karty. */
  intro: string;
  hrefs: readonly string[];
};

export const sectorGroups: SectorGroup[] = [
  {
    id: "prumysl-vyroba",
    title: "Průmysl a výroba",
    intro:
      "Lakovny, svařovny, sklářství, dřevozpracující provozy i automotive — typicky řešíte emise, hluk i pracovní prostředí najednou. Vyberte svůj obor a uvidíte související služby.",
    hrefs: [
      "/provozy-a-technologie/lakovny",
      "/provozy-a-technologie/svarovny",
      "/provozy-a-technologie/sklarstvi",
      "/provozy-a-technologie/drevozpracujici",
      "/provozy-a-technologie/automotive"
    ]
  },
  {
    id: "energetika-emise",
    title: "Energetika a zdroje emisí",
    intro:
      "Kotelny, spalovací zdroje, kogenerace a bioplyn — měření emisí, provozní evidence a návaznost na povolení provozu. Najdete zde, co řešíme pro provozovatele i investory v energetice.",
    hrefs: ["/provozy-a-technologie/kotelny", "/provozy-a-technologie/bioplyn-biometan"]
  },
  {
    id: "odpady-recyklace",
    title: "Odpady a recyklace",
    intro:
      "Skládky, recyklační areály a kompostárny — hluk, prašnost, doprava a rozptyl při změně kapacity nebo v EIA. Služby pro areály, kde se skládají technická data s řízením záměru.",
    hrefs: ["/provozy-a-technologie/odpady-recyklace"]
  },
  {
    id: "zemedelstvi",
    title: "Zemědělství a potravinářství",
    intro:
      "Zemědělské areály, stáje, sušárny a provozy s emisemi, hlukem, pachem nebo pracovní expozicí. Přehled služeb pro farmy a potravinářské technologie v jednom bloku.",
    hrefs: ["/provozy-a-technologie/zemedelske-provozy"]
  },
  {
    id: "budovy-vzt",
    title: "Budovy, VZT a technologie",
    intro:
      "Venkovní jednotky tepelných čerpadel, vzduchotechnika, chlazení i čisté prostory v objektech — hlukové posouzení, měření a podklady před instalací i při stížnostech.",
    hrefs: [
      "/provozy-a-technologie/tepelna-cerpadla-vzt",
      "/sluzby/pracovni-prostredi"
    ]
  },
  {
    id: "investicni-zamery",
    title: "Stavební a investiční záměry",
    intro:
      "Nové technologie, změny kapacity a záměry v přípravě — EIA, hluk, rozptyl a podklady pro projektanty i investory. Provozy, které často řešíte ještě před spuštěním provozu.",
    hrefs: [
      "/provozy-a-technologie/automotive",
      "/provozy-a-technologie/odpady-recyklace",
      "/provozy-a-technologie/tepelna-cerpadla-vzt"
    ]
  }
];
