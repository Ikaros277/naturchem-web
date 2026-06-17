"use client";

import type { ReactNode } from "react";
import { getFooterNav } from "@/lib/i18n/nav-content";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { FooterLegalBar } from "@/components/FooterLegalBar";
import { company } from "@/lib/site";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

type FooterLink = { href: string; label: string };

function FooterLinkList({ links }: { links: readonly FooterLink[] }) {
  return (
    <ul className="footer-links">
      {links.map((item) => (
        <li key={item.href}>
          <LocaleLink href={item.href}>{item.label}</LocaleLink>
        </li>
      ))}
    </ul>
  );
}

function FooterColumn({
  title,
  ariaLabel,
  children,
  className = ""
}: {
  title: string;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`footer-zone ${className}`.trim()} aria-label={ariaLabel}>
      <p className="footer-heading">{title}</p>
      <div className="footer-panel">{children}</div>
    </section>
  );
}

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const {
    footerCompanyLinks,
    footerServiceLinks,
    footerContactPageLink,
    footerPhones,
    footerLocationLine
  } = getFooterNav(locale);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <FooterColumn title={t.company} ariaLabel={t.companyAria} className="footer-zone--brand">
            <FooterLinkList links={footerCompanyLinks} />
          </FooterColumn>
          <FooterColumn title={t.services} ariaLabel={t.servicesAria} className="footer-zone--services">
            <FooterLinkList links={footerServiceLinks} />
          </FooterColumn>
          <FooterColumn title={t.contact} ariaLabel={t.contactAria} className="footer-zone--contact">
            <p className="footer-contact-meta">{footerLocationLine}</p>
            <p className="footer-contact-lines">
              {footerPhones.map((phone) => (
                <a key={phone} href={telHref(phone)}>
                  {phone}
                </a>
              ))}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p className="footer-contact-more">
              <LocaleLink href={footerContactPageLink.href}>{footerContactPageLink.label}</LocaleLink>
            </p>
          </FooterColumn>
        </div>
        <FooterLegalBar
          copyright={t.copyright
            .replace("{year}", String(currentYear))
            .replace("{ico}", company.ico)
            .replace("{dic}", company.dic)}
        />
      </div>
    </footer>
  );
}
