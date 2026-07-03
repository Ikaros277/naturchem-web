export const privacyPageMetadata = {
  title: {
    absolute: "Zásady ochrany osobních údajů | NATURCHEM"
  },
  description:
    "Informace o zpracování osobních údajů na webu NATURCHEM, v kontaktním formuláři a v souvislosti s online marketingem."
} as const;

export const privacyPageContent = {
  title: "Zásady ochrany osobních údajů",
  lead: "Informace pro návštěvníky webu a osoby, které nás kontaktují online. Dokument je v souladu s nařízením GDPR a zákonem č. 110/2019 Sb.",
  breadcrumbLabel: "Ochrana osobních údajů",
  effectiveDateLabel: "Platné a účinné od:",
  sections: {
    controller: {
      heading: "1. Kdo zpracovává Vaše údaje",
      controllerIntro:
        "Správcem osobních údajů je společnost {name}, se sídlem {street}, {postalCode} {city}, IČO {ico}, DIČ {dic}, zapsaná v obchodním rejstříku vedeném {registry} (dále jen „správce“ nebo „NATURCHEM“).",
      statutoryBodyLabel: "Statutární orgán:",
      privacyContactLabel: "Kontakt pro otázky k ochraně osobních údajů:"
    },
    definitions: {
      heading: "2. Co je osobní údaj a co znamená zpracování",
      personalDataParagraph:
        "Osobním údajem je jakákoli informace o identifikované nebo identifikovatelné fyzické osobě. Zpracováním se rozumí jakákoli operace s osobními údaji — shromáždění, uložení, použití, zpřístupnění, výmaz apod.",
      scopeParagraph:
        "Tyto zásady se vztahují na zpracování prováděné prostřednictvím webových stránek {web} a souvisejících online služeb. Interní agenda mimo web (např. smluvní vztahy se zákazníky mimo tento kanál) se řídí samostatnými interními pravidly."
    },
    dataCollected: {
      heading: "3. Jaké údaje zpracováváme a odkud je získáváme",
      contactForm: {
        subheading: "3.1 Kontaktní formulář a online poptávky",
        intro: "Pokud nám napíšete přes formulář na webu, zpracováváme zejména:",
        items: [
          "jméno a příjmení nebo obchodní firmu,",
          "e-mailovou adresu a/nebo telefonní číslo,",
          "obsah zprávy, typ dotazu a volitelně lokalitu provozu nebo záměru,",
          "přílohy, které do formuláře nahrajete (např. PDF, DOC, obrázky)."
        ],
        sourceNote: "Údaje získáváme přímo od Vás odesláním formuláře."
      },
      emailPhone: {
        subheading: "3.2 E-mail a telefon",
        paragraph:
          "Pokud nás kontaktujete přímo na {email} nebo telefonicky, zpracováváme údaje, které nám sami sdělíte (jméno, kontakt, obsah komunikace)."
      },
      cookies: {
        subheading: "3.3 Návštěva webu, cookies a analytika",
        intro:
          "Při návštěvě webu mohou být zpracovávány technické údaje o zařízení a chování na webu, zejména:",
        items: [
          "IP adresa (u analytiky může být zkrácena),",
          "identifikátory cookies a online identifikátory,",
          "informace o prohlížeči, operačním systému a navštívených stránkách,",
          "údaje o interakci s webem (např. kliknutí na kontakt, stažení souboru)."
        ],
        cookiesLinkPrefix: "Podrobný seznam cookies a způsob jejich správy je uveden v",
        cookiesLinkLabel: "Zásadách cookies"
      },
      marketing: {
        subheading: "3.4 Online marketing",
        paragraph:
          "Pokud udělíte souhlas s marketingovými cookies, můžeme zpracovávat údaje o návštěvě webu za účelem měření a optimalizace reklamních kampaní (např. Google Ads, Meta, LinkedIn) včetně cílení reklam. Tyto technologie nespouštíme bez Vašeho souhlasu."
      },
      satisfactionSurvey: {
        subheading: "3.5 Dotazník spokojenosti",
        intro: "Pokud vyplníte dotazník spokojenosti na webu, zpracováváme zejména:",
        items: [
          "hodnocení spokojenosti a doporučení (NPS),",
          "volitelně e-mail pro zpětnou vazbu,",
          "volitelně název firmy nebo provozu a typ služby,",
          "volitelné textové připomínky."
        ],
        sourceNote:
          "Údaje získáváme přímo od Vás odesláním formuláře. Vyplnění dotazníku je dobrovolné."
      }
    },
    purposes: {
      heading: "4. Účely zpracování a právní základy",
      tableHeaders: {
        purpose: "Účel",
        legalBasis: "Právní základ (GDPR)",
        note: "Poznámka"
      },
      rows: [
        {
          purpose: "Vyřízení poptávky z webu, e-mailu nebo telefonu",
          legalBasis: "čl. 6 odst. 1 písm. b) — kroky před uzavřením smlouvy / plnění smlouvy",
          note: "Kontakt je nezbytný k tomu, abychom Vám mohli odpovědět."
        },
        {
          purpose: "Vyhodnocení dotazníku spokojenosti zákazníků",
          legalBasis: "čl. 6 odst. 1 písm. f) — oprávněný zájem správce",
          note: "Zpětná vazba slouží ke zlepšování služeb; údaje nejsou povinné."
        },
        {
          purpose: "Technický provoz webu a bezpečnost",
          legalBasis: "čl. 6 odst. 1 písm. f) — oprávněný zájem správce",
          note: "Serverové logy, ochrana proti zneužití formuláře."
        },
        {
          purpose: "Statistika návštěvnosti (Google Analytics)",
          legalBasis: "čl. 6 odst. 1 písm. a) — souhlas",
          note: "Spouští se až po souhlasu v cookie liště."
        },
        {
          purpose: "Online reklama a cílení reklam",
          legalBasis: "čl. 6 odst. 1 písm. a) — souhlas",
          note: "Google Ads, Meta, LinkedIn — pouze po souhlasu."
        },
        {
          purpose: "Přímý marketing (e-mail s nabídkou služeb)",
          legalBasis: "čl. 6 odst. 1 písm. a) — souhlas",
          note:
            "Aktuálně nezasíláme newsletter; pokud bychom marketing spustili, vyžádáme si samostatný souhlas."
        }
      ],
      voluntaryNote:
        "Poskytnutí údajů v kontaktním formuláři je dobrovolné, avšak bez jména a kontaktu (e-mail nebo telefon) není možné dotaz vyřídit."
    },
    retention: {
      heading: "5. Jak dlouho údaje uchováváme",
      items: [
        {
          label: "Poptávky a komunikace bez uzavřené smlouvy:",
          text: "{months} měsíců od posledního kontaktu, pokud nevznikne smluvní vztah nebo delší archivační povinnost."
        },
        {
          label: "Dotazník spokojenosti:",
          text: "12 měsíců od vyplnění, pokud nevznikne delší archivační povinnost ze smluvního vztahu."
        },
        {
          label: "Údaje z cookies:",
          textPrefix: "dle expirace jednotlivých cookies — viz",
          cookiesLinkLabel: "Zásady cookies"
        },
        {
          label: "Serverové logy hostingu:",
          text: "po dobu nezbytnou pro provoz a bezpečnost webu, obvykle v řádu dnů až měsíců dle nastavení poskytovatele."
        }
      ]
    },
    recipients: {
      heading: "6. Komu údaje předáváme (příjemci a zpracovatelé)",
      intro: "Osobní údaje mohou být zpřístupněny těmto kategoriím příjemců:",
      items: [
        { name: "Vercel Inc.", description: "hosting webu a technický provoz (USA)" },
        { name: "Resend Inc.", description: "odesílání e-mailů z kontaktního formuláře (USA)" },
        {
          name: "Google Ireland Limited / Google LLC",
          description: "Google Analytics, Google Ads, Google Search Console (EU/USA)"
        },
        {
          name: "Meta Platforms Ireland Limited",
          description: "reklamní nástroje a cílení reklam Meta (EU/USA)"
        },
        {
          name: "LinkedIn Ireland Unlimited Company",
          description: "reklamní nástroje a cílení reklam LinkedIn (EU/USA)"
        },
        {
          name: "GitHub Inc.",
          description: "redakční systém webu (Decap CMS, přístup pouze pro pověřené editory)"
        },
        {
          name: "Tawk.to (tawk.to)",
          description: "živý chat na webu po souhlasu s marketingovými cookies (USA)"
        },
        {
          name: "poskytovatelé IT podpory a dalších technických služeb",
          description: "nezbytných pro provoz webu"
        }
      ],
      processorsNote:
        "Se zpracovateli máme uzavřeny smlouvy o zpracování osobních údajů nebo využíváme jejich standardní obchodní podmínky v rozsahu požadovaném GDPR. U příjemců se sídlem mimo Evropský hospodářský prostor (zejména USA) se přenos opírá o vhodné záruky, zejména standardní smluvní doložky Evropské komise.",
      noSaleNote: "Správce neprodává osobní údaje třetím stranám."
    },
    security: {
      heading: "7. Zabezpečení osobních údajů",
      paragraphs: [
        "Přijali jsme přiměřená technická a organizační opatření k ochraně osobních údajů, zejména šifrované připojení HTTPS, řízení přístupu k e-mailovým schránkám a redakčnímu systému a minimalizaci rozsahu zpracovávaných údajů.",
        "K osobním údajům mají přístup pouze pověřené osoby, které je potřebují k vyřízení dotazu nebo provozu webu."
      ]
    },
    profiling: {
      heading: "8. Automatizované rozhodování a profilování",
      paragraph:
        "V souvislosti s tímto webem neprovádíme automatizované rozhodování ve smyslu čl. 22 GDPR. Remarketingové nástroje mohou vytvářet audience na základě chování na webu; rozhodnutí s právními nebo obdobně významnými účinky na Vás tím nečiníme."
    },
    rights: {
      heading: "9. Vaše práva",
      intro: "Za podmínek stanovených GDPR máte tato práva:",
      items: [
        "právo na přístup k osobním údajům (čl. 15),",
        "právo na opravu (čl. 16),",
        "právo na výmaz (čl. 17),",
        "právo na omezení zpracování (čl. 18),",
        "právo na přenositelnost údajů (čl. 20),",
        "právo vznést námitku proti zpracování (čl. 21),",
        "právo odvolat souhlas kdykoli, aniž je tím dotčena zákonnost zpracování před odvoláním,",
        "právo podat stížnost u dozorového úřadu — Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz."
      ],
      exerciseNote:
        "Pro uplatnění práv nás kontaktujte na {email} nebo poštou na adresu sídla společnosti. Žádost vyřídíme bez zbytečného odkladu, nejpozději do 1 měsíce."
    },
    cookiesSection: {
      heading: "10. Cookies a správa souhlasu",
      paragraph:
        "Web používá cookies a podobné technologie. Nezbytné cookies ukládáme bez souhlasu; statistické a marketingové cookies pouze na základě Vašeho výběru v cookie liště. Podrobnosti včetně seznamu cookies najdete v Zásadách cookies. Nastavení můžete kdykoli změnit tlačítkem „Spravovat cookies“ v patičce webu.",
      cookiesLinkLabel: "Zásadách cookies",
      manageCookiesLabel: "Spravovat cookies"
    },
    changes: {
      heading: "11. Změny těchto zásad",
      paragraph:
        "Tyto zásady můžeme aktualizovat, pokud se změní rozsah zpracování nebo používané služby. Aktuální verze je vždy zveřejněna na této stránce s uvedením data účinnosti."
    }
  }
} as const;
