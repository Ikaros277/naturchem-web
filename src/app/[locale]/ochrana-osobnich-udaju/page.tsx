import type { Metadata } from "next";
import { PrivacyPageBody } from "@/components/PrivacyPageBody";
import { getPrivacyPage } from "@/lib/i18n/content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { legalPaths } from "@/lib/legal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { metadata } = getPrivacyPage(locale);
  return {
    ...pageMetadata({
      locale,
      path: legalPaths.privacy,
      absoluteTitle: metadata.title.absolute,
      description: metadata.description
    }),
    robots: { index: true, follow: true }
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  return <PrivacyPageBody locale={locale} />;
}
