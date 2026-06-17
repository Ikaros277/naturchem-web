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
    title: "Akkreditierungsurkunde Nr. 562/2023 einschließlich Anwendungsbereichsanhang",
    description: "Testing laboratory no. 1599, ČSN EN ISO/IEC 17025:2018. Valid until 26 October 2028.",
    href: "/dokumenty/osvedceni-akreditace-562-2023.pdf",
    group: "akreditace"
  },
  {
    id: "autorizace-eia",
    title: "Berufsberechtigungszertifikat (EIA)",
    description: "Erstellung unterstützender Dokumentation in Umweltverträglichkeitsprüfungsprozessen.",
    href: "/dokumenty/osvedceni-autorizace-eia.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-rozptyl",
    title: "Genehmigung für Ausbreitungsstudien",
    description: "Berechtigung zur Erstellung von Ausbreitungsstudien.",
    href: "/dokumenty/autorizace-rozptylova-studie.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-ghg",
    title: "Genehmigung zur Überprüfung der Treibhausgasemissionen",
    description: "Berechtigung zur Überprüfung von Treibhausgasemissionen.",
    href: "/dokumenty/autorizace-emise-sklenikovych-plynu.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-posudek",
    title: "Genehmigung für Gutachten",
    description: "Befugnis zur Erstellung von Gutachten im Luftschutz.",
    href: "/dokumenty/autorizace-odborny-posudek.pdf",
    group: "autorizace"
  }
];
