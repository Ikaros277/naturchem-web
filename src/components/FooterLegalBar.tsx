"use client";

import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsentBanner";
import { legalPaths } from "@/lib/legal";

type Props = {
  year: number;
  ico: string;
  dic: string;
};

export function FooterLegalBar({ year, ico, dic }: Props) {
  return (
    <div className="footer-bottom">
      <p className="footer-bottom-copy">
        © NATURCHEM, s.r.o. {year} · IČO {ico} · DIČ {dic}
      </p>
      <nav className="footer-legal-nav" aria-label="Právní informace">
        <Link href={legalPaths.privacy}>Ochrana osobních údajů</Link>
        <span aria-hidden="true">·</span>
        <Link href={legalPaths.cookies}>Zásady cookies</Link>
        <span aria-hidden="true">·</span>
        <CookieSettingsButton />
      </nav>
    </div>
  );
}
