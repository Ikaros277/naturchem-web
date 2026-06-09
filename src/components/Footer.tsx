import Link from "next/link";
import type { ReactNode } from "react";
import {
  footerServiceLinks,
  footerCompanyLinks,
  footerContactPageLink,
  footerLocationLine,
  footerPhones,
  type FooterLink
} from "@/lib/footer-nav";
import { FooterLegalBar } from "@/components/FooterLegalBar";
import { company } from "@/lib/site";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function FooterLinkList({ links }: { links: readonly FooterLink[] }) {
  return (
    <ul className="footer-links">
      {links.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
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

function FooterContact() {
  return (
    <FooterColumn title="Kontakt" ariaLabel="Kontakt v patičce" className="footer-zone--contact">
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
        <Link href={footerContactPageLink.href}>{footerContactPageLink.label}</Link>
      </p>
    </FooterColumn>
  );
}


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <FooterColumn title="Společnost" ariaLabel="Společnost v patičce" className="footer-zone--brand">
            <FooterLinkList links={footerCompanyLinks} />
          </FooterColumn>
          <FooterColumn title="Služby" ariaLabel="Služby v patičce" className="footer-zone--services">
            <FooterLinkList links={footerServiceLinks} />
          </FooterColumn>
          <FooterContact />
        </div>
        <FooterLegalBar year={currentYear} ico={company.ico} dic={company.dic} />
      </div>
    </footer>
  );
}
