---

title: Warum reicht ein Gerätekatalogwert für die Lärmbeurteilung nicht aus?
slug: proc-nestaci-katalogovy-udaj-zarizeni-pro-hlukove-posouzeni
excerpt: „Ein Katalogwert für Gerätelärm ist eine nützliche Orientierungshilfe, reicht aber für eine professionelle Lärmbeurteilung allein meist nicht aus.“ Entscheidend ist, ob der Hersteller den Schallleistungspegel oder den Schalldruckpegel angibt, in welchem ​​Abstand der Wert ermittelt wurde, unter welchem ​​Betriebsregime, mit welcher Richtwirkung und mit welcher Unsicherheit. „Für Industriebetriebe ist dies von entscheidender Bedeutung, insbesondere wenn die Ausrüstung nachts läuft oder sich in der Nähe von Wohngebieten befindet.“
author: Ing. František Hezina
publishedAt: 2026-04-30T00:00:00.000Z
topic: Noise
---
## Why a catalogue value is only the beginning

Manufacturers of technology, ventilation units, heat pumps, fans, compressors, coolers, or production machines often state a noise value in the technical data sheet. An investor or designer may then assume that this value can be inserted directly into a noise study. In practice this is often a simplification that can lead to wrong interpretation of results.

A catalogue value may be correct, but it may not mean what the designer expects. It may be sound power level, sound pressure level at a certain distance, a value at partial output, a value for free field, a value for a specific side of the equipment, or a value without clearly stated uncertainty. Without this information the effect of the equipment at the nearest protected area cannot be reliably assessed.

> For noise assessment it is not the number in the catalogue that decides. What decides is what exactly that number means, where it was measured, under what conditions, and how it is to be used in the calculation.

This is important especially for HVAC units, heat pumps, cooling units, compressor rooms, fans, exhausts, industrial machines, loading points, and technology that may be in operation at night.

## Sound pressure vs. sound power

The most common mistake is confusion of sound pressure level and sound power level.

Sound pressure level, usually designated as **Lp** or **LpA**, is a value at a specific location. It depends on distance from the source, directivity, reflections, surrounding environment, measurement height, screening, and operating regime. If the manufacturer states, for example, "55 dB(A) at 1 m distance", this is not a universal property of the equipment but a value valid for a specific measurement position and conditions.

Sound power level, designated as **Lw** or **LwA**, expresses acoustic energy radiated by the source. It is more suitable as input to a calculation model because it is not tied to one measurement point. Here too, however, it matters for what operating regime and according to what procedure it was determined.

| Value in catalogue | What it means | Usability for noise study |
|---|---|---|
| LpA in dB(A) | sound pressure level at a specific location | usable only when distance, measurement position, and conditions are known |
| LwA in dB(A) | sound power level of the source | more suitable input for calculation model |
| "noise 55 dB" | unclear value without quantity | insufficient for professional assessment |
| value in octave bands | frequency composition of noise | very useful for calculation of attenuation, barriers, and tonal components |
| guaranteed value | value with manufacturer's responsibility | better than orientational or typical value |
| typical value | value under certain common conditions | reserve and uncertainty must be verified |

*In practical terms:* the value "sound pressure 55 dB(A) at 1 m" cannot be substituted for "sound power 55 dB(A)". In calculation this can mean a significantly different result.

## Measurement distance: 1 metre is not the plot boundary

Catalogue sound pressure value is often stated at 1 m, 3 m, 5 m, or 10 m from the equipment. This distance is essential. Sound pressure level decreases with increasing distance, but not always in a simple way. It depends on source type, its dimensions, location, reflections from facades, terrain, and surrounding obstacles.

For a point source in open space a decrease of approximately 6 dB when distance doubles is often considered orientationally. In real industrial operation, however, the source may not be point-like. A large HVAC unit, cooling block, long exhaust, or wall louver may behave as an area or directional source. It may also be located at a facade, on a roof, in a courtyard, behind a parapet, or between buildings.

Therefore one cannot say: "the catalogue has 60 dB at one metre, at a house 20 metres away it will automatically be fine". Sound propagation in the actual situation must be recalculated.

| Catalogue value | What needs to be added |
|---|---|
| LpA at 1 m distance | from which side of equipment, at what height, and under what regime |
| LpA at 10 m distance | whether it is free field, semi-space, measurement at facade, or calculation |
| LwA without frequencies | at least total sound power, better octave bands |
| value without distance | problematic input for a serious noise study |
| value "according to manufacturer" | necessary to verify whether it is guaranteed or orientational value |

For a noise study it is therefore better to provide a technical data sheet with clearly stated quantity, distance, operating regime, and if possible frequency spectrum.

## Source directivity

Many technical devices do not radiate noise equally in all directions. A fan, exhaust, air intake, cooling unit, or heat pump may be significantly noisier in a certain direction. If this noisier side is oriented towards residential development, the resulting impact may be substantially higher than when oriented into the site or towards a less sensitive area.

Directivity is important especially for these sources:

| Source | Why it may be directional |
|---|---|
| fan | noise spreads mainly in direction of intake or discharge |
| HVAC exhaust | flow and aerodynamic noise have a specific direction |
| heat pump | fan and compressor are not acoustically symmetrical |
| cooling unit | different sides of equipment may have different noise levels |
| wall louver | noise spreads through a specific opening in the facade |
| hall gates | when open a area source arises towards the surroundings |

A catalogue value often states one summary value. For assessment of a specific building, however, it is important to know which side of the equipment faces the protected area, whether the source stands at a reflective facade, whether it is on the roof behind a parapet, or whether it is open towards residential development.

> The same equipment can be unproblematic in one position and problematic in another. The result is often decided by source orientation, not just its catalogue noise level.

## Operating regime: minimum, maximum, or night operation?

Catalogue noise may be stated for a certain operating state. For variable equipment this is essential. A fan at 50 % speed may have completely different noise than at 100 % output. A heat pump may have different noise in normal operation, defrosting, maximum output, or in limited night regime. A compressor may run in cycles and a cooling unit may have several operating stages.

For industrial operations it is also important whether sources are aggregated. A single unit may comply, but several units on the roof together with fans, compressors, transport, and gate operation may already be a problem.

| Operating regime | Why it matters |
|---|---|
| nominal output | usual catalogue regime, but may not be the noisiest |
| maximum output | suitable for conservative assessment |
| night regime | key for stricter night limits |
| cyclic operation | important for time assessment of LAeq |
| peak operation | may decide the noisiest hour at night |
| simultaneous operation of several sources | total noise is added energetically, not arithmetically |

*Practically important:* if equipment is to run at night, it is not enough to provide catalogue value for day or economy regime. It is necessary to know what the actual noisiest night operation will be.

## Uncertainty and safety reserve

Noise assessment is not an absolutely precise forecast. Input data have uncertainty, the calculation model has uncertainty, and actual operation may differ from assumption. A catalogue value may be a typical value, guaranteed value, laboratory value, or value determined under conditions that do not repeat in real installation.

Uncertainty is important especially when the calculation comes out just below the hygiene limit. If the model shows, for example, a reserve of 0.5 dB, that is not a comfortable result. A small change in operation, location, reflection, or equipment output can mean exceedance.

**For a quality noise study it is therefore advisable to work with a reserve.** For new projects it is better to design equipment, location, or measures so that the result is not "on the edge". This applies especially to night operation, when limits are stricter and surrounding background noise is lower.

## Night operation: the most common problem of technical equipment

Night operation is especially sensitive for noise. For protected outdoor areas of buildings, operational sources at night are assessed for the noisiest one hour. This means it is not enough to say that equipment runs only occasionally or that the average for the whole day is low. If a noisy unit, compressor, fan, or cooling runs in the most loaded hour at night, that hour may be decisive.

Night problems often arise with equipment that is technically inconspicuous:

- heat pump at a facade,
- cooling unit on a roof,
- HVAC unit running for technology,
- fan from production hall,
- compressor room with discharge into a courtyard,
- supply or handling in early morning hours,
- backup or technological cooling of a data centre.

From the project perspective it is therefore advisable to state at the outset whether equipment will run at night, in what regime, for how long, and in what combination with other sources. If night operation is to be continuous, noise must be assessed very carefully.

> For night operation a catalogue value without operating regime is almost always insufficient. The noisiest real night hour, simultaneous sources, and relationship to nearest protected areas decide.

## Why frequency spectrum matters

One figure in dB(A) may not be enough. Two sources can have the same total sound power level but completely different frequency composition. One may have dominant low frequencies, the other higher frequencies. This is important for distance attenuation, effectiveness of noise barriers, facade transmission, silencers, and perception of nuisance.

For fans, compressors, HVAC units, or heat pumps tonal components may be significant. These can increase noise nuisance and worsen defensibility of the result. If the catalogue states only total dB(A), these phenomena may not be adequately assessed.

| Data | Benefit for assessment |
|---|---|
| total LwA | basic input for orientational calculation |
| octave bands | better calculation of propagation, barriers, and attenuation |
| information on tonal component | important for nuisance and corrections |
| data for individual sides of equipment | allow directivity to be taken into account |
| noise at different regimes | allow day/night operation to be assessed |

For more significant sources it is therefore advisable to request from the supplier not only one noise value but more detailed acoustic data.

## What the designer or investor should provide for noise assessment

For quality noise assessment it is ideal to provide equipment technical data sheets, layout, location of sources, operating regimes, and information on nearest protected areas. If some data are missing, they can sometimes be estimated professionally, but the result will be less precise and often more conservative.

The most useful inputs are:

1. sound power level LwA,
2. octave or third-octave spectrum,
3. information whether it is guaranteed or typical value,
4. operating regime for which the value applies,
5. noise at maximum and night regime,
6. equipment orientation and directivity,
7. location on facade, roof, or in terrain,
8. source height above terrain,
9. operating time and simultaneous operation of several sources,
10. distance to nearest protected areas.

If only the value "sound pressure at 1 m" is available, it is advisable to add from which document it comes, from which side of the equipment it was measured, and whether the manufacturer can provide sound power.

## Most common mistakes when using catalogue values

The most common mistake is direct insertion of catalogue sound pressure into the model as sound power. The result can then be fundamentally wrong. A second common mistake is use of a value for quiet or nominal regime when equipment will in real operation run at higher output.

Another problem arises when only one device is assessed but several sources run simultaneously in real operation. Noise is not added by ordinary arithmetic sum. Two identical sources mean an increase of approximately 3 dB, ten identical sources approximately 10 dB. This can be decisive especially for roof units or larger HVAC assemblies.

Omission of reflections from facades, parapets, courtyards, and neighbouring buildings is also common. Equipment located in an acoustically open space may behave differently than the same equipment between walls or in a semi-enclosed technical courtyard.

## When a catalogue value may be enough and when not

A catalogue value may be enough for a very orientational preliminary assessment if the project is far from protected development, the source does not run at night, and it is clear that it has a large reserve. For more sensitive projects it is not enough.

| Situation | Catalogue value usually not enough |
|---|---|
| equipment runs at night | night regime and noisiest hour must be known |
| source is close to residential building | exact location and directivity decide |
| HVAC, cooling, or heat pump involved | spectrum and regimes are often needed |
| several identical sources exist | simultaneous operation and energetic addition must be addressed |
| source is on roof or at facade | reflections, height, and screening are important |
| result comes out just below limit | reserve and work with uncertainty needed |
| source has tonal component | total dB(A) may not capture nuisance |

For industrial and technological operations it is therefore advisable to treat a catalogue value as input information, not as ready proof of compliance with hygiene limits.

## Summary

A catalogue value for equipment is important, but for professional noise assessment it usually is not enough on its own. It is necessary to know whether it is sound pressure or sound power, at what distance the value was determined, under what operating regime, from which side of the equipment, with what uncertainty, and whether the source will also run at night.

For a project it is safest to work with sound power level, frequency spectrum, data for different operating regimes, and clear location of the source in the layout. For night operation, nearby residential development, and technology with several noise sources it is advisable to carry out noise assessment already in the design phase, when equipment location, silencers, barriers, or operating regime can still be adjusted.

Send us equipment technical data sheets, acoustic data, layout, location of sources, operating regime, and distance to nearest residential development. We will assess whether catalogue data are sufficient or whether a noise study, more precise acoustic inputs, or proposal of noise reduction measures is needed.

## Factual basis of the article

The article is based mainly on these sources:

- [Government Regulation No. 272/2011 Coll., on protection of health from adverse effects of noise and vibration](https://www.zakonyprolidi.cz/cs/2011-272),
- [ISO 3744:2025 – Acoustics — Determination of sound power levels of noise sources using sound pressure](https://www.iso.org/standard/80866.html),
- [ISO 11201:2010 – Acoustics — Noise emitted by machinery and equipment — Determination of emission sound pressure levels](https://www.iso.org/standard/54908.html).

Government Regulation No. 272/2011 Coll. sets hygiene limits for noise, method of their determination and evaluation for protected outdoor areas, protected outdoor areas of buildings, protected indoor areas of buildings, and workplaces. For operational sources, assessment of LAeq,8h in daytime and LAeq,1h at night is significant for outdoor protected areas. ISO 3744 addresses determination of sound power level of a source from sound pressure levels measured on a surface surrounding the source. ISO 11201 concerns emission sound pressure levels of equipment at the workplace or at other specified positions.
