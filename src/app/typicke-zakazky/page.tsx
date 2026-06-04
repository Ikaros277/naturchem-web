import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudiesView } from "@/components/CaseStudiesView";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { TypicalScenarios } from "@/components/TypicalScenarios";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { pageCtaPresets } from "@/lib/cta";
import { caseStudyCategories } from "@/lib/case-studies";
import { getPageHeroTheme } from "@/lib/hero-images";
import { siteUrl } from "@/lib/site";
import { workProcessHeading, workProcessIntro } from "@/lib/work-process";

export const metadata: Metadata = {
  title: "Typické zakázky – měření, studie, ISPOP a školení",
  description:
    "Konkrétní scénáře zakázek NATURCHEM: měření emisí, pracovní prostředí, hlukové a rozptylové studie, EIA, ISPOP a školení chemické legislativy.",
  alternates: { canonical: `${siteUrl}/typicke-zakazky/` }
};

export default function TypickeZakazkyPage() {
  return (
    <main className="section premium-page">
      <PageHeroBand
        theme={getPageHeroTheme("/typicke-zakazky")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Typické zakázky" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Scénáře z praxe</p>
          <h1>Typické zakázky</h1>
          <p className="page-lead">
            Nejčastější scénáře z praxe — od měření emisí po EIA a ISPOP — s rozsahem podle
            podkladů a požadavku ČIŽP, KHS nebo stavebního úřadu.
          </p>
          <p>
            <Link href="/reference">Vybrané reference a oblasti realizací</Link>
          </p>
        </header>
      </PageHeroBand>

      <section className="section content-block container page-first-section">
        <h2>{workProcessHeading}</h2>
        <p className="muted section-intro">{workProcessIntro}</p>
        <WorkProcessTimeline />
      </section>

      <section className="section content-block container">
        <h2>Scénáře z praxe</h2>
        <TypicalScenarios />
      </section>

      <section className="section content-block container">
        <h2>Další příklady podle oblasti</h2>
        <CaseStudiesView categories={caseStudyCategories} />
      </section>

      <PageCtaStrip {...pageCtaPresets.typicalOrders} className="container" />
    </main>
  );
}
