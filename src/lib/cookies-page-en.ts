export const cookiesPageMetadata = {
  title: {
    absolute: "Cookie Policy (EU) | NATURCHEM"
  },
  description:
    "Information on cookies and similar technologies on the NATURCHEM website — statistics, marketing and consent management."
} as const;

export const cookiesPageContent = {
  title: "Cookie Policy",
  lead: "This policy describes the use of cookies and similar technologies on the NATURCHEM website for visitors from the EU/EEA.",
  breadcrumbLabel: "Cookie Policy",
  lastUpdatedLabel: "Last updated:",
  sections: {
    intro: {
      heading: "1. Introduction",
      webParagraph:
        "The website {web} (hereinafter the \"website\") uses cookies and related technologies (local storage, pixels, scripts). For simplicity, we refer to them collectively as \"cookies\" in this document.",
      controllerParagraph:
        "The controller is {name}. Contact: {email}. General information on the processing of personal data is provided in the",
      privacyLinkLabel: "Privacy Policy"
    },
    whatAreCookies: {
      heading: "2. What are cookies",
      paragraph:
        "A cookie is a small file stored in your browser. It allows the device to be recognised, settings to be remembered or traffic to be measured. Some cookies are essential for the website to function; others require your consent."
    },
    categories: {
      heading: "3. Cookie categories",
      essential: {
        subheading: "3.1 Essential (technical)",
        paragraph:
          "These ensure basic website functions and storage of your decision in the cookie banner. These cookies do not require consent."
      },
      statistical: {
        subheading: "3.2 Statistical",
        paragraph:
          "These help us understand how the website is used (pages visited, interactions). We use Google Analytics 4 in particular. We activate them only after your consent."
      },
      marketing: {
        subheading: "3.3 Marketing",
        paragraph:
          "These are used to measure advertising campaigns and remarketing (e.g. Google Ads, Meta, LinkedIn). We activate them only after your consent."
      }
    },
    cookieList: {
      heading: "4. List of cookies and technologies used",
      tableHeaders: {
        name: "Name / service",
        category: "Category",
        purpose: "Purpose",
        expiry: "Retention period"
      },
      rows: [
        {
          name: "naturchem_cookie_consent (local storage)",
          category: "Essential",
          purpose: "Storage of your cookie consent",
          expiry: "Until withdrawn / deleted"
        },
        {
          name: "Google Analytics 4 (_ga, _ga_*)",
          category: "Statistical",
          purpose: "Measuring traffic and behaviour on the website",
          expiry: "Typically up to 24 months (depending on Google settings)"
        },
        {
          name: "Google Ads (_gcl_*, conversion linker)",
          category: "Marketing",
          purpose: "Measuring advertising and remarketing",
          expiry: "According to Google settings"
        },
        {
          name: "Meta Pixel (_fbp)",
          category: "Marketing",
          purpose: "Measuring Meta advertising and remarketing",
          expiry: "Typically up to 90 days"
        },
        {
          name: "LinkedIn Insight Tag (li_*, AnalyticsSyncHistory)",
          category: "Marketing",
          purpose: "Measuring LinkedIn advertising and remarketing",
          expiry: "According to LinkedIn settings"
        }
      ],
      note:
        "Marketing cookies are loaded on the website only if advertising tools are actively deployed and you give consent to them. The current state always corresponds to the settings in the cookie banner."
    },
    googleFonts: {
      heading: "5. Google Fonts",
      paragraph:
        "The website loads fonts using Next.js technology (next/font) — fonts are part of the website and during a normal visit no requests are sent to the external Google Fonts CDN."
    },
    consent: {
      heading: "6. Consent and settings management",
      bannerParagraph:
        "On your first visit we display a cookie banner. You can choose \"Accept all\", \"Reject optional\" or adjust individual categories. Optional cookies are loaded only after your selection is saved.",
      manageParagraph:
        "You can change your consent at any time using the Manage cookies button in the website footer, or delete cookies in your browser settings.",
      manageButtonLabel: "Manage cookies",
      consentModeParagraph:
        "For Google services (Analytics, Ads) we use Google Consent Mode v2 — until consent is given, tags load in a limited mode without storing cookies; after your choice, the state is updated according to the selected categories."
    },
    disableCookies: {
      heading: "7. How to disable cookies in your browser",
      paragraph:
        "Most browsers allow cookies to be blocked or deleted. You will find instructions in your browser's help section. If you disable all cookies, some website functions may not work correctly."
    },
    rights: {
      heading: "8. Your rights",
      paragraph:
        "In connection with the processing of personal data through cookies, you have the rights described in the Privacy Policy, including the right to lodge a complaint with the Office for Personal Data Protection (www.uoou.cz).",
      privacyLinkLabel: "Privacy Policy"
    },
    contact: {
      heading: "9. Contact",
      emailLabel: "Email:",
      webLabel: "Website:"
    }
  }
} as const;
