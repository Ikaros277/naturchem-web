export const privacyPageMetadata = {
  title: {
    absolute: "Privacy Policy | NATURCHEM"
  },
  description:
    "Information on the processing of personal data on the NATURCHEM website, in the contact form and in connection with online marketing."
} as const;

export const privacyPageContent = {
  title: "Privacy Policy",
  lead: "Information for website visitors and persons who contact us online. This document complies with the GDPR and Act No. 110/2019 Coll. on the processing of personal data.",
  breadcrumbLabel: "Privacy Policy",
  effectiveDateLabel: "Valid and effective from:",
  sections: {
    controller: {
      heading: "1. Who processes your data",
      controllerIntro:
        "The controller of personal data is {name}, with registered office at {street}, {postalCode} {city}, Company ID {ico}, VAT ID {dic}, registered in the Commercial Register maintained by {registry} (hereinafter the \"controller\" or \"NATURCHEM\").",
      statutoryBodyLabel: "Statutory body:",
      privacyContactLabel: "Contact for privacy-related enquiries:"
    },
    definitions: {
      heading: "2. What is personal data and what does processing mean",
      personalDataParagraph:
        "Personal data means any information relating to an identified or identifiable natural person. Processing means any operation performed on personal data — collection, storage, use, disclosure, erasure, etc.",
      scopeParagraph:
        "This policy applies to processing carried out through the website {web} and related online services. Internal matters outside the website (e.g. contractual relationships with customers outside this channel) are governed by separate internal rules."
    },
    dataCollected: {
      heading: "3. What data we process and where we obtain it",
      contactForm: {
        subheading: "3.1 Contact form and online inquiries",
        intro: "If you write to us via the website form, we process in particular:",
        items: [
          "first and last name or company name,",
          "email address and/or telephone number,",
          "message content, inquiry type and optionally the location of the facility or project,",
          "attachments you upload to the form (e.g. PDF, DOC, images)."
        ],
        sourceNote: "We obtain the data directly from you when you submit the form."
      },
      emailPhone: {
        subheading: "3.2 Email and telephone",
        paragraph:
          "If you contact us directly at {email} or by telephone, we process the data you provide to us (name, contact details, content of communication)."
      },
      cookies: {
        subheading: "3.3 Website visits, cookies and analytics",
        intro:
          "When you visit the website, technical data about your device and behaviour on the site may be processed, in particular:",
        items: [
          "IP address (may be truncated for analytics),",
          "cookie identifiers and online identifiers,",
          "information about the browser, operating system and pages visited,",
          "data on interaction with the website (e.g. clicking contact, downloading a file)."
        ],
        cookiesLinkPrefix: "A detailed list of cookies and how to manage them is provided in the",
        cookiesLinkLabel: "Cookie Policy"
      },
      marketing: {
        subheading: "3.4 Online marketing",
        paragraph:
          "If you give consent to marketing cookies, we may process data about your website visit for the purpose of measuring and optimising advertising campaigns (e.g. Google Ads, Meta, LinkedIn), including remarketing. We do not activate these technologies without your consent."
      }
    },
    purposes: {
      heading: "4. Purposes of processing and legal bases",
      tableHeaders: {
        purpose: "Purpose",
        legalBasis: "Legal basis (GDPR)",
        note: "Note"
      },
      rows: [
        {
          purpose: "Handling inquiries from the website, email or telephone",
          legalBasis: "Art. 6(1)(b) — steps prior to entering into a contract / performance of a contract",
          note: "Contact details are necessary for us to be able to respond to you."
        },
        {
          purpose: "Technical operation of the website and security",
          legalBasis: "Art. 6(1)(f) — legitimate interest of the controller",
          note: "Server logs, protection against misuse of the form."
        },
        {
          purpose: "Traffic statistics (Google Analytics)",
          legalBasis: "Art. 6(1)(a) — consent",
          note: "Activated only after consent in the cookie banner."
        },
        {
          purpose: "Online advertising and remarketing",
          legalBasis: "Art. 6(1)(a) — consent",
          note: "Google Ads, Meta, LinkedIn — only after consent."
        },
        {
          purpose: "Direct marketing (email with service offers)",
          legalBasis: "Art. 6(1)(a) — consent",
          note:
            "We do not currently send newsletters; if we were to launch marketing, we would request separate consent."
        }
      ],
      voluntaryNote:
        "Providing data in the contact form is voluntary; however, without a name and contact details (email or telephone) we cannot handle your inquiry."
    },
    retention: {
      heading: "5. How long we retain data",
      items: [
        {
          label: "Inquiries and communication without a concluded contract:",
          text: "{months} months from the last contact, unless a contractual relationship arises or a longer archiving obligation applies."
        },
        {
          label: "Cookie data:",
          textPrefix: "according to the expiry of individual cookies — see",
          cookiesLinkLabel: "Cookie Policy"
        },
        {
          label: "Hosting server logs:",
          text: "for the period necessary for operation and security of the website, usually ranging from days to months depending on the provider's settings."
        }
      ]
    },
    recipients: {
      heading: "6. Who we disclose data to (recipients and processors)",
      intro: "Personal data may be disclosed to the following categories of recipients:",
      items: [
        { name: "Vercel Inc.", description: "website hosting and technical operation (USA)" },
        { name: "Resend Inc.", description: "sending emails from the contact form (USA)" },
        {
          name: "Google Ireland Limited / Google LLC",
          description: "Google Analytics, Google Ads, Google Search Console (EU/USA)"
        },
        {
          name: "Meta Platforms Ireland Limited",
          description: "Meta advertising and remarketing tools (EU/USA)"
        },
        {
          name: "LinkedIn Ireland Unlimited Company",
          description: "LinkedIn advertising and remarketing tools (EU/USA)"
        },
        {
          name: "GitHub Inc.",
          description: "website content management system (Decap CMS, access for authorised editors only)"
        },
        {
          name: "IT support providers and other technical service providers",
          description: "necessary for website operation"
        }
      ],
      processorsNote:
        "We have concluded data processing agreements with processors or use their standard terms and conditions to the extent required by the GDPR. For recipients based outside the European Economic Area (in particular the USA), transfers rely on appropriate safeguards, in particular the European Commission's standard contractual clauses.",
      noSaleNote: "The controller does not sell personal data to third parties."
    },
    security: {
      heading: "7. Security of personal data",
      paragraphs: [
        "We have implemented appropriate technical and organisational measures to protect personal data, in particular encrypted HTTPS connection, access control to email accounts and the content management system, and minimisation of the scope of processed data.",
        "Only authorised persons who need the data to handle inquiries or operate the website have access to personal data."
      ]
    },
    profiling: {
      heading: "8. Automated decision-making and profiling",
      paragraph:
        "In connection with this website we do not carry out automated decision-making within the meaning of Art. 22 GDPR. Remarketing tools may create audiences based on behaviour on the website; we do not make decisions with legal or similarly significant effects on you in this way."
    },
    rights: {
      heading: "9. Your rights",
      intro: "Subject to the conditions set out in the GDPR, you have the following rights:",
      items: [
        "right of access to personal data (Art. 15),",
        "right to rectification (Art. 16),",
        "right to erasure (Art. 17),",
        "right to restriction of processing (Art. 18),",
        "right to data portability (Art. 20),",
        "right to object to processing (Art. 21),",
        "right to withdraw consent at any time without affecting the lawfulness of processing before withdrawal,",
        "right to lodge a complaint with the supervisory authority — the Office for Personal Data Protection, Pplk. Sochora 27, 170 00 Prague 7, www.uoou.cz."
      ],
      exerciseNote:
        "To exercise your rights, contact us at {email} or by post to the company's registered office address. We will handle your request without undue delay, no later than within 1 month."
    },
    cookiesSection: {
      heading: "10. Cookies and consent management",
      paragraph:
        "The website uses cookies and similar technologies. We store essential cookies without consent; statistical and marketing cookies only based on your selection in the cookie banner. Details including a list of cookies can be found in the Cookie Policy. You can change your settings at any time using the \"Manage cookies\" button in the website footer.",
      cookiesLinkLabel: "Cookie Policy",
      manageCookiesLabel: "Manage cookies"
    },
    changes: {
      heading: "11. Changes to this policy",
      paragraph:
        "We may update this policy if the scope of processing or the services used change. The current version is always published on this page with the effective date indicated."
    }
  }
} as const;
