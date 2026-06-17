/** Accredited scope per certificate no. 562/2023 (appendix). */
export const accreditedLabScope = {
  summary:
    "Physico-chemical analyses and sampling in the fields of air, emission measurements, microclimatic conditions, noise, artificial lighting and vibration.",
  emissions: {
    title: "Emissions from stationary sources",
    sampling: [
      "isokinetic sampling of particulate matter (PM)",
      "sampling of organic substances (solid sorbent)",
      "sampling of heavy metals into liquid",
      "sampling of inorganic chlorine compounds and HCl",
      "VOC sampling (solid sorbent)"
    ],
    analysis: [
      "SO₂, CO, NOx, O₂ (automated analysers)",
      "TOC (organic substances expressed as total organic carbon)",
      "PM (gravimetric)",
      "gas moisture, flow velocity and volumetric flow rate",
      "VOC and other organic substances (calculated from measured values)",
      "HCl and inorganic chlorine compounds",
      "heavy metals: As, Be, Cd, Cr, Co, Cu, Mn, Ni, Pb, Sb, Se, Sn, Te, Tl, V, Zn, Al, Fe, Si, Hg"
    ]
  },
  workplace: {
    title: "Workplace and indoor air",
    items: [
      "inhalable and respirable dust fractions",
      "organic substances (benzene, toluene, xylene, styrene, acetates, chlorinated solvents, etc.)",
      "short-term measurement of chemical substances using detector tubes",
      "microclimate: temperature, pressure, humidity, air flow velocity",
      "hand-arm vibration and whole-body vibration",
      "artificial lighting (indoor and outdoor environments)",
      "noise in the workplace",
      "sampling of dust, aerosol and fibres on filter"
    ]
  },
  environment: {
    title: "Non-occupational environment",
    items: ["noise (LAeq, LAFmax per applicable ČSN ISO 1996 methods)"]
  }
} as const;

export const authorizations = [
  {
    title: "EIA",
    text: "supporting documentation and project notification for EIA proceedings"
  },
  {
    title: "Dispersion studies",
    text: "preparation of dispersion studies"
  },
  {
    title: "Expert reports",
    text: "expert reports in air protection"
  },
  {
    title: "Greenhouse gases",
    text: "verification of greenhouse gas emissions (GHG)"
  }
] as const;
