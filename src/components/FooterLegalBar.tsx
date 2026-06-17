"use client";

import { CookieSettingsButton } from "@/components/CookieConsentBanner";
import { useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { legalPaths } from "@/lib/legal";

type Props = {
  copyright: string;
};

export function FooterLegalBar({ copyright }: Props) {
  const t = useTranslations("footer");

  return (
    <div className="footer-bottom">
      <p className="footer-bottom-copy">{copyright}</p>
      <nav className="footer-legal-nav" aria-label={t.legal}>
        <LocaleLink href={legalPaths.privacy}>{t.privacy}</LocaleLink>
        <span aria-hidden="true">·</span>
        <LocaleLink href={legalPaths.cookies}>{t.cookies}</LocaleLink>
        <span aria-hidden="true">·</span>
        <CookieSettingsButton />
      </nav>
    </div>
  );
}
