import { ImageResponse } from "next/og";
import { OgImageLayout } from "@/components/OgImageLayout";
import { getHomeOgImageCopy } from "@/lib/i18n/og-image-copy";
import { isLocale, type Locale } from "@/lib/i18n/locales";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleOpenGraphImage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const copy = getHomeOgImageCopy(locale);

  return new ImageResponse(
    <OgImageLayout title={copy.title} subtitle={copy.subtitle} footer={copy.footer} />,
    { ...size }
  );
}
