import { Fragment, type ReactNode } from "react";

/**
 * Minimal inline emphasis for landing-page copy: `**phrase**` becomes <strong>.
 * Nothing else is interpreted, so copy stays plain text everywhere else (schema, meta).
 */
export function renderRichText(text: string): ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>
  );
}

/** Removes the `**` markers, for JSON-LD, meta description and other plain-text uses. */
export function stripRichText(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

const NON_TERMINAL_ABBREVIATIONS = new Set([
  "č", "odst", "písm", "tzv", "např", "resp", "tj", "tzn", "cca", "příl", "sb", "zák", "vyhl", "ing", "mj", "popř",
  "nr", "no", "coll", "art", "abs", "lit", "approx", "e.g", "i.e", "etc", "vs", "bzw", "ca", "usw", "z.b", "u.a", "d.h"
]);

/**
 * Splits the first sentence off a paragraph so the card can show it as a bold lead.
 * Returns null when there is no meaningful remainder (single short sentence).
 */
export function splitLeadSentence(text: string): { lead: string; rest: string } | null {
  const plain = stripRichText(text);
  const pattern = /([.!?])(\)?)\s+(?=[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽÄÖÜ„"(§])/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(plain)) !== null) {
    const before = plain.slice(0, match.index);
    const lastWord = (before.match(/([\p{L}.]+)$/u)?.[1] ?? "").toLowerCase().replace(/\.$/, "");
    if (match[1] === "." && NON_TERMINAL_ABBREVIATIONS.has(lastWord)) continue;
    if (/\d$/.test(before) && match[1] === ".") {
      // "5. ledna" style ordinals and "2026." are rare in these paragraphs; keep scanning.
      continue;
    }
    const end = match.index + match[1].length + match[2].length;
    const lead = plain.slice(0, end).trim();
    const rest = plain.slice(end).trim();
    if (lead.length < 24 || lead.length > 190 || rest.length === 0) return null;
    return { lead, rest };
  }
  return null;
}
