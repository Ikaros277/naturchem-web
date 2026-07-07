import type { ReactNode } from "react";
import Link from "next/link";
import { FooterLegalBar } from "@/components/FooterLegalBar";
import { getFooterNav } from "@/lib/i18n/nav-content";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { company } from "@/lib/site";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

type FooterLink = { href: string; label: string };

function FooterLinkList({ links, locale }: { links: readonly FooterLink[]; locale: Locale }) {
  return (
    <ul className="footer-links">
      {links.map((item) => (
        <li key={item.href}>
          <Link href={localizeHref(item.href, locale)}>{item.label}</Link>
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

type Props = {
  locale: Locale;
};

export async function Footer({ locale }: Props) {
  const messages = await getMessages(locale);
  const t = messages.footer;
  const currentYear = new Date().getFullYear();
  const {
    footerCompanyLinks,
    footerSurveyLink,
    footerServiceLinks,
    footerContactPageLink,
    footerPhones,
    footerLocationLine
  } = getFooterNav(locale);
  const contactHref = localizeHref(footerContactPageLink.href, locale);
  const surveyHref = localizeHref(footerSurveyLink.href, locale);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <FooterColumn title={t.company} ariaLabel={t.companyAria} className="footer-zone--brand">
            <FooterLinkList links={footerCompanyLinks} locale={locale} />
          </FooterColumn>
          <FooterColumn title={t.services} ariaLabel={t.servicesAria} className="footer-zone--services">
            <FooterLinkList links={footerServiceLinks} locale={locale} />
            <aside className="footer-survey-highlight" aria-label={footerSurveyLink.label}>
              <p className="footer-survey-highlight-title">{t.surveyHighlightTitle}</p>
              <p className="footer-survey-highlight-text">{t.surveyHighlightText}</p>
              <Link href={surveyHref} className="footer-survey-highlight-link">
                {t.surveyHighlightLink}
              </Link>
            </aside>
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
              <Link href={contactHref}>{footerContactPageLink.label}</Link>
            </p>
          </FooterColumn>
        </div>
        <FooterLegalBar
          copyright={t.copyright
            .replace("{year}", String(currentYear))
            .replace("{ico}", company.ico)
            .replace("{dic}", company.dic)}
          legalAria={t.legal}
          privacy={t.privacy}
          cookies={t.cookies}
        />
      </div>
    </footer>
  );
}
