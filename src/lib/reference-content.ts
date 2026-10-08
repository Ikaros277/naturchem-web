/** Obsah stránky Reference — oblasti, segmenty a anonymizované příklady zakázek. */

import { archivedPractice } from "@/lib/archived-practice";

export type ReferenceArea = {
  title: string;
  description: string;
  contactService: string;
  imageSrc: string;
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
  documented?: boolean;
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
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/automotive.webp"
  },
  {
    title: "Energetika, kotelny a kogenerace",
    description:
      "Měření emisí kotelen a kogeneračních jednotek, rozptylové studie, povolení provozu, ISPOP a provozní řády.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/kotelny.webp"
  },
  {
    title: "Lakovny a povrchové úpravy",
    description:
      "Měření VOC/TOC a TZL, nové výduchy, EIA, rozptylové studie a podklady pro povolení provozu lakovacích technologií.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/lakovny.webp"
  },
  {
    title: "Zemědělství a bioplyn",
    description:
      "Měření emisí BPS, EIA a zjišťovací řízení, rozptylové studie, provozní řády a podklady pro zemědělské areály.",
    contactService: "Rozptylové studie",
    imageSrc: "/hero/provozy/bioplyn-biometan.webp"
  },
  {
    title: "Odpady, recyklace a skládky",
    description:
      "Rozptylové a hlukové studie, odborné posudky, EIA, provozní řády a kapacitní změny odpadových zařízení.",
    contactService: "Rozptylové studie",
    imageSrc: "/hero/provozy/odpady-recyklace.webp"
  },
  {
    title: "Stavebnictví a infrastruktura",
    description:
      "Hlukové studie, měření hluku pro kolaudace, posouzení VZT a technologií, podklady pro investiční záměry.",
    contactService: "Měření hluku a akustika",
    imageSrc: "/hero/provozy/stavebni-zamery.webp"
  },
  {
    title: "Veřejný sektor a zdravotnictví",
    description:
      "Hlukové a rozptylové posouzení, měření pracovního prostředí, podklady pro veřejné stavby a provozy.",
    contactService: "Měření hluku a akustika",
    imageSrc: "/hero/provozy/verejne-budovy.webp"
  },
  {
    title: "Projektanti, investoři a EIA",
    description:
      "Koordinace měření, studií a technických příloh pro EIA, povolení provozu a komunikaci s úřady.",
    contactService: "EIA a oznámení záměru",
    imageSrc: "/hero/provozy/odborne-posudky-povoleni.webp"
  }
] as const;

/** Existing reference IDs are preserved; archived cases below have checked work products. */
export const referenceExamples: readonly ReferenceExample[] = [
  {
    id: "lak-automotive-emise",
    title: "Lakovací boxy — měření emisí TOC",
    operationType: "mokrá lakovna průmyslových dílů",
    scope: "měření TOC a vzduchotechnických parametrů pěti výduchů lakovacích boxů",
    output: "Protokol z měření emisí pěti lakovacích boxů.",
    text: "Změřili jsme emise na pěti výduších mokré lakovny. Protokol obsahuje výsledky TOC a vzduchotechnické parametry jednotlivých výduchů.",
    tags: ["Emise", "TOC", "Lakovna"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat podobnou zakázku",
    documented: true
  },
  {
    id: "bps-emise",
    title: "Bioplynová stanice — emise kogenerace",
    operationType: "BPS / kogenerační jednotka",
    scope: "měření emisí jedné kogenerační jednotky při ustáleném provozu",
    output: "Protokol z měření emisí kogenerační jednotky.",
    text: "Změřili jsme emise jedné kogenerační jednotky bioplynové stanice při ustáleném provozu. Výsledky jsme zpracovali v protokolu z měření emisí.",
    tags: ["Emise", "Kogenerace"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat měření / studii",
    documented: true
  },
  {
    id: "bps-serie-emise",
    title: "Bioplynová stanice — dvě kogenerační jednotky",
    operationType: "BPS se dvěma kogeneračními jednotkami",
    scope: "měření emisí dvou kogeneračních jednotek v jedné bioplynové stanici",
    output: "Protokol z měření emisí obou kogeneračních jednotek.",
    text: "Změřili jsme emise dvou kogeneračních jednotek bioplynové stanice. Výsledky pro oba zdroje jsme zpracovali v jednom protokolu.",
    tags: ["Emise", "Bioplyn"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat podobnou zakázku",
    documented: true
  },
  {
    id: "plyn-kotelna-emise",
    title: "Centrální kotelna — emise z biomasy",
    operationType: "centrální kotelna se dvěma kotli na biomasu",
    scope: "měření emisí dvou kotlů spalujících dřevní biomasu",
    output: "Protokol z měření emisí obou kotlů na biomasu.",
    text: "Změřili jsme emise dvou kotlů na dřevní biomasu v centrální kotelně. Protokol obsahuje výsledky pro oba kotle.",
    tags: ["Emise", "Biomasa"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Poptat měření / studii",
    documented: true
  },
  {
    id: "hala-pp",
    title: "Automobilová výroba — pracovní prostředí",
    operationType: "výrobní závod s montážními linkami, slévárnou a údržbou forem",
    scope: "hluk, mikroklimatické podmínky a organické látky na vybraných pracovištích",
    output: "Samostatné protokoly z měření hluku, mikroklimatu a pracovního ovzduší.",
    text: "V automobilové výrobě jsme změřili hluk na pracovních pozicích, mikroklimatické podmínky a organické látky. Výstupy jsme zpracovali v samostatných protokolech.",
    tags: ["Pracovní prostředí", "Mikroklima", "Hluk"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Poptat podobnou zakázku",
    documented: true
  },
  {
    id: "svarovna-pp",
    title: "Svařovna — hluk na pracovní pozici",
    operationType: "svařovna / zámečnický provoz",
    scope: "měření hluku na pracovní pozici svářeč",
    output: "Protokol z měření a hodnocení hluku pro kategorizaci prací.",
    text: "Změřili jsme hluk na pracovní pozici svářeče v kovovýrobě. Výsledky jsme zpracovali v protokolu pro účely kategorizace prací.",
    tags: ["Hluk", "Kategorizace prací"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Poptat podobnou zakázku",
    documented: true
  },
  {
    id: "tcp-hluk",
    title: "Tepelné čerpadlo — hluk v okolí",
    operationType: "technické zařízení budovy",
    scope: "venkovní hluk v chráněném prostoru",
    output: "Protokol z měření a hodnocení hluku venkovní jednotky.",
    text: "Změřili jsme hluk při provozu venkovní jednotky tepelného čerpadla v chráněném venkovním prostoru. Výsledky a hodnocení jsme zpracovali v protokolu.",
    tags: ["Hluk", "KHS"],
    href: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    cta: "Poptat měření / studii",
    documented: true
  },
  {
    id: "kovovyroba-vibrace",
    title: "Kovovýroba — vibrace přenášené na ruce",
    operationType: "kovovýroba s ručním motorovým nářadím",
    scope: "měření vibrací přenášených na ruce při práci s ručním nářadím",
    output: "Protokol z měření a hodnocení vibrací pro kategorizaci prací.",
    text: "Změřili jsme vibrace přenášené na ruce při práci s ručním nářadím v kovovýrobě. Výsledky a pracovní činnosti jsme zpracovali v protokolu pro kategorizaci prací.",
    tags: ["Vibrace", "Kategorizace prací"],
    href: "/sluzby/mereni-vibraci",
    contactService: "Měření vibrací",
    cta: "Poptat podobnou zakázku",
    documented: true
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
    contactService: "Hlukové studie",
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
  },
  ...Object.values(archivedPractice).map((item): ReferenceExample => ({
    id: item.id, title: item.title, operationType: item.operationType,
    scope: item.title, output: item.output, text: item.summary, tags: item.tags,
    href: "/sluzby/" + item.slug, contactService: item.contactService,
    cta: "Poslat podklady k posouzení", documented: true
  }))
] as const;
