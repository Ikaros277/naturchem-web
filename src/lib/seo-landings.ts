export type SeoLanding = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading?: string; paragraphs: string[] }[];
  serviceHref: string;
  contactService: string;
  oboryHref?: string;
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "mereni-emisi-kotelen",
    title: "Měření emisí kotelen a spalovacích zdrojů",
    metaDescription:
      "Měření emisí kotelen, hořáků a kogeneračních jednotek. Protokol pro provozovatele, ČIŽP a povolení provozu.",
    h1: "Měření emisí kotelen a spalovacích zdrojů",
    intro:
      "Zajišťujeme periodická i provozní měření emisí z kotelen, plynových a olejových hořáků, biomasových zdrojů a kogeneračních jednotek. Rozsah vychází z povolení provozu a skutečného režimu zdroje.",
    sections: [
      {
        paragraphs: [
          "Typicky měříme NOx, CO, SO₂, O₂, prašnost a další parametry dle povolení. Výstupem je protokol použitelný pro provozní rozhodování, úřední požadavky i navazující ISPOP.",
          "Provozovatelům pomáháme s přípravou podkladů, výběrem reprezentativního režimu a komunikací s orgány ochrany ovzduší."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/kotelny"
  },
  {
    slug: "mereni-emisi-lakoven",
    title: "Měření emisí lakovny a povrchových úprav",
    metaDescription:
      "Měření emisí VOC/TOC a TZL z lakovacích linek, výduchů a filtrů. Protokol pro provozovatele a správní orgány.",
    h1: "Měření emisí lakovny a povrchových úprav",
    intro:
      "U lakovacích technologií řešíme emise VOC/TOC, TZL a související parametry z výduchů a filtračních zařízení. Měření navazujeme na provozní řád a režim linky.",
    sections: [
      {
        paragraphs: [
          "Posoudíme měřicí místo, zvolíme sledované látky a provedeme terénní část v reprezentativním provozu.",
          "Výstup slouží pro provozní rozhodování, aktualizaci dokumentace i jednání s KÚ, ČIŽP nebo krajským úřadem."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/lakovny"
  },
  {
    slug: "mereni-emisi-bioplynovych-stanic",
    title: "Měření emisí bioplynových stanic a kogenerace",
    metaDescription:
      "Měření emisí motorů bioplynových stanic a kogeneračních jednotek. Termíny, protokoly a návaznost na povinnosti provozovatele.",
    h1: "Měření emisí bioplynových stanic a kogeneračních jednotek",
    intro:
      "U bioplynových stanic a kogeneračních jednotek řešíme měření emisí motorů, provozní režim, oznámení měření a návaznost na povinnosti vůči ČIŽP a dalším orgánům.",
    sections: [
      {
        paragraphs: [
          "Pomáháme s harmonogramem měření, přípravou podkladů a vyhodnocením výsledků pro provoz i povolovací dokumentaci.",
          "V návaznosti zajišťujeme rozptylové a hlukové studie nebo EIA podklady pro změny provozu."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/bioplyn-biometan"
  },
  {
    slug: "mereni-emisi-drevozpracujicich-provoze",
    title: "Měření emisí dřevozpracujících provozů",
    metaDescription:
      "Měření emisí z pil, sušáren, kotelen na biomasu a technologických výduchů ve dřevozpracujících provozech.",
    h1: "Měření emisí dřevozpracujících provozů",
    intro:
      "Ve dřevozpracujících provozech měříme emise ze spalování biomasy, sušáren, technologických výduchů a souvisejících zdrojů. Řešíme také prašnost a pracovní prostředí.",
    sections: [
      {
        paragraphs: [
          "Rozsah měření odvozujeme od technologie, paliva a požadavku úřadu nebo investora.",
          "Výstupy připravujeme pro povolení provozu, KHS, krajský úřad i interní BOZP."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/drevozpracujici"
  },
  {
    slug: "mereni-emisi-susaren",
    title: "Měření emisí sušáren",
    metaDescription:
      "Měření emisí ze sušáren biomasy a technologických zdrojů. Protokoly pro provozovatele a povolovací řízení.",
    h1: "Měření emisí sušáren",
    intro:
      "U sušáren a technologií se spalováním nebo odvodem plynných emisí zajišťujeme měření emisních parametrů v reprezentativním provozním režimu.",
    sections: [
      {
        paragraphs: [
          "Typicky řešíme zdroje v zemědělských a dřevozpracujících areálech, včetně návaznosti na měření prašnosti a pracovního prostředí.",
          "Součástí zakázky bývá příprava podkladů pro úřad i plán pravidelných měření."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/zemedelske-provozy"
  },
  {
    slug: "mereni-hluku-tepelneho-cerpadla-vzt",
    title: "Měření hluku tepelných čerpadel a VZT",
    metaDescription:
      "Měření hluku venkovních jednotek tepelných čerpadel, VZT a chlazení. Protokoly a studie pro kolaudaci a úřady.",
    h1: "Měření hluku tepelných čerpadel a VZT",
    intro:
      "Měříme hluk venkovních jednotek tepelných čerpadel, VZT, chladičů a pomocných technologií. Výstupy slouží pro kolaudaci, stavební řízení i řešení stížností okolí.",
    sections: [
      {
        paragraphs: [
          "Posoudíme umístění zdroje, provozní režim a možná protihluková opatření.",
          "V návaznosti zpracujeme hlukovou studii nebo stavebně-akustické posouzení."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    oboryHref: "/provozy-a-technologie/tepelna-cerpadla-vzt"
  },
  {
    slug: "mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Měření pracovního prostředí pro kategorizaci prací",
    metaDescription:
      "Měření faktorů pracovního prostředí pro kategorizaci prací, KHS a BOZP. Prašnost, chemické látky, hluk, mikroklima.",
    h1: "Měření pracovního prostředí pro kategorizaci prací",
    intro:
      "Ve výrobních a provozních halách měříme faktory pracovního prostředí pro kategorizaci prací, dokumentaci BOZP a jednání s hygienickou stanicí.",
    sections: [
      {
        paragraphs: [
          "Typicky řešíme prašnost, chemické látky, hluk, osvětlení, mikroklima a vibrace v reálném provozu.",
          "Protokoly připravujeme s doporučením organizačních a technických opatření."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
