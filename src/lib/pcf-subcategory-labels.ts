import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

const subcategoryLabels: Record<Locale, Record<string, string>> = {
  cs: {
    "Sampling probes": "Odběrové sondy",
    "Sampling lines": "Odběrové linky",
    "Cylinder basket": "Koše na lahve",
    "Zero-air generators": "Generátory nulového vzduchu",
    Calibrators: "Kalibrátory",
    "Multi-line modules": "Víceřádkové moduly"
  },
  en: {
    "Sampling probes": "Sampling probes",
    "Sampling lines": "Sampling lines",
    "Cylinder basket": "Cylinder baskets",
    "Zero-air generators": "Zero-air generators",
    Calibrators: "Calibrators",
    "Multi-line modules": "Multi-line modules"
  },
  de: {
    "Sampling probes": "Probenahmesonden",
    "Sampling lines": "Probenahmeleitungen",
    "Cylinder basket": "Flaschenkörbe",
    "Zero-air generators": "Nullluftgeneratoren",
    Calibrators: "Kalibratoren",
    "Multi-line modules": "Mehrleitungsmodule"
  }
};

export function getPcfSubcategoryLabel(subcategory: string | undefined, locale: Locale): string | undefined {
  if (!subcategory) return undefined;
  return pickLocale(locale, subcategoryLabels)[subcategory] ?? subcategory;
}
