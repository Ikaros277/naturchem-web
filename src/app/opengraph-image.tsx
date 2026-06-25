import { ImageResponse } from "next/og";
import { OgImageLayout } from "@/components/OgImageLayout";
import { getHomeOgImageCopy } from "@/lib/i18n/og-image-copy";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const copy = getHomeOgImageCopy("cs");

  return new ImageResponse(
    <OgImageLayout title={copy.title} subtitle={copy.subtitle} footer={copy.footer} />,
    { ...size }
  );
}
