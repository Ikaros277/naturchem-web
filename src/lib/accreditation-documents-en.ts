export type AccreditationDocument = {
  id: string;
  title: string;
  description: string;
  href: string;
  group: "akreditace" | "autorizace";
};

export const accreditationDocuments: AccreditationDocument[] = [
  {
    id: "osvedceni-akreditace",
    title: "Accreditation certificate no. 562/2023 including scope appendix",
    description: "Testing laboratory no. 1599, ČSN EN ISO/IEC 17025:2018. Valid until 26 October 2028.",
    href: "/dokumenty/osvedceni-akreditace-562-2023.pdf",
    group: "akreditace"
  },
  {
    id: "autorizace-eia",
    title: "Professional authorisation certificate (EIA)",
    description: "Preparation of supporting documentation in environmental impact assessment processes.",
    href: "/dokumenty/osvedceni-autorizace-eia.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-rozptyl",
    title: "Authorisation for dispersion studies",
    description: "Authorisation to prepare dispersion studies.",
    href: "/dokumenty/autorizace-rozptylova-studie.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-ghg",
    title: "Authorisation for greenhouse gas emission verification",
    description: "Authorisation to verify greenhouse gas emissions.",
    href: "/dokumenty/autorizace-emise-sklenikovych-plynu.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-posudek",
    title: "Authorisation for expert reports",
    description: "Authorisation to prepare expert reports in air protection.",
    href: "/dokumenty/autorizace-odborny-posudek.pdf",
    group: "autorizace"
  }
];
