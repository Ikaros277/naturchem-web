import { createInlineServicePageExports } from "@/lib/render-inline-service-page";

const czech = {
  slug: "sluzby/eia-posudky-poradenstvi",
  faqCategoryId: "eia",
  title: "EIA, posudky, provozní řády a IPPC",
  intro:
    "**EIA**, posudek, měření i provozní řád u jednoho zdroje? Zkoordinujeme povolovací kroky tak, aby údaje pro krajský úřad byly konzistentní — včetně **IPPC** a **ISPOP**.",
  scope: [
    "Zkoordinujeme **EIA** — oznámení, **zjišťovací řízení**, technické přílohy",
    "Zajistíme odborné posudky a **povolení provozu** zdroje",
    "Připravíme provozní řády a změny **IPPC**",
    "Zkontrolujeme **ISPOP**, **souhrnnou evidenci** a GHG"
  ],
  whenNeeded: [
    "Plánujete nový záměr nebo změnu kapacity",
    "Probíhá **zjišťovací řízení** **EIA** nebo doplňujete po připomínkách úřadu",
    "Měníte technologii, **povolení provozu**, **provozní řád** nebo integrované povolení",
    "Řešíte roční **ISPOP**, **souhrnnou evidenci** nebo GHG reporting"
  ],
  practicalSituations: [
    "EIA oznámení záměru pro kapacitní změnu provozu",
    "odborný posudek ovzduší při změně technologie nebo povolení provozu",
    "provozní řád zdroje znečišťování ovzduší po změně režimu nebo filtrace",
    "IPPC změna integrovaného povolení a koordinace odborných příloh",
    "ISPOP, souhrnná provozní evidence nebo GHG reporting v návaznosti na provozní data"
  ],
  docs: [
    "popis záměru a technologické schéma",
    "situace areálu a doprava",
    "dosavadní rozhodnutí, stanoviska, **integrované povolení** nebo **povolení provozu**",
    "emisní, hlukové, dopravní a provozní údaje včetně dostupných protokolů"
  ],
  outputs: [
    "**odborný posudek** nebo technické vyjádření",
    "**provozní řád** nebo jeho aktualizace",
    "**EIA** oznámení záměru, podklady pro **IPPC**, ISPOP nebo GHG",
    "strukturovaná odpověď na připomínky úřadů"
  ],
  commonMistakes: [
    "Nekoordinované studie hluku a rozptylu v EIA",
    "Zastaralý provozní řád po změně technologie",
    "Neúplná odpověď na připomínky úřadu"
  ],
  relatedLinks: [
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
  ]
};

const { generateMetadata, Page } = createInlineServicePageExports("eia-posudky-poradenstvi", czech);
export { generateMetadata };
export default Page;
