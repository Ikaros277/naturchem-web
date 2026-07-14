import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const fontSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl)
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={fontSans.variable} suppressHydrationWarning>
      <head>
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
          hrefLang="en"
          type="text/plain"
          href={`${siteUrl}/llms-en.txt`}
          title="NATURCHEM — summary for AI assistants (English)"
        />
        <link
          rel="alternate"
          hrefLang="de"
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
        {children}
      </body>
    </html>
  );
}
