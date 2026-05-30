import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { JsonLd } from "@/components/Schema";
import { contactUrl } from "@/lib/contact-url";
import { pageCtaPresets } from "@/lib/cta";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Školení chemického zákona a chemické legislativy | NATURCHEM"
  },
  description:
    "Praktické školení chemického zákona, bezpečnostních listů, označování, skladování a nakládání s chemickými látkami pro provozy, sklady, výrobu a laboratoře.",
  alternates: { canonical: `${siteUrl}/sluzby/skoleni-chemicke-legislativy/` }
};

const audience = [
  "výrobní podniky, sklady, laboratoře a údržba",
  "lakovny, galvanovny, čisticí provozy a automotive",
  "provozní ekologové, BOZP pracovníci a vedoucí provozů",
  "osoby odpovědné za chemické látky a směsi v provozu"
] as const;

const scope = [
  "základní povinnosti při nakládání s chemickými látkami a směsmi",
  "orientace v bezpečnostních listech a jejich praktické použití",
  "označování, skladování a bezpečné používání chemických látek",
  "návaznost na BOZP, ochranu zdraví a životní prostředí",
  "provozní evidence, interní pravidla a časté chyby v provozech"
] as const;

const inputs = [
  "seznam používaných chemických látek a směsí",
  "bezpečnostní listy a interní postupy",
  "popis provozu, skladu nebo pracovních činností",
  "požadovaný okruh zaměstnanců a rozsah školení"
] as const;

const outputs = [
  "prezenční listina",
  "osnova školení",
  "potvrzení o absolvování školení",
  "doporučení k doplnění interní dokumentace podle potřeby"
] as const;

export default function Page() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Školení chemického zákona a chemické legislativy",
    provider: { "@type": "Organization", name: "NATURCHEM, s.r.o.", url: siteUrl },
    areaServed: "CZ",
    url: `${siteUrl}/sluzby/skoleni-chemicke-legislativy/`,
    description: metadata.description
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Služby", item: `${siteUrl}/sluzby/` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Školení chemické legislativy",
        item: `${siteUrl}/sluzby/skoleni-chemicke-legislativy/`
      }
    ]
  };

  return (
    <main className="section premium-page training-page">
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData} />
      <div className="container">
        <Breadcrumbs
          items={[
            { name: "Úvod", href: "/" },
            { name: "Služby", href: "/sluzby" },
            { name: "Školení chemické legislativy" }
          ]}
        />
        <header className="premium-page-hero">
          <p className="eyebrow">Školení a odborná podpora</p>
          <h1>Školení chemického zákona a chemické legislativy</h1>
          <p className="page-lead">
            Praktické školení chemického zákona pro provozy nakládající s látkami a směsmi. Projdeme
            povinnosti, bezpečnostní listy a pravidla pro skladování i manipulaci.
          </p>
          <div className="btn-row">
            <Link href={contactUrl("Školení chemického zákona / chemické legislativy")} className="button">
              Poptat školení
            </Link>
            <Link href="/poradna" className="button secondary">
              Odborná poradna
            </Link>
          </div>
        </header>

        <section className="grid grid-2 training-card-grid">
          <article className="card service-content-card">
            <h2>Pro koho je školení</h2>
            <ul className="check-list">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card service-content-card">
            <h2>Co školení zahrnuje</h2>
            <ul className="check-list">
              {scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid grid-2 training-card-grid">
          <article className="card service-content-card">
            <h2>Výstup školení</h2>
            <ul className="check-list">
              {outputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card service-content-card">
            <h2>Co poslat předem</h2>
            <ul className="check-list">
              {inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <PageCtaStrip {...pageCtaPresets.training} />
      </div>
    </main>
  );
}
