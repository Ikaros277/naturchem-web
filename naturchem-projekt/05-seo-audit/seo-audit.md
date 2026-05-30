# SEO Audit — naturchem.cz
**Datum:** 2026-05-30  
**Rozsah:** Technické SEO + on-page SEO + content SEO + interní prolinkování  
**Aktuální stav webu:** MVP na Vercel, doména dosud nesměrována

---

## Souhrnná diagnóza

Web má **solidní technický základ** (Next.js, schema markup, sitemap, kanonické URL), ale trpí třemi problémy:

1. **Analytics nejsou spuštěny** — nemáme žádná data o návštěvnosti, klíčových slovech ani chování uživatelů.
2. **Meta tituly a popisy jsou neoptimalizované** — pravděpodobně generické nebo prázdné.
3. **Interní prolinkování je slabé** — blog (poradna) nepropojuje na relevantní service pages, čímž ztrácí SEO hodnotu.

---

## 1. Technické SEO

### 1.1 Základní technické předpoklady

| Prvek | Status | Poznámka |
|-------|--------|----------|
| HTTPS | ✅ | Vercel zajišťuje automaticky |
| Rychlost načítání (Core Web Vitals) | 🔲 neměřeno | Spustit Lighthouse po nasazení |
| Mobile-first indexování | 🔲 ověřit | Google indexuje mobilní verzi jako primární |
| Sitemap.xml | ✅ | Opravena (sprint 3) — kanonické URL, bez redirectů |
| Robots.txt | 🔲 ověřit | Existuje? Je správně nastaven? |
| Kanonické URL | ✅ | /sluzby/ hierarchie zavedena, 301 redirecty funkční |
| Strukturovaná data (JSON-LD) | ✅ | Implementována na všech stránkách |
| Open Graph meta | 🔲 ověřit | Existují? Jsou relevantní obrázky? |
| Favicon | 🔲 ověřit | Kvalita na mobilech a retina? |

### 1.2 Core Web Vitals — co sledovat po spuštění

| Metrika | Optimum | Typické problémy v Next.js |
|---------|---------|--------------------------|
| LCP (Largest Contentful Paint) | < 2.5s | Pomalé načítání hero obrázku nebo fontu |
| CLS (Cumulative Layout Shift) | < 0.1 | Obrázky bez definovaných rozměrů, FOIT |
| INP (Interaction to Next Paint) | < 200ms | Těžké klientské komponenty |

**Akce:** Spustit `next build` + Lighthouse audit ihned po nasazení na produkci.

### 1.3 Indexace

- Ověřit v Search Console, které URL Google indexuje
- Zkontrolovat, že Vercel preview URL (web-naturchem.vercel.app) je v robots.txt odblokovaná — nebo že výsledky nejsou duplikovány
- Po nasazení na naturchem.cz: odeslat sitemap do Search Console

---

## 2. On-page SEO

### 2.1 Meta tituly — vzor

Správný vzor pro meta title v B2B odborných službách:
```
[Primární klíčové slovo] | [Diferenciátor] | NATURCHEM
```

Délka: 50–60 znaků (Google zobrazí max. ~580px šířky)

### 2.2 Přehled klíčových stránek

| Stránka | Primární klíčové slovo | Doporučený title |
|---------|----------------------|-----------------|
| Homepage | měření emisí, ekologické poradenství | Měření emisí a ekologické studie pro průmysl \| NATURCHEM |
| /mereni-emisi | měření emisí ze stacionárních zdrojů | Měření emisí ze stacionárních zdrojů \| Akreditovaná laboratoř \| NATURCHEM |
| /hlukove-studie | hluková studie | Hluková studie pro povolení provozu \| NATURCHEM |
| /rozptylove-studie | rozptylová studie | Rozptylová studie záměru a provozu \| NATURCHEM |
| /eia-oznameni-zameru | EIA oznámení záměru | EIA — oznámení záměru a zjišťovací řízení \| NATURCHEM |
| /pracovni-prostredi | měření pracovního prostředí | Měření pracovního prostředí — hluk, prach, chemie \| NATURCHEM |
| /o-spolecnosti-naturchem | NATURCHEM, ekologická firma | O firmě NATURCHEM — akreditovaná měření a studie |
| /akreditace-autorizace-dokumenty | akreditace ČIA, autorizace MŽP | Akreditace ČIA a autorizace MŽP \| NATURCHEM |
| /poradna | ekologická poradna, emise zákon | Odborná poradna — emise, hluk, EIA a legislativa \| NATURCHEM |

**Stav všech meta titulů:** 🔲 zkontrolovat a doplnit

### 2.3 Meta descriptions

Délka: 140–155 znaků. Obsahují CTA. Popisují co zákazník dostane, ne kdo jsme.

**Vzor:**
> „Potřebujete akreditované měření emisí? Zpracujeme protokol pro ČIŽP nebo krajský úřad do 5 pracovních dní. Zavolejte nebo pošlete podklady k posouzení."

**Stav:** 🔲 všechny meta descriptions ověřit a přepsat

### 2.4 Struktura nadpisů (H1–H3)

| Požadavek | Status |
|-----------|--------|
| Každá stránka má právě 1 H1 | 🔲 ověřit |
| H1 obsahuje primární klíčové slovo | 🔲 ověřit |
| H2 jsou logickými sekcemi (ne dekorativní) | 🔲 ověřit |
| H3 jsou podsekce H2 | 🔲 ověřit |

### 2.5 ALT texty obrázků

- Zákaznická loga: mají ALT text s názvem firmy?
- Ikony: dekorativní ikony by měly `alt=""`, informační ikony potřebují popis
- **Stav:** 🔲 ověřit po přidání vizuálního obsahu

---

## 3. Content SEO — klíčová slova

### 3.1 Primární keyword clusters (B2B průmysl)

Web by měl cílit na dvě skupiny dotazů:

**Skupina A — transakční (zákazník hledá dodavatele)**
- měření emisí [kraj/typ zdroje]
- hluková studie cena
- rozptylová studie EIA
- akreditovaná laboratoř emise
- IPPC povolení poradenství
- EIA konzultant

**Skupina B — informační (zákazník se vzdělává → poradna)**
- kdy je povinné měření emisí
- co potřebuji pro EIA
- hluková studie jak probíhá
- emisní limit kotelna
- ČIŽP kontrola měření

### 3.2 Klíčová slova — aktuální pokrytí

| Keyword cluster | Pokrytí webu | Stav |
|----------------|-------------|------|
| Měření emisí | /mereni-emisi + 6 sectorových stránek | ✅ dobré |
| Hluk a hluková studie | /mereni-hluku + /hlukove-studie + /akusticke-posudky | ✅ dobré |
| EIA a oznámení | /eia-oznameni-zameru + /zjistovaci-rizeni | ✅ dobré |
| Pracovní prostředí | /pracovni-prostredi + dedikované stránky | ✅ dobré |
| Rozptylová studie | /rozptylove-studie | 🔄 OK, ale tenká stránka |
| IPPC / ISPOP | /ippc + /ispop | 🔄 stránky existují, obsah ověřit |
| GHG ověřování | /ghg | 🔲 pravděpodobně tenká stránka |
| Provozní řád | /provozni-rady | 🔄 OK |
| Chemické látky | /chemicke-latky-v-provozu, /bezpecnostni-listy | 🔲 ověřit hloubku obsahu |

### 3.3 Blog jako SEO motor

Poradna má 30+ článků — to je silný SEO potenciál. Klíč je propojení:

```
Článek v /poradna (informační dotaz) 
  → interní odkaz na relevantní service page (transakční)
  → zákazník konvertuje
```

Tento tok pravděpodobně **chybí nebo je slabý** — viz sekce 4.

---

## 4. Interní prolinkování

### 4.1 Aktuální stav

Interní prolinkování je nejslabším místem content SEO:

- Blog články pravděpodobně nemají inline CTA odkazující na relevantní service pages
- Service pages odkazují na sebe navzájem přes „related" sekce (ty budou redukovány v UX sprintu)
- Chybí „breadcrumb trail" propojující homepage → kategorie → služba

### 4.2 Doporučená pravidla pro interní prolinkování

**Každý blog článek musí:**
1. Obsahovat min. 1 inline odkaz na nejrelevantnější service page
2. Zakončit CTA odkazující na service page nebo formulář

**Každá service page musí:**
1. Mít odkaz na 1–2 nejrelevantnější blog články z poradny (jako „Doporučené čtení")

**Příklad správného toku:**
> Článek „Kdy je povinné měření emisí ze spalovacích zdrojů?" 
> → inline: „Akreditované měření emisí pro Váš zdroj zajistíme…" [odkaz na /mereni-emisi]
> → závěrečné CTA: „Nejste si jisti, zda Váš zdroj měřit musíte? → Pošlete nám podklady"

### 4.3 Akce

| ID | Úkol | Priorita |
|----|------|----------|
| SEO-IL1 | Audit: zkontrolovat 10 nejpopulárnějších článků — mají odkaz na service page? | Vysoká |
| SEO-IL2 | Přidat inline CTA do každého článku (šablona v Decap CMS) | Vysoká |
| SEO-IL3 | Na každé service page přidat sekci „Doporučené čtení" (2–3 relevantní články) | Střední |

---

## 5. Analytics a měření

### 5.1 Co nastavit před spuštěním

| Nástroj | Účel | Stav |
|---------|------|------|
| Google Analytics 4 | Návštěvnost, konverze, chování | 🔲 Nenastaveno |
| Google Search Console | Klíčová slova, indexace, chyby | 🔲 Nenastaveno |
| Vercel Analytics | Core Web Vitals v reálném provozu | 🔲 Aktivovat (zdarma v Vercel) |

### 5.2 Konverze — co sledovat v GA4

| Událost | Jak sledovat |
|---------|-------------|
| Odeslání formuláře | `form_submit` event na /kontakt |
| Kliknutí na telefon | `click` event s `outbound_link` |
| Kliknutí na email | `click` event s `outbound_link` |
| Stažení dokumentu (PDF) | `file_download` event |
| Přechod na klíčovou stránku | `page_view` s segment filtrací |

### 5.3 Search Console — po nasazení domény

1. Přidat a ověřit vlastnictví naturchem.cz
2. Odeslat sitemap.xml
3. Zkontrolovat Coverage report — žádné chyby indexace
4. Po 3 měsících: zkontrolovat Performance report a identifikovat top klíčová slova

---

## Roadmapa oprav (SEO)

### Před spuštěním (blokující)

| ID | Úkol |
|----|------|
| SEO-P1 | Google Analytics 4 — implementace a testování |
| SEO-P2 | Google Search Console — ověření domény + odeslání sitemapy |
| SEO-P3 | Robots.txt — ověřit existenci a správnost |
| SEO-P4 | Meta tituly — napsat a doplnit pro všechny klíčové stránky |
| SEO-P5 | Meta descriptions — napsat pro klíčové stránky (min. homepage + top 5 service pages) |

### Po spuštění (do 1 měsíce)

| ID | Úkol |
|----|------|
| SEO-P6 | Lighthouse audit — Core Web Vitals na produkci |
| SEO-P7 | Rich Results Test — ověřit schema markup (JSON-LD) |
| SEO-P8 | Blog → service pages: přidat inline CTA do 10 nejrelevantnějších článků |
| SEO-P9 | ALT texty — ověřit po přidání vizuálního obsahu |
| SEO-P10 | H1 audit — ověřit struktura nadpisů na všech stránkách |

### Průběžně (3+ měsíce po spuštění)

| ID | Úkol |
|----|------|
| SEO-P11 | Search Console: identifikovat klíčová slova s impressions ale nízkým CTR → opravit meta tituly |
| SEO-P12 | Identifikovat articles s vysokým traffic → přidat inline CTA + propojení |
| SEO-P13 | Nové blog články dle vyhledávaných dotazů (keyword gap analysis) |

---

*Soubor: 05-seo-audit/seo-audit.md*  
*Navazuje na: 04-ai-role/seo-role.md, 00-strategie/sitemap.md, 03-ux-audit/ux-audit-roadmapa.md*
