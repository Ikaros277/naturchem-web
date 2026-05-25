import Link from "next/link";
import type { Metadata } from "next";
import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { heroCtaMeasurement, heroCtaStudy } from "@/lib/cta";
import { contactUrl } from "@/lib/contact-url";
import { formatArticleDate } from "@/lib/format-date";
import { poradnaTopicIconKey, topicForArticle } from "@/lib/poradna-topic";
import { homeHeroMetrics, homeTrustBandItems } from "@/lib/home-hero-metrics";
import { getLatestPoradnaArticles } from "@/lib/poradna-articles";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "NATURCHEM – měření, studie a dokumentace"
  },
  description:
    "Akreditovaná měření, rozptylové a hlukové studie, EIA, posudky, provozní řády, IPPC, ISPOP a GHG pro průmysl, investory a veřejný sektor.",
  alternates: { canonical: `${siteUrl}/` }
};

const processSteps = [
  {
    icon: "process-posouzeni" as const,
    title: "Posouzení podkladů",
    text: "Vyhodnotíme rozhodnutí, výzvu úřadu, projekt nebo popis provozu."
  },
  {
    icon: "process-rozsah" as const,
    title: "Návrh rozsahu",
    text: "Určíme měření, studii nebo dokumentaci podle účelu výstupu."
  },
  {
    icon: "process-zpracovani" as const,
    title: "Zpracování",
    text: "Provedeme měření, výpočet, posudek nebo povolovací podklady."
  },
  {
    icon: "process-vystup" as const,
    title: "Výstup pro úřad",
    text: "Předáme protokol, studii nebo dokumentaci s doporučením dalšího kroku."
  }
];

const offerPillars = [
  {
    icon: "pillar-mereni" as const,
    title: "Akreditovaná měření",
    text: "Emise, pracovní prostředí, hluk, vibrace, osvětlení, mikroklima a čisté prostory.",
    cta: "Zobrazit měření",
    href: "/sluzby#mericke-sluzby",
    links: [
      { label: "Měření emisí", href: "/mereni-emisi" },
      { label: "Pracovní prostředí", href: "/pracovni-prostredi" },
      { label: "Vibrace", href: "/mereni-vibraci" }
    ]
  },
  {
    icon: "pillar-studie" as const,
    title: "Studie a odborné výpočty",
    text: "Rozptylové studie, hlukové studie, akustické posudky a modelové výpočty.",
    cta: "Zobrazit studie",
    href: "/sluzby#studie-vypocty",
    links: [
      { label: "Rozptylové studie", href: "/rozptylove-studie" },
      { label: "Hlukové studie", href: "/hlukove-studie" },
      { label: "Modelové výpočty", href: "/modelove-vypocty" }
    ]
  },
  {
    icon: "pillar-dokumentace" as const,
    title: "Povolovací dokumentace a EIA",
    text: "EIA, odborné posudky, provozní řády, IPPC, ISPOP, GHG a podklady pro správní orgány.",
    cta: "Zobrazit dokumentaci",
    href: "/sluzby#povolovaci-podklady",
    links: [
      { label: "EIA a posudky", href: "/eia-posudky-poradenstvi" },
      { label: "IPPC / ISPOP / GHG", href: "/ippc-integrovana-povoleni" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  }
];

const referenceSegments = [
  "Průmysl a automotive",
  "Energetika",
  "Stavebnictví",
  "Odpady a recyklace",
  "Veřejný sektor"
];

const referenceExamples = [
  "měření emisí pro lakovnu",
  "rozptylová a hluková studie",
  "měření pracovního prostředí"
];

const audienceFocus = [
  {
    icon: "audience-prumysl" as const,
    title: "Průmysl a výroba",
    text: "Měření, studie a provozní dokumentace pro výrobní technologie a areály."
  },
  {
    icon: "audience-energetika" as const,
    title: "Energetika a zdroje emisí",
    text: "Kotelny, spalovací zdroje, kogenerace, ISPOP a povolení provozu."
  },
  {
    icon: "audience-investor" as const,
    title: "Investoři a projektanti",
    text: "Podklady pro EIA, stavební řízení, povolení a projektovou dokumentaci."
  },
  {
    icon: "audience-odpady" as const,
    title: "Odpady, skládky a recyklace",
    text: "Rozptyl, hluk, EIA a kapacitní změny zařízení k nakládání s odpady."
  },
  {
    icon: "audience-verejny" as const,
    title: "Veřejný sektor a obce",
    text: "Odborné podklady pro rozhodování, investice a komunikaci se správními orgány."
  },
  {
    icon: "audience-budovy" as const,
    title: "Budovy, VZT a technologie",
    text: "Hluk, mikroklima, pracovní prostředí, tepelná čerpadla a technická zařízení budov."
  }
] as const;

export default async function Home() {
  const latestArticles = await getLatestPoradnaArticles(3);
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl }]
  };

  return (
    <main className="home-page">
      <JsonLd data={breadcrumbData} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Akreditovaná měření · odborné studie · dokumentace pro úřady</p>
            <h1>Měření, studie a dokumentace pro provozy, investory a úřady</h1>
            <p className="hero-lead">
              NATURCHEM propojuje terénní měření, výpočty, odborné posudky, EIA a povolovací
              dokumentaci do jednoho obhajitelného postupu pro průmysl, investory, projektanty a
              veřejnou správu.
            </p>
            <div className="hero-actions">
              <Link href={contactUrl("Měření emisí")} className="button">
                {heroCtaMeasurement}
              </Link>
              <Link href={contactUrl("Odborné posudky")} className="button secondary">
                {heroCtaStudy}
              </Link>
            </div>
            <p className="hero-unsure">
              <Link href={contactUrl("Nejsem si jistý")}>
                Nevím, co potřebuji – poslat podklady k posouzení
              </Link>
            </p>
          </div>
          <aside className="hero-proof-panel" aria-label="Odborné důkazy NATURCHEM">
            <p className="proof-panel-label">Odborná garance</p>
            <strong>Laboratoř, autorizace a povolovací podklady v návaznosti</strong>
            <div className="proof-metrics">
              {homeHeroMetrics.map((metric) => (
                <article key={metric.label} className="proof-metric-card">
                  <span className="proof-metric-value">{metric.value}</span>
                  <span className="proof-metric-label">{metric.label}</span>
                </article>
              ))}
            </div>
            <p className="proof-panel-note">
              Výstupy pro KHS, ČIŽP, krajské úřady, stavební úřady a procesy EIA.
            </p>
          </aside>
        </div>
      </section>

      <section className="trust-band" aria-labelledby="duveryhodnost-heading">
        <div className="container trust-band-inner">
          <h2 id="duveryhodnost-heading" className="sr-only">
            Důvěryhodnost a oprávnění
          </h2>
          {homeTrustBandItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="home-section home-section-surface">
        <div className="container">
          <header className="section-header">
            <h2>Co zajišťujeme</h2>
            <p className="muted section-intro">
              Tři hlavní oblasti, které v praxi často navazují: měření, studie a dokumentace pro úřady.
            </p>
          </header>
          <div className="home-offer-grid home-offer-grid-three">
            {offerPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="institutional-card home-offer-card card-interactive"
              >
                <Link
                  href={pillar.href}
                  className="card-cover-link"
                  aria-label={`${pillar.title} — ${pillar.cta}`}
                />
                <ServiceIcon icon={pillar.icon} />
                <h3>{pillar.title}</h3>
                <p className="muted">{pillar.text}</p>
                <ul className="home-offer-links">
                  {pillar.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="card-interactive-nested">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pillar.href}
                  className="button secondary home-offer-cta card-interactive-nested"
                >
                  {pillar.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section container">
        <header className="section-header">
          <h2>Pro koho pracujeme</h2>
          <p className="muted section-intro">
            Rozsah zakázky navrhujeme podle role zákazníka, typu provozu a účelu výstupu.
          </p>
        </header>
        <div className="audience-grid">
          {audienceFocus.map((a) => (
            <article key={a.title} className="card audience-card">
              <ServiceIcon icon={a.icon} />
              <h3>{a.title}</h3>
              <p className="muted">{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section container">
        <header className="section-header">
          <h2>Jak probíhá zakázka</h2>
          <p className="muted section-intro">
            Zakázku nenavrhujeme podle šablony, ale podle účelu výstupu a požadavků úřadu nebo investora.
          </p>
        </header>
        <div className="process-timeline">
          {processSteps.map((step, i) => (
            <article key={step.title} className="timeline-step">
              <span className="step-num" aria-hidden="true">
                <ServiceIcon icon={step.icon} size={20} className="step-num-icon" />
              </span>
              <span className="sr-only">Krok {i + 1}:</span>
              <h3>{step.title}</h3>
              <p className="muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section container">
        <article className="card proof-section home-reference-teaser">
          <div>
            <p className="eyebrow">Vybrané zkušenosti</p>
            <h2>Zkušenosti z průmyslu, energetiky, stavebnictví a veřejného sektoru</h2>
            <p className="muted">
              Zakázky často kombinují akreditovaná měření, odborné studie, technické podklady a
              komunikaci s úřady.
            </p>
            <div className="reference-tags">
              {referenceSegments.map((item) => (
                <span key={item} className="reference-tag">
                  {item}
                </span>
              ))}
            </div>
            <Link href="/reference" className="button secondary">
              Zobrazit reference
            </Link>
          </div>
          <ul className="proof-list">
            {referenceExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="home-section container">
        <header className="section-header">
          <h2>Odborná poradna</h2>
          <p className="muted section-intro">Krátké odborné články k měření, studiím a povolování.</p>
        </header>
        <div className="grid grid-3 article-card-grid">
          {latestArticles.map((article) => {
            const publishedLabel = formatArticleDate(article.publishedAt);
            return (
              <IndexCard
                key={article.href}
                href={article.href}
                title={article.title}
                className="article-card article-list-card"
                cta="Číst článek"
                meta={
                  <>
                    {publishedLabel ? (
                      <time className="article-card-date muted" dateTime={article.publishedAt}>
                        {publishedLabel}
                      </time>
                    ) : null}
                    <span className="tag">{topicForArticle(article.title)}</span>
                  </>
                }
              >
                {article.excerpt ? <p className="article-card-excerpt muted">{article.excerpt}</p> : null}
              </IndexCard>
            );
          })}
        </div>
        <p className="home-poradna-cta">
          <Link href="/poradna" className="button secondary">
            Zobrazit Odbornou poradnu
          </Link>
        </p>
      </section>

      <section className="home-section container">
        <article className="card cta-banner final-cta">
          <h2>Nejste si jistí, jaký výstup po vás úřad požaduje?</h2>
          <p className="muted">
            Pošlete nám rozhodnutí, výzvu nebo popis záměru. Navrhneme vhodný rozsah měření, studie
            nebo dokumentace.
          </p>
          <Link href={contactUrl("Nejsem si jistý")} className="button">
            Poslat podklady k posouzení
          </Link>
        </article>
      </section>
    </main>
  );
}
