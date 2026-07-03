export type Sector = {
  id: string;
  title: string;
  href: string;
  description: string;
  /** Štítky služeb a témat (zobrazené jako tagy). */
  serviceTags: string;
  /** Typické faktory nebo škodliviny. */
  factors: string;
  serviceHrefs: readonly string[];
  caseStudyIds: readonly string[];
  ariaLabel: string;
  linkHint: string;
  homeFeatured?: boolean;
  /** @deprecated alias pro serviceTags + factors v kartách */
  typical: string;
};

const DETAIL_SLUGS = new Set([
  "lakovny",
  "kotelny",
  "svarovny",
  "sklarstvi",
  "odpady-recyklace",
  "tepelna-cerpadla-vzt",
  "bioplyn-biometan",
  "zemedelske-provozy",
  "drevozpracujici",
  "automotive"
]);

function sectorHref(id: string): string {
  return DETAIL_SLUGS.has(id) ? `/provozy-a-technologie/${id}` : `/provozy-a-technologie#${id}`;
}

function sector(
  id: string,
  title: string,
  description: string,
  serviceTags: string,
  factors: string,
  serviceHrefs: readonly string[],
  caseStudyIds: readonly string[],
  options?: { homeFeatured?: boolean; linkHint?: string }
): Sector {
  return {
    id,
    title,
    href: sectorHref(id),
    description,
    serviceTags,
    factors,
    serviceHrefs,
    caseStudyIds,
    typical: `${serviceTags}; ${factors}`,
    ariaLabel: `Zobrazit služby pro ${title}`,
    linkHint: options?.linkHint ?? "Zobrazit služby pro tento provoz",
    homeFeatured: options?.homeFeatured
  };
}

export const provozyNavLabel = "Provozy a technologie";

export const sectors: Sector[] = [
  sector(
    "lakovny",
    "Lakovny a povrchové úpravy",
    "U lakoven a povrchových úprav řešíme měření TOC/VOC, spotřebu nátěrových hmot, technické listy, lakovací boxy, sušení, pískování, filtry, aktivní uhlí, odsávání, provozní řád a návaznost na povolení provozu. U provozů s obsluhou lze současně posoudit pracovní prostředí – chemické látky, hluk, mikroklima nebo účinnost větrání.",
    "Emise, VOC/TOC, pracovní prostředí, provozní řád, ČIŽP, krajský úřad",
    "VOC, TOC, TZL, rozpouštědla, odsávání, filtrace",
    ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/provozni-rady", "/sluzby/odborne-posudky"],
    ["mereni-emisi-lakovna", "posudek-zmena-povoleni-lakovna", "pracovni-prostredi-lakovna"],
    { homeFeatured: true }
  ),
  sector(
    "galvanovny",
    "Galvanovny, tryskání, pískování a povrchové úpravy kovů",
    "U galvanoven, tryskání a pískování posuzujeme emise z výduchů, prach, kovy, HCl, pracovní expozici a návaznost na povolení provozu nebo požadavky KHS.",
    "Emise, pracovní prostředí, odborné posudky, KHS, ČIŽP",
    "kovy, prach, HCl, kyseliny, odsávání, prašnost",
    ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/odborne-posudky"],
    ["mereni-emisi-galvanovna", "mereni-emisi-tryskani"]
  ),
  sector(
    "svarovny",
    "Svařovny a kovovýroba",
    "Ve svařovnách a kovovýrobě řešíme svářečské dýmy, kovy, hluk, odsávání, mikroklima, osvětlení a kategorizaci prací pro KHS.",
    "Pracovní prostředí, emise, kategorizace prací, KHS",
    "svářečské dýmy, kovy, NOx, ozon, hluk, prašnost",
    ["/sluzby/pracovni-prostredi", "/sluzby/mereni-emisi"],
    ["pracovni-prostredi-svarovna"],
    { homeFeatured: true }
  ),
  sector(
    "tiskarny-textilie",
    "Tiskárny, kašírování, technické textilie a lepení",
    "U tiskáren, kašírování a technických textilií řešíme VOC, chemické látky, pracovní ovzduší, hluk a podklady pro investora nebo úřad.",
    "Emise, pracovní prostředí, chemické látky, EIA",
    "VOC, organické látky, lepidla, rozpouštědla, hluk",
    ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/chemicke-latky"],
    ["mereni-emisi-voc-tisk"]
  ),
  sector(
    "drevozpracujici",
    "Dřevozpracující provozy a truhlárny",
    "U pil, truhláren a dřevozpracujících provozů řešíme prašnost, TZL, emise ze spalování biomasy, hluk a pracovní prostředí.",
    "Emise, pracovní prostředí, hluk, KHS, krajský úřad",
    "TZL, prašnost, hluk, emise ze kotlů na biomasu",
    ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/mereni-hluku"],
    ["pracovni-prostredi-drevni-prach"]
  ),
  sector(
    "sklarstvi",
    "Sklářské a keramické provozy",
    "U sklářských a keramických provozů řešíme emise z pecí, výduchy, fluoridy, TZL, NOx, CO, rozptyl a provozní řády.",
    "Emise, rozptylové studie, provozní řád, ČIŽP",
    "pecní zdroje, fluoridy, TZL, NOx, CO, výduchy",
    ["/sluzby/mereni-emisi", "/sluzby/rozptylove-studie", "/sluzby/provozni-rady"],
    ["sklarsky-provoz-pec", "taveni-opalove-sklo-fluoridy"]
  ),
  sector(
    "automotive",
    "Automotive a výrobní linky",
    "U automotive a výrobních linek řešíme emise, chemické látky, hluk, pracovní prostředí a podklady pro investora nebo úřad.",
    "Emise, pracovní prostředí, chemické látky, EIA",
    "VOC, chemické látky, hluk, technologie, doprava",
    ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/eia-oznameni-zameru"],
    []
  ),
  sector(
    "kotelny",
    "Kotelny a spalovací zdroje",
    "U kotelen a spalovacích zdrojů řešíme měření emisí CO, NOx, O₂, TZL, SO₂, ISPOP, provozní řády a povolení provozu.",
    "Emise, ISPOP, provozní řád, odborné posudky, ČIŽP",
    "CO, NOx, O₂, TZL, SO₂, pevná paliva, plyny",
    ["/sluzby/mereni-emisi", "/sluzby/ispop", "/sluzby/provozni-rady", "/sluzby/odborne-posudky"],
    [
      "mereni-emisi-plynova-kotelna-verejna-budova",
      "mereni-emisi-kotel-biomasa",
      "rozptylova-studie-plynova-kotelna",
      "aktualizace-provozniho-radu",
      "ispop-rocni-hlaseni"
    ],
    { homeFeatured: true }
  ),
  sector(
    "bioplyn-biometan",
    "Bioplynové stanice a kogenerační jednotky",
    "U bioplynových stanic a kogenerace řešíme emise motorů, rozptyl, hluk, EIA, ISPOP a povolení provozu.",
    "Emise, rozptylové studie, hlukové studie, EIA, ISPOP",
    "emise motoru, kogenerace, katalyzátor, metan, NOx",
    ["/sluzby/mereni-emisi", "/sluzby/rozptylove-studie", "/sluzby/eia-oznameni-zameru", "/sluzby/ispop"],
    ["mereni-emisi-plynovy-horak"],
    { homeFeatured: true }
  ),
  sector(
    "teplarny",
    "Teplárny a větší energetické zdroje",
    "U tepláren a větších energetických zdrojů řešíme měření emisí, rozptylové studie, ISPOP a podklady pro změny kapacity.",
    "Emise, rozptylové studie, ISPOP, odborné posudky",
    "NOx, CO, TZL, SO₂, více zdrojů, doprava",
    ["/sluzby/mereni-emisi", "/sluzby/rozptylove-studie", "/sluzby/ispop"],
    ["rozptylova-studie-plynova-kotelna"]
  ),
  sector(
    "krematoria",
    "Krematoria a zpopelňovací pece",
    "U krematorií a zpopelňovacích pecí řešíme emise, měřicí místa, provozní řády a podklady pro orgán ochrany ovzduší.",
    "Emise, provozní řád, odborné posudky, ČIŽP",
    "CO, NOx, TZL, organické látky, kovy",
    ["/sluzby/mereni-emisi", "/sluzby/provozni-rady", "/sluzby/odborne-posudky"],
    ["mereni-emisi-krematorium"]
  ),
  sector(
    "skladky-odpady",
    "Skládky a zařízení pro nakládání s odpady",
    "U skládek a zařízení pro nakládání s odpady řešíme hluk, prašnost, dopravu, rozptyl a EIA při změně provozu.",
    "EIA, hlukové studie, rozptylové studie, odborné posudky",
    "hluk, prašnost, doprava, pachy, bioplyny",
    ["/sluzby/eia-oznameni-zameru", "/sluzby/hlukove-studie", "/sluzby/rozptylove-studie"],
    ["eia-skladka-odpady"]
  ),
  sector(
    "odpady-recyklace",
    "Recyklační střediska, drtiče, třídiče a depozitní plochy",
    "U recyklačních areálů, drtičů a třídičů řešíme hluk, prašnost, rozptyl, dopravu a podklady pro EIA nebo změnu kapacity.",
    "EIA, hlukové studie, rozptylové studie, odborné posudky",
    "hluk, prašnost, doprava, imise, kapacita",
    ["/sluzby/eia-oznameni-zameru", "/sluzby/hlukove-studie", "/sluzby/rozptylove-studie"],
    ["eia-recyklacni-areal", "provozni-rad-recyklacni-stredisko", "hluk-drtic-recyklace"],
    { homeFeatured: true }
  ),
  sector(
    "kompostarny",
    "Kompostárny a biodegradační plochy",
    "U kompostáren a biodegradačních ploch řešíme pachy, emise, hluk, rozptyl a podklady pro povolovací řízení.",
    "EIA, rozptylové studie, hlukové studie, emise",
    "pachy, amoniak, hluk, doprava, prašnost",
    ["/sluzby/eia-oznameni-zameru", "/sluzby/rozptylove-studie", "/sluzby/hlukove-studie"],
    ["provozni-rad-kompostarna"]
  ),
  sector(
    "stavebni-zamery",
    "Stavební a investiční záměry",
    "U stavebních a investičních záměrů řešíme EIA, hluk, rozptyl a odborné přílohy pro projektanty a investory.",
    "EIA, hlukové studie, rozptylové studie, technické přílohy",
    "doprava, hluk, imise, kapacita, varianty provozu",
    ["/sluzby/eia-oznameni-zameru", "/sluzby/hlukove-studie", "/sluzby/rozptylove-studie", "/sluzby/technicke-prilohy"],
    ["eia-recyklacni-areal", "rozptylova-hlukova-terenni-upravy"]
  ),
  sector(
    "kamenolomy",
    "Kamenolomy, pískovny a prašné provozy",
    "U kamenolomů, pískoven a prašných provozů řešíme prašnost, hluk, dopravu, rozptyl a podklady pro úřad.",
    "Rozptylové studie, hlukové studie, emise, EIA",
    "prašnost, TZL, hluk, doprava, drcení",
    ["/sluzby/rozptylove-studie", "/sluzby/hlukove-studie", "/sluzby/mereni-emisi"],
    []
  ),
  sector(
    "zemedelske-provozy",
    "Zemědělské provozy a stáje",
    "U zemědělských provozů a stájí řešíme emise, pachy, hluk, pracovní prostředí a podklady pro KHS i krajský úřad.",
    "Emise, hluk, pracovní prostředí, rozptylové studie, EIA",
    "amoniak, pachy, hluk, prašnost, mikroklima",
    ["/sluzby/mereni-emisi", "/sluzby/pracovni-prostredi", "/sluzby/hlukove-studie"],
    [],
    { homeFeatured: true }
  ),
  sector(
    "susarny-zemedelstvi",
    "Sušárny obilí, biomasy a zemědělských produktů",
    "U sušáren obilí a biomasy řešíme emise ze spalování, prašnost, hluk a podklady pro povolení provozu.",
    "Emise, hluk, rozptylové studie, provozní řád",
    "TZL, NOx, CO, prašnost, biomasa",
    ["/sluzby/mereni-emisi", "/sluzby/hlukove-studie", "/sluzby/provozni-rady"],
    []
  ),
  sector(
    "potravinarstvi",
    "Potravinářské provozy",
    "U potravinářských provozů řešíme emise, pachy, pracovní prostředí, hluk a hygienické podklady pro KHS.",
    "Pracovní prostředí, emise, hluk, KHS",
    "pachy, prašnost, mikroklima, chladicí technologie",
    ["/sluzby/pracovni-prostredi", "/sluzby/mereni-emisi", "/sluzby/mereni-hluku"],
    ["mereni-emisi-potravinarsky-provoz"]
  ),
  sector(
    "cov-kaly",
    "Čistírny odpadních vod a kalové hospodářství",
    "U ČOV a kalového hospodářství řešíme výduchy, sušárny kalů, pyrolýzu, čištění spalin a změny povolení provozu.",
    "Odborné posudky, provozní řád, emise, rozptylové studie",
    "výduchy, kalová sušárna, pyrolýza, bioplyn, H₂S",
    ["/sluzby/odborne-posudky", "/sluzby/provozni-rady", "/sluzby/mereni-emisi"],
    ["cov-kalovy-vyduch", "susarna-kalu", "pyrolyza-kalu"]
  ),
  sector(
    "susarny-kalu",
    "Sušárny kalů",
    "U sušáren kalů řešíme emise, výduchy, provozní řád a podklady pro orgán ochrany ovzduší.",
    "Emise, odborné posudky, provozní řád, ČIŽP",
    "TZL, pachy, výduchy, spalování plynu",
    ["/sluzby/mereni-emisi", "/sluzby/odborne-posudky", "/sluzby/provozni-rady"],
    ["cov-kalovy-vyduch", "susarna-kalu", "pyrolyza-kalu"]
  ),
  sector(
    "pyrolyza-kalu",
    "Pyrolýza a tepelné zpracování kalů",
    "U pyrolýzy a tepelného zpracování kalů řešíme emise, výduchy, čištění spalin a odborné podklady pro úřad.",
    "Odborné posudky, emise, provozní řád, rozptylové studie",
    "organické látky, CO, NOx, výduchy, spaliny",
    ["/sluzby/odborne-posudky", "/sluzby/mereni-emisi", "/sluzby/provozni-rady"],
    ["cov-kalovy-vyduch", "susarna-kalu", "pyrolyza-kalu"]
  ),
  sector(
    "cisteni-spalin",
    "Technologie čištění spalin a odpadních plynů",
    "U technologií čištění spalin řešíme měření na vstupu a výstupu, účinnost odlučování a podklady pro provozní dokumentaci.",
    "Emise, odborné posudky, provozní řád",
    "TZL, kovy, HCl, HF, účinnost filtrace",
    ["/sluzby/mereni-emisi", "/sluzby/odborne-posudky"],
    []
  ),
  sector(
    "tepelna-cerpadla-vzt",
    "VZT, chlazení a tepelná čerpadla",
    "U VZT, chlazení a tepelných čerpadel řešíme hluk venkovních jednotek, měření, studie a opatření před kolaudací i při stížnostech.",
    "Hlukové studie, měření hluku, KHS, stavební úřad",
    "hluk, VZT, chlazení, tepelná čerpadla, noční režim",
    ["/sluzby/hlukove-studie", "/sluzby/mereni-hluku"],
    ["hlukova-studie-vzt", "mereni-hluku-tepelne-cerpadlo"],
    { homeFeatured: true }
  ),
  sector(
    "verejne-budovy",
    "Veřejné budovy, školy, nemocnice, lázně a sociální zařízení",
    "U veřejných budov řešíme hluk, VZT, pracovní prostředí a podklady pro KHS nebo stavební úřad.",
    "Hlukové studie, pracovní prostředí, měření hluku",
    "hluk, VZT, mikroklima, osvětlení, chemické látky",
    ["/sluzby/hlukove-studie", "/sluzby/pracovni-prostredi", "/sluzby/mereni-hluku"],
    ["hlukova-studie-vzt"]
  ),
  sector(
    "laboratore",
    "Laboratoře a čisté prostory",
    "V laboratořích a čistých prostorech řešíme chemické látky, mikroklima, osvětlení, hluk a funkci větrání pro KHS.",
    "Pracovní prostředí, chemické látky, KHS",
    "chemické látky, mikroklima, osvětlení, větrání",
    ["/sluzby/pracovni-prostredi", "/sluzby/chemicke-latky"],
    ["laborator-cisty-prostor"]
  ),
  sector(
    "lesnictvi-doprava",
    "Lesnictví, stavební firmy, doprava a údržba",
    "U lesnictví, stavebních firem a dopravy řešíme hluk, vibrace a kategorizaci prací pro KHS.",
    "Pracovní prostředí, hluk, vibrace, kategorizace prací",
    "hluk, vibrace HAV/WBV, ruční nářadí, stroje",
    ["/sluzby/pracovni-prostredi", "/sluzby/mereni-hluku"],
    ["hluk-vibrace-mobilni-cinnost", "mereni-vibraci-ruce", "mereni-vibraci-cele-telo"]
  ),
  sector(
    "ispop-evidence",
    "ISPOP a souhrnná provozní evidence",
    "U provozovatelů zdrojů řešíme ISPOP, souhrnnou provozní evidenci, emisní bilance a návaznost na měření emisí.",
    "ISPOP, emise, provozní řád, ČIŽP",
    "emisní bilance, spotřeby paliv, provozní data",
    ["/sluzby/ispop", "/sluzby/mereni-emisi"],
    ["ispop-rocni-hlaseni", "oprava-ispop"]
  ),
  sector(
    "ghg-cnr",
    "GHG, CNR a skleníkové plyny",
    "U provozů řešíme výkazování skleníkových plynů, GHG ověřování a návaznost na měření a provozní data.",
    "GHG, ISPOP, emise, výkaznictví",
    "CO₂, skleníkové plyny, paliva, emisní faktory",
    ["/sluzby/ghg-overovani", "/sluzby/ispop"],
    ["ghg-cnr-vykaz"]
  ),
  sector(
    "provozni-rady",
    "Provozní řády",
    "U zdrojů znečišťování ovzduší připravujeme a aktualizujeme provozní řády v návaznosti na technologii a měření.",
    "Provozní řád, odborné posudky, emise",
    "provozní režimy, měřicí místa, podmínky provozu",
    ["/sluzby/provozni-rady", "/sluzby/odborne-posudky", "/sluzby/mereni-emisi"],
    ["aktualizace-provozniho-radu"]
  ),
  sector(
    "odborne-posudky-povoleni",
    "Odborné posudky a povolení provozu",
    "U změn technologie, kapacity nebo výduchů připravujeme odborné posudky a podklady pro povolení provozu.",
    "Odborné posudky, provozní řád, emise, ČIŽP",
    "změna technologie, kapacita, výduch, palivo",
    ["/sluzby/odborne-posudky", "/sluzby/provozni-rady", "/sluzby/mereni-emisi"],
    ["aktualizace-provozniho-radu"]
  )
];

export const homeSectors = sectors
  .filter((s) => s.homeFeatured)
  .map((s) => ({ title: s.title, href: s.href }));

export function getSectorById(id: string): Sector | undefined {
  return sectors.find((sector) => sector.id === id);
}
