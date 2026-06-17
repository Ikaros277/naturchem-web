"use client";

import type { ReactElement } from "react";
import { useLocaleSwitchHref } from "@/lib/i18n/locale-link";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";

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

const flags: Record<Locale, { Flag: () => ReactElement; label: string }> = {
  cs: { Flag: CzechFlag, label: "Čeština" },
  en: { Flag: BritishFlag, label: "English" }
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
      aria-label={locale === "cs" ? t.switchToCs : t.switchToEn}
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
      <LanguageOption locale="cs" isActive={locale === "cs"} />
      <LanguageOption locale="en" isActive={locale === "en"} />
    </div>
  );
}
