import type { Nodes, Root } from "mdast";
import type { Locale } from "@/lib/i18n/locales";

export type ArticleHeading = { id: string; title: string; level: number };

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
export function addArticleHeadingAnchors(tree: Root): ArticleHeading[] {
  const used = new Set<string>();
  const topLevel: ArticleHeading[] = [];
  function visit(node: Nodes, isTopLevel = false) {
    if (node.type === "heading") {
      const title = headingText(node).replace(/\s+/g, " ").trim();
      const existingId = node.data?.hProperties?.id;
      const slug = title.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "oddil";
      const base = typeof existingId === "string" && existingId ? existingId : `kapitola-${slug}`;
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
  const firstLevel = Math.min(...topLevel.map(heading => heading.level));
  return topLevel.filter(heading => heading.level === firstLevel);
}
