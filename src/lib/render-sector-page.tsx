import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorIndexPage } from "@/components/SectorIndexPage";
import { SectorPage } from "@/components/SectorPage";
import { getSectorPage } from "@/lib/i18n/content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { isSectorDetailPage } from "@/lib/sector-pages";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function createSectorDetailPageExports(slug: string) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    const data = await getSectorPage(slug, locale);
    if (!isSectorDetailPage(data)) {
      return { title: "Provoz" };
    }
    return pageMetadata({
      locale,
      path: `/provozy-a-technologie/${slug}`,
      title: data.metadataTitle,
      description: data.metadataDescription
    });
  }

  async function Page({ params }: PageProps) {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    const data = await getSectorPage(slug, locale);
    if (!isSectorDetailPage(data)) notFound();
    return <SectorPage locale={locale} {...data} />;
  }

  return { generateMetadata, Page };
}

export function createSectorIndexPageExports() {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    const data = await getSectorPage("index", locale);
    return pageMetadata({
      locale,
      path: "/provozy-a-technologie",
      title: data.metadataTitle,
      description: data.metadataDescription
    });
  }

  async function Page({ params }: PageProps) {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    return <SectorIndexPage locale={locale} />;
  }

  return { generateMetadata, Page };
}
