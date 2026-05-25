/**
 * Typy poptávky ve formuláři (canonical).
 * Zastaralá hodnota „EIA, posudky a poradenství“ se stále přijímá z URL a starých odkazů.
 */
export const CONTACT_SERVICE_OPTIONS = [
  "Měření emisí",
  "Měření pracovního prostředí",
  "Měření hluku a akustika",
  "Rozptylové studie",
  "Hlukové studie",
  "EIA a oznámení záměru",
  "Odborné posudky",
  "Provozní řády",
  "IPPC a integrovaná povolení",
  "ISPOP",
  "GHG",
  "Školení chemického zákona / chemické legislativy",
  "Bezpečnostní listy",
  "Chemické látky v provozu",
  "Nejsem si jistý"
] as const;

/** Pouze canonical — pro vykreslení formulářových voleb (bez zastaralých aliasů). */
export const CONTACT_SERVICE_OPTIONS_UI = CONTACT_SERVICE_OPTIONS;

const LEGACY_EIA_UMBRELLA = "EIA, posudky a poradenství" as const;
const LEGACY_POSUDEK_PROVOZNI_RAD = "Odborný posudek a provozní řád" as const;
const LEGACY_ISPOP_GHG = "ISPOP a GHG" as const;

export type ContactServiceOption =
  | (typeof CONTACT_SERVICE_OPTIONS)[number]
  | typeof LEGACY_EIA_UMBRELLA
  | typeof LEGACY_POSUDEK_PROVOZNI_RAD
  | typeof LEGACY_ISPOP_GHG;

export function isValidContactService(value: string): value is ContactServiceOption {
  if (value === LEGACY_EIA_UMBRELLA) return true;
  if (value === LEGACY_POSUDEK_PROVOZNI_RAD) return true;
  if (value === LEGACY_ISPOP_GHG) return true;
  return (CONTACT_SERVICE_OPTIONS as readonly string[]).includes(value);
}

/** Mapování názvů ze stránek služeb na hodnoty ve formuláři. */
const RELATED_SERVICE_MAP: Record<string, ContactServiceOption> = {
  "Měření emisí": "Měření emisí",
  "Měření pracovního prostředí": "Měření pracovního prostředí",
  "Měření hluku a akustika": "Měření hluku a akustika",
  "Hlukové studie": "Hlukové studie",
  "Rozptylové studie": "Rozptylové studie",
  "EIA, posudky a IPPC": "EIA a oznámení záměru",
  "EIA, posudky a poradenství": "EIA a oznámení záměru",
  "EIA, posudky, provozní řády a IPPC": "EIA a oznámení záměru",
  "Odborné posudky": "Odborné posudky",
  "Odborný posudek a provozní řád": "Odborné posudky",
  "Provozní řády": "Provozní řády",
  IPPC: "IPPC a integrovaná povolení",
  ISPOP: "ISPOP",
  GHG: "GHG",
  "ISPOP a GHG": "ISPOP",
  "Bezpečnostní listy": "Bezpečnostní listy",
  "Chemické látky v provozu": "Chemické látky v provozu",
  "Měření vibrací": "Měření pracovního prostředí",
  "Měření osvětlení": "Měření pracovního prostředí",
  "Měření mikroklimatu": "Měření pracovního prostředí",
  "Akustické posudky": "Měření hluku a akustika",
  "Modelové výpočty": "Rozptylové studie",
  "Imisní a hlukové dopady záměrů": "Rozptylové studie",
  "Povolení provozu zdroje": "Odborné posudky",
  "Zjišťovací řízení EIA": "EIA a oznámení záměru",
  "Technické přílohy pro investory": "EIA a oznámení záměru",
  "Školení chemické legislativy": "Školení chemického zákona / chemické legislativy",
  "Školení chemického zákona a chemické legislativy":
    "Školení chemického zákona / chemické legislativy"
};

export function relatedServiceToContact(relatedTitle: string): ContactServiceOption | null {
  return RELATED_SERVICE_MAP[relatedTitle] ?? (isValidContactService(relatedTitle) ? relatedTitle : null);
}

/** Předvolba služeb podle názvu provozu (SectorPage). */
const SECTOR_SERVICE_PRESETS: Record<string, ContactServiceOption[]> = {
  Lakovny: ["Měření emisí", "Měření pracovního prostředí"],
  "Kotelny a spalovací zdroje": ["Měření emisí"],
  Kotelny: ["Měření emisí"],
  "Bioplyn a biometan": ["Měření emisí", "Rozptylové studie", "EIA a oznámení záměru"],
  "Zemědělské provozy a sušárny": ["Měření emisí", "Měření pracovního prostředí"],
  "Dřevozpracující provozy": ["Měření emisí", "Měření pracovního prostředí"],
  "Odpady a recyklace": ["Rozptylové studie", "EIA a oznámení záměru"],
  "Automotive a technické textilie": [
    "Měření emisí",
    "Měření pracovního prostředí",
    "Měření hluku a akustika"
  ],
  Svařovny: ["Měření pracovního prostředí", "Měření emisí"],
  "Sklářské provozy": ["Měření emisí", "Rozptylové studie", "EIA a oznámení záměru"],
  "Tepelná čerpadla a VZT": ["Měření hluku a akustika", "Hlukové studie"]
};

export function resolveContactServices(
  serviceParam: string,
  sectorParam: string,
  extraFromQuery: string[]
): ContactServiceOption[] {
  const unique = new Set<ContactServiceOption>();

  if (sectorParam) {
    const preset = SECTOR_SERVICE_PRESETS[sectorParam];
    if (preset) preset.forEach((s) => unique.add(s));
  }

  if (serviceParam && isValidContactService(serviceParam)) {
    unique.add(serviceParam);
  } else if (serviceParam && !sectorParam) {
    const legacyPreset = SECTOR_SERVICE_PRESETS[serviceParam];
    if (legacyPreset) {
      legacyPreset.forEach((s) => unique.add(s));
    }
  }

  extraFromQuery.filter(isValidContactService).forEach((s) => unique.add(s));

  return [...unique];
}

export function sectorContactMessage(sectorTitle: string): string {
  return `Poptávka k provozu: ${sectorTitle}`;
}
