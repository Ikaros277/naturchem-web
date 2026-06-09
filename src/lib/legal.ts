import { company, siteUrl } from "@/lib/site";

/** Údaje správce pro GDPR dokumenty a cookie lištu. */
export const legalController = {
  name: company.name,
  ico: company.ico,
  dic: company.dic,
  seat: {
    street: company.address.street,
    city: company.address.city,
    postalCode: company.address.postalCode
  },
  operationalNote:
    "Provozní kontakt a každodenní činnost firmy probíhají zejména z provozovny v Českých Budějovicích.",
  registry: "C 22910/KSHK vedená u Krajského soudu v Hradci Králové",
  director: company.person,
  privacyEmail: company.email,
  web: siteUrl
} as const;

export const legalPaths = {
  privacy: "/ochrana-osobnich-udaju",
  cookies: "/zasady-cookies"
} as const;

/** Datum poslední aktualizace právních textů (zobrazí se na stránkách). */
export const legalEffectiveDate = "9. 6. 2026";

export const inquiryRetentionMonths = 12;
