import { notFound } from "next/navigation";
import { PoradnaListingPage, poradnaListingMetadata } from "@/components/PoradnaListingPage";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { isLocale } from "@/lib/i18n/locales";
import { poradnaPageCount } from "@/lib/poradna-pagination";

type Props = { params: Promise<{ locale: string; page: string }> };
export const revalidate = false;
export const dynamicParams = false;
export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "cs";
  const count = poradnaPageCount((await getPoradnaArticles(locale)).length);
  return Array.from({ length: count - 1 }, (_, i) => ({ page: String(i + 2) }));
}
async function readParams(params: Props["params"]) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !/^[1-9]\d*$/.test(page) || Number(page) < 2) notFound();
  return { locale, page: Number(page) };
}
export async function generateMetadata({ params }: Props) {
  const { locale, page } = await readParams(params);
  return poradnaListingMetadata(locale, page);
}
export default async function Page({ params }: Props) {
  const { locale, page } = await readParams(params);
  return <PoradnaListingPage locale={locale} page={page} />;
}
