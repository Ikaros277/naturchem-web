import { getPoradnaTopicIconKey } from "@/lib/service-icons";

/** Téma článku pro štítek a ikonu na /poradna a homepage. */
export function topicForArticle(title: string): string {
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

export function poradnaTopicIconKey(title: string) {
  return getPoradnaTopicIconKey(topicForArticle(title));
}
