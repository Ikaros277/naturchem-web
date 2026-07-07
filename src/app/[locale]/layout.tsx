import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeferredClientWidgets } from "@/components/DeferredClientWidgets";
import { GoogleConsentModeInit } from "@/components/GoogleConsentModeInit";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { HtmlLang } from "@/components/HtmlLang";
import { OutboundLinkTelemetry } from "@/components/OutboundLinkTelemetry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/Header";
import { SkipToContent } from "@/components/SkipToContent";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/Schema";
import { siteUrl } from "@/lib/site";
import {
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd
} from "@/lib/organization-jsonld";
import { pickClientMessages } from "@/lib/i18n/client-messages";
import { getMessages } from "@/lib/i18n/get-messages";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { schemaLanguage } from "@/lib/i18n/locale-pick";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: messages.site.metaTitleDefault,
      template: messages.site.metaTitleTemplate
    },
    description: messages.site.metaDescription,
    openGraph: {
      type: "website",
      siteName: "NATURCHEM",
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630 }]
    },
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: [
        { url: "/favicon.ico?v=3", sizes: "any" },
        { url: "/favicon.png?v=3", type: "image/png", sizes: "32x32" },
        { url: "/favicon.png?v=3", type: "image/png", sizes: "192x192" }
      ],
      apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.png?v=3"
    }
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const messages = await getMessages(locale);

  const orgData = buildOrganizationJsonLd();
  const localBusinessData = buildLocalBusinessJsonLd();
  const websiteData = buildWebSiteJsonLd(schemaLanguage(locale));

  return (
    <LocaleProvider locale={locale} messages={pickClientMessages(messages)}>
      <HtmlLang locale={locale} />
      <GoogleConsentModeInit />
      <JsonLd data={websiteData} />
      <JsonLd data={orgData} />
      <JsonLd data={localBusinessData} />
      <SkipToContent locale={locale} />
      <Header locale={locale} />
      <div id="page-content" tabIndex={-1}>
        {children}
      </div>
      <Footer locale={locale} />
      <CookieConsentBanner />
      <DeferredClientWidgets />
      <OutboundLinkTelemetry />
      <SpeedInsights />
    </LocaleProvider>
  );
}
