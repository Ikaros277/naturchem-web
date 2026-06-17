import { INQUIRY_CATEGORIES as inquiryCategoriesCs } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORIES as inquiryCategoriesEn } from "@/lib/contact-inquiry-en";
import { INQUIRY_CATEGORIES as inquiryCategoriesDe } from "@/lib/contact-inquiry-de";
import type { Locale } from "@/lib/i18n/locales";

export function getInquiryCategories(locale: Locale) {
  if (locale === "en") return inquiryCategoriesEn;
  if (locale === "de") return inquiryCategoriesDe;
  return inquiryCategoriesCs;
}
