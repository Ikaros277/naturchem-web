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
      intro="Výzva úřadu nebo termín kontrolního měření? Změříme emise z komínu nebo výduchu a předáme akreditovaný protokol pro povolení provozu, ČIŽP, krajský úřad nebo ISPOP."
      scope={[
        "Změříme NOx, CO, SO₂, O₂, TOC/VOC, TZL, HCl, kovy a další složky dle povolení provozu a zadání",
        "Posoudíme měřicí místo, výduch a soulad s provozním řádem",
        "Dohodneme s provozem přípravu a průběh měření",
        "Vyhodnotíme výsledky vůči limitům, povolení a případné výzvě úřadu"
      ]}
      whenNeeded={[
        "Potřebujete periodické nebo jednorázové měření dle vyhlášky č. 415/2012 Sb. a povolení provozu",
        "Krajský úřad, ČIŽP nebo kontrolní orgán požaduje měření",
        "Měníte palivo, surovinu, technologii nebo kapacitu zdroje",
        "Potřebujete podklad pro rozptylovou studii, EIA, odborný posudek nebo provozní dokumentaci"
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
        "Měření v nereprezentativním provozu (nízká zátěž, atypický režim, údržbový stav)",
        "Nejasné měřicí místo nebo nesoulad s výkresy",
        "Chybí provozní údaje k palivům, materiálu nebo reálnému režimu",
        "Přehlédnuté lhůty oznámení nebo podmínky v areálu"
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
