import type { Metadata } from "next";
import { ContactFormSection } from "@/components/ContactFormSection";
import { PageHeroBand } from "@/components/PageHeroBand";
import {
  isValidContactService,
  resolveContactServices,
  sectorContactMessage,
  type ContactServiceOption
} from "@/lib/contact-services";
import { resolveInquiryCategory } from "@/lib/contact-inquiry";
import { company, siteUrl } from "@/lib/site";
import { JsonLd } from "@/components/Schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { TeamSectionContact } from "@/components/TeamSection";
import { getContactAttachmentIconKey } from "@/lib/service-icons";
import { getPageHeroTheme } from "@/lib/hero-images";

export const metadata: Metadata = {
  title: {
    absolute: "Kontakt NATURCHEM – poptávka měření, studií a podkladů"
  },
  description:
    "Kontakt na NATURCHEM a poptávkový formulář pro měření, studie, EIA, posudky, provozní řády, IPPC, ISPOP, GHG a školení chemické legislativy.",
  alternates: { canonical: `${siteUrl}/kontakt/` }
};

type PageProps = {
  searchParams: Promise<{
    service?: string | string[];
    sector?: string | string[];
    services?: string | string[];
  }>;
};

function queryParam(value: string | string[] | undefined): string {
  if (!value) return "";
  const raw = Array.isArray(value) ? value[0] : value;
  try {
    return decodeURIComponent(raw.replace(/\+/g, " "));
  } catch {
    return raw;
  }
}

const attachmentItems = [
  "požadavek, výzvu nebo rozhodnutí úřadu",
  "projektovou dokumentaci",
  "popis technologie",
  "provozní řád nebo povolení provozu",
  "fotografie provozu, výduchu, zdroje hluku nebo pracoviště",
  "požadovaný termín",
  "lokalitu provozu nebo záměru"
] as const;

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const serviceParam = queryParam(params.service);
  const sectorParam = queryParam(params.sector);
  const extraParam = queryParam(params.services);
  const extraServices = extraParam
    ? extraParam.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const initialServices = resolveContactServices(serviceParam, sectorParam, extraServices);
  const initialCategory = resolveInquiryCategory(initialServices as ContactServiceOption[]);
  const initialMessage = sectorParam
    ? sectorContactMessage(sectorParam)
    : !isValidContactService(serviceParam) && serviceParam
      ? sectorContactMessage(serviceParam)
      : "";
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Kontakt", item: `${siteUrl}/kontakt/` }
    ]
  };

  return (
    <main className="section contact-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/kontakt")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Kontakt" }]}
      >
        <header className="premium-page-hero contact-hero page-hero--photo">
          <div>
            <p className="eyebrow">Kontakt a poptávka</p>
            <h1>Pošlete nám požadavek nebo podklady k posouzení</h1>
            <p className="page-lead">
              Podle typu provozu, požadavku úřadu a dostupných podkladů určíme, zda je vhodné
              měření, studie, odborný posudek, EIA nebo jiná dokumentace.
            </p>
            <div className="btn-row">
              <a href="#poptavkovy-formular" className="button">Vyplnit poptávku</a>
            </div>
          </div>
        </header>
      </PageHeroBand>

      <section className="container contact-main-layout" aria-labelledby="poptavka-heading">
        <aside className="card contact-side-panel">
          <p className="eyebrow">Rychlý kontakt</p>
          <h2>Rychlý kontakt</h2>
          <dl className="contact-detail-list">
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={`tel:${company.phones[0].replaceAll(" ", "")}`}>{company.phones[0]}</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt>Působnost</dt>
              <dd>Havlíčkův Brod, České Budějovice, Praha a zakázky po celé ČR</dd>
            </div>
          </dl>
          <div className="btn-row contact-side-actions">
            <a href={`tel:${company.phones[0].replaceAll(" ", "")}`} className="button">Zavolat</a>
            <a href={`mailto:${company.email}`} className="button secondary">Napsat e-mail</a>
          </div>
          <p className="muted contact-side-note">
            Nejrychlejší je poslat požadavek úřadu, projektovou dokumentaci nebo fotografii provozu.
            Ozveme se s konkrétním dalším krokem.
          </p>
        </aside>
        <article className="card contact-form-panel" aria-labelledby="poptavka-heading">
          <p id="poptavka-heading" className="sr-only">
            Rychlá poptávka
          </p>
          <ContactFormSection
            initialCategory={initialCategory}
            initialServices={[...initialServices]}
            initialMessage={initialMessage}
          />
        </article>
      </section>

      <section className="section container contact-attachments-section" id="podklady">
        <article className="card contact-attachments-panel">
          <h2>Co je vhodné přiložit</h2>
          <ul className="check-list contact-attachment-checklist">
            {attachmentItems.map((item) => (
              <li key={item} className="contact-attachment-item">
                <ServiceIcon icon={getContactAttachmentIconKey(item)} variant="inline" className="contact-attachment-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <div className="container contact-team-section">
        <TeamSectionContact />
      </div>

      <section className="section container contact-company-section">
        <article className="card contact-info-panel">
          <h2>Kontaktní údaje</h2>
          <div className="contact-company-grid">
            <div>
              <p>
                <strong>{company.name}</strong>
                <br />
                IČO: {company.ico}
                <br />
                DIČ: {company.dic}
                <br />
                Sídlo: {company.address.street}, {company.address.postalCode} {company.address.city}
              </p>
              <p>
                Kontaktní osoba: <strong>{company.person}</strong>
              </p>
            </div>
            <div>
              <h3>Provozovny</h3>
              <ul className="plain-list">
                {company.branchAddresses.map((branch) => (
                  <li key={branch.label}>
                    <strong>{branch.label}</strong>
                    <br />
                    {branch.street}, {branch.postalCode} {branch.city}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Telefon a e-mail</h3>
              <p>
                <a href={`tel:${company.phones[0].replaceAll(" ", "")}`}>{company.phones[0]}</a>
                <br />
                <a href={`tel:${company.phones[1].replaceAll(" ", "")}`}>{company.phones[1]}</a>
                <br />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
