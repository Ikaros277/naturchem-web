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
      "Hluková studie posuzuje zátěž záměru, technologií a dopravy pro KHS, stavební řízení a EIA. Zpracujeme výpočet včetně variantního posouzení umístění zdrojů.",
    contactService: "Hlukové studie",
    faqCategoryId: "hluk",
    scope: [
      "výpočet hluku technologií, areálů, VZT, tepelných čerpadel a dopravy v areálu",
      "denní i noční režim a srovnání variant umístění zdroje",
      "vyhodnocení vůči limitům a chráněnému venkovnímu prostoru",
      "návrh odhlučnění nebo úpravy provozu, pokud limit hrozí překročit"
    ],
    whenNeeded: [
      "nový zdroj hluku nebo změna technologie",
      "požadavek KHS, stavebního úřadu nebo EIA",
      "kolaudace, změna užívání nebo stížnost okolí",
      "prověření účinnosti protihlukového opatření před realizací"
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
      "zaměnění hlukové studie za měření hluku u dosud nerealizovaného záměru",
      "neúplné údaje o nočním režimu provozu",
      "opomenutí souběhu více zdrojů hluku v areálu"
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
      "Odborné posudky podle zákona o ochraně ovzduší jako technický podklad pro správní orgány. V návaznosti na povolení provozu, měření emisí a skutečný provozní stav.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "posudek ke stacionárnímu zdroji, změně technologie nebo kapacity",
      "vazba na měření emisí, rozptylovou studii a provozní řád",
      "vyjádření k výzvě krajského úřadu nebo ČIŽP",
      "shrnutí pro investora před podáním žádosti o povolení provozu"
    ],
    whenNeeded: [
      "nový zdroj nebo změna technologie",
      "změna kapacity, paliva, filtrace nebo provozního režimu",
      "požadavek úřadu v řízení o povolení provozu",
      "potřeba technicky podloženého stanoviska"
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
      "posuzování technologie bez aktuálních provozních údajů",
      "chybějící návaznost na povolení provozu a limity",
      "neúplné podklady k výduchům, filtraci nebo režimu zdroje"
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
      "Provozní řád musí odpovídat skutečnému režimu zdroje po změně filtrace, paliva nebo výkonu. Zpracujeme nový řád nebo revizi po zjištění nesouladu při kontrole.",
    contactService: "Provozní řády",
    faqCategoryId: "eia",
    scope: [
      "nový provozní řád zdroje znečišťování ovzduší",
      "aktualizace po změně technologie, výduchu nebo havarijních postupů",
      "sladění s povolením provozu a posledním měřením emisí",
      "úpravy na výzvu krajského úřadu nebo ČIŽP"
    ],
    whenNeeded: [
      "nový zdroj nebo změna povolení provozu",
      "změna technologie, paliva, výduchu nebo odlučovacího zařízení",
      "neaktuální provozní řád vůči skutečnému provozu",
      "požadavek krajského úřadu nebo ČIŽP"
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
      "provozní řád neodpovídá skutečné technologii",
      "chybí vazba na měřené znečišťující látky a limity",
      "dokumentace neřeší nestandardní nebo havarijní stavy"
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
      "U zařízení v režimu IPPC nestačí samostatný protokol z měření. Sjednotíme měření, studie a provozní data pro řízení o integrovaném povolení nebo jeho změně.",
    contactService: "IPPC a integrovaná povolení",
    faqCategoryId: "eia",
    scope: [
      "podklady pro nové integrované povolení nebo změnu IPPC",
      "přehled měření, studií a provozních vstupů v jednom celku",
      "technický popis změny vůči stávajícímu povolení a BAT",
      "doplnění dokumentace po připomínkách krajského úřadu"
    ],
    whenNeeded: [
      "nové integrované povolení",
      "podstatná nebo nepodstatná změna IPPC",
      "změna kapacity, technologie nebo emisních parametrů",
      "doplnění podkladů na výzvu úřadu"
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
      "oddělené řešení měření a povolovací dokumentace bez společného závěru",
      "neaktuální údaje o kapacitě, režimu nebo výduších",
      "podklady bez jasného rozlišení stávajícího a navrhovaného stavu"
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
      "Zpracujeme oznámení záměru a sladíme vstupy pro ovzduší, hluk, dopravu a provozní parametry do jednoho ucelného dokumentu.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "oznámení záměru podle zákona o EIA",
      "sjednocení rozptylových, hlukových a dopravních podkladů",
      "technické přílohy pro investora a zpracovatele EIA",
      "úpravy po připomínkách úřadu nebo veřejnosti"
    ],
    whenNeeded: [
      "nový záměr s možnými vlivy na životní prostředí",
      "změna kapacity, technologie nebo areálu",
      "požadavek na zjišťovací řízení",
      "doplnění odborných příloh k povolovacímu procesu"
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
      "nekoordinované technické přílohy s rozdílnými vstupními údaji",
      "podcenění nočního provozu, dopravy nebo kumulace vlivů",
      "neúplný popis variant a provozního režimu"
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
      "Souhrnná evidence v ISPOP musí odpovídat skutečnému provozu a výsledkům měření. Zkontrolujeme údaje o palivu, výkonu a emisích a doplníme podklady pro kontrolu úřadu.",
    contactService: "ISPOP",
    faqCategoryId: "ispop",
    scope: [
      "souhrnná provozní evidence zdroje",
      "roční hlášení ISPOP — kontrola a doplnění údajů",
      "soulad s měřením emisí, povolením provozu a provozním řádem",
      "zapracování změny paliva, kapacity nebo provozních hodin"
    ],
    whenNeeded: [
      "roční reporting a souhrnná provozní evidence",
      "změna zdroje nebo provozních údajů",
      "kontrola návaznosti na měření emisí",
      "požadavek úřadu nebo interní kontrola povinností"
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
      "přepis starých údajů bez kontroly změn provozu",
      "nesoulad mezi měřením emisí, povolením a evidencí",
      "opomenutí změny paliva, výkonu nebo provozních hodin"
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
      "GHG, ověřování emisí skleníkových plynů, kontrola emisních údajů a podklady pro reporting provozovatelů.",
    intro:
      "Ověřování emisí skleníkových plynů posuzuje správnost metodiky, vstupních dat a dokumentace. Ověřujeme návaznost výpočtu na spotřeby, měření a provozní bilanci.",
    contactService: "GHG",
    faqCategoryId: "ispop",
    scope: [
      "ověření emisí skleníkových plynů a výpočtových listů",
      "kontrola emisních faktorů, spotřeb a provozních dat",
      "návaznost na měření emisí a provozní evidenci",
      "přehled nesouladů před odevzdáním reportingu"
    ],
    whenNeeded: [
      "reporting emisí skleníkových plynů",
      "ověření výpočtů nebo emisních údajů",
      "změna technologie, paliva nebo provozních dat",
      "požadavek investora, auditu nebo správního orgánu"
    ],
    practicalSituations: [
      "kontrola výpočtu emisí skleníkových plynů",
      "ověření vstupních dat před reportingem",
      "návaznost GHG údajů na měření emisí a provozní bilance",
      "příprava podkladů pro audit nebo investora"
    ],
    docs: [
      "metodika výpočtu a vstupní data",
      "spotřeby paliv, surovin a provozní bilance",
      "protokoly z měření emisí a provozní evidence",
      "požadavek reportingu nebo auditu"
    ],
    outputs: [
      "ověření nebo kontrola emisních údajů",
      "přehled vstupů, metodiky a zjištěných nesouladů",
      "podklad pro reporting GHG"
    ],
    commonMistakes: [
      "neaktuální emisní faktory nebo metodika výpočtu",
      "nesoulad mezi spotřebami a provozní evidencí",
      "chybějící doložení zdrojových dat"
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
      "Měření vibrací posuzuje expozici podle nářadí, operací a délky práce na stanovišti. Výstup slouží pro KHS a kategorizaci prací.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "HAV — vibrace na ruce u ručního nářadí a strojů",
      "vibrace celého těla u strojů, manipulační techniky a vozidel",
      "expozice podle skutečných operací a směnnosti",
      "návrh střídání práce nebo technického opatření při překročení"
    ],
    whenNeeded: [
      "kategorizace prací nebo její aktualizace",
      "požadavek KHS nebo interní audit BOZP",
      "nová technologie nebo změna pracovních operací",
      "stížnosti zaměstnanců nebo ověření účinnosti opatření"
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
      "měření bez zohlednění skutečné doby expozice a směnnosti",
      "zaměnění vibrací s hlukem nebo jiným faktorem pracovního prostředí",
      "neúplný popis používaného nářadí a operací"
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
      "Měříme umělé i denní osvětlení na pracovištích podle zrakové náročnosti práce. Výstup slouží pro KHS, kategorizaci prací, BOZP a kolaudaci.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "měření umělého a denního osvětlení na pracovišti",
      "hodnocení podle typu činnosti a zrakové námahy",
      "výrobní haly, laboratoře, sklady i administrativa",
      "konkrétní návrh úpravy svítidel nebo dispozice při nedostatku"
    ],
    whenNeeded: [
      "kategorizace prací nebo nové pracoviště",
      "požadavek KHS nebo kolaudace",
      "změna dispozice, technologie nebo typu osvětlení",
      "stížnosti na nedostatečné osvětlení"
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
      "měření bez zohlednění skutečné zrakové námahy a operací",
      "posouzení jen podle projektu bez měření v provozu",
      "neúplný popis typu činnosti na pracovišti"
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
      "Měření mikroklimatu posuzuje teplotu, vlhkost a proudění vzduchu u horkých operací. Měříme v reálném provozu; výstup slouží pro KHS a kategorizaci prací.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "teplota, vlhkost a rychlost proudění vzduchu na stanovišti",
      "posouzení podle fyzické zátěže práce (lehká / střední / těžká)",
      "haly, sušárny, sklady s tepelnou zátěží",
      "návrh větrání, klimatizace nebo organizace směn"
    ],
    whenNeeded: [
      "kategorizace prací nebo její aktualizace",
      "požadavek KHS nebo stížnosti na tepelnou zátěž",
      "nová technologie nebo změna větrání",
      "kolaudace nebo změna provozního režimu"
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
      "měření bez zohlednění skutečné fyzické zátěže práce",
      "posouzení jen v jednom čase bez reprezentativního režimu",
      "neúplný popis větrání a technologie"
    ],
    relatedLinks: [
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        description: "Komplexní měření rizikových faktorů na pracovištích."
      },
      {
        title: "Zemědělské provozy a sušárny",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Mikroklima, prach a chemické látky v zemědělství."
      }
    ]
  },
  "akusticke-posudky": {
    slug: "sluzby/akusticke-posudky",
    title: "Akustické posudky",
    description:
      "Akustické posudky a odborná vyjádření k hluku technologií, strojoven a stavebních úprav s technologickým provozem. Podklady pro stavební řízení a KHS.",
    intro:
      "Akustický posudek posuzuje hluk technologií uvnitř budovy — strojovny, kotelny a výrobní provozy. Slouží pro stavební řízení nebo KHS, na rozdíl od hlukové studie záměru vůči okolí.",
    contactService: "Měření hluku a akustika",
    faqCategoryId: "hluk",
    scope: [
      "posudek ke stavební úpravě nebo změně užívání budovy",
      "odhlučnění strojoven, VZT a technologií v objektu",
      "vyjádření pro stavební řízení a kolaudaci",
      "návaznost na měření v provozu nebo výpočet"
    ],
    whenNeeded: [
      "stavební úpravy s dopadem na hluk v budově nebo okolí",
      "kolaudace nebo změna užívání budovy",
      "požadavek stavebního úřadu nebo KHS",
      "návrh odhlučnění před realizací"
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
      "zaměnění akustického posudku za hlukovou studii záměru v okolí",
      "posudek bez vazby na skutečný provozní režim",
      "neúplná projektová dokumentace zdrojů hluku"
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
      "Modelové výpočty slouží k rychlému posouzení variant umístění komína, strojovny nebo dopravy. Výsledek lze zapracovat do rozptylové studie nebo dokumentace EIA.",
    contactService: "Rozptylové studie",
    faqCategoryId: "rozptyl",
    scope: [
      "imisní model zdrojů ovzduší a dopravy v areálu",
      "výpočet hluku technologií, areálu a komunikací",
      "srovnání variant provozu nebo umístění",
      "výstupní podklady pro studii, EIA nebo jednání s úřadem"
    ],
    whenNeeded: [
      "nový záměr nebo změna kapacity zdroje",
      "potřeba variantního posouzení provozu",
      "požadavek úřadu na imisní nebo hlukové hodnocení",
      "příprava rozptylové nebo hlukové studie"
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
      "výpočet bez ověřených vstupních emisních údajů",
      "nezohlednění všech relevantních zdrojů v areálu",
      "zaměnění výpočtu za terénní měření u existujícího provozu"
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
      "Imisní a hlukové dopady záměru zpracováváme ve stejných vstupních datech. Provozní režim a technické parametry tak zůstanou v dokumentaci EIA konzistentní.",
    contactService: "Rozptylové studie",
    faqCategoryId: "rozptyl",
    scope: [
      "společné zadání imisí a hluku pro jeden záměr",
      "modelové výpočty a varianty umístění technologií",
      "podklad pro EIA, krajský úřad a KHS",
      "jeden kontaktní výstup pro investora a projektanta"
    ],
    whenNeeded: [
      "záměr se souběžným vlivem na ovzduší a hluk",
      "požadavek úřadu na imisní i hlukové hodnocení",
      "příprava EIA nebo oznámení záměru",
      "potřeba variantního srovnání umístění technologií"
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
      "řešení hluku a imisí odděleně bez návaznosti na stejný záměr",
      "neúplné vstupní údaje pro modelování",
      "opomenutí dopravy nebo vedlejších zdrojů v areálu"
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
      "Povolení provozu zdroje často vyžaduje měření, odborný posudek nebo provozní řád v konkrétním rozsahu. Navrhneme podklady podle typu technologie a požadavků krajského úřadu.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "návrh rozsahu podkladů před podáním na krajský úřad",
      "měření emisí, odborný posudek a provozní řád jako celek",
      "návaznost na IPPC a ISPOP u větších zdrojů",
      "technická podpora při doplňování žádosti"
    ],
    whenNeeded: [
      "nový zdroj nebo změna kapacity",
      "vydání povolení provozu po technologické změně",
      "požadavek úřadu na doplnění podkladů",
      "změna paliva, filtrace nebo provozního režimu"
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
      "podání žádosti bez měření nebo posudku v požadovaném rozsahu",
      "nezohlednění změny technologie oproti původnímu povolení",
      "nekoordinované podklady od více dodavatelů"
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
      "Ve zjišťovacím řízení EIA je nutné dodat technické vstupy včas. Zajistíme měření, rozptyl a hluk ve formě použitelné pro zpracovatele EIA.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "technické přílohy pro zjišťovací řízení",
      "měření emisí, rozptyl a hluk podle zadání EIA",
      "sladění dat od provozu a z projektu",
      "doplnění po připomínkách úřadu ve fázi zjišťování"
    ],
    whenNeeded: [
      "záměr spadající do zjišťovacího řízení",
      "požadavek na technické přílohy včasně v procesu",
      "potřeba sladit měření, studie a projekt",
      "příprava podkladů pro veřejnost a úřady"
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
      "pozdní dodání technických podkladů do EIA",
      "nesoulad mezi projektem a skutečným provozem",
      "oddělené studie bez společného zadání"
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
      "Technické přílohy posuzují varianty záměru z hlediska imisí, hluku a dopravy ještě před finálním projektem. Výstupy slouží k rozhodnutí o umístění komína nebo strojovny.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "přílohy pro studii proveditelnosti a projektovou přípravu",
      "rozptyl, hluk, emise a doprava u variant záměru",
      "koordinace měření a studií pro projektanta",
      "návaznost na EIA, stavební řízení a povolení provozu"
    ],
    whenNeeded: [
      "příprava investice před podáním na úřady",
      "potřeba sladit projekt s požadavky na životní prostředí",
      "variantní posouzení umístění technologií",
      "včasná příprava podkladů pro EIA nebo povolení"
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
      "pozdní zapojení odborných podkladů až po projektu",
      "nesoulad technických příloh s reálným provozem",
      "opomenutí dopravy nebo vedlejších zdrojů"
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
  }
};
