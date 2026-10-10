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
  sourcesHeading?: string;
  sourcesEyebrow?: string;
  sources?: { href: string; label: string; description: string }[];
};

type LandingSource = NonNullable<SeoLanding["sources"]>[number];

const sourceZakonOvzdusi: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2012/201",
  label: "Zákon č. 201/2012 Sb., o ochraně ovzduší",
  description: "Aktuální znění zákona v e-Sbírce, zejména pravidla jednorázového měření emisí."
};

const sourceVyhlaska415: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2012/415",
  label: "Vyhláška č. 415/2012 Sb.",
  description: "Požadavky na zjišťování úrovně znečišťování a provedení měření."
};

const sourceIspopJme: LandingSource = {
  href: "https://www.ispop.cz/nasazeni-formularu-jednorazoveho-mereni-emisi-f_ovz_term_jme-a-f_ovz_jme/",
  label: "ISPOP: formuláře pro jednorázové měření emisí",
  description: "Oficiální informace k oznámení termínu a dat z protokolu."
};

const sourceZakonVerejneZdravi: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2000/258",
  label: "Zákon č. 258/2000 Sb., o ochraně veřejného zdraví",
  description: "Aktuální znění v e-Sbírce: kategorizace prací (§ 37 a násl.), měření hluku (§ 32a) a hluk u staveb (§ 77)."
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "mereni-emisi-kotelen",
    title: "Měření emisí kotelen a spalovacích zdrojů",
    metaDescription:
      "Měření emisí kotelen, hořáků a kogeneračních jednotek: NOx, CO, SO₂, prašnost. Protokol pro ČIŽP, povolení provozu a ISPOP. Pošlete povolení, nabídku připravíme.",
    h1: "Měření emisí kotelen a spalovacích zdrojů",
    intro:
      "Zajišťujeme periodická i provozní měření emisí z kotelen, plynových a olejových hořáků, biomasových zdrojů a kogeneračních jednotek. Rozsah vychází z povolení provozu a skutečného režimu zdroje.",
    sections: [
      {
        heading: "Co u kotelny měříme",
        paragraphs: [
          "Typicky měříme NOx, CO, SO₂, O₂, prašnost a další parametry dle povolení. Výstupem je protokol použitelný pro provozní rozhodování, úřední požadavky i navazující ISPOP.",
          "Rozsah a četnost vždy ověříme z povolení provozu a posledního protokolu, ne podle obecné šablony."
        ]
      },
      {
        heading: "Jak měření probíhá",
        paragraphs: [
          "Z povolení a posledního protokolu ověříme zdroj, výduch a měřené látky. Pak sladíme termín a reprezentativní provozní režim, aby protokol odpovídal skutečnému provozu.",
          "Jednorázové měření emisí provádí autorizovaná osoba. Provozovatel oznamuje termín v ISPOP nejméně 5 pracovních dní před měřením a data z protokolu se oznamují prostřednictvím ISPOP do 60 dnů."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Platné povolení provozu, poslední protokol, typ zdroje a hořáku, palivo, informace o změnách technologie a plánovaný provozní režim. Pomohou i fotografie měřicího místa.",
          "Provozovatelům pomáháme s přípravou podkladů, výběrem reprezentativního režimu a komunikací s orgány ochrany ovzduší."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/kotelny",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Kotelny a spalovací zdroje",
    overviewHeading: "Od povolení k protokolu",
    highlights: ["NOx, CO, SO₂ a prašnost", "Protokol pro ČIŽP a úřady", "Návaznost na ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Autorizované měření emisí",
        description: "Kdo smí měřit, co poslat a jak probíhá oznámení v ISPOP."
      },
      {
        href: "/sluzby/mereni-emisi",
        label: "Měření emisí podle typu zdroje",
        description: "Rozsah měření, podklady, výstupy a příklady provozů."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "Jak připravit zdroj před měřením",
        description: "Praktická kontrola povolení, režimu zdroje a měřicího místa."
      }
    ],
    faq: [
      {
        question: "Jaké látky se u kotelny měří?",
        answer:
          "Typicky NOx, CO, SO₂, O₂ a prašnost. Konkrétní rozsah určuje povolení provozu, palivo a typ zdroje, proto jej před nabídkou ověříme z Vašich podkladů."
      },
      {
        question: "Jak často je potřeba měřit?",
        answer:
          "Četnost vychází z povolení provozu a charakteru zdroje. Pošlete povolení a poslední protokol, z nich termín další kontroly určíme."
      },
      {
        question: "Musí měření provést autorizovaná osoba?",
        answer:
          "Jednorázové měření emisí podle zákona o ochraně ovzduší může provést pouze autorizovaná osoba. Podle povolení Vám potvrdíme, zda se na Váš zdroj vztahuje."
      },
      {
        question: "Co se oznamuje v ISPOP?",
        answer:
          "Provozovatel oznamuje termín jednorázového měření nejméně 5 pracovních dní předem. Data z protokolu se oznamují prostřednictvím ISPOP do 60 dnů."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní a metodické zdroje",
    sources: [sourceZakonOvzdusi, sourceVyhlaska415, sourceIspopJme]
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
    title: "Měření hluku tepelného čerpadla a VZT",
    metaDescription:
      "Měření hluku tepelného čerpadla, VZT a chlazení. Protokol pro kolaudaci, stavební řízení nebo řešení stížností okolí.",
    h1: "Měření hluku tepelného čerpadla a VZT",
    intro:
      "Ověříme hluk instalovaného tepelného čerpadla, VZT nebo chlazení. Výsledek použijete pro kolaudaci, stavební řízení nebo řešení stížnosti.",
    sections: [
      {
        heading: "Kdy potřebujete měření",
        paragraphs: [
          "Po instalaci zařízení, při kolaudaci, po stížnosti okolí nebo při ověření účinnosti protihlukového opatření."
        ]
      },
      {
        heading: "Co nám pošlete",
        paragraphs: [
          "Umístění jednotky, technický list, provozní režimy a požadavek úřadu nebo popis stížnosti. Podle podkladů navrhneme rozsah měření."
        ]
      },
      {
        heading: "Jaký dostanete výstup",
        paragraphs: [
          "Protokol z měření skutečného provozu. Pokud zařízení ještě není instalované, doporučíme místo měření hlukovou studii."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    oboryHref: "/provozy-a-technologie/tepelna-cerpadla-vzt",
    layout: "demand",
    eyebrow: "Tepelná čerpadla, VZT a chlazení",
    overviewHeading: "Co potřebujeme pro měření",
    highlights: ["Měření skutečného provozu", "Kolaudace a stavební řízení", "Ověření po protihlukové úpravě"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Měření hluku a akustika",
        description: "Přehled měření hluku pro provozy, stavby a pracovní prostředí."
      },
      {
        href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
        label: "Hluková studie pro tepelné čerpadlo a VZT",
        description: "Výpočet hluku před instalací zařízení nebo při změně projektu."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Hlukové studie",
        description: "Výpočtové posouzení technologií, areálů a dopravy."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Měření hluku ke kolaudaci",
        description: "Měření, nebo hluková studie podle požadavku úřadu."
      }
    ],
    faq: [
      {
        question: "Potřebuji měření hluku, nebo hlukovou studii?",
        answer:
          "Měření ověří skutečný hluk již instalovaného zařízení. Hluková studie předem posoudí očekávaný dopad a umožní porovnat umístění nebo provozní varianty."
      },
      {
        question: "Jak získám cenu měření hluku tepelného čerpadla?",
        answer:
          "Pošlete umístění jednotky, technický list, provozní režimy a účel měření. Z těchto podkladů určíme rozsah a připravíme konkrétní nabídku."
      },
      {
        question: "Měříte také hluk VZT a chlazení?",
        answer:
          "Ano. Měříme také venkovní jednotky VZT, chladiče, ventilátory a související technologie v jejich skutečném provozu."
      }
    ]
  },
  {
    slug: "mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Měření pro kategorizaci prací a podklady pro KHS",
    metaDescription:
      "Měření pro kategorizaci prací: hluk, prašnost, chemické látky, mikroklima, osvětlení a vibrace v reálném provozu. Akreditovaná laboratoř č. 1599, podklady pro KHS.",
    h1: "Měření pracovního prostředí pro kategorizaci prací",
    intro:
      "Ve výrobních a provozních halách měříme faktory pracovního prostředí pro kategorizaci prací, dokumentaci BOZP a jednání s hygienickou stanicí. Měření provádíme v reálném provozu a výsledky předáme jako protokoly s doporučením opatření.",
    sections: [
      {
        heading: "Kdy měření potřebujete",
        paragraphs: [
          "Zaměstnavatel zařazuje práce do kategorií podle míry výskytu faktorů, které mohou ovlivnit zdraví zaměstnanců (§ 37 zákona č. 258/2000 Sb.). Měření potřebujete při zařazení nových prací, po podstatné změně technologie či organizace práce nebo na výzvu hygienické stanice.",
          "Typicky řešíme prašnost, chemické látky, hluk, osvětlení, mikroklima a vibrace v reálném provozu."
        ]
      },
      {
        heading: "Kdo smí měřit",
        paragraphs: [
          "Měření pro účely zařazení prací do druhé, třetí nebo čtvrté kategorie může zaměstnavatel zajistit jen prostřednictvím držitele osvědčení o akreditaci nebo držitele autorizace k příslušným měřením (§ 38 zákona č. 258/2000 Sb.).",
          "NATURCHEM je akreditovaná zkušební laboratoř č. 1599. Před nabídkou ověříme, že požadované metody spadají do akreditovaného rozsahu."
        ]
      },
      {
        heading: "Co pro měření potřebujeme",
        paragraphs: [
          "Popis pracovních činností, délku směny, počet pracovníků, používané suroviny a bezpečnostní listy, pracovní postupy, předchozí protokoly a případnou komunikaci s KHS.",
          "Protokoly připravujeme s doporučením organizačních a technických opatření."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Kategorizace prací a KHS",
    overviewHeading: "Od popisu provozu k protokolu pro KHS",
    highlights: ["Faktory pracovního prostředí", "Akreditovaná laboratoř č. 1599", "Podklady pro KHS a BOZP"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/podklady-pro-khs",
        label: "Podklady pro KHS",
        description: "Co připravit po výzvě hygienické stanice a jak rozlišit pracoviště a okolí."
      },
      {
        href: "/mereni-prasnosti",
        label: "Měření prašnosti",
        description: "Vdechovatelná a respirabilní frakce na pracovišti."
      },
      {
        href: "/mereni-nove-haly",
        label: "Měření nové výrobní haly",
        description: "Společný rozsah faktorů při spuštění provozu."
      },
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Měření pracovního prostředí",
        description: "Přehled faktorů, podkladů a výstupů."
      }
    ],
    faq: [
      {
        question: "Kdo práce do kategorií zařazuje?",
        answer:
          "Práce zařazuje zaměstnavatel podle míry výskytu faktorů a jejich rizikovosti do čtyř kategorií (§ 37 zákona č. 258/2000 Sb.). Podkladem bývají výsledky měření pracovního prostředí."
      },
      {
        question: "Kdo smí měření pro kategorizaci provést?",
        answer:
          "Držitel osvědčení o akreditaci nebo držitel autorizace k příslušným měřením (§ 38 zákona č. 258/2000 Sb.). NATURCHEM je akreditovaná zkušební laboratoř č. 1599; rozsah metod ověříme před nabídkou."
      },
      {
        question: "Jaké faktory se pro kategorizaci měří?",
        answer:
          "Podle provozu typicky prašnost, chemické látky v pracovním ovzduší, hluk, vibrace, osvětlení a mikroklima. Konkrétní rozsah navrhneme z popisu činností a pracovišť."
      },
      {
        question: "Co dělat, když jde o práce ve třetí nebo čtvrté kategorii?",
        answer:
          "O zařazení prací do vyšších kategorií rozhoduje orgán ochrany veřejného zdraví na základě podkladů zaměstnavatele, včetně lhůt od zahájení prací. Přesné povinnosti ověřte v aktuálním znění zákona a s KHS; měření Vám dodáme jako odborný podklad."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní zdroje",
    sources: [
      sourceZakonVerejneZdravi,
      {
        href: "https://e-sbirka.gov.cz/sb/2003/432",
        label: "Vyhláška č. 432/2003 Sb.",
        description: "Kritéria pro zařazování prací do kategorií a související povinnosti zaměstnavatele."
      }
    ]
  },
  {
    slug: "rozptylova-studie-povoleni",
    title: "Rozptylová studie pro povolení provozu a EIA",
    metaDescription:
      "Rozptylová studie imisí pro povolení provozu, změnu zdroje nebo EIA. Autorizovaná osoba, modelování a podklady pro úřady. Pošlete záměr, navrhneme rozsah.",
    h1: "Rozptylová studie pro povolení provozu",
    intro:
      "Zpracujeme rozptylovou studii imisních příspěvků zdroje pro povolení provozu, změnu technologie, EIA nebo jednání s úřadem. Studii provádí autorizovaná osoba v příslušném rozsahu.",
    sections: [
      {
        heading: "Kdy se studie řeší",
        paragraphs: [
          "Nejčastěji při novém zdroji, změně technologie, kapacity nebo paliva, v řízení o povolení provozu nebo v rámci EIA. Zda a v jakém rozsahu se studie vyžaduje, určuje zákon č. 201/2012 Sb. a příslušný úřad; Váš případ s Vámi ověříme.",
          "Rozptylová studie modeluje příspěvek zdroje k imisní zátěži okolí. Neslouží k ověření skutečných emisí; to řeší měření emisí."
        ]
      },
      {
        heading: "Co posuzujeme",
        paragraphs: [
          "Posoudíme zdroje, meteorologii, terén a varianty provozu. Výstup slouží jako odborný podklad pro krajský úřad, ČIŽP, stavební úřad nebo EIA.",
          "Navážeme na měření emisí, provozní řád a existující projektovou dokumentaci."
        ]
      },
      {
        heading: "Co pro nabídku potřebujeme",
        paragraphs: [
          "Popis záměru a zdrojů, umístění areálu, parametry výduchů, emisní údaje nebo výsledky měření, provozní dobu a režim. Chybějící údaje s Vámi doplníme."
        ]
      }
    ],
    serviceHref: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Ochrana ovzduší a EIA",
    overviewHeading: "Od záměru k odbornému podkladu",
    highlights: ["Autorizovaná osoba", "Povolení provozu a EIA", "Návaznost na měření emisí"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/rozptylove-studie",
        label: "Rozptylové studie",
        description: "Rozsah, podklady a výstupy služby."
      },
      {
        href: "/odborny-posudek-zdroj-znecistovani",
        label: "Odborný posudek zdroje",
        description: "Kdy úřad požaduje posudek a jak navazuje na studii."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Autorizované měření emisí",
        description: "Skutečné emise zdroje jako vstup pro modelování."
      }
    ],
    faq: [
      {
        question: "Kdy je rozptylová studie potřeba?",
        answer:
          "Typicky u nového zdroje, změny technologie, kapacity nebo paliva a v řízeních o povolení provozu či EIA. Konkrétní povinnost určuje zákon o ochraně ovzduší a příslušný úřad, proto ji ověříme podle Vašeho záměru."
      },
      {
        question: "Kdo může rozptylovou studii zpracovat?",
        answer:
          "Rozptylovou studii zpracovává autorizovaná osoba v příslušném rozsahu. Před objednáním ověřte rozsah autorizace dodavatele."
      },
      {
        question: "Jaký je rozdíl mezi rozptylovou studií a měřením emisí?",
        answer:
          "Měření emisí zjišťuje skutečné emise zdroje. Rozptylová studie modeluje, jak se zdroj podílí na imisní zátěži okolí. Často se používají společně."
      },
      {
        question: "Jaké podklady potřebujete pro nabídku?",
        answer:
          "Popis záměru a zdrojů, situaci areálu, parametry výduchů, emisní údaje nebo protokoly z měření a provozní režim. Nekompletní podklady s Vámi doplníme."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní zdroje",
    sources: [sourceZakonOvzdusi]
  },
  {
    slug: "odborny-posudek-zdroj-znecistovani",
    title: "Odborný posudek zdroje znečišťování ovzduší",
    metaDescription:
      "Odborný posudek podle zákona o ochraně ovzduší: změna provozu, povolení, technologie. Autorizovaná osoba NATURCHEM, výstup použitelný pro krajský úřad a ČIŽP.",
    h1: "Odborný posudek zdroje znečišťování ovzduší",
    intro:
      "Připravíme odborný posudek pro změnu provozu, nový zdroj, aktualizaci povolení nebo požadavek úřadu. Posudek zpracuje autorizovaná osoba podle zákona č. 201/2012 Sb.",
    sections: [
      {
        heading: "Kdy posudek potřebujete",
        paragraphs: [
          "Při novém zdroji, změně technologie, kapacity, paliva nebo filtrace a když úřad v řízení o povolení provozu požaduje odborné podklady. Rozhoduje požadavek příslušného úřadu; Váš případ s Vámi nejprve ověříme."
        ]
      },
      {
        heading: "Co v posudku řešíme",
        paragraphs: [
          "Vyhodnotíme technické a emisní souvislosti zdroje, navrhneme rozsah měření nebo modelování a připravíme výstup použitelný ve správním řízení.",
          "Typicky navazujeme na měření emisí, rozptylovou studii nebo provozní dokumentaci."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Technický popis zdroje nebo technologie, povolení provozu či výzvu úřadu, projektovou dokumentaci a dostupné protokoly z měření. Doplníme, co chybí."
        ]
      }
    ],
    serviceHref: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Ochrana ovzduší",
    overviewHeading: "Od požadavku úřadu k použitelnému posudku",
    highlights: ["Autorizovaná osoba", "Změna zdroje a technologie", "Podklad pro správní řízení"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/odborne-posudky",
        label: "Odborné posudky",
        description: "Rozsah, podklady a výstupy služby."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Rozptylová studie",
        description: "Imisní posouzení navazující na posudek."
      },
      {
        href: "/podklady-pro-cizp",
        label: "Podklady pro ČIŽP a krajský úřad",
        description: "Které dokumenty použít po výzvě úřadu."
      }
    ],
    faq: [
      {
        question: "Kdo může odborný posudek zpracovat?",
        answer:
          "Odborný posudek podle zákona o ochraně ovzduší zpracovává autorizovaná osoba v příslušném rozsahu. Před objednáním ověřte rozsah autorizace dodavatele."
      },
      {
        question: "Kdy úřad posudek požaduje?",
        answer:
          "Typicky při změně zdroje nebo technologie a v řízeních o povolení provozu. Jednoznačně to určuje výzva nebo rozhodnutí úřadu, které nám pošlete."
      },
      {
        question: "Čím se posudek liší od rozptylové studie?",
        answer:
          "Posudek shrnuje technické a emisní souvislosti zdroje pro správní řízení. Rozptylová studie modeluje příspěvek zdroje k imisní zátěži. Často navazují jedno na druhé."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní zdroje",
    sources: [sourceZakonOvzdusi]
  },
  {
    slug: "ispop-rocni-hlaseni-emise",
    title: "ISPOP: oznámení měření emisí a roční hlášení",
    metaDescription:
      "ISPOP pro provozovatele zdrojů: oznámení termínu měření nejméně 5 pracovních dní předem, data z protokolu do 60 dnů a roční hlášení emisí. Pomůžeme s podklady.",
    h1: "ISPOP: oznámení měření emisí a roční hlášení",
    intro:
      "Provozovatel zdroje znečišťování ovzduší řeší v ISPOP zejména oznámení termínu a dat jednorázového měření emisí a roční hlášení. Pomůžeme s provozní evidencí, kontrolou úplnosti údajů a návazností na měření a povolení provozu.",
    sections: [
      {
        heading: "Oznámení termínu měření",
        paragraphs: [
          "Před jednorázovým měřením emisí oznamuje provozovatel termín v ISPOP nejméně 5 pracovních dní předem (formulář F_OVZ_TERM_JME). Provozovna musí být evidována v CRŽP.",
          "Podání může za provozovatele provést zmocněná osoba; zmocnění se zakládá v CRŽP podle pokynů na ispop.cz."
        ]
      },
      {
        heading: "Protokol a data z měření",
        paragraphs: [
          "Jednorázové měření provádí autorizovaná osoba. Vyhotoví protokol a data z měření oznámí prostřednictvím ISPOP do 60 dnů (formulář F_OVZ_JME)."
        ]
      },
      {
        heading: "Roční hlášení a provozní evidence",
        paragraphs: [
          "Zkontrolujeme úplnost údajů, soulad s měřením a povolením provozu. U vybraných povinností zajistíme autorizované ověření.",
          "Vhodné pro provozovatele po kontrole, změně technologie nebo při převzetí nového zdroje."
        ]
      }
    ],
    serviceHref: "/sluzby/ispop",
    contactService: "ISPOP",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "ISPOP a ochrana ovzduší",
    overviewHeading: "Co v ISPOP provozovatel ohlašuje",
    highlights: ["Oznámení termínu měření", "Data z protokolu do 60 dnů", "Roční hlášení emisí"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Autorizované měření emisí",
        description: "Kdo smí měřit a co poslat před termínem."
      },
      {
        href: "/sluzby/ispop",
        label: "ISPOP",
        description: "Rozsah pomoci s evidencí a hlášením."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "Jak připravit zdroj před měřením",
        description: "Praktická kontrola povolení, režimu zdroje a měřicího místa."
      }
    ],
    faq: [
      {
        question: "Kdo oznamuje termín měření emisí v ISPOP?",
        answer:
          "Termín oznamuje provozovatel nejméně 5 pracovních dní před měřením. Podání může za něj provést zmocněná osoba se zmocněním zřízeným v CRŽP."
      },
      {
        question: "Do kdy se oznamují data z protokolu?",
        answer:
          "Autorizovaná osoba vyhotoví protokol a data z měření oznámí prostřednictvím ISPOP do 60 dnů."
      },
      {
        question: "Co je potřeba mít před podáním formuláře?",
        answer:
          "Provozovnu evidovanou v CRŽP a platné údaje o zdroji z povolení provozu. Pokud si nejste jisti, pošlete povolení a poslední protokol a ověříme další postup."
      },
      {
        question: "S čím Vám v ISPOP pomůžeme?",
        answer:
          "S přípravou podkladů, kontrolou úplnosti a souladu s měřením a povolením provozu a s návazností na roční hlášení. Rozsah pomoci, včetně případného jednání za provozovatele, si dohodneme předem."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní a metodické zdroje",
    sources: [sourceIspopJme, sourceZakonOvzdusi, sourceVyhlaska415]
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
    title: "Autorizované měření emisí stacionárních zdrojů",
    metaDescription:
      "Autorizované měření emisí kotelen, lakoven a technologií. NATURCHEM, akreditovaná laboratoř č. 1599: příprava, protokol a data pro ISPOP.",
    h1: "Autorizované měření emisí",
    intro:
      "NATURCHEM provádí autorizované jednorázové měření emisí ze stacionárních zdrojů. Zkontrolujeme podklady, změříme zdroj v reprezentativním provozu a předáme akreditovaný protokol.",
    sections: [
      {
        heading: "Pošlete povolení a poslední protokol",
        paragraphs: [
          "Z povolení ověříme zdroje, výduchy, měřené látky a četnost. Přiložte technický popis, změny technologie, fotografie měřicího místa a plánovaný provozní režim."
        ]
      },
      {
        heading: "Připravíme měření pro skutečný provoz",
        paragraphs: [
          "Před termínem sladíme rozsah, přístup k výduchu a reprezentativní režim zdroje. Provozovatel oznamuje termín v ISPOP nejméně 5 pracovních dní před měřením."
        ]
      },
      {
        heading: "Předáme protokol a ohlásíme data",
        paragraphs: [
          "Jednorázové měření může provést pouze autorizovaná osoba. Vyhotovíme protokol a data z měření oznámíme prostřednictvím ISPOP do 60 dnů.",
          "Z naší praxe: u licího stroje jsme měřili tuhé znečišťující látky a zinek na technologickém výduchu. Výstupem byl protokol autorizovaného měření emisí."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Ochrana ovzduší",
    overviewHeading: "Od podkladů k použitelnému protokolu",
    highlights: [
      "Akreditovaná laboratoř č. 1599",
      "Kotelny, lakovny a technologie",
      "Protokol a data pro ISPOP"
    ],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/mereni-emisi",
        label: "Měření emisí podle typu zdroje",
        description: "Rozsah měření, podklady, výstupy a příklady provozů."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "Jak připravit zdroj před měřením",
        description: "Praktická kontrola povolení, režimu zdroje a měřicího místa."
      },
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Akreditace, autorizace a dokumenty",
        description: "Osvědčení laboratoře a přehled odborných oprávnění."
      },
      {
        href: "/ispop-rocni-hlaseni-emise",
        label: "ISPOP: oznámení měření a roční hlášení",
        description: "Termín, data z protokolu a návaznost na roční hlášení."
      },
      {
        href: "/mereni-emisi-kotelen",
        label: "Měření emisí kotelen",
        description: "NOx, CO, SO₂ a prašnost u spalovacích zdrojů."
      },
      {
        href: "/podklady-pro-cizp",
        label: "Podklady pro ČIŽP a krajský úřad",
        description: "Které podklady použít po výzvě úřadu."
      }
    ],
    faq: [
      {
        question: "Kdo smí provést jednorázové měření emisí?",
        answer:
          "Jednorázové měření emisí podle zákona o ochraně ovzduší může provést pouze autorizovaná osoba. Před objednáním je vhodné ověřit také akreditovaný rozsah použitých metod."
      },
      {
        question: "Co potřebujete pro nabídku a přípravu měření?",
        answer:
          "Pošlete platné povolení provozu, poslední protokol, technický popis zdroje a výduchů, informace o změnách technologie a plánovaném provozním režimu. Pomohou také fotografie měřicího místa."
      },
      {
        question: "Kdo oznamuje termín a data do ISPOP?",
        answer:
          "Provozovatel oznamuje termín nejméně 5 pracovních dní před měřením. Autorizovaná osoba vyhotoví protokol a data z měření oznámí prostřednictvím ISPOP do 60 dnů."
      },
      {
        question: "Jaký je rozdíl mezi autorizací a akreditací?",
        answer:
          "Autorizace opravňuje osobu provádět zákonem vymezené činnosti. Akreditace potvrzuje odbornou způsobilost laboratoře pro konkrétní metody a rozsah zkoušek."
      },
      {
        question: "Co musím mít v ISPOP připravené před měřením?",
        answer:
          "Provozovna musí být evidována v CRŽP. Podání může za provozovatele provést zmocněná osoba se zmocněním zřízeným v CRŽP. Postup před termínem s Vámi projdeme."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní a metodické zdroje",
    sources: [
      {
        href: "https://e-sbirka.gov.cz/sb/2012/201",
        label: "Zákon č. 201/2012 Sb., o ochraně ovzduší",
        description: "Aktuální znění zákona v e-Sbírce, zejména pravidla jednorázového měření emisí."
      },
      {
        href: "https://e-sbirka.gov.cz/sb/2012/415",
        label: "Vyhláška č. 415/2012 Sb.",
        description: "Požadavky na zjišťování úrovně znečišťování a provedení měření."
      },
      {
        href: "https://www.ispop.cz/nasazeni-formularu-jednorazoveho-mereni-emisi-f_ovz_term_jme-a-f_ovz_jme/",
        label: "ISPOP: formuláře pro jednorázové měření emisí",
        description: "Oficiální informace k oznámení termínu a dat z protokolu."
      }
    ]
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
        heading: "Co KHS typicky vyžaduje",
        paragraphs: [
          "Typicky řešíme hluk na pracovišti, prašnost, chemické látky, mikroklima, osvětlení a vibrace. Navrhneme rozsah měření podle operací a požadavku úřadu.",
          "Protokoly slouží jako odborný podklad pro zařazení prací do kategorií a komunikaci s hygienickou stanicí."
        ]
      },
      {
        heading: "Pracoviště, nebo okolí provozu",
        paragraphs: [
          "Hygienická stanice může řešit expozici zaměstnanců na pracovišti i hluk působící na okolní chráněné prostory. Jde o různá měření s odlišným účelem, proto s Vámi nejprve upřesníme, který případ řešíte.",
          "U pracovišť navážeme na kategorizaci prací. U hluku z technologie nebo stavby pomůže měření hluku či hluková studie."
        ]
      },
      {
        heading: "Jak postupujeme po výzvě",
        paragraphs: [
          "Pošlete výzvu nebo rozhodnutí KHS, popis provozu a dostupné protokoly. Navrhneme rozsah a termín měření, provedeme je v reálném provozu a předáme protokoly s doporučením opatření."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Hygienická stanice (KHS)",
    overviewHeading: "Od výzvy KHS k protokolům",
    highlights: ["Pracovní prostředí a hluk", "Akreditovaná laboratoř č. 1599", "Podklady pro kategorizaci"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/mereni-pracovniho-prostredi-kategorizace-praci",
        label: "Měření pro kategorizaci prací",
        description: "Kdo smí měřit a co připravit pro zařazení prací."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Měření hluku ke kolaudaci",
        description: "Hluk z technologie a stavby ve vztahu k chráněným prostorům."
      },
      {
        href: "/mereni-prasnosti",
        label: "Měření prašnosti",
        description: "Vdechovatelná a respirabilní frakce na pracovišti."
      }
    ],
    faq: [
      {
        question: "Co dělat po výzvě hygienické stanice?",
        answer:
          "Pošlete nám výzvu nebo rozhodnutí, popis provozu a dostupné protokoly. Podle nich upřesníme, zda jde o pracoviště, nebo hluk v okolí, a navrhneme rozsah měření."
      },
      {
        question: "Stačí měření provedené vlastními silami?",
        answer:
          "Pro zařazení prací do druhé, třetí nebo čtvrté kategorie smí měřit jen držitel osvědčení o akreditaci nebo autorizace k příslušným měřením (§ 38 zákona č. 258/2000 Sb.). Orientační vlastní měření proto obvykle jako podklad nestačí; podle výzvy to potvrdíme."
      },
      {
        question: "Jaké faktory pracovního prostředí měříte?",
        answer:
          "Podle charakteru provozu prašnost, chemické látky, hluk, vibrace, osvětlení a mikroklima. Konkrétní rozsah navrhneme z popisu operací a požadavku KHS."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní zdroje",
    sources: [sourceZakonVerejneZdravi]
  },
  {
    slug: "mereni-hluku-ceske-budejovice",
    title: "Měření hluku České Budějovice – provoz a KHS",
    metaDescription:
      "Měření hluku v Českých Budějovicích pro provozy, pracoviště, KHS a kolaudace. Laboratoř na Rudolfovské 119/57; navrhneme vhodný rozsah.",
    h1: "Měření hluku České Budějovice",
    intro:
      "Potřebujete doložit hluk z provozu, na pracovišti nebo pro kolaudaci? Zvolíme vhodný režim měření a připravíme protokol podle účelu. Naše laboratoř je na Rudolfovské 119/57 v Českých Budějovicích.",
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
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "České Budějovice a jižní Čechy",
    overviewHeading: "Co pro Vás změříme a doložíme",
    highlights: ["Hluk z provozu", "Hluk na pracovišti", "Podklady pro KHS a kolaudaci"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Měření hluku",
        description: "Provozy, technologie, pracoviště a chráněné prostory."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Hluková studie",
        description: "Posouzení budoucího provozu, technologie nebo stavby."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Měření pro kolaudaci",
        description: "Hluk, osvětlení a pracovní prostředí v jednom zadání."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Měření hluku ke kolaudaci",
        description: "Měření, nebo hluková studie podle požadavku úřadu."
      }
    ],
    faq: [
      {
        question: "Jaké podklady mám poslat pro měření hluku?",
        answer:
          "Pošlete adresu provozu, popis zdrojů hluku a jejich provozní dobu. Pomůže také situace, fotografie nebo požadavek KHS či stavebního úřadu."
      },
      {
        question: "Měříte hluk z provozu i hluk na pracovišti?",
        answer:
          "Ano. Účel, místo a režim měření se liší, proto nejprve upřesníme, zda potřebujete doložit vliv provozu na okolí, expozici zaměstnanců nebo podklad pro kolaudaci."
      },
      {
        question: "Lze měření použít při řešení stížnosti na hluk?",
        answer:
          "Rozsah navrhneme podle zdroje hluku, denní či noční doby a chráněného prostoru. Před měřením potřebujeme znát konkrétní situaci a účel výstupu."
      }
    ]
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
        heading: "Které podklady k čemu slouží",
        paragraphs: [
          "Jednorázové měření emisí provádí autorizovaná osoba a ukazuje skutečné emise zdroje. Rozptylová studie modeluje příspěvek zdroje k imisní zátěži, odborný posudek shrnuje technické souvislosti zdroje a provozní řád upravuje provoz zdroje.",
          "Navážeme na povolení provozu, výzvu z kontroly nebo změnu technologie a vybereme podklad, který úřad skutečně požaduje."
        ]
      },
      {
        heading: "Návaznost na ISPOP",
        paragraphs: [
          "Výstupy připravujeme tak, aby byly použitelné v komunikaci s úřadem — včetně ISPOP a ročního hlášení emisí, pokud je potřeba. Termín měření oznamuje provozovatel nejméně 5 pracovních dní předem, data z protokolu se oznamují do 60 dnů."
        ]
      },
      {
        heading: "Co nám poslat po výzvě",
        paragraphs: [
          "Výzvu ČIŽP nebo krajského úřadu, platné povolení provozu, poslední protokol a popis změn technologie. Podle nich navrhneme rozsah a pořadí kroků."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "ČIŽP a krajský úřad",
    overviewHeading: "Od výzvy úřadu ke správnému podkladu",
    highlights: ["Měření emisí", "Posudek a rozptylová studie", "Návaznost na ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Autorizované měření emisí",
        description: "Kdo smí měřit a jak probíhá oznámení v ISPOP."
      },
      {
        href: "/odborny-posudek-zdroj-znecistovani",
        label: "Odborný posudek zdroje",
        description: "Podklad pro změnu provozu a povolení."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Rozptylová studie",
        description: "Imisní posouzení pro povolení provozu a EIA."
      },
      {
        href: "/ispop-rocni-hlaseni-emise",
        label: "ISPOP a roční hlášení",
        description: "Oznámení termínu, data z protokolu a roční hlášení."
      }
    ],
    faq: [
      {
        question: "Jaký podklad požaduje ČIŽP nebo krajský úřad?",
        answer:
          "Určuje to výzva nebo rozhodnutí úřadu. Nejčastěji jde o protokol z autorizovaného měření emisí, odborný posudek, rozptylovou studii nebo provozní řád. Pošlete nám výzvu a vybereme správný podklad."
      },
      {
        question: "Kdo smí změřit emise pro úřad?",
        answer:
          "Jednorázové měření emisí podle zákona o ochraně ovzduší může provést pouze autorizovaná osoba. Před objednáním ověřte rozsah autorizace a akreditovaných metod."
      },
      {
        question: "Jak se měření oznamuje do ISPOP?",
        answer:
          "Provozovatel oznamuje termín měření nejméně 5 pracovních dní předem a data z protokolu se oznamují prostřednictvím ISPOP do 60 dnů."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní a metodické zdroje",
    sources: [sourceZakonOvzdusi, sourceVyhlaska415, sourceIspopJme]
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
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Kolaudace a KHS",
    overviewHeading: "Co pro Vás ověříme",
    highlights: ["Hluk a akustika", "Osvětlení a mikroklima", "Pracovní prostředí"],
    heroTheme: "mereni-pro-kolaudaci",
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
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Měření hluku ke kolaudaci",
        description: "Kdy stačí hluková studie a kdy je nutné měření."
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
    slug: "mereni-hluku-ke-kolaudaci",
    title: "Měření hluku ke kolaudaci pro stavební úřad a KHS",
    metaDescription:
      "Měření hluku ke kolaudaci technologií, VZT a tepelných čerpadel. Poradíme, zda stačí hluková studie, nebo je nutné měření. Pošlete požadavek stavebního úřadu či KHS.",
    h1: "Měření hluku ke kolaudaci",
    intro:
      "Stavební úřad nebo KHS požaduje doložit hluk technologie, vzduchotechniky či tepelného čerpadla? Poradíme, zda stačí hluková studie, nebo je potřeba měření v provozu, a zajistíme měření pro příslušný chráněný prostor.",
    sections: [
      {
        heading: "Měření, nebo hluková studie",
        paragraphs: [
          "Hluková studie posuzuje navrhovaný stav výpočtem, měření ověřuje skutečný provoz. U povolení záměru chráněných staveb, například bytových a rodinných domů, škol, zdravotních a sociálních staveb, i staveb zdrojů hluku v území zatíženém nadlimitním hlukem zákon připouští měření hluku podle § 32a, nebo hlukovou studii s návrhem opatření (§ 77 odst. 5 zákona č. 258/2000 Sb.).",
          "Co se vyžaduje ke kolaudaci Vaší stavby, určují podmínky povolení a požadavek stavebního úřadu nebo KHS. Pošlete nám je a doporučíme vhodný postup."
        ]
      },
      {
        heading: "Kdo smí hluk měřit",
        paragraphs: [
          "Měření hluku v životním prostředí člověka podle tohoto zákona může provádět pouze držitel osvědčení o akreditaci nebo držitel autorizace podle § 83c (§ 32a zákona č. 258/2000 Sb.).",
          "Před nabídkou potvrdíme, že požadovaná metoda spadá do akreditovaného rozsahu NATURCHEM."
        ]
      },
      {
        heading: "Co typicky měříme",
        paragraphs: [
          "Venkovní jednotky tepelných čerpadel, vzduchotechniku, chlazení, technologie a dopravu v areálu. Zařízení musí při měření pracovat v režimu, který odpovídá účelu protokolu."
        ]
      },
      {
        heading: "Co nám poslat",
        paragraphs: [
          "Požadavek nebo podmínky stavebního úřadu či KHS, adresu a označení chráněného prostoru, popis zdrojů hluku a jejich provozní dobu, technické listy a případnou dřívější hlukovou studii. Doplníme, co bude chybět."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku ke kolaudaci",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Kolaudace a chráněné prostory",
    overviewHeading: "Od požadavku úřadu k protokolu",
    highlights: ["Měření, nebo studie", "VZT a tepelná čerpadla", "Protokol pro stavební úřad a KHS"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-pro-kolaudaci",
        label: "Měření pro kolaudaci",
        description: "Hluk, osvětlení a pracovní prostředí v jednom zadání."
      },
      {
        href: "/mereni-hluku-tepelneho-cerpadla-vzt",
        label: "Hluk tepelných čerpadel a VZT",
        description: "Venkovní jednotky, chlazení a chráněný venkovní prostor."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Hluková studie",
        description: "Posouzení navrhované technologie nebo stavby výpočtem."
      },
      {
        href: "/sluzby/mereni-hluku",
        label: "Měření hluku a akustika",
        description: "Provozy, technologie, pracoviště a chráněné prostory."
      }
    ],
    faq: [
      {
        question: "Je ke kolaudaci vždy potřeba měření hluku?",
        answer:
          "Ne vždy. Záleží na podmínkách povolení a požadavku stavebního úřadu nebo KHS. Pošlete nám je a doporučíme, zda stačí hluková studie, nebo je nutné měření v provozu."
      },
      {
        question: "Kdo smí měřit hluk pro stavební úřad nebo KHS?",
        answer:
          "Měření hluku v životním prostředí může provádět pouze držitel osvědčení o akreditaci nebo držitel autorizace podle § 83c zákona č. 258/2000 Sb. (§ 32a)."
      },
      {
        question: "Může hluková studie nahradit měření?",
        answer:
          "U povolení záměru některých staveb zákon připouští měření hluku, nebo hlukovou studii s návrhem opatření (§ 77 odst. 5). Ověření skutečného provozu po realizaci ale může úřad požadovat v podmínkách povolení; rozhoduje konkrétní požadavek."
      },
      {
        question: "Změříte hluk tepelného čerpadla nebo vzduchotechniky?",
        answer:
          "Ano. Měření zajistíme pro chráněný prostor uvedený v požadavku úřadu. Zařízení musí pracovat v režimu odpovídajícím účelu protokolu, termín proto domluvíme předem."
      }
    ],
    sourcesEyebrow: "Ověřené informace",
    sourcesHeading: "Právní zdroje",
    sources: [sourceZakonVerejneZdravi]
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
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "Nová nebo upravená hala",
    overviewHeading: "Rozsah podle skutečného provozu",
    highlights: ["KHS a kategorizace", "Více faktorů v jednom zadání", "Termín podle provozu"],
    heroTheme: "mereni-nove-haly",
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
    title: "Dokumentace k projektu pro stavební firmy a projektanty",
    metaDescription:
      "Dokumentace k projektu pro stavební firmy a projektanty: hlukové a rozptylové studie, odborné posudky, EIA a technické přílohy.",
    h1: "Studie a dokumentace k projektu",
    intro:
      "Připravíme rozptylové a hlukové studie, odborné posudky, EIA a technické přílohy podle projektu, technologie a požadavku úřadu.",
    sections: [
      {
        heading: "Podklady před realizací",
        paragraphs: [
          "Pro navrhovaný stav může být potřeba hluková či rozptylová studie, odborný nebo akustický posudek, EIA či technická příloha projektu."
        ]
      },
      {
        heading: "Ověření po realizaci",
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
    serviceHref: "/sluzby/eia-posudky-poradenstvi",
    contactService: "Odborné posudky",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Pro projektanty a dodavatele",
    overviewHeading: "Dokumentace podle fáze projektu",
    highlights: ["Studie před realizací", "Odborné posudky a EIA", "Podklady pro úřad"],
    heroTheme: "technicke-prilohy",
    relatedLinks: [
      {
        href: "/sluzby/hlukove-studie",
        label: "Hlukové studie",
        description: "Výpočet hluku technologií, dopravy a stavebních záměrů."
      },
      {
        href: "/sluzby/rozptylove-studie",
        label: "Rozptylové studie",
        description: "Imisní příspěvky a varianty provozu záměru."
      },
      {
        href: "/sluzby/eia-posudky-poradenstvi",
        label: "EIA a odborné posudky",
        description: "Podklady pro posouzení záměru a povolovací řízení."
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
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Měření hluku ke kolaudaci",
        description: "Měření, nebo hluková studie podle požadavku úřadu."
      }
    ],
    faq: [
      {
        question: "Měříte hluk v Havlíčkově Brodě a na Vysočině?",
        answer:
          "Ano. Sídlo NATURCHEM je v Havlíčkově Brodě, takže termín domluvíme přímo. Pošlete adresu, popis zdroje hluku, provozní dobu a požadavek úřadu."
      },
      {
        question: "Jak poznám, zda potřebuji měření, nebo hlukovou studii?",
        answer:
          "Měření ověřuje skutečný provoz existujícího zdroje, studie posuzuje navrhovaný stav. Podle požadavku KHS či stavebního úřadu doporučíme vhodný postup."
      },
      {
        question: "Co poslat pro první posouzení?",
        answer:
          "Adresu, zdroj hluku, provozní dobu, účel protokolu a termín. Přiložte stanovisko úřadu, situaci nebo fotografie."
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
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Měření hluku ke kolaudaci",
        description: "Měření, nebo hluková studie podle požadavku úřadu."
      }
    ],
    faq: [
      {
        question: "Měříte hluk v Praze?",
        answer:
          "Ano. NATURCHEM má pracoviště v Praze 5. Pošlete adresu, popis zdroje hluku, provozní dobu a požadavek úřadu a navrhneme rozsah měření."
      },
      {
        question: "Změříte hluk tepelného čerpadla nebo VZT?",
        answer:
          "Ano. Zařízení musí pracovat v režimu odpovídajícím účelu protokolu, termín proto domluvíme předem. Pro navrhované zařízení může být vhodnější hluková studie."
      },
      {
        question: "Co poslat pro první posouzení?",
        answer:
          "Adresu, zdroj hluku, provozní dobu, účel měření a termín. Přiložte stanovisko úřadu, situaci, technický list nebo fotografie."
      }
    ]
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
