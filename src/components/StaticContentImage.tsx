import Image from "next/image";
import type { CSSProperties } from "react";
import { ResponsiveImage, type EncodedImage } from "@/components/ResponsiveImage";
import images from "@/lib/responsive-content-images.json";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: CSSProperties;
};

/** Server-rendered picture: smaller static variants, original dimensions and alt. */
export function StaticContentImage({ src, alt, sizes, className, fill = false, width, height, priority = false, style }: Props) {
  const image = (images as Record<string, EncodedImage>)[src];
  if (image) {
    return <ResponsiveImage src={src} alt={alt} sizes={sizes} className={className}
      fill={fill} priority={priority} image={image}
      style={{ ...(fill ? { objectFit: "contain" } : {}), ...style }} />;
  }
  // Future assets and SVG remain supported; the catalog regression test catches
  // any referenced raster that has not received prepared variants at build time.
  return <Image src={src} alt={alt} sizes={sizes} className={className} fill={fill}
    width={fill ? undefined : width} height={fill ? undefined : height} style={style}
    priority={priority} loading={priority ? undefined : "lazy"} fetchPriority={priority ? "high" : "low"} />;
}
