import type { Locale } from "@/lib/i18n/locales";
import { getFaqCategory, getFaqTeaserItems } from "@/lib/faq";
import { getFaqCategoryEn, getFaqTeaserItemsEn } from "@/lib/faq-en";
import type { FaqCategory, FaqItem } from "@/lib/faq";

export function getFaqCategoryForLocale(id: string, locale: Locale): FaqCategory | undefined {
  return locale === "en" ? getFaqCategoryEn(id) : getFaqCategory(id);
}

export function getFaqTeaserItemsForLocale(
  categoryId: string,
  locale: Locale,
  limit = 5
): FaqItem[] {
  return locale === "en"
    ? getFaqTeaserItemsEn(categoryId, limit)
    : getFaqTeaserItems(categoryId, limit);
}
