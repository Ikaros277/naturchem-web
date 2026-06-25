import type { ServiceCategory } from "@/lib/service-categories";
import type { Locale } from "@/lib/i18n/locales";

const labels: Record<Locale, Record<ServiceCategory, string>> = {
  cs: {
    measurement: "Měření",
    studies: "Studie a výpočty",
    docs: "Dokumentace a povolení"
  },
  en: {
    measurement: "Measurements",
    studies: "Studies and calculations",
    docs: "Documentation and permits"
  },
  de: {
    measurement: "Messungen",
    studies: "Studien und Berechnungen",
    docs: "Dokumentation und Genehmigungen"
  }
};

export function getServiceCategoryLabel(locale: Locale, category: ServiceCategory): string {
  return labels[locale][category];
}
