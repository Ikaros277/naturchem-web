export const cookiesPageMetadata = {
  title: {
    absolute: "Zásady cookies (EU) | NATURCHEM"
  },
  description:
    "Informace o cookies a podobných technologiích na webu NATURCHEM — statistika, marketing a správa souhlasu."
} as const;

export const cookiesPageContent = {
  title: "Zásady cookies",
  lead: "Tyto zásady popisují používání cookies a podobných technologií na webu NATURCHEM pro návštěvníky z EU/EHP.",
  breadcrumbLabel: "Zásady cookies",
  lastUpdatedLabel: "Naposledy aktualizováno:",
  sections: {
    intro: {
      heading: "1. Úvod",
      webParagraph:
        "Web {web} (dále jen „web“) používá cookies a související technologie (local storage, pixely, skripty). Pro zjednodušení je v tomto dokumentu označujeme společně jako „cookies“.",
      controllerParagraph:
        "Správcem je {name}. Kontakt: {email}. Obecné informace o zpracování osobních údajů jsou v",
      privacyLinkLabel: "Zásadách ochrany osobních údajů"
    },
    whatAreCookies: {
      heading: "2. Co jsou cookies",
      paragraph:
        "Cookie je malý soubor ukládaný do Vašeho prohlížeče. Umožňuje rozpoznat zařízení, zapamatovat si nastavení nebo měřit návštěvnost. Některé cookies jsou nezbytné pro fungování webu, jiné vyžadují Váš souhlas."
    },
    categories: {
      heading: "3. Kategorie cookies",
      essential: {
        subheading: "3.1 Nezbytné (technické)",
        paragraph:
          "Zajišťují základní funkce webu a uložení Vašeho rozhodnutí v cookie liště. Tyto cookies nevyžadují souhlas."
      },
      statistical: {
        subheading: "3.2 Statistické",
        paragraph:
          "Pomáhají nám pochopit, jak je web používán (navštívené stránky, interakce). Používáme zejména Google Analytics 4. Spouštíme je až po Vašem souhlasu."
      },
      marketing: {
        subheading: "3.3 Marketingové",
        paragraph:
          "Slouží k měření reklamních kampaní a remarketingu (např. Google Ads, Meta, LinkedIn). Spouštíme je až po Vašem souhlasu."
      }
    },
    cookieList: {
      heading: "4. Seznam používaných cookies a technologií",
      tableHeaders: {
        name: "Název / služba",
        category: "Kategorie",
        purpose: "Účel",
        expiry: "Doba platnosti"
      },
      rows: [
        {
          name: "naturchem_cookie_consent (local storage)",
          category: "Nezbytné",
          purpose: "Uložení Vašeho souhlasu s cookies",
          expiry: "Do odvolání / vymazání"
        },
        {
          name: "Google Analytics 4 (_ga, _ga_*)",
          category: "Statistické",
          purpose: "Měření návštěvnosti a chování na webu",
          expiry: "Typicky až 24 měsíců (dle nastavení Google)"
        },
        {
          name: "Google Ads (_gcl_*, conversion linker)",
          category: "Marketingové",
          purpose: "Měření reklam a remarketing",
          expiry: "Dle nastavení Google"
        },
        {
          name: "Meta Pixel (_fbp)",
          category: "Marketingové",
          purpose: "Měření reklam Meta a remarketing",
          expiry: "Typicky až 90 dnů"
        },
        {
          name: "LinkedIn Insight Tag (li_*, AnalyticsSyncHistory)",
          category: "Marketingové",
          purpose: "Měření reklam LinkedIn a remarketing",
          expiry: "Dle nastavení LinkedIn"
        }
      ],
      note:
        "Marketingové cookies se na web načtou pouze tehdy, pokud jsou reklamní nástroje aktivně nasazeny a udělíte k nim souhlas. Aktuální stav vždy odpovídá nastavení v cookie liště."
    },
    googleFonts: {
      heading: "5. Google Fonts",
      paragraph:
        "Web načítá písma technologií Next.js (next/font) — fonty jsou součástí webu a při běžné návštěvě se neodesílají požadavky na externí CDN Google Fonts."
    },
    consent: {
      heading: "6. Souhlas a správa nastavení",
      bannerParagraph:
        "Při první návštěvě zobrazíme cookie lištu. Můžete zvolit „Přijmout vše“, „Odmítnout volitelné“ nebo upravit jednotlivé kategorie. Volitelné cookies se načtou až po uložení Vašeho výběru.",
      manageParagraph:
        "Souhlas můžete kdykoli změnit tlačítkem Spravovat cookies v patičce webu, nebo cookies smazat v nastavení prohlížeče.",
      manageButtonLabel: "Spravovat cookies",
      consentModeParagraph:
        "U služeb Google (Analytics, Ads) používáme Google Consent Mode v2 — do souhlasu se tagy načtou s omezeným režimem bez ukládání cookies; po Vaší volbě se stav aktualizuje podle zvolených kategorií."
    },
    disableCookies: {
      heading: "7. Jak cookies zakázat v prohlížeči",
      paragraph:
        "Většina prohlížečů umožňuje cookies blokovat nebo mazat. Postup najdete v nápovědě Vašeho prohlížeče. Pokud zakážete všechny cookies, některé funkce webu nemusí fungovat správně."
    },
    rights: {
      heading: "8. Vaše práva",
      paragraph:
        "V souvislosti se zpracováním osobních údajů prostřednictvím cookies máte práva popsaná v Zásadách ochrany osobních údajů, včetně práva podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz).",
      privacyLinkLabel: "Zásadách ochrany osobních údajů"
    },
    contact: {
      heading: "9. Kontakt",
      emailLabel: "E-mail:",
      webLabel: "Web:"
    }
  }
} as const;
