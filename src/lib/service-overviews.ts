import type { ServiceCommercialIntent } from "@/lib/service-commercial-intent";

type ServiceOverview = Pick<ServiceCommercialIntent, "heading" | "features">;

/** Concise summaries of the existing scope; titles and full technical copy stay unchanged. */
export const serviceOverviews: Record<string, ServiceOverview> = {
  "modelove-vypocty": {
    heading: "Výpočty pro porovnání variant",
    features: [
      { title: "Technologie a umístění", text: "Porovnáme varianty zdrojů, jejich umístění a provozní režim podle zadání projektu." },
      { title: "Imise nebo hluk", text: "Zpracujeme výpočet pro ovzduší či hluk. Rozsah vymezíme podle účelu navazující studie." },
      { title: "Výpočtový podklad", text: "Předáme výsledky a variantní srovnání pro rozptylovou studii, hlukovou studii nebo další posouzení." },
    ],
  },
  "imisni-dopady": {
    heading: "Společné posouzení ovzduší a hluku",
    features: [
      { title: "Jeden investiční záměr", text: "Posoudíme souběžný vliv záměru na kvalitu ovzduší a hluk v okolí." },
      { title: "Sjednocené vstupy", text: "Sladíme údaje o technologiích, dopravě a provozním režimu. Podle zadání porovnáme varianty." },
      { title: "Souhrn pro investora", text: "Propojíme výsledky posouzení a doporučení opatření jako podklad pro projektanta, EIA nebo úřad." },
    ],
  },
  "akusticke-posudky": {
    heading: "Akustické posouzení technologií v objektech",
    features: [
      { title: "Strojovny a technická zařízení", text: "Posoudíme hluk VZT, strojovny nebo technologie v budově při stavební úpravě či změně užívání." },
      { title: "Návrh odhlučnění", text: "Navážeme na dostupné měření nebo akustický výpočet. Navrhneme opatření podle skutečného provozu." },
      { title: "Akustický posudek", text: "Připravíme vyhodnocení a doporučení pro stavební řízení, kolaudaci nebo požadavek KHS." },
    ],
  },
  "eia-oznameni-zameru": {
    heading: "Zpracování oznámení záměru",
    features: [
      { title: "Popis záměru a provozu", text: "Zpracujeme oznámení EIA z projektových a provozních údajů k plánované investici nebo její změně." },
      { title: "Koordinace odborných příloh", text: "Sladíme údaje pro ovzduší, hluk a dopravu, aby přílohy vycházely ze stejného zadání." },
      { title: "Oznámení a jeho doplnění", text: "Předáme oznámení s odbornými podklady. Podle zadání doplníme dokumentaci po připomínkách úřadu." },
    ],
  },
  "zjistovaci-rizeni-eia": {
    heading: "Podklady pro zpracovatele EIA",
    features: [
      { title: "Zadání pro zjišťovací řízení", text: "Připravíme dílčí odborné podklady pro investora nebo zpracovatele oznámení záměru." },
      { title: "Měření a studie", text: "Zajistíme technické vstupy pro emise, rozptyl a hluk podle zadání EIA." },
      { title: "Sladění podkladů", text: "Propojíme údaje z projektu a provozu. Doplníme podklady podle připomínek ve fázi zjišťování." },
    ],
  },
  "technicke-prilohy": {
    heading: "Odborné přílohy k projektu",
    features: [
      { title: "Podle zadání projektanta", text: "Připravíme environmentální podklady pro projektovou přípravu nebo studii proveditelnosti." },
      { title: "Rozptyl, hluk a emise", text: "Zkoordinujeme měření a studie pro technologie, dopravu a varianty záměru." },
      { title: "Návaznost na dokumentaci", text: "Sladíme odborné přílohy s projektem a provozními údaji pro investora, projektanta nebo zpracovatele EIA." },
    ],
  },
  "eia-posudky-poradenstvi": {
    heading: "Koordinace povolovacích podkladů",
    features: [
      { title: "Více agend jednoho provozu", text: "Propojíme EIA, odborný posudek, měření a provozní dokumentaci podle potřeb záměru." },
      { title: "Návaznost dokumentů", text: "Sladíme technické a provozní údaje ve studiích, povoleních a provozních řádech." },
      { title: "Konkrétní rozsah zakázky", text: "Pro žádost IPPC, povolení provozu nebo hlášení ISPOP zvolíme příslušnou službu a potřebné podklady." },
    ],
  },
  "povoleni-provozu": {
    heading: "Žádost o povolení provozu zdroje",
    features: [
      { title: "Nový zdroj nebo změna", text: "Zpracujeme žádost o vydání nebo změnu povolení provozu podle technologie a provozního režimu." },
      { title: "Odborné podklady", text: "Zkoordinujeme potřebné měření emisí, odborný posudek a provozní řád." },
      { title: "Podání za provozovatele", text: "Za Vás zajistíme podání a doplnění žádosti v dohodnutém rozsahu. Povolení vydává příslušný úřad." },
    ],
  },
};

export function getServiceOverview(slug: string): ServiceOverview | undefined {
  return serviceOverviews[slug.split("/").pop() ?? slug];
}
