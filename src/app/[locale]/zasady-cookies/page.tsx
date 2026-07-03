import type { Metadata } from "next";
import { CookiesPageBody } from "@/components/CookiesPageBody";
import { getCookiesPage } from "@/lib/i18n/content";
import { pageMetadata, withNoindex } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { legalPaths } from "@/lib/legal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { metadata } = await getCookiesPage(locale);
  return withNoindex(
    pageMetadata({
      locale,
      path: legalPaths.cookies,
      absoluteTitle: metadata.title.absolute,
      description: metadata.description
    })
  );
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  return <CookiesPageBody locale={locale} />;
}
