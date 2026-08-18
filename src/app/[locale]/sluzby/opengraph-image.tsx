import { ImageResponse } from "next/og";
import { OgImageLayout } from "@/components/OgImageLayout";
import { getServicesOgImageCopy } from "@/lib/i18n/og-image-copy";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SluzbyOpenGraphImage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const copy = getServicesOgImageCopy(locale);

  return new ImageResponse(
    <OgImageLayout title={copy.title} subtitle={copy.subtitle} footer={copy.footer} />,
    { ...size }
  );
}
