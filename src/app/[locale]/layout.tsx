import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { DeferredClientWidgets } from "@/components/DeferredClientWidgets";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { GoogleConsentModeInit } from "@/components/GoogleConsentModeInit";
import { OutboundLinkTelemetry } from "@/components/OutboundLinkTelemetry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/Header";
import { SkipToContent } from "@/components/SkipToContent";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/Schema";
import { getSiteServices } from "@/lib/i18n/content";
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
import "../globals.css";

const fontSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
  display: "swap"
});

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
    twitter: {
      card: "summary_large_image",
      images: [`/${locale}/opengraph-image`]
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

/** Unknown locale prefixes must 404 without writing ISR cache entries. */
export const dynamicParams = false;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const messages = await getMessages(locale);

  const siteServices = await getSiteServices(locale);
  const orgData = buildOrganizationJsonLd(locale, siteServices);
  const localBusinessData = buildLocalBusinessJsonLd(locale);
  const websiteData = buildWebSiteJsonLd(locale);

  return (
    <html lang={locale} className={fontSans.variable} suppressHydrationWarning>
      <head>
        <GoogleConsentModeInit />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms.txt`}
          title="NATURCHEM — summary for AI assistants"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms-full.txt`}
          title="NATURCHEM — extended summary for AI assistants"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms-en.txt`}
          title="NATURCHEM — summary for AI assistants (English)"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms-de.txt`}
          title="NATURCHEM — summary for AI assistants (German)"
        />
        <link rel="help" type="text/plain" href={`${siteUrl}/ai.txt`} title="NATURCHEM — AI discovery" />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms-articles.txt`}
          title="NATURCHEM — article index for AI assistants"
        />
      </head>
      <body className={fontSans.className} suppressHydrationWarning>
        <LocaleProvider locale={locale} messages={pickClientMessages(messages)}>
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
      </body>
    </html>
  );
}
