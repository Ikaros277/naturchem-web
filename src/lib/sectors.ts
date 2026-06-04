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
      "Měříme emise a připravíme podklady pro kotelny, hořáky a kogeneraci — včetně ISPOP a povolení provozu.",
    typical: "NOx, CO, O₂, TZL, provozní režimy, ISPOP, odborné posudky, povolení provozu",
    ariaLabel: "Zobrazit služby pro kotelny a spalovací zdroje",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Bioplynové stanice a kogenerační jednotky",
    href: "/provozy-a-technologie/bioplyn-biometan",
    homeFeatured: true,
    description:
      "Emise motorů, hluk, rozptyl a EIA u bioplynu a kogenerace — koordinace s úřady v jednom oboru.",
    typical: "měření emisí, rozptylové studie, hlukové studie, EIA, ČIŽP, ISPOP",
    ariaLabel: "Zobrazit služby pro bioplynové stanice a kogenerační jednotky",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Zemědělské provozy a sušárny",
    href: "/provozy-a-technologie/zemedelske-provozy",
    homeFeatured: true,
    description:
      "Stáje, sušárny a areály — emise, hluk, pracoviště a povolovací podklady pro KHS i krajský úřad.",
    typical: "emise, hluk, pracovní prostředí, rozptylové studie, EIA, povolovací podklady",
    ariaLabel: "Zobrazit služby pro zemědělské provozy a sušárny",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Lakovny a povrchové úpravy",
    href: "/provozy-a-technologie/lakovny",
    homeFeatured: true,
    description:
      "VOC/TOC, odsávání a pracovní expozice u lakovacích linek — protokoly pro KÚ a ČIŽP.",
    typical:
      "VOC/TOC, TZL, technické listy nátěrových hmot, provozní řád, rozptylové studie",
    ariaLabel: "Zobrazit služby pro lakovny a povrchové úpravy",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Dřevozpracující provozy",
    href: "/provozy-a-technologie/drevozpracujici",
    description:
      "Pily a truhlárny — prašnost, TZL, emise z biomasy a podklady pro KHS a KÚ.",
    typical: "TZL, prašnost, hluk, emise ze spalovacích zdrojů, pracovní prostředí, KHS a KÚ",
    ariaLabel: "Zobrazit služby pro dřevozpracující provozy",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Odpady, skládky, recyklace a kompostárny",
    href: "/provozy-a-technologie/odpady-recyklace",
    homeFeatured: true,
    description:
      "Recyklace, skládky a kompostárny — EIA, hluk, rozptyl a provozní dokumentace při změně kapacity.",
    typical: "EIA, hlukové studie, rozptylové studie, dopravu, prašnost, provozní dokumentaci",
    ariaLabel: "Zobrazit služby pro odpady, skládky, recyklaci a kompostárny",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Automotive a technické textilie",
    href: "/provozy-a-technologie/automotive",
    description:
      "Výroba komponent a textilií — emise, chemické látky, hluk a podklady pro investora i úřad.",
    typical: "chemické látky, VOC, pracovní ovzduší, hluk, technologie, EIA a podklady pro investory",
    ariaLabel: "Zobrazit služby pro automotive a technické textilie",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Svařovny a kovovýroba",
    href: "/provozy-a-technologie/svarovny",
    homeFeatured: true,
    description:
      "Prašnost, kovy, hluk a odsávání ve svařovnách — měření pro kategorizaci a BOZP.",
    typical: "kovy, prach, NOx, ozon, lokální odsávání, kategorizaci prací, hluk",
    ariaLabel: "Zobrazit služby pro svařovny a kovovýrobu",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Sklářské a keramické provozy",
    href: "/provozy-a-technologie/sklarstvi",
    description:
      "Pecní zdroje a výduchy — emise, rozptyl a provozní řády pro sklářské provozy.",
    typical: "emise, výduchy, filtrace, měřicí místa, odborné posudky, provozní řády",
    ariaLabel: "Zobrazit služby pro sklářské a keramické provozy",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "VZT, chlazení a tepelná čerpadla",
    href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
    description:
      "Hluk venkovních jednotek a VZT — měření, studie a opatření před kolaudací i při stížnostech.",
    typical: "měření hluku, hlukové studie, návrh opatření, kolaudace, stížnosti, KHS",
    ariaLabel: "Zobrazit služby pro VZT, chlazení a tepelná čerpadla",
    linkHint: "Zobrazit služby pro tento provoz"
  },
  {
    title: "Zdravotnictví, laboratoře a čisté prostory",
    href: "/sluzby/pracovni-prostredi",
    description:
      "Laboratoře a čisté prostory — mikroklima, látky a dokumentace pro KHS.",
    typical: "čisté prostory, mikroklima, osvětlení, chemické látky, dokumentaci pro KHS",
    ariaLabel: "Zobrazit služby pro zdravotnictví, laboratoře a čisté prostory",
    linkHint: "Zobrazit služby pro tento provoz"
  }
];

export const homeSectors = sectors
  .filter((s) => s.homeFeatured)
  .map((s) => ({ title: s.title, href: s.href }));
