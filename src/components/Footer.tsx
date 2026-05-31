import Link from "next/link";
import type { ReactNode } from "react";
import { accreditationDocuments } from "@/lib/accreditation-documents";
import { globalCta } from "@/lib/cta";
import { contactUrl } from "@/lib/contact-url";
import { referenceNav } from "@/lib/navigation";
import { company } from "@/lib/site";

const contactFormHref = contactUrl("Nejsem si jistý");

const footerDocumentLabels: Record<string, string> = {
  "osvedceni-akreditace": "Osvědčení o akreditaci",
  "autorizace-eia": "Autorizace EIA",
  "autorizace-rozptyl": "Rozptylové studie",
  "autorizace-ghg": "Emise skleníkových plynů",
  "autorizace-posudek": "Odborné posudky"
};

const footerServices = [
  { href: "/sluzby/mereni-emisi", title: "Měření emisí" },
  { href: "/sluzby/pracovni-prostredi", title: "Měření pracovního prostředí" },
  { href: "/sluzby/mereni-hluku", title: "Měření hluku a akustika" },
  { href: "/sluzby/rozptylove-studie", title: "Rozptylové studie" },
  { href: "/sluzby/eia-posudky-poradenstvi", title: "EIA, posudky a IPPC" },
  { href: "/sluzby/skoleni-chemicke-legislativy", title: "Školení chemické legislativy" }
] as const;

const footerOdbornost = [
  { href: "/akreditace-autorizace-dokumenty", title: "Akreditace a oprávnění" },
  { href: referenceNav.href, title: referenceNav.label },
  { href: "/poradna", title: "Odborná poradna" },
  { href: "/faq", title: "FAQ" },
  { href: "/pristrojove-vybaveni", title: "Přístrojové vybavení" }
] as const;

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function FooterBrand() {
  const hq = company.address;
  const branchLine = company.branchAddresses.map((b) => b.label).join(" · ");

  return (
    <div className="footer-brand">
      <p className="footer-brand-name">{company.name}</p>
      <p className="footer-brand-text">
        Laboratoř č. 1599 · EIA, studie, měření a posudky pro úřady i investory.
      </p>
      <p className="footer-brand-meta">
        {hq.street}, {hq.postalCode} {hq.city}
        <br />
        IČO: {company.ico} · DIČ: {company.dic}
        <br />
        {branchLine}
      </p>
    </div>
  );
}

function FooterDocumentLinks({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <ul className={compact ? "footer-doc-links footer-doc-links--compact" : "footer-doc-links"}>
        {accreditationDocuments.map((doc) => (
          <li key={doc.id}>
            <a href={doc.href} target="_blank" rel="noopener noreferrer">
              {footerDocumentLabels[doc.id] ?? doc.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-docs-more">
        <Link href="/akreditace-autorizace-dokumenty">Přehled akreditace</Link>
      </p>
    </>
  );
}

function FooterLinks({ links }: { links: readonly { href: string; title: string }[] }) {
  return (
    <ul className="footer-links">
      {links.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function FooterNavColumn({
  title,
  ariaLabel,
  links,
  children,
  className = ""
}: {
  title: string;
  ariaLabel: string;
  links?: readonly { href: string; title: string }[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <nav className={`footer-column ${className}`.trim()} aria-label={ariaLabel}>
      <details className="footer-accordion">
        <summary className="footer-heading">{title}</summary>
        <div className="footer-accordion-panel">
          {children ?? (links ? <FooterLinks links={links} /> : null)}
        </div>
      </details>
    </nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const locations = [
    company.address.city,
    ...company.branchAddresses.map((b) => b.label)
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-desktop">
          <FooterBrand />
          <nav className="footer-docs" aria-label="Akreditační a autorizační dokumenty ke stažení">
            <p className="footer-docs-heading">Dokumenty ke stažení</p>
            <FooterDocumentLinks compact />
          </nav>
        </div>

        <div className="footer-mobile">
          <FooterBrand />

          <div className="footer-mobile-quick" aria-label="Rychlý kontakt v patičce">
            <p className="footer-contact-lines">
              <a href={telHref(company.phones[0])}>{company.phones[0]}</a>
              <br />
              <a href={telHref(company.phones[1])}>{company.phones[1]}</a>
              <br />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <Link href={contactFormHref} className="button footer-cta">
              {globalCta}
            </Link>
          </div>

          <FooterNavColumn
            title="Služby"
            ariaLabel="Služby v patičce"
            links={footerServices}
            className="footer-nav-services"
          />

          <FooterNavColumn
            title="Odbornost"
            ariaLabel="Odbornost v patičce"
            links={footerOdbornost}
            className="footer-nav-odbornost"
          />

          <FooterNavColumn
            title="Dokumenty"
            ariaLabel="Akreditační a autorizační dokumenty ke stažení"
            className="footer-nav-docs"
          >
            <FooterDocumentLinks />
          </FooterNavColumn>

          <div className="footer-column footer-contact">
            <details className="footer-accordion">
              <summary className="footer-heading">Kontakt</summary>
              <div className="footer-accordion-panel">
                <ul className="footer-links footer-contact-list">
                  {locations.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© NATURCHEM, s.r.o. {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
