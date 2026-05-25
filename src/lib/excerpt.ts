/** Zkrátí perex v přehledu článků na daný počet vět. */
export function shortenListingExcerpt(text: string, maxSentences = 2): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  if (!trimmed) return "";

  const sentences =
    trimmed.match(/[^.!?…]+[.!?…]+(?:\s+|$)|[^.!?…]+$/gu) ?? [trimmed];

  return sentences
    .slice(0, maxSentences)
    .map((sentence) => sentence.trim())
    .join(" ")
    .trim();
}
