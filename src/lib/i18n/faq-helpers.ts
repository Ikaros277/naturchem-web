import type { Locale } from "@/lib/i18n/locales";
import type { FaqCategory, FaqItem } from "@/lib/faq";

export async function getFaqCategoryForLocale(
  id: string,
  locale: Locale
): Promise<FaqCategory | undefined> {
  if (locale === "de") {
    const { getFaqCategoryEn } = await import("@/lib/faq-de");
    return getFaqCategoryEn(id);
  }
  if (locale === "en") {
    const { getFaqCategoryEn } = await import("@/lib/faq-en");
    return getFaqCategoryEn(id);
  }
  const { getFaqCategory } = await import("@/lib/faq");
  return getFaqCategory(id);
}

export async function getFaqTeaserItemsForLocale(
  categoryId: string,
  locale: Locale,
  limit = 5
): Promise<FaqItem[]> {
  if (locale === "de") {
    const { getFaqTeaserItemsEn } = await import("@/lib/faq-de");
    return getFaqTeaserItemsEn(categoryId, limit);
  }
  if (locale === "en") {
    const { getFaqTeaserItemsEn } = await import("@/lib/faq-en");
    return getFaqTeaserItemsEn(categoryId, limit);
  }
  const { getFaqTeaserItems } = await import("@/lib/faq");
  return getFaqTeaserItems(categoryId, limit);
}
