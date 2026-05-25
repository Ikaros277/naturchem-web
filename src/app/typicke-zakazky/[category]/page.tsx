import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudiesView } from "@/components/CaseStudiesView";
import { caseStudyCategories, getCaseStudyCategory } from "@/lib/case-studies";
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
    <main className="container section">
      <Breadcrumbs
        items={[
          { name: "Úvod", href: "/" },
          { name: "Typické zakázky", href: "/typicke-zakazky" },
          { name: category.title }
        ]}
      />
      <h1>{category.title}</h1>
      <p className="muted">{category.short}</p>
      <CaseStudiesView category={category} categories={caseStudyCategories} />
      <p style={{ marginTop: "1.25rem" }}>
        <Link href="/typicke-zakazky" className="button secondary">
          Všechny typy zakázek
        </Link>
      </p>
    </main>
  );
}
