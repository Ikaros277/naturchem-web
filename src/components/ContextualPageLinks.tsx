import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

const links = {
  company: { href: "/proc-naturchem", cs: "Proč NATURCHEM: naše zkušenosti a odborné zázemí", en: "Why NATURCHEM: documented experience and expertise", de: "Warum NATURCHEM: belegte Erfahrung und Fachkompetenz" },
  emissions: { href: "/mereni-emisi-dieselagregat", cs: "Měření emisí dieselagregátu", en: "Diesel generator emission measurements", de: "Emissionsmessungen an Dieselaggregaten" },
  noise: { href: "/mereni-hluku-havlickuv-brod", cs: "Měření hluku v Havlíčkově Brodě a okolí", en: "Noise measurements in Havlíčkův Brod and the surrounding area", de: "Lärmmessungen in Havlíčkův Brod und Umgebung" }
};

export function ContextualPageLinks({ locale, topic }: { locale: Locale; topic: keyof typeof links }) {
  const item = links[topic];
  return <nav className="context-links" aria-label={locale === "cs" ? "Související stránky" : locale === "de" ? "Verwandte Seiten" : "Related pages"}>
    <a href={localizeHref(item.href, locale)}>{item[locale]} <span aria-hidden="true">→</span></a>
  </nav>;
}
