import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { accreditationDocuments } from "@/lib/accreditation-documents";
import {
  getAccreditationScopeIconKey,
  getAuthorizationIconKey
} from "@/lib/service-icons";
import { accreditedLabScope, authorizations } from "@/lib/accreditation-scope";
import { company, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Akreditace, autorizace a odborná oprávnění | NATURCHEM"
  },
  description:
    "Přehled akreditace laboratoře NATURCHEM č. 1599, autorizací EIA, rozptylových studií, posudků a GHG. Dokumenty ke stažení.",
  alternates: { canonical: `${siteUrl}/akreditace-autorizace-dokumenty/` }
};

const accreditationFacts = [
  "Osvědčení o akreditaci č. 562/2023",
  "Zkušební laboratoř č. 1599, útvar ME a PP",
  "ČSN EN ISO/IEC 17025:2018",
  "Platnost akreditace do 26. 10. 2028"
] as const;

const customerBenefits = [
  "řízený a dohledatelný postup měření",
  "protokoly použitelné při jednání se správními orgány",
  "odborný komentář pro provozní rozhodování",
  "návaznost na požadované podklady"
] as const;

const scopeGroups = [
  {
    title: "Emise ze stacionárních zdrojů",
    text: "Vzorkování, stanovení emisních složek, TOC/VOC, TZL, NOx, CO, SO₂, O₂ a související veličiny."
  },
  {
    title: "Pracovní a vnitřní ovzduší",
    text: "Prašnost, organické látky, chemické látky, aerosoly, vlákna a provozní expozice."
  },
  {
    title: "Mikroklima",
    text: "Teplota, tlak, vlhkost a rychlost proudění vzduchu v pracovním prostředí."
  },
  {
    title: "Osvětlení",
    text: "Umělé osvětlení ve vnitřním i venkovním prostředí."
  },
  {
    title: "Vibrace",
    text: "Vibrace přenášené na ruce a celkové vibrace pro hygienické a BOZP účely."
  },
  {
    title: "Hluk",
    text: "Hluk v pracovním i mimopracovním prostředí podle platných metod."
  }
] as const;

export default function AkreditaceAutorizaceDokumentyPage() {
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Akreditace, autorizace a odborná oprávnění",
    url: `${siteUrl}/akreditace-autorizace-dokumenty/`,
    description: metadata.description
  };

  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl
  };

  return (
    <main className="container section accreditation-page premium-page">
      <JsonLd data={webPageData} />
      <JsonLd data={orgData} />
      <Breadcrumbs
        items={[{ name: "Úvod", href: "/" }, { name: "Akreditace a oprávnění" }]}
      />
      <header className="premium-page-hero">
        <p className="eyebrow">Důkaz odborné způsobilosti</p>
        <h1>Akreditace, autorizace a odborná oprávnění</h1>
        <p className="page-lead">
          Přehled akreditovaného rozsahu laboratoře a samostatných autorizací. U každé zakázky
          ověřujeme soulad s platným osvědčením a jeho přílohou.
        </p>
      </header>

      <section className="grid grid-2 accreditation-overview">
        <article className="card accreditation-facts-card">
          <h2>Základní údaje o akreditaci</h2>
          <ul className="check-list">
            {accreditationFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2>Co akreditace znamená pro zákazníka</h2>
          <div className="mini-card-grid">
            {customerBenefits.map((benefit) => (
              <div key={benefit} className="mini-card">{benefit}</div>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <h2>Akreditovaný rozsah laboratoře (ISO/IEC 17025)</h2>
        <p className="muted">{accreditedLabScope.summary}</p>
        <div className="scope-card-grid">
          {scopeGroups.map((group) => (
            <article key={group.title} className="card scope-card">
              <h3>{group.title}</h3>
              <p className="muted">{group.text}</p>
            </article>
          ))}
        </div>
        <p className="muted">
          Úplný výčet metod a analytů je v{" "}
          <a href="/dokumenty/osvedceni-akreditace-562-2023.pdf" target="_blank" rel="noopener noreferrer">
            příloze osvědčení o akreditaci (PDF)
          </a>
          .
        </p>
      </section>

      <section className="section content-block">
        <article className="card cta-banner">
          <h2>Přístrojové vybavení a metrologické řízení</h2>
          <p className="muted">
            Laboratoř využívá analyzátory, odběrové aparatury, akustickou a vibrační techniku,
            luxmetry, čerpadla a laboratorní zázemí pro přípravu a vyhodnocení vzorků.
          </p>
          <Link href="/pristrojove-vybaveni" className="button secondary">
            Vybrané přístrojové vybavení
          </Link>
        </article>
      </section>

      <section className="section">
        <h2>Autorizace a odborná oprávnění</h2>
        <p className="muted">
          Rozptylové a hlukové studie, EIA a odborné posudky jsou samostatná odborná činnost mimo
          akreditovaný rozsah laboratoře ISO/IEC 17025. Jsou kryty těmito autorizacemi:
        </p>
        <div className="grid grid-4 authorization-grid">
          {authorizations.map((item) => (
            <article key={item.title} className="card">
              <ServiceIcon icon={getAuthorizationIconKey(item.title)} />
              <h3>{item.title}</h3>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Dokumenty ke stažení</h2>
        <div className="download-card-grid">
          {accreditationDocuments.map((doc) => (
            <a
              key={doc.id}
              href={doc.href}
              className="card card-link download-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${doc.title} — stáhnout PDF`}
            >
              <h3>{doc.title}</h3>
              <p className="muted">{doc.description}</p>
              <span className="card-inline-link">Stáhnout PDF</span>
            </a>
          ))}
        </div>
        <p className="muted" style={{ marginTop: "1rem" }}>
          Dokumenty k akreditaci a autorizacím jsou dostupné ke stažení níže.
        </p>
        <p>
          <Link className="button" href="/kontakt">
            Kontaktovat nás
          </Link>
        </p>
      </section>
    </main>
  );
}
