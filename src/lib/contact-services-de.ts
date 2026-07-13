/**
 * German display labels for contact form service options.
 * Canonical values remain Czech in contact-services.ts for API and URL compatibility.
 */
import type { ContactServiceOption } from "@/lib/contact-services";

export const CONTACT_SERVICE_OPTIONS = [
  "Emissionsmessungen",
  "Messungen der Arbeitsplatzumgebung",
  "Lärmmessung und Akustik",
  "Ausbreitungsstudien",
  "Lärmstudien",
  "UVP und Absichtserklärung",
  "Gutachten",
  "Betriebsregeln",
  "IPPC und integrierte Genehmigungen",
  "ISPOP",
  "Treibhausgas",
  "Schulung zum Chemikalienrecht",
  "Sicherheitsdatenblätter",
  "Chemische Substanzen im Betrieb",
  "Ich bin mir nicht sicher"
] as const;

export const CONTACT_SERVICE_OPTIONS_UI = CONTACT_SERVICE_OPTIONS;

export const CONTACT_SERVICE_LABELS_DE: Record<ContactServiceOption, string> = {
  "Měření emisí": "Emissionsmessungen",
  "Měření pracovního prostředí": "Messungen der Arbeitsplatzumgebung",
  "Měření hluku a akustika": "Lärmmessung und Akustik",
  "Rozptylové studie": "Ausbreitungsstudien",
  "Hlukové studie": "Lärmstudien",
  "EIA a oznámení záměru": "UVP und Absichtserklärung",
  "Odborné posudky": "Gutachten",
  "Provozní řády": "Betriebsregeln",
  "IPPC a integrovaná povolení": "IPPC und integrierte Genehmigungen",
  ISPOP: "ISPOP",
  GHG: "Treibhausgas",
  "Školení chemického zákona / chemické legislativy": "Schulung zum Chemikalienrecht",
  "Bezpečnostní listy": "Sicherheitsdatenblätter",
  "Chemické látky v provozu": "Chemische Substanzen im Betrieb",
  "Nejsem si jistý": "Ich bin mir nicht sicher",
  "EIA, posudky a poradenství": "UVP und Absichtserklärung",
  "Odborný posudek a provozní řád": "Gutachten",
  "ISPOP a GHG": "ISPOP und Treibhausgase",
};

export function sectorContactMessage(sectorTitle: string): string {
  return `Anfrage zum Betrieb: ${sectorTitle}`;
}
