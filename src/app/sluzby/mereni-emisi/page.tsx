import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Měření emisí ze stacionárních zdrojů",
  description:
    "Měření emisí z kotelen, lakovny, spaloven a technologických zdrojů. Protokoly pro provozovatele, KHS a krajské úřady.",
  alternates: { canonical: `${siteUrl}/sluzby/mereni-emisi/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="sluzby/mereni-emisi"
      faqCategoryId="emise"
      title="Měření emisí ze stacionárních zdrojů"
      intro="Akreditované měření emisí z komínů, výduchů a technologií. Ověřujeme vhodnost měřicího místa, reprezentativnost provozního režimu a návaznost protokolu na povolení provozu, požadavky ČIŽP, krajského úřadu a evidenci v ISPOP."
      scope={[
        "měření NOx, CO, SO₂, O₂, TOC/VOC, TZL, HCl, kovů a dalších složek dle povolení provozu a zadání",
        "posouzení měřicího místa, výduchu a souladu s provozním řádem",
        "průběžná komunikace s provozem při přípravě a realizaci měření",
        "vyhodnocení výsledků v kontextu limitů, povolení a případných výzev úřadu"
      ]}
      forWhom={[
        "provozovatelé kotelen, spaloven, lakoven, výrobních linek a dalších stacionárních zdrojů",
        "investoři a projektanti při změnách technologie, rozšíření výroby nebo nových výduších",
        "subjekty řešící výzvu krajského úřadu, ČIŽP nebo integrované povolení"
      ]}
      whenNeeded={[
        "periodické nebo jednorázové měření dle vyhlášky č. 415/2012 Sb. a povolení provozu",
        "požadavek krajského úřadu, ČIŽP nebo kontrolního orgánu",
        "změna paliva, suroviny, technologie nebo kapacity zdroje",
        "podklad pro rozptylovou studii, EIA, odborný posudek nebo aktualizaci provozní dokumentace"
      ]}
      authorities={[
        "krajský úřad a povolení provozu stacionárního zdroje znečišťování ovzduší",
        "ČIŽP při kontrole plnění emisních limitů a provozních podmínek",
        "IPPC a integrované povolení u významnějších zařízení",
        "ISPOP a souhrnná provozní evidence navazující na reálná provozní data"
      ]}
      practicalSituations={[
        "měření emisí lakovny po změně technologie nebo filtrace",
        "měření emisí kotelny podle povolení provozu",
        "měření kogenerační jednotky",
        "měření technologického výduchu před změnou povolení",
        "měření jako podklad pro ISPOP, odborný posudek nebo rozptylovou studii",
        "měření po výzvě krajského úřadu nebo ČIŽP"
      ]}
      docs={[
        "rozhodnutí o povolení provozu nebo výňatek z integrovaného povolení / provozní řád",
        "technický popis zdroje, schémata výduchů, filtrace a aktuální režim provozu",
        "historie měření nebo předchozí protokoly (pokud existují)",
        "fotografie výduchu, měřicího místa a přístupových podmínek"
      ]}
      outputs={[
        "protokol z měření emisí s metodikou a vyhodnocením vůči limitům",
        "stručné shrnutí pro jednání s úřadem nebo doplnění dokumentace",
        "doporučení pro další krok (opakování měření, úprava technologie, návazné studie)"
      ]}
      commonMistakes={[
        "měření mimo reprezentativní provoz (nízká zátěž, atypický režim, údržbový stav)",
        "nejasné měřicí místo nebo nekonzistence s výkresovou dokumentací",
        "chybějící provozní údaje k palivům, materiálu nebo času reálného provozu",
        "ignorování oznamovacích lhůt nebo podmínek dohody s provozovatelem areálu"
      ]}
      relatedLinks={[
        {
          title: "ISPOP a provozní evidence",
          href: "/sluzby/ispop",
          description: "Souhrnná provozní evidence, emisní data a návaznost na roční hlášení."
        },
        {
          title: "Odborné posudky a provozní řády",
          href: "/sluzby/odborne-posudky",
          description: "Technické vyhodnocení zdroje, povolení provozu a aktualizace dokumentace."
        },
        {
          title: "Rozptylové studie",
          href: "/sluzby/rozptylove-studie",
          description: "Navazující posouzení imisního příspěvku zdroje v okolí záměru."
        }
      ]}
    />
  );
}
