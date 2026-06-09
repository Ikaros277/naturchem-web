import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { inquiryRetentionMonths, legalController, legalEffectiveDate, legalPaths } from "@/lib/legal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Zásady ochrany osobních údajů | NATURCHEM"
  },
  description:
    "Informace o zpracování osobních údajů na webu NATURCHEM, v kontaktním formuláři a v souvislosti s online marketingem.",
  alternates: { canonical: `${siteUrl}${legalPaths.privacy}/` },
  robots: { index: true, follow: true }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Zásady ochrany osobních údajů"
      lead="Informace pro návštěvníky webu a osoby, které nás kontaktují online. Dokument je v souladu s nařízením GDPR a zákonem č. 110/2019 Sb."
      breadcrumbLabel="Ochrana osobních údajů"
    >
      <p className="legal-meta">
        Platné a účinné od: {legalEffectiveDate}
      </p>

      <h2>1. Kdo zpracovává Vaše údaje</h2>
      <p>
        Správcem osobních údajů je společnost <strong>{legalController.name}</strong>, se sídlem{" "}
        {legalController.seat.street}, {legalController.seat.postalCode} {legalController.seat.city},
        IČO {legalController.ico}, DIČ {legalController.dic}, zapsaná v obchodním rejstříku vedeném{" "}
        {legalController.registry} (dále jen „<strong>správce</strong>“ nebo „<strong>NATURCHEM</strong>
        “).
      </p>
      <p>{legalController.operationalNote}</p>
      <p>
        Statutární orgán: {legalController.director}.
        <br />
        Kontakt pro otázky k ochraně osobních údajů:{" "}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>.
      </p>

      <h2>2. Co je osobní údaj a co znamená zpracování</h2>
      <p>
        Osobním údajem je jakákoli informace o identifikované nebo identifikovatelné fyzické osobě.
        Zpracováním se rozumí jakákoli operace s osobními údaji — shromáždění, uložení, použití,
        zpřístupnění, výmaz apod.
      </p>
      <p>
        Tyto zásady se vztahují na zpracování prováděné prostřednictvím webových stránek{" "}
        <a href={legalController.web}>{legalController.web.replace("https://", "")}</a> a souvisejících
        online služeb. Interní agenda mimo web (např. smluvní vztahy se zákazníky mimo tento kanál) se
        řídí samostatnými interními pravidly.
      </p>

      <h2>3. Jaké údaje zpracováváme a odkud je získáváme</h2>

      <h3>3.1 Kontaktní formulář a online poptávky</h3>
      <p>Pokud nám napíšete přes formulář na webu, zpracováváme zejména:</p>
      <ul>
        <li>jméno a příjmení nebo obchodní firmu,</li>
        <li>e-mailovou adresu a/nebo telefonní číslo,</li>
        <li>obsah zprávy, typ dotazu a volitelně lokalitu provozu nebo záměru,</li>
        <li>přílohy, které do formuláře nahrajete (např. PDF, DOC, obrázky).</li>
      </ul>
      <p>Údaje získáváme přímo od Vás odesláním formuláře.</p>

      <h3>3.2 E-mail a telefon</h3>
      <p>
        Pokud nás kontaktujete přímo na{" "}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a> nebo
        telefonicky, zpracováváme údaje, které nám sami sdělíte (jméno, kontakt, obsah komunikace).
      </p>

      <h3>3.3 Návštěva webu, cookies a analytika</h3>
      <p>
        Při návštěvě webu mohou být zpracovávány technické údaje o zařízení a chování na webu, zejména:
      </p>
      <ul>
        <li>IP adresa (u analytiky může být zkrácena),</li>
        <li>identifikátory cookies a online identifikátory,</li>
        <li>informace o prohlížeči, operačním systému a navštívených stránkách,</li>
        <li>údaje o interakci s webem (např. kliknutí na kontakt, stažení souboru).</li>
      </ul>
      <p>
        Podrobný seznam cookies a způsob jejich správy je uveden v{" "}
        <Link href={legalPaths.cookies}>Zásadách cookies</Link>.
      </p>

      <h3>3.4 Online marketing</h3>
      <p>
        Pokud udělíte souhlas s marketingovými cookies, můžeme zpracovávat údaje o návštěvě webu za
        účelem měření a optimalizace reklamních kampaní (např. Google Ads, Meta, LinkedIn) včetně
        remarketingu. Tyto technologie nespouštíme bez Vašeho souhlasu.
      </p>

      <h2>4. Účely zpracování a právní základy</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Účel</th>
              <th>Právní základ (GDPR)</th>
              <th>Poznámka</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vyřízení poptávky z webu, e-mailu nebo telefonu</td>
              <td>čl. 6 odst. 1 písm. b) — kroky před uzavřením smlouvy / plnění smlouvy</td>
              <td>Kontakt je nezbytný k tomu, abychom Vám mohli odpovědět.</td>
            </tr>
            <tr>
              <td>Technický provoz webu a bezpečnost</td>
              <td>čl. 6 odst. 1 písm. f) — oprávněný zájem správce</td>
              <td>Serverové logy, ochrana proti zneužití formuláře.</td>
            </tr>
            <tr>
              <td>Statistika návštěvnosti (Google Analytics)</td>
              <td>čl. 6 odst. 1 písm. a) — souhlas</td>
              <td>Spouští se až po souhlasu v cookie liště.</td>
            </tr>
            <tr>
              <td>Online reklama a remarketing</td>
              <td>čl. 6 odst. 1 písm. a) — souhlas</td>
              <td>Google Ads, Meta, LinkedIn — pouze po souhlasu.</td>
            </tr>
            <tr>
              <td>Přímý marketing (e-mail s nabídkou služeb)</td>
              <td>čl. 6 odst. 1 písm. a) — souhlas</td>
              <td>
                Aktuálně nezasíláme newsletter; pokud bychom marketing spustili, vyžádáme si samostatný
                souhlas.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Poskytnutí údajů v kontaktním formuláři je dobrovolné, avšak bez jména a kontaktu (e-mail nebo
        telefon) není možné dotaz vyřídit.
      </p>

      <h2>5. Jak dlouho údaje uchováváme</h2>
      <ul>
        <li>
          <strong>Poptávky a komunikace bez uzavřené smlouvy:</strong> {inquiryRetentionMonths} měsíců od
          posledního kontaktu, pokud nevznikne smluvní vztah nebo delší archivační povinnost.
        </li>
        <li>
          <strong>Údaje z cookies:</strong> dle expirace jednotlivých cookies — viz{" "}
          <Link href={legalPaths.cookies}>Zásady cookies</Link>.
        </li>
        <li>
          <strong>Serverové logy hostingu:</strong> po dobu nezbytnou pro provoz a bezpečnost webu, obvykle
          v řádu dnů až měsíců dle nastavení poskytovatele.
        </li>
      </ul>

      <h2>6. Komu údaje předáváme (příjemci a zpracovatelé)</h2>
      <p>Osobní údaje mohou být zpřístupněny těmto kategoriím příjemců:</p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — hosting webu a technický provoz (USA),
        </li>
        <li>
          <strong>Resend Inc.</strong> — odesílání e-mailů z kontaktního formuláře (USA),
        </li>
        <li>
          <strong>Google Ireland Limited / Google LLC</strong> — Google Analytics, Google Ads, Google Search
          Console (EU/USA),
        </li>
        <li>
          <strong>Meta Platforms Ireland Limited</strong> — reklamní a remarketingové nástroje Meta (EU/USA),
        </li>
        <li>
          <strong>LinkedIn Ireland Unlimited Company</strong> — reklamní a remarketingové nástroje LinkedIn
          (EU/USA),
        </li>
        <li>
          <strong>GitHub Inc.</strong> — redakční systém webu (Decap CMS, přístup pouze pro pověřené
          editory),
        </li>
        <li>poskytovatelé IT podpory a dalších technických služeb nezbytných pro provoz webu.</li>
      </ul>
      <p>
        Se zpracovateli máme uzavřeny smlouvy o zpracování osobních údajů nebo využíváme jejich
        standardní obchodní podmínky v rozsahu požadovaném GDPR. U příjemců se sídlem mimo Evropský
        hospodářský prostor (zejména USA) se přenos opírá o vhodné záruky, zejména standardní smluvní
        doložky Evropské komise.
      </p>
      <p>Správce neprodává osobní údaje třetím stranám.</p>

      <h2>7. Zabezpečení osobních údajů</h2>
      <p>
        Přijali jsme přiměřená technická a organizační opatření k ochraně osobních údajů, zejména
        šifrované připojení HTTPS, řízení přístupu k e-mailovým schránkám a redakčnímu systému a
        minimalizaci rozsahu zpracovávaných údajů.
      </p>
      <p>
        K osobním údajům mají přístup pouze pověřené osoby, které je potřebují k vyřízení dotazu nebo
        provozu webu.
      </p>

      <h2>8. Automatizované rozhodování a profilování</h2>
      <p>
        V souvislosti s tímto webem neprovádíme automatizované rozhodování ve smyslu čl. 22 GDPR.
        Remarketingové nástroje mohou vytvářet audience na základě chování na webu; rozhodnutí s právními
        nebo obdobně významnými účinky na Vás tím nečiníme.
      </p>

      <h2>9. Vaše práva</h2>
      <p>Za podmínek stanovených GDPR máte tato práva:</p>
      <ul>
        <li>právo na přístup k osobním údajům (čl. 15),</li>
        <li>právo na opravu (čl. 16),</li>
        <li>právo na výmaz (čl. 17),</li>
        <li>právo na omezení zpracování (čl. 18),</li>
        <li>právo na přenositelnost údajů (čl. 20),</li>
        <li>právo vznést námitku proti zpracování (čl. 21),</li>
        <li>
          právo odvolat souhlas kdykoli, aniž je tím dotčena zákonnost zpracování před odvoláním,
        </li>
        <li>
          právo podat stížnost u dozorového úřadu — Úřadu pro ochranu osobních údajů, Pplk. Sochora 27,
          170 00 Praha 7,{" "}
          <a href="https://www.uoou.cz" rel="noopener noreferrer">
            www.uoou.cz
          </a>
          .
        </li>
      </ul>
      <p>
        Pro uplatnění práv nás kontaktujte na{" "}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a> nebo poštou
        na adresu sídla společnosti. Žádost vyřídíme bez zbytečného odkladu, nejpozději do 1 měsíce.
      </p>

      <h2>10. Cookies a správa souhlasu</h2>
      <p>
        Web používá cookies a podobné technologie. Nezbytné cookies ukládáme bez souhlasu; statistické a
        marketingové cookies pouze na základě Vašeho výběru v cookie liště. Podrobnosti včetně seznamu
        cookies najdete v{" "}
        <Link href={legalPaths.cookies}>Zásadách cookies</Link>. Nastavení můžete kdykoli změnit tlačítkem
        „Spravovat cookies“ v patičce webu.
      </p>

      <h2>11. Změny těchto zásad</h2>
      <p>
        Tyto zásady můžeme aktualizovat, pokud se změní rozsah zpracování nebo používané služby. Aktuální
        verze je vždy zveřejněna na této stránce s uvedením data účinnosti.
      </p>
    </LegalPageLayout>
  );
}
