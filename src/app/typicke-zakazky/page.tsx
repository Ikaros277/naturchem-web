import type { Metadata } from "next";

import { CaseStudiesCategoryGrid } from "@/components/CaseStudiesCategoryGrid";

import { PageCtaStrip } from "@/components/PageCtaStrip";

import { PageHeroBand } from "@/components/PageHeroBand";

import { TypicalScenarios } from "@/components/TypicalScenarios";

import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";

import { pageCtaPresets } from "@/lib/cta";

import { caseStudyCategories } from "@/lib/case-studies";

import { getPageHeroTheme } from "@/lib/hero-images";

import { siteUrl } from "@/lib/site";

import {

  typickeZakazkyExamplesHeading,

  typickeZakazkyExamplesIntro,

  typickeZakazkyEyebrow,

  typickeZakazkyHeroLead,

  typickeZakazkyScenariosHeading

} from "@/lib/typicke-zakazky-content";

import { workProcessHeading, workProcessIntro } from "@/lib/work-process";



export const metadata: Metadata = {

  title: "Typické zakázky – měření, studie, ISPOP a školení",

  description:

    "Přehled měření, studií a podkladů z praxe NATURCHEM — emise, hygiena, hluk, EIA, ISPOP a typické situace provozů.",

  alternates: { canonical: `${siteUrl}/typicke-zakazky/` }

};



export default function TypickeZakazkyPage() {

  return (

    <main className="section premium-page typicke-zakazky-page">

      <PageHeroBand

        theme={getPageHeroTheme("/typicke-zakazky")}

        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Typické zakázky" }]}

      >

        <header className="premium-page-hero page-hero--photo">

          <p className="eyebrow">{typickeZakazkyEyebrow}</p>

          <h1>Typické zakázky</h1>

          <p className="page-lead">{typickeZakazkyHeroLead}</p>

        </header>

      </PageHeroBand>



      <section className="section content-block container page-first-section typicke-zakazky-process">

        <h2>{workProcessHeading}</h2>

        <p className="muted section-intro">{workProcessIntro}</p>

        <WorkProcessTimeline />

      </section>



      <section className="section content-block container">

        <h2>{typickeZakazkyScenariosHeading}</h2>

        <TypicalScenarios />

      </section>



      <section className="section content-block container">

        <h2>{typickeZakazkyExamplesHeading}</h2>

        <p className="muted section-intro">{typickeZakazkyExamplesIntro}</p>

        <CaseStudiesCategoryGrid categories={caseStudyCategories} />

      </section>



      <PageCtaStrip {...pageCtaPresets.typicalOrders} className="container" />

    </main>

  );

}

