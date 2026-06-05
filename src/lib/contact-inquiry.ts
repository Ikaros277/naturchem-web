import type { ContactServiceOption } from "@/lib/contact-services";

export const INQUIRY_CATEGORIES = [
  { id: "mereni", label: "Měření" },
  { id: "studie", label: "Studie / posudek" },
  { id: "eia", label: "Úřad, povolení nebo EIA" },
  { id: "skoleni", label: "Školení" },
  { id: "nevim", label: "Ještě nevím — chci poradit" }
] as const;

export type InquiryCategoryId = (typeof INQUIRY_CATEGORIES)[number]["id"];

export const INQUIRY_CATEGORY_LABELS: Record<InquiryCategoryId, string> = {
  mereni: "Měření",
  studie: "Studie / posudek",
  eia: "Úřad, povolení nebo EIA",
  skoleni: "Školení",
  nevim: "Ještě nevím — chci poradit"
};

const MEASUREMENT_SERVICES = new Set<ContactServiceOption>([
  "Měření emisí",
  "Měření pracovního prostředí",
  "Měření hluku a akustika"
]);

const STUDY_SERVICES = new Set<ContactServiceOption>([
  "Rozptylové studie",
  "Hlukové studie",
  "Odborné posudky",
  "Provozní řády",
  "Odborný posudek a provozní řád"
]);

const EIA_SERVICES = new Set<ContactServiceOption>([
  "EIA a oznámení záměru",
  "EIA, posudky a poradenství",
  "IPPC a integrovaná povolení",
  "ISPOP",
  "GHG",
  "ISPOP a GHG"
]);

const TRAINING_SERVICES = new Set<ContactServiceOption>([
  "Školení chemického zákona / chemické legislativy",
  "Bezpečnostní listy",
  "Chemické látky v provozu"
]);

export function serviceToInquiryCategory(service: ContactServiceOption): InquiryCategoryId {
  if (service === "Nejsem si jistý") return "nevim";
  if (MEASUREMENT_SERVICES.has(service)) return "mereni";
  if (STUDY_SERVICES.has(service)) return "studie";
  if (EIA_SERVICES.has(service)) return "eia";
  if (TRAINING_SERVICES.has(service)) return "skoleni";
  return "nevim";
}

export function resolveInquiryCategory(services: ContactServiceOption[]): InquiryCategoryId {
  if (services.length === 0) return "nevim";
  if (services.includes("Nejsem si jistý")) return "nevim";

  const categories = new Set(services.map(serviceToInquiryCategory));
  if (categories.size === 1) return [...categories][0];
  return "nevim";
}

export function isInquiryCategoryId(value: string): value is InquiryCategoryId {
  return (INQUIRY_CATEGORIES as readonly { id: string }[]).some((item) => item.id === value);
}
