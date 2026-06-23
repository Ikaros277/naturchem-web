import Image from "next/image";
import { caseStudyHeroTheme } from "@/lib/case-study-visuals";
import { getHeroImageConfig } from "@/lib/hero-images";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
  study: CaseStudy;
};

/** Tlumený náhled provozu nebo typu zakázky na dlaždici případové studie. */
export function CaseStudyTileThumb({ study }: Props) {
  const config = getHeroImageConfig(caseStudyHeroTheme(study));

  return (
    <div className="case-study-tile-thumb" aria-hidden="true">
      <Image
        src={config.src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="case-study-tile-thumb-img"
        style={{ objectPosition: config.position ?? "center center" }}
      />
      <span className="case-study-tile-thumb-overlay" />
    </div>
  );
}
