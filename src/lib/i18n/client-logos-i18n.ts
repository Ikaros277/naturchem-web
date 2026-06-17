import type { Locale } from "@/lib/i18n/locales";

export function getClientLogosLabels(locale: Locale) {
  if (locale === "en") {
    return {
      moreLabel: "and many more…",
      moreAriaLabel: "Show more client logos"
    };
  }
  return {
    moreLabel: "a mnoho dalších..",
    moreAriaLabel: "Zobrazit další loga zákazníků"
  };
}
