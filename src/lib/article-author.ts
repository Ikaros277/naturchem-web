import type { Locale } from "@/lib/i18n/locales";
import { localizedCanonical } from "@/lib/i18n/metadata-helpers";
import { company, siteUrl } from "@/lib/site";

export const expertAuthorName = "Ing. František Hezina";
export const expertAuthorId = `${siteUrl}/o-spolecnosti-naturchem/#frantisek-hezina`;

export function expertAuthorUrl(locale: Locale) {
  return `${localizedCanonical("/o-spolecnosti-naturchem", locale)}#frantisek-hezina`;
}

/** Only the verified named author is a Person; corporate bylines stay an Organization. */
export function buildArticleAuthor(author: string | undefined, locale: Locale) {
  if (author === expertAuthorName) {
    return { "@type": "Person", "@id": expertAuthorId, name: author, url: expertAuthorUrl(locale) };
  }
  return { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: author || company.name, url: siteUrl };
}
