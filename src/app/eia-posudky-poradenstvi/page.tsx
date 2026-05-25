import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "EIA, posudky, provozní řády a IPPC",
  description:
    "EIA, IPPC, provozní řády, ISPOP, GHG, odborné posudky a vyřízení stanovisek a povolení.",
  alternates: { canonical: `${siteUrl}/eia-posudky-poradenstvi/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="eia-posudky-poradenstvi"
      faqCategoryId="eia"
      title="EIA, posudky, provozní řády a IPPC"
      intro="Povolovací agenda kolem zdroje zahrnuje EIA, posudek, měření, provozní řád a ISPOP. Zajišťujeme koordinaci kroků a podkladů tak, aby data pro krajský úřad byla technicky konzistentní."
      scope={[
        "EIA — oznámení, zjišťovací řízení, technické přílohy",
        "odborné posudky a povolení provozu zdroje",
        "provozní řády a změny IPPC",
        "ISPOP, souhrnná evidence a GHG",
        "sladění rozptylu, hluku a měření emisí"
      ]}
      forWhom={[
        "investoři, developeři a veřejný sektor v povolovacích řízeních",
        "provozovatelé významných zdrojů a zařízení s integrovaným povolením",
        "organizace řešící GHG, ISPOP a změny provozní dokumentace"
      ]}
      whenNeeded={[
        "nový záměr nebo změna kapacity",
        "zjišťovací řízení EIA nebo doplnění po připomínkách úřadu",
        "změna technologie, povolení provozu, provozního řádu nebo integrovaného povolení",
        "roční ISPOP / souhrnná provozní evidence nebo GHG agenda"
      ]}
      authorities={[
        "krajský úřad u povolení provozu, odborných posudků a provozních řádů",
        "MŽP a příslušný úřad v procesu EIA a zjišťovacího řízení",
        "IPPC a integrované povolení u zařízení s významnými environmentálními dopady",
        "ČIŽP při kontrolách plnění podmínek provozu a dokumentace"
      ]}
      practicalSituations={[
        "EIA oznámení záměru pro kapacitní změnu provozu",
        "odborný posudek ovzduší při změně technologie nebo povolení provozu",
        "provozní řád zdroje znečišťování ovzduší po změně režimu nebo filtrace",
        "IPPC změna integrovaného povolení a koordinace odborných příloh",
        "ISPOP, souhrnná provozní evidence nebo GHG reporting v návaznosti na provozní data"
      ]}
      docs={[
        "popis záměru a technologické schéma",
        "situace areálu a doprava",
        "dosavadní rozhodnutí, stanoviska, integrované povolení nebo povolení provozu",
        "emisní, hlukové, dopravní a provozní údaje včetně dostupných protokolů"
      ]}
      outputs={[
        "odborný posudek nebo technické vyjádření",
        "provozní řád nebo jeho aktualizace",
        "EIA oznámení záměru, podklady pro IPPC, ISPOP nebo GHG",
        "strukturovaná odpověď na připomínky úřadů"
      ]}
      commonMistakes={[
        "nekoordinované studie hluku a rozptylu v EIA",
        "zastaralý provozní řád po změně technologie",
        "neúplná odpověď na připomínky úřadu"
      ]}
      relatedLinks={[
        {
          title: "Rozptylové studie",
          href: "/rozptylove-studie",
          description: "Imisní příspěvek zdrojů a dopravy jako častá příloha EIA a povolování."
        },
        {
          title: "Měření hluku a hlukové studie",
          href: "/hlukove-studie",
          description: "Hluk z technologie, dopravy, VZT a průmyslových areálů."
        },
        {
          title: "Odborné posudky",
          href: "/odborne-posudky",
          description: "Samostatný detail odborných posudků pro zdroje a povolování."
        }
      ]}
    />
  );
}
