import Image from "next/image";
import { getCaseStudyHeroImageConfig } from "@/lib/custom-hero-photos";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
  study: CaseStudy;
};

/** Náhled fotky v horní části dlaždice — čistý oddělený pás nad textem karty. */
export function CaseStudyTileThumb({ study }: Props) {
  const config = getCaseStudyHeroImageConfig(study);

  return (
    <div className="case-study-tile-thumb" aria-hidden="true">
      <Image
        src={config.src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="case-study-tile-thumb-img"
        style={{ objectPosition: config.position ?? "center center" }}
        quality={82}
      />
      <span className="case-study-tile-thumb-overlay" />
    </div>
  );
}
