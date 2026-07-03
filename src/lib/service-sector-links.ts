/**
 * Interní prolinkování: stránka služby → typické provozy (/provozy-a-technologie/…).
 *
 * Proč ne vždy /sluzby/…?
 * - Služba = CO děláme (měření, studie, EIA…).
 * - Provoz = PRO KOHO / v jaké situaci (skládka, bioplyn, kotelna…).
 * Sekce „Mohlo by Vás zajímat“ na ServicePage míchá až 3 typy odkazů (viz ServicePage):
 *   1) relatedLinks z page/dedicated-service-pages — vždy /sluzby/, s vlastním popisem
 *   2) sectorCrossLinks odtud — /provozy-a-technologie/, popis z sectors.ts (pokud existuje)
 *   3) fallback z site.ts — jiné služby
 * Popis u provozu není generovaný copy — bere se z `sectors.ts` (stejný text jako na indexu provozů).
 */
export type SectorLink = { title: string; href: string };

const P = {
  kotelny: { title: "Kotelny a spalovací zdroje", href: "/provozy-a-technologie/kotelny" },
  lakovny: { title: "Lakovny a povrchové úpravy", href: "/provozy-a-technologie/lakovny" },
  bioplyn: { title: "Bioplyn, biometan a kogenerace", href: "/provozy-a-technologie/bioplyn-biometan" },
  odpady: { title: "Odpady, skládky, recyklace", href: "/provozy-a-technologie/odpady-recyklace" },
  svarovny: { title: "Svařovny a kovovýroba", href: "/provozy-a-technologie/svarovny" },
  sklarstvi: { title: "Sklářské a keramické provozy", href: "/provozy-a-technologie/sklarstvi" },
  automotive: { title: "Automobilová výroba a výrobní haly", href: "/provozy-a-technologie/automotive" },
  drevo: { title: "Dřevozpracující provozy", href: "/provozy-a-technologie/drevozpracujici" },
  zemedelstvi: {
    title: "Zemědělské provozy a sušárny",
    href: "/provozy-a-technologie/zemedelske-provozy"
  },
  vzt: { title: "VZT, chlazení a tepelná čerpadla", href: "/provozy-a-technologie/tepelna-cerpadla-vzt" },
  ciste: {
    title: "Čisté prostory a laboratoře",
    href: "/sluzby/pracovni-prostredi"
  }
} satisfies Record<string, SectorLink>;

/** Klíč = `slug` stránky služby (složka v `app/`). */
export const relatedSectorsByServiceSlug: Record<string, SectorLink[]> = {
  "mereni-emisi": [
    P.kotelny,
    P.lakovny,
    P.bioplyn,
    P.odpady,
    P.svarovny,
    P.sklarstvi,
    P.automotive,
    P.drevo,
    P.zemedelstvi
  ],
  "pracovni-prostredi": [
    P.lakovny,
    P.svarovny,
    P.automotive,
    P.zemedelstvi,
    P.ciste,
    P.odpady
  ],
  "mereni-hluku-hlukove-studie": [P.vzt, P.automotive, P.odpady, P.lakovny, P.kotelny],
  "hlukove-studie": [P.vzt, P.automotive, P.odpady, P.lakovny, P.kotelny],
  "rozptylove-studie": [P.kotelny, P.bioplyn, P.odpady, P.sklarstvi, P.lakovny],
  "eia-posudky-poradenstvi": [P.odpady, P.bioplyn, P.kotelny, P.zemedelstvi],
  "odborne-posudky": [P.lakovny, P.kotelny, P.bioplyn, P.odpady, P.sklarstvi],
  "provozni-rady": [P.lakovny, P.kotelny, P.bioplyn, P.drevo],
  "ippc-integrovana-povoleni": [P.odpady, P.bioplyn, P.zemedelstvi, P.kotelny],
  "eia-oznameni-zameru": [P.odpady, P.bioplyn, P.zemedelstvi, P.automotive],
  "ispop-souhrnna-provozni-evidence": [P.kotelny, P.lakovny, P.bioplyn, P.drevo],
  "ghg-overovani-emisi-sklenikovych-plynu": [P.kotelny, P.bioplyn, P.automotive],
  "bezpecnostni-listy": [P.lakovny, P.automotive, P.ciste],
  "chemicke-latky-v-provozu": [P.lakovny, P.automotive, P.ciste, P.odpady],
  "mereni-vibraci": [P.svarovny, P.automotive, P.lakovny, P.odpady],
  "mereni-osvetleni": [P.automotive, P.ciste, P.lakovny, P.odpady],
  "mereni-mikroklimatu": [P.zemedelstvi, P.kotelny, P.lakovny, P.automotive],
  "mereni-tepelna-chladova-zatez": [P.zemedelstvi, P.kotelny, P.svarovny, P.automotive],
  "mereni-diisokyanatu": [P.lakovny, P.automotive],
  "akusticke-posudky": [P.vzt, P.automotive, P.lakovny, P.kotelny],
  "modelove-vypocty": [P.kotelny, P.bioplyn, P.odpady, P.sklarstvi],
  "imisni-a-hlukove-dopady-zameru": [P.odpady, P.bioplyn, P.kotelny, P.vzt],
  "povoleni-provozu-zdroje": [P.lakovny, P.kotelny, P.bioplyn, P.sklarstvi],
  "zjistovaci-rizeni-eia": [P.odpady, P.bioplyn, P.zemedelstvi, P.kotelny],
  "technicke-prilohy-pro-investory": [P.odpady, P.bioplyn, P.automotive, P.kotelny]
};

export function relatedSectorsForService(slug: string): SectorLink[] {
  return relatedSectorsByServiceSlug[slug] ?? [];
}
