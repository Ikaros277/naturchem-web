import { INQUIRY_CATEGORIES as inquiryCategoriesCs } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORIES as inquiryCategoriesEn } from "@/lib/contact-inquiry-en";
import { INQUIRY_CATEGORIES as inquiryCategoriesDe } from "@/lib/contact-inquiry-de";
import type { Locale } from "@/lib/i18n/locales";
import {
  PRIORITY_CONTACT_SERVICE_OPTIONS,
  type ContactServiceOption
} from "@/lib/contact-services";
import { CONTACT_SERVICE_LABELS_EN } from "@/lib/contact-services-en";
import { CONTACT_SERVICE_LABELS_DE } from "@/lib/contact-services-de";

export function getInquiryCategories(locale: Locale) {
  if (locale === "en") return inquiryCategoriesEn;
  if (locale === "de") return inquiryCategoriesDe;
  return inquiryCategoriesCs;
}

export type ContactServiceChoice = {
  value: ContactServiceOption;
  label: string;
};

export function getPriorityContactServiceChoices(locale: Locale): ContactServiceChoice[] {
  return PRIORITY_CONTACT_SERVICE_OPTIONS.map((value) => ({
    value,
    label:
      locale === "en"
        ? CONTACT_SERVICE_LABELS_EN[value]
        : locale === "de"
          ? CONTACT_SERVICE_LABELS_DE[value]
          : value
  }));
}
