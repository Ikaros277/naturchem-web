# ROADMAPA — naturchem.cz 2026

> **Účel:** Jediná pravda o stavu celého projektu. Aktualizovat vždy na konci sezení nebo po dokončení úkolu.  
> **Jak číst:** ✅ Hotovo · 🔄 Probíhá · 🔲 Čeká · ❓ Čeká na klienta

**Poslední aktualizace:** 2026-06-04  
**Aktuální fáze:** Sitewide UI vzory hotové → copy sprint C4+, P5-B fotky, launch checklist

---

## Přehled stavu oblastí

| Oblast | Stav | Poznámka |
|--------|------|----------|
| UX opravy | 🔄 ~99 % | P5 + homepage trust order + spacing tight; P5-B fotky čekají |
| Copy a obsah | 🔄 ~40 % | C1–C3 hotovo (homepage, O společnosti, akreditace); zbývá C4–C9 + P-COPY |
| Grafický audit | 🔄 Audit hotov | Diagnóza v `06-graficky-audit/`; implementace sloučena do P5 |
| SEO a analytika | 🔄 Zahájeno | Meta audit S11 hotov; GA4/GSC čeká na produkci |
| Launch checklist | 🔲 Nezahájeno | Resend netestován na produkci, GDPR neřešeno |

---

## Oblast 1: UX opravy

### P1 — Kritické (přímý vliv na konverze)

| ID | Úkol | Stav | Obtížnost |
|----|------|------|-----------|
| P1-1 | ServicePage.tsx: sjednotit 3 „related" sekce na konci na 1 sekci, max 3 karty | ✅ | — |
| P1-2 | ServicePage.tsx: accordion detailGroups — ponechat max 2 skupiny (Příklady + Chyby), zbytek smazat | ✅ | — |
| P1-3 | Homepage: smazat sekci „Pro koho pracujeme" (6 karet) | ✅ | — |
| P1-4 | Homepage: smazat sekci „Jak probíhá zakázka" nebo přesunout za reference teaser | ✅ | — |
| P1-5 | /o-spolecnosti-naturchem: přidat primární CTA tlačítko na konec stránky | ✅ | — |
| P1-6 | /kontakt: odstranit redundantní telefon/email, smazat „Rychlé poptávkové cesty" | ✅ | — |
| P1-7 | Hlavní menu: breakpoint 1280 px + dropdown „Další" (1024–1279 px) | ✅ | Nízká |

### P2 — Vysoká priorita (UX a důvěryhodnost)

| ID | Úkol | Stav | Obtížnost |
|----|------|------|-----------|
| P2-1 | /poradna: implementovat funkční filtrování (filter pills) | ✅ | — |
| P2-2 | /poradna: smazat sekci „Chystaná témata" | ✅ | — |
| P2-3 | /reference: sekce zákazníků s logy + příklady z praxe (přepracováno) | ✅ | — |
| P2-4 | /reference: 3 CTA → 1 primární | ✅ | — |
| P2-5 | /akreditace: přidat CTA (přidáno), redukovat z 7 sekcí na 4 | ✅ | — |
| P2-6 | /odborna-garance: obsah integrován do /o-spolecnosti, stránka a redirect odstraněny | ✅ | — |
| P2-7 | /o-spolecnosti-naturchem: redukovat z 10 sekcí na 6, smazat duplikáty | ✅ | — |

### P3 — Střední priorita (copy a drobné UX)

| ID | Úkol | Stav | Obtížnost |
|----|------|------|-----------|
| P3-1 | Homepage hero lead: zkrátit na max 2 věty / 30 slov | ✅ | Nízká |
| P3-2 | Zkrátit intro texty service pages (popisný styl, max 25 slov) | ✅ | Nízká |
| P3-3 | /pristrojove-vybaveni: přidat počty položek do nadpisů skupin | ✅ | — |
| P3-4 | /faq: přidat CTA strip pod FAQ obsah | ✅ | — |
| P3-5 | /typicke-zakazky: přidat intro text + smazat „Kam dál" sekci | ✅ | — |
| P3-6 | /skoleni-chemicke-legislativy: zkrátit intro + přidat CTA strip | ✅ | — |
| P3-7 | Homepage reference teaser: nahradit generické příklady konkrétními | ❓ čeká na content | Střední |
| P3-8 | Homepage: odstranit sekci Odborná poradna (3 články), loga ponechat | ✅ | Nízká |

### P4 — Technická hygiena

| ID | Úkol | Stav | Obtížnost |
|----|------|------|-----------|
| P4-1 | /skoleni: migrace na ServicePage komponent | ✅ | — |
| P4-2 | Sitemap: ověřit vyloučení redirect stránek | ✅ | — |
| P4-3 | Přidat faqCategoryId: ispop, ghg, bezpecnostni-listy, chemicke-latky | ✅ | V `dedicated-service-pages.ts` |
| P4-4 | /provozy-a-technologie: přesunout „Nejste si jistí?" checklist výše | ✅ | — |
| P4-5 | /eia-posudky: opravit neviditelnou 5. položku scope | ✅ | — |
| P4-6 | Univerzální PageCtaStrip — sjednocení konverzních pásů napříč webem | ✅ | — |

### P5 — Vizuální scanovatelnost

_Detail: `03-ux-audit/ux-audit-roadmapa.md` (G6, P5) + reference `06-graficky-audit/graficky-audit.md`_

| ID | Úkol | Stav | Obtížnost |
|----|------|------|-----------|
| P5-1 | Homepage hero: stock foto + navy overlay | ✅ | Střední |
| P5-2 | Service page heroes: kategorie-specifické pozadí | ✅ | Střední |
| P5-3 | Stats band: velká typografie + ikony u čísel | ✅ | Nízká |
| P5-4 | Accordion nadpisy: ikony u skupin | ✅ | Nízká |
| P5-5 | Vizuální rytmus sekcí (white / muted / navy) | ✅ | Nízká |
| P5-6 | Ikony: audit zdrojů, sjednotit Lucide | ✅ | Střední |
| P5-7 | „Jak probíhá zakázka": vizuální timeline s ikonami | ✅ | Střední |
| P5-8 | OG image šablony (1200×630) | ✅ | Střední |
| P5-9 | /o-spolecnosti tým: placeholder design bez fotek | ✅ | Nízká |
| P5-10 | /pristrojove-vybaveni: ikony ke kategoriím | ✅ | Nízká |
| P5-11 | Photo hero na všech hlavních stránkách (PageHeroBand) | ✅ | Střední |
| P5-12 | Homepage hero: metriky dolů do USP sekce (ExperienceStats) | ✅ | Nízká |
| P5-13 | Homepage: trust lišta hned pod hero + kompaktní stats bez nadpisu | ✅ | Nízká |
| P5-14 | Mobilní homepage hero: kratší eyebrow + lead | ✅ | Nízká |
| P5-15 | Mobilní homepage: skrýt trust band | ✅ | Nízká |
| P5-16 | Mobilní homepage stats: kompaktní 3 sloupce s ikonami | ✅ | Nízká |
| P5-17 | Mobilní fold follow-up (padding po zkrácení hero copy) | ✅ | Nízká |
| P5-18 | Homepage offer karty: nadpis vedle ikony (card-head) | ✅ | Nízká |
| P5-21 | Homepage hero: vrstvené copy (H1 max 8 slov, lead bez zdvojení) | ✅ | Nízká |
| P5-22 | Hero pravidla zapsána do ux-role + copy-role | ✅ | Nízká |
| P5-23 | Redesign patičky — jeden responsive grid, navigace + kontakt, akreditace jako odkaz | ✅ | Střední |
| P5-B1–B4 | Reálné fotografie (hero, tým, přístroje, Hezina) | ❓ | Po dodání fotek |

### P6 — Layout a spacing

| ID | Úkol | Stav | Obtížnost |
|----|------|------|-----------|
| P6-1 | Globální vertikální padding sekcí (−50 %, token `--section-padding-y`) | ✅ | Nízká |
| P6-2 | Sjednocená min-height hero pásu (`PageHeroBand` standard / service) | ✅ | Nízká |
| P6-3 | Oprava `.container` — centrování obsahu (regrese margin) | ✅ | Nízká |
| P6-4 | Hero flush pod hlavičkou — bez padding-top u stránek s `PageHeroBand` | ✅ | Nízká |

**Doporučené pořadí:** Sprint 6 → P5-4, P5-5, P5-6 · Sprint 7 → P5-1, P5-2, P5-3 · Sprint 8 → P5-7–P5-10

---

## Oblast 2: Copy a obsah

| Úkol | Stav | Poznámka |
|------|------|----------|
| Homepage hero: přepsat lead paragraph (zkrátit + zpřesnit) | ✅ | P3-1 + P5-21 (vrstvené copy 31. 5.) |
| `/o-spolecnosti-naturchem`: přepis dle TOV | ✅ | Copy sprint C2, 30. 5. 2026 |
| `/akreditace-autorizace-dokumenty`: přepis dle TOV | ✅ | Copy sprint C3, 4. 6. 2026 |
| Service pages: intro texty (popisný styl, max 25 slov) | ✅ | 24 stránek + školení |
| Ověřit metriky s Hezinou: „36 let odborné činnosti", „14 000+ zakázek", „6 000+ měření" | ✅ | Ověřeno s Hezinou 31. 5. 2026 |
| Homepage: reference teaser — konkrétní příklady (Škoda Auto, ČEZ apod.) | ❓ | Závisí na souhlasu klienta |
| `/typicke-zakazky`: úvodní text a sekční copy | ✅ | `typicke-zakazky-content.ts`, 4. 6. 2026 |
| Fotografie: tým, laboratoř, terénní práce | ❓ | OVĚŘIT — existují fotky? |

---

## Oblast 3: Grafický audit

> **Implementační úkoly jsou v P5 (Oblast 1).** Tato sekce = reference + checklist před spuštěním.

| Úkol | Stav | Poznámka |
|------|------|----------|
| Vizuální audit webu | ✅ | Diagnóza v `06-graficky-audit/graficky-audit.md` (2026-05-30) |
| Loga zákazníků (reference) | ✅ | 19 log, grayscale + hover |
| Implementace doporučení | 🔲 | Viz P5-1 až P5-10 v Oblasti 1 |
| Logo: světlá varianta pro tmavé pozadí | ❓ | OVĚŘIT S HEZINOU |

**Checklist před spuštěním (grafika):**
- [ ] Favicon — kvalita na mobilech a retina
- [ ] OG image — relevantní (1200×630px) → P5-8
- [ ] Homepage hero — vizuální prvek, ne jen gradient → P5-1
- [ ] Všechny obrázky mají rozměry (prevence CLS)
- [ ] Next.js `<Image>` pro optimalizaci

---

## Oblast 4: SEO a analytika

| Úkol | Stav | Poznámka |
|------|------|----------|
| Google Analytics 4: nastavení + ověření | 🔲 | |
| Google Search Console: ověření domény, odesílání sitemapy | 🔲 | |
| Sitemap.xml: finální ověření (kanonické URL, žádné redirecty) | ✅ | Opraveno sprint 3 |
| Robots.txt: ověřit nastavení | 🔲 | |
| Technické SEO: Core Web Vitals, PageSpeed (Lighthouse audit) | 🔲 | |
| Strukturovaná data (JSON-LD): ověřit pomocí Google Rich Results Test | 🔲 | Data jsou implementována |
| Klíčová slova: ověřit meta title/description na klíčových stránkách | ✅ | `05-seo/meta-audit-sprint11.md` |
| Interní prolinkování: audit (zejm. poradna ↔ service pages) | ✅ | S11 — `poradna-service-links.ts` |

---

## Oblast 5: Launch checklist

| Úkol | Stav | Poznámka |
|------|------|----------|
| Google Analytics 4: nasazení na produkci + ověření sběru dat | 🔲 | Viz také Oblast 4; měřicí ID v env, test po DNS na naturchem.cz |
| Resend API: otestovat odesílání formuláře na produkci | 🔲 | `RESEND_API_KEY` v env |
| Formulář: ověřit doručování emailů na naturchem@naturchem.cz | 🔲 | |
| Vercel: nastavení produkčního prostředí a env proměnných | 🔲 | |
| Doména naturchem.cz: nasměrování na Vercel (DNS) | 🔲 | Živý web zatím na vercel subdoméně |
| GDPR / cookie lišta: řeší klient nebo my? | ❓ | ROZHODNOUT |
| 404 stránka: existuje a vypadá dobře? | 🔲 | |
| Finální QA: projít celý web na desktopu i mobilu před spuštěním | 🔲 | |
| Předání klientovi: web + všechna dokumentace + přístupy (Vercel, GitHub, Decap CMS) | 🔲 | Závěrečný krok |

---

## Otevřené otázky (čeká na Hezinu)

| Otázka | Oblast | Priorita |
|--------|--------|----------|
| Fotografie: tým, laboratoř, terénní práce — existují? | Grafika | Střední |
| Reference: mohou být zákazníci jmenovaní, nebo jen anonymně? | Copy | Střední |
| Světlá varianta loga (pro tmavé pozadí) | Grafika | Střední |
| GDPR / cookie lišta — řeší klient nebo my? | Launch | Střední |

---

## Sprint log (co bylo kdy uděláno)

| Datum | Sprint | Hlavní výstupy |
|-------|--------|----------------|
| 25.–26. 5. | Zahájení | Projekt rozběhán, UX audit, roadmapa, brand dokumenty |
| 29. 5. | Sprint 1–3 | URL /sluzby/ hierarchie, funkční filtry /poradna, redukce obsahu 4 stránek, 10 strukturálních oprav |
| 30. 5. | Sprint 4 | Designový systém (ghost buttony), FAQ redesign, přístrojové vybavení statické, Reference — loga 19 zákazníků s prokliky |
| 30. 5. | P1 + P2-5 | Ověření P1, úklid mrtvých dat služeb, akreditace 7→4 sekce, ROADMAPA sync |
| 30. 5. | P3-1 + P3-2 | Popisný styl intro textů — 24 service pages, homepage hero, školení |
| 30. 5. | P3-6 + CTA | PageCtaStrip komponenta, sjednocení CTA na 14+ stránkách, intro školení zkráceno |
| 30. 5. | P5 definice | UX audit doplněn o G6 + P5, grafický audit sloučen do UX tracku, `/ux` příkaz |
| 30. 5. | Sprint 6 | P5-4 accordion ikony, P5-5 section-surface rytmus (homepage + o-spolecnosti), P5-6 ServiceIcon variant + tokeny |
| 30. 5. | Sprint 7 | P5-1/P5-2 stock hero (HeroPhoto), P5-3 stats band s ikonami |
| 30. 5. | Sprint 8 | P5-7 timeline, P5-8 OG šablony, P5-9 tým avatary |
| 30. 5. | Sprint 9 | P5-11 PageHeroBand na všech stránkách, P5-12 homepage USP refactor |
| 30. 5. | Sprint 10 | P5-13 trust order + kompaktní stats, P3-8 homepage trim, P6-1 spacing, docs v gitu |
| 30. 5. | Sprint 11 | Meta audit, poradna↔služby prolinkování, P4-1/P4-3/P4-4 |
| 30. 5. | P6-2 | Sjednocená výška hero pásu (standard / service variant) |
| 30. 5. | Sprint 12 | P6-3/P6-4 hero layout fix, P1-7 responzivní menu (Další) |
| 31. 5. | Sprint 13 | P5-14–16 mobilní homepage fold — skrytý trust band, inline stats, kratší hero |
| 31. 5. | P5-18 | Offer karty homepage — nadpis vedle ikony (card-head) |
| 31. 5. | P2-6 + metriky | /odborna-garance odstraněna (obsah v O společnosti), metriky ověřeny s Hezinou |
| 31. 5. | P5-23 | Redesign patičky — 4 zóny, footer-nav.ts, desktop navigace + kontakt |
| 31. 5. | P5-17 | Mobilní fold follow-up — padding hero/stats/offer po P5-21 |
| 30. 5. | Copy C1–C2 | Homepage TOV; O společnosti + sdílené texty (garance, tým, stats intro) |
| 4. 6. | Copy C3 | Akreditace — hero lead, benefity, autorizace, download karty |
| 4. 6. | Sitewide vzory | UI vzory A–F na informačních stránkách; mezery sekcí = standard Reference |
| 4. 6. | Copy C7 | `/sluzby`, provozy, reference — hotovo |
| — | **Po odevzdání webu** | **SEO landing pages** (7× `seo-landings.ts`) — samostatný projekt na přání klienta; technicky nasazeno, copy sprint odložen |

---

*Soubor: naturchem-projekt/ROADMAPA.md*  
*Aktualizovat vždy na konci sezení. Pro rychlý přehled použij `/status`.*
