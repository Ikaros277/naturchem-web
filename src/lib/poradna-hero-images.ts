import type { HeroTheme } from "@/lib/hero-images";

/**
 * Per-article hero / náhled — každý článek má vlastní téma místo jedné fotky pro celé téma.
 * Klíč = slug článku (frontmatter nebo název souboru).
 */
export const poradnaArticleHeroThemes: Record<string, HeroTheme> = {
  "scitaci-pravidla-u-zdroju-znecistovani-ovzdusi-proc-mohou-zmenit-povinnosti-provozovatele":
    "poradna-air-quality",
  "kdy-muze-urad-pozadovat-odborny-posudek-i-u-zmeny-stavajiciho-zdroje": "odborne-posudky",
  "elektronicke-oznamovani-mereni-emisi-a-predavani-protokolu-prakticky-dopad-na-provozovatele":
    "poradna-laptop-forms",
  "nove-metodicke-vyklady-mzp-k-dopovolovanym-zdrojum-co-ma-provozovatel-zkontrolovat":
    "provozni-rady",
  "co-se-meni-v-povolovani-zdroju-znecistovani-ovzdusi-v-roce-2026": "ippc-integrovana-povoleni",
  "merici-misto-na-vyduchu-proc-je-dulezite-uz-ve-fazi-projektu": "mereni-emisi",
  "emise-vs-imise-proc-provozovatel-resi-oboji": "rozptylove-studie",
  "co-poslat-pro-rychle-posouzeni-zameru": "eia",
  "proc-nestaci-katalogovy-udaj-zarizeni-pro-hlukove-posouzeni": "akusticke-posudky",
  "hluk-z-provozovny-co-delat-kdyz-si-sousede-stezuji": "mereni-hluku",
  "kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku": "hlukove-studie",
  "jak-cist-hlukovou-studii-laeq-lafmax-chraneny-prostor-a-nejistota": "modelove-vypocty",
  "hluk-z-tepelnych-cerpadel-a-vzt-jednotek-co-resit-pred-kolaudaci": "poradna-hvac-units",
  "drevozpracujici-provoz-prach-piliny-odsavani-hluk-a-povoleni-zdroje": "poradna-woodworking",
  "recyklacni-stredisko-stavebnich-odpadu-hluk-prach-doprava-a-eia": "poradna-recycling",
  "zalozni-dieselagregat-emise-hluk-a-povolovaci-podklady": "poradna-diesel-generator",
  "projektant-vs-ekologicky-konzultant-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia":
    "homepage-eia",
  "mereni-chemickych-latek-v-pracovnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni": "chemicke-latky",
  "lakovna-emise-voc-provozni-rad-mereni-a-povoleni-provozu": "poradna-paint-spray",
  "jes-a-eia-kdy-se-resi-jednotne-environmentalni-stanovisko-spolecne-s-eia": "eia-context",
  "jake-podklady-potrebujete-pro-povoleni-prumysloveho-provozu-z-hlediska-zivotniho-prostredi":
    "poradna-documents-desk",
  "odborny-posudek-podle-zakona-o-ochrane-ovzdusi-kdy-je-potreba-a-co-musi-obsahovat":
    "odborne-posudky-context",
  "novela-zakona-o-ochrane-ovzdusi-2025": "ispop",
  "rozptylova-studie-kdy-je-povinna-a-jake-podklady-jsou-potreba": "rozptylove-studie-context",
  "kdy-je-potreba-mereni-emisi-a-kdy-staci-jiny-podklad": "mereni-emisi-context",
  "automotive-provoz-co-se-typicky-meri-a-posuzuje": "poradna-automotive",
  "skladka-a-odpadove-zarizeni-jake-environmentalni-podklady-se-obvykle-resi":
    "poradna-waste-landfill",
  "kategorizace-praci-jake-mereni-je-potreba-jako-podklad": "pracovni-prostredi",
  "svarovna-prach-kovy-odsavani-pracovni-prostredi-a-emise": "forge-worker",
  "mereni-pracovniho-prostredi-kdy-ho-muze-pozadovat-khs": "pracovni-prostredi-context",
  "institut-minimalni-vzdalenosti-ochrana-ovzdusi": "poradna-factory-aerial",
  "kotelna-a-plynovy-kotel-kdy-se-meri-emise-co-a-nox": "poradna-boiler-room",
  "prach-na-pracovisti-celkovy-prach-respirabilni-frakce-a-oxid-kremicity": "mereni-mikroklimatu"
};

export function poradnaHeroThemeForSlug(slug: string | undefined): HeroTheme | null {
  const key = slug?.trim();
  if (!key) return null;
  return poradnaArticleHeroThemes[key] ?? null;
}
