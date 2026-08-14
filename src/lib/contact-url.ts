import {
  isValidContactService,
  relatedServiceToContact,
  type ContactServiceOption
} from "@/lib/contact-services";
import type { InquiryCategoryId } from "@/lib/contact-inquiry";

export const CONTACT_FORM_ID = "poptavkovy-formular";

/** Stránka kontaktu — menu „Kontakt“, patička, breadcrumbs. */
export const contactPageHref = "/kontakt";

/** Poptávkové CTA napříč webem — rovnou na formulář, ne na hero. */
export const contactFormHref = `${contactPageHref}#${CONTACT_FORM_ID}`;

export function contactUrl(service: ContactServiceOption | string): string {
  const value = relatedServiceToContact(service) ?? (isValidContactService(service) ? service : "Jiný požadavek");
  return `${contactPageHref}?service=${encodeURIComponent(value)}#${CONTACT_FORM_ID}`;
}

/** Poptávka podle hlavní kategorie, například pro prodej přístrojů. */
export function contactCategoryUrl(category: InquiryCategoryId): string {
  return `${contactPageHref}?category=${encodeURIComponent(category)}#${CONTACT_FORM_ID}`;
}

/** Odkaz z oborové stránky — platné služby + název oboru do formuláře. */
export function sectorContactUrl(
  sectorTitle: string,
  relatedServiceTitles: string[]
): string {
  const services = relatedServiceTitles
    .map(relatedServiceToContact)
    .filter((s): s is ContactServiceOption => s !== null);

  const unique = [...new Set(services)];
  const primary = unique[0] ?? "Jiný požadavek";

  const params = new URLSearchParams();
  params.set("service", primary);
  params.set("sector", sectorTitle);
  if (unique.length > 1) {
    params.set("services", unique.slice(1).join(","));
  }

  return `${contactPageHref}?${params.toString()}#${CONTACT_FORM_ID}`;
}
