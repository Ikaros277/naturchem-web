import type { FaqItem } from "@/lib/faq";
import { getFaqTeaserItemsForLocale } from "@/lib/i18n/faq-helpers";
import type { Locale } from "@/lib/i18n/locales";

/** High-intent FAQ items surfaced on the homepage for users and AI crawlers. */
export async function getHomeGeoFaqItems(locale: Locale): Promise<FaqItem[]> {
  const [general, emissions, inquiry] = await Promise.all([
    getFaqTeaserItemsForLocale("obecne", locale, 4),
    getFaqTeaserItemsForLocale("emise", locale, 2),
    getFaqTeaserItemsForLocale("poptavka", locale, 2)
  ]);

  const seen = new Set<string>();
  const merged: FaqItem[] = [];

  for (const item of [...general, ...emissions, ...inquiry]) {
    if (seen.has(item.q)) continue;
    seen.add(item.q);
    merged.push(item);
  }

  return merged;
}
