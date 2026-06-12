import type { Metadata } from "next";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { ExperienceStats } from "@/components/ExperienceStats";
import { HomeOfferCard } from "@/components/HomeOfferCard";
import { JsonLd } from "@/components/Schema";
import { ClientLogosGrid } from "@/components/ClientLogosGrid";
import { HomePoradnaStrip } from "@/components/HomePoradnaStrip";
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
    teaser: "Emise, hluk, pracovní prostředí i vibrace — akreditovaně, s výstupem pro KHS a ČIŽP…",
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
    teaser: "Rozptylové a hlukové studie, posudky a výpočty pro řízení, KHS nebo EIA…",
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
    title: "Dokumentace a EIA",
    teaser: "EIA, posudky, provozní řády, IPPC a ISPOP — podklady pro úřady a povolení…",
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

export default async function Home() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl }]
  };

  return (
    <main className="home-page">
      <JsonLd data={breadcrumbData} />
      <HomeHeroSection />

      <section className="trust-band home-fade-in-section" aria-labelledby="duveryhodnost-heading">
        <div className="container trust-band-inner">
          <h2 id="duveryhodnost-heading" className="sr-only">
            Důvěryhodnost a oprávnění
          </h2>
          {homeTrustBandItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="home-stats-compact home-fade-in-section home-fade-in-section-delay-1" aria-label="Zkušenosti v číslech">
        <div className="container">
          <ExperienceStats variant="compact" showNote={false} />
        </div>
      </section>

      <section
        className="home-section home-section-offer home-fade-in-section home-fade-in-section-delay-2"
        aria-labelledby="home-offer-heading"
      >
        <div className="container">
          <header className="section-header home-offer-header">
            <h2 id="home-offer-heading">Co zajišťujeme</h2>
          </header>
          <div className="home-offer-grid home-offer-grid-three">
            {offerPillars.map((pillar) => (
              <HomeOfferCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      <HomePoradnaStrip />

      <section
        className="home-section container home-clients-section section--forest-tint"
        aria-labelledby="home-clients-heading"
      >
        <h2 id="home-clients-heading" className="sr-only">
          Naši zákazníci
        </h2>
        <ClientLogosGrid moreHref="/reference#zakaznici" />
      </section>
    </main>
  );
}
