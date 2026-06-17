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
      "Need a report for an authority or your operation? We provide field measurements of emissions, noise, workplace environment and other parameters — with outputs for the regional hygiene station, Czech Environmental Inspectorate or regional authority.",
    items: [
      {
        title: "Emission measurements from stationary sources",
        href: "/sluzby/mereni-emisi",
        text: "Boiler plants, paint shops, cogeneration units, process exhaust stacks. NOx, CO, TOC/VOC, PM."
      },
      {
        title: "Workplace environment measurements",
        href: "/sluzby/pracovni-prostredi",
        text: "Dust, chemical substances, noise, microclimate, lighting, vibration. Job categorisation, regional hygiene station."
      },
      {
        title: "Noise measurement and acoustics",
        href: "/sluzby/mereni-hluku",
        text: "Field noise measurements, assessment of impact on surroundings, operations and technologies."
      },
      {
        title: "Vibration measurements",
        href: "/sluzby/mereni-vibraci",
        text: "Hand-arm and whole-body vibration. Job categorisation and occupational health and safety."
      },
      {
        title: "Lighting measurements",
        href: "/sluzby/mereni-osvetleni",
        text: "Workplace lighting for regional hygiene station, job categorisation and occupancy approval."
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
      "Planning an operational change or new project? We prepare dispersion, noise, modelling calculations and linked impacts including variants for authorities and investors.",
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
      "Changing technology or source permit? We prepare expert reports, operating rules and supporting documentation for integrated permits — for the regional authority and Czech Environmental Inspectorate.",
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
      "Preparing an investment with EIA? We coordinate project notification, scoping and technical appendices linked to permitting.",
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
      "ISPOP reporting or data verification approaching? We review integrated pollution reporting records and greenhouse gas emissions linked to measurements and permits.",
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
        title: "Legislative support for operators",
        href: "/sluzby/chemicke-latky",
        text: "Review of calculated and measured values, authorised verification as required."
      }
    ]
  },
  {
    id: "skoleni-podpora",
    title: "Training and specialist support",
    intro:
      "Need training or clear rules for chemicals in operation? We cover legislation, safety data sheets, labelling and storage for warehouses, production and laboratories.",
    items: [
      {
        title: "Chemical legislation training",
        href: "/sluzby/skoleni-chemicke-legislativy",
        text: "Practical training for companies handling chemical substances and mixtures."
      },
      {
        title: "Working with chemical substances and mixtures",
        href: "/sluzby/chemicke-latky",
        text: "Safe use, storage, labelling and operating rules for employees."
      },
      {
        title: "Safety data sheets and labelling",
        href: "/sluzby/bezpecnostni-listy",
        text: "Orientation in safety data sheets, internal containers, labels and link to occupational health and safety."
      }
    ]
  }
];
