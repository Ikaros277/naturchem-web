import type { CSSProperties } from "react";
import images from "@/lib/responsive-thumbnails.json";

export type EncodedImage = { base: string; widths: number[]; width: number; height: number };
export function getResponsiveImage(src: string): EncodedImage | undefined {
  return (images as Record<string, EncodedImage>)[src];
}
/** Locally encoded images retain the approved composition without runtime transforms. */
export function ResponsiveImage({ src, sizes, className, fill = false, priority = false, image: suppliedImage, style }: {
  src: string; sizes: string; className?: string; fill?: boolean; priority?: boolean;
  image?: EncodedImage; style?: CSSProperties;
}) {
  const image = suppliedImage ?? getResponsiveImage(src);
  if (!image) throw new Error("Missing responsive image: " + src);
  const sourceSet = (format: string) => image.widths.map(w => `${image.base}-${w}.${format} ${w}w`).join(", ");
  return <picture>
    <source type="image/avif" srcSet={sourceSet("avif")} sizes={sizes} />
    <img src={`${image.base}-${image.widths[0]}.webp`} srcSet={sourceSet("webp")} sizes={sizes}
      alt="" width={image.width} height={image.height} className={className}
      loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "low"} decoding="async"
      style={{ ...(fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } as const : {}), ...style }} />
  </picture>;
}
