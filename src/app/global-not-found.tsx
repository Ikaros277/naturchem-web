import type { Metadata } from "next";
import { fontSans } from "@/lib/font";
import LocaleNotFound, { metadata as localeNotFoundMetadata } from "./[locale]/not-found";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...localeNotFoundMetadata,
  metadataBase: new URL(siteUrl)
};

/**
 * Unmatched URLs bypass the locale root layout. Keep their standalone HTML
 * correctly identified as Czech; the shared 404 metadata remains noindex.
 */
export default function GlobalNotFound() {
  return (
    <html lang="cs" className={fontSans.variable}>
      <body className={fontSans.className}>
        <LocaleNotFound />
      </body>
    </html>
  );
}
