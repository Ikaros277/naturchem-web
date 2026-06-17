import type { InquiryCategoryId } from "@/lib/contact-inquiry";

export const INQUIRY_CATEGORIES = [
  { id: "mereni", label: "Measurements" },
  { id: "studie", label: "Studies / expert report" },
  { id: "eia", label: "Authority, permitting or EIA" },
  { id: "skoleni", label: "Training" },
  { id: "nevim", label: "Not sure yet — I need advice" }
] as const;

export const INQUIRY_CATEGORY_LABELS: Record<InquiryCategoryId, string> = {
  mereni: "Measurements",
  studie: "Studies / expert report",
  eia: "Authority, permitting or EIA",
  skoleni: "Training",
  nevim: "Not sure yet — I need advice"
};
