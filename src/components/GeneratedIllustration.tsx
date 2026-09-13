import type { CSSProperties } from "react";
import { getGeneratedIllustrationSources } from "@/lib/generated-illustrations";

type Props = {
  src: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  fill?: boolean;
  style?: CSSProperties;
};

/** Decorative, fictional editorial imagery. Adjacent headings describe its subject. */
export function GeneratedIllustration({ src, className, sizes, priority = false, fill = false, style }: Props) {
  const sources = getGeneratedIllustrationSources(src);
  if (!sources) throw new Error(`Not a pre-encoded illustration: ${src}`);
  return (
    // eslint-disable-next-line @next/next/no-img-element -- Both responsive sizes are encoded locally, with no runtime transformation cost.
    <img
      src={sources.smallSrc}
      srcSet={sources.srcSet}
      sizes={sizes}
      width={sources.width}
      height={sources.height}
      alt=""
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      style={{ ...(fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } as const : {}), ...style }}
    />
  );
}
