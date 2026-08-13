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
      "Potřebujete protokol k užívání nové haly, provozovny nebo technologie? Podle projektu a požadavku KHS či stavebního úřadu určíme, která měření dávají smysl a jaké podklady připravit.",
    sections: [
      {
        heading: "Co se při kolaudaci nejčastěji dokládá",
        paragraphs: [
          "Rozsah není u každé stavby stejný. V praxi se řeší zejména hluk technologie nebo provozu, umělé osvětlení, mikroklimatické podmínky a faktory pracovního prostředí.",
          "Pokud se v objektu používají chemické látky, vzniká prach nebo jsou zaměstnanci vystaveni vibracím, může požadavek zahrnovat také tyto faktory. Rozhodující je účel místností, skutečný provoz a znění stanoviska úřadu."
        ]
      },
      {
        heading: "Protokol o měření hluku pro kolaudaci",
        paragraphs: [
          "U technologických zařízení, vzduchotechniky, chlazení nebo tepelného čerpadla může být potřeba protokol o měření hluku v obytné místnosti, jiném chráněném prostoru nebo okolí stavby. Měření musí odpovídat posuzovanému provoznímu režimu.",
          "Pokud se hodnotí teprve navrhovaný stav, může být vhodná hluková studie nebo akustický posudek. Předem proto rozlišíme, zda potřebujete měření skutečného stavu, výpočet, nebo oba podklady."
        ]
      },
      {
        heading: "Co nám poslat před nabídkou",
        paragraphs: [
          "Pošlete stanovisko KHS nebo stavebního úřadu, relevantní část projektové dokumentace, půdorys, popis technologie a plánovaný termín kolaudace. U hluku pomohou údaje o zdrojích a jejich provozní době.",
          "U pracoviště doplňte počet zaměstnanců, pracovní činnosti, směnnost a používané látky. Nemáte-li všechny podklady, začněte požadavkem úřadu; podle něj určíme, co je nutné doplnit."
        ]
      },
      {
        heading: "Jeden rozsah místo několika nesouvisejících objednávek",
        paragraphs: [
          "Pokud potřebujete více veličin, sestavíme společný rozsah měření. Terénní práce koordinujeme podle provozních podmínek jednotlivých metod a podle toho, kdy je hala nebo technologie v reprezentativním stavu.",
          "Výstup každého měření odpovídá jeho účelu. Před objednávkou ověříme, komu má být protokol předložen a jaký termín potřebujete stihnout."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Kolaudační měření",
    availableLocales: ["cs"],
    internalLinkPriority: 100,
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
      },
      {
        question: "Lze spojit více kolaudačních měření?",
        answer:
          "Ano, lze je připravit jako společný rozsah. Harmonogram ale musí respektovat podmínky jednotlivých metod a reprezentativní provoz stavby nebo technologie."
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
      "U nové nebo upravené haly často nestačí jedna veličina. Podle technologie, pracovních míst a požadavku KHS připravíme společný rozsah hluku, osvětlení, mikroklimatu, vibrací, prachu nebo chemických látek.",
    sections: [
      {
        heading: "Kdy společné měření haly dává smysl",
        paragraphs: [
          "Balíček je vhodný při uvádění haly do provozu, změně technologie, nové dispozici pracovišť, kategorizaci prací nebo doplnění podkladů pro KHS. Rozsah vždy vychází ze skutečných pracovních činností.",
          "Jiné faktory se řeší ve svařovně, jiné v lakovně, skladu nebo hale s tepelnou technologií. Proto nejprve projdeme provoz, směnnost, větrání, zdroje hluku a používané látky."
        ]
      },
      {
        heading: "Které faktory lze zahrnout",
        paragraphs: [
          "Typicky jde o hluk na pracovišti, umělé osvětlení, mikroklima, tepelnou nebo chladovou zátěž a vibrace. Podle výroby doplníme měření prachu nebo chemických látek v pracovním ovzduší.",
          "Neobjednáváte automaticky všechny veličiny. Doporučíme jen ty, které odpovídají provozu, účelu výstupu a dostupným podkladům."
        ]
      },
      {
        heading: "Podklady pro KHS a kategorizaci prací",
        paragraphs: [
          "Připravte půdorys s pracovišti, popis pracovních činností, délku směny, počet pracovníků, seznam technologií a bezpečnostní listy používaných látek. Přiložte také komunikaci s KHS a starší protokoly, pokud existují.",
          "Měření plánujeme na dobu, kdy zařízení a zaměstnanci pracují v reprezentativním režimu. U nové haly je proto důležité sladit termín s instalací a zkušebním provozem technologie."
        ]
      },
      {
        heading: "Jak poptávka pokračuje",
        paragraphs: [
          "Z podkladů sestavíme návrh měřených faktorů a míst. Upřesníme, co musí být při návštěvě v provozu a které informace bude potřeba zaznamenat.",
          "Do formuláře uveďte lokalitu, termín kolaudace nebo požadovaný termín KHS. Pokud přesný rozsah neznáte, vyberte měření nové haly a přiložte projekt nebo stanovisko úřadu."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření nové haly",
    availableLocales: ["cs"],
    internalLinkPriority: 90,
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
      "Koordinujete projekt, novou halu nebo změnu užívání? Připravíme měření a studie podle fáze záměru — od hlukového či imisního posouzení po protokoly potřebné před kolaudací.",
    sections: [
      {
        heading: "Podklady před realizací",
        paragraphs: [
          "Před povolením záměru se často řeší hluková studie, rozptylová studie, akustický posudek nebo technická příloha pro projekt. Správný výstup závisí na zdrojích hluku a emisí, dopravě a požadavku správního orgánu.",
          "Pošlete situaci, technickou zprávu, parametry technologií a dostupná stanoviska. Určíme, které vstupy musí dodat projektant, dodavatel technologie nebo investor."
        ]
      },
      {
        heading: "Měření před kolaudací a užíváním",
        paragraphs: [
          "Po instalaci technologií může být nutné ověřit hluk, osvětlení, mikroklima nebo pracovní prostředí. U nové haly připravíme společný rozsah podle pracovišť a skutečného provozu.",
          "Důležité je plánovat měření až na reprezentativní stav, ale s rezervou před termínem kolaudace. Ve formuláři proto uveďte očekávané spuštění technologie i termín, který potřebujete stihnout."
        ]
      },
      {
        heading: "Co předat do poptávky",
        paragraphs: [
          "Pro první posouzení obvykle stačí projektová dokumentace, účel výstupu, lokalita a požadovaný termín. U studie doplňte zdroje hluku, dopravu, výduchy a provozní dobu; u měření také plánovaný režim technologie.",
          "Pokud je požadavek rozdělen mezi více částí projektu, označte, co má dodat NATURCHEM. Pomůže to předejít překryvům i chybějícím vstupům."
        ]
      },
      {
        heading: "Návaznost studií a měření",
        paragraphs: [
          "Studie popisuje navrhovaný nebo modelovaný stav, zatímco měření ověřuje stav skutečný. U některých projektů proto vznikají v různých fázích oba výstupy.",
          "Průběžné předávání aktuálních parametrů technologie snižuje riziko, že závěrečné měření bude hodnotit jiný stav, než se kterým pracoval projekt."
        ]
      }
    ],
    serviceHref: "/sluzby/hlukove-studie",
    contactService: "Kolaudační měření",
    availableLocales: ["cs"],
    internalLinkPriority: 100,
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
      "Potřebujete změřit hluk provozu, technologie nebo pracoviště v Havlíčkově Brodě a okolí? NATURCHEM zde sídlí a zajišťuje měření hluku pro firmy, stavby i požadavky KHS nebo stavebního úřadu.",
    sections: [
      {
        heading: "Hluk provozu, pracoviště i technologie",
        paragraphs: [
          "Řešíme hluk výrobních zařízení, vzduchotechniky, chlazení, dopravy v areálu i expozici zaměstnanců. Účel měření určuje místa, provozní režim a způsob vyhodnocení.",
          "U plánované technologie může měření doplnit hluková studie nebo akustický posudek. Nejdříve proto ověříme, zda potřebujete výpočet budoucího stavu, nebo protokol ze skutečného provozu."
        ]
      },
      {
        heading: "Měření pro kolaudaci nebo KHS",
        paragraphs: [
          "K poptávce přiložte požadavek úřadu, půdorys nebo situaci a popis zdrojů hluku. Uveďte také jejich provozní dobu a termín, který potřebujete stihnout.",
          "Pokud jde o novou halu, lze hluk řešit společně s osvětlením, mikroklimatem a dalšími faktory pracovního prostředí."
        ]
      },
      {
        heading: "Co poslat pro návrh měření",
        paragraphs: [
          "Uveďte adresu, zdroj hluku, dobu jeho provozu a účel protokolu. Přiložte fotografie, technické parametry zařízení nebo předchozí měření, pokud je máte.",
          "Podle podkladů navrhneme rozsah a podmínky měření. Pro použitelný výsledek musí být posuzovaný zdroj v dohodnutém režimu."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "AdministrativeArea", name: "Kraj Vysočina" },
    availableLocales: ["cs"],
    internalLinkPriority: 80,
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
      "Potřebujete doložit hluk technologie, vzduchotechniky, tepelného čerpadla nebo provozovny v Praze? NATURCHEM má pracoviště v Praze 5 a zajišťuje měření i navazující akustické posouzení.",
    sections: [
      {
        heading: "Technologie, VZT a tepelná čerpadla",
        paragraphs: [
          "U budov a provozoven se často hodnotí venkovní jednotky, chlazení, vzduchotechnika, strojovny nebo provozní hluk. Měřicí režim musí odpovídat účelu protokolu a skutečnému provozu zařízení.",
          "Pokud je zařízení teprve navržené, může být vhodná hluková studie nebo akustický posudek. U existujícího zdroje se vychází z měření v relevantním místě a době."
        ]
      },
      {
        heading: "Kolaudace, změna užívání a požadavek KHS",
        paragraphs: [
          "Pošlete stanovisko úřadu, situaci objektu, umístění zdroje a termín kolaudace. Pomůže také provozní doba, technický list zařízení a informace o nejbližších chráněných prostorech.",
          "U nové provozovny nebo haly lze vedle hluku posoudit také osvětlení, mikroklima a pracovní prostředí podle konkrétního požadavku."
        ]
      },
      {
        heading: "Jak připravit poptávku měření hluku",
        paragraphs: [
          "Uveďte přesnou adresu, zdroj hluku, účel měření a dobu, kdy může zařízení pracovat v reprezentativním režimu. Přiložte dostupný půdorys, fotografie nebo projektovou dokumentaci.",
          "Z podkladů určíme, zda je vhodné měření, studie nebo jejich návaznost. Současně upřesníme podmínky potřebné pro použitelný výstup."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "Praha" },
    availableLocales: ["cs"],
    internalLinkPriority: 90,
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
