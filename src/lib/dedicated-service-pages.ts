export type DedicatedServicePage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  /** Nadpis seznamu v hlavním panelu (výchozí: Co zajišťujeme) */
  scopeHeading?: string;
  /** Nadpis postranního panelu v hero */
  heroPanelTitle?: string;
  contactService: string;
  faqCategoryId?: string;
  scope: string[];
  whenNeeded: string[];
  practicalSituations: string[];
  docs: string[];
  outputs: string[];
  commonMistakes: string[];
  relatedLinks: { title: string; href: string; description: string }[];
};

export const dedicatedServicePages: Record<string, DedicatedServicePage> = {
  "hlukove-studie": {
    slug: "sluzby/hlukove-studie",
    title: "Hlukové studie",
    description:
      "Hlukové studie pro technologie, areály, dopravu, VZT, tepelná čerpadla a stavební záměry. Podklady pro KHS, stavební řízení a EIA.",
    intro:
      "Úřad požaduje hlukovou studii nebo řešíte stížnost okolí? Zpracujeme výpočet technologií, areálu a dopravy — podklad pro KHS, stavební řízení i EIA.",
    contactService: "Hlukové studie",
    faqCategoryId: "hluk",
    scope: [
      "Zpracujeme výpočet hluku technologií, areálů, VZT, tepelných čerpadel a dopravy",
      "Posoudíme denní i noční režim a varianty umístění zdroje",
      "Vyhodnotíme výsledky vůči limitům a chráněnému venkovnímu prostoru",
      "Navrhneme odhlučnění nebo úpravu provozu při hrozbě překročení limitu"
    ],
    whenNeeded: [
      "Vzniká nový zdroj hluku nebo měníte technologii",
      "KHS, stavební úřad nebo EIA požaduje hlukovou studii",
      "Probíhá kolaudace, změna užívání nebo stížnost okolí",
      "Ověřujete účinnost protihlukového opatření před realizací"
    ],
    practicalSituations: [
      "hluková studie pro venkovní jednotky tepelných čerpadel a VZT",
      "hluková studie průmyslového areálu s nočním provozem",
      "posouzení hluku dopravy v areálu nebo obslužné komunikace",
      "hluková studie jako příloha EIA nebo projektové dokumentace"
    ],
    docs: [
      "situace záměru a umístění zdrojů hluku",
      "projektová dokumentace nebo technické listy zařízení",
      "provozní režim v denní a noční době",
      "požadavek KHS, stavebního úřadu nebo příslušného úřadu"
    ],
    outputs: [
      "hluková studie s výpočtem a vyhodnocením",
      "návrh protihlukových nebo provozních opatření",
      "podklad pro KHS, stavební řízení, kolaudaci nebo EIA"
    ],
    commonMistakes: [
      "Záměna hlukové studie za měření hluku u dosud nerealizovaného záměru",
      "Neúplné údaje o nočním režimu provozu",
      "Opomenutí souběhu více zdrojů hluku v areálu"
    ],
    relatedLinks: [
      {
        title: "Měření hluku a akustika",
        href: "/sluzby/mereni-hluku",
        description: "Terénní měření a ověření skutečného hluku v provozu."
      },
      {
        title: "EIA a oznámení záměru",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Hluková studie bývá častou přílohou záměrů s vlivem na okolí."
      }
    ]
  },
  "odborne-posudky": {
    slug: "sluzby/odborne-posudky",
    title: "Odborné posudky",
    description:
      "Odborné posudky podle zákona o ochraně ovzduší pro zdroje, technologie, změny provozu a povolovací řízení.",
    intro:
      "Krajský úřad požaduje odborný posudek ke zdroji nebo změně technologie? Zpracujeme posudek podle zákona o ochraně ovzduší — v návaznosti na měření emisí a povolení provozu.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "Zpracujeme posudek ke zdroji, změně technologie nebo kapacity",
      "Propojíme měření emisí, rozptylovou studii a provozní řád",
      "Připravíme vyjádření k výzvě krajského úřadu nebo ČIŽP",
      "Shrnutí pro investora před podáním žádosti o povolení provozu"
    ],
    whenNeeded: [
      "Plánujete nový zdroj nebo změnu technologie",
      "Měníte kapacitu, palivo, filtraci nebo provozní režim",
      "Úřad požaduje posudek v řízení o povolení provozu",
      "Potřebujete technicky podložené stanovisko"
    ],
    practicalSituations: [
      "odborný posudek pro novou lakovací technologii",
      "posudek ke změně spalovacího zdroje nebo kogenerační jednotky",
      "odborné vyjádření k doplnění žádosti o povolení provozu",
      "posouzení návaznosti měření emisí a rozptylové studie"
    ],
    docs: [
      "technický popis zdroje nebo technologie",
      "projektová dokumentace a situace areálu",
      "povolení provozu, rozhodnutí nebo výzva úřadu",
      "dostupné protokoly z měření, emisní údaje a provozní režim"
    ],
    outputs: [
      "odborný posudek nebo odborné vyjádření",
      "shrnutí podkladů a závěrů pro správní řízení",
      "doporučení návazných kroků, měření nebo dokumentace"
    ],
    commonMistakes: [
      "Posuzování technologie bez aktuálních provozních údajů",
      "Chybějící návaznost na povolení provozu a limity",
      "Neúplné podklady k výduchům, filtraci nebo režimu zdroje"
    ],
    relatedLinks: [
      {
        title: "Rozptylové studie",
        href: "/sluzby/rozptylove-studie",
        description: "Imisní posouzení často navazuje na odborný posudek."
      },
      {
        title: "Provozní řády",
        href: "/sluzby/provozni-rady",
        description: "Provozní dokumentace zdroje po povolení nebo změně provozu."
      }
    ]
  },
  "provozni-rady": {
    slug: "sluzby/provozni-rady",
    title: "Provozní řády zdrojů znečišťování ovzduší",
    description:
      "Příprava a aktualizace provozních řádů stacionárních zdrojů znečišťování ovzduší pro provozovatele a krajské úřady.",
    intro:
      "Provozní řád neodpovídá skutečnému provozu po změně filtrace, paliva nebo výkonu? Připravíme nový řád nebo revizi — sladěnou s povolením a měřením emisí.",
    contactService: "Provozní řády",
    faqCategoryId: "eia",
    scope: [
      "Připravíme nový provozní řád zdroje znečišťování ovzduší",
      "Aktualizujeme po změně technologie, výduchu nebo havarijních postupů",
      "Sladíme s povolením provozu a posledním měřením emisí",
      "Upravíme na výzvu krajského úřadu nebo ČIŽP"
    ],
    whenNeeded: [
      "Plánujete nový zdroj nebo změnu povolení provozu",
      "Měníte technologii, palivo, výduch nebo odlučovací zařízení",
      "Provozní řád neodpovídá skutečnému provozu",
      "Krajský úřad nebo ČIŽP požaduje úpravu dokumentace"
    ],
    practicalSituations: [
      "aktualizace provozního řádu po výměně filtrace",
      "provozní řád pro lakovnu nebo technologický výduch",
      "doplnění provozních režimů po změně kapacity",
      "sjednocení dokumentace s výsledky měření emisí"
    ],
    docs: [
      "stávající provozní řád a povolení provozu",
      "popis technologie, filtrace, výduchů a havarijních stavů",
      "protokoly z měření emisí a provozní evidence",
      "výzva nebo požadavek úřadu"
    ],
    outputs: [
      "provozní řád nebo aktualizace provozního řádu",
      "přehled zapracovaných provozních podmínek",
      "doporučení pro návaznou evidenci a měření"
    ],
    commonMistakes: [
      "Provozní řád neodpovídá skutečné technologii",
      "Chybí vazba na měřené znečišťující látky a limity",
      "Dokumentace neřeší nestandardní nebo havarijní stavy"
    ],
    relatedLinks: [
      {
        title: "Měření emisí",
        href: "/sluzby/mereni-emisi",
        description: "Měřicí výstupy často tvoří podklad pro provozní řád."
      },
      {
        title: "ISPOP a souhrnná provozní evidence",
        href: "/sluzby/ispop",
        description: "Provozní řád navazuje na evidenci a hlášení provozu."
      }
    ]
  },
  "ippc-integrovana-povoleni": {
    slug: "sluzby/ippc-integrovana-povoleni",
    title: "IPPC a integrovaná povolení",
    description:
      "Podklady pro integrovaná povolení, změny IPPC a odbornou koordinaci měření, studií a provozní dokumentace.",
    intro:
      "Měníte zařízení s integrovaným povolením? Sjednotíme měření, studie a provozní podklady pro řízení o IPPC nebo jeho změně.",
    contactService: "IPPC a integrovaná povolení",
    faqCategoryId: "eia",
    scope: [
      "Připravíme podklady pro nové integrované povolení nebo změnu IPPC",
      "Sjednotíme měření, studie a provozní vstupy v jednom celku",
      "Popíšeme změnu vůči stávajícímu povolení a BAT",
      "Doplníme dokumentaci po připomínkách krajského úřadu"
    ],
    whenNeeded: [
      "Plánujete nové integrované povolení",
      "Řešíte podstatnou nebo nepodstatnou změnu IPPC",
      "Měníte kapacitu, technologii nebo emisní parametry",
      "Úřad požaduje doplnění podkladů"
    ],
    practicalSituations: [
      "změna technologie v zařízení s integrovaným povolením",
      "doplnění měření a studií k žádosti o změnu IPPC",
      "sjednocení provozních údajů, emisních podkladů a dokumentace",
      "reakce na připomínky úřadu během řízení"
    ],
    docs: [
      "aktuální integrované povolení a popis změny",
      "projektová dokumentace a technologické schéma",
      "provozní data, měření, bilance a evidence",
      "výzva úřadu nebo seznam požadovaných doplnění"
    ],
    outputs: [
      "odborné podklady pro IPPC nebo změnu integrovaného povolení",
      "koordinační přehled měření, studií a provozních údajů",
      "doplnění dokumentace pro správní řízení"
    ],
    commonMistakes: [
      "Oddělené řešení měření a povolovací dokumentace bez společného závěru",
      "Neaktuální údaje o kapacitě, režimu nebo výduších",
      "Podklady bez jasného rozlišení stávajícího a navrhovaného stavu"
    ],
    relatedLinks: [
      {
        title: "Odborné posudky",
        href: "/sluzby/odborne-posudky",
        description: "Technické posouzení změn zdrojů a zařízení."
      },
      {
        title: "EIA a oznámení záměru",
        href: "/sluzby/eia-oznameni-zameru",
        description: "U větších změn může IPPC navazovat na proces EIA."
      }
    ]
  },
  "eia-oznameni-zameru": {
    slug: "sluzby/eia-oznameni-zameru",
    title: "EIA a oznámení záměru",
    description:
      "Oznámení záměru EIA, odborné přílohy a koordinace podkladů pro zjišťovací řízení a navazující povolování.",
    intro:
      "Připravujete záměr s vlivy na životní prostředí? Zpracujeme oznámení EIA a sladíme podklady pro ovzduší, hluk a dopravu v jednom dokumentu.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "Zpracujeme oznámení záměru podle zákona o EIA",
      "Sjednotíme rozptylové, hlukové a dopravní přílohy",
      "Připravíme technické přílohy pro investora a zpracovatele EIA",
      "Upravíme po připomínkách úřadu nebo veřejnosti"
    ],
    whenNeeded: [
      "Plánujete nový záměr s vlivy na životní prostředí",
      "Měníte kapacitu, technologii nebo areál",
      "Úřad požaduje zjišťovací řízení",
      "Potřebujete doplnit odborné přílohy k povolování"
    ],
    practicalSituations: [
      "oznámení EIA pro rozšíření výrobního areálu",
      "EIA podklady pro odpadové nebo energetické zařízení",
      "koordinace hlukové a rozptylové studie k jednomu záměru",
      "doplnění dokumentace po připomínkách úřadu"
    ],
    docs: [
      "popis záměru, kapacita a umístění",
      "projektová dokumentace, situace a dopravní řešení",
      "technologické údaje, emise, hluk a provozní režim",
      "požadavky úřadů nebo předchozí stanoviska"
    ],
    outputs: [
      "oznámení záměru EIA",
      "koordinační přehled odborných příloh",
      "podklady pro zjišťovací řízení a navazující povolování"
    ],
    commonMistakes: [
      "Nekoordinované technické přílohy s rozdílnými vstupními údaji",
      "Podcenění nočního provozu, dopravy nebo kumulace vlivů",
      "Neúplný popis variant a provozního režimu"
    ],
    relatedLinks: [
      {
        title: "Rozptylové studie",
        href: "/sluzby/rozptylove-studie",
        description: "Imisní příspěvky záměru jako častá příloha EIA."
      },
      {
        title: "Hlukové studie",
        href: "/sluzby/hlukove-studie",
        description: "Vyhodnocení hluku z technologie, dopravy a areálu."
      }
    ]
  },
  "ispop": {
    slug: "sluzby/ispop",
    title: "ISPOP a souhrnná provozní evidence",
    description:
      "ISPOP, souhrnná provozní evidence a roční hlášení pro provozovatele zdrojů v návaznosti na měření emisí a povolení provozu.",
    intro:
      "Blíží se roční hlášení ISPOP nebo kontrola úřadu? Zkontrolujeme souhrnnou evidenci vůči měření emisí, povolení a skutečnému provozu.",
    contactService: "ISPOP",
    faqCategoryId: "ispop",
    scope: [
      "Zpracujeme souhrnnou provozní evidenci zdroje",
      "Zkontrolujeme a doplníme roční hlášení ISPOP",
      "Sladíme s měřením emisí, povolením a provozním řádem",
      "Zapracujeme změnu paliva, kapacity nebo provozních hodin"
    ],
    whenNeeded: [
      "Plánujete roční hlášení a souhrnnou provozní evidenci",
      "Měníte zdroj nebo provozní údaje",
      "Kontrolujete návaznost na měření emisí",
      "Úřad požaduje doplnění nebo provádíte interní kontrolu"
    ],
    practicalSituations: [
      "příprava ročního hlášení po pravidelném měření emisí",
      "kontrola údajů po změně paliva nebo provozních hodin",
      "sjednocení povolení provozu, měření a evidence",
      "doplnění údajů po výzvě nebo kontrole"
    ],
    docs: [
      "povolení provozu a provozní řád",
      "protokoly z měření emisí",
      "provozní hodiny, spotřeby paliv nebo surovin",
      "předchozí hlášení a dostupná evidence"
    ],
    outputs: [
      "podklady pro ISPOP a souhrnnou provozní evidenci",
      "kontrola návaznosti na povolení provozu a měření",
      "přehled chybějících nebo rizikových údajů"
    ],
    commonMistakes: [
      "Přepis starých údajů bez kontroly změn provozu",
      "Nesoulad mezi měřením emisí, povolením a evidencí",
      "Opomenutí změny paliva, výkonu nebo provozních hodin"
    ],
    relatedLinks: [
      {
        title: "Měření emisí",
        href: "/sluzby/mereni-emisi",
        description: "Výsledky měření jsou častým vstupem pro evidenci a hlášení."
      },
      {
        title: "Provozní řády",
        href: "/sluzby/provozni-rady",
        description: "Provozní dokumentace musí odpovídat skutečnému režimu zdroje."
      }
    ]
  },
  "ghg-overovani": {
    slug: "sluzby/ghg-overovani",
    title: "GHG a ověřování emisí skleníkových plynů",
    description:
      "GHG, ověřování emisí skleníkových plynů, kontrola emisních údajů a podklady pro výkazování provozovatelů.",
    intro:
      "Ověřujete emise skleníkových plynů před odevzdáním hlášení? Posoudíme metodiku, vstupy a návaznost na spotřeby, měření a provozní bilanci.",
    contactService: "GHG",
    faqCategoryId: "ispop",
    scope: [
      "Ověříme emise skleníkových plynů a výpočtové listy",
      "Zkontrolujeme emisní faktory, spotřeby a provozní data",
      "Navážeme na měření emisí a provozní evidenci",
      "Připravíme přehled nesouladů před odevzdáním hlášení"
    ],
    whenNeeded: [
      "Plánujete hlášení emisí skleníkových plynů",
      "Potřebujete ověřit výpočty nebo emisní údaje",
      "Měníte technologii, palivo nebo provozní data",
      "Investor, audit nebo úřad požaduje kontrolu"
    ],
    practicalSituations: [
      "kontrola výpočtu emisí skleníkových plynů",
      "ověření vstupních dat před odevzdáním hlášení",
      "návaznost GHG údajů na měření emisí a provozní bilance",
      "příprava podkladů pro audit nebo investora"
    ],
    docs: [
      "metodika výpočtu a vstupní data",
      "spotřeby paliv, surovin a provozní bilance",
      "protokoly z měření emisí a provozní evidence",
      "požadavek na hlášení nebo audit"
    ],
    outputs: [
      "ověření nebo kontrola emisních údajů",
      "přehled vstupů, metodiky a zjištěných nesouladů",
      "podklad pro výkaz GHG"
    ],
    commonMistakes: [
      "Neaktuální emisní faktory nebo metodika výpočtu",
      "Nesoulad mezi spotřebami a provozní evidencí",
      "Chybějící doložení zdrojových dat"
    ],
    relatedLinks: [
      {
        title: "ISPOP a souhrnná provozní evidence",
        href: "/sluzby/ispop",
        description: "Reportingové agendy často sdílejí provozní data a bilance."
      },
      {
        title: "Měření emisí",
        href: "/sluzby/mereni-emisi",
        description: "Měřicí výstupy podporují kontrolu emisních údajů."
      }
    ]
  },
  "bezpecnostni-listy": {
    slug: "sluzby/bezpecnostni-listy",
    title: "Bezpečnostní listy a označování chemických látek",
    description:
      "Kontrola bezpečnostních listů, označování chemických látek a směsí, štítků, interních nádob a návaznosti na BOZP.",
    intro:
      "Bezpečnostní listy musí odpovídat skladování a manipulaci s látkami v provozu. Zkontrolujeme dokumentaci, označení a navrhneme úpravy tam, kde chybí.",
    contactService: "Bezpečnostní listy",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "revize bezpečnostních listů a jejich dostupnosti u pracoviště",
      "štítky na interních nádobách, skladech a pracovních místech",
      "soulad skladování a OOPP s údaji v listu",
      "podklad pro školení a interní provozní pokyn"
    ],
    whenNeeded: [
      "nové chemické látky nebo směsi v provozu",
      "nejasné bezpečnostní listy, štítky nebo skladování",
      "příprava na kontrolu nebo interní audit",
      "potřeba praktického podkladu pro školení zaměstnanců"
    ],
    practicalSituations: [
      "kontrola štítků na interních nádobách",
      "revize bezpečnostních listů pro sklad chemie",
      "příprava podkladů pro školení zaměstnanců",
      "sjednocení provozních pravidel pro chemické látky"
    ],
    docs: [
      "seznam chemických látek a směsí",
      "bezpečnostní listy a štítky",
      "popis skladování a používání v provozu",
      "interní postupy, provozní pravidla nebo požadavek kontroly"
    ],
    outputs: [
      "přehled zjištění k bezpečnostním listům a označování",
      "doporučení úprav štítků, skladování a interních postupů",
      "podklad pro školení nebo interní dokumentaci"
    ],
    commonMistakes: [
      "bezpečnostní listy nejsou dostupné zaměstnancům v praktické podobě",
      "interní nádoby nejsou správně označené",
      "skladování neodpovídá rizikům uvedeným v bezpečnostních listech"
    ],
    relatedLinks: [
      {
        title: "Školení chemické legislativy",
        href: "/sluzby/skoleni-chemicke-legislativy",
        description: "Praktické školení navazuje na bezpečnostní listy a značení."
      },
      {
        title: "Chemické látky v provozu",
        href: "/sluzby/chemicke-latky",
        description: "Nastavení pravidel pro používání, skladování a provozní odpovědnosti."
      }
    ]
  },
  "chemicke-latky": {
    slug: "sluzby/chemicke-latky",
    title: "Chemické látky v provozu",
    description:
      "Praktická podpora pro nakládání s chemickými látkami v provozu, skladování, značení, pravidla pro zaměstnance a návaznost na BOZP.",
    intro:
      "Chemické látky posuzujeme v místě skladování, přelévání a použití. Zpracujeme pravidla pro vedoucí směn na základě skutečné manipulace, ne jen evidenčních tabulek.",
    contactService: "Chemické látky v provozu",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "mapování látek a směsí od dodávky po pracoviště",
      "pravidla manipulace, přelévání a skladování",
      "propojení s bezpečnostními listy a BOZP",
      "návrh odpovědností a podklad pro školení obsluhy"
    ],
    whenNeeded: [
      "rozšíření používaných chemických látek nebo směsí",
      "příprava skladu, provozu nebo pracovních míst",
      "nejasnosti v označování, manipulaci nebo odpovědnostech",
      "příprava školení nebo reakce na kontrolní zjištění"
    ],
    practicalSituations: [
      "nastavení pravidel pro sklad chemických látek",
      "revize používání směsí ve výrobě nebo údržbě",
      "příprava zaměstnanců na bezpečné zacházení s chemickými látkami",
      "sjednocení bezpečnostních listů, štítků a pracovních postupů"
    ],
    docs: [
      "seznam látek a směsí používaných v provozu",
      "bezpečnostní listy, štítky a skladová evidence",
      "popis pracovních činností a skladovacích míst",
      "interní pravidla, auditní zjištění nebo požadavek kontroly"
    ],
    outputs: [
      "doporučení pro bezpečné používání a skladování chemických látek",
      "přehled slabých míst v označování a provozních pravidlech",
      "podklad pro školení, interní postup nebo kontrolu"
    ],
    commonMistakes: [
      "chemické látky jsou řešené jen papírově, bez vazby na realitu provozu",
      "zaměstnanci nemají jasná pravidla pro přelévání a značení",
      "skladování neodpovídá rizikům a provoznímu režimu"
    ],
    relatedLinks: [
      {
        title: "Bezpečnostní listy",
        href: "/sluzby/bezpecnostni-listy",
        description: "Bezpečnostní listy jsou výchozí podklad pro provozní pravidla."
      },
      {
        title: "Školení chemické legislativy",
        href: "/sluzby/skoleni-chemicke-legislativy",
        description: "Školení převádí pravidla do praxe pro zaměstnance."
      }
    ]
  },
  "mereni-vibraci": {
    slug: "sluzby/mereni-vibraci",
    title: "Měření vibrací",
    description:
      "Akreditované měření vibrací na pracovištích pro kategorizaci prací, BOZP a požadavky KHS. Ruční nářadí, stroje, dopravní technika.",
    intro:
      "Kategorizace prací nebo výzva KHS kvůli vibracím? Změříme expozici u nářadí a strojů podle skutečných operací — protokol pro KHS a BOZP.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Změříme HAV — vibrace na ruce u ručního nářadí a strojů",
      "Posoudíme vibrace celého těla u strojů, manipulační techniky a vozidel",
      "Vyhodnotíme expozici podle skutečných operací a směnnosti",
      "Navrhneme střídání práce nebo technické opatření při překročení"
    ],
    whenNeeded: [
      "Potřebujete kategorizaci prací nebo její aktualizaci",
      "KHS nebo interní audit BOZP požaduje měření vibrací",
      "Zavádíte novou technologii nebo měníte pracovní operace",
      "Ověřujete stížnosti zaměstnanců nebo účinnost opatření"
    ],
    practicalSituations: [
      "měření vibrací u brusek a pneumatického nářadí ve výrobě",
      "měření vibrací u obsluhy strojů a manipulační techniky",
      "posouzení vibrací při údržbě nebo stavebních pracích",
      "podklad pro aktualizaci kategorizace prací"
    ],
    docs: [
      "popis pracovních operací a směnnosti",
      "seznam používaného nářadí a strojů",
      "plánek pracoviště a počet exponovaných pracovníků",
      "požadavek KHS nebo interní auditní podklad"
    ],
    outputs: [
      "protokol z měření vibrací s vyhodnocením",
      "podklad pro kategorizaci prací a BOZP",
      "doporučení technických a organizačních opatření"
    ],
    commonMistakes: [
      "Měření bez zohlednění skutečné doby expozice a směnnosti",
      "Záměna vibrací s hlukem nebo jiným faktorem pracovního prostředí",
      "Neúplný popis používaného nářadí a operací"
    ],
    relatedLinks: [
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        description: "Komplexní hygienická měření včetně hluku, prachu a chemických látek."
      },
      {
        title: "Svařovny a kovovýroba",
        href: "/provozy-a-technologie/svarovny",
        description: "Vibrace, hluk, prach a chemické látky ve svařovnách."
      }
    ]
  },
  "mereni-osvetleni": {
    slug: "sluzby/mereni-osvetleni",
    title: "Měření osvětlení",
    description:
      "Měření osvětlení na pracovištích pro KHS, kategorizaci prací a BOZP. Umělé i denní osvětlení, kanceláře i výrobní haly.",
    intro:
      "Kolaudace, výzva KHS nebo nové pracoviště? Změříme umělé i denní osvětlení podle zrakové náročnosti — výstup pro KHS, kategorizaci prací a BOZP.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Změříme umělé i denní osvětlení na pracovišti",
      "Vyhodnotíme podmínky podle typu činnosti a zrakové námahy",
      "Posoudíme haly, laboratoře, sklady i administrativu",
      "Navrhneme úpravu svítidel nebo dispozice při nedostatku"
    ],
    whenNeeded: [
      "Potřebujete kategorizaci prací nebo nové pracoviště",
      "KHS nebo kolaudace vyžaduje měření osvětlení",
      "Měníte dispozici, technologii nebo typ osvětlení",
      "Řešíte stížnosti na nedostatečné osvětlení"
    ],
    practicalSituations: [
      "měření osvětlení ve výrobní hale po změně technologie",
      "posouzení osvětlení kanceláří a zasedacích místností",
      "měření osvětlení v laboratoři nebo čistém prostoru",
      "podklad pro kolaudaci nebo rekonstrukci pracoviště"
    ],
    docs: [
      "plánek pracoviště a popis činností",
      "typ osvětlení a dispozice pracovišť",
      "směnnost a počet pracovníků na stanovištích",
      "požadavek KHS nebo projektová dokumentace"
    ],
    outputs: [
      "protokol z měření osvětlení s vyhodnocením",
      "podklad pro kategorizaci prací a BOZP",
      "doporučení úprav osvětlení nebo dispozice"
    ],
    commonMistakes: [
      "Měření bez zohlednění skutečné zrakové námahy a operací",
      "Posouzení jen podle projektu bez měření v provozu",
      "Neúplný popis typu činnosti na pracovišti"
    ],
    relatedLinks: [
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        description: "Další faktory pracovního prostředí v jedné zakázce."
      },
      {
        title: "Měření mikroklimatu",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Teplota, vlhkost a proudění vzduchu na pracovištích."
      }
    ]
  },
  "mereni-mikroklimatu": {
    slug: "sluzby/mereni-mikroklimatu",
    title: "Měření mikroklimatu",
    description:
      "Měření mikroklimatických podmínek na pracovištích: teplota, vlhkost, proudění vzduchu. Podklady pro KHS a kategorizaci prací.",
    intro:
      "Tepelná zátěž, výzva KHS nebo změna větrání? Změříme teplotu, vlhkost a proudění vzduchu v reálném provozu — protokol pro KHS a kategorizaci prací.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Změříme teplotu, vlhkost a rychlost proudění vzduchu na stanovišti",
      "Posoudíme podmínky podle fyzické zátěže práce (lehká / střední / těžká)",
      "Změříme v halách, sušárnách a skladech s tepelnou zátěží",
      "Navrhneme úpravu větrání, klimatizace nebo organizace směn"
    ],
    whenNeeded: [
      "Potřebujete kategorizaci prací nebo její aktualizaci",
      "KHS reaguje na stížnosti na tepelnou zátěž",
      "Zavádíte novou technologii nebo měníte větrání",
      "Probíhá kolaudace nebo změna provozního režimu"
    ],
    practicalSituations: [
      "měření mikroklimatu ve skladu nebo výrobní hale",
      "posouzení podmínek u pecí, sušáren a horkých operací",
      "měření při zavedení nového větrání nebo klimatizace",
      "podklad pro aktualizaci kategorizace prací"
    ],
    docs: [
      "popis pracovních operací a fyzické zátěže",
      "plánek pracoviště a typ větrání",
      "směnnost a počet pracovníků",
      "požadavek KHS nebo popis stížnosti"
    ],
    outputs: [
      "protokol z měření mikroklimatu s vyhodnocením",
      "podklad pro kategorizaci prací a BOZP",
      "doporučení technických a organizačních opatření"
    ],
    commonMistakes: [
      "Měření bez zohlednění skutečné fyzické zátěže práce",
      "Posouzení jen v jednom čase bez reprezentativního režimu",
      "Neúplný popis větrání a technologie"
    ],
    relatedLinks: [
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        description: "Komplexní měření rizikových faktorů na pracovištích."
      },
      {
        title: "Měření tepelné a chladové zátěže",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        description: "Specializované měření pro horké a chladné provozy, třída práce a přípustné doby."
      },
      {
        title: "Zemědělské provozy a sušárny",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Mikroklima, prach a chemické látky v zemědělství."
      }
    ]
  },
  "mereni-tepelna-chladova-zatez": {
    slug: "sluzby/mereni-tepelna-chladova-zatez",
    title: "Měření tepelné a chladové zátěže",
    description:
      "Autorizované měření tepelné a chladové zátěže na pracovištích: mikroklimatické parametry, třída práce a přípustné doby. Podklady pro KHS a kategorizaci prací.",
    intro:
      "KHS požaduje posouzení tepelné nebo chladové zátěže? Změříme mikroklimatické parametry v reálném provozu — protokol s doporučením třídy práce a přípustných dob.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Změříme mikroklimatické parametry podle metodického návodu MZ ČR",
      "Posoudíme podmínky podle fyzické zátěže práce (lehká / střední / těžká)",
      "Změříme v halách, sušárnách, chladírnách a při venkovních pracích",
      "Doporučíme třídu práce, přípustné doby a náhrady ztráty tekutin"
    ],
    whenNeeded: [
      "KHS nebo kategorizace prací vyžaduje měření tepelné či chladové zátěže",
      "Pracovníci jsou vystaveni horku u pecí, sušáren nebo venkovním pracím v létě",
      "Provoz v chladírnách, mrazírnách nebo nevyhřívaných halách v zimě",
      "Potřebujete podklad pro organizaci směn a technická opatření"
    ],
    practicalSituations: [
      "měření tepelné zátěže u pecí, sušáren a horkých operací",
      "posouzení chladové zátěže v chladírnách a mrazírnách",
      "měření při venkovních stavebních a zemědělských pracích",
      "podklad pro aktualizaci kategorizace prací a BOZP"
    ],
    docs: [
      "popis pracovních operací a fyzické zátěže",
      "plánek pracoviště, typ větrání a oděvů",
      "směnnost a počet pracovníků",
      "požadavek KHS nebo popis stížnosti"
    ],
    outputs: [
      "protokol z měření tepelné nebo chladové zátěže s vyhodnocením",
      "doporučení třídy práce a přípustných dob",
      "podklad pro kategorizaci prací, BOZP a opatření v provozu"
    ],
    commonMistakes: [
      "Posouzení jen podle teploty vzduchu bez zohlednění fyzické zátěže práce",
      "Měření bez zohlednění skutečného provozního režimu a oděvů",
      "Neúplný popis větrání, technologie a směnnosti"
    ],
    relatedLinks: [
      {
        title: "Měření mikroklimatu",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Obecné měření teploty, vlhkosti a proudění vzduchu na pracovištích."
      },
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        description: "Komplexní hygienická měření včetně prachu, chemických látek a hluku."
      },
      {
        title: "Zemědělské provozy a sušárny",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Tepelná zátěž, prach a mikroklima v zemědělství."
      }
    ]
  },
  "mereni-diisokyanatu": {
    slug: "sluzby/mereni-diisokyanatu",
    title: "Měření diisokyanátů (MDI, TDI, HDI)",
    description:
      "Autorizované měření expozice diisokyanátům na pracovištích: MDI, TDI, HDI a další. Osobní i stacionární odběry pro KHS, kategorizaci prací a opatření ke snížení expozice.",
    intro:
      "PUR pěny, lakování nebo lepení s izokyanáty? Změříme expozici MDI, TDI, HDI a dalším diisokyanátům v reálném provozu — protokol pro KHS, kategorizaci prací a návrh opatření.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Změříme expozici diisokyanátům (MDI, TDI, HDI a další) osobními i stacionárními odběry",
      "Zaměříme se na špičky koncentrací při nástřiku, lití a horkých procesech",
      "Vyhodnotíme expozici vůči hygienickým limitům a požadavkům KHS",
      "Navrhneme technická a organizační opatření ke snížení expozice"
    ],
    whenNeeded: [
      "Kategorizace prací nebo výzva KHS kvůli izokyanátům",
      "Nástřik PUR, lakování nebo lepení s diisokyanáty v provozu",
      "Změna technologie, materiálů nebo větrání u reaktivních systémů",
      "Ověření účinnosti odsávání a OOPP po stížnosti nebo kontrole"
    ],
    practicalSituations: [
      "měření MDI při výrobě a zpracování PUR pěn",
      "expozice TDI v lakovnách a při aplikaci polyuretanových systémů",
      "měření při lepení a kasírování s izokyanátovými lepidly",
      "sekundární emise při ohřevu nebo řezání vytvrzených PUR materiálů"
    ],
    docs: [
      "bezpečnostní listy používaných materiálů a směsí",
      "popis pracovních operací, odsávání a OOPP",
      "plánek pracoviště a směnnost",
      "požadavek KHS nebo interní auditní podklad"
    ],
    outputs: [
      "protokol z měření diisokyanátů s vyhodnocením expozice",
      "podklad pro kategorizaci prací a opatření dle zákona o ochraně veřejného zdraví",
      "doporučení technických a organizačních opatření"
    ],
    commonMistakes: [
      "Odhad expozice jen z bezpečnostního listu bez měření v provozu",
      "Měření mimo špičky při nástřiku nebo lití",
      "Nezohlednění sekundárních emisí při dalším zpracování PUR"
    ],
    relatedLinks: [
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        description: "Komplexní měření chemických látek, prachu a dalších faktorů."
      },
      {
        title: "Automotive a výrobní haly",
        href: "/provozy-a-technologie/automotive",
        description: "Izokyanáty při lakování, lepení a PUR ve výrobě interiérů."
      },
      {
        title: "Chemické látky v provozu",
        href: "/sluzby/chemicke-latky",
        description: "Pravidla pro skladování, manipulaci a odpovědnosti u chemických látek."
      }
    ]
  },
  "akusticke-posudky": {
    slug: "sluzby/akusticke-posudky",
    title: "Akustické posudky",
    description:
      "Akustické posudky a odborná vyjádření k hluku technologií, strojoven a stavebních úprav s technologickým provozem. Podklady pro stavební řízení a KHS.",
    intro:
      "Potřebujete akustický posudek ke strojovně nebo technologii v budově? Posoudíme hluk pro stavební řízení a KHS — jiný rozsah než hluková studie záměru v okolí.",
    contactService: "Měření hluku a akustika",
    faqCategoryId: "hluk",
    scope: [
      "Zpracujeme posudek ke stavební úpravě nebo změně užívání budovy",
      "Navrhneme odhlučnění strojoven, VZT a technologií v objektu",
      "Připravíme vyjádření pro stavební řízení a kolaudaci",
      "Navážeme na měření v provozu nebo akustický výpočet"
    ],
    whenNeeded: [
      "Plánujete stavební úpravy s dopadem na hluk v budově",
      "Probíhá kolaudace nebo změna užívání budovy",
      "Stavební úřad nebo KHS požaduje akustické vyjádření",
      "Potřebujete návrh odhlučnění před realizací"
    ],
    practicalSituations: [
      "akustický posudek pro strojovnu VZT nebo kotelnu v budově",
      "posouzení odhlučnění výrobní haly nebo technologie",
      "akustické vyjádření ke změně užívání budovy",
      "návaznost na hlukovou studii záměru"
    ],
    docs: [
      "projektová dokumentace nebo popis záměru",
      "plány dispozic a umístění zdrojů hluku",
      "provozní režim a požadavek úřadu",
      "existující měření nebo technické listy zařízení"
    ],
    outputs: [
      "akustický posudek s vyhodnocením a doporučením",
      "návrh protihlukových opatření",
      "podklad pro stavební řízení nebo KHS"
    ],
    commonMistakes: [
      "Záměna akustického posudku za hlukovou studii záměru v okolí",
      "Posudek bez vazby na skutečný provozní režim",
      "Neúplná projektová dokumentace zdrojů hluku"
    ],
    relatedLinks: [
      {
        title: "Hlukové studie",
        href: "/sluzby/hlukove-studie",
        description: "Výpočtové posouzení hluku záměrů a areálů v okolí."
      },
      {
        title: "Měření hluku a akustika",
        href: "/sluzby/mereni-hluku",
        description: "Terénní měření pro ověření skutečného stavu."
      }
    ]
  },
  "modelove-vypocty": {
    slug: "sluzby/modelove-vypocty",
    title: "Modelové výpočty",
    description:
      "Modelové výpočty imisí a hluku pro záměry, změny provozu a varianty technologií. Podklady pro rozptylové a hlukové studie.",
    intro:
      "Potřebujete rychle porovnat varianty výduchu, strojovny nebo dopravy? Provedeme imisní a hlukové modelové výpočty — podklad pro studii, EIA nebo jednání s úřadem.",
    contactService: "Rozptylové studie",
    faqCategoryId: "studie",
    scope: [
      "Zmodelujeme imisní příspěvky zdrojů ovzduší a dopravy v areálu",
      "Zpracujeme výpočet hluku technologií, areálu a komunikací",
      "Porovnáme varianty provozu nebo umístění zdrojů",
      "Připravíme výstupy pro studii, EIA nebo jednání s úřadem"
    ],
    whenNeeded: [
      "Plánujete nový záměr nebo změnu kapacity zdroje",
      "Potřebujete variantní posouzení provozu",
      "Úřad požaduje imisní nebo hlukové hodnocení",
      "Připravujete rozptylovou nebo hlukovou studii"
    ],
    practicalSituations: [
      "modelový výpočet imisí pro novou technologii v areálu",
      "výpočet hluku pro varianty umístění strojoven nebo VZT",
      "imisní příspěvky pro rozptylovou studii skládky nebo kotle",
      "podklad pro EIA a povolovací dokumentaci"
    ],
    docs: [
      "technické parametry zdrojů a emisní údaje",
      "situace záměru a okolní zástavby",
      "provozní režim a varianty",
      "požadavek úřadu nebo zadání studie"
    ],
    outputs: [
      "výsledky modelových výpočtů s vyhodnocením",
      "podklad pro rozptylovou nebo hlukovou studii",
      "variantní srovnání a doporučení dalšího postupu"
    ],
    commonMistakes: [
      "Výpočet bez ověřených vstupních emisních údajů",
      "Nezohlednění všech relevantních zdrojů v areálu",
      "Záměna výpočtu za terénní měření u existujícího provozu"
    ],
    relatedLinks: [
      {
        title: "Rozptylové studie",
        href: "/sluzby/rozptylove-studie",
        description: "Kompletní rozptylová studie včetně modelových výpočtů."
      },
      {
        title: "Hlukové studie",
        href: "/sluzby/hlukove-studie",
        description: "Hlukové modelování pro záměry a areály."
      }
    ]
  },
  "imisni-dopady": {
    slug: "sluzby/imisni-dopady",
    title: "Imisní a hlukové dopady záměrů",
    description:
      "Propojené posouzení imisí a hluku pro investiční záměry, změny provozu a EIA. Rozptyl, hluk a varianty v jednom postupu.",
    intro:
      "Záměr ovlivňuje ovzduší i hluk najednou? Zpracujeme propojené posouzení ve stejných datech — konzistentní podklad pro EIA, krajský úřad a KHS.",
    contactService: "Rozptylové studie",
    faqCategoryId: "studie",
    scope: [
      "Sjednotíme zadání imisí a hluku pro jeden záměr",
      "Zmodelujeme varianty umístění technologií",
      "Připravíme podklad pro EIA, krajský úřad a KHS",
      "Dodáme jeden souhrnný výstup pro investora a projektanta"
    ],
    whenNeeded: [
      "Záměr má souběžný vliv na ovzduší i hluk",
      "Úřad požaduje imisní i hlukové hodnocení",
      "Připravujete EIA nebo oznámení záměru",
      "Potřebujete variantní srovnání umístění technologií"
    ],
    practicalSituations: [
      "imisní a hlukové dopady průmyslového areálu",
      "posouzení záměru skládky, bioplynovky nebo výroby",
      "varianty umístění technologií z hlediska ovzduší i hluku",
      "podklad pro EIA a povolovací řízení"
    ],
    docs: [
      "projektová dokumentace a situační podklady",
      "technické parametry zdrojů a provozní režim",
      "varianty záměru",
      "požadavek úřadu nebo zadání investora"
    ],
    outputs: [
      "propojené posouzení imisních a hlukových dopadů",
      "variantní srovnání a doporučení opatření",
      "podklad pro EIA, úřady a investora"
    ],
    commonMistakes: [
      "Řešení hluku a imisí odděleně bez návaznosti na stejný záměr",
      "Neúplné vstupní údaje pro modelování",
      "Opomenutí dopravy nebo vedlejších zdrojů v areálu"
    ],
    relatedLinks: [
      {
        title: "Rozptylové studie",
        href: "/sluzby/rozptylove-studie",
        description: "Imisní modelování a rozptylové studie."
      },
      {
        title: "Hlukové studie",
        href: "/sluzby/hlukove-studie",
        description: "Hlukové posouzení záměrů a areálů."
      }
    ]
  },
  "povoleni-provozu": {
    slug: "sluzby/povoleni-provozu",
    title: "Povolení provozu zdroje",
    description:
      "Podklady pro vydání nebo změnu povolení provozu stacionárního zdroje. Měření, posudky, provozní řády a komunikace s úřadem.",
    intro:
      "Řešíte vydání nebo změnu povolení provozu zdroje? Navrhneme rozsah měření, posudku a provozního řádu podle typu technologie a požadavků krajského úřadu.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "Navrhneme rozsah podkladů před podáním na krajský úřad",
      "Zkoordinujeme měření emisí, posudek a provozní řád",
      "Zohledníme návaznost na IPPC a ISPOP u větších zdrojů",
      "Poskytneme technickou podporu při doplňování žádosti"
    ],
    whenNeeded: [
      "Plánujete nový zdroj nebo změnu kapacity",
      "Potřebujete povolení provozu po technologické změně",
      "Úřad požaduje doplnění podkladů",
      "Měníte palivo, filtraci nebo provozní režim"
    ],
    practicalSituations: [
      "povolení provozu nové lakovací linky",
      "změna povolení u kotle nebo kogenerační jednotky",
      "doplnění podkladů po výzvě krajského úřadu",
      "návaznost měření emisí na odborný posudek"
    ],
    docs: [
      "technická dokumentace zdroje",
      "existující povolení nebo výzva úřadu",
      "provozní režim a emisní údaje",
      "projektová dokumentace změny"
    ],
    outputs: [
      "návrh rozsahu podkladů pro řízení",
      "odborný posudek, protokoly z měření nebo provozní řád",
      "technická podpora při jednání s úřadem"
    ],
    commonMistakes: [
      "Podání žádosti bez měření nebo posudku v požadovaném rozsahu",
      "Nezohlednění změny technologie oproti původnímu povolení",
      "Nekoordinované podklady od více dodavatelů"
    ],
    relatedLinks: [
      {
        title: "Odborné posudky",
        href: "/sluzby/odborne-posudky",
        description: "Odborné posudky podle zákona o ochraně ovzduší."
      },
      {
        title: "Provozní řády",
        href: "/sluzby/provozni-rady",
        description: "Provozní řády jako součást povolovacích podkladů."
      }
    ]
  },
  "zjistovaci-rizeni-eia": {
    slug: "sluzby/zjistovaci-rizeni-eia",
    title: "Zjišťovací řízení EIA",
    description:
      "Odborné podklady pro zjišťovací řízení EIA. Technické vstupy, koordinace měření a studií pro investora a zpracovatele.",
    intro:
      "Záměr vstupuje do zjišťovacího řízení EIA? Zajistíme technické vstupy z měření a studií včas — ve formě použitelné pro zpracovatele EIA.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "Připravíme technické přílohy pro zjišťovací řízení",
      "Zajistíme měření emisí, rozptyl a hluk podle zadání EIA",
      "Sladíme data od provozu a z projektu",
      "Doplníme po připomínkách úřadu ve fázi zjišťování"
    ],
    whenNeeded: [
      "Záměr spadá do zjišťovacího řízení",
      "Potřebujete technické přílohy včas v procesu",
      "Chcete sladit měření, studie a projekt",
      "Připravujete podklady pro veřejnost a úřady"
    ],
    practicalSituations: [
      "podklady pro zjišťovací řízení průmyslového záměru",
      "technické vstupy pro skládku, bioplynovku nebo výrobu",
      "koordinace imisních a hlukových podkladů v jedné zakázce",
      "doplnění podkladů po připomínkách úřadu"
    ],
    docs: [
      "popis záměru a projektová dokumentace",
      "podklady o stávajícím stavu a provozu",
      "zadání zjišťovacího řízení",
      "harmonogram a požadavky zpracovatele EIA"
    ],
    outputs: [
      "technické podklady pro zjišťovací řízení",
      "koordinované vstupy z měření a studií",
      "doporučení dalšího postupu v procesu EIA"
    ],
    commonMistakes: [
      "Pozdní dodání technických podkladů do EIA",
      "Nesoulad mezi projektem a skutečným provozem",
      "Oddělené studie bez společného zadání"
    ],
    relatedLinks: [
      {
        title: "EIA a oznámení záměru",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Oznámení záměru a příprava dokumentace EIA."
      },
      {
        title: "Technické přílohy pro investory",
        href: "/sluzby/technicke-prilohy",
        description: "Podklady pro investiční a projektovou přípravu."
      }
    ]
  },
  "technicke-prilohy": {
    slug: "sluzby/technicke-prilohy",
    title: "Technické přílohy pro investory",
    description:
      "Technické přílohy pro investory a projektanty: rozptyl, hluk, emise, doprava a návaznost na povolování a EIA.",
    intro:
      "Rozhodujete o variantě umístění technologie před podáním na úřady? Připravíme technické přílohy k imisím, hluku a dopravě pro investora i projektanta.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "Připravíme přílohy pro studii proveditelnosti a projektovou přípravu",
      "Posoudíme rozptyl, hluk, emise a dopravu u variant záměru",
      "Zkoordinujeme měření a studie pro projektanta",
      "Navážeme na EIA, stavební řízení a povolení provozu"
    ],
    whenNeeded: [
      "Připravujete investici před podáním na úřady",
      "Potřebujete sladit projekt s požadavky na životní prostředí",
      "Porovnáváte varianty umístění technologií",
      "Chcete včas připravit podklady pro EIA nebo povolení"
    ],
    practicalSituations: [
      "technické přílohy pro nový výrobní areál",
      "podklady pro investorovu volbu technologie a umístění",
      "příprava podkladů před podáním EIA",
      "soulad projektu s měřením a studiemi"
    ],
    docs: [
      "projektová dokumentace nebo studie proveditelnosti",
      "popis záměru, variant a harmonogramu",
      "podklady o stávajícím stavu",
      "požadavky investora nebo projektanta"
    ],
    outputs: [
      "technické přílohy pro investiční rozhodování",
      "souhrn měření a studií v použitelné podobě",
      "doporučení dalšího postupu v povolování"
    ],
    commonMistakes: [
      "Pozdní zapojení odborných podkladů až po projektu",
      "Nesoulad technických příloh s reálným provozem",
      "Opomenutí dopravy nebo vedlejších zdrojů"
    ],
    relatedLinks: [
      {
        title: "EIA a oznámení záměru",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Proces EIA a oznámení záměru."
      },
      {
        title: "Imisní a hlukové dopady záměrů",
        href: "/sluzby/imisni-dopady",
        description: "Propojené posouzení dopadů záměru."
      }
    ]
  },
  "skoleni-chemicke-legislativy": {
    slug: "sluzby/skoleni-chemicke-legislativy",
    title: "Školení chemického zákona a chemické legislativy",
    description:
      "Praktické školení chemického zákona, bezpečnostních listů, označování, skladování a nakládání s chemickými látkami pro provozy, sklady, výrobu a laboratoře.",
    intro:
      "Praktické školení chemického zákona pro provozy nakládající s látkami a směsmi. Projdeme povinnosti, bezpečnostní listy a pravidla pro skladování i manipulaci.",
    contactService: "Školení chemického zákona / chemické legislativy",
    heroPanelTitle: "Typické důvody poptávky",
    scope: [
      "základní povinnosti při nakládání s chemickými látkami a směsmi",
      "orientace v bezpečnostních listech a jejich praktické použití",
      "označování, skladování a bezpečné používání chemických látek",
      "návaznost na BOZP, ochranu zdraví a životní prostředí",
      "provozní evidence, interní pravidla a časté chyby v provozech"
    ],
    whenNeeded: [
      "nové chemické látky nebo směsi v provozu",
      "příprava na kontrolu nebo interní audit BOZP",
      "potřeba praktického podkladu pro zaměstnance",
      "rozšíření provozu, skladu nebo pracovních činností s chemií"
    ],
    practicalSituations: [
      "školení pro výrobní podnik, sklad nebo laboratoř",
      "školení pro lakovnu, galvanovnu nebo automotive provoz",
      "školení provozních ekologů, BOZP pracovníků a vedoucích směn",
      "školení osob odpovědných za chemické látky a směsi v provozu"
    ],
    docs: [
      "seznam používaných chemických látek a směsí",
      "bezpečnostní listy a interní postupy",
      "popis provozu, skladu nebo pracovních činností",
      "požadovaný okruh zaměstnanců a rozsah školení"
    ],
    outputs: [
      "prezenční listina",
      "osnova školení",
      "potvrzení o absolvování školení",
      "doporučení k doplnění interní dokumentace podle potřeby"
    ],
    commonMistakes: [
      "školení jen formálně bez vazby na skutečné látky v provozu",
      "bezpečnostní listy nejsou dostupné na pracovištích",
      "zaměstnanci nemají jasná pravidla pro přelévání a označování nádob"
    ],
    relatedLinks: [
      {
        title: "Bezpečnostní listy a označování",
        href: "/sluzby/bezpecnostni-listy",
        description: "Revize listů a štítků jako podklad pro školení."
      },
      {
        title: "Chemické látky v provozu",
        href: "/sluzby/chemicke-latky",
        description: "Pravidla pro skladování, manipulaci a odpovědnosti."
      },
      {
        title: "Odborné články",
        href: "/poradna",
        description: "Praktické články k chemické legislativě a provozu."
      }
    ]
  }
};
