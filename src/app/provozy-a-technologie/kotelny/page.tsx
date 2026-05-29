import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření emisí kotelen a spalovacích zdrojů";
const description =
  "Oborový přehled pro kotelny: NOx, CO, O2, výkonové režimy, měřicí místa a podklady pro provozovatele a úřady.";
const url = `${siteUrl}/provozy-a-technologie/kotelny/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Kotelny a spalovací zdroje"
      slug="kotelny"
      intro="U kotelen je rozhodující správně nastavit měření v reprezentativním výkonu a navázat výsledky na povolovací dokumentaci. Vedle emisních složek je důležitá i interpretace provozních podmínek při měření."
      typicalProblems={[
        "měření v nereprezentativním výkonovém režimu",
        "nejasný rozsah složek podle rozhodnutí úřadu",
        "nedostatečný popis měřicího místa a provozních podmínek",
        "změny paliva bez aktualizace návazných podkladů"
      ]}
      docs={[
        "rozhodnutí o provozu zdroje a provozní řád",
        "technické parametry kotle, palivo a výkonové režimy",
        "informace o měřicích místech a spalinové cestě",
        "předchozí protokoly nebo požadavek ČIŽP/KÚ"
      ]}
      process={[
        "upřesníme účel měření a legislativní návaznost",
        "ověříme měřicí místo a vhodný provozní režim",
        "realizujeme měření (NOx, CO, SO2, O2, doprovodné veličiny)",
        "zpracujeme protokol a doporučení pro další postup"
      ]}
      outputs={[
        "protokol z měření emisí spalovacího zdroje",
        "vyhodnocení vůči požadavkům provozu a správních orgánů",
        "odborná doporučení k technickým nebo provozním opatřením"
      ]}
      pitfalls={[
        "chybějící návaznost mezi měřením a provozním řádem",
        "nepřesné podklady o palivu a režimech provozu",
        "podcenění přípravy měřicího místa"
      ]}
      relatedServices={[
        { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
        { title: "Odborné posudky", href: "/sluzby/odborne-posudky" },
        { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" }
      ]}
      faq={[
        {
          q: "Kdy se u kotelny řeší jednorázové měření emisí?",
          a: "Typicky při plnění podmínek rozhodnutí úřadu, změně technologie nebo na základě kontroly."
        },
        {
          q: "Pomůžete i s posouzením měřicího místa?",
          a: "Ano, před měřením ověřujeme proveditelnost a reprezentativnost měřicího místa."
        }
      ]}
    />
  );
}
