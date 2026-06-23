import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoLanding, getSeoLandings } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const landings = await getSeoLandings("cs");
  return landings.map((landing) => ({ slug: landing.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const landing = await getSeoLanding(slug, locale);
  if (!landing) {
    const messages = await getMessages(locale);
    return { title: messages.common.viewService };
  }

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
  const landing = await getSeoLanding(slug, locale);
  if (!landing) notFound();

  return <SeoLandingPage landing={landing} locale={locale} />;
}
