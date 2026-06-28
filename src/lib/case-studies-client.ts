import type { CaseStudy } from "@/lib/case-studies";
import type { Locale } from "@/lib/i18n/locales";

async function loadCaseStudies(locale: Locale): Promise<CaseStudy[]> {
  switch (locale) {
    case "en":
      return (await import("@/lib/case-studies-en")).caseStudies;
    case "de":
      return (await import("@/lib/case-studies-de")).caseStudies;
    default:
      return (await import("@/lib/case-studies")).caseStudies;
  }
}

export async function getCaseStudyById(
  id: string,
  locale: Locale
): Promise<CaseStudy | undefined> {
  const studies = await loadCaseStudies(locale);
  return studies.find((study) => study.id === id);
}
