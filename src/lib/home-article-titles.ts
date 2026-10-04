import type { Locale } from "@/lib/i18n/locales";

// Display-only labels: article H1, metadata and indexed URLs are unchanged.
const shortTitles: Record<string, string> = {
  "bezpecnostni-listy-v-provozu-co-musi-zamestnavatel": "Bezpečnostní listy: povinnosti zaměstnavatele",
  "skladovani-chemickych-latek-smesi-kontrola": "Skladování chemických látek: příprava na kontrolu",
  "kolaudace-vyrobni-haly-provozovny-khs-mereni": "Kolaudace haly: jaká měření připravit pro KHS",
  "vyjmenovany-stacionarni-zdroj-povoleni-provozu": "Potřebuje Váš zdroj povolení provozu?",
  "vyzva-khs-mereni-pracovniho-prostredi": "Výzva KHS: jak určit rozsah měření"
};

export function homeArticleTitle(article: { slug: string; title: string }, locale: Locale): string {
  return locale === "cs" ? shortTitles[article.slug] ?? article.title : article.title;
}
