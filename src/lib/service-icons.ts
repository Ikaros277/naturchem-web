/** Klíče ikon (SVG ve stylu Lucide, MIT) mapované na služby a sekce. */
export type ServiceIconKey =
  | "emise"
  | "pracovni-prostredi"
  | "hluk"
  | "vibrace"
  | "osvetleni"
  | "mikroklima"
  | "rozptyl"
  | "hlukova-studie"
  | "akustika"
  | "model"
  | "imis-hluk"
  | "posudek"
  | "provozni-rad"
  | "povoleni"
  | "ippc"
  | "eia"
  | "zjistovaci-eia"
  | "investor"
  | "ispop"
  | "ghg"
  | "chemie"
  | "skoleni"
  | "bezpecnostni-listy"
  | "pillar-mereni"
  | "pillar-studie"
  | "pillar-dokumentace"
  | "audience-prumysl"
  | "audience-energetika"
  | "audience-investor"
  | "audience-odpady"
  | "audience-verejny"
  | "audience-budovy"
  | "process-posouzeni"
  | "process-rozsah"
  | "process-zpracovani"
  | "process-vystup"
  | "contact-building"
  | "contact-user"
  | "contact-phone"
  | "contact-mail"
  | "contact-map-pin"
  | "faq"
  | "default";

const hrefToIcon: Record<string, ServiceIconKey> = {
  "/sluzby/mereni-emisi": "emise",
  "/sluzby/pracovni-prostredi": "pracovni-prostredi",
  "/sluzby/mereni-hluku": "hluk",
  "/sluzby/mereni-vibraci": "vibrace",
  "/sluzby/mereni-osvetleni": "osvetleni",
  "/sluzby/mereni-mikroklimatu": "mikroklima",
  "/sluzby/mereni-tepelna-chladova-zatez": "mikroklima",
  "/sluzby/mereni-diisokyanatu": "chemie",
  "/sluzby/rozptylove-studie": "rozptyl",
  "/sluzby/hlukove-studie": "hlukova-studie",
  "/sluzby/akusticke-posudky": "akustika",
  "/sluzby/modelove-vypocty": "model",
  "/sluzby/imisni-dopady": "imis-hluk",
  "/sluzby/odborne-posudky": "posudek",
  "/sluzby/provozni-rady": "provozni-rad",
  "/sluzby/povoleni-provozu": "povoleni",
  "/sluzby/ippc-integrovana-povoleni": "ippc",
  "/sluzby/eia-oznameni-zameru": "eia",
  "/sluzby/zjistovaci-rizeni-eia": "zjistovaci-eia",
  "/sluzby/technicke-prilohy": "investor",
  "/sluzby/ispop": "ispop",
  "/sluzby/ghg-overovani": "ghg",
  "/sluzby/chemicke-latky": "chemie",
  "/sluzby/skoleni-chemicke-legislativy": "skoleni",
  "/sluzby/bezpecnostni-listy": "bezpecnostni-listy",
  "/sluzby/eia-posudky-poradenstvi": "pillar-dokumentace",
  "/provozy-a-technologie/kotelny": "emise",
  "/provozy-a-technologie/bioplyn-biometan": "audience-energetika",
  "/provozy-a-technologie/zemedelske-provozy": "audience-prumysl",
  "/provozy-a-technologie/lakovny": "emise",
  "/provozy-a-technologie/drevozpracujici": "audience-prumysl",
  "/provozy-a-technologie/odpady-recyklace": "audience-odpady",
  "/provozy-a-technologie/automotive": "audience-prumysl",
  "/provozy-a-technologie/svarovny": "pracovni-prostredi",
  "/provozy-a-technologie/sklarstvi": "emise",
  "/provozy-a-technologie/tepelna-cerpadla-vzt": "hluk",
  "/typicke-zakazky": "process-posouzeni",
  "/reference": "audience-prumysl",
  "/poradna": "posudek",
  "/faq": "faq",
  "/o-spolecnosti-naturchem": "contact-building",
  "/akreditace-autorizace-dokumenty": "povoleni",
  "/pristrojove-vybaveni": "process-zpracovani"
};

export function getServiceIconKey(href: string): ServiceIconKey {
  const path = href.split("#")[0].replace(/\/$/, "") || "/";
  return hrefToIcon[path] ?? "default";
}

const referenceSegmentToIcon: Record<string, ServiceIconKey> = {
  "Průmysl a automobilová výroba": "audience-prumysl",
  "Energetika, kotelny a kogenerace": "audience-energetika",
  "Energetika a spalovací zdroje": "audience-energetika",
  "Lakovny a povrchové úpravy": "emise",
  "Zemědělství a bioplyn": "audience-energetika",
  "Odpady, recyklace a skládky": "audience-odpady",
  "Stavebnictví a infrastruktura": "audience-budovy",
  "Veřejný sektor a zdravotnictví": "audience-verejny",
  "Veřejný sektor a instituce": "audience-verejny",
  "Projektanti, investoři a EIA": "audience-investor",
  "Projektanti, investoři a poradenské společnosti": "audience-investor"
};

export function getReferenceSegmentIconKey(title: string): ServiceIconKey {
  return referenceSegmentToIcon[title] ?? "default";
}

const poradnaTopicToIcon: Record<string, ServiceIconKey> = {
  Emise: "emise",
  "Rozptylové studie": "rozptyl",
  "Hluk a vibrace": "hluk",
  "Pracovní prostředí": "pracovni-prostredi",
  "Prašnost a deponie": "emise",
  "EIA a povolování": "pillar-dokumentace",
  "KHS, ČIŽP a úřady": "posudek",
  "Provozní praxe pro ekology": "pillar-dokumentace",
  Legislativa: "posudek",
  "Chemická legislativa": "skoleni"
};

export function getPoradnaTopicIconKey(topic: string): ServiceIconKey {
  return poradnaTopicToIcon[topic] ?? "default";
}

const accreditationScopeToIcon: Record<string, ServiceIconKey> = {
  "Emise ze stacionárních zdrojů": "emise",
  "Pracovní a vnitřní ovzduší": "pracovni-prostredi",
  Mikroklima: "mikroklima",
  Osvětlení: "osvetleni",
  Vibrace: "vibrace",
  Hluk: "hluk"
};

export function getAccreditationScopeIconKey(title: string): ServiceIconKey {
  return accreditationScopeToIcon[title] ?? "default";
}

const authorizationToIcon: Record<string, ServiceIconKey> = {
  EIA: "eia",
  "Rozptylové studie": "rozptyl",
  "Odborné posudky": "posudek",
  "Skleníkové plyny": "ghg"
};

export function getAuthorizationIconKey(title: string): ServiceIconKey {
  return authorizationToIcon[title] ?? "default";
}

const equipmentIdToIcon: Record<string, ServiceIconKey> = {
  emise: "emise",
  "pracovni-prostredi": "pracovni-prostredi",
  hluk: "hluk",
  osvetleni: "osvetleni",
  laborator: "process-zpracovani"
};

/** @deprecated Prefer getEquipmentGroupIconKeyById */
const equipmentGroupToIcon: Record<string, ServiceIconKey> = {
  "Měření emisí a odběry ze stacionárních zdrojů": "emise",
  "Emise a odběry ze stacionárních zdrojů": "emise",
  "Pracovní prostředí, odběry a mikroklima": "pracovni-prostredi",
  "Pracovní prostředí a mikroklima": "pracovni-prostredi",
  "Hluk, vibrace a akustika": "hluk",
  "Osvětlení a fyzikální faktory": "osvetleni",
  "Laboratorní a podpůrné zázemí": "process-zpracovani"
};

export function getEquipmentGroupIconKeyById(groupId: string): ServiceIconKey {
  return equipmentIdToIcon[groupId] ?? "default";
}

export function getEquipmentGroupIconKey(title: string): ServiceIconKey {
  return equipmentGroupToIcon[title] ?? "default";
}

const detailGroupToIcon: Record<string, ServiceIconKey> = {
  "Příklady zakázek z praxe": "process-zpracovani",
  "Typické chyby a rizika": "process-posouzeni"
};

export function getDetailGroupIconKey(title: string): ServiceIconKey {
  return detailGroupToIcon[title] ?? "default";
}

const faqCategoryToIcon: Record<string, ServiceIconKey> = {
  obecne: "faq",
  emise: "emise",
  "pracovni-prostredi": "pracovni-prostredi",
  hluk: "hluk",
  studie: "pillar-studie",
  eia: "eia",
  ispop: "ispop",
  poptavka: "process-vystup"
};

export function getFaqCategoryIconKey(categoryId: string): ServiceIconKey {
  return faqCategoryToIcon[categoryId] ?? "default";
}

const contactAttachmentToIcon: Record<string, ServiceIconKey> = {
  "požadavek, výzvu nebo rozhodnutí úřadu": "pillar-dokumentace",
  "projektovou dokumentaci nebo popis technologie": "process-posouzeni",
  "fotografie provozu, výduchu nebo pracoviště": "process-zpracovani",
  "provozní řád, povolení nebo lokalitu záměru": "provozni-rad"
};

export function getContactAttachmentIconKey(item: string): ServiceIconKey {
  return contactAttachmentToIcon[item] ?? "default";
}

const aboutWorkStepIcons: ServiceIconKey[] = [
  "process-posouzeni",
  "process-rozsah",
  "process-zpracovani",
  "process-vystup"
];

export function getAboutWorkStepIconKey(index: number): ServiceIconKey {
  return aboutWorkStepIcons[index] ?? "default";
}

const salesInquiryStepIcons: ServiceIconKey[] = [
  "process-posouzeni",
  "process-rozsah",
  "process-vystup"
];

export function getSalesInquiryStepIconKey(index: number): ServiceIconKey {
  return salesInquiryStepIcons[index] ?? "default";
}

/** Ikony u rychlých poptávkových cest na /kontakt (podle hodnoty service ve formuláři). */
const contactServiceToIcon: Record<string, ServiceIconKey> = {
  "Měření emisí": "emise",
  "Měření pracovního prostředí": "pracovni-prostredi",
  "Měření hluku a akustika": "hluk",
  "Rozptylové studie": "rozptyl",
  "EIA a oznámení záměru": "pillar-dokumentace",
  "Školení chemického zákona / chemické legislativy": "skoleni",
  "Nejsem si jistý": "process-posouzeni"
};

export function getContactServiceIconKey(service: string): ServiceIconKey {
  return contactServiceToIcon[service] ?? "default";
}
