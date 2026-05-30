import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceStats } from "@/components/ExperienceStats";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { TeamMemberCards } from "@/components/TeamSection";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { pageCtaPresets } from "@/lib/cta";
import { guaranteeIntroParagraph } from "@/lib/guarantee-copy";
import { getPageHeroTheme } from "@/lib/hero-images";
import { nationalPresenceShort } from "@/lib/nationalMessaging";
import { siteUrl } from "@/lib/site";
import { workProcessHeading, workProcessIntro } from "@/lib/work-process";

export const metadata: Metadata = {
  title: {
    absolute: "O NATURCHEM – měření, studie a povolovací podklady"
  },
  description:
    "NATURCHEM propojuje akreditovaná měření, výpočtové studie, EIA, odborné posudky, provozní řády, ISPOP a technické podklady pro úřady.",
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
        <header className="premium-page-hero about-hero page-hero--photo">
          <div>
            <p className="eyebrow">Firemní profil</p>
            <h1>O NATURCHEM</h1>
            <p className="page-lead">
              Akreditovaná měřicí a poradenská společnost, která propojuje terénní měření, odborné
              studie a povolovací podklady pro průmysl, investory a veřejnou správu.
            </p>
          </div>
          <aside className="hero-proof-panel about-proof-panel">
            <p className="proof-panel-label">Odborná autorita</p>
            <strong>Akreditace, autorizace a dlouhodobá praxe v jednom procesu</strong>
          </aside>
        </header>
      </PageHeroBand>

      <section className="section section-surface">
        <div className="container stats-section">
        <h2>Zkušenosti v číslech</h2>
        <ExperienceStats showNote />
        </div>
      </section>

      <section className="section content-block container">
        <h2>Kdo jsme</h2>
        <div className="about-two-column">
          <div>
        <p>
          NATURCHEM, s.r.o. je akreditovaná měřicí a poradenská společnost pro průmyslové provozy,
          investory a projektanty. Zaměřujeme se na odborně obhajitelné výstupy — od protokolu z
          terénu přes studii až po dokumentaci pro správní řízení.
        </p>
        <p>
          Nejsme pouze laboratoř s jedním typem výstupu. Dlouhodobě propojujeme měření, výpočty,
          studie a povolovací podklady tak, aby šly řešit v jednom odborném procesu.
        </p>
          </div>
          <div>
        <p>{nationalPresenceShort}</p>
        <p>
          Přehled služeb a oborů najdete v sekcích{" "}
          <Link href="/sluzby">Služby</Link>,{" "}
          <Link href="/provozy-a-technologie">Provozy a technologie</Link> a v{" "}
          <Link href="/faq">častých dotazech</Link>.
        </p>
          </div>
        </div>
      </section>

      <section className="section content-block container">
        <h2>{workProcessHeading}</h2>
        <p className="muted section-intro">{workProcessIntro}</p>
        <WorkProcessTimeline />
      </section>

      <section className="section section-surface content-block">
        <div className="container">
        <article className="card guarantee-panel">
        <h2>Odborná garance</h2>
        <p>{guaranteeIntroParagraph}</p>
        <p>
          Jmenovitě za odbornou stránku zakázek odpovídá{" "}
          <strong>Ing. František Hezina</strong> — jednatel společnosti, odborná garance zakázek, soudní
          znalec, autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování
          emisí skleníkových plynů a oznámení EIA.
        </p>
        </article>
        </div>
      </section>

      <section className="section content-block container">
        <h2>Tým</h2>
        <TeamMemberCards />
      </section>

      <section className="section section-surface content-block">
        <div className="container">
        <h2>Typičtí zákazníci</h2>
        <ul className="check-list">
          <li>výrobní a energetické provozy, kotelny, lakovny, svařovny, sklárny</li>
          <li>bioplynové stanice, recyklační a odpadová zařízení, zemědělské provozy</li>
          <li>investoři, projektanti, automotive a veřejní zadavatelé</li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/reference">Reference a vybrané zkušenosti</Link>
        </p>
        </div>
      </section>

      <PageCtaStrip {...pageCtaPresets.cooperation} className="container" />
    </main>
  );
}
