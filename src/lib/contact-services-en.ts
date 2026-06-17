/**
 * English display labels for contact form service options.
 * Canonical values remain Czech in contact-services.ts for API and URL compatibility.
 */
import type { ContactServiceOption } from "@/lib/contact-services";

export const CONTACT_SERVICE_OPTIONS = [
  "Emission measurements",
  "Workplace environment measurements",
  "Noise measurement and acoustics",
  "Dispersion studies",
  "Noise studies",
  "EIA and notification of intent",
  "Expert reports",
  "Operating rules",
  "IPPC and integrated permits",
  "ISPOP",
  "GHG",
  "Chemical legislation training",
  "Safety data sheets",
  "Chemical substances in operations",
  "I'm not sure"
] as const;

export const CONTACT_SERVICE_OPTIONS_UI = CONTACT_SERVICE_OPTIONS;

export const CONTACT_SERVICE_LABELS_EN: Record<ContactServiceOption, string> = {
  "Měření emisí": "Emission measurements",
  "Měření pracovního prostředí": "Workplace environment measurements",
  "Měření hluku a akustika": "Noise measurement and acoustics",
  "Rozptylové studie": "Dispersion studies",
  "Hlukové studie": "Noise studies",
  "EIA a oznámení záměru": "EIA and notification of intent",
  "Odborné posudky": "Expert reports",
  "Provozní řády": "Operating rules",
  "IPPC a integrovaná povolení": "IPPC and integrated permits",
  ISPOP: "ISPOP",
  GHG: "GHG",
  "Školení chemického zákona / chemické legislativy": "Chemical legislation training",
  "Bezpečnostní listy": "Safety data sheets",
  "Chemické látky v provozu": "Chemical substances in operations",
  "Nejsem si jistý": "I'm not sure",
  "EIA, posudky a poradenství": "EIA and notification of intent",
  "Odborný posudek a provozní řád": "Expert reports",
  "ISPOP a GHG": "ISPOP"
};

export function sectorContactMessage(sectorTitle: string): string {
  return `Inquiry regarding facility: ${sectorTitle}`;
}
