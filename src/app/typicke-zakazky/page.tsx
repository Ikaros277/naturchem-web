import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudiesView } from "@/components/CaseStudiesView";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { TypicalScenarios } from "@/components/TypicalScenarios";
import { pageCtaPresets } from "@/lib/cta";
import { caseStudyCategories } from "@/lib/case-studies";
import { getPageHeroTheme } from "@/lib/hero-images";
import { siteUrl } from "@/lib/site";

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
            Přehled nejčastějších scénářů z praxe — měření emisí, pracovního prostředí, hluku,
            rozptylové a hlukové studie, EIA podklady, ISPOP a školení chemické legislativy. U každé
            zakázky upřesňujeme rozsah podle podkladů a účelu výstupu.
          </p>
          <p>
            <Link href="/reference">Vybrané reference a oblasti realizací</Link>
          </p>
        </header>
      </PageHeroBand>

      <div className="container">
        <section className="section">
          <h2>Scénáře z praxe</h2>
          <TypicalScenarios />
        </section>

        <section className="section">
          <h2>Další příklady podle oblasti</h2>
          <CaseStudiesView categories={caseStudyCategories} />
        </section>

        <PageCtaStrip {...pageCtaPresets.typicalOrders} />
      </div>
    </main>
  );
}
