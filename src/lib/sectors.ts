export type Sector = {
  title: string;
  href: string;
  description: string;
  typical: string;
  ariaLabel: string;
  linkHint: string;
  homeFeatured?: boolean;
};

export const provozyNavLabel = "Provozy a technologie";

export const sectors: Sector[] = [
  {
    title: "Kotelny a spalovací zdroje",
    href: "/provozy-a-technologie/kotelny",
    homeFeatured: true,
    description:
      "Měření emisí, provozní evidence a povolovací podklady pro kotelny, hořáky, kogenerační jednotky a další spalovací zdroje.",
    typical: "NOx, CO, O₂, TZL, provozní režimy, ISPOP, odborné posudky, povolení provozu",
    ariaLabel: "Zobrazit služby pro kotelny a spalovací zdroje",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Bioplynové stanice a kogenerační jednotky",
    href: "/provozy-a-technologie/bioplyn-biometan",
    homeFeatured: true,
    description:
      "Měření emisí motorů, provozní režim, hluk, pachové a imisní souvislosti, EIA podklady a komunikaci s úřady.",
    typical: "měření emisí, rozptylové studie, hlukové studie, EIA, ČIŽP, ISPOP",
    ariaLabel: "Zobrazit služby pro bioplynové stanice a kogenerační jednotky",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Zemědělské provozy a sušárny",
    href: "/provozy-a-technologie/zemedelske-provozy",
    homeFeatured: true,
    description:
      "Odborné podklady pro zemědělské areály, stáje, sušárny, krmivářské a potravinářské technologie.",
    typical: "emise, hluk, pracovní prostředí, rozptylové studie, EIA, povolovací podklady",
    ariaLabel: "Zobrazit služby pro zemědělské provozy a sušárny",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Lakovny a povrchové úpravy",
    href: "/provozy-a-technologie/lakovny",
    homeFeatured: true,
    description:
      "Měření emisí a pracovního prostředí u lakovacích linek, odsávání, filtrace, sušení a povrchových úprav.",
    typical:
      "VOC/TOC, TZL, technické listy nátěrových hmot, provozní řád, rozptylové studie",
    ariaLabel: "Zobrazit služby pro lakovny a povrchové úpravy",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Dřevozpracující provozy",
    href: "/provozy-a-technologie/drevozpracujici",
    description:
      "Měření a podklady pro pily, truhlárny, výrobu nábytku, odsávání pilin, kotelny na biomasu a sušárny.",
    typical: "TZL, prašnost, hluk, emise ze spalovacích zdrojů, pracovní prostředí, KHS a KÚ",
    ariaLabel: "Zobrazit služby pro dřevozpracující provozy",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Odpady, skládky, recyklace a kompostárny",
    href: "/provozy-a-technologie/odpady-recyklace",
    homeFeatured: true,
    description:
      "Studie a odborné podklady pro zařízení k nakládání s odpady, recyklační areály, skládky, kompostárny a kapacitní změny provozů.",
    typical: "EIA, hlukové studie, rozptylové studie, dopravu, prašnost, provozní dokumentaci",
    ariaLabel: "Zobrazit služby pro odpady, skládky, recyklaci a kompostárny",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Automotive a technické textilie",
    href: "/provozy-a-technologie/automotive",
    description:
      "Měření emisí, pracovního prostředí a hluku pro výrobu komponentů, technických textilií, potahů, plastových a kovových dílů.",
    typical: "chemické látky, VOC, pracovní ovzduší, hluk, technologie, EIA a podklady pro investory",
    ariaLabel: "Zobrazit služby pro automotive a technické textilie",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Svařovny a kovovýroba",
    href: "/provozy-a-technologie/svarovny",
    homeFeatured: true,
    description:
      "Měření pracovního prostředí, emisí a hluku ve svařovnách, kovovýrobě, brusírnách a provozech s odsáváním.",
    typical: "kovy, prach, NOx, ozon, lokální odsávání, kategorizaci prací, hluk",
    ariaLabel: "Zobrazit služby pro svařovny a kovovýrobu",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Sklářské a keramické provozy",
    href: "/provozy-a-technologie/sklarstvi",
    description:
      "Měření emisí, rozptylové studie, EIA podklady a provozní dokumentace pro pecní zdroje, výduchy a filtrační technologie.",
    typical: "emise, výduchy, filtrace, měřicí místa, odborné posudky, provozní řády",
    ariaLabel: "Zobrazit služby pro sklářské a keramické provozy",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "VZT, chlazení a tepelná čerpadla",
    href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
    description:
      "Akustické posouzení a měření hluku venkovních jednotek, vzduchotechniky, chlazení a technologických zařízení.",
    typical: "měření hluku, hlukové studie, návrh opatření, kolaudace, stížnosti, KHS",
    ariaLabel: "Zobrazit služby pro VZT, chlazení a tepelná čerpadla",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Zdravotnictví, laboratoře a čisté prostory",
    href: "/sluzby/pracovni-prostredi",
    description:
      "Měření pracovního prostředí, mikroklimatu, osvětlení, chemických látek a prašnosti v laboratořích, zdravotnických a čistých provozech.",
    typical: "čisté prostory, mikroklima, osvětlení, chemické látky, dokumentaci pro KHS",
    ariaLabel: "Zobrazit služby pro zdravotnictví, laboratoře a čisté prostory",
    linkHint: "Zobrazit služby pro tento provoz"
  }
];

export const homeSectors = sectors
  .filter((s) => s.homeFeatured)
  .map((s) => ({ title: s.title, href: s.href }));
