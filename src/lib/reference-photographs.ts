type ReferencePhotograph = {
  exampleId: string;
  asset: string;
  alt: string;
  caption: string;
  relationship: "case";
  year: number;
};

/** Only photographs of the described case belong in this showcase.
 * A topical or previously approved website image is not evidence of a case.
 * Exact original photo/protocol locators stay in the private source register.
 */
export const referencePhotographs: readonly ReferencePhotograph[] = [
  {
    exampleId: "lak-automotive-emise", asset: "lakovaci-boxy-toc", relationship: "case", year: 2018,
    alt: "Lakovací boxy a vzduchotechnické potrubí mokré průmyslové lakovny",
    caption: "Lakovací boxy · fotografie z této zakázky"
  },
  {
    exampleId: "bps-emise", asset: "kogenerace", relationship: "case", year: 2025,
    alt: "Kogenerační jednotka a spalinové potrubí v bioplynové stanici",
    caption: "Kogenerační jednotka · fotografie z této zakázky"
  },
  {
    exampleId: "bps-serie-emise", asset: "dve-kogenerace", relationship: "case", year: 2025,
    alt: "Dvě kogenerační jednotky bioplynové stanice se spalinovým potrubím",
    caption: "Dvě kogenerační jednotky · snímek z dokumentace zakázky"
  },
  {
    exampleId: "plyn-kotelna-emise", asset: "kotelna-biomasa", relationship: "case", year: 2025,
    alt: "Technologické zařízení uvnitř centrální kotelny na dřevní biomasu",
    caption: "Technologie kotelny · fotografie z této zakázky"
  },
  {
    exampleId: "hala-pp", asset: "hala-mikroklima", relationship: "case", year: 2026,
    alt: "Měřicí sestava na stativu v dílně údržby forem automobilového výrobního závodu",
    caption: "Měření mikroklimatu · fotografie z této zakázky"
  },
  {
    exampleId: "lakovna-diisokyanaty", asset: "lakovna-vzorkovaci-kazeta", relationship: "case", year: 2025,
    alt: "Vzorkovací kazeta označená Isokyanáty z měření pracovního ovzduší v lakovně",
    caption: "Vzorkovací kazeta · fotografie z této zakázky"
  },
  {
    exampleId: "svarovna-pp", asset: "kovovyroba-mereni", relationship: "case", year: 2025,
    alt: "Hlukoměr a opracované kovové díly na pracovním stole",
    caption: "Hlukoměr na pracovišti · fotografie z této zakázky"
  },
  {
    exampleId: "kovovyroba-vibrace", asset: "rucni-naradi-vibrace", relationship: "case", year: 2025,
    alt: "Ruce pracovníka s ručním nářadím a připojeným snímačem vibrací v kovovýrobě",
    caption: "Nářadí s připojeným snímačem · fotografie z této zakázky"
  },
  {
    exampleId: "tcp-hluk", asset: "tepelne-cerpadlo-hluk", relationship: "case", year: 2026,
    alt: "Detail měřené venkovní jednotky tepelného čerpadla u obvodové stěny budovy",
    caption: "Měřená venkovní jednotka · fotografie z této zakázky"
  }
];

export function getReferencePhotographSources(photo: ReferencePhotograph) {
  const base = "/reference/authentic-2026-10-08/" + photo.asset;
  return {
    src: base + "-640.webp",
    srcSet: [384, 640, 960].map(width => base + "-" + width + ".webp " + width + "w").join(", "),
    avifSrcSet: [384, 640, 960].map(width => base + "-" + width + ".avif " + width + "w").join(", "),
    width: 960, height: 540, position: "center"
  };
}
