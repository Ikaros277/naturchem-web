/** Obsah stránky Reference — oblasti, segmenty a anonymizované příklady zakázek. */

export type ReferenceArea = {
  title: string;
  description: string;
  contactService: string;
};

export type ReferenceExample = {
  title: string;
  operationType: string;
  scope: string;
  output: string;
  text: string;
  tags: readonly string[];
  href: string;
  contactService: string;
  cta: "Poptat podobnou zakázku" | "Poslat podklady k posouzení" | "Poptat měření / studii";
};

export const referenceIntro =
  "NATURCHEM dlouhodobě zajišťuje měření, studie a odborné podklady pro průmyslové provozy, energetiku, zemědělství, odpadové hospodářství, stavebnictví, veřejný sektor i investiční záměry. V zakázkách se často propojuje akreditované měření, rozptylové a hlukové studie, EIA, odborné posudky, provozní řády, ISPOP a technická argumentace pro úřady.";

export const referenceCustomerSegmentsText =
  "V interní evidenci NATURCHEM se dlouhodobě opakují zakázky pro průmyslové podniky, lakovny, kotelny, bioplynové stanice, dřevozpracující provozy, zemědělské areály, odpadová zařízení, zdravotnické provozy, projektanty a investory. Konkrétní názvy zákazníků na web uvádíme jen po ověření, že je lze veřejně prezentovat.";

export const referenceAreas: readonly ReferenceArea[] = [
  {
    title: "Průmysl a automotive",
    description:
      "Měření emisí a pracovního prostředí, hluk technologií, VOC/TOC, provozní dokumentace a podklady pro změny výroby.",
    contactService: "Měření emisí"
  },
  {
    title: "Energetika, kotelny a kogenerace",
    description:
      "Měření emisí kotelen a kogeneračních jednotek, rozptylové studie, povolení provozu, ISPOP a provozní řády.",
    contactService: "Měření emisí"
  },
  {
    title: "Lakovny a povrchové úpravy",
    description:
      "Měření VOC/TOC a TZL, nové výduchy, EIA, rozptylové studie a podklady pro povolení provozu lakovacích technologií.",
    contactService: "Měření emisí"
  },
  {
    title: "Zemědělství a bioplyn",
    description:
      "Měření emisí BPS, EIA a zjišťovací řízení, rozptylové studie, provozní řády a podklady pro zemědělské areály.",
    contactService: "Rozptylové studie"
  },
  {
    title: "Odpady, recyklace a skládky",
    description:
      "Rozptylové a hlukové studie, odborné posudky, EIA, provozní řády a kapacitní změny odpadových zařízení.",
    contactService: "Rozptylové studie"
  },
  {
    title: "Stavebnictví a infrastruktura",
    description:
      "Hlukové studie, měření hluku pro kolaudace, posouzení VZT a technologií, podklady pro investiční záměry.",
    contactService: "Měření hluku a akustika"
  },
  {
    title: "Veřejný sektor a zdravotnictví",
    description:
      "Hlukové a rozptylové posouzení, měření pracovního prostředí, podklady pro veřejné stavby a provozy.",
    contactService: "Měření hluku a akustika"
  },
  {
    title: "Projektanti, investoři a EIA",
    description:
      "Koordinace měření, studií a technických příloh pro EIA, povolení provozu a komunikaci s úřady.",
    contactService: "EIA a oznámení záměru"
  }
] as const;

/** Výběr 16 anonymizovaných příkladů pro web (z interní evidence). */
export const referenceExamples: readonly ReferenceExample[] = [
  {
    title: "Měření emisí v lakovně automotive",
    operationType: "lakovna, automotive",
    scope: "měření VOC/TOC a TZL na technologických výduších",
    output: "protokol z měření emisí a podklad pro povolení provozu / kontrolu plnění podmínek",
    text: "Pro výrobní provoz v automotive jsme zajišťovali měření emisí z lakovací technologie, včetně VOC/TOC a tuhých znečišťujících látek. Součástí zakázky bylo posouzení měřicích míst, měření na výduších a zpracování výstupu použitelného pro provozovatele i navazující úřední agendu.",
    tags: ["Emise", "VOC", "KÚ"],
    href: "/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "Měření emisí bioplynové stanice",
    operationType: "BPS / kogenerační jednotka",
    scope: "emise kogenerační jednotky, provozní údaje, návaznost na ISPOP",
    output: "protokol a podklady pro provozní evidenci",
    text: "U bioplynové stanice jsme řešili měření emisí kogenerační jednotky a návaznost výsledků na provozní evidenci a ohlašovací povinnosti. Zakázka zahrnovala koordinaci termínu měření, provozní režim zdroje a zpracování výstupu pro provozovatele.",
    tags: ["Emise", "ISPOP", "KÚ"],
    href: "/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat měření / studii"
  },
  {
    title: "Série měření na více bioplynových stanicích",
    operationType: "skupina BPS",
    scope: "více lokalit, více kogeneračních jednotek",
    output: "sada protokolů a jednotná evidence výsledků",
    text: "Pro provozovatele s více bioplynovými stanicemi jsme zajišťovali měření emisí na několika lokalitách a více kogeneračních jednotkách. Důraz byl kladen na jednotný postup, plánování termínů a přehledné výstupy pro navazující provozní evidenci.",
    tags: ["Emise", "ISPOP"],
    href: "/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "Měření emisí plynové kotelny",
    operationType: "městská / areálová kotelna",
    scope: "dva plynové kotle, spaliny, provozní režim",
    output: "protokol z měření emisí",
    text: "Pro provozovatele plynové kotelny jsme provedli měření emisí na dvou kotlích v reprezentativním provozním režimu. Výstup sloužil jako odborný podklad pro plnění povinností provozovatele zdroje znečišťování ovzduší.",
    tags: ["Emise", "KÚ", "ČIŽP"],
    href: "/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat měření / studii"
  },
  {
    title: "Měření pracovního prostředí ve výrobní hale",
    operationType: "výrobní závod",
    scope: "hluk, prach, chemické látky, pracovní pozice",
    output: "podklad pro KHS a kategorizaci prací",
    text: "Ve výrobní hale jsme měřili faktory pracovního prostředí pro více pracovních pozic. Zakázka zahrnovala hluk, prašnost a chemické látky v pracovním ovzduší. Výsledky sloužily jako podklad pro zaměstnavatele a kategorizaci prací.",
    tags: ["KHS", "Hluk", "Prašnost"],
    href: "/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "Měření pracovního prostředí ve svařovně a kovovýrobě",
    operationType: "svařovna / zámečnický provoz",
    scope: "prach, kovy, ozon, hluk, vibrace",
    output: "protokoly pro hodnocení expozice zaměstnanců",
    text: "Ve svařovacím a kovovýrobním provozu jsme zajišťovali měření prašnosti, chemických faktorů, hluku a vibrací. Výsledky byly určeny pro hodnocení pracovních podmínek, BOZP a případnou komunikaci s hygienickou stanicí.",
    tags: ["KHS", "Prašnost", "Hluk"],
    href: "/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "Hluk z provozu tepelného čerpadla",
    operationType: "technické zařízení budovy",
    scope: "venkovní hluk v chráněném prostoru",
    output: "měření / akustické posouzení a doporučení dalšího postupu",
    text: "U provozu tepelného čerpadla jsme řešili hluk v nejbližším chráněném prostoru. Výstup sloužil pro posouzení stavu, komunikaci se zúčastněnými stranami a návrh dalšího technického nebo provozního řešení.",
    tags: ["Hluk", "KHS"],
    href: "/mereni-hluku-hlukove-studie",
    contactService: "Měření hluku a akustika",
    cta: "Poptat měření / studii"
  },
  {
    title: "Hluková studie pro technologii VZT",
    operationType: "VZT / technologické zařízení",
    scope: "výpočet nebo měření hluku technologie",
    output: "podklad pro kolaudaci, KHS nebo stavební úřad",
    text: "Pro technologické zařízení a vzduchotechniku jsme připravili hlukové posouzení zaměřené na nejbližší chráněné prostory. Výstup byl určen pro projektanta, provozovatele a navazující povolovací nebo kolaudační řízení.",
    tags: ["Hluk", "KHS", "VZT"],
    href: "/hlukove-studie",
    contactService: "Měření hluku a akustika",
    cta: "Poptat měření / studii"
  },
  {
    title: "Rozptylová studie pro novou plynovou kotelnu",
    operationType: "potravinářský / průmyslový provoz",
    scope: "několik plynových kotlů, výduchy, imisní příspěvky",
    output: "rozptylová studie pro povolovací proces",
    text: "Pro instalaci nové plynové kotelny jsme zpracovali rozptylovou studii hodnotící imisní příspěvky zdroje. Studie pracovala s technickými parametry kotlů, provozní dobou, výduchy a umístěním záměru v lokalitě.",
    tags: ["Rozptyl", "KÚ", "EIA"],
    href: "/rozptylove-studie",
    contactService: "Rozptylové studie",
    cta: "Poptat měření / studii"
  },
  {
    title: "Odborný posudek, rozptylová a hluková studie pro kompostárnu",
    operationType: "kompostárna / zařízení k nakládání s odpady",
    scope: "odborný posudek, rozptylová studie, hluková studie",
    output: "sada podkladů pro povolovací řízení",
    text: "Pro zařízení k nakládání s odpady jsme zajišťovali kombinaci odborného posudku, rozptylové studie a hlukové studie. Cílem bylo vyhodnotit provozní, emisní a hlukové souvislosti záměru a připravit podklady pro navazující řízení.",
    tags: ["Rozptyl", "Hluk", "EIA", "KÚ"],
    href: "/odborne-posudky",
    contactService: "Odborné posudky",
    cta: "Poptat měření / studii"
  },
  {
    title: "EIA pro lakovnu svitkových plechů",
    operationType: "lakovna / povrchové úpravy",
    scope: "EIA, technologie, emise, provozní režim",
    output: "oznámení záměru a přílohy pro povolovací proces",
    text: "Pro záměr lakovny svitkových plechů jsme řešili EIA agendu a odborné podklady k technologii. Zakázka vyžadovala propojení emisních vstupů, provozního režimu, návazných studií a argumentace pro příslušné řízení.",
    tags: ["EIA", "Emise", "KÚ"],
    href: "/eia-oznameni-zameru",
    contactService: "EIA a oznámení záměru",
    cta: "Poptat měření / studii"
  },
  {
    title: "Modernizace slévárenského provozu",
    operationType: "slévárna / kovovýroba",
    scope: "EIA, odborný posudek, rozptylová studie, hluková studie",
    output: "komplexní sada povolovacích podkladů",
    text: "U modernizace slévárenského provozu jsme připravovali kombinaci odborných podkladů zahrnující EIA, odborný posudek, rozptylovou a hlukovou studii. Zakázka řešila navýšení nebo změnu technologie a její dopady na okolí.",
    tags: ["EIA", "Rozptyl", "Hluk", "KÚ"],
    href: "/eia-posudky-poradenstvi",
    contactService: "EIA a oznámení záměru",
    cta: "Poptat měření / studii"
  },
  {
    title: "Provozní řád pro kompostárnu a zpracování stavební suti",
    operationType: "odpady / recyklace",
    scope: "provozní řád, navýšení kapacity, jednání s úřadem",
    output: "provozní dokumentace pro povolení",
    text: "Pro provoz s nakládáním s odpady jsme zpracovávali provozní řád v návaznosti na kapacitní změnu a zpracování stavební suti. Dokumentace sloužila jako podklad pro úřední projednání a povolení provozu.",
    tags: ["KÚ", "ČIŽP", "Ovzduší"],
    href: "/provozni-rady",
    contactService: "Provozní řády",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "ISPOP a souhrnná provozní evidence pro více provozoven",
    operationType: "více provozoven, různé obory",
    scope: "ovzduší, odpady, návaznost na měření emisí",
    output: "roční hlášení a provozní evidence",
    text: "Každoročně zajišťujeme provozovatelům zpracování souhrnné provozní evidence a hlášení v systému ISPOP. U opakujících se zakázek kontrolujeme návaznost na měření emisí, provozní údaje, povolení provozu a další podklady.",
    tags: ["ISPOP", "KÚ"],
    href: "/ispop-souhrnna-provozni-evidence",
    contactService: "ISPOP",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "GHG – ověřování emisních údajů a změn kapacity",
    operationType: "provoz s povinností v oblasti skleníkových plynů",
    scope: "roční ověření, změny kapacity, provozní data",
    output: "ověřovací výstupy pro provozovatele",
    text: "Pro provozovatele s povinnostmi v oblasti emisí skleníkových plynů jsme zajišťovali ověřování ročních emisních údajů a podkladů ke změnám kapacity. Zakázky vyžadovaly kontrolu provozních dat, návaznost na vykazování a odborné zpracování výstupů.",
    tags: ["GHG", "ISPOP"],
    href: "/ghg-overovani-emisi-sklenikovych-plynu",
    contactService: "GHG",
    cta: "Poptat podobnou zakázku"
  },
  {
    title: "Zjišťovací řízení pro modernizaci chovu skotu",
    operationType: "zemědělský areál",
    scope: "EIA / zjišťovací řízení, provozní a územní souvislosti",
    output: "oznámení záměru",
    text: "Pro zemědělský areál jsme připravovali podklady pro zjišťovací řízení v rámci modernizace chovu. Hodnoceny byly provozní parametry, kapacita, návaznost na okolí a související environmentální vlivy.",
    tags: ["EIA", "KÚ"],
    href: "/zjistovaci-rizeni-eia",
    contactService: "EIA a oznámení záměru",
    cta: "Poptat měření / studii"
  }
] as const;
