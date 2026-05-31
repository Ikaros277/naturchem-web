import Link from "next/link";
import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { ExperienceStats } from "@/components/ExperienceStats";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { ClientLogosGrid } from "@/components/ClientLogosGrid";
import { homeTrustBandItems } from "@/lib/home-hero-metrics";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "NATURCHEM – měření, studie a dokumentace"
  },
  description:
    "Akreditovaná měření emisí a pracovního prostředí, hlukové a rozptylové studie, EIA, posudky, provozní řády, IPPC, ISPOP a GHG — pro provozovatele, investory a veřejný sektor.",
  alternates: { canonical: `${siteUrl}/` }
};

const offerPillars = [
  {
    icon: "pillar-mereni" as const,
    title: "Akreditovaná měření",
    text: "Změříme emise, pracovní prostředí, hluk, vibrace, osvětlení, mikroklima i čisté prostory — akreditovaně, s výstupem pro úřady.",
    cta: "Zobrazit měření",
    href: "/sluzby#mericke-sluzby",
    tags: ["KHS", "ČIŽP", "ISO 17025"],
    links: [
      { label: "Měření emisí", href: "/sluzby/mereni-emisi" },
      { label: "Pracovní prostředí", href: "/sluzby/pracovni-prostredi" },
      { label: "Vibrace", href: "/sluzby/mereni-vibraci" }
    ]
  },
  {
    icon: "pillar-studie" as const,
    title: "Studie a odborné výpočty",
    text: "Připravíme rozptylové a hlukové studie, akustické posudky a modelové výpočty pro KHS, stavební řízení nebo EIA.",
    cta: "Zobrazit studie",
    href: "/sluzby#studie-vypocty",
    tags: ["EIA", "KHS", "KÚ"],
    links: [
      { label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
      { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
      { label: "Modelové výpočty", href: "/sluzby/modelove-vypocty" }
    ]
  },
  {
    icon: "pillar-dokumentace" as const,
    title: "Povolovací dokumentace a EIA",
    text: "Zpracujeme EIA, odborné posudky, provozní řády, IPPC, ISPOP, GHG i další dokumentaci pro správní orgány.",
    cta: "Zobrazit dokumentaci",
    href: "/sluzby#povolovaci-podklady",
    tags: ["EIA", "IPPC", "ČIŽP"],
    links: [
      { label: "EIA a posudky", href: "/sluzby/eia-posudky-poradenstvi" },
      { label: "IPPC / ISPOP / GHG", href: "/sluzby/ippc-integrovana-povoleni" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  }
];

export default function Home() {
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
            <p className="eyebrow">
              Akreditovaná měření · studie a posudky · podklady pro KHS, ČIŽP a stavební úřady
            </p>
            <h1>Akreditovaná měření, studie a podklady pro úřady</h1>
            <p className="hero-lead">
              Postaráme se o vše, co Váš provoz potřebuje — pro provozovatele, investory i projektanty,
              bez nutnosti poptávat více dodavatelů.
            </p>
          </div>
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

      <section className="home-stats-compact" aria-label="Zkušenosti v číslech">
        <div className="container">
          <ExperienceStats variant="compact" showNote={false} />
        </div>
      </section>

      <section className="home-section home-section-offer" aria-labelledby="home-offer-heading">
        <div className="container">
          <header className="section-header home-offer-header">
            <p className="eyebrow">Naše služby</p>
            <h2 id="home-offer-heading">Co zajišťujeme</h2>
            <p className="muted section-intro">
              Služby u nás na sebe navazují — nemusíte poptávat více dodavatelů.
            </p>
          </header>
          <div className="home-offer-grid home-offer-grid-three">
            {offerPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="card institutional-card home-offer-card card-interactive"
              >
                <Link
                  href={pillar.href}
                  className="card-cover-link"
                  aria-label={`${pillar.title} — ${pillar.cta}`}
                />
                <header className="home-offer-card-head">
                  <ServiceIcon icon={pillar.icon} variant="card" className="home-offer-icon" />
                  <h3>{pillar.title}</h3>
                </header>
                <ul className="tag-row home-offer-tags" aria-label="Typické oblasti">
                  {pillar.tags.map((tag) => (
                    <li key={tag}>
                      <span className="tag">{tag}</span>
                    </li>
                  ))}
                </ul>
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
                  className="button home-offer-cta card-interactive-nested"
                >
                  {pillar.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section container home-clients-section">
        <p className="eyebrow">Naši zákazníci</p>
        <ClientLogosGrid moreHref="/reference#zakaznici" />
      </section>
    </main>
  );
}
