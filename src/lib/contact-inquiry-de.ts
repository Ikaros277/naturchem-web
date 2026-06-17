import type { InquiryCategoryId } from "@/lib/contact-inquiry";

export const INQUIRY_CATEGORIES = [
  { id: "mereni", label: "Messungen" },
  { id: "studie", label: "Studien / Gutachten" },
  { id: "eia", label: "Behörde, Genehmigung oder UVP" },
  { id: "skoleni", label: "Ausbildung" },
  { id: "nevim", label: "Ich bin mir noch nicht sicher – ich brauche Rat" }
] as const;

export const INQUIRY_CATEGORY_LABELS: Record<InquiryCategoryId, string> = {
  mereni: "Messungen",
  studie: "Studien / Gutachten",
  eia: "Behörde, Genehmigung oder UVP",
  skoleni: "Ausbildung",
  nevim: "Ich bin mir noch nicht sicher – ich brauche Rat"
};
