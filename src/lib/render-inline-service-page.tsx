import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { inlineServicePagesEn } from "@/lib/inline-service-pages-en";
import { inlineServicePagesEn as inlineServicePagesDe } from "@/lib/inline-service-pages-de";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import type { ComponentProps } from "react";

type ServicePageProps = ComponentProps<typeof ServicePage>;

type PageProps = {
  params: Promise<{ locale: string }>;
};

function inlinePropsForLocale(slug: string, locale: Locale, czech: ServicePageProps) {
  if (locale === "de") return inlineServicePagesDe[slug] ?? czech;
  if (locale === "en") return inlineServicePagesEn[slug] ?? czech;
  return czech;
}

export function createInlineServicePageExports(
  slug: string,
  czech: ServicePageProps
) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    const props = inlinePropsForLocale(slug, locale, czech);
    return pageMetadata({
      locale,
      path: `/${props.slug}`,
      title: props.title,
      description: props.intro.slice(0, 160)
    });
  }

  async function Page({ params }: PageProps) {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    const props = inlinePropsForLocale(slug, locale, czech);
    if (!props) {
      return <ServicePage {...czech} />;
    }
    return <ServicePage {...props} />;
  }

  return { generateMetadata, Page };
}
