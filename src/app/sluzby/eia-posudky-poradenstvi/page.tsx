import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "EIA, posudky, provozní řády a IPPC",
  description:
    "EIA, IPPC, provozní řády, ISPOP, GHG, odborné posudky a vyřízení stanovisek a povolení.",
  alternates: { canonical: `${siteUrl}/sluzby/eia-posudky-poradenstvi/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="sluzby/eia-posudky-poradenstvi"
      faqCategoryId="eia"
      title="EIA, posudky, provozní řády a IPPC"
      intro="Povolovací agenda kolem zdroje zahrnuje EIA, posudek, měření, provozní řád a ISPOP. Zkoordinujeme kroky a podklady tak, aby data pro krajský úřad byla konzistentní."
      scope={[
        "EIA — oznámení, zjišťovací řízení, technické přílohy",
        "odborné posudky a povolení provozu zdroje",
        "provozní řády a změny IPPC",
        "ISPOP, souhrnná evidence a GHG"
      ]}
      whenNeeded={[
        "nový záměr nebo změna kapacity",
        "zjišťovací řízení EIA nebo doplnění po připomínkách úřadu",
        "změna technologie, povolení provozu, provozního řádu nebo integrovaného povolení",
        "roční ISPOP / souhrnná provozní evidence nebo GHG agenda"
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
          href: "/sluzby/rozptylove-studie",
          description: "Imisní příspěvek zdrojů a dopravy jako častá příloha EIA a povolování."
        },
        {
          title: "Měření hluku a hlukové studie",
          href: "/sluzby/hlukove-studie",
          description: "Hluk z technologie, dopravy, VZT a průmyslových areálů."
        },
        {
          title: "Odborné posudky",
          href: "/sluzby/odborne-posudky",
          description: "Samostatný detail odborných posudků pro zdroje a povolování."
        }
      ]}
    />
  );
}
