import { getImageProps } from "next/image";
import { preload } from "react-dom";

/** Sdílené parametry pro homepage LCP hero — musí sedět s HeroPhoto priority. */
export const LCP_HERO_SIZES = "(max-width: 767px) 100vw, min(600px, 48vw)";
export const LCP_HERO_QUALITY = 55;

const LCP_PLACEHOLDER_WIDTH = 900;
const LCP_PLACEHOLDER_HEIGHT = 675;

/** Preload stejné URL jako vykreslí next/image s priority (bez duplicitního raw /hero/*.webp). */
export function preloadLcpHeroImage(src: string): void {
  const { props } = getImageProps({
    alt: "",
    width: LCP_PLACEHOLDER_WIDTH,
    height: LCP_PLACEHOLDER_HEIGHT,
    quality: LCP_HERO_QUALITY,
    priority: true,
    sizes: LCP_HERO_SIZES,
    src
  });

  preload(props.src, {
    as: "image",
    imageSrcSet: props.srcSet,
    imageSizes: props.sizes,
    fetchPriority: "high"
  });
}
