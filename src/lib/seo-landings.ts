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
  areaServed?: { type: "City" | "AdministrativeArea"; name: string };
  availableLocales?: readonly ("cs" | "en" | "de")[];
  relatedLinks?: { href: string; label: string; description: string }[];
  faq?: { question: string; answer: string }[];
  internalLinkPriority?: number;
  layout?: "demand";
  eyebrow?: string;
  overviewHeading?: string;
  highlights?: string[];
  heroTheme?: string;
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
    slug: "mereni-hluku-ceske-budejovice",
    title: "Měření hluku České Budějovice",
    metaDescription:
      "Měření hluku v Českých Budějovicích pro provozy, pracoviště, kolaudace a řešení stížností. Laboratoř NATURCHEM na Rudolfovské ulici.",
    h1: "Měření hluku České Budějovice",
    intro:
      "Potřebujete doložit hluk z provozu, na pracovišti nebo pro kolaudaci? NATURCHEM má laboratoř na Rudolfovské 119/57 v Českých Budějovicích a zajišťuje měření hluku i navazující akustické posouzení.",
    sections: [
      {
        heading: "Kdy měření hluku využijete",
        paragraphs: [
          "Měříme hluk z výrobních technologií, vzduchotechniky, chlazení a dalších zařízení, hluk na pracovišti i hluk související s kolaudací, změnou provozu nebo podnětem okolí.",
          "Rozsah měření navrhneme podle zdrojů hluku, provozního režimu a účelu výstupu — například pro KHS, stavební úřad, zaměstnavatele nebo interní rozhodnutí provozovatele."
        ]
      },
      {
        heading: "Co poslat pro rychlé posouzení",
        paragraphs: [
          "Stačí uvést adresu provozu, popsat zdroje hluku a jejich provozní dobu a přiložit dostupnou situaci, fotografie nebo požadavek úřadu. Podle podkladů doporučíme vhodný rozsah a režim měření.",
          "Pokud řešíte konkrétní stížnost nebo kolaudaci, pomůže také označení chráněného prostoru a informace, kdy je technologie nejvíce zatížena."
        ]
      },
      {
        heading: "Výstup a navazující řešení",
        paragraphs: [
          "Výstupem je protokol podle dohodnutého účelu měření. Je-li potřeba posoudit budoucí stav nebo navrhnout opatření, navážeme hlukovou studií či akustickým posouzením.",
          "Místní pracoviště v Českých Budějovicích usnadňuje domluvu pro zakázky ve městě a Jihočeském kraji."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "České Budějovice" },
    internalLinkPriority: 100
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
  },
  {
    slug: "mereni-pro-kolaudaci",
    title: "Měření pro kolaudaci: hluk, osvětlení a pracoviště",
    metaDescription:
      "Měření pro kolaudaci provozu nebo stavby: hluk, osvětlení, mikroklima a pracovní prostředí. Pošlete požadavek KHS či stavebního úřadu.",
    h1: "Měření pro kolaudaci — hluk, osvětlení a pracovní prostředí",
    intro:
      "Doložte hluk, osvětlení a pracovní prostředí jedním koordinovaným zadáním. Rozsah určíme podle projektu a požadavku KHS či stavebního úřadu.",
    sections: [
      {
        heading: "Co se obvykle dokládá",
        paragraphs: [
          "Nejčastěji hluk technologie, osvětlení, mikroklima a faktory pracovního prostředí. Konkrétní rozsah určuje účel stavby a stanovisko úřadu."
        ]
      },
      {
        heading: "Hluk pro kolaudaci",
        paragraphs: [
          "U VZT, chlazení nebo tepelného čerpadla může být požadován protokol o měření hluku v obytné místnosti či jiném chráněném prostoru. Pro návrh může být vhodnější hluková studie."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Stačí požadavek úřadu, relevantní část projektu, popis technologie, lokalita a termín. Chybějící podklady s Vámi upřesníme."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Kolaudační měření",
    availableLocales: ["cs"],
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Kolaudace a KHS",
    overviewHeading: "Co pro Vás ověříme",
    highlights: ["Hluk a akustika", "Osvětlení a mikroklima", "Pracovní prostředí"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Měření hluku",
        description: "Provoz, technologie, VZT a chráněné prostory."
      },
      {
        href: "/sluzby/mereni-osvetleni",
        label: "Měření osvětlení",
        description: "Umělé a denní osvětlení pracovišť a prostor."
      },
      {
        href: "/mereni-nove-haly",
        label: "Měření nové haly",
        description: "Společný rozsah více faktorů pracovního prostředí."
      }
    ],
    faq: [
      {
        question: "Jaké měření potřebujeme pro kolaudaci?",
        answer:
          "Záleží na účelu stavby, technologii a požadavku KHS nebo stavebního úřadu. Nejčastěji se řeší hluk, osvětlení, mikroklima a pracovní prostředí."
      },
      {
        question: "Stačí pro nabídku požadavek úřadu?",
        answer:
          "Pro první posouzení obvykle ano. Následně si vyžádáme jen relevantní část projektu, popis provozu a údaje potřebné pro konkrétní měření."
      }
    ]
  },
  {
    slug: "mereni-nove-haly",
    title: "Měření nové výrobní haly pro KHS a kolaudaci",
    metaDescription:
      "Měření nové haly: hluk, osvětlení, mikroklima, vibrace, prach a chemické látky. Společný rozsah pro KHS, pracoviště a kolaudaci.",
    h1: "Měření nové haly a pracovního prostředí",
    intro:
      "Připravíme společný rozsah měření podle technologie, pracovišť a požadavku KHS. Objednáte jen faktory, které odpovídají skutečnému provozu.",
    sections: [
      {
        heading: "Co lze změřit",
        paragraphs: [
          "Podle výroby může jít o hluk, osvětlení, mikroklima, vibrace, prach nebo chemické látky v pracovním ovzduší."
        ]
      },
      {
        heading: "Kdy měření naplánovat",
        paragraphs: [
          "Technologie i pracoviště musí být v reprezentativním režimu. Termín proto sladíme se spuštěním haly, směnností a požadovaným výstupem."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Pomůže půdorys, popis pracovišť a směn, seznam technologií, bezpečnostní listy a požadavek KHS nebo stavebního úřadu."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření nové haly",
    availableLocales: ["cs"],
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "Nová nebo upravená hala",
    overviewHeading: "Rozsah podle skutečného provozu",
    highlights: ["KHS a kategorizace", "Více faktorů v jednom zadání", "Termín podle provozu"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Pracovní prostředí",
        description: "Prach, chemické látky, hluk a kategorizace prací."
      },
      {
        href: "/sluzby/mereni-mikroklimatu",
        label: "Měření mikroklimatu",
        description: "Teplota, vlhkost a proudění vzduchu."
      },
      {
        href: "/pro-stavebni-firmy",
        label: "Podklady pro stavební firmy",
        description: "Měření a studie v návaznosti na projekt a kolaudaci."
      }
    ],
    faq: [
      {
        question: "Které faktory se v nové hale měří?",
        answer:
          "Podle provozu se může jednat o hluk, osvětlení, mikroklima, tepelnou zátěž, vibrace, prach nebo chemické látky. Rozsah se určuje podle práce a účelu výstupu."
      },
      {
        question: "Musí už být technologie v provozu?",
        answer:
          "Pro měření skutečné expozice a provozního hluku musí být relevantní technologie v reprezentativním režimu. Termín proto plánujeme podle připravenosti haly."
      },
      {
        question: "Co poslat pro nacenění měření haly?",
        answer:
          "Pomůže půdorys, popis pracovišť a směn, seznam technologií, bezpečnostní listy a požadavek KHS nebo stavebního úřadu."
      }
    ]
  },
  {
    slug: "pro-stavebni-firmy",
    title: "Měření a studie pro stavební firmy a projektanty",
    metaDescription:
      "Podklady pro stavební firmy, generální dodavatele a projektanty: hlukové a rozptylové studie, měření pro kolaudaci a nové haly.",
    h1: "Měření a odborné podklady pro stavební firmy",
    intro:
      "Propojíme studie před realizací s měřením skutečného stavu před kolaudací. Rozsah navážeme na projekt, technologii a požadavek úřadu.",
    sections: [
      {
        heading: "Podklady před realizací",
        paragraphs: [
          "Pro navrhovaný stav může být potřeba hluková či rozptylová studie, akustický posudek nebo technická příloha projektu."
        ]
      },
      {
        heading: "Měření před kolaudací",
        paragraphs: [
          "Po instalaci technologií lze ověřit hluk, osvětlení, mikroklima a pracovní prostředí. Měření naplánujeme na reprezentativní provoz."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Pro první posouzení stačí situace, technická zpráva, parametry technologií, stanovisko úřadu, lokalita a požadovaný termín."
        ]
      }
    ],
    serviceHref: "/sluzby/hlukove-studie",
    contactService: "Kolaudační měření",
    availableLocales: ["cs"],
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Pro projektanty a dodavatele",
    overviewHeading: "Podklady podle fáze projektu",
    highlights: ["Studie před realizací", "Měření skutečného stavu", "Podklady pro úřad"],
    heroTheme: "technicke-prilohy",
    relatedLinks: [
      {
        href: "/mereni-pro-kolaudaci",
        label: "Měření pro kolaudaci",
        description: "Hluk, osvětlení a pracovní prostředí podle požadavku úřadu."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Hlukové studie",
        description: "Výpočet hluku technologií, dopravy a stavebních záměrů."
      },
      {
        href: "/sluzby/rozptylove-studie",
        label: "Rozptylové studie",
        description: "Imisní příspěvky a varianty provozu záměru."
      }
    ],
    faq: [
      {
        question: "Kdy potřebuje stavební firma studii a kdy měření?",
        answer:
          "Studie zpravidla hodnotí navrhovaný stav před realizací. Měření ověřuje skutečný stav po instalaci nebo při provozu. Konkrétní požadavek určuje projekt a správní orgán."
      },
      {
        question: "Jaké podklady má poslat projektant?",
        answer:
          "Pro první posouzení pomůže situace, technická zpráva, parametry technologií, provozní doba, doprava a stanoviska příslušných úřadů."
      },
      {
        question: "Lze řešit studii i následné kolaudační měření?",
        answer:
          "Ano. Jde však o samostatné výstupy v různých fázích projektu. Je vhodné průběžně aktualizovat parametry podle skutečně instalované technologie."
      }
    ]
  },
  {
    slug: "mereni-hluku-havlickuv-brod",
    title: "Měření hluku Havlíčkův Brod: provozy a kolaudace",
    metaDescription:
      "Měření hluku v Havlíčkově Brodě a na Vysočině pro provozy, pracoviště, technologie a kolaudace. Sídlo NATURCHEM v Havlíčkově Brodě.",
    h1: "Měření hluku Havlíčkův Brod a Vysočina",
    intro:
      "Změříme hluk provozu, technologie nebo pracoviště v Havlíčkově Brodě a na Vysočině. Účel měření sladíme s požadavkem KHS či stavebního úřadu.",
    sections: [
      {
        heading: "Co měříme",
        paragraphs: [
          "Výrobní zařízení, VZT, chlazení, dopravu v areálu i hluk na pracovišti. Režim měření určuje účel protokolu."
        ]
      },
      {
        heading: "Měření, nebo studie",
        paragraphs: [
          "Měření ověřuje skutečný provoz. Pro navrhovanou technologii může být vhodnější hluková studie nebo akustický posudek."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Uveďte adresu, zdroj hluku, provozní dobu, účel protokolu a termín. Přiložte požadavek úřadu, situaci nebo fotografie."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "AdministrativeArea", name: "Kraj Vysočina" },
    availableLocales: ["cs"],
    internalLinkPriority: 80,
    layout: "demand",
    eyebrow: "Havlíčkův Brod a Vysočina",
    overviewHeading: "Měření pro provoz i stavbu",
    highlights: ["Provozní hluk", "Hluk na pracovišti", "Kolaudace a KHS"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-pro-kolaudaci",
        label: "Měření pro kolaudaci",
        description: "Více veličin podle projektu a požadavku úřadu."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Hlukové studie",
        description: "Posouzení navrhovaného stavu a technologií."
      }
    ]
  },
  {
    slug: "mereni-hluku-praha",
    title: "Měření hluku Praha: technologie, VZT a kolaudace",
    metaDescription:
      "Měření hluku v Praze pro provozovny, technologie, VZT, tepelná čerpadla a kolaudace. Pracoviště NATURCHEM v Praze 5.",
    h1: "Měření hluku Praha",
    intro:
      "Změříme hluk technologie, VZT, tepelného čerpadla nebo provozovny v Praze. Podle účelu doporučíme měření, studii nebo jejich návaznost.",
    sections: [
      {
        heading: "Co měříme",
        paragraphs: [
          "Venkovní jednotky, chlazení, vzduchotechniku, strojovny a provozní hluk. Zařízení musí pracovat v režimu odpovídajícím účelu protokolu."
        ]
      },
      {
        heading: "Měření, nebo studie",
        paragraphs: [
          "Měření ověřuje existující zdroj. Pro navrhované zařízení může být vhodnější hluková studie nebo akustický posudek."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Uveďte adresu, zdroj hluku, provozní dobu, účel měření a termín. Přiložte stanovisko úřadu, situaci, technický list nebo fotografie."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "Praha" },
    availableLocales: ["cs"],
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "Praha a okolí",
    overviewHeading: "Hluk technologií a provozoven",
    highlights: ["VZT a chlazení", "Tepelná čerpadla", "Kolaudace a změna užívání"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-hluku-tepelneho-cerpadla-vzt",
        label: "Hluk tepelných čerpadel a VZT",
        description: "Specializovaná stránka pro venkovní jednotky a chlazení."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Měření pro kolaudaci",
        description: "Hluk, osvětlení a pracovní prostředí."
      }
    ]
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
