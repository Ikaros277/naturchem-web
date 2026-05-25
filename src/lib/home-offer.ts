export type HomeOfferItem = {
  label: string;
  href: string;
};

export const homeOfferIntro =
  "NATURCHEM propojuje měření, výpočty, odborné studie a povolovací podklady. Díky tomu lze zakázku řešit jako jeden celek — od terénního měření přes výpočetní studii až po dokumentaci pro úřady.";

export const homeMeasurementPillar = {
  title: "Měření a terénní práce",
  items: [
    { label: "Měření emisí", href: "/mereni-emisi" },
    { label: "Měření pracovního prostředí", href: "/pracovni-prostredi" },
    { label: "Měření hluku", href: "/mereni-hluku-hlukove-studie" },
    { label: "Měření provozních parametrů", href: "/mereni-emisi" }
  ] satisfies HomeOfferItem[]
};

export const homeStudiesPillar = {
  title: "Studie, posudky a povolovací podklady",
  items: [
    { label: "Rozptylové studie", href: "/rozptylove-studie" },
    { label: "Hlukové studie", href: "/hlukove-studie" },
    { label: "EIA oznámení záměru", href: "/eia-oznameni-zameru" },
    { label: "Odborné posudky", href: "/odborne-posudky" },
    { label: "Provozní řády", href: "/provozni-rady" },
    { label: "IPPC", href: "/ippc-integrovana-povoleni" },
    { label: "ISPOP", href: "/ispop-souhrnna-provozni-evidence" },
    { label: "GHG", href: "/ghg-overovani-emisi-sklenikovych-plynu" },
    { label: "Technické podklady pro úřady", href: "/odborne-posudky" }
  ] satisfies HomeOfferItem[]
};
