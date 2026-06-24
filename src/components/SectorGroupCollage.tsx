import Image from "next/image";
import { getSectorHeroImageConfig } from "@/lib/custom-hero-photos";
import type { Sector } from "@/lib/sectors";

type Props = {
  sectorIds: readonly string[];
  sectors: readonly Sector[];
  maxTiles?: number;
};

export function SectorGroupCollage({ sectorIds, sectors, maxTiles = 4 }: Props) {
  const tiles = sectorIds
    .map((id) => sectors.find((sector) => sector.id === id))
    .filter((sector): sector is Sector => Boolean(sector))
    .slice(0, maxTiles);

  if (tiles.length === 0) return null;

  const tileCount = tiles.length;
  const collageClass =
    tileCount === 1
      ? "sector-group-collage sector-group-collage--1"
      : tileCount === 2
        ? "sector-group-collage sector-group-collage--2"
        : tileCount === 3
          ? "sector-group-collage sector-group-collage--3"
          : "sector-group-collage sector-group-collage--4";

  return (
    <div className={collageClass} aria-hidden="true">
      {tiles.map((sector) => {
        const config = getSectorHeroImageConfig(sector.id);
        return (
          <div key={sector.id} className="sector-group-collage-item">
            <Image
              src={config.src}
              alt=""
              width={160}
              height={160}
              sizes="(min-width: 1024px) 120px, (min-width: 768px) 96px, 80px"
              className="sector-group-collage-image"
              style={{ objectPosition: config.position ?? "center center" }}
            />
            <span className="sector-group-collage-label">{sector.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export function SectorGroupChips({ sectorIds, sectors }: Omit<Props, "maxTiles">) {
  const labels = sectorIds
    .map((id) => sectors.find((sector) => sector.id === id))
    .filter((sector): sector is Sector => Boolean(sector))
    .map((sector) => sector.title);

  if (labels.length === 0) return null;

  return (
    <ul className="sector-group-chip-list" aria-label="Provozy ve skupině">
      {labels.map((label) => (
        <li key={label}>
          <span className="sector-group-chip">{label}</span>
        </li>
      ))}
    </ul>
  );
}
