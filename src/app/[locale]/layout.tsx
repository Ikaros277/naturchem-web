import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Source_Sans_3 } from "next/font/google";
import "../globals.css";
import { DeferredClientWidgets } from "@/components/DeferredClientWidgets";
import { GoogleConsentModeInit } from "@/components/GoogleConsentModeInit";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { OutboundLinkTelemetry } from "@/components/OutboundLinkTelemetry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/Schema";
import { company, siteUrl } from "@/lib/site";
import { getMessages } from "@/lib/i18n/get-messages";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { schemaLanguage } from "@/lib/i18n/locale-pick";

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

  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    email: company.email,
    identifier: `IČO ${company.ico}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: company.address.country
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: company.phones[0],
        email: company.email,
        areaServed: "CZ",
        availableLanguage: [...locales]
      }
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: company.phones[0],
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.labAddress.street,
      postalCode: company.labAddress.postalCode,
      addressLocality: company.labAddress.city,
      addressCountry: company.labAddress.country
    },
    areaServed: "CZ",
    url: siteUrl
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NATURCHEM",
    url: siteUrl,
    inLanguage: schemaLanguage(locale),
    publisher: { "@type": "Organization", name: company.name, url: siteUrl }
  };

  return (
    <html lang={locale} className={fontSans.variable}>
      <body className={fontSans.className}>
        <LocaleProvider locale={locale} messages={messages}>
          <GoogleConsentModeInit />
          <JsonLd data={websiteData} />
          <JsonLd data={orgData} />
          <JsonLd data={localBusinessData} />
          <Header locale={locale} />
          {children}
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
