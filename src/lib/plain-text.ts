/**
 * Strip lightweight markdown used in page copy (**bold**) so meta descriptions
 * and schema.org text stay plain for SERP / crawlers.
 */
export function stripInlineMarkdown(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\s+/g, " ").trim();
}

/** Meta description: plain text, capped length. */
export function metaDescriptionFrom(text: string, maxLen = 160): string {
  const plain = stripInlineMarkdown(text);
  if (plain.length <= maxLen) return plain;
  const sliced = plain.slice(0, maxLen - 1);
  const breakAt = sliced.lastIndexOf(" ");
  return `${(breakAt > 80 ? sliced.slice(0, breakAt) : sliced).trimEnd()}…`;
}
