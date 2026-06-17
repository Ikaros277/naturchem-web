import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

type ClientLogosLabels = {
  moreLabel: string;
  moreAriaLabel: string;
};

const labels: Record<Locale, ClientLogosLabels> = {
  cs: {
    moreLabel: "a mnoho dalších..",
    moreAriaLabel: "Zobrazit další loga zákazníků"
  },
  en: {
    moreLabel: "and many more…",
    moreAriaLabel: "Show more client logos"
  },
  de: {
    moreLabel: "und viele weitere…",
    moreAriaLabel: "Weitere Kundenlogos anzeigen"
  }
};

export function getClientLogosLabels(locale: Locale) {
  return pickLocale(locale, labels);
}
