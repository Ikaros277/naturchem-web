import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { legalController, legalEffectiveDate, legalPaths } from "@/lib/legal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Zásady cookies (EU) | NATURCHEM"
  },
  description:
    "Informace o cookies a podobných technologiích na webu NATURCHEM — statistika, marketing a správa souhlasu.",
  alternates: { canonical: `${siteUrl}${legalPaths.cookies}/` },
  robots: { index: true, follow: true }
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Zásady cookies"
      lead="Tyto zásady popisují používání cookies a podobných technologií na webu NATURCHEM pro návštěvníky z EU/EHP."
      breadcrumbLabel="Zásady cookies"
    >
      <p className="legal-meta">
        Naposledy aktualizováno: {legalEffectiveDate}
      </p>

      <h2>1. Úvod</h2>
      <p>
        Web <a href={legalController.web}>{legalController.web.replace("https://", "")}</a> (dále jen
        „web“) používá cookies a související technologie (local storage, pixely, skripty). Pro zjednodušení
        je v tomto dokumentu označujeme společně jako „cookies“.
      </p>
      <p>
        Správcem je {legalController.name}. Kontakt:{" "}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>. Obecné
        informace o zpracování osobních údajů jsou v{" "}
        <Link href={legalPaths.privacy}>Zásadách ochrany osobních údajů</Link>.
      </p>

      <h2>2. Co jsou cookies</h2>
      <p>
        Cookie je malý soubor ukládaný do Vašeho prohlížeče. Umožňuje rozpoznat zařízení, zapamatovat si
        nastavení nebo měřit návštěvnost. Některé cookies jsou nezbytné pro fungování webu, jiné vyžadují
        Váš souhlas.
      </p>

      <h2>3. Kategorie cookies</h2>

      <h3>3.1 Nezbytné (technické)</h3>
      <p>
        Zajišťují základní funkce webu a uložení Vašeho rozhodnutí v cookie liště. Tyto cookies
        nevyžadují souhlas.
      </p>

      <h3>3.2 Statistické</h3>
      <p>
        Pomáhají nám pochopit, jak je web používán (navštívené stránky, interakce). Používáme zejména
        Google Analytics 4. Spouštíme je až po Vašem souhlasu.
      </p>

      <h3>3.3 Marketingové</h3>
      <p>
        Slouží k měření reklamních kampaní a remarketingu (např. Google Ads, Meta, LinkedIn). Spouštíme je
        až po Vašem souhlasu.
      </p>

      <h2>4. Seznam používaných cookies a technologií</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Název / služba</th>
              <th>Kategorie</th>
              <th>Účel</th>
              <th>Doba platnosti</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>naturchem_cookie_consent</code> (local storage)
              </td>
              <td>Nezbytné</td>
              <td>Uložení Vašeho souhlasu s cookies</td>
              <td>Do odvolání / vymazání</td>
            </tr>
            <tr>
              <td>Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>)</td>
              <td>Statistické</td>
              <td>Měření návštěvnosti a chování na webu</td>
              <td>Typicky až 24 měsíců (dle nastavení Google)</td>
            </tr>
            <tr>
              <td>Google Ads (<code>_gcl_*</code>, conversion linker)</td>
              <td>Marketingové</td>
              <td>Měření reklam a remarketing</td>
              <td>Dle nastavení Google</td>
            </tr>
            <tr>
              <td>Meta Pixel (<code>_fbp</code>)</td>
              <td>Marketingové</td>
              <td>Měření reklam Meta a remarketing</td>
              <td>Typicky až 90 dnů</td>
            </tr>
            <tr>
              <td>LinkedIn Insight Tag (<code>li_*</code>, <code>AnalyticsSyncHistory</code>)</td>
              <td>Marketingové</td>
              <td>Měření reklam LinkedIn a remarketing</td>
              <td>Dle nastavení LinkedIn</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Marketingové cookies se na web načtou pouze tehdy, pokud jsou reklamní nástroje aktivně nasazeny a
        udělíte k nim souhlas. Aktuální stav vždy odpovídá nastavení v cookie liště.
      </p>

      <h2>5. Google Fonts</h2>
      <p>
        Web načítá písma technologií Next.js (<code>next/font</code>) — fonty jsou součástí webu a při
        běžné návštěvě se neodesílají požadavky na externí CDN Google Fonts.
      </p>

      <h2>6. Souhlas a správa nastavení</h2>
      <p>
        Při první návštěvě zobrazíme cookie lištu. Můžete zvolit „Přijmout vše“, „Odmítnout volitelné“ nebo
        upravit jednotlivé kategorie. Volitelné cookies se načtou až po uložení Vašeho výběru.
      </p>
      <p>
        Souhlas můžete kdykoli změnit tlačítkem <strong>Spravovat cookies</strong> v patičce webu, nebo
        cookies smazat v nastavení prohlížeče.
      </p>
      <p>
        U služeb Google (Analytics, Ads) používáme <strong>Google Consent Mode v2</strong> — do souhlasu
        se tagy načtou s omezeným režimem bez ukládání cookies; po Vaší volbě se stav aktualizuje podle
        zvolených kategorií.
      </p>

      <h2>7. Jak cookies zakázat v prohlížeči</h2>
      <p>
        Většina prohlížečů umožňuje cookies blokovat nebo mazat. Postup najdete v nápovědě Vašeho
        prohlížeče. Pokud zakážete všechny cookies, některé funkce webu nemusí fungovat správně.
      </p>

      <h2>8. Vaše práva</h2>
      <p>
        V souvislosti se zpracováním osobních údajů prostřednictvím cookies máte práva popsaná v{" "}
        <Link href={legalPaths.privacy}>Zásadách ochrany osobních údajů</Link>, včetně práva podat stížnost
        u Úřadu pro ochranu osobních údajů (
        <a href="https://www.uoou.cz" rel="noopener noreferrer">
          www.uoou.cz
        </a>
        ).
      </p>

      <h2>9. Kontakt</h2>
      <p>
        {legalController.name}
        <br />
        {legalController.seat.street}, {legalController.seat.postalCode} {legalController.seat.city}
        <br />
        E-mail: <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>
        <br />
        Web: <a href={legalController.web}>{legalController.web.replace("https://", "")}</a>
      </p>
    </LegalPageLayout>
  );
}
