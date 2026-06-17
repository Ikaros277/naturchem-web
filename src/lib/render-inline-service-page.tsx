import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import type { ComponentProps } from "react";

type ServicePageContent = Omit<ComponentProps<typeof ServicePage>, "locale">;

type PageProps = {
  params: Promise<{ locale: string }>;
};

async function inlinePropsForLocale(slug: string, locale: Locale, czech: ServicePageContent) {
  if (locale === "de") {
    const mod = await import("@/lib/inline-service-pages-de");
    return mod.inlineServicePagesEn[slug] ?? czech;
  }
  if (locale === "en") {
    const mod = await import("@/lib/inline-service-pages-en");
    return mod.inlineServicePagesEn[slug] ?? czech;
  }
  return czech;
}

export function createInlineServicePageExports(
  slug: string,
  czech: ServicePageContent
) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
    const props = await inlinePropsForLocale(slug, locale, czech);
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
    const props = await inlinePropsForLocale(slug, locale, czech);
    if (!props) {
      return <ServicePage locale={locale} {...czech} />;
    }
    return <ServicePage locale={locale} {...props} />;
  }

  return { generateMetadata, Page };
}
