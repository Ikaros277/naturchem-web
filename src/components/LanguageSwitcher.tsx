"use client";

import type { ReactElement } from "react";
import { locales, localeLabels, type Locale } from "@/lib/i18n/locales";
import { useLocaleSwitchHref } from "@/lib/i18n/locale-link";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";

function CzechFlag() {
  return (
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="60" height="20" fill="#fff" />
      <rect y="20" width="60" height="20" fill="#d7141a" />
      <polygon points="0,0 30,20 0,40" fill="#11457e" />
    </svg>
  );
}

function BritishFlag() {
  return (
    <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="2" />
      <path d="M25,0 V30 M0,12.5 H60" stroke="#fff" strokeWidth="10" />
      <path d="M27,0 V30 M0,13.5 H60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  );
}

function GermanFlag() {
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="60" height="12" fill="#000" />
      <rect y="12" width="60" height="12" fill="#dd0000" />
      <rect y="24" width="60" height="12" fill="#ffce00" />
    </svg>
  );
}

const flags: Record<Locale, { Flag: () => ReactElement; label: string }> = {
  cs: { Flag: CzechFlag, label: localeLabels.cs },
  en: { Flag: BritishFlag, label: localeLabels.en },
  de: { Flag: GermanFlag, label: localeLabels.de }
};

const switchLabels: Record<Locale, "switchToCs" | "switchToEn" | "switchToDe"> = {
  cs: "switchToCs",
  en: "switchToEn",
  de: "switchToDe"
};

function LanguageOption({ locale, isActive }: { locale: Locale; isActive: boolean }) {
  const href = useLocaleSwitchHref(locale);
  const t = useTranslations("language");
  const { Flag, label } = flags[locale];

  return (
    <a
      className={`language-switcher-option${isActive ? " is-active" : ""}`}
      href={href}
      hrefLang={locale}
      lang={locale}
      aria-current={isActive ? "page" : undefined}
      aria-label={t[switchLabels[locale]]}
      title={label}
    >
      <span className="language-switcher-flag">
        <Flag />
      </span>
    </a>
  );
}

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();

  return (
    <div className="language-switcher" role="navigation" aria-label={t.ariaLabel}>
      {locales.map((optionLocale) => (
        <LanguageOption key={optionLocale} locale={optionLocale} isActive={locale === optionLocale} />
      ))}
    </div>
  );
}
