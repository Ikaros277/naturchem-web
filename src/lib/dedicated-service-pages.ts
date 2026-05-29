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
  forWhom: string[];
  whenNeeded: string[];
  authorities: string[];
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
      "Hluková studie slouží k posouzení hlukové zátěže záměrů, technologií, dopravy a areálů ještě před realizací. Výpočet zpracováváme pro KHS, stavební řízení, EIA a variantní posouzení umístění zdrojů. Rozsah stanovujeme podle provozního režimu, typu zdroje a chráněných prostor v okolí.",
    contactService: "Hlukové studie",
    faqCategoryId: "hluk",
    scope: [
      "výpočet hluku technologií, areálů, VZT, tepelných čerpadel a dopravy v areálu",
      "denní i noční režim a srovnání variant umístění zdroje",
      "vyhodnocení vůči limitům a chráněnému venkovnímu prostoru",
      "návrh odhlučnění nebo úpravy provozu, pokud limit hrozí překročit"
    ],
    forWhom: [
      "investoři a projektanti připravující nový záměr nebo změnu stavby",
      "provozovatelé řešící hluk z technologie, dopravy nebo areálu",
      "stavební řízení, kolaudace, EIA a požadavky hygienické stanice"
    ],
    whenNeeded: [
      "nový zdroj hluku nebo změna technologie",
      "požadavek KHS, stavebního úřadu nebo EIA",
      "kolaudace, změna užívání nebo stížnost okolí",
      "prověření účinnosti protihlukového opatření před realizací"
    ],
    authorities: [
      "KHS při posouzení hlukové zátěže",
      "stavební úřad při povolování nebo kolaudaci",
      "příslušný úřad v procesu EIA"
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
      "Odborný posudek podle zákona o ochraně ovzduší slouží jako technický podklad pro správní orgány. Zpracováváme popis zdroje, výduchu, filtrace a změny kapacity v návaznosti na povolení provozu, měření emisí a skutečný provozní stav.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "posudek ke stacionárnímu zdroji, změně technologie nebo kapacity",
      "vazba na měření emisí, rozptylovou studii a provozní řád",
      "vyjádření k výzvě krajského úřadu nebo ČIŽP",
      "shrnutí pro investora před podáním žádosti o povolení provozu"
    ],
    forWhom: [
      "provozovatelé stacionárních zdrojů",
      "investoři a projektanti při povolování technologie",
      "firmy reagující na požadavek krajského úřadu nebo ČIŽP"
    ],
    whenNeeded: [
      "nový zdroj nebo změna technologie",
      "změna kapacity, paliva, filtrace nebo provozního režimu",
      "požadavek úřadu v řízení o povolení provozu",
      "potřeba technicky podloženého stanoviska"
    ],
    authorities: [
      "krajský úřad v ochraně ovzduší",
      "ČIŽP při kontrolách nebo návazných požadavcích",
      "stavební úřad nebo příslušný orgán v povolovacím procesu"
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
      "Provozní řád musí odpovídat skutečnému provoznímu režimu zdroje. Zpracováváme nový provozní řád nebo revizi stávajícího po změně filtrace, paliva, výkonu nebo po zjištění nesouladu při kontrole úřadu.",
    contactService: "Provozní řády",
    faqCategoryId: "eia",
    scope: [
      "nový provozní řád zdroje znečišťování ovzduší",
      "aktualizace po změně technologie, výduchu nebo havarijních postupů",
      "sladění s povolením provozu a posledním měřením emisí",
      "úpravy na výzvu krajského úřadu nebo ČIŽP"
    ],
    forWhom: [
      "provozovatelé zdrojů znečišťování ovzduší",
      "provozy po modernizaci technologie nebo změně povolení",
      "firmy řešící kontrolu, výzvu úřadu nebo interní audit dokumentace"
    ],
    whenNeeded: [
      "nový zdroj nebo změna povolení provozu",
      "změna technologie, paliva, výduchu nebo odlučovacího zařízení",
      "neaktuální provozní řád vůči skutečnému provozu",
      "požadavek krajského úřadu nebo ČIŽP"
    ],
    authorities: [
      "krajský úřad při povolení provozu",
      "ČIŽP při kontrole plnění provozních podmínek",
      "orgány ochrany ovzduší v navazujících řízeních"
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
      "U zařízení v režimu IPPC nestačí poslat úřadu jen jeden protokol z měření. Sjednotíme měření, studie, provozní data a popis změny tak, aby v řízení o integrovaném povolení — nebo jeho změně — bylo jasné, co se mění a co zůstává.",
    contactService: "IPPC a integrovaná povolení",
    faqCategoryId: "eia",
    scope: [
      "podklady pro nové integrované povolení nebo změnu IPPC",
      "přehled měření, studií a provozních vstupů v jednom celku",
      "technický popis změny vůči stávajícímu povolení a BAT",
      "doplnění dokumentace po připomínkách krajského úřadu"
    ],
    forWhom: [
      "provozovatelé zařízení v režimu IPPC",
      "investoři připravující významnou změnu zařízení",
      "provozy řešící změnu technologie, kapacity nebo povolených podmínek"
    ],
    whenNeeded: [
      "nové integrované povolení",
      "podstatná nebo nepodstatná změna IPPC",
      "změna kapacity, technologie nebo emisních parametrů",
      "doplnění podkladů na výzvu úřadu"
    ],
    authorities: [
      "krajský úřad v řízení IPPC",
      "ČIŽP a dotčené orgány podle rozsahu změny",
      "MŽP nebo další odborné orgány u specifických zařízení"
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
      "Oznámení záměru v procesu EIA je odborný podklad, který musí být věcně konzistentní, technicky srozumitelný a navázaný na skutečné parametry záměru. Zpracujeme oznámení a sladíme vstupy pro ovzduší, hluk, dopravu, kapacity a provozní režim tak, aby dokumentace tvořila jeden ucelený a obhajitelný celek.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "oznámení záměru podle zákona o EIA",
      "sjednocení rozptylových, hlukových a dopravních podkladů",
      "technické přílohy pro investora a zpracovatele EIA",
      "úpravy po připomínkách úřadu nebo veřejnosti"
    ],
    forWhom: [
      "investoři a projektanti nových záměrů",
      "provozovatelé připravující změnu kapacity nebo technologie",
      "obce, veřejný sektor a technické týmy v povolovacích procesech"
    ],
    whenNeeded: [
      "nový záměr s možnými vlivy na životní prostředí",
      "změna kapacity, technologie nebo areálu",
      "požadavek na zjišťovací řízení",
      "doplnění odborných příloh k povolovacímu procesu"
    ],
    authorities: [
      "příslušný úřad v procesu EIA",
      "krajský úřad nebo MŽP podle typu záměru",
      "dotčené orgány v oblasti ovzduší, hluku, vod, odpadů a veřejného zdraví"
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
      "Souhrnná provozní evidence v ISPOP musí odpovídat skutečnému provozu a výsledkům měření. Kontrolujeme údaje o palivu, výkonu a emisích, porovnáváme je s povolením provozu a doplníme podklady pro kontrolu úřadu.",
    contactService: "ISPOP",
    scope: [
      "souhrnná provozní evidence zdroje",
      "roční hlášení ISPOP — kontrola a doplnění údajů",
      "soulad s měřením emisí, povolením provozu a provozním řádem",
      "zapracování změny paliva, kapacity nebo provozních hodin"
    ],
    forWhom: [
      "provozovatelé stacionárních zdrojů",
      "firmy s pravidelnými povinnostmi v ochraně ovzduší",
      "provozy po změně technologie, kapacity nebo paliva"
    ],
    whenNeeded: [
      "roční reporting a souhrnná provozní evidence",
      "změna zdroje nebo provozních údajů",
      "kontrola návaznosti na měření emisí",
      "požadavek úřadu nebo interní kontrola povinností"
    ],
    authorities: [
      "ISPOP a ohlašovací povinnosti",
      "krajský úřad v ochraně ovzduší",
      "ČIŽP při kontrole provozní evidence"
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
      "Ověřování emisí skleníkových plynů posuzuje správnost metodiky, vstupních dat a dokumentace. Ověřujeme návaznost výpočtu na spotřeby, měření a provozní bilanci před reportingem, auditem nebo požadavkem investora.",
    contactService: "GHG",
    scope: [
      "ověření emisí skleníkových plynů a výpočtových listů",
      "kontrola emisních faktorů, spotřeb a provozních dat",
      "návaznost na měření emisí a provozní evidenci",
      "přehled nesouladů před odevzdáním reportingu"
    ],
    forWhom: [
      "provozovatelé s povinnostmi v oblasti GHG",
      "firmy připravující emisní reporting nebo ověření údajů",
      "technické a environmentální týmy provozů"
    ],
    whenNeeded: [
      "reporting emisí skleníkových plynů",
      "ověření výpočtů nebo emisních údajů",
      "změna technologie, paliva nebo provozních dat",
      "požadavek investora, auditu nebo správního orgánu"
    ],
    authorities: [
      "MŽP a příslušné systémy reportingu podle typu povinnosti",
      "auditoři, investoři a interní environmentální řízení",
      "orgány navazující na povolení a kontrolu emisních údajů"
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
      "Bezpečnostní listy musí být dostupné zaměstnancům u konkrétní látky a odpovídat skladování i manipulaci. Kontrolujeme úplnost dokumentace, označení a skladových míst a navrhujeme úpravy v provozu.",
    contactService: "Bezpečnostní listy",
    scope: [
      "revize bezpečnostních listů a jejich dostupnosti u pracoviště",
      "štítky na interních nádobách, skladech a pracovních místech",
      "soulad skladování a OOPP s údaji v listu",
      "podklad pro školení a interní provozní pokyn"
    ],
    forWhom: [
      "výrobní podniky, sklady, laboratoře a údržba",
      "provozní ekologové, BOZP pracovníci a vedoucí provozů",
      "firmy používající chemické látky nebo směsi v běžném provozu"
    ],
    whenNeeded: [
      "nové chemické látky nebo směsi v provozu",
      "nejasné bezpečnostní listy, štítky nebo skladování",
      "příprava na kontrolu nebo interní audit",
      "potřeba praktického podkladu pro školení zaměstnanců"
    ],
    authorities: [
      "KHS a kontrolní orgány v oblasti ochrany zdraví",
      "BOZP a interní bezpečnostní pravidla provozu",
      "environmentální a provozní řízení podle typu činnosti"
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
      "Chemické látky v provozu posuzujeme v místě skladování, přelévání a použití. Zpracováváme pravidla pro vedoucí směn a BOZP na základě skutečné manipulace se látkami, nejen evidenčních tabulek.",
    contactService: "Chemické látky v provozu",
    scope: [
      "mapování látek a směsí od dodávky po pracoviště",
      "pravidla manipulace, přelévání a skladování",
      "propojení s bezpečnostními listy a BOZP",
      "návrh odpovědností a podklad pro školení obsluhy"
    ],
    forWhom: [
      "výrobní provozy, sklady, laboratoře, údržba a technické týmy",
      "provozní ekologové, BOZP pracovníci a vedoucí směn",
      "firmy s lakovnami, čištěním, úpravou povrchů nebo chemickými sklady"
    ],
    whenNeeded: [
      "rozšíření používaných chemických látek nebo směsí",
      "příprava skladu, provozu nebo pracovních míst",
      "nejasnosti v označování, manipulaci nebo odpovědnostech",
      "příprava školení nebo reakce na kontrolní zjištění"
    ],
    authorities: [
      "KHS a kontrolní orgány v oblasti ochrany zdraví",
      "BOZP, požární ochrana a interní provozní pravidla",
      "environmentální agenda podle typu látek a provozu"
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
      "Měření vibrací posuzuje expozici podle používaného nářadí, operací a délky práce na stanovišti. Měříme ruční vibrace i vibrace přenášené na celé tělo; výstup slouží pro kategorizaci prací a KHS.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "HAV — vibrace na ruce u ručního nářadí a strojů",
      "vibrace celého těla u strojů, manipulační techniky a vozidel",
      "expozice podle skutečných operací a směnnosti",
      "návrh střídání práce nebo technického opatření při překročení"
    ],
    forWhom: [
      "výrobní provozy, údržba, stavebnictví a doprava",
      "zaměstnavatelé při kategorizaci prací nebo auditu BOZP",
      "provozy s ručním nářadím, bruskami, kompresory a strojní technikou"
    ],
    whenNeeded: [
      "kategorizace prací nebo její aktualizace",
      "požadavek KHS nebo interní audit BOZP",
      "nová technologie nebo změna pracovních operací",
      "stížnosti zaměstnanců nebo ověření účinnosti opatření"
    ],
    authorities: ["KHS při kategorizaci prací a kontrolách pracovního prostředí", "BOZP dokumentace zaměstnavatele"],
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
      "Měření osvětlení ověřuje skutečné světelné podmínky na konkrétních pracovních místech. Posuzujeme umělé i denní osvětlení podle charakteru práce, zrakové náročnosti, dispozice pracoviště a provozního režimu. Výstup slouží jako podklad pro KHS, kategorizaci prací, BOZP, kolaudaci nebo úpravy osvětlení po změně technologie či dispozice.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "měření umělého a denního osvětlení na pracovišti",
      "hodnocení podle typu činnosti a zrakové námahy",
      "výrobní haly, laboratoře, sklady i administrativa",
      "konkrétní návrh úpravy svítidel nebo dispozice při nedostatku"
    ],
    forWhom: [
      "zaměstnavatelé výroby, logistiky, administrativy a laboratoří",
      "investoři při změně dispozice nebo kolaudaci pracoviště",
      "organizace reagující na požadavek KHS nebo interní audit"
    ],
    whenNeeded: [
      "kategorizace prací nebo nové pracoviště",
      "požadavek KHS nebo kolaudace",
      "změna dispozice, technologie nebo typu osvětlení",
      "stížnosti na nedostatečné osvětlení"
    ],
    authorities: ["KHS při kategorizaci prací a kontrolách", "BOZP a stavební řízení při změně užívání"],
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
      "Měření mikroklimatu posuzuje teplotu, vlhkost a proudění vzduchu v návaznosti na fyzickou zátěž práce. Měříme v reálném provozu u pecí, sušáren a horkých operací; výstup slouží pro KHS, kategorizaci prací nebo návrh větrání.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "teplota, vlhkost a rychlost proudění vzduchu na stanovišti",
      "posouzení podle fyzické zátěže práce (lehká / střední / těžká)",
      "haly, sušárny, sklady s tepelnou zátěží",
      "návrh větrání, klimatizace nebo organizace směn"
    ],
    forWhom: [
      "výrobní a technologické provozy s tepelnou zátěží",
      "zaměstnavatelé při kategorizaci prací nebo požadavku KHS",
      "provozy se sušárnami, pecní technologií nebo horkými operacemi"
    ],
    whenNeeded: [
      "kategorizace prací nebo její aktualizace",
      "požadavek KHS nebo stížnosti na tepelnou zátěž",
      "nová technologie nebo změna větrání",
      "kolaudace nebo změna provozního režimu"
    ],
    authorities: ["KHS při kategorizaci prací a kontrolách pracovního prostředí", "BOZP dokumentace zaměstnavatele"],
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
      "Akustický posudek posuzuje hluk technologií v budově — strojovny VZT, kotelny a výrobní provozy. Výstup se liší od hlukové studie záměru vůči okolí a obvykle slouží pro stavební řízení nebo KHS při kolaudaci.",
    contactService: "Měření hluku a akustika",
    faqCategoryId: "hluk",
    scope: [
      "posudek ke stavební úpravě nebo změně užívání budovy",
      "odhlučnění strojoven, VZT a technologií v objektu",
      "vyjádření pro stavební řízení a kolaudaci",
      "návaznost na měření v provozu nebo výpočet"
    ],
    forWhom: [
      "investoři a projektanti staveb a technologií",
      "provozovatelé řešící hluk z VZT, strojoven nebo výroby",
      "stavební řízení, kolaudace a požadavky hygienické stanice"
    ],
    whenNeeded: [
      "stavební úpravy s dopadem na hluk v budově nebo okolí",
      "kolaudace nebo změna užívání budovy",
      "požadavek stavebního úřadu nebo KHS",
      "návrh odhlučnění před realizací"
    ],
    authorities: [
      "stavební úřad při povolování a kolaudaci",
      "KHS při posouzení hluku v budovách a na pracovištích",
      "investor nebo projektant při přípravě záměru"
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
      "Modelové výpočty imisí nebo hluku slouží k rychlému posouzení variant umístění komína, strojovny nebo dopravy. Výsledek lze zapracovat do rozptylové či hlukové studie nebo dokumentace EIA.",
    contactService: "Rozptylové studie",
    faqCategoryId: "rozptyl",
    scope: [
      "imisní model zdrojů ovzduší a dopravy v areálu",
      "výpočet hluku technologií, areálu a komunikací",
      "srovnání variant provozu nebo umístění",
      "výstupní podklady pro studii, EIA nebo jednání s úřadem"
    ],
    forWhom: [
      "investoři a projektanti připravující záměr nebo změnu provozu",
      "provozovatelé řešící dopady na okolí nebo úřadní požadavky",
      "zpracovatelé EIA a technické dokumentace"
    ],
    whenNeeded: [
      "nový záměr nebo změna kapacity zdroje",
      "potřeba variantního posouzení provozu",
      "požadavek úřadu na imisní nebo hlukové hodnocení",
      "příprava rozptylové nebo hlukové studie"
    ],
    authorities: [
      "krajský úřad a ČIŽP při posuzování zdrojů",
      "KHS a stavební úřad v návaznosti na hluk",
      "orgány EIA při posuzování záměrů"
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
      "Imisní a hlukové dopady záměru zpracováváme ve stejných vstupních datech, aby provozní režim a technické parametry byly v dokumentaci konzistentní. Snižuje to riziko připomínek správního orgánu v procesu EIA.",
    contactService: "Rozptylové studie",
    faqCategoryId: "rozptyl",
    scope: [
      "společné zadání imisí a hluku pro jeden záměr",
      "modelové výpočty a varianty umístění technologií",
      "podklad pro EIA, krajský úřad a KHS",
      "jeden kontaktní výstup pro investora a projektanta"
    ],
    forWhom: [
      "investoři a projektanti připravující větší záměr",
      "provozovatelé měnící technologii nebo kapacitu areálu",
      "zpracovatelé EIA a technické dokumentace"
    ],
    whenNeeded: [
      "záměr se souběžným vlivem na ovzduší a hluk",
      "požadavek úřadu na imisní i hlukové hodnocení",
      "příprava EIA nebo oznámení záměru",
      "potřeba variantního srovnání umístění technologií"
    ],
    authorities: [
      "krajský úřad a orgány EIA",
      "KHS při posouzení hluku",
      "stavební úřad a investor při přípravě záměru"
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
      "Povolení provozu zdroje často vyžaduje měření, odborný posudek nebo provozní řád v konkrétním rozsahu. Navrhneme požadované podklady podle typu technologie a požadavků krajského úřadu.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "návrh rozsahu podkladů před podáním na krajský úřad",
      "měření emisí, odborný posudek a provozní řád jako celek",
      "návaznost na IPPC a ISPOP u větších zdrojů",
      "technická podpora při doplňování žádosti"
    ],
    forWhom: [
      "provozovatelé stacionárních zdrojů",
      "investoři uvádějící novou technologii do provozu",
      "firmy reagující na výzvu krajského úřadu"
    ],
    whenNeeded: [
      "nový zdroj nebo změna kapacity",
      "vydání povolení provozu po technologické změně",
      "požadavek úřadu na doplnění podkladů",
      "změna paliva, filtrace nebo provozního režimu"
    ],
    authorities: ["krajský úřad v ochraně ovzduší", "ČIŽP při kontrolách a návazných požadavcích"],
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
      "Ve zjišťovacím řízení EIA je nutné dodat technické vstupy včas. Zajišťujeme měření, rozptyl a hluk ve formě použitelné pro zpracovatele EIA včetně sladění se stávajícím provozem areálu.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "technické přílohy pro zjišťovací řízení",
      "měření emisí, rozptyl a hluk podle zadání EIA",
      "sladění dat od provozu a z projektu",
      "doplnění po připomínkách úřadu ve fázi zjišťování"
    ],
    forWhom: [
      "investoři a zpracovatelé EIA",
      "provozovatelé připravující záměr s vlivem na životní prostředí",
      "projektanti potřebující odborné vstupy pro dokumentaci"
    ],
    whenNeeded: [
      "záměr spadající do zjišťovacího řízení",
      "požadavek na technické přílohy včasně v procesu",
      "potřeba sladit měření, studie a projekt",
      "příprava podkladů pro veřejnost a úřady"
    ],
    authorities: ["příslušný orgán EIA", "krajský úřad a dotčené správní orgány", "investor a zpracovatel EIA"],
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
      "Technické přílohy pro investory posuzují varianty záměru z hlediska imisí, hluku, emisí a dopravy ještě před finálním projektem. Výstupy slouží k rozhodnutí o umístění komína, strojovny nebo vstupní rampy.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "přílohy pro studii proveditelnosti a projektovou přípravu",
      "rozptyl, hluk, emise a doprava u variant záměru",
      "koordinace měření a studií pro projektanta",
      "návaznost na EIA, stavební řízení a povolení provozu"
    ],
    forWhom: [
      "investoři v přípravě průmyslového nebo infrastrukturního záměru",
      "projektanti a techničtí zpracovatelé dokumentace",
      "developéři potřebující vstupy pro rozhodnutí o variantě"
    ],
    whenNeeded: [
      "příprava investice před podáním na úřady",
      "potřeba sladit projekt s požadavky na životní prostředí",
      "variantní posouzení umístění technologií",
      "včasná příprava podkladů pro EIA nebo povolení"
    ],
    authorities: [
      "investor a projektant při rozhodování o záměru",
      "orgány EIA a povolovací řízení v další fázi",
      "krajský úřad, KHS a stavební úřad podle typu záměru"
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
