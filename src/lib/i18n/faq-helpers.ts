import type { Locale } from "@/lib/i18n/locales";
import { getFaqCategory, getFaqTeaserItems } from "@/lib/faq";
import { getFaqCategoryEn, getFaqTeaserItemsEn } from "@/lib/faq-en";
import { getFaqCategoryEn as getFaqCategoryDe, getFaqTeaserItemsEn as getFaqTeaserItemsDe } from "@/lib/faq-de";
import type { FaqCategory, FaqItem } from "@/lib/faq";
export function getFaqCategoryForLocale(id: string, locale: Locale): FaqCategory | undefined {
  if (locale === "de") return getFaqCategoryDe(id);
  if (locale === "en") return getFaqCategoryEn(id);
  return getFaqCategory(id);
}

export function getFaqTeaserItemsForLocale(
  categoryId: string,
  locale: Locale,
  limit = 5
): FaqItem[] {
  if (locale === "de") return getFaqTeaserItemsDe(categoryId, limit);
  if (locale === "en") return getFaqTeaserItemsEn(categoryId, limit);
  return getFaqTeaserItems(categoryId, limit);
}
