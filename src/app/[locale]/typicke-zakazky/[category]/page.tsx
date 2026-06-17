import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudiesView } from "@/components/CaseStudiesView";
import { PageHeroBand } from "@/components/PageHeroBand";
import { getCaseStudyCategories, getCaseStudyCategory } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export async function generateStaticParams() {
  const categories = getCaseStudyCategories("cs");
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, category: slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const category = getCaseStudyCategory(slug, locale);
  if (!category) {
    return { title: messages.caseStudies.categoryFallbackTitle };
  }

  return pageMetadata({
    locale,
    path: `/typicke-zakazky/${slug}`,
    title: messages.caseStudies.categoryMetaTitle.replace("{title}", category.title),
    description: messages.caseStudies.categoryMetaDescription.replace("{short}", category.short)
  });
}

export default async function CaseStudyCategoryPage({ params }: Props) {
  const { locale: localeParam, category: slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const category = getCaseStudyCategory(slug, locale);
  if (!category) notFound();

  const categories = getCaseStudyCategories(locale);
  const link = (href: string) => localizeHref(href, locale);

  return (
    <main className="section premium-page">
      <PageHeroBand
        theme={getPageHeroTheme(`/typicke-zakazky/${slug}`)}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.caseStudies.breadcrumb, href: link("/typicke-zakazky") },
          { name: category.title }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{category.title}</h1>
          <p className="page-lead">{category.short}</p>
        </header>
      </PageHeroBand>
      <section className="section content-block container page-first-section">
        <p className="btn-row" style={{ marginBottom: "1.25rem" }}>
          <Link href={link("/typicke-zakazky")} className="button secondary">
            {messages.caseStudies.backLink}
          </Link>
        </p>
        <CaseStudiesView category={category} categories={categories} locale={locale} />
      </section>
    </main>
  );
}
