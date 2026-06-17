import { ImageResponse } from "next/og";
import { OgImageLayout } from "@/components/OgImageLayout";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function SluzbyOpenGraphImage() {
  return new ImageResponse(
    (
      <OgImageLayout
        title="Akreditovaná měření a odborné služby"
        subtitle="Měření emisí, pracovního prostředí, hluku, studie a povolovací dokumentace"
        footer="naturchem.cz/sluzby · Akreditovaná laboratoř č. 1599"
      />
    ),
    {
      ...size
    }
  );
}
