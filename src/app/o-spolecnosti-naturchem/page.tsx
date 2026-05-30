import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceStats } from "@/components/ExperienceStats";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { TeamMemberCards } from "@/components/TeamSection";
import { pageCtaPresets } from "@/lib/cta";
import { guaranteeIntroParagraph } from "@/lib/guarantee-copy";
import { homeTrustBandItems } from "@/lib/home-hero-metrics";
import { getPageHeroTheme } from "@/lib/hero-images";
import { nationalPresenceShort } from "@/lib/nationalMessaging";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "O NATURCHEM – měření, studie a povolovací podklady"
  },
  description:
    "Akreditovaná měření, studie a povolovací podklady pro průmyslové provozy, investory a veřejnou správu — déle než 36 let praxe.",
  alternates: { canonical: `${siteUrl}/o-spolecnosti-naturchem/` }
};

export default function ONaturchemPage() {
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "O NATURCHEM",
    url: `${siteUrl}/o-spolecnosti-naturchem/`,
    description: metadata.description
  };

  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NATURCHEM, s.r.o.",
    url: siteUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+420 603 216 983",
        email: "naturchem@naturchem.cz",
        areaServed: "CZ",
        availableLanguage: ["cs"]
      }
    ]
  };

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ing. František Hezina",
    jobTitle: "Jednatel, odborná garance zakázek",
    worksFor: { "@type": "Organization", name: "NATURCHEM, s.r.o.", url: siteUrl }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "O NATURCHEM", item: `${siteUrl}/o-spolecnosti-naturchem/` }
    ]
  };

  return (
    <main className="section about-page premium-page">
      <JsonLd data={aboutPageData} />
      <JsonLd data={orgData} />
      <JsonLd data={personData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/o-spolecnosti-naturchem")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "O NATURCHEM" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Měřicí a poradenská firma</p>
          <h1>O NATURCHEM</h1>
          <p className="page-lead">
            Postaráme se o měření, studie i povolovací podklady, které Váš provoz potřebuje — pro
            průmysl, investory, projektanty i veřejnou správu.
          </p>
        </header>
      </PageHeroBand>

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

      <section className="section content-block container">
        <h2>Kdo jsme</h2>
        <div className="about-two-column">
          <div>
            <p>
              Zajistíme akreditovaná měření, odborné studie a povolovací podklady — od protokolu z
              terénu přes výpočet až po dokumentaci pro správní řízení. Pracujeme pro průmyslové
              provozy, investory i projektanty.
            </p>
            <p>
              Nejsme jen laboratoř s jedním typem výstupu. Měření, výpočty, studie i dokumentaci pro
              úřady vyřešíte u nás najednou — bez koordinace více dodavatelů.
            </p>
          </div>
          <div>
            <p>{nationalPresenceShort}</p>
            <p>
              Přehled služeb a oborů najdete v sekcích{" "}
              <Link href="/sluzby">Služby</Link>,{" "}
              <Link href="/provozy-a-technologie">Provozy a technologie</Link>, v{" "}
              <Link href="/reference">referencích z praxe</Link> a v{" "}
              <Link href="/faq">častých dotazech</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface content-block">
        <div className="container">
          <article className="card guarantee-panel">
            <h2>Odborná garance</h2>
            <p>{guaranteeIntroParagraph}</p>
            <p>
              Za odbornou stránku zakázek odpovídá{" "}
              <strong>Ing. František Hezina</strong> — jednatel, odborná garance, soudní znalec,
              autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování emisí
              skleníkových plynů a oznámení EIA.{" "}
              <Link href="/odborna-garance">Více o odborné garanci</Link>
            </p>
          </article>
        </div>
      </section>

      <section className="section content-block container">
        <h2>Tým</h2>
        <TeamMemberCards />
      </section>

      <PageCtaStrip {...pageCtaPresets.cooperation} className="container" />
    </main>
  );
}
