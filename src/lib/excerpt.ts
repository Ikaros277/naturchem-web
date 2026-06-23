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

/** Jedna věta pro kartu provozu na indexu — bez protáhlého sloupce textu. */
export function shortenSectorCardLead(text: string, maxLength = 120): string {
  const lead = shortenListingExcerpt(text, 1);
  if (lead.length <= maxLength) return lead;
  const cut = lead.slice(0, maxLength);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > 80 ? space : maxLength).trimEnd()}…`;
}
