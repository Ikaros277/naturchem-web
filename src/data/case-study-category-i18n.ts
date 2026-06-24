import type { CaseStudyCategoryId } from "./case-study-builder";

export const CASE_STUDY_CATEGORY_LABELS_EN: Record<CaseStudyCategoryId, string> = {
  "mereni-emisi": "Emission measurements",
  "pracovni-prostredi": "Workplace environment",
  "hluk-vibrace": "Noise and vibration",
  "rozptylove-studie": "Dispersion studies",
  "hlukove-studie": "Noise studies",
  "eia-jes": "EIA/SEA",
  "odborne-posudky": "Expert assessments",
  "provozni-rady": "Operating manuals",
  "ispop-evidence": "ISPOP and records",
  "specificke-technologie": "Specific technologies"
};

export const CASE_STUDY_CATEGORY_LABELS_DE: Record<CaseStudyCategoryId, string> = {
  "mereni-emisi": "Emissionsmessungen",
  "pracovni-prostredi": "Arbeitsumfeld",
  "hluk-vibrace": "Lärm und Vibration",
  "rozptylove-studie": "Ausbreitungsstudien",
  "hlukove-studie": "Lärmstudien",
  "eia-jes": "UVP/UVS",
  "odborne-posudky": "Fachgutachten",
  "provozni-rady": "Betriebsanleitungen",
  "ispop-evidence": "ISPOP und Nachweise",
  "specificke-technologie": "Spezielle Technologien"
};

export const CASE_STUDY_CATEGORIES_EN = Object.entries(CASE_STUDY_CATEGORY_LABELS_EN).map(
  ([id, label]) => ({ id: id as CaseStudyCategoryId, label })
);

export const CASE_STUDY_CATEGORIES_DE = Object.entries(CASE_STUDY_CATEGORY_LABELS_DE).map(
  ([id, label]) => ({ id: id as CaseStudyCategoryId, label })
);
