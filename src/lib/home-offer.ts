export type HomeOfferItem = {
  label: string;
  href: string;
};

export const homeOfferIntro =
  "Zajišťujeme terénní měření, výpočty, odborné studie i povolovací dokumentaci. Jednotlivé podklady pro Vás koordinujeme v rámci jedné zakázky.";

export const homeMeasurementPillar = {
  title: "Měření a terénní práce",
  items: [
    { label: "Měření emisí", href: "/sluzby/mereni-emisi" },
    { label: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
    { label: "Měření hluku", href: "/sluzby/mereni-hluku" },
    { label: "Měření provozních parametrů", href: "/sluzby/mereni-emisi" }
  ] satisfies HomeOfferItem[]
};

export const homeStudiesPillar = {
  title: "Studie, posudky a povolovací podklady",
  items: [
    { label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
    { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
    { label: "EIA oznámení záměru", href: "/sluzby/eia-oznameni-zameru" },
    { label: "Odborné posudky", href: "/sluzby/odborne-posudky" },
    { label: "Provozní řády", href: "/sluzby/provozni-rady" },
    { label: "IPPC a integrovaná povolení", href: "/sluzby/ippc-integrovana-povoleni" },
    { label: "ISPOP a provozní evidence", href: "/sluzby/ispop" },
    { label: "Emise skleníkových plynů (GHG)", href: "/sluzby/ghg-overovani" },
    { label: "Technické podklady pro úřady", href: "/sluzby/odborne-posudky" }
  ] satisfies HomeOfferItem[]
};
