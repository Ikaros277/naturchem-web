import type { Locale } from "@/lib/i18n/locales";
import { pcfSpecValuesDe } from "@/lib/pcf-spec-values-de";

/** Czech translations of PCF product specification values (keys = English source text). */
const pcfSpecValuesCs: Record<string, string> = {
  "0–1,000 ppbV benzene (6 scales from 0–5 ppbV)":
    "0–1 000 ppbV benzen (6 měřicích stupňů od 0–5 ppbV)",
  "0–10 Vdc / 4–20 mA": "0–10 Vdc / 4–20 mA",
  "0–10,000 mg/m³": "0–10 000 mg/m³",
  "0–10,000 mg/m³ (scalable)": "0–10 000 mg/m³ (rozšiřitelný rozsah)",
  "0–10,000 ppmV TVOC": "0–10 000 ppmV TVOC",
  "0–10,000 ppmV TVOC; individual ranges per compound":
    "0–10 000 ppmV TVOC; individuální rozsahy pro jednotlivé sloučeniny",
  "0–100 / 1,000 / 10,000 mg/m³": "0–100 / 1 000 / 10 000 mg/m³",
  "0–100 / 1,000 / 10,000 mg/m³ (other ranges available)":
    "0–100 / 1 000 / 10 000 mg/m³ (další rozsahy na vyžádání)",
  "0–40 °C": "0–40 °C",
  "0–40 °C ambient": "0–40 °C okolní prostředí",
  "1 m": "1 m",
  "1 s from 0 to 90 % of f.s.d.": "1 s od 0 do 90 % plného rozsahu",
  "1,000 ml/min": "1 000 ml/min",
  "12 kg": "12 kg",
  "12–15 kg": "12–15 kg",
  "15 kg": "15 kg",
  "180 s basic cycle (modifiable on request)": "180 s základní cyklus (upravitelný na vyžádání)",
  "180–200 °C": "180–200 °C",
  "180–200 °C (heated circuit)": "180–200 °C (vyhřívaný okruh)",
  "180–200 °C circuit": "okruh 180–200 °C",
  "180–300 s (shorter on request)": "180–300 s (kratší na vyžádání)",
  "19″ rack mini GC": "miniaturní GC v 19″ racku",
  "19″ rack module": "modul pro 19″ rack",
  "19″ rack process analyser": "procesní analyzátor v 19″ racku",
  "2 gas cylinders": "2 plynové lahve",
  "2 × 40 character lines": "2 řádky po 40 znacích",
  "230 V 50 Hz (110 V 60 Hz optional)": "230 V 50 Hz (110 V 60 Hz volitelně)",
  "230 V 50 Hz (110 V optional)": "230 V 50 Hz (110 V volitelně)",
  "230/110 Vac, 50/60 Hz, max 300 VA": "230/110 Vac, 50/60 Hz, max. 300 VA",
  "2× 4.3″ touch-screen graphic displays": "2× grafické dotykové displeje 4,3″",
  "3 gas cylinders": "3 plynové lahve",
  "3 m standard (optional longer)": "3 m standardně (delší na vyžádání)",
  "30 s standard (shorter on request)": "30 s standardně (kratší na vyžádání)",
  "390 × 290 × 230 mm (19″ rack module)": "390 × 290 × 230 mm (modul 19″ rack)",
  "3× 0–10 V / 4–20 mA (specific, TVOC, difference)":
    "3× 0–10 V / 4–20 mA (specifická sloučenina, TVOC, rozdíl)",
  "400 × 300 × 150 mm portable module": "400 × 300 × 150 mm přenosný modul",
  "480 × 190 × 560 mm": "480 × 190 × 560 mm",
  "480 × 190 × 560 mm (19″ rack, W×H×D)": "480 × 190 × 560 mm (19″ rack, š×v×h)",
  "483 × 185 × 450 mm (19″ rack)": "483 × 185 × 450 mm (19″ rack)",
  "500 ml/min": "500 ml/min",
  "5–40 °C ambient": "5–40 °C okolní prostředí",
  "6 programmable scales, e.g. 0–5/10/50/100/500/1,000 ppmV (or mg/m³)":
    "6 programovatelných měřicích stupňů, např. 0–5/10/50/100/500/1 000 ppmV (nebo mg/m³)",
  "6 scales from 0–5 ppmV VOC": "6 stupňů od 0–5 ppmV VOC",
  "640×200 px colour LCD touch screen with real-time analysis":
    "640×200 px barevný LCD dotykový displej s analýzou v reálném čase",
  "< 0.05 µg/m³ benzene": "< 0,05 µg/m³ benzen",
  "> 1 % of f.s.d.": "> 1 % plného rozsahu",
  "Amplified signal proportional to concentration": "Zesílený signál úměrný koncentraci",
  "Analogue and serial interfaces": "Analogové a sériové rozhraní",
  "Analysis and calibration phase switching": "Přepínání analytické a kalibrační fáze",
  "As per application (configured at order)": "Podle aplikace (konfigurace při objednávce)",
  "Automatic GC cycle with thermal desorption": "Automatický GC cyklus s termickou desorpcí",
  "Benzene, toluene, ethylbenzene, xylenes (BTEX)": "Benzen, toluen, ethylbenzen, xyleny (BTEX)",
  "Bridge unbalance signal, amplified": "Signál nesymetrie mostu, zesílený",
  "CH₄, CO₂ and light permanent gases": "CH₄, CO₂ a lehké inertní plyny",
  "CH₄, CO₂, H₂, O₂ and permanent gases": "CH₄, CO₂, H₂, O₂ a inertní plyny",
  "CH₄, TVOC, NMH and specific HC compounds":
    "CH₄, TVOC, NMH a specifické uhlovodíkové sloučeniny",
  "Calibrated capillary loop (0.6 cc)": "Kalibrovaná kapilární smyčka (0,6 cc)",
  "Colour graphic display with touch screen": "Barevný grafický dotykový displej",
  "Compact subsystem with PCB": "Kompaktní podsystém s deskou plošných spojů",
  "Continuous and alternating analyser modes": "Kontinuální a střídavý režim analyzátoru",
  "Continuous process gas chromatography": "Kontinuální procesní plynová chromatografie",
  "Discrete / non-continuous sampling": "Diskrétní / neprůběžné vzorkování",
  "Dual FID — simultaneous VOC and CH₄": "Dvojitý FID — současné měření VOC a CH₄",
  "Dynamic dilution / metrological calibrator": "Dynamické ředění / metrologický kalibrátor",
  "Electrical heating along PTFE/stainless path": "Elektrické vyhřívání podél PTFE/nerezové trasy",
  "Emission stacks and industrial sources": "Emisní výduchy a průmyslové zdroje",
  "Engineered analogue signal proportional to concentration":
    "Upravený analogový signál úměrný koncentraci",
  "F.I.D. flame ionization detector at high temperature (180 °C)":
    "F.I.D. plamenově ionizační detektor při vysoké teplotě (180 °C)",
  "FID air supply for PCF analysers": "Zásobování FID vzduchem pro analyzátory PCF",
  "FID emission monitoring systems": "Emisní monitorovací systémy s FID",
  "FID for high temperatures (180 °C)": "FID pro vysoké teploty (180 °C)",
  "FID or PID": "FID nebo PID",
  "FID with GC column separation": "FID s GC separací na koloně",
  "FID with GC separation": "FID s GC separací",
  "Field / laboratory gas organisation": "Terénní / laboratorní uspořádání plynů",
  "Field / portable monitoring kits": "Terénní / přenosné monitorovací sady",
  "Flame ionization detector (FID)": "Plamenově ionizační detektor (FID)",
  "From analyser or external controller": "Z analyzátoru nebo externího regulátoru",
  "Front-panel display with programming menu": "Displej na čelním panelu s programovacím menu",
  "GC cycle for NMH determination (configurable)": "GC cyklus pro stanovení NMH (konfigurovatelný)",
  "Glass Duraglass": "Skleněná komora Duraglass",
  "Heated F.I.D. flame ionization detector (180 °C)":
    "Vyhřívaný F.I.D. plamenově ionizační detektor (180 °C)",
  "Heated FID (180 °C)": "Vyhřívaný FID (180 °C)",
  "Heated dust filter at probe head": "Vyhřívaný prachový filtr na hlavici sondy",
  "H₂ 28 cc/min; pure air 280 cc/min from internal generator":
    "H₂ 28 cc/min; čistý vzduch 280 cc/min z vestavěného generátoru",
  "H₂ 30 cc/min; pure air 300 cc/min": "H₂ 30 cc/min; čistý vzduch 300 cc/min",
  "H₂ 30 ml/min; FID air 300 ml/min; service air 4.5 bar (local)":
    "H₂ 30 ml/min; FID vzduch 300 ml/min; servisní vzduch 4,5 bar (lokální)",
  "H₂, FID air, nitrogen/service air as per configuration":
    "H₂, FID vzduch, dusík/servisní vzduch dle konfigurace",
  "Linearity, LDL, repeatability at multiple steps":
    "Linearita, LDL, opakovatelnost ve více krocích",
  "Low — responds to organic carbon broadly": "Nízká — odezva na organický uhlík obecně",
  "Lower than FID; excellent stability": "Nižší než u FID; vynikající stabilita",
  "Medium — ppm fractions": "Střední — řádově ppm",
  "Multi-line / multi-point stream selector": "Vícelinkový / vícebodový selektor proudů",
  "Multiple lengths on request": "Různé délky na vyžádání",
  "Occasional methane fraction verification": "Občasná kontrola metanové frakce",
  "On-board graphic display": "Vestavěný grafický displej",
  "Photo ionization detector (PID)": "Fotoionizační detektor (PID)",
  "Portable 19″ module with carrying case": "Přenosný 19″ modul s transportním kufrem",
  "Portable analyser": "Přenosný analyzátor",
  "Pure air and hydrogen at controlled flow": "Čistý vzduch a vodík při řízeném průtoku",
  "RS-232": "RS-232",
  "RS-232 (9-pin)": "RS-232 (9pin)",
  "RS-232; analogue 0–10 V / 4–20 mA": "RS-232; analogově 0–10 V / 4–20 mA",
  "Rack or bench module": "Modul pro rack nebo stolní provedení",
  "Seconds to 90 % of f.s.d.": "Řádově sekundy do 90 % plného rozsahu",
  "Serial / analogue per system configuration": "Sériové / analogové dle konfigurace systému",
  "Stack gases up to ~100 °C": "Spaliny do ~100 °C",
  "Stainless steel": "Nerezová ocel",
  "Stainless steel (S.S.)": "Nerezová ocel (S.S.)",
  "Standard and ex-proof": "Standardní a ex-proof provedení",
  "TCD (thermal conductivity / Wheatstone bridge)":
    "TCD (termokonduktivní detektor / Wheatstoneův most)",
  "TVOC, CH₄, NMH and specific reactive HC":
    "TVOC, CH₄, NMH a specifické reaktivní uhlovodíky",
  "Thermal conductivity detector (TCD)": "Termokonduktivní detektor (TCD)",
  "Two-injection GC cycle": "GC cyklus se dvěma injekcemi",
  "Typically 3 m (options available)": "Obvykle 3 m (další varianty k dispozici)",
  "UNI EN 10263 / EN 12619 sampling practice": "Praxe vzorkování dle UNI EN 10263 / EN 12619",
  "UNI EN 12619:2013": "UNI EN 12619:2013",
  "Up to 4 mass flow controllers": "Až 4 regulátory hmotnostního průtoku (MFC)",
  "VOC, aromatics, unsaturated HC": "VOC, aromáty, nenasycené uhlovodíky",
  "Zero / ultra-pure air generation (UPP)": "Generování nulového / ultracistého vzduchu (UPP)",
  "~300 ml/min class (per analyser demand)": "Řádově ~300 ml/min (dle potřeby analyzátoru)",
  "±0.1 µg/m³ benzene": "±0,1 µg/m³ benzen",
  "±0.4 % of f.s.d.": "±0,4 % plného rozsahu",
  "±1 % of f.s.d.": "±1 % plného rozsahu",
  "±15 Vdc": "±15 Vdc"
};

export function getPcfSpecValue(value: string, locale: Locale): string {
  if (locale === "cs") {
    return pcfSpecValuesCs[value] ?? value;
  }
  if (locale === "de") {
    return pcfSpecValuesDe[value] ?? value;
  }
  return value;
}
