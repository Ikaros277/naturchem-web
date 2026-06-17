import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoLanding, getSeoLandings } from "@/lib/i18n/content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getSeoLandings("cs").map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const landing = getSeoLanding(slug, locale);
  if (!landing) return { title: "Služba" };

  return pageMetadata({
    locale,
    path: `/${landing.slug}`,
    title: landing.title,
    description: landing.metaDescription
  });
}

export default async function SeoLandingRoute({ params }: Props) {
  const { slug, locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const landing = getSeoLanding(slug, locale);
  if (!landing) notFound();

  return <SeoLandingPage landing={landing} locale={locale} />;
}
