import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { getDedicatedService } from "@/lib/i18n/service-pages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";

export async function getDedicatedServiceForLocale(slug: string, locale: Locale) {
  return getDedicatedService(slug, locale);
}

export async function dedicatedServiceMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const service = await getDedicatedService(slug, locale);
  return pageMetadata({
    locale,
    path: `/${service.slug}`,
    title: service.title,
    description: service.description
  });
}

type RouteProps = {
  slug: string;
  locale?: string;
};

export async function DedicatedServiceRoute({ slug, locale: localeParam }: RouteProps) {
  const locale: Locale = localeParam && isLocale(localeParam) ? localeParam : "cs";
  return <ServicePage locale={locale} {...(await getDedicatedService(slug, locale))} />;
}

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function createDedicatedServicePageExports(slug: string) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    return dedicatedServiceMetadata(slug, isLocale(locale) ? locale : "cs");
  }

  async function Page({ params }: PageProps) {
    const { locale } = await params;
    return <DedicatedServiceRoute slug={slug} locale={locale} />;
  }

  return { generateMetadata, Page };
}
