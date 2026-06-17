"use client";

import { useLocaleSwitchHref } from "@/lib/i18n/locale-link";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";

const flags: Record<Locale, { emoji: string; label: string }> = {
  cs: { emoji: "🇨🇿", label: "Čeština" },
  en: { emoji: "🇬🇧", label: "English" }
};

function LanguageOption({ locale, isActive }: { locale: Locale; isActive: boolean }) {
  const href = useLocaleSwitchHref(locale);
  const t = useTranslations("language");
  const flag = flags[locale];

  return (
    <a
      className={`language-switcher-option${isActive ? " is-active" : ""}`}
      href={href}
      hrefLang={locale}
      lang={locale}
      aria-current={isActive ? "page" : undefined}
      aria-label={locale === "cs" ? t.switchToCs : t.switchToEn}
      title={flag.label}
    >
      <span className="language-switcher-flag" aria-hidden="true">
        {flag.emoji}
      </span>
    </a>
  );
}

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();

  return (
    <div className="language-switcher" role="navigation" aria-label={t.ariaLabel}>
      <LanguageOption locale="cs" isActive={locale === "cs"} />
      <span className="language-switcher-sep" aria-hidden="true">
        |
      </span>
      <LanguageOption locale="en" isActive={locale === "en"} />
    </div>
  );
}
