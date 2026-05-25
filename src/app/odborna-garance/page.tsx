import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { company, siteUrl } from "@/lib/site";

const url = `${siteUrl}/odborna-garance/`;

export const metadata: Metadata = {
  title: "Odborná garance Ing. Františka Heziny",
  description:
    "Odborná garance NATURCHEM: osobní odpovědnost, dlouhodobá praxe, autorizace EIA a důraz na použitelnost výstupů pro úřady.",
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
      "Dlouhodobá odborná praxe v oblasti měření, studií, povolovacích procesů a jednání s orgány veřejné správy."
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
        Zakázky NATURCHEM nejsou anonymním výstupem velké organizace. Za odborným
        posouzením, návrhem měření a výslednou dokumentací stojí konkrétní zkušenost
        z provozní praxe, povolovacích procesů a jednání s úřady.
      </p>
      <section className="grid grid-2">
        <article className="card">
          <h2>Odborný profil</h2>
          <ul>
            <li>dlouhodobá činnost v oblasti měření a environmentálních podkladů</li>
            <li>autorizace odborné osoby pro EIA</li>
            <li>praxe s průmyslovými provozy, projektanty a investory</li>
            <li>důraz na přesnost, přezkoumatelnost a použitelnost výsledků</li>
          </ul>
        </article>
        <article className="card">
          <h2>Jak přemýšlíme nad zakázkou</h2>
          <p>
            Posuzujeme zakázku v návaznosti na účel měření nebo studie, adresáta výstupu
            a technická rizika v provozu i v řízení. Díky tomu lze předejít zbytečným
            doplňováním, nejasnostem a opakovaným požadavkům úřadů.
          </p>
          <p>
            Cílem je dodat výstup, který je použitelný v provozu i při jednání s
            úřadem.
          </p>
        </article>
      </section>
      <p style={{ marginTop: "1rem" }}>
        <Link href="/kontakt">Konzultovat konkrétní zakázku</Link>
      </p>
    </main>
  );
}
