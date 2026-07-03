import type { HeroTheme } from "@/lib/hero-images";
import { poradnaHeroThemeForSlug } from "@/lib/poradna-hero-images";
import { getPoradnaTopicIconKey } from "@/lib/service-icons";

export const PORADNA_TOPICS = [
  "Emise",
  "Rozptylové studie",
  "Hluk a vibrace",
  "Pracovní prostředí",
  "Prašnost a deponie",
  "EIA a povolování",
  "KHS, ČIŽP a úřady",
  "Provozní praxe pro ekology",
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
  if (normalized.includes("hluk") || normalized.includes("vibrac")) return "Hluk a vibrace";
  if (normalized.includes("rozptyl")) return "Rozptylové studie";
  if (normalized.includes("praš") || normalized.includes("pras") || normalized.includes("depon")) {
    return "Prašnost a deponie";
  }
  if (normalized.includes("khs") || normalized.includes("čižp") || normalized.includes("cizp") || normalized.includes("úřad")) {
    return "KHS, ČIŽP a úřady";
  }
  if (normalized.includes("ispop") || normalized.includes("provozní") || normalized.includes("ekolog")) {
    return "Provozní praxe pro ekology";
  }
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

type ArticleTopicInput = { title: string; topic?: string | null; slug?: string | null };

const topicAliases: Record<string, PoradnaTopic> = {
  Hluk: "Hluk a vibrace"
};

/** Téma článku — frontmatter `topic` má přednost před heuristikou z titulku. */
export function resolveArticleTopic(article: ArticleTopicInput): PoradnaTopic {
  const fromFrontmatter = article.topic?.trim();
  if (fromFrontmatter) {
    if (isPoradnaTopic(fromFrontmatter)) return fromFrontmatter;
    const aliased = topicAliases[fromFrontmatter];
    if (aliased) return aliased;
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
  "Hluk a vibrace": "hluk",
  "Rozptylové studie": "hluk",
  "Pracovní prostředí": "emise",
  "Prašnost a deponie": "emise",
  "EIA a povolování": "dokumentace",
  "KHS, ČIŽP a úřady": "dokumentace",
  "Provozní praxe pro ekology": "dokumentace",
  Legislativa: "dokumentace",
  "Chemická legislativa": "dokumentace"
};

/** Hero / náhled — per-article mapování, jinak fallback podle tématu. */
export function heroThemeForArticle(article: ArticleTopicInput): HeroTheme {
  const fromSlug = poradnaHeroThemeForSlug(article.slug ?? undefined);
  if (fromSlug) return fromSlug;
  return topicToHeroTheme[resolveArticleTopic(article)] ?? "dokumentace";
}
