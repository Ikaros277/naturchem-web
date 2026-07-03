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
  {
    slug: "rozptylova-studie-povoleni",
    title: "Rozptylová studie pro povolení provozu a EIA",
    metaDescription:
      "Rozptylová studie imisí pro povolení provozu, změnu zdroje nebo EIA. Autorizovaná osoba, modelování a podklady pro úřady.",
    h1: "Rozptylová studie pro povolení provozu",
    intro:
      "Zpracujeme rozptylovou studii imisních příspěvků zdroje pro povolení provozu, změnu technologie, EIA nebo jednání s úřadem. Studii provádí autorizovaná osoba v příslušném rozsahu.",
    sections: [
      {
        paragraphs: [
          "Posoudíme zdroje, meteorologii, terén a varianty provozu. Výstup slouží jako odborný podklad pro krajský úřad, ČIŽP, stavební úřad nebo EIA.",
          "Navážeme na měření emisí, provozní řád a existující projektovou dokumentaci."
        ]
      }
    ],
    serviceHref: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie"
  },
  {
    slug: "odborny-posudek-zdroj-znecistovani",
    title: "Odborný posudek zdroje znečišťování ovzduší",
    metaDescription:
      "Odborný posudek podle zákona o ochraně ovzduší — změna provozu, povolení, technologie. Autorizovaná osoba NATURCHEM.",
    h1: "Odborný posudek zdroje znečišťování ovzduší",
    intro:
      "Připravíme odborný posudek pro změnu provozu, nový zdroj, aktualizaci povolení nebo požadavek úřadu. Posudek zpracuje autorizovaná osoba podle zákona č. 201/2012 Sb.",
    sections: [
      {
        paragraphs: [
          "Vyhodnotíme technické a emisní souvislosti zdroje, navrhneme rozsah měření nebo modelování a připravíme výstup použitelný v správním řízení.",
          "Typicky navazujeme na měření emisí, rozptylovou studii nebo provozní dokumentaci."
        ]
      }
    ],
    serviceHref: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky"
  },
  {
    slug: "ispop-rocni-hlaseni-emise",
    title: "ISPOP — roční hlášení a provozní evidence emisí",
    metaDescription:
      "ISPOP, provozní evidence a roční hlášení emisí. Podklady z měření, ověření zprávy a návaznost na povinnosti provozovatele.",
    h1: "ISPOP a roční hlášení emisí",
    intro:
      "Pomůžeme s provozní evidencí, ročním hlášením emisí v ISPOP a ověřením zprávy o emisích. Navážeme na měření emisí a dokumentaci zdroje.",
    sections: [
      {
        paragraphs: [
          "Zkontrolujeme úplnost údajů, soulad s měřením a povolením provozu. U vybraných povinností zajistíme autorizované ověření.",
          "Vhodné pro provozovatele po kontrole, změně technologie nebo při převzetí nového zdroje."
        ]
      }
    ],
    serviceHref: "/sluzby/ispop",
    contactService: "ISPOP"
  },
  {
    slug: "mereni-emisi-dieselagregat",
    title: "Měření emisí dieselagregátu a záložního zdroje",
    metaDescription:
      "Měření emisí dieselagregátu, záložního zdroje a pohotovostního provozu. Autorizované měření a protokol pro úřad.",
    h1: "Měření emisí dieselagregátu a záložního zdroje",
    intro:
      "Zajistíme jednorázové měření emisí z dieselagregátů a záložních zdrojů včetně přípravy na oznámení termínu v ISPOP. Měření provádí autorizovaná osoba.",
    sections: [
      {
        paragraphs: [
          "Typicky měříme NOx, CO, prašnost a další parametry dle povolení a charakteru zdroje.",
          "Výstup slouží pro provozní řád, povolení provozu i roční hlášení emisí."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  },
  {
    slug: "autorizovana-osoba-mereni-emisi",
    title: "Autorizovaná osoba pro měření emisí v ČR",
    metaDescription:
      "Jednorázové měření emisí může provádět jen autorizovaná osoba. NATURCHEM — akreditovaná laboratoř č. 1599 s autorizací pro emise.",
    h1: "Autorizovaná osoba pro měření emisí",
    intro:
      "NATURCHEM je akreditovaná laboratoř č. 1599 a autorizovaná osoba pro jednorázové měření emisí, rozptylové studie a odborné posudky podle zákona o ochraně ovzduší.",
    sections: [
      {
        paragraphs: [
          "Při výběru dodavatele ověřte rozsah autorizace, akreditované metody a zkušenost s vaším typem zdroje — kotelna, lakovna, bioplyn, výduch technologie.",
          "Zajistíme kompletní protokol, oznámení termínu v ISPOP a podklady pro úřad."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  },
  {
    slug: "mereni-prasnosti",
    title: "Měření prašnosti na pracovišti a v provozu",
    metaDescription:
      "Měření prašnosti — vdechovatelná a respirabilní frakce, pracovní prostředí a kategorizace prací. Akreditovaná laboratoř NATURCHEM č. 1599.",
    h1: "Měření prašnosti na pracovišti",
    intro:
      "NATURCHEM, s. r. o. měří prašnost v pracovním prostředí včetně vdechovatelné a respirabilní frakce. Výstupy slouží pro KHS, kategorizaci prací, BOZP a návrh technických opatření.",
    sections: [
      {
        paragraphs: [
          "Měření provádíme na vybraných pracovištích podle skutečných operací a směnnosti. U sypkých materiálů a technologií s odsáváním posoudíme i účinnost ochranných opatření.",
          "Protokol je použitelný pro hygienickou stanici, aktualizaci kategorizace prací a interní dokumentaci BOZP."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "mereni-tezkych-kovu-emise",
    title: "Měření těžkých kovů ve spalinách a pracovním prostředí",
    metaDescription:
      "Měření těžkých kovů v emisích ze stacionárních zdrojů a v pracovním ovzduší. Akreditovaný rozsah laboratoře NATURCHEM.",
    h1: "Měření těžkých kovů",
    intro:
      "V akreditovaném rozsahu laboratoře NATURCHEM měříme těžké kovy v emisích ze stacionárních zdrojů i v pracovním ovzduší. Typicky As, Cd, Cr, Ni, Pb, Hg a další kovy dle požadavku povolení nebo KHS.",
    sections: [
      {
        paragraphs: [
          "U emisí zajišťujeme odběr do kapalného sorbentu a analytické vyhodnocení. V pracovním prostředí měříme expozici na pracovištích se svařováním, broušením nebo manipulací s kovy.",
          "Výstup je protokol s hodnocením vůči limitům nebo podkladům pro kategorizaci prací."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/svarovny"
  },
  {
    slug: "podklady-pro-khs",
    title: "Podklady pro KHS — měření pracovního prostředí a hluku",
    metaDescription:
      "Příprava podkladů pro hygienickou stanici (KHS): měření hluku, prašnosti, chemických látek, mikroklimatu a kategorizace prací.",
    h1: "Podklady pro hygienickou stanici (KHS)",
    intro:
      "Pomůžeme provozovateli připravit podklady pro KHS po výzvě z kontroly, při kategorizaci prací nebo změně technologie. NATURCHEM měří faktory pracovního prostředí v akreditovaném rozsahu.",
    sections: [
      {
        paragraphs: [
          "Typicky řešíme hluk na pracovišti, prašnost, chemické látky, mikroklima, osvětlení a vibrace. Navrhneme rozsah měření podle operací a požadavku úřadu.",
          "Protokoly slouží jako odborný podklad pro zařazení prací do kategorií a komunikaci s hygienickou stanicí."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "podklady-pro-cizp",
    title: "Podklady pro ČIŽP a krajský úřad — emise a ovzduší",
    metaDescription:
      "Měření emisí, odborné posudky a provozní dokumentace jako podklad pro ČIŽP, krajský úřad a povolení provozu zdroje.",
    h1: "Podklady pro ČIŽP a krajský úřad",
    intro:
      "Zajistíme měření emisí, odborný posudek, rozptylovou studii nebo provozní řád jako podklad pro Český inspektorát životního prostředí, krajský úřad nebo správní řízení o povolení provozu.",
    sections: [
      {
        paragraphs: [
          "Jednorázové měření emisí provádí autorizovaná osoba. Navážeme na povolení provozu, výzvu z kontroly nebo změnu technologie.",
          "Výstupy připravujeme tak, aby byly použitelné v komunikaci s úřadem — včetně ISPOP a ročního hlášení emisí, pokud je potřeba."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
