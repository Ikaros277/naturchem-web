/** Normalizuje datum z front matter (string nebo Date z YAML) na ISO řetězec. */
export function normalizeArticleDate(value: unknown): string | undefined {
  if (value == null || value === "") return undefined;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

/** Datum pro zobrazení na webu (česky, bez časové zóny v textu). */
export function formatArticleDate(value: unknown): string | null {
  const iso = normalizeArticleDate(value);
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
