import type { CSSProperties } from "react";
import Image from "next/image";
import { getSectorHeroImageConfig, hasSectorPhoto } from "@/lib/custom-hero-photos";
import type { Sector } from "@/lib/sectors";

type Props = {
  sectorIds: readonly string[];
  sectors: readonly Sector[];
  maxLayers?: number;
};

function pickBackdropSectors(
  sectorIds: readonly string[],
  sectors: readonly Sector[],
  maxLayers: number
): Sector[] {
  return sectorIds
    .map((id) => sectors.find((sector) => sector.id === id))
    .filter((sector): sector is Sector => Boolean(sector))
    .sort((a, b) => Number(hasSectorPhoto(b.id)) - Number(hasSectorPhoto(a.id)))
    .slice(0, maxLayers);
}

/** Prolínající se fotky provozů jako pozadí celé dlaždice skupiny. */
export function SectorGroupCollage({ sectorIds, sectors, maxLayers = 4 }: Props) {
  const layers = pickBackdropSectors(sectorIds, sectors, maxLayers);

  if (layers.length === 0) return null;

  return (
    <div className="sector-group-backdrop" data-count={layers.length} aria-hidden="true">
      {layers.map((sector, index) => {
        const config = getSectorHeroImageConfig(sector.id);
        return (
          <div
            key={sector.id}
            className="sector-group-backdrop-layer"
            style={{ "--layer-index": index } as CSSProperties}
          >
            <Image
              src={config.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="sector-group-backdrop-image"
              style={{ objectPosition: config.position ?? "center center" }}
            />
          </div>
        );
      })}
      <span className="sector-group-backdrop-scrim" />
    </div>
  );
}

export function SectorGroupChips({ sectorIds, sectors }: Omit<Props, "maxLayers">) {
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
