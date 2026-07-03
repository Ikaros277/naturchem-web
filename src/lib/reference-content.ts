/** Obsah stránky Reference — oblasti, segmenty a anonymizované příklady zakázek. */

export type ReferenceArea = {
  title: string;
  description: string;
  contactService: string;
};

export type ReferenceExample = {
  id: string;
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

export const referenceEyebrow = "36 let na trhu · reference z praxe";

export const referenceIntro =
  "Za 36 let na trhu jsme spolupracovali s mnoha významnými společnostmi v průmyslu i energetice.";

export const referenceCustomersIntro =
  "Společnosti, které u nás řeší měření, studie a podklady pro úřad — od automobilové výroby a energetiky po veřejný sektor.";

export const referenceExamplesHeading = "Příklady zakázek z praxe";

export const referenceAreasHeading = "Reference podle oborů a typu provozu";

export function getReferenceExamplesById(): Map<string, ReferenceExample> {
  return new Map(referenceExamples.map((example) => [example.id, example]));
}

export const referenceAreas: readonly ReferenceArea[] = [
  {
    title: "Průmysl a automobilová výroba",
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
    id: "lak-automotive-emise",
    title: "Lakovna automobilových dílů — měření VOC/TOC a TZL",
    operationType: "lakovna, automobilová výroba",
    scope: "měření VOC/TOC a TZL na technologických výduších",
    output: "protokol z měření emisí a podklad pro povolení provozu / kontrolu plnění podmínek",
    text: "Změřili jsme emise z lakovací technologie včetně VOC/TOC a tuhých látek na výduších. Protokol šel do plnění podmínek provozu a komunikace s úřadem.",
    tags: ["Emise", "VOC", "KÚ"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "bps-emise",
    title: "Bioplynová stanice — emise kogenerace",
    operationType: "BPS / kogenerační jednotka",
    scope: "emise kogenerační jednotky, provozní údaje, návaznost na ISPOP",
    output: "protokol a podklady pro provozní evidenci",
    text: "Změřili jsme emise kogenerační jednotky v dohodnutém provozním režimu a propojili výsledek s provozní evidencí a ISPOP.",
    tags: ["Emise", "ISPOP", "KÚ"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat měření / studii"
  },
  {
    id: "bps-serie-emise",
    title: "Více bioplynových stanic — série měření emisí",
    operationType: "skupina BPS",
    scope: "více lokalit, více kogeneračních jednotek",
    output: "sada protokolů a jednotná evidence výsledků",
    text: "Na několika lokalitách jsme změřili emise kogeneračních jednotek jednotným postupem. Výstupy sloužily pro přehlednou provozní evidenci skupiny stanic.",
    tags: ["Emise", "ISPOP"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "plyn-kotelna-emise",
    title: "Plynová kotelna — měření emisí",
    operationType: "městská / areálová kotelna",
    scope: "dva plynové kotle, spaliny, provozní režim",
    output: "protokol z měření emisí",
    text: "Změřili jsme emise na dvou kotlích v reprezentativním výkonu. Protokol sloužil jako podklad pro plnění povinností provozovatele zdroje.",
    tags: ["Emise", "KÚ", "ČIŽP"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat měření / studii"
  },
  {
    id: "hala-pp",
    title: "Výrobní hala — měření pracovního prostředí",
    operationType: "výrobní závod",
    scope: "hluk, prach, chemické látky, pracovní pozice",
    output: "podklad pro KHS a kategorizaci prací",
    text: "Změřili jsme hluk, prašnost a chemické látky na vybraných pracovištích. Výsledky sloužily pro kategorizaci prací a komunikaci s KHS.",
    tags: ["KHS", "Hluk", "Prašnost"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "svarovna-pp",
    title: "Svařovna — expozice a hluk",
    operationType: "svařovna / zámečnický provoz",
    scope: "prach, kovy, ozon, hluk, vibrace",
    output: "protokoly pro hodnocení expozice zaměstnanců",
    text: "Změřili jsme prašnost, kovy, hluk a vibrace ve svařovně. Protokoly sloužily pro BOZP a návrh opatření na pracovištích.",
    tags: ["KHS", "Prašnost", "Hluk"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "tcp-hluk",
    title: "Tepelné čerpadlo — hluk v okolí",
    operationType: "technické zařízení budovy",
    scope: "venkovní hluk v chráněném prostoru",
    output: "měření / akustické posouzení a doporučení dalšího postupu",
    text: "Změřili jsme hluk venkovní jednotky v chráněném prostoru. Výstup pomohl při komunikaci se sousedy a návrhu dalšího postupu.",
    tags: ["Hluk", "KHS"],
    href: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    cta: "Poptat měření / studii"
  },
  {
    id: "vzt-hluk-studie",
    title: "VZT — hluková studie",
    operationType: "VZT / technologické zařízení",
    scope: "výpočet nebo měření hluku technologie",
    output: "podklad pro kolaudaci, KHS nebo stavební úřad",
    text: "Připravili jsme hlukové posouzení technologie vůči nejbližší zástavbě. Podklad šel pro kolaudaci a jednání s úřady.",
    tags: ["Hluk", "KHS", "VZT"],
    href: "/sluzby/hlukove-studie",
    contactService: "Měření hluku a akustika",
    cta: "Poptat měření / studii"
  },
  {
    id: "rozptyl-kotelna",
    title: "Nová plynová kotelna — rozptylová studie",
    operationType: "potravinářský / průmyslový provoz",
    scope: "několik plynových kotlů, výduchy, imisní příspěvky",
    output: "rozptylová studie pro povolovací proces",
    text: "Zpracovali jsme rozptylovou studii pro novou kotelnu s imisními příspěvky do okolí. Vstupy: výduchy, provozní režim a parametry zdroje.",
    tags: ["Rozptyl", "KÚ", "EIA"],
    href: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie",
    cta: "Poptat měření / studii"
  },
  {
    id: "kompost-studie",
    title: "Kompostárna — posudek, rozptyl a hluk",
    operationType: "kompostárna / zařízení k nakládání s odpady",
    scope: "odborný posudek, rozptylová studie, hluková studie",
    output: "sada podkladů pro povolovací řízení",
    text: "Spojili jsme odborný posudek, rozptylovou a hlukovou studii pro zařízení odpadů. Výstupy šly do jednoho povolovacího řízení.",
    tags: ["Rozptyl", "Hluk", "EIA", "KÚ"],
    href: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky",
    cta: "Poptat měření / studii"
  },
  {
    id: "eia-lak",
    title: "Lakovna plechů — EIA",
    operationType: "lakovna / povrchové úpravy",
    scope: "EIA, technologie, emise, provozní režim",
    output: "oznámení záměru a přílohy pro povolovací proces",
    text: "Připravili jsme EIA a technické přílohy k lakovně plechů včetně emisních vstupů a provozního režimu.",
    tags: ["EIA", "Emise", "KÚ"],
    href: "/sluzby/eia-oznameni-zameru",
    contactService: "EIA a oznámení záměru",
    cta: "Poptat měření / studii"
  },
  {
    id: "slevarna-eia",
    title: "Slévárna — modernizace a EIA",
    operationType: "slévárna / kovovýroba",
    scope: "EIA, odborný posudek, rozptylová studie, hluková studie",
    output: "komplexní sada povolovacích podkladů",
    text: "U modernizace slévárny jsme sladili EIA, posudek, rozptyl a hluk do jedné sady podkladů pro změnu technologie.",
    tags: ["EIA", "Rozptyl", "Hluk", "KÚ"],
    href: "/sluzby/eia-posudky-poradenstvi",
    contactService: "EIA a oznámení záměru",
    cta: "Poptat měření / studii"
  },
  {
    id: "provozni-rad-odpady",
    title: "Odpady — provozní řád při změně kapacity",
    operationType: "odpady / recyklace",
    scope: "provozní řád, navýšení kapacity, jednání s úřadem",
    output: "provozní dokumentace pro povolení",
    text: "Zpracovali jsme provozní řád při navýšení kapacity a zpracování stavební suti. Dokumentace šla do úředního projednání.",
    tags: ["KÚ", "ČIŽP", "Ovzduší"],
    href: "/sluzby/provozni-rady",
    contactService: "Provozní řády",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "ispop-vice",
    title: "Více provozoven — ISPOP a evidence",
    operationType: "více provozoven, různé obory",
    scope: "ovzduší, odpady, návaznost na měření emisí",
    output: "roční hlášení a provozní evidence",
    text: "Každoročně zpracováváme souhrnnou provozní evidenci a hlášení ISPOP s návazností na měření emisí a povolení provozu.",
    tags: ["ISPOP", "KÚ"],
    href: "/sluzby/ispop",
    contactService: "ISPOP",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "ghg-overovani",
    title: "GHG — ověření emisních údajů",
    operationType: "provoz s povinností v oblasti skleníkových plynů",
    scope: "roční ověření, změny kapacity, provozní data",
    output: "ověřovací výstupy pro provozovatele",
    text: "Ověřili jsme roční emisní údaje a podklady ke změně kapacity v režimu skleníkových plynů.",
    tags: ["GHG", "ISPOP"],
    href: "/sluzby/ghg-overovani",
    contactService: "GHG",
    cta: "Poptat podobnou zakázku"
  },
  {
    id: "zjistovaci-zemedelstvi",
    title: "Zemědělský areál — zjišťovací řízení",
    operationType: "zemědělský areál",
    scope: "EIA / zjišťovací řízení, provozní a územní souvislosti",
    output: "oznámení záměru",
    text: "Připravili jsme podklady pro zjišťovací řízení při modernizaci chovu skotu včetně kapacity a vlivů na okolí.",
    tags: ["EIA", "KÚ"],
    href: "/sluzby/zjistovaci-rizeni-eia",
    contactService: "EIA a oznámení záměru",
    cta: "Poptat měření / studii"
  }
] as const;
