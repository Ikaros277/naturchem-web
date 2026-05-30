import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { company, siteUrl } from "@/lib/site";

const url = `${siteUrl}/odborna-garance/`;

export const metadata: Metadata = {
  title: "Odborná garance Ing. Františka Heziny",
  description:
    "Za každou zakázku NATURCHEM odpovídá Ing. František Hezina — soudní znalec a autorizovaná osoba pro měření emisí, posudky, studie, GHG a EIA.",
  alternates: { canonical: url }
};

export default function Page() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: company.person,
    jobTitle: "Odborný garant měření a studií",
    worksFor: { "@type": "Organization", name: company.name },
    description:
      "Odborná praxe v měření, studiích, povolovacích procesech a jednání s orgány veřejné správy."
  };

  return (
    <main className="container section">
      <JsonLd data={personData} />
      <Breadcrumbs
        items={[
          { name: "Úvod", href: "/" },
          { name: "Odborná garance" }
        ]}
      />
      <h1>Odbornou garanci zajišťuje Ing. František Hezina</h1>
      <p>
        Výstup z naší laboratoře není anonymní protokol velké firmy. Za posouzením zakázky, návrhem
        měření i finální dokumentací stojí konkrétní odborník s praxí v provozech, povolovacích
        procesech a jednání s úřady.
      </p>
      <section className="grid grid-2">
        <article className="card">
          <h2>Odborný profil</h2>
          <ul>
            <li>jednatel NATURCHEM, odborná garance zakázek</li>
            <li>soudní znalec v oblasti měření a environmentálních podkladů</li>
            <li>
              autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování
              emisí skleníkových plynů a oznámení EIA
            </li>
            <li>praxe s průmyslovými provozy, projektanty a investory</li>
          </ul>
        </article>
        <article className="card">
          <h2>Jak přemýšlíme nad zakázkou</h2>
          <p>
            Posoudíme, k čemu měření nebo studie slouží, kdo výstup obdrží a jaká technická rizika
            hrozí v provozu i v řízení. Díky tomu předejdete zbytečným doplňováním a opakovaným
            požadavkům úřadů.
          </p>
          <p>
            Cíl je jasný: výstup, který použijete v provozu i při jednání s úřadem — bez překvapení
            na poslední chvíli.
          </p>
        </article>
      </section>
      <p style={{ marginTop: "1rem" }}>
        <Link href="/kontakt">Konzultovat konkrétní zakázku</Link>
        {" · "}
        <Link href="/o-spolecnosti-naturchem">O NATURCHEM</Link>
      </p>
    </main>
  );
}
