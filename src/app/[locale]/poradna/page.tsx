import "@/app/globals.css";
import { PoradnaListingPage, poradnaListingMetadata } from "@/components/PoradnaListingPage";
import { isLocale } from "@/lib/i18n/locales";

type Props = { params: Promise<{ locale: string }> };
/** CMS-triggered builds publish articles without time-based ISR. */
export const revalidate = false;
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return poradnaListingMetadata(isLocale(locale) ? locale : "cs");
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <PoradnaListingPage locale={isLocale(locale) ? locale : "cs"} />;
}
