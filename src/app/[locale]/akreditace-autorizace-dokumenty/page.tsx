import type { Metadata } from "next";
import Link from "next/link";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { accreditationDocuments } from "@/lib/accreditation-documents";
import { pageCtaPresets } from "@/lib/cta";
import { getPageHeroTheme } from "@/lib/hero-images";
import {
  getAccreditationScopeIconKey,
  getAuthorizationIconKey,
  type ServiceIconKey
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

const customerBenefits: Array<{ icon: ServiceIconKey; text: string }> = [
  { icon: "ippc", text: "Výsledky dohledatelné a obhajitelné při kontrole" },
  { icon: "bezpecnostni-listy", text: "Protokoly přímo pro ČIŽP, KHS nebo stavební úřad" },
  { icon: "skoleni", text: "Odborný výklad výsledků — nejen čísla" },
  { icon: "povoleni", text: "Vždy v souladu s platným osvědčením a jeho přílohou" },
];

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
    <main className="section accreditation-page premium-page">
      <JsonLd data={webPageData} />
      <JsonLd data={orgData} />
      <PageHeroBand
        theme={getPageHeroTheme("/akreditace-autorizace-dokumenty")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Akreditace a oprávnění" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Důkaz odborné způsobilosti</p>
          <h1>Akreditace, autorizace a odborná oprávnění</h1>
          <p className="page-lead">
            Výsledky z NATURCHEM obstojí při kontrole ČIŽP, KHS i v stavebním řízení — tady jsou
            osvědčení, která za nimi stojí.
          </p>
        </header>
      </PageHeroBand>

      <div className="container">

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
            {customerBenefits.map(({ icon, text }) => (
              <div key={text} className="mini-card">
                <ServiceIcon icon={icon} size={32} />
                <span>{text}</span>
              </div>
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
              <div className="scope-card-head">
                <ServiceIcon icon={getAccreditationScopeIconKey(group.title)} size={20} />
                <h3>{group.title}</h3>
              </div>
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
        <p className="muted" style={{ marginTop: "1rem" }}>
          Laboratoř využívá analyzátory, odběrové aparatury, akustickou a vibrační techniku,
          luxmetry, čerpadla a laboratorní zázemí pro přípravu a vyhodnocení vzorků.
        </p>
        <Link href="/pristrojove-vybaveni" className="button secondary" style={{ marginTop: "0.75rem" }}>
          Vybrané přístrojové vybavení
        </Link>
      </section>

      <section className="section">
        <h2>Autorizace, oprávnění a dokumenty</h2>
        <p className="muted">
          EIA, rozptylové a hlukové studie nebo odborné posudky nespadají pod akreditaci
          laboratoře — jsou kryty samostatnými autorizacemi Ing. Heziny:
        </p>
        <div className="grid grid-4 authorization-grid">
          {authorizations.map((item) => (
            <article key={item.title} className="card">
              <div className="authorization-card-head">
                <ServiceIcon icon={getAuthorizationIconKey(item.title)} />
                <h3>{item.title}</h3>
              </div>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>
        <h3 className="accreditation-docs-subheading">Dokumenty ke stažení</h3>
        <div className="download-card-grid">
          {accreditationDocuments.map((doc) => (
            <div key={doc.id} className="card download-card">
              <h3>{doc.title}</h3>
              <p className="muted">{doc.description}</p>
              <a
                href={doc.href}
                className="button secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${doc.title} — stáhnout PDF`}
              >
                Stáhnout PDF
              </a>
            </div>
          ))}
        </div>
      </section>
      <PageCtaStrip {...pageCtaPresets.accreditation} />
      </div>
    </main>
  );
}
