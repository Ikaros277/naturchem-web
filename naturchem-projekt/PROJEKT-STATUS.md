# PROJEKT STATUS — NATURCHEM web 2026

> **Účel tohoto souboru:** Master reference pro celý projekt. Kdykoli přijde nový kontext nebo konverzace, začni tady. Obsahuje všechna klíčová rozhodnutí, stav práce a co je next step.

**Poslední aktualizace:** 2026-05-25  
**Stav projektu:** Fáze 1 dokončena (strategie) → přechod na Fázi 2 (audit + design + copy)

---

## 1. O firmě

| Položka | Hodnota |
|---------|---------|
| Název | NATURCHEM, s.r.o. |
| IČO | 27504379 |
| Jednatel / odborná autorita | Ing. František Hezina |
| Telefony | +420 603 216 983 · +420 774 100 570 |
| E-mail | naturchem@naturchem.cz |
| Sídlo | Ledečská 3015, 580 01 Havlíčkův Brod |
| Laboratoř | Rudolfovská 119/57, 370 01 České Budějovice |
| Pobočka | Lesnická 1214/5, 150 00 Praha 5 |
| Živý web | https://naturchem.cz/ (stávající web, jiný od MVP) |

**Co firma dělá:** Akreditovaná měření emisí, pracovního prostředí, hluku, vibrací, osvětlení, mikroklimatu + rozptylové a hlukové studie + EIA, IPPC, ISPOP, GHG, odborné posudky, provozní řády.

**Klíčová diferenciace:** Propojují měření, studie i dokumentaci do jednoho procesu — zákazník nemusí koordinovat více dodavatelů.

---

## 2. Cíl projektu

Vytvořit **konverzní B2B web**, který:
- Přivádí poptávky po službách (měření + studie) od průmyslových provozovatelů
- Buduje autoritu přes vzdělávací obsah (`/poradna`)
- Je předán klientovi kompletně — web + brand podklady + všechna dokumentace

**Primární konverze:** Odeslání poptávkového formuláře  
**Sekundární konverze:** Telefonní kontakt

---

## 3. Klíčová rozhodnutí (odsouhlasená)

| Oblast | Rozhodnutí | Zdroj |
|--------|-----------|-------|
| Tech stack | Next.js (existující MVP, nasadit na Vercel) | Existující projekt |
| Správa obsahu | Decap CMS (`/admin`) — GitHub OAuth | README.md |
| E-mail formulář | Resend API (`RESEND_API_KEY`) | README.md |
| Hosting | Vercel | README.md |
| Barvy | Navy dominantní (`#0b1f35`), zelená akcent (`#2f6f5e`) | globals.css |
| Fonty | IBM Plex Sans (display) + Source Sans 3 (body) | layout.tsx |
| Styl rohů | Ostré (`border-radius: 0`) — institucionální charakter | globals.css |
| Oslovení | Formální „Vy" | Kolaborativní rozhodnutí |
| Tón | Odborný partner, ne prodejce. Faktická přesnost na prvním místě | Kolaborativní rozhodnutí |
| Osobní značka | Ing. Hezina = odborná autorita, NATURCHEM = firma | Kolaborativní rozhodnutí |
| Geografie | Celá ČR, pokrytí regionů zmíněno | Kolaborativní rozhodnutí |
| Priorita | Content/copy → spuštění | Kolaborativní rozhodnutí |
| WordPress | NE — klient technicky zdatný, používá Claude Code/Cursor | Kolaborativní rozhodnutí |

---

## 4. Cílové persony (všechny 4 odsouhlaseny)

| Persona | Primární potřeba | Jak najde NATURCHEM | Priorita |
|---------|-----------------|---------------------|----------|
| **Tomáš** — EHS/OŽP manažer výrobního závodu | Akreditované měření, protokol pro ČIŽP | Přímé hledání, doporučení | ★★★ |
| **Martin** — majitel menší firmy bez EHS | Poradit co objednat, přeložit legislativu | Blog → kontakt | ★★★ |
| **Lucie** — referentka úřadu/veřejný sektor | EIA podklady, autorizované studie | Doporučení, přímé hledání | ★★ |
| **Pavel** — projektant/investor záměru | Studie jako část PD nebo EIA | Doporučení, přímý kontakt | ★★ |

Detailní persony: `00-strategie/personas.md`

---

## 5. Stav dokumentů

| Dokument | Soubor | Stav |
|----------|--------|------|
| Kompetiční analýza | `00-strategie/competitive-analysis.md` | ✅ Hotovo |
| Brand manual | `00-strategie/brand-manual.md` | ✅ Hotovo (ověřeno z kódu) |
| Persony | `00-strategie/personas.md` | ✅ Hotovo (odsouhlaseny) |
| Tone of Voice | `00-strategie/tone-of-voice.md` | ✅ Hotovo v1.1 — faktická přesnost jako sekce 0 |
| Sitemap / IA | `00-strategie/sitemap.md` | ✅ Hotovo v2.0 — přepis dle MVP reality, /sluzby/ hierarchie |
| MVP Audit | `00-strategie/mvp-audit.md` | ✅ Hotovo (2026-05-25) |
| Design system | `01-design-system/design-system.md` | 🔲 Připravit |
| AI Role: CMO | `04-ai-role/cmo-role.md` | ✅ Hotovo |
| AI Role: UX | `04-ai-role/ux-role.md` | ✅ Hotovo |
| AI Role: Copy | `04-ai-role/copy-role.md` | ✅ Hotovo |
| AI Role: SEO | `04-ai-role/seo-role.md` | ✅ Hotovo |

---

## 6. MVP — stav a audit

### Co existuje (Next.js projekt)
- 14 stránek služeb (emise, hluk, EIA, IPPC, GHG, pracovní prostředí…)
- 35+ článků v `/poradna` (Markdown, Decap CMS)
- Funkční kontaktní formulář (Resend)
- `src/app/provozy-a-technologie/` — 7 oborových stránek (automotive, bioplynky…)
- Schema markup, OpenGraph, SEO metadata
- Akreditační dokumenty v `public/dokumenty/`

### MVP — výsledky auditu (2026-05-25)

**Homepage:** Solidní 3-pilířová struktura, prominentní CTA v hero. Slabina: chybí rychlý scan service karet s redundantními kontakty (jako ekome.cz).

**Měření emisí (service page):** Dobrá struktura rozsahu. Slabina: žádný inline CTA formulář uprostřed stránky — zákazník musí scrollovat na konec nebo zpět na /kontakt.

**Kontakt:** Nejsilnější stránka — 3 kontaktní cesty ihned, přehledný formulář. Slabina: formulář je níže pod foldem.

**Akreditace:** Stránka přesměrovává na `/akreditace-autorizace-dokumenty` místo dedikované trust stránky.

### Inspirace: ekome.cz
- **Hierarchie služeb:** Měření emisí → Hygienická měření → Studie a poradenství (3 pilíře)
- **Co dělají dobře:** Redundantní kontakty (telefon/mail vždy viditelné), trust signály nad foldem (loga klientů, certifikace), jasné service karty se zanořenými odkazy
- **Jak to aplikovat:** Inline CTA na každé service page, loga/certifikace blíže k hero, formulář výše na stránce

---

## 7. Struktura služeb (dle kódu + ekome.cz inspirace)

### Navržená hierarchie pro navigaci (vychází z MVP + ekome.cz)

```
Měření emisí
  ├── Kotelny a spalovací zdroje
  ├── Lakovny (VOC/TOC)
  ├── Dřevozpracující provozy (TZL)
  ├── Bioplynové stanice
  ├── Automotive
  └── Další zdroje

Hygienická měření (pracovní prostředí)
  ├── Hluk na pracovišti
  ├── Prašnost a chemické látky
  ├── Vibrace
  ├── Osvětlení
  └── Mikroklima

Studie a dokumentace
  ├── Rozptylové studie
  ├── Hlukové studie / akustické posudky
  ├── Odborné posudky
  ├── EIA a oznámení záměru
  ├── IPPC / ISPOP / GHG
  └── Provozní řády
```

---

## 8. Otevřené otázky (čekají na klienta)

- [ ] „30 let na trhu" — ověřit správnost (IČO registrováno ~2004)
- [ ] Konkrétní čísla: počet zakázek, měření, certifikátů
- [ ] Fotografie: tým, laboratoř, terénní práce
- [ ] Reference: mohou být jmenovaní klienti nebo jen typy provozů?
- [ ] Světlá varianta loga (pro tmavé pozadí) — existuje?
- [ ] GDPR / cookie lišta — řeší klient nebo my?

---

## 9. Next steps (v pořadí)

1. ✅ **Strategie** — brand, persony, TOV, kompetiční analýza
2. ✅ **TOV update** — faktická přesnost jako princip č. 1 (sekce 0)
3. ✅ **MVP audit** — zdokumentováno v `00-strategie/mvp-audit.md`
4. **Ověření metrik** — „36 let odborné činnosti", „14 000+ zakázek", „6 000+ měření" [OVĚŘIT S HEZINOU]
5. **Rozhodnutí:** Stavíme na MVP → zaměřit se na: audience karty + CTA, fold-test formuláře na mobilu, `<details>` UX
6. **Sitemap update** — aktualizovat dle skutečné MVP struktury
7. **Copy/obsah** — přepsat klíčové stránky dle TOV + nové persony
8. **Design system** — zdokumentovat CSS proměnné a komponenty (`01-design-system/design-system.md`)
9. **Spuštění** — nastavit Resend, Vercel, doménu, GA4, Search Console

---

## 10. Referenční weby

| Web | Proč sledujeme |
|-----|---------------|
| https://naturchem.cz/ | Živý web klienta — aktuální baseline, co přenést |
| https://www.ekome.cz/ | Nejlepší příklad v segmentu — struktura služeb, konverze |

---

*Soubor: naturchem-projekt/PROJEKT-STATUS.md*  
*Vždy začni zde při obnovení kontextu.*
