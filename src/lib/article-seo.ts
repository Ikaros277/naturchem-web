import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n/locales";

/** Search-result labels, not replacements for the reviewed article headings or body. */
const czechTitles: Record<string, string> = {
  "praskova-lakovna-povoleni": "Prášková lakovna: povolení, měření a filtrace",
  "rozptylova-studie-kdy-je-povinna-a-jake-podklady-jsou-potreba": "Rozptylová studie: povinnost a potřebné podklady",
  "bezpecnostni-listy-v-provozu-co-musi-zamestnavatel": "Bezpečnostní listy: povinnosti zaměstnavatele",
  "chladova-zatez-na-pracovisti": "Chladová zátěž na pracovišti: měření a podklady",
  "chyby-souhrnna-provozni-evidence": "Souhrnná provozní evidence: nejčastější chyby",
  "co-se-meni-v-povolovani-zdroju-znecistovani-ovzdusi-v-roce-2026": "Povolování zdrojů emisí: změny v roce 2026",
  "deponie-materialu-v-arealu-povoleni-rozptylova-studie-odborny-posudek": "Deponie materiálu: povolení, studie a posudky",
  "drevozpracujici-provoz-prach-piliny-odsavani-hluk-a-povoleni-zdroje": "Dřevozpracující provoz: prach, emise a hluk",
  "elektronicke-oznamovani-mereni-emisi-a-predavani-protokolu-prakticky-dopad-na-provozovatele": "Měření emisí: elektronické oznámení a protokoly",
  "emisni-faktory-a-vypocet-emisi-kdy-staci-vypocet-a-kdy-je-potreba-mereni": "Výpočet emisí: kdy stačí a kdy je nutné měření",
  "eu-ets-ghg-kdy-sledovat-vykazovat-emise-sklenikovych-plynu": "EU ETS a GHG: sledování a vykazování emisí",
  "galvanovna-povoleni-provozu": "Galvanovna a mořírna: emise a povolení provozu",
  "hluk-na-pracovisti-a-hluk-do-okoli-rozdil-mereni": "Hluk na pracovišti a do okolí: rozdíly v měření",
  "hluk-nocni-provoz-arealu": "Noční provoz areálu: zdroje hluku a limity",
  "hluk-z-tepelnych-cerpadel-a-vzt-jednotek-co-resit-pred-kolaudaci": "Tepelná čerpadla a VZT: hluk před kolaudací",
  "institut-minimalni-vzdalenosti-ochrana-ovzdusi": "Minimální vzdálenosti zdrojů: prach a zápach",
  "ispop-u-jednorazoveho-mereni-emisi-co-musi-zajistit-provozovatel-a-co-autorizovana-osoba": "ISPOP a měření emisí: povinnosti obou stran",
  "izokyanaty-ve-vyrobe-skoleni-bezpecnostni-listy-mereni-pracovniho-ovzdusi": "Izokyanáty ve výrobě: školení a měření",
  "jak-cist-hlukovou-studii-laeq-lafmax-chraneny-prostor-a-nejistota": "Jak číst hlukovou studii: veličiny a nejistota",
  "jake-podklady-potrebujete-pro-povoleni-prumysloveho-provozu-z-hlediska-zivotniho-prostredi": "Povolení průmyslového provozu: potřebné podklady",
  "jes-a-eia-kdy-se-resi-jednotne-environmentalni-stanovisko-spolecne-s-eia": "JES a EIA: kdy se řeší společně",
  "kategorizace-praci-po-zmene-technologie-nove-mereni": "Kategorizace prací po změně technologie",
  "kdy-muze-urad-pozadovat-odborny-posudek-i-u-zmeny-stavajiciho-zdroje": "Změna zdroje: kdy je potřeba odborný posudek",
  "kogeneracni-jednotka-emise-hluk-mereni-povoleni-provozu": "Kogenerační jednotka: emise, hluk a povolení",
  "kolaudace-vyrobni-haly-provozovny-khs-mereni": "Kolaudace haly: měření pro KHS a podklady",
  "kontrola-cizp-ovzdusi": "Kontrola ČIŽP: podklady pro ochranu ovzduší",
  "manipulace-se-sypkymi-materialy-kod-12-1-deponie-povoleni": "Sypké materiály: zařazení a povolení zdroje",
  "mereni-chemickych-latek-v-pracovnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni": "Chemické látky v pracovním ovzduší: rozsah měření",
  "mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu": "Měření mikroklimatu: teplota, vlhkost a proudění",
  "mereni-osvetleni-pracoviste-khs-kolaudace": "Měření osvětlení: požadavky KHS a kolaudace",
  "mereni-rozpoustedel-pracovniho-ovzdusi": "Rozpouštědla a VOC: měření pracovního ovzduší",
  "priprava-na-mereni-emisi": "Jak připravit zdroj na měření emisí",
  "mereni-vibraci-pri-praci-ruce-cele-telo-kategorizace-praci": "Měření vibrací: ruce, celé tělo a kategorizace",
  "merici-misto-na-vyduchu-nejcastejsi-chyby-ktere-zkomplikuji-mereni-emisi": "Měřicí místo na výduchu: nejčastější chyby",
  "merici-misto-na-vyduchu-proc-je-dulezite-uz-ve-fazi-projektu": "Měřicí místo na výduchu při přípravě projektu",
  "nedostatecne-osvetleni-pracoviste-co-se-meri-podklady": "Nedostatečné osvětlení: měření a podklady",
  "nove-metodicke-vyklady-mzp-k-dopovolovanym-zdrojum-co-ma-provozovatel-zkontrolovat": "Výklady MŽP k dopovolovaným zdrojům",
  "novela-zakona-o-ochrane-ovzdusi-2025": "Novela ochrany ovzduší 2025: změny pro provoz",
  "odborny-posudek-podle-zakona-o-ochrane-ovzdusi-kdy-je-potreba-a-co-musi-obsahovat": "Odborný posudek ovzduší: kdy je potřeba",
  "plynova-kotelna-03-50-mw-nox-co-mereni-povoleni": "Plynová kotelna 0,3–50 MW: emise a povolení",
  "poplatky-za-znecistovani-ovzdusi-jak-souvisi-mereni-vypocet-emisi-a-provozni-evidence": "Poplatky za ovzduší: měření, výpočty a evidence",
  "cena-odborneho-posudku-ovzdusi-rozptylove-studie-provozniho-radu": "Cena posudku, rozptylové studie a provozního řádu",
  "prach-na-pracovisti-celkovy-prach-respirabilni-frakce-a-oxid-kremicity": "Prach na pracovišti: frakce a oxid křemičitý",
  "projekt-aramis-emisni-faktory-metodiky-ochrana-ovzdusi": "Projekt ARAMIS: emisní faktory a metodiky",
  "projektant-vs-ekologicky-konzultant-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia": "Projektant a ekologický konzultant: spolupráce",
  "protiprasna-opatreni-na-stavbe-dokumentace-urad": "Protiprašná opatření na stavbě: dokumentace",
  "provozni-parametr-u-zdroje-emisi-kdy-ho-musi-provozovatel-sledovat-a-zaznamenavat": "Provozní parametr zdroje: sledování a evidence",
  "provozni-rad-zdroje-znecistovani-ovzdusi": "Provozní řád zdroje: povinnost a schvalování",
  "recyklacni-stredisko-stavebnich-odpadu-hluk-prach-doprava-a-eia": "Recyklační středisko: hluk, prach, doprava a EIA",
  "scitaci-pravidla-u-zdroju-znecistovani-ovzdusi-proc-mohou-zmenit-povinnosti-provozovatele": "Sčítací pravidla zdrojů: změny povinností",
  "skladka-a-odpadove-zarizeni-jake-environmentalni-podklady-se-obvykle-resi": "Skládka a odpadové zařízení: podklady",
  "skladovani-chemickych-latek-smesi-kontrola": "Skladování chemikálií: příprava na kontrolu",
  "souhrnna-provozni-evidence-2026-co-musi-provozovatel-zkontrolovat-pred-odeslanim": "Souhrnná provozní evidence 2026: kontrola údajů",
  "tepelna-zatez-na-pracovisti-kdy-je-nutne-mereni-a-jak-se-stanovi-pripustna-doba-prace": "Tepelná zátěž: měření a přípustná doba práce",
  "vyjmenovany-stacionarni-zdroj-povoleni-provozu": "Vyjmenovaný zdroj: potřebujete povolení provozu?",
  "vyzva-khs-mereni-pracovniho-prostredi": "Výzva KHS: rozsah měření pracovního prostředí",
  "zalozni-dieselagregat-emise-povoleni-provozni-hodiny": "Dieselagregát: záložní, nebo běžný zdroj emisí?",
  "zapach-z-provozovny-stiznost-pachove-latky": "Zápach z provozovny: stížnosti a posouzení",
  "zmena-integrovaneho-povoleni-ippc-podstatna-zmena": "Změna povolení IPPC: podstatná změna a ohlášení",
  "zmena-technologie-vyrobni-areal-ovzdusi-hluk-odpady-eia": "Změna technologie: ovzduší, hluk, odpady a EIA"
};
const translatedTitles: Record<string, Partial<Record<Locale, string>>> = {
  "zmena-integrovaneho-povoleni-ippc-podstatna-zmena": {
    en: "IPPC permit changes: substantial changes and notification",
    de: "IPPC-Genehmigung: wesentliche Änderung und Anzeige"
  },
  "kontrola-cizp-ovzdusi": {
    en: "ČIŽP inspections: preparing air protection records",
    de: "ČIŽP-Kontrolle: Unterlagen zur Luftreinhaltung"
  },
  "nove-metodicke-vyklady-mzp-k-dopovolovanym-zdrojum-co-ma-provozovatel-zkontrolovat": {
    en: "New MŽP guidance on sources requiring additional permits",
    de: "Neue MŽP-Leitlinien für nachträgliche Genehmigungen"
  }
};

export function articleSearchMetadata(article: Pick<Article, "slug" | "title" | "excerpt">, locale: Locale) {
  const title = (locale === "cs" ? czechTitles[article.slug] : translatedTitles[article.slug]?.[locale]) || article.title;
  const excerpt = article.excerpt.replace(/\s+/g, " ").trim();
  // Keep complete source sentences, never truncate a legal condition or negation.
  const firstSentence = Array.from(new Intl.Segmenter(locale, { granularity: "sentence" }).segment(excerpt))[0]?.segment.trim();
  const suffix = locale === "cs" ? "Odborný článek NATURCHEM." : locale === "de" ? "Fachartikel von NATURCHEM." : "Expert article by NATURCHEM.";
  const description = excerpt.length <= 180 ? excerpt
    : firstSentence && firstSentence.length <= 180 ? firstSentence
    : `${title.replace(/[.!?]$/, "")}. ${suffix}`;
  return { title, description };
}
