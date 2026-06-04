import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudiesView } from "@/components/CaseStudiesView";
import { PageHeroBand } from "@/components/PageHeroBand";
import { caseStudyCategories, getCaseStudyCategory } from "@/lib/case-studies";
import { getPageHeroTheme } from "@/lib/hero-images";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return caseStudyCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCaseStudyCategory(slug);
  if (!category) return { title: "Typy zakázek" };

  return {
    title: `${category.title} – typy realizovaných zakázek`,
    description: `${category.short} Příklady řešených zakázek NATURCHEM.`,
    alternates: { canonical: `${siteUrl}/typicke-zakazky/${slug}/` }
  };
}

export default async function CaseStudyCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCaseStudyCategory(slug);
  if (!category) notFound();

  return (
    <main className="section premium-page">
      <PageHeroBand
        theme={getPageHeroTheme(`/typicke-zakazky/${slug}`)}
        breadcrumbs={[
          { name: "Úvod", href: "/" },
          { name: "Typické zakázky", href: "/typicke-zakazky" },
          { name: category.title }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{category.title}</h1>
          <p className="page-lead">{category.short}</p>
        </header>
      </PageHeroBand>
      <section className="section content-block container page-first-section">
        <CaseStudiesView category={category} categories={caseStudyCategories} />
        <p className="btn-row">
          <Link href="/typicke-zakazky" className="button secondary">
            Všechny typy zakázek
          </Link>
        </p>
      </section>
    </main>
  );
}
