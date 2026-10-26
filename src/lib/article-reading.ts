import type { Nodes, Root } from "mdast";
import type { Locale } from "@/lib/i18n/locales";

export type ArticleHeading = { id: string; title: string; level: number };
export type ArticleHeadingIds = Readonly<Record<string, string>>;

/** Optional stable chapter IDs for a translated or renamed heading. */
export function parseArticleHeadingIds(value: unknown): ArticleHeadingIds | undefined {
  if (value == null) return undefined;
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Article headingIds must be a heading-to-ID mapping.");
  }
  const titles = new Set<string>();
  const ids = new Set<string>();
  const entries = Object.entries(value).map(([rawTitle, rawId]) => {
    const title = rawTitle.replace(/\s+/g, " ").trim();
    if (!title || typeof rawId !== "string" || !/^kapitola-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(rawId)) {
      throw new Error("Article headingIds contains an invalid heading or ID.");
    }
    if (titles.has(title) || ids.has(rawId)) {
      throw new Error("Article headingIds must use unique headings and IDs.");
    }
    titles.add(title);
    ids.add(rawId);
    return [title, rawId] as const;
  });
  return Object.freeze(Object.fromEntries(entries));
}

export const articleReadingCopy = {
  cs: { contents: "Obsah článku", chapters: "Kapitoly", back: "Zpět k obsahu článku", table: "Tabulka v článku", tableHint: "Tabulku můžete posouvat do stran." },
  en: { contents: "In this article", chapters: "Sections", back: "Back to article contents", table: "Article table", tableHint: "Scroll the table horizontally to see all columns." },
  de: { contents: "In diesem Artikel", chapters: "Abschnitte", back: "Zurück zum Inhaltsverzeichnis", table: "Tabelle im Artikel", tableHint: "Die Tabelle lässt sich seitlich verschieben." }
} satisfies Record<Locale, { contents: string; chapters: string; back: string; table: string; tableHint: string }>;

function headingText(node: Nodes): string {
  if (node.type === "image") return node.alt || "";
  if ("children" in node) return node.children.map(headingText).join("");
  if ("value" in node) return node.value;
  return "";
}

/** Runs in the same Markdown parse as rendering: fences, links and Setext work too. */
export function addArticleHeadingAnchors(tree: Root, headingIds?: ArticleHeadingIds): ArticleHeading[] {
  const used = new Set<string>();
  const unusedTitles = new Set(Object.keys(headingIds ?? {}));
  const topLevel: ArticleHeading[] = [];
  function visit(node: Nodes, isTopLevel = false) {
    if (node.type === "heading") {
      const title = headingText(node).replace(/\s+/g, " ").trim();
      const existingId = node.data?.hProperties?.id;
      const stableId = headingIds && Object.hasOwn(headingIds, title) ? headingIds[title] : undefined;
      if (stableId) unusedTitles.delete(title);
      const slug = title.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "oddil";
      const base = typeof existingId === "string" && existingId ? existingId : stableId ?? `kapitola-${slug}`;
      let id = base;
      let suffix = 2;
      while (used.has(id)) id = `${base}-${suffix++}`;
      used.add(id);
      node.data = { ...node.data, hProperties: { ...node.data?.hProperties, id } };
      if (isTopLevel && title) topLevel.push({ id, title, level: Math.max(2, node.depth) });
    }
    if ("children" in node) node.children.forEach(child => visit(child));
  }
  tree.children.forEach(node => visit(node, true));
  if (unusedTitles.size) throw new Error("Article headingIds references a heading that is not present.");
  const firstLevel = Math.min(...topLevel.map(heading => heading.level));
  return topLevel.filter(heading => heading.level === firstLevel);
}
