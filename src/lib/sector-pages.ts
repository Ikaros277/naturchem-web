export type SectorDetailPageData = {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  slug: string;
  intro: string;
  typicalProblems: string[];
  relatedServices: { title: string; href: string }[];
  docs: string[];
  process: string[];
  outputs: string[];
  pitfalls: string[];
  faq: { q: string; a: string }[];
};

export type SectorIndexPageData = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  introHeading: string;
  introParagraphs: string[];
  introMuted: string;
  assessmentHeading: string;
  assessmentIntro: string;
  assessmentSubheading: string;
  assessmentItems: string[];
};

export type SectorPageData = SectorDetailPageData | SectorIndexPageData;

export function isSectorDetailPage(data: SectorPageData): data is SectorDetailPageData {
  return "slug" in data;
}

export const sectorPages: Record<string, SectorPageData> = {
  index: {
    metadataTitle:
      "Provozy a technologie | Měření emisí, hluku, pracovního prostředí, EIA a posudky | NATURCHEM",
    metadataDescription:
      "Přehled provozů a technologií, pro které NATURCHEM zajišťuje měření emisí, hluku, pracovního prostředí, rozptylové a hlukové studie, odborné posudky, EIA/JES, provozní řády a ISPOP.",
    eyebrow: "Podle typu provozu",
    heroTitle: "Provozy a technologie — měření, studie a podklady pro úřad",
    heroLead:
      "Pro které provozy řešíme měření, studie a podklady — od kotelny a lakovny přes bioplyn až po recyklaci nebo VZT.",
    introHeading: "Najděte svůj typ provozu",
    introParagraphs: [
      "Na této stránce rychle zjistíte, zda váš typ provozu spadá do oblasti, kterou řešíme, a jaké služby s ním typicky souvisejí. U každého provozu najdete štítky služeb, typické faktory a odkazy na anonymizované příklady zakázek z praxe.",
      "Jde o přehled typů provozů a technologií — ne o případové studie. Konkrétní anonymizované scénáře zakázek najdete na stránce Typické zakázky."
    ],
    introMuted:
      "U provozů s vlastní detailní stránkou uvidíte také typické situace, dokumentaci a postup zakázky. U ostatních provozů vás odkážeme na související služby a příklady z praxe.",
    assessmentHeading: "Nejste si jistí, kam váš provoz zařadit?",
    assessmentIntro:
      "Pošlete nám stručný popis provozu, technologii, požadavek úřadu nebo projektovou dokumentaci. Podle situace určíme, zda je potřeba měření, studie, odborný posudek, provozní řád nebo jiný podklad.",
    assessmentSubheading: "Co nám pomůže při prvním posouzení",
    assessmentItems: [
      "stručný popis provozu, technologie nebo záměru",
      "účel zakázky: měření, studie, EIA, posudek, provozní řád nebo požadavek úřadu",
      "dostupná dokumentace: projekt, provozní řád, povolení provozu, technické listy",
      "údaje o provozním režimu, kapacitě, výduších, zdrojích hluku nebo dopravě",
      "fotografie technologie, výduchů, měřicích míst nebo okolí provozu",
      "případná komunikace s KHS, ČIŽP, krajským úřadem nebo stavebním úřadem"
    ]
  },
  lakovny: {
    metadataTitle: "Měření emisí a pracovního prostředí v lakovnách",
    metadataDescription:
      "Oborový přehled pro lakovny: VOC/TOC, odsávání, filtrace, pracovní expozice a podklady pro KÚ/ČIŽP/KHS.",
    title: "Lakovny",
    slug: "lakovny",
    intro:
      "Na lakovací lince jde současně o VOC do ovzduší i expozici na pracovišti. Změříme obojí a propojíme výsledky s provozním řádem a požadavky úřadu.",
    typicalProblems: [
      "kolísání emisí podle režimu nanášení a vytvrzování",
      "nedostatečné nebo nerovnoměrné odsávání",
      "chybějící návaznost na provozní řád a požadavky KÚ/ČIŽP",
      "neúplné podklady k používaným rozpouštědlům a směsím"
    ],
    docs: [
      "technické a bezpečnostní listy používaných nátěrových hmot",
      "popis technologie, režim linek a kapacity",
      "fotografie výduchů, filtrů a měřicích míst",
      "aktuální rozhodnutí úřadu nebo interní cíl měření"
    ],
    process: [
      "vyhodnotíme technologii lakovny, provozní režimy a účel měření",
      "stanovíme rozsah pro emise (VOC/TOC, doprovodné veličiny) a pracoviště",
      "realizujeme měření v reprezentativních podmínkách",
      "zpracujeme protokol a doporučíme praktická opatření"
    ],
    outputs: [
      "protokol z měření emisí a/nebo pracovního prostředí",
      "odborný komentář k výsledkům a rizikovým bodům provozu",
      "podklad pro správní řízení nebo interní technická opatření"
    ],
    pitfalls: [
      "měření mimo reálný provozní režim",
      "neaktuální podklady k chemickým látkám",
      "podcenění technického stavu odsávání a filtrace"
    ],
    relatedServices: [
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
      { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" }
    ],
    faq: [
      {
        q: "Kdy v lakovně řešit VOC/TOC měření?",
        a: "Nejčastěji při plnění podmínek provozního řádu, změně technologie nebo požadavku úřadu."
      },
      {
        q: "Je potřeba řešit i pracovní prostředí?",
        a: "Ano, lakovny často vyžadují kombinaci emisního měření a posouzení expozice zaměstnanců."
      }
    ]
  },
  kotelny: {
    metadataTitle: "Měření emisí kotelen a spalovacích zdrojů",
    metadataDescription:
      "Oborový přehled pro kotelny: NOx, CO, O2, výkonové režimy, měřicí místa a podklady pro provozovatele a úřady.",
    title: "Kotelny a spalovací zdroje",
    slug: "kotelny",
    intro:
      "Úřad nebo provozní řád vyžaduje měření v konkrétním výkonu? Zajistíme protokol emisí navázaný na vaše povolení a reálný provoz kotle.",
    typicalProblems: [
      "měření v nereprezentativním výkonovém režimu",
      "nejasný rozsah složek podle rozhodnutí úřadu",
      "nedostatečný popis měřicího místa a provozních podmínek",
      "změny paliva bez aktualizace návazných podkladů"
    ],
    docs: [
      "rozhodnutí o provozu zdroje a provozní řád",
      "technické parametry kotle, palivo a výkonové režimy",
      "informace o měřicích místech a spalinové cestě",
      "předchozí protokoly nebo požadavek ČIŽP/KÚ"
    ],
    process: [
      "upřesníme účel měření a legislativní návaznost",
      "ověříme měřicí místo a vhodný provozní režim",
      "realizujeme měření (NOx, CO, SO2, O2, doprovodné veličiny)",
      "zpracujeme protokol a doporučení pro další postup"
    ],
    outputs: [
      "protokol z měření emisí spalovacího zdroje",
      "vyhodnocení vůči požadavkům provozu a správních orgánů",
      "odborná doporučení k technickým nebo provozním opatřením"
    ],
    pitfalls: [
      "chybějící návaznost mezi měřením a provozním řádem",
      "nepřesné podklady o palivu a režimech provozu",
      "podcenění přípravy měřicího místa"
    ],
    relatedServices: [
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Odborné posudky", href: "/sluzby/odborne-posudky" },
      { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" }
    ],
    faq: [
      {
        q: "Kdy se u kotelny řeší jednorázové měření emisí?",
        a: "Typicky při plnění podmínek rozhodnutí úřadu, změně technologie nebo na základě kontroly."
      },
      {
        q: "Pomůžete i s posouzením měřicího místa?",
        a: "Ano, před měřením ověřujeme proveditelnost a reprezentativnost měřicího místa."
      }
    ]
  },
  svarovny: {
    metadataTitle: "Měření pracovního prostředí a emisí ve svařovnách",
    metadataDescription:
      "Oborový přehled pro svařovny: prašnost, kovy, NOx, ozon, lokální odsávání, kategorizace prací a podklady pro KHS.",
    title: "Svařovny",
    slug: "svarovny",
    intro:
      "Ve svařovně potřebujete podklad pro kategorizaci prací nebo návrh odsávání? Změříme expozici, hluk a navrhneme praktická opatření.",
    typicalProblems: [
      "neúplný přehled používaných materiálů a přídavných látek",
      "kolísání expozice podle typu svařování a směnnosti",
      "nedostatečné lokální odsávání v reálném režimu výroby",
      "chybějící propojení výsledků s BOZP a požadavky KHS"
    ],
    docs: [
      "popis pracovních operací a směnnosti",
      "seznam materiálů a bezpečnostní listy",
      "popis odsávání, větrání a dispozičního řešení",
      "požadavky KHS nebo interní cíle BOZP"
    ],
    process: [
      "určíme rozhodující faktory expozice pro konkrétní pracoviště",
      "nastavíme měření v reprezentativním provozním režimu",
      "vyhodnotíme výsledky ve vazbě na účel (KHS/BOZP)",
      "doporučíme praktická technická a organizační opatření"
    ],
    outputs: [
      "protokol z měření pracovního prostředí",
      "podklad pro kategorizaci prací",
      "doporučení ke snížení expozice zaměstnanců"
    ],
    pitfalls: [
      "měření bez znalosti směnnosti a pracovních operací",
      "neaktuální bezpečnostní listy",
      "podcenění účinnosti lokálního odsávání"
    ],
    relatedServices: [
      { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Měření hluku a akustika", href: "/sluzby/mereni-hluku" }
    ],
    faq: [
      {
        q: "Co je pro měření ve svařovně nejdůležitější?",
        a: "Správné určení pracovních operací, směnnosti a použitých materiálů včetně bezpečnostních listů."
      },
      {
        q: "Dá se měření použít pro KHS?",
        a: "Ano, výstup připravujeme jako podklad pro správní i interní účely."
      }
    ]
  },
  sklarstvi: {
    metadataTitle: "Měření emisí a odborné podklady pro sklářské provozy",
    metadataDescription:
      "Oborový přehled pro sklářství: pecní zdroje, měřicí místa, filtrace, provozní režimy a návaznost na povolovací podklady.",
    title: "Sklářské provozy",
    slug: "sklarstvi",
    intro:
      "U pecních zdrojů záleží na režimu měření i na měřicím místě. Emise, rozptyl a provozní dokumentaci připravíme pro sklářský provoz.",
    typicalProblems: [
      "nestabilní nebo cyklický provoz pecí během měření",
      "omezená dostupnost měřicích míst",
      "nejasná návaznost mezi výsledky měření a provozní dokumentací",
      "podcenění vazby na filtrační a odlučovací zařízení"
    ],
    docs: [
      "technický popis pece a navazující technologie",
      "provozní řád a relevantní požadavky rozhodnutí",
      "fotodokumentace výduchů a měřicích míst",
      "popis plánovaného provozního režimu při měření"
    ],
    process: [
      "vyhodnotíme technologické podmínky a cíle měření",
      "ověříme měřicí místa a režim realizace",
      "provedeme měření emisí a doprovodných veličin",
      "zpracujeme výstup s komentářem pro provoz i správní účely"
    ],
    outputs: [
      "protokol z měření emisí",
      "vyhodnocení provozních souvislostí",
      "odborné doporučení k návazným krokům"
    ],
    pitfalls: [
      "měření bez reprezentativního režimu pecí",
      "nedostatečný popis technických podmínek zdroje",
      "neúplná dokumentace pro návazné řízení"
    ],
    relatedServices: [
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
      { title: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Proč je u skláren důležitý režim pece při měření?",
        a: "Výsledky emisí jsou výrazně závislé na konkrétním technologickém režimu, proto je nutné měřit reprezentativně."
      },
      {
        q: "Pomůžete i s podklady pro úřad?",
        a: "Ano, výstupy připravujeme tak, aby byly použitelné v provozu i ve správní komunikaci."
      }
    ]
  },
  "odpady-recyklace": {
    metadataTitle: "Studie a měření pro zařízení odpadů a recyklace",
    metadataDescription:
      "Oborový přehled pro odpady a recyklaci: prašnost, hluk, doprava, rozptyl, EIA a podklady pro povolovací řízení.",
    title: "Odpady a recyklace",
    slug: "odpady-recyklace",
    intro:
      "Měníte kapacitu areálu nebo řešíte EIA u odpadů a recyklace? Spojíme hluk, prašnost, dopravu a rozptyl do jednoho podkladu pro řízení.",
    typicalProblems: [
      "kapacitní změny bez včasné aktualizace odborných podkladů",
      "kombinace technologického hluku a dopravní zátěže",
      "prašnost v areálu i v okolí zástavby",
      "nejasná návaznost na EIA a navazující povolovací procesy"
    ],
    docs: [
      "situace areálu a okolní zástavby",
      "projektová dokumentace a kapacity zařízení",
      "provozní režimy technologie a dopravy",
      "požadavek úřadu nebo účel odborného posouzení"
    ],
    process: [
      "vyhodnotíme rizikové oblasti záměru (hluk, prašnost, doprava, ovzduší)",
      "sestavíme kombinaci měření a studií podle cíle řízení",
      "zpracujeme odborné podklady včetně variant opatření",
      "předáme výstup použitelný pro investora i správní orgány"
    ],
    outputs: [
      "hluková nebo rozptylová studie",
      "protokoly z návazných měření",
      "odborné doporučení k technickým a organizačním opatřením"
    ],
    pitfalls: [
      "řešení jednotlivých témat izolovaně bez celkového kontextu",
      "neúplné vstupní údaje o technologii a dopravě",
      "pozdní zapojení odborných podkladů do projektu"
    ],
    relatedServices: [
      { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
      { title: "Hlukové studie", href: "/sluzby/hlukove-studie" },
      { title: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Co je u recyklačních areálů nejčastější problém?",
        a: "Kombinovaný dopad technologie a dopravy na hlukovou a imisní situaci okolí."
      },
      {
        q: "Lze připravit podklad i pro varianty záměru?",
        a: "Ano, standardně hodnotíme i variantní scénáře provozu a opatření."
      }
    ]
  },
  "tepelna-cerpadla-vzt": {
    metadataTitle: "Hluková posouzení pro tepelná čerpadla a VZT",
    metadataDescription:
      "Posouzení hluku technologií tepelného čerpadla a vzduchotechniky pro kolaudace, stížnosti i návrh technických opatření.",
    title: "Tepelná čerpadla a VZT",
    slug: "tepelna-cerpadla-vzt",
    intro:
      "Instalujete venkovní jednotku nebo VZT a řešíte hluk vůči sousedům? Posoudíme scénáře denního i nočního režimu ještě před kolaudací.",
    typicalProblems: [
      "nevhodné umístění venkovní jednotky vůči zástavbě",
      "podcenění nočního režimu provozu",
      "nejasný rozdíl mezi verifikačním měřením a studií",
      "neúčinná opatření bez analýzy dominantního zdroje"
    ],
    docs: [
      "technické listy tepelného čerpadla / VZT",
      "situace umístění zdroje vůči okolním objektům",
      "provozní režimy zařízení (den/noc)",
      "požadavek kolaudace nebo správního orgánu"
    ],
    process: [
      "upřesníme, zda je vhodné měření, studie nebo kombinace obou",
      "nastavíme metodiku a klíčové scénáře provozu",
      "provedeme měření nebo modelové posouzení",
      "doporučíme technická opatření a předáme podklad pro řízení"
    ],
    outputs: [
      "protokol z měření hluku nebo hluková studie",
      "vyhodnocení dopadu na okolí",
      "doporučení protihlukových opatření pro realizaci"
    ],
    pitfalls: [
      "měření mimo reprezentativní režim technologie",
      "absence vstupů pro noční provoz",
      "technické řešení bez ověření účinnosti"
    ],
    relatedServices: [
      { title: "Měření hluku a hlukové studie", href: "/sluzby/mereni-hluku" },
      { title: "Hlukové studie", href: "/sluzby/hlukove-studie" },
      { title: "Kontakt", href: "/kontakt" }
    ],
    faq: [
      {
        q: "Postačuje u tepelného čerpadla vždy pouze měření?",
        a: "Ne vždy. U nových záměrů je často vhodnější nebo nutná hluková studie před realizací."
      },
      {
        q: "Řešíte i návrh opatření?",
        a: "Ano, navrhujeme technická i organizační opatření podle dominantních zdrojů hluku."
      }
    ]
  },
  "bioplyn-biometan": {
    metadataTitle: "Rozptylové a hlukové studie pro bioplyn a biometan",
    metadataDescription:
      "Oborový přehled pro bioplynové stanice a biometan: ovzduší, pach, hluk, doprava a podklady pro EIA a povolování.",
    title: "Bioplyn a biometan",
    slug: "bioplyn-biometan",
    intro:
      "Připravujete bioplyn nebo biometan a potřebujete sladit rozptyl, hluk a EIA? Podklady připravíme podle skutečné technologie, ne až po připomínkách úřadu.",
    typicalProblems: [
      "opožděné řešení rozptylu a hluku až po připomínkách úřadu",
      "neúplné vstupy o provozních režimech technologie",
      "podcenění dopravních scénářů",
      "chybějící variantní technické posouzení"
    ],
    docs: [
      "technologické schéma a kapacity zařízení",
      "situace záměru a vztah k okolní zástavbě",
      "provozní režimy a dopravní napojení",
      "požadavek úřadu nebo účel studie"
    ],
    process: [
      "zmapujeme rizikové oblasti záměru (ovzduší, hluk, doprava)",
      "určíme potřebné studie a podklady pro řízení",
      "zpracujeme variantní posouzení a návrh opatření",
      "předáme odborný podklad pro investora i správní orgány"
    ],
    outputs: [
      "rozptylová a/nebo hluková studie",
      "odborná argumentace pro EIA a navazující procesy",
      "doporučení pro technickou optimalizaci záměru"
    ],
    pitfalls: [
      "nedostatečný popis technologie a provozu",
      "oddělené řešení hluku a ovzduší bez společného kontextu",
      "neaktuální podklady při změně kapacity projektu"
    ],
    relatedServices: [
      { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
      { title: "Hlukové studie", href: "/sluzby/hlukove-studie" },
      { title: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Kdy řešit studie u bioplynového záměru?",
        a: "Ideálně už v přípravě projektu, aby byly podklady kvalitní a řízení mělo hladší průběh."
      },
      {
        q: "Lze porovnat více variant technologie?",
        a: "Ano, připravujeme i variantní scénáře s porovnáním dopadů a navržených opatření."
      }
    ]
  },
  "zemedelske-provozy": {
    metadataTitle: "Měření a podklady pro zemědělské a potravinářské provozy",
    metadataDescription:
      "Měření emisí, pracovního prostředí a provozních parametrů pro zemědělské areály, stáje, sušárny, bioplynové stanice a potravinářské technologie.",
    title: "Zemědělské provozy a sušárny",
    slug: "zemedelske-provozy",
    intro:
      "Řešíte emise, hluk nebo pracoviště na farmě či v sušárně? Měření a posudky připravíme pro provozovatele i krajský úřad a KHS.",
    typicalProblems: [
      "nejasný rozsah měření při změně technologie nebo kapacity",
      "souběh požadavků na emise, pracovní prostředí a pachové látky",
      "nedostatečná dokumentace provozních režimů a zdrojů",
      "termínový tlak před kontrolou nebo podáním podkladů úřadu"
    ],
    docs: [
      "popis technologie, stájí, sušáren nebo potravinářské linky",
      "provozní řád, rozhodnutí úřadu nebo interní cíl měření",
      "technické listy vstupů, paliv a používaných látek",
      "fotografie zdrojů, výduchů a pracovišť"
    ],
    process: [
      "upřesníme účel výstupu pro provoz, KHS, krajský úřad nebo EIA",
      "stanovíme rozsah měření emisí a/nebo pracovního prostředí",
      "provedeme terénní měření v reprezentativním režimu",
      "předáme protokol nebo studii s doporučením dalšího postupu"
    ],
    outputs: [
      "protokoly z měření emisí a pracovního prostředí",
      "podklady pro hygienické stanice a krajské úřady",
      "návazné studie nebo odborná vyjádření dle záměru"
    ],
    pitfalls: [
      "měření mimo reprezentativní provozní režim",
      "chybějící podklady o kapacitách a technologii",
      "oddělené řešení emisí a pracovního prostředí bez společného kontextu"
    ],
    relatedServices: [
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
      { title: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Řešíte i bioplynové stanice v zemědělském areálu?",
        a: "Ano, včetně měření emisí motorů, provozních režimů a návaznosti na povinnosti vůči orgánům ochrany ovzduší."
      },
      {
        q: "Lze kombinovat měření emisí a pracovního prostředí?",
        a: "Ano, často navrhujeme společný postup podle technologie a požadovaného výstupu pro úřad i provoz."
      }
    ]
  },
  drevozpracujici: {
    metadataTitle: "Měření a podklady pro dřevozpracující provozy",
    metadataDescription:
      "Měření emisí, prašnosti, hluku a pracovního prostředí pro pily, truhlárny, sušárny a kotelny na biomasu.",
    title: "Dřevozpracující provozy",
    slug: "drevozpracujici",
    intro:
      "V pilách a truhlárnách jde o prašnost, TZL i kotel na biomasu. Zajistíme měření a podklady pro KHS, krajský úřad i povolování.",
    typicalProblems: [
      "měření emisí ze spalování biomasy a technologických výduchů",
      "prašnost u drticích linek a odsávacích systémů",
      "hluk provozu a dopravy v areálu",
      "aktualizace povolení a provozní dokumentace"
    ],
    docs: [
      "popis technologie, paliva a provozního režimu",
      "fotografie zdrojů, výduchů a pracovišť",
      "požadavek úřadu nebo interní cíl měření",
      "provozní řád a rozhodnutí, pokud existují"
    ],
    process: [
      "upřesníme účel výstupu pro provoz, úřad nebo investora",
      "stanovíme rozsah měření emisí a/nebo pracovního prostředí",
      "provedeme terénní měření v reprezentativním režimu",
      "předáme protokol nebo studii s doporučením dalšího postupu"
    ],
    outputs: [
      "protokoly z měření emisí a pracovního prostředí",
      "podklady pro KHS a krajské úřady",
      "návazné odborné posudky nebo provozní řády"
    ],
    pitfalls: [
      "měření mimo reprezentativní provoz sušárny nebo kotle",
      "nedostatečný popis technologie a palivové skladby",
      "oddělené řešení emisí a prašnosti bez společného kontextu"
    ],
    relatedServices: [
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
      {
        title: "Měření emisí dřevozpracujících provozů",
        href: "/sluzby/mereni-emisi-drevozpracujicich-provoze"
      }
    ],
    faq: [
      {
        q: "Řešíte i sušárny dřeva a biomasu?",
        a: "Ano, včetně měření emisí ze sušáren a spalovacích zdrojů v areálu."
      },
      {
        q: "Lze kombinovat měření emisí a pracovního prostředí?",
        a: "Ano, často navrhujeme společný postup podle technologie a požadovaného výstupu."
      }
    ]
  },
  automotive: {
    metadataTitle: "Měření a podklady pro automobilovou výrobu a technické textilie",
    metadataDescription:
      "Měření emisí, pracovního prostředí a hluku pro automobilovou výrobu, technické textilie a výrobní linky.",
    title: "Automobilová výroba a technické textilie",
    slug: "automotive",
    intro:
      "Ve výrobě komponent řešíte chemické látky, VOC i hluk technologií? Měření a podklady připravíme pro provoz, investora i úřad.",
    typicalProblems: [
      "měření emisí z technologií a lakoven v areálu",
      "kategorizace prací a expozice chemickým látkám",
      "hluk výrobních linek a logistiky",
      "požadavky investora nebo úřadu při změně provozu"
    ],
    docs: [
      "popis technologie a pracovních operací",
      "bezpečnostní listy a směnnost",
      "fotografie zdrojů a pracovišť",
      "požadavek úřadu, investora nebo interní audit"
    ],
    process: [
      "vyhodnotíme účel měření nebo studie",
      "stanovíme rozsah pro emise, pracovní prostředí nebo hluk",
      "realizujeme terénní měření nebo zpracujeme studii",
      "předáme protokol s doporučením pro provoz a dokumentaci"
    ],
    outputs: [
      "protokoly z měření emisí a pracovního prostředí",
      "podklady pro KHS a investiční tým",
      "návazné odborné posudky při změně technologie"
    ],
    pitfalls: [
      "měření mimo reprezentativní směnu nebo operaci",
      "chybějící podklady o chemických směsích a odsávání",
      "oddělené řešení emisí a PP bez koordinace"
    ],
    relatedServices: [
      { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
      { title: "Měření emisí lakovny", href: "/sluzby/mereni-emisi-lakoven" }
    ],
    faq: [
      {
        q: "Měříte i emise z lakovacích linek v automobilové výrobě?",
        a: "Ano, včetně VOC/TOC a návaznosti na pracovní prostředí v lakovně."
      },
      {
        q: "Spolupracujete s projektanty a investory?",
        a: "Ano, připravujeme podklady pro technický dozor a povolovací procesy."
      }
    ]
  }
};
