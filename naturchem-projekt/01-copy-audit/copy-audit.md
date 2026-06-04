# Copy Audit — naturchem.cz
**Datum:** 2026-05-30  
**Metodika:** Analýza textů na webu, porovnání s Tone of Voice (v1.1) a personami  
**Scope:** Homepage + klíčové stránky + service pages + poradna  
**Referenční dokument:** `00-strategie/tone-of-voice.md`

---

## Souhrnná diagnóza

Web trpí **třemi systémovými copy problémy**:

1. **Texty popisují firmu místo zákazníkova problému.** Intro texty začínají „NATURCHEM zajišťuje…" nebo „Naše služba zahrnuje…" — místo „Čelíte kontrole ČIŽP?" nebo „Potřebujete povolení provozu?".

2. **Délka introductions je nad limitem na většině stránek.** TOV limit je max. 25 slov / 2 věty. Reálný průměr: 35–47 slov. Texty jsou technicky přesné, ale zákazník odejde dřív, než dorazí k CTA.

3. **CTA výzvy jsou pasivní nebo klišé.** „Neváhejte nás kontaktovat" a „Poptat měření" jsou OK, ale chybí kontextová CTA která reflektují, co zákazník právě četl.

---

## 1. Globální problémy (cross-cutting)

### C-G1 — Intro texty začínají firmou, ne zákazníkem

**Problém:** Standardní vzor intro textu: „Zajišťujeme [seznam služeb]…" nebo „Naše laboratoř [vlastnost]…"  
**Dopad:** Zákazník Tomáš (EHS manažer) nebo Martin (majitel firmy) skenuje stránku otázkou „řeší to můj problém?" — text mu neodpoví.  
**Oprava:** Přepsat intro na vzor: „[Situace zákazníka] → [co dostanete]." Viz TOV sekce 3.3.

**Příklad:**

❌ Aktuálně:
> „Společnost NATURCHEM zajišťuje měření emisí ze stacionárních zdrojů znečišťování ovzduší v souladu s legislativními požadavky."

✅ Cílový stav:
> „Potřebujete protokol o měření emisí pro ČIŽP nebo krajský úřad? Změříme emise ze Vašeho zdroje a doručíme akreditovaný protokol do 5 pracovních dní."

---

### C-G2 — Zakázané fráze stále přítomné

Z `tone-of-voice.md` sekce 5 — ověřit výskyt na webu:

| Zakázaná fráze | Kde hledat | Status |
|----------------|-----------|--------|
| „komplexní služby" nebo „komplexní přístup" | Homepage, o-spolecnosti, service pages | 🔲 ověřit |
| „profesionální přístup" | O-spolecnosti | 🔲 ověřit |
| „neváhejte nás kontaktovat" | Formulářové sekce, CTA bannery | 🔲 ověřit |
| „rádi Vám pomůžeme" | Footer, CTA | ✅ odstraněno z patičky (P5-23) |
| „v nejkratším možném termínu" | Formuláře, service pages | 🔲 ověřit |
| „kvalita je naší prioritou" | O-spolecnosti | 🔲 ověřit |

**Oprava:** Hromadně nahradit konkrétními alternativami dle tabulky v TOV.

---

### C-G3 — Neověřená čísla a tvrzení

Dle TOV principu č. 1 — nikdy nepsat čísla bez ověření s Hezinou.

| Tvrzení | Kde | Status |
|---------|-----|--------|
| „36 let odborné činnosti" (nebo podobné) | Homepage, o-spolecnosti | ❓ OVĚŘIT |
| „14 000+ zakázek" | Homepage stats | ❓ OVĚŘIT |
| „6 000+ měření" | Homepage stats | ❓ OVĚŘIT |
| „3 pracovní pracoviště" | Různé stránky | ✅ Ověřeno (HB + CB + Praha 5) |

**Pokud čísla nejdou ověřit** → nahradit kvalitativním tvrzením: „Stovky zakázek ročně pro průmyslové provozy po celé ČR."

---

### C-G4 — Oslovení a hlas Ing. Heziny

**Problém:** Web zatím nepracuje s Hezinou jako osobní autoritou. Na service pages mluví „firma" — ale zákazník B2B nakupuje od osoby, ne od anonymní firmy.  
**Příležitost:** Na klíčových stránkách (homepage hero, o-spolecnosti, odborna-garance) přidat 1 větu v první osobě: „Osobně garantuji, že výsledky obstojí při kontrole ČIŽP. — Ing. František Hezina"  
**Stav:** 🔲 Nezahájeno

---

## 2. Homepage

### Aktuální stav hero textu (homepage, 2026-05-31)

**H1:** Akreditovaná měření, studie a podklady pro úřady (7 slov)  
**Lead:** Postaráme se o vše, co Váš provoz potřebuje — pro provozovatele, investory i projektanty, bez nutnosti poptávat více dodavatelů. (mobil = desktop)  
**Pravidla pro všechny hero:** viz `04-ai-role/copy-role.md` § Hero a `04-ai-role/ux-role.md` § Hero.

Historické problémy H1/H2 (lead 40+ slov, firma místo benefitu) — **vyřešeno P5-21**.

### Problémy

| ID | Problém | Dopad |
|----|---------|-------|
| H1 | Lead paragraph nad limitem (40+ slov) | Málokdo dočte celý — první dojem oslaben |
| H2 | H1 headline popisuje firmu, ne zákazníkův výsledek | Nízká relevance při skenování |
| H3 | Reference teaser — generické příklady zakázek bez jmen firem | Slabý social proof |

### Doporučení

**H1 headline:** Měl by odpovídat na otázku zákazníka Tomáše nebo Martina. Testovat:
- „Měříme emise. Zpracujeme EIA. Vyřídíme povolení. V jednom procesu."
- „Akreditovaná měření a odborné posudky pro průmyslové provozy."

**Lead paragraph — cíl (max 30 slov, 2 věty):**
> „Potřebujete měření emisí, hlukovou studii nebo EIA podklady? NATURCHEM spojuje terénní měření, výpočtové studie a dokumentaci pro úřady — vše pod jednou střechou."

**Reference teaser:** Pokud nelze použít jména klientů, použít konkrétní typ provozu + výsledek:
> „Lakovna nátěrových hmot, Jihomoravský kraj — měření VOC emisí, protokol pro krajský úřad, výsledek do 3 dnů."

---

## 3. /o-spolecnosti-naturchem

**Stav:** ✅ Copy sprint **C2** (30. 5. 2026) — hero, Kdo jsme, garance, tým, stats intro a sdílené texty přepsány dle TOV. Níže původní auditní poznámky (archiv).

### Problémy

| ID | Problém |
|----|---------|
| OS1 | Positioning statement pravděpodobně začíná „NATURCHEM je…" místo výhodou pro zákazníka |
| OS2 | Sekce „Jak pracujeme" je procesně orientovaná, ne zákazníkovsky |
| OS3 | Chybí hlas Ing. Heziny v první osobě |
| OS4 | Neověřená čísla (viz C-G3) |

### Doporučení
Přidat osobní citát Ing. Heziny jako pull-quote nebo hero quote. Přepsat stats sekci aby říkala co čísla znamenají pro zákazníka (ne jen „X zakázek" ale „X zakázek — z nichž 100 % prošlo úřední kontrolou").

---

## 4. Service pages — šablona

### Aktuální vzor intro textů

Intro texty jsou technicky přesné, ale:
- Začínají vlastnostmi firmy (ne zákazníkovým problémem)
- Jsou nad limitem 25 slov na většině stránek
- Pasivní konstrukce: „měření je prováděno", „studie zahrnuje"

### Doporučení — vzor pro přepis intro

```
[Aktivační věta — situace zákazníka nebo legislativní trigger] (max 15 slov)
[Výsledek + jak] (max 15 slov)
```

**Příklady:**

Měření emisí:
> „Legislativa ukládá provozovatelům spalovacích zdrojů pravidelné kontrolní měření. Změříme Váš zdroj, zpracujeme akreditovaný protokol a předáme výsledky příslušnému úřadu."

Hlukové studie:
> „Úřad požaduje hlukovou studii k povolení Vašeho záměru? Zpracujeme výpočtovou studii dle platné metodiky — použitelnou pro EIA, územní řízení i kolaudaci."

### Stav přepisu intro textů

| Stránka | Délka (slova) | Stav |
|---------|---------------|------|
| /mereni-emisi | ~35 | 🔲 zkrátit |
| /mereni-osvetleni | ~47 | 🔲 zkrátit (prioritní) |
| /rozptylove-studie | ~43 | 🔲 zkrátit (prioritní) |
| /mereni-hluku | ~44 | 🔲 zkrátit |
| /eia-oznameni | ~36–38 | 🔲 zkrátit |
| /odborne-posudky | ~38 | 🔲 zkrátit |
| /skoleni-chemicke-legislativy | ~42 | 🔲 zkrátit |
| /pracovni-prostredi | ~21 | ✅ OK |
| /mereni-vibraci | ~20 | ✅ OK |
| /mereni-mikroklimatu | ~30 | 🔄 na hranici |
| /ippc | ~31 | 🔄 na hranici |
| /ispop | ~25 | ✅ OK |
| /ghg | ~24 | ✅ OK |
| /provozni-rady | ~27 | ✅ OK |
| /bezpecnostni-listy | ~28 | ✅ OK |

---

## 5. /poradna — Blog články

Blog má 30+ článků. Jejich copy je pravděpodobně na dobré technické úrovni (Hezina jako zdroj), ale ověřit:

| Kritérium | Status |
|-----------|--------|
| Nadpisy odpovídají na otázku zákazníka (ne „Co je EIA" ale „Kdy potřebuji EIA?") | 🔲 auditovat |
| První věta hovoří o problému čtenáře, ne o nás | 🔲 auditovat |
| Každý článek má finální CTA výzvu | 🔲 auditovat |
| Délka 600–1200 slov (ne kratší, ne výrazně delší) | 🔲 auditovat |
| Zakázané fráze chybí | 🔲 auditovat |

**Prioritní akce:** Zkontrolovat prvních 5 nejnavštěvovanějších článků (po spuštění GA4) a opravit intro + CTA.

---

## 6. Formuláře a e-maily

### Kontaktní formulář

- Placeholder texty v polích: jsou konkrétní a nápomocné? (např. „Popište Váš provoz a co potřebujete zjistit")
- Potvrzovací e-mail: existuje? Odpovídá TOV vzoru?
- Stav: 🔲 ověřit Resend šablonu

### Error stavy a validace

- Jsou chybové zprávy v češtině a přátelské? (ne „Field required")
- Stav: 🔲 ověřit

---

## Roadmapa oprav (copy)

### Priorita 1 — Do 1 sezení

| ID | Úkol | Soubor |
|----|------|--------|
| CC1 | Zkrátit intro texty: mereni-osvetleni, rozptylove-studie, mereni-hluku, eia-oznameni | různé |
| CC2 | Homepage lead paragraph: zkrátit na max 30 slov / 2 věty | `app/page.tsx` |
| CC3 | Nahradit zakázané fráze na celém webu (grep + hromadná oprava) | celý projekt |

### Priorita 2 — Vyžaduje Hezinu

| ID | Úkol | Poznámka |
|----|------|----------|
| CC4 | Ověřit čísla: 36 let, 14 000+, 6 000+ | S Ing. Hezinou |
| CC5 | Citát/hlas Ing. Heziny pro homepage a o-spolecnosti | Napsat s Hezinou |
| CC6 | Homepage reference teaser — konkrétní příklady zakázek | S Hezinou |

### Priorita 3 — Postupně

| ID | Úkol |
|----|------|
| CC7 | Přepis intro textů zbývajících service pages na vzor „zákazníkova situace → výsledek" |
| CC8 | Blog audit: prvních 5 článků (intro + CTA) |
| CC9 | Formuláře: potvrzovací e-mail, placeholder texty, error hlášky |

---

## Copy sprint C1–C9 (implementační plán)

> **Metodika:** `/copy sprint Cx` → návrhy → schválení → `implement` → aktualizace stavu zde.  
> **Mimo scope:** `content/articles/*.md` (33 článků) = **P-COPY** (samostatný úkol).  
> **Pravidlo:** TOV §0 — faktická přesnost před stylem; copy = přeformulování, ne doplňování faktů.

| Sprint | Rozsah | Stav | Poznámka |
|--------|--------|------|----------|
| **C1** | Homepage: `page.tsx` — copy hero/pillars, odstraněn reference teaser + hero CTA + uncertain strip; loga zůstala | ✅ | 30. 5. + follow-up P5-21 (31. 5.) |
| **C2** | O společnosti, odborná garance, `guarantee-copy`, `work-process`, `team`, `nationalMessaging`, `companyStatsIntro` | ✅ | 30. 5. 2026 |
| **C3** | Akreditace, `accreditation-scope`, `accreditation-documents`, přístrojové vybavení (úvody) | ✅ akreditace | 4. 6. 2026 — stránka akreditace; úvody přístrojů částečně sitewide Vzor F |
| **C4** | Služby měření (7 slugů) — body copy, intro jen kontrola (P3-2 ✅) | 🔲 | |
| **C5** | Služby studie (5 slugů ve skupině studií; `odborne-posudky` → C6) | ✅ | 4. 6. 2026 — rozptyl + 4× `dedicated-service-pages` |
| **C6** | Služby povolování/EIA (10 slugů + přehled EIA) | ✅ | 4. 6. 2026 |
| **C7** | `service-groups`, provozy 13×, reference, typické zakázky, `seo-landings` | 🔄 | `/sluzby` skupiny + accordion + intro 4. 6. 2026; zbývá provozy, reference, seo |
| **Nav** | Megamenu / footer služby — IPPC, ISPOP, GHG bez kontextu | ✅ | 4. 6. 2026 — plné názvy v `service-megamenu`, `navigation`, `home-offer` |
| **Cross** | „Mohlo by Vás zajímat“ — provozy vs služby | 📋 | Popis provozů z `sectors.ts`; mapování v `service-sector-links.ts` |
| **C8** | `faq.ts` (styl only), `/poradna` hero | 🔲 | |
| **C9** | Kontakt, formulář, Footer, UI labely + grep QA | 🔲 | Footer copy ✅ P5-23 (tagline, labely sloupců) |
| **P-COPY** | 33× `content/articles/*.md` | 🔲 odloženo | Po dokončení C1–C9 |

### Mapování na CC položky (starší audit)

| CC | Stav | Poznámka |
|----|------|----------|
| CC1 | 🔲 | Service intro zkrácení — C4–C6 |
| CC2 | ✅ | Homepage lead P3-1 hotovo; C1 = TOV pass zbytku homepage |
| CC3 | 🔲 | C9 grep QA |
| CC4 | ❓ | Metriky ponechány; okolí v C1 |
| CC5 | 🔲 | Citát Heziny v první osobě — mimo C2 (volitelné doplnění) |
| CC6 | 🔲 | C1 reference teaser — bez jmen firem |
| CC7 | 🔲 | C4–C6 |
| CC8 | — | P-COPY (poradna články) |
| CC9 | 🔲 | C9 |

---

*Soubor: 01-copy-audit/copy-audit.md*  
*Navazuje na: 00-strategie/tone-of-voice.md, personas.md, 03-ux-audit/ux-audit-roadmapa.md*
