export type ServiceGroupItem = {
  title: string;
  href: string;
  text: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  /** What the group covers and how customers use it. */
  intro: string;
  items: ServiceGroupItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "mericke-sluzby",
    title: "Accredited and authorised measurements",
    intro:
      "Field measurements of emissions, noise and workplace conditions, with reports for operations and authorities.",
    items: [
      {
        title: "Workplace environment measurements",
        href: "/sluzby/pracovni-prostredi",
        text: "Dust, chemical substances, noise, microclimate, lighting, vibration. Job categorisation, regional hygiene station."
      },
      {
        title: "Heat and cold stress measurement",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        text: "Microclimatic parameters, work class and permissible exposure times. Documentation for regional hygiene station and job categorisation."
      },
      {
        title: "Diisocyanate measurement (MDI, TDI, HDI)",
        href: "/sluzby/mereni-diisokyanatu",
        text: "Isocyanate exposure in PUR, painting and bonding. Personal and stationary sampling for regional hygiene station."
      },
      {
        title: "Noise measurement and acoustics",
        href: "/sluzby/mereni-hluku",
        text: "Field noise measurements, assessment of impact on surroundings, operations and technologies."
      },
      {
        title: "Emission measurements from stationary sources",
        href: "/sluzby/mereni-emisi",
        text: "Boiler plants, paint shops, cogeneration units, process exhaust stacks. NOx, CO, TOC/VOC, PM."
      },
      {
        title: "Vibration measurements",
        href: "/sluzby/mereni-vibraci",
        text: "Hand-arm and whole-body vibration. Job categorisation and occupational health and safety."
      },
      {
        title: "Lighting measurements",
        href: "/sluzby/mereni-osvetleni",
        text: "Workplace and outdoor artificial lighting for the regional hygiene station, job categorisation and occupancy approval."
      },
      {
        title: "Microclimate measurements",
        href: "/sluzby/mereni-mikroklimatu",
        text: "Temperature, humidity and air flow at workplaces."
      }
    ]
  },
  {
    id: "studie-vypocty",
    title: "Studies, calculations and modelling",
    intro:
      "Dispersion and noise studies, calculations and impact assessments for projects and operational changes.",
    items: [
      {
        title: "Dispersion studies",
        href: "/sluzby/rozptylove-studie",
        text: "Immission contributions from sources, operating variants, capacity changes, supporting documentation for authorities."
      },
      {
        title: "Noise studies",
        href: "/sluzby/hlukove-studie",
        text: "Computational noise assessment of technologies, sites, transport and construction projects."
      },
      {
        title: "Acoustic reports",
        href: "/sluzby/akusticke-posudky",
        text: "Statements on noise from technologies, plant rooms and operational sources in buildings."
      },
      {
        title: "Modelling calculations",
        href: "/sluzby/modelove-vypocty",
        text: "Immission and noise modelling for projects and operating variants."
      },
      {
        title: "Immission and noise impacts of projects",
        href: "/sluzby/imisni-dopady",
        text: "Linking air and noise studies for a project or operational change."
      }
    ]
  },
  {
    id: "povolovaci-podklady",
    title: "Permitting and official documentation",
    intro:
      "Expert reports, operating rules and documentation for source permits and integrated permits.",
    items: [
      {
        title: "Expert reports",
        href: "/sluzby/odborne-posudky",
        text: "Statements under the Air Protection Act, technology changes, communication with authorities."
      },
      {
        title: "Operating rules",
        href: "/sluzby/provozni-rady",
        text: "Update and preparation of operating rules for air pollution sources."
      },
      {
        title: "Source operating permit",
        href: "/sluzby/povoleni-provozu",
        text: "Supporting documentation for issuing or changing a stationary source operating permit."
      },
      {
        title: "IPPC and permit changes",
        href: "/sluzby/ippc-integrovana-povoleni",
        text: "Integrated pollution prevention and control, comprehensive supporting documentation for operation."
      }
    ]
  },
  {
    id: "eia-investice",
    title: "EIA and investment preparation",
    intro:
      "Project notifications and technical appendices for environmental impact assessment.",
    items: [
      {
        title: "EIA and project notification",
        href: "/sluzby/eia-oznameni-zameru",
        text: "Preparation of notification and technical appendices for projects with environmental impacts."
      },
      {
        title: "EIA scoping",
        href: "/sluzby/zjistovaci-rizeni-eia",
        text: "Specialist supporting documentation and coordination of inputs for the scoping phase."
      },
      {
        title: "Technical appendices for investors",
        href: "/sluzby/technicke-prilohy",
        text: "Dispersion, noise, transport, emissions and link to actual project operation."
      }
    ]
  },
  {
    id: "evidence-reporting",
    title: "Operating records, reporting and legislative support",
    intro:
      "ISPOP reporting, operating records and greenhouse gas emission calculations.",
    items: [
      {
        title: "ISPOP and integrated pollution reporting records",
        href: "/sluzby/ispop",
        text: "Annual reporting, integrated pollution reporting records, link to emission measurements."
      },
      {
        title: "GHG and greenhouse gases",
        href: "/sluzby/ghg-overovani",
        text: "Verification of emission data, supporting documentation for greenhouse gas reporting."
      },
      {
        title: "Chemical substances in operations",
        href: "/sluzby/chemicke-latky",
        text: "Storage, safety data sheets, labelling and operating rules for chemicals in production."
      }
    ]
  },
  {
    id: "skoleni-podpora",
    title: "Training and specialist support",
    intro:
      "Chemical legislation training, safety data sheets, labelling and storage.",
    items: [
      {
        title: "Chemical legislation training",
        href: "/sluzby/skoleni-chemicke-legislativy",
        text: "Practical training for companies handling chemical substances and mixtures."
      },
      {
        title: "Safety data sheets and labelling",
        href: "/sluzby/bezpecnostni-listy",
        text: "Orientation in safety data sheets, internal containers, labels and link to occupational health and safety."
      }
    ]
  }
];
