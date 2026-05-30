# Sitemap a informační architektura — naturchem.cz

**Verze:** 2.0  
**Datum:** 2026-05-25  
**Status:** Odsouhlaseno — čeká na implementaci (přesun adresářů v Next.js)

> Toto je **cílová struktura** — ne popis aktuálního stavu kódu.  
> MVP má service pages na rootu (`/mereni-emisi/`). Cílem je přesunout je pod `/sluzby/`.  
> Přesun udělat před spuštěním — po spuštění by vyžadoval SEO redirecty.

---

## Stromová struktura

```
naturchem.cz/
│
├── / (Homepage)
│
├── /sluzby/ (Přehled služeb — rozcestník)
│   │
│   ├── ── Měření ──
│   ├── /sluzby/mereni-emisi/
│   ├── /sluzby/pracovni-prostredi/
│   ├── /sluzby/mereni-hluku/
│   ├── /sluzby/mereni-mikroklimatu/
│   ├── /sluzby/mereni-osvetleni/
│   ├── /sluzby/mereni-vibraci/
│   ├── /sluzby/chemicke-latky/
│   │
│   ├── ── Studie a výpočty ──
│   ├── /sluzby/rozptylove-studie/
│   ├── /sluzby/hlukove-studie/
│   ├── /sluzby/modelove-vypocty/
│   ├── /sluzby/akusticke-posudky/
│   │
│   └── ── Dokumentace a povolení ──
│       ├── /sluzby/eia-posudky-poradenstvi/
│       ├── /sluzby/eia-oznameni-zameru/
│       ├── /sluzby/zjistovaci-rizeni-eia/
│       ├── /sluzby/ippc-integrovana-povoleni/
│       ├── /sluzby/ispop/
│       ├── /sluzby/ghg-overovani/
│       ├── /sluzby/odborne-posudky/
│       ├── /sluzby/provozni-rady/
│       ├── /sluzby/povoleni-provozu/
│       ├── /sluzby/bezpecnostni-listy/
│       ├── /sluzby/skoleni-chemicke-legislativy/
│       ├── /sluzby/imisni-dopady/
│       └── /sluzby/technicke-prilohy/
│
├── /provozy-a-technologie/ (Oborové vstupní stránky)
│   ├── /provozy-a-technologie/automotive/
│   ├── /provozy-a-technologie/lakovny/
│   ├── /provozy-a-technologie/kotelny/
│   ├── /provozy-a-technologie/bioplyn-biometan/
│   ├── /provozy-a-technologie/drevozpracujici/
│   ├── /provozy-a-technologie/odpady-recyklace/
│   ├── /provozy-a-technologie/sklarske-provozy/
│   ├── /provozy-a-technologie/svarovny/
│   ├── /provozy-a-technologie/tepelna-cerpadla-vzt/
│   └── /provozy-a-technologie/zemedelske-provozy/
│
├── /poradna/ (Blog — vzdělávací obsah, 35+ článků)
│   └── /poradna/[slug]/
│
├── /o-spolecnosti-naturchem/ (O nás — s odkazy na /odborna-garance/ a /pristrojove-vybaveni/)
├── /akreditace-autorizace-dokumenty/ (Akreditace a autorizace)
├── /typicke-zakazky/ (Ukázky typů zakázek — orientační obsah pro nové zákazníky)
├── /reference/ (Konkrétní klienti a projekty — trust signál, odbornost)
├── /faq/
│
├── /odborna-garance/      (samostatná, odkaz z /o-spolecnosti-naturchem/)
├── /pristrojove-vybaveni/ (samostatná, odkaz z /o-spolecnosti-naturchem/)
│
└── /kontakt/
```

---

## Přehled změn oproti MVP kódu

### Přesunout (přejmenovat adresáře v `src/app/`)

| Aktuální cesta | Nová cesta | Poznámka |
|----------------|------------|----------|
| `src/app/mereni-emisi/` | `src/app/sluzby/mereni-emisi/` | |
| `src/app/pracovni-prostredi/` | `src/app/sluzby/pracovni-prostredi/` | |
| `src/app/mereni-hluku-hlukove-studie/` | `src/app/sluzby/mereni-hluku/` | slug zkrácen |
| `src/app/mereni-mikroklimatu/` | `src/app/sluzby/mereni-mikroklimatu/` | |
| `src/app/mereni-osvetleni/` | `src/app/sluzby/mereni-osvetleni/` | |
| `src/app/mereni-vibraci/` | `src/app/sluzby/mereni-vibraci/` | |
| `src/app/chemicke-latky-v-provozu/` | `src/app/sluzby/chemicke-latky/` | slug zkrácen |
| `src/app/rozptylove-studie/` | `src/app/sluzby/rozptylove-studie/` | |
| `src/app/hlukove-studie/` | `src/app/sluzby/hlukove-studie/` | |
| `src/app/modelove-vypocty/` | `src/app/sluzby/modelove-vypocty/` | |
| `src/app/akusticke-posudky/` | `src/app/sluzby/akusticke-posudky/` | |
| `src/app/eia-posudky-poradenstvi/` | `src/app/sluzby/eia-posudky-poradenstvi/` | |
| `src/app/eia-oznameni-zameru/` | `src/app/sluzby/eia-oznameni-zameru/` | |
| `src/app/zjistovaci-rizeni-eia/` | `src/app/sluzby/zjistovaci-rizeni-eia/` | |
| `src/app/ippc-integrovana-povoleni/` | `src/app/sluzby/ippc-integrovana-povoleni/` | |
| `src/app/ispop-souhrnna-provozni-evidence/` | `src/app/sluzby/ispop/` | slug zkrácen |
| `src/app/ghg-overovani-emisi-sklenikovych-plynu/` | `src/app/sluzby/ghg-overovani/` | slug zkrácen |
| `src/app/odborne-posudky/` | `src/app/sluzby/odborne-posudky/` | |
| `src/app/provozni-rady/` | `src/app/sluzby/provozni-rady/` | |
| `src/app/povoleni-provozu-zdroje/` | `src/app/sluzby/povoleni-provozu/` | slug zkrácen |
| `src/app/bezpecnostni-listy/` | `src/app/sluzby/bezpecnostni-listy/` | |
| `src/app/skoleni-chemicke-legislativy/` | `src/app/sluzby/skoleni-chemicke-legislativy/` | |
| `src/app/imisni-a-hlukove-dopady-zameru/` | `src/app/sluzby/imisni-dopady/` | slug zkrácen |
| `src/app/technicke-prilohy-pro-investory/` | `src/app/sluzby/technicke-prilohy/` | slug zkrácen |

### Zachovat přesměrování (permanentRedirect)
MVP má tyto redirecty — zachovat nebo zkontrolovat při přesunu:
- `/o-nas/` → `/o-spolecnosti-naturchem/`
- `/spolecnost/` → `/o-spolecnosti-naturchem/`
- `/redakce/` → `/poradna/`
- `/akreditace-a-autorizace/` → `/akreditace-autorizace-dokumenty/`
- `/provozy-a-technologie/kotelny-spalovaci-zdroje/` → `/provozy-a-technologie/kotelny/`
- `/provozy-a-technologie/recyklace-odpady/` → `/provozy-a-technologie/odpady-recyklace/`
- Přidat nové redirecty ze starých slugů: `/mereni-emisi/` → `/sluzby/mereni-emisi/` atd.

---

## Konverzní cesty podle persony

### Tomáš — EHS/OŽP manažer
```
Google: „měření emisí akreditovaná laboratoř"
→ /sluzby/mereni-emisi/
→ Inline CTA formulář [cíl implementace] nebo CTA → /kontakt/?service=mereni-emisi
```

### Martin — majitel firmy bez EHS
```
Google: „kdy potřebuji EIA" nebo „co je emisní limit"
→ /poradna/[článek]
→ CTA na konci článku → /kontakt/?service=...
```

### Lucie — referentka úřadu / veřejný sektor
```
Doporučení nebo Google: „EIA oznámení záměru"
→ /sluzby/eia-oznameni-zameru/ nebo /sluzby/eia-posudky-poradenstvi/
→ Telefon nebo formulář
```

### Pavel — projektant / investor
```
Doporučení nebo Google: „rozptylová studie pro EIA"
→ /sluzby/rozptylove-studie/
→ Přímý kontakt (telefon)
```

---

## Navigace (návrh struktury)

```
[Logo]  Služby ▾  Provozy ▾  Poradna  O nás  [Poptávka — tlačítko]
```

**Dropdown Služby:**
- Měření emisí
- Pracovní prostředí
- Hluk a akustika
- Rozptylové studie
- EIA a posudky
- IPPC / ISPOP / GHG
- → Zobrazit všechny služby

**Dropdown Provozy:**
- Automotive · Lakovny · Kotelny · Bioplynové stanice
- Dřevozpracující · Sklárenské · Svařovny
- → Zobrazit vše

---

---

*Soubor: 00-strategie/sitemap.md*  
*Projekt: NATURCHEM, s.r.o. — web 2026*  
*Navazuje na: PROJEKT-STATUS.md, personas.md, mvp-audit.md*
