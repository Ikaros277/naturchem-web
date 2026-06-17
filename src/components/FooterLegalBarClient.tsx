"use client";

import { CookieSettingsButton } from "@/components/CookieConsentBanner";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { legalPaths } from "@/lib/legal";

type Props = {
  copyright: string;
  legalAria: string;
  privacy: string;
  cookies: string;
};

export function FooterLegalBarClient({ copyright, legalAria, privacy, cookies }: Props) {
  return (
    <div className="footer-bottom">
      <p className="footer-bottom-copy">{copyright}</p>
      <nav className="footer-legal-nav" aria-label={legalAria}>
        <LocaleLink href={legalPaths.privacy}>{privacy}</LocaleLink>
        <span aria-hidden="true">·</span>
        <LocaleLink href={legalPaths.cookies}>{cookies}</LocaleLink>
        <span aria-hidden="true">·</span>
        <CookieSettingsButton />
      </nav>
    </div>
  );
}
