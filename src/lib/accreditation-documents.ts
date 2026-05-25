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
    title: "Osvědčení o akreditaci č. 562/2023 včetně přílohy rozsahu",
    description: "Zkušební laboratoř č. 1599, ČSN EN ISO/IEC 17025:2018. Platnost do 26. 10. 2028.",
    href: "/dokumenty/osvedceni-akreditace-562-2023.pdf",
    group: "akreditace"
  },
  {
    id: "autorizace-eia",
    title: "Osvědčení k odborné autorizaci (EIA)",
    description: "Vypracování podkladů v procesech posuzování vlivů na životní prostředí.",
    href: "/dokumenty/osvedceni-autorizace-eia.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-rozptyl",
    title: "Autorizace k rozptylovým studiím",
    description: "Oprávnění k vypracování rozptylových studií.",
    href: "/dokumenty/autorizace-rozptylova-studie.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-ghg",
    title: "Autorizace k ověřování emisí skleníkových plynů",
    description: "Oprávnění k ověřování emisí skleníkových plynů.",
    href: "/dokumenty/autorizace-emise-sklenikovych-plynu.pdf",
    group: "autorizace"
  },
  {
    id: "autorizace-posudek",
    title: "Autorizace k odborným posudkům",
    description: "Oprávnění k vypracování odborných posudků v ochraně ovzduší.",
    href: "/dokumenty/autorizace-odborny-posudek.pdf",
    group: "autorizace"
  }
];
