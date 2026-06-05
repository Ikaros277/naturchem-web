import type { HeroTheme } from "@/lib/hero-images";
import { getPoradnaTopicIconKey } from "@/lib/service-icons";

export const PORADNA_TOPICS = [
  "Emise",
  "Rozptylové studie",
  "Hluk",
  "Pracovní prostředí",
  "EIA a povolování",
  "Legislativa",
  "Chemická legislativa"
] as const;

export type PoradnaTopic = (typeof PORADNA_TOPICS)[number];

const topicSet = new Set<string>(PORADNA_TOPICS);

export function isPoradnaTopic(value: string): value is PoradnaTopic {
  return topicSet.has(value);
}

/** Fallback: téma odvozené z názvu (použít jen když chybí frontmatter). */
export function topicFromTitle(title: string): PoradnaTopic {
  const normalized = title.toLocaleLowerCase("cs-CZ");
  if (normalized.includes("hluk")) return "Hluk";
  if (normalized.includes("rozptyl")) return "Rozptylové studie";
  if (normalized.includes("kategorizace") || normalized.includes("prac")) {
    return "Pracovní prostředí";
  }
  if (
    normalized.includes("eia") ||
    normalized.includes("posudek") ||
    normalized.includes("povolen")
  ) {
    return "EIA a povolování";
  }
  if (
    normalized.includes("zákon") ||
    normalized.includes("legislativ") ||
    normalized.includes("vzdálenost")
  ) {
    return "Legislativa";
  }
  if (normalized.includes("chemick")) return "Chemická legislativa";
  return "Emise";
}

type ArticleTopicInput = { title: string; topic?: string | null };

/** Téma článku — frontmatter `topic` má přednost před heuristikou z titulku. */
export function resolveArticleTopic(article: ArticleTopicInput): PoradnaTopic {
  const fromFrontmatter = article.topic?.trim();
  if (fromFrontmatter && isPoradnaTopic(fromFrontmatter)) {
    return fromFrontmatter;
  }
  return topicFromTitle(article.title);
}

/** @deprecated Použijte resolveArticleTopic */
export function topicForArticle(title: string): PoradnaTopic {
  return topicFromTitle(title);
}

export function poradnaTopicIconKey(article: ArticleTopicInput) {
  return getPoradnaTopicIconKey(resolveArticleTopic(article));
}

const topicToHeroTheme: Record<PoradnaTopic, HeroTheme> = {
  Emise: "emise",
  Hluk: "hluk",
  "Rozptylové studie": "hluk",
  "Pracovní prostředí": "emise",
  "EIA a povolování": "dokumentace",
  Legislativa: "dokumentace",
  "Chemická legislativa": "dokumentace"
};

/** Stock hero / náhled podle tématu článku (Fáze A — bez vlastních fotek v CMS). */
export function heroThemeForArticle(article: ArticleTopicInput): HeroTheme {
  return topicToHeroTheme[resolveArticleTopic(article)] ?? "dokumentace";
}
