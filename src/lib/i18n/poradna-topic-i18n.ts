import { PORADNA_TOPICS, type PoradnaTopic } from "@/lib/poradna-topic";
import { PORADNA_TOPICS_EN } from "@/lib/poradna-topic-en";
import { PORADNA_TOPICS_EN as PORADNA_TOPICS_DE } from "@/lib/poradna-topic-de";
import type { Locale } from "@/lib/i18n/locales";

export function getPoradnaTopicLabel(topic: PoradnaTopic, locale: Locale): string {
  if (locale === "en") return PORADNA_TOPICS_EN[topic] ?? topic;
  if (locale === "de") return PORADNA_TOPICS_DE[topic] ?? topic;
  return topic;
}

export function getPoradnaTopicLabels(locale: Locale): Record<PoradnaTopic, string> {
  return Object.fromEntries(
    PORADNA_TOPICS.map((topic) => [topic, getPoradnaTopicLabel(topic, locale)])
  ) as Record<PoradnaTopic, string>;
}
