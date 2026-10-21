import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n/locales";
import { fitsSearchTitleWidth } from "@/lib/search-title-width";

/** Editorial ceiling, not a guarantee about Google's chosen result title. */
export const maxSearchTitleLength = 50;

/** Future CMS entries use the same readable headline; no hidden per-slug override. */
export function fallbackSearchTitle(title: string): string {
  const clean = title.replace(/\s+/g, " ").trim();
  const fits = (text: string) => text.length <= maxSearchTitleLength && fitsSearchTitleWidth(text);
  if (fits(clean)) return clean;
  const head = clean.split(/[:?]/)[0].trim();
  if (head.length >= 18 && fits(head)) return head;
  const words = clean.split(" ");
  while (words.length > 1 && !fits(words.join(" "))) words.pop();
  let candidate = words.join(" ");
  while (candidate && !fits(candidate)) candidate = Array.from(candidate).slice(0, -1).join("");
  return candidate.replace(/[\s,;:–—-]+$/, "");
}

export function articleSearchMetadata(article: Pick<Article, "slug" | "title" | "excerpt">, locale: Locale) {
  // The CMS headline is the source of truth for H1, cards, schema and metadata.
  const title = fallbackSearchTitle(article.title);
  const excerpt = article.excerpt.replace(/\s+/g, " ").trim();
  // Keep complete source sentences, never truncate a legal condition or negation.
  const firstSentence = Array.from(new Intl.Segmenter(locale, { granularity: "sentence" }).segment(excerpt))[0]?.segment.trim();
  const suffix = locale === "cs" ? "Odborný článek NATURCHEM." : locale === "de" ? "Fachartikel von NATURCHEM." : "Expert article by NATURCHEM.";
  const description = excerpt.length <= 180 ? excerpt
    : firstSentence && firstSentence.length <= 180 ? firstSentence
    : `${title.replace(/[.!?]$/, "")}. ${suffix}`;
  return { title, description };
}
