import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fontBody = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
  display: "swap"
});

const fontDisplay = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap"
});
import { ConsentAwareTracking } from "@/components/ConsentAwareTracking";
import { GoogleConsentModeInit } from "@/components/GoogleConsentModeInit";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { OutboundLinkTelemetry } from "@/components/OutboundLinkTelemetry";
import { LiveChatWidgets } from "@/components/LiveChatWidgets";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/Schema";
import { company, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NATURCHEM, s.r.o. | Akreditovaná měření a poradenství",
    template: "%s | NATURCHEM"
  },
  description:
    "Akreditovaná měření emisí, pracovního prostředí a hluku. Rozptylové studie, EIA, odborné posudky a environmentální poradenství.",
  openGraph: {
    type: "website",
    siteName: "NATURCHEM",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
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
        availableLanguage: ["cs"]
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
    inLanguage: "cs-CZ",
    publisher: { "@type": "Organization", name: company.name, url: siteUrl }
  };

  return (
    <html lang="cs" className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <body className={fontBody.className}>
        <GoogleConsentModeInit />
        <JsonLd data={websiteData} />
        <JsonLd data={orgData} />
        <JsonLd data={localBusinessData} />
        <Header />
        {children}
        <Footer />
        <CookieConsentBanner />
        <LiveChatWidgets />
        <ConsentAwareTracking />
        <OutboundLinkTelemetry />
      </body>
    </html>
  );
}
