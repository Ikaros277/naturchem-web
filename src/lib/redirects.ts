/** 301 přesměrování ze starých URL na finální strukturu. */
export const permanentRedirects = [
  { source: "/akreditace-a-autorizace", destination: "/akreditace-autorizace-dokumenty", permanent: true },
  { source: "/akreditace-a-autorizace/", destination: "/akreditace-autorizace-dokumenty", permanent: true },
  { source: "/spolecnost", destination: "/o-spolecnosti-naturchem", permanent: true },
  { source: "/spolecnost/", destination: "/o-spolecnosti-naturchem", permanent: true },
  { source: "/o-nas", destination: "/o-spolecnosti-naturchem", permanent: true },
  { source: "/o-nas/", destination: "/o-spolecnosti-naturchem", permanent: true },
  { source: "/odborna-garance", destination: "/o-spolecnosti-naturchem", permanent: true },
  { source: "/odborna-garance/", destination: "/o-spolecnosti-naturchem", permanent: true },
  { source: "/hlukova-studie", destination: "/hlukove-studie", permanent: true },
  { source: "/hlukova-studie/", destination: "/hlukove-studie", permanent: true },
  { source: "/pracovni-prostredi/vibrace", destination: "/mereni-vibraci", permanent: true },
  { source: "/pracovni-prostredi/vibrace/", destination: "/mereni-vibraci", permanent: true },
  { source: "/pracovni-prostredi/osvetleni", destination: "/mereni-osvetleni", permanent: true },
  { source: "/pracovni-prostredi/osvetleni/", destination: "/mereni-osvetleni", permanent: true },
  { source: "/pracovni-prostredi/mikroklima", destination: "/mereni-mikroklimatu", permanent: true },
  { source: "/pracovni-prostredi/mikroklima/", destination: "/mereni-mikroklimatu", permanent: true },
  { source: "/odborny-posudek-provozni-rad", destination: "/odborne-posudky", permanent: true },
  { source: "/odborny-posudek-provozni-rad/", destination: "/odborne-posudky", permanent: true },
  {
    source: "/overovani-emisi-sklenikovych-plynu",
    destination: "/ghg-overovani-emisi-sklenikovych-plynu",
    permanent: true
  },
  {
    source: "/overovani-emisi-sklenikovych-plynu/",
    destination: "/ghg-overovani-emisi-sklenikovych-plynu",
    permanent: true
  },
  {
    source: "/obory/kotelny-spalovaci-zdroje",
    destination: "/provozy-a-technologie/kotelny",
    permanent: true
  },
  {
    source: "/obory/kotelny-spalovaci-zdroje/",
    destination: "/provozy-a-technologie/kotelny",
    permanent: true
  },
  {
    source: "/obory/recyklace-odpady",
    destination: "/provozy-a-technologie/odpady-recyklace",
    permanent: true
  },
  {
    source: "/obory/recyklace-odpady/",
    destination: "/provozy-a-technologie/odpady-recyklace",
    permanent: true
  },
  {
    source: "/obory/sklarske-provozy",
    destination: "/provozy-a-technologie/sklarstvi",
    permanent: true
  },
  {
    source: "/obory/sklarske-provozy/",
    destination: "/provozy-a-technologie/sklarstvi",
    permanent: true
  },
  { source: "/obory", destination: "/provozy-a-technologie", permanent: true },
  { source: "/obory/", destination: "/provozy-a-technologie", permanent: true },
  { source: "/obory/:path*", destination: "/provozy-a-technologie/:path*", permanent: true },
  {
    source:
      "/poradna/novela-zákona-o-ochraně-ovzduší-2025-co-se-mění-pro-provozovatele-zdrojů-emisí",
    destination: "/poradna/novela-zakona-o-ochrane-ovzdusi-2025",
    permanent: true
  },
  {
    source:
      "/poradna/novela-zákona-o-ochraně-ovzduší-2025-co-se-mění-pro-provozovatele-zdrojů-emisí/",
    destination: "/poradna/novela-zakona-o-ochrane-ovzdusi-2025",
    permanent: true
  }
];
