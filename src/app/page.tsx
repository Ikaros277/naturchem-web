import Link from "next/link";
import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { ExperienceStats } from "@/components/ExperienceStats";
import { IndexCard } from "@/components/IndexCard";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { heroCtaMeasurement, heroCtaStudy, pageCtaPresets } from "@/lib/cta";
import { contactUrl } from "@/lib/contact-url";
import { formatArticleDate } from "@/lib/format-date";
import { poradnaTopicIconKey, topicForArticle } from "@/lib/poradna-topic";
import { homeTrustBandItems } from "@/lib/home-hero-metrics";
import { getLatestPoradnaArticles } from "@/lib/poradna-articles";
import { siteUrl } from "@/lib/site";
import { clientLogoItemClass, referenceClients } from "@/lib/client-logos";

export const metadata: Metadata = {
  title: {
    absolute: "NATURCHEM – měření, studie a dokumentace"
  },
  description:
    "Akreditovaná měření, rozptylové a hlukové studie, EIA, posudky, provozní řády, IPPC, ISPOP a GHG pro průmysl, investory a veřejný sektor.",
  alternates: { canonical: `${siteUrl}/` }
};

const offerPillars = [
  {
    icon: "pillar-mereni" as const,
    title: "Akreditovaná měření",
    text: "Emise, pracovní prostředí, hluk, vibrace, osvětlení, mikroklima a čisté prostory.",
    cta: "Zobrazit měření",
    href: "/sluzby#mericke-sluzby",
    links: [
      { label: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { label: "Pracovní prostředí", href: "/sluzby/pracovni-prostredi" },
      { label: "Vibrace", href: "/sluzby/mereni-vibraci" }
    ]
  },
  {
    icon: "pillar-studie" as const,
    title: "Studie a odborné výpočty",
    text: "Rozptylové studie, hlukové studie, akustické posudky a modelové výpočty.",
    cta: "Zobrazit studie",
    href: "/sluzby#studie-vypocty",
    links: [
      { label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
      { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
      { label: "Modelové výpočty", href: "/sluzby/modelove-vypocty" }
    ]
  },
  {
    icon: "pillar-dokumentace" as const,
    title: "Povolovací dokumentace a EIA",
    text: "EIA, odborné posudky, provozní řády, IPPC, ISPOP, GHG a podklady pro správní orgány.",
    cta: "Zobrazit dokumentaci",
    href: "/sluzby#povolovaci-podklady",
    links: [
      { label: "EIA a posudky", href: "/sluzby/eia-posudky-poradenstvi" },
      { label: "IPPC / ISPOP / GHG", href: "/sluzby/ippc-integrovana-povoleni" },
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
      <section className="hero hero--photo hero--copy-only">
        <HeroPhoto theme="home" priority />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Akreditovaná měření · odborné studie · dokumentace pro úřady</p>
            <h1>Měření, studie a dokumentace pro provozy, investory a úřady</h1>
            <p className="hero-lead">
              Měření emisí, hlukové studie a podklady pro EIA v jednom procesu — pro průmyslové
              provozy, investory a projektanty.
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
        </div>
      </section>

      <section className="home-usp-section section-surface" aria-labelledby="home-usp-heading">
        <div className="container stats-section">
          <h2 id="home-usp-heading">Odborná garance</h2>
          <ExperienceStats showNote={false} />
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
                <ServiceIcon icon={pillar.icon} variant="card" />
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

      <section className="home-section home-section-surface">
        <div className="container">
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
        </div>
      </section>

      <section className="home-section container">
        <PageCtaStrip {...pageCtaPresets.uncertain} />
      </section>

      <section className="home-section container home-clients-section">
        <p className="eyebrow">Naši zákazníci</p>
        <div className="client-logos-grid">
          {referenceClients.map(client => (
            <a
              key={client.name}
              href={client.website}
              className={clientLogoItemClass(client)}
              target="_blank"
              rel="noopener noreferrer"
              title={client.name}
              aria-label={client.name}
            >
              <img src={client.logo} alt={client.name} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
