# Růst podle reálných poptávek — 13. 8. 2026

## Výchozí signál

Interní analýza schránky za období 13. 8. 2024 až 23. 7. 2026 označila 259 pracovních e-mailů jako poptávky. Jde o charakter poptávky, ne o počet získaných zakázek ani tržby. Webové formuláře jsou v tomto zdroji podchycené jen omezeně.

Nejčastěji se v nových poptávkách objevují měření emisí, hluk, pracovní prostředí, hlukové studie, osvětlení a podklady pro kolaudaci. Opakují se dva hlavní scénáře: provozovatel zdroje řeší emise, ČIŽP, periodu a ISPOP; stavba nebo provozovna řeší kolaudaci, KHS, novou halu, tepelné čerpadlo a kombinaci více měření.

## Provedené změny a hypotézy

| Změna | Výchozí problém | Očekávaný přínos | Měření |
| --- | --- | --- | --- |
| Landing „Měření pro kolaudaci“ | Na webu chyběla stránka pro konkrétní situaci a úřední jazyk poptávek. | Více relevantních zobrazení a kvalifikovaných poptávek pro kolaudaci, KHS a protokoly. | GSC: dotazy, kliknutí a pozice stránky; GA4: `generate_lead` se službou `Kolaudační měření`. |
| Landing „Měření nové haly“ | Nabídka jednotlivých veličin neodpovídala časté poptávce na společný balíček. | Vyšší podíl poptávek s více vybranými službami a s uvedeným termínem. | GA4: `service_count`, `lead_has_deadline`; ruční kvalifikace leadů. |
| Landing pro stavební firmy | Projektant nebo dodavatel neměl vlastní cestu podle fáze stavby. | Více B2B poptávek se správnými podklady a menší tření před naceněním. | GSC: stavební a kolaudační dotazy; počet poptávek s přílohou a lokalitou. |
| Lokální hluk Praha a Havlíčkův Brod | Lokální stránka byla viditelná jen pro České Budějovice. | Lepší relevance pro regionální dotazy bez vytváření duplicitních překladů. | GSC po stránkách a dotazech obsahujících město; kvalifikované leady z regionu. |
| Rozcestník situací na homepage | Návštěvník musel znát odborný název služby. | Rychlejší přechod na komerční landing a vyšší míra pokračování do formuláře. | GA4 cesta homepage → landing → `generate_lead`. |
| Vícevolbový formulář | Osvětlení, vibrace a mikroklima byly skryté v široké kategorii. | Přesnější zadání a snazší kvalifikace kombinovaných poptávek. | `inquiry_category`, `service_interest`, `service_count`, lokalita a termín v GA4 a e-mailu. |

## Hodnoticí okno

První technickou kontrolu indexace provést po nasazení. Průběžný signál sledovat po 7 a 14 dnech, ale SEO závěr dělat nejdříve po 28 dnech a ideálně porovnat 56 dní před a po změně. Primární úspěch je počet kvalifikovaných odeslaných formulářů; kliknutí a návštěvnost jsou podpůrné metriky.

## Omezení

Umístění na první stránce nelze změnou webu zaručit. Výsledek ovlivňují konkurence, autorita domény, lokální důvěryhodnost, obsahové pokrytí, odkazy a rychlost indexace. Další změny mají vycházet z GSC a z ručního vyhodnocení kvality nových leadů, ne pouze z návštěvnosti.
