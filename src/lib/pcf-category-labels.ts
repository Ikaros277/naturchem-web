import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

const categoryLabels: Record<Locale, Record<string, string>> = {
  cs: {
    "air-quality-analyzers": "Analyzátory kvality ovzduší",
    "emission-monitors": "Emisní monitory",
    "gc-process-analyzers": "Procesní GC analyzátory",
    "portable-monitors": "Přenosné monitory",
    "detectors-fid-pid-tcd": "Detektory FID, PID, TCD",
    accessories: "Příslušenství"
  },
  en: {
    "air-quality-analyzers": "Air Quality Analyzers",
    "emission-monitors": "Emission Monitors",
    "gc-process-analyzers": "GC Process Analyzers",
    "portable-monitors": "Portable Monitors",
    "detectors-fid-pid-tcd": "Our Detectors: FID, PID, TCD",
    accessories: "Accessories"
  },
  de: {
    "air-quality-analyzers": "Luftqualitätsanalysatoren",
    "emission-monitors": "Emissionsmonitore",
    "gc-process-analyzers": "GC-Prozessanalysatoren",
    "portable-monitors": "Tragbare Monitore",
    "detectors-fid-pid-tcd": "Detektoren FID, PID, TCD",
    accessories: "Zubehör"
  }
};

export function getPcfCategoryLabel(categoryId: string | undefined, locale: Locale, fallback: string) {
  if (!categoryId) return fallback;
  return pickLocale(locale, categoryLabels)[categoryId] ?? fallback;
}
