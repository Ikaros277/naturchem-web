# Registr SEO a konverzních experimentů

> Interní provozní dokument. Aktualizovat podle živého webu, GSC a GA4. Starší projektové roadmapy mohou být neaktuální.

## UX-2026-09-22 — lokální B2B úpravy a obnovení chatu

Stav aktualizovaný 23. 9. 2026: připraveno lokálně ve větvi `codex/b2b-quality-2026-09-22`, nově na základu `545ba57` se zrychlením Cursoru. Veřejný produkční snapshot i vzdálený GitHub main při kontrole stále uváděly `585ae82`; veřejná homepage neměla nové malé obrázky karet a stále přednačítala dva fonty. Bez nasazení a bez tvrzení o růstu SEO či poptávek. Aktuální GSC/GA4 baseline nebyla v tomto implementačním kroku odečtena; starší čísla níže nejsou současný výsledek.

| Oblast | Ověřený výchozí stav | Lokální změna / hypotéza |
| --- | --- | --- |
| Homepage / kontakt | Homepage explicitně blokovala Tawk i WhatsApp. | Tawk na desktopu po marketingovém souhlasu, WhatsApp vlevo dole; kontaktní formulář nadále bez překryvů. Oprava dostupnosti kontaktu, nikoliv konverze sama o sobě. |
| Mobilní menu | Služby byly dostupné až uvnitř kategorií. | Šest hlavních služeb přímo pod položkou Služby; zbytek zůstává v kategoriích bez duplikací. Hypotéza: snazší nalezení služby. |
| Články na homepage | Dva nové články neměly individuální mapování a používaly stejný obecný motiv. | Dvě odlišné existující tematické ilustrace a kratší titulky karet. H1, metadata, publikace a URL článků beze změny. |
| Důvěryhodnost homepage | Skutečný tým a podrobnější příklady byly až na vnitřních stránkách. | Návrh nového bloku s portrétem stažen 23. 9. podle přání uživatele. Homepage bez osobního bloku; portréty zachovány pouze v existujícím týmu na stránce O společnosti. |
| Reference u služeb | Odkaz vedl na obecný přehled příkladů. | Odkaz na odpovídající skupinu, automatické rozbalení cílové skupiny, viditelné označení anonymizace. |

Ochrany: původní pracovní prostor a změny Cursoru nedotčeny; žádné nové balíčky, ISR intervaly, placené služby nebo transformace obrázků; tři stávající grafiky studií na homepage zachovány. Výchozí hero/H1/hlavní CTA a landing-page experimenty neměněny. Tawk může po souhlasu zvýšit klientskou síťovou zátěž; obnovuje se na výslovné přání uživatele, pouze na desktopu.

Před případným nasazením znovu zkontrolovat rozdíl vůči aktuálnímu main a překryv s neuloženými změnami Cursoru. Změny z tohoto balíčku nelze bez řízeného testu vyhodnotit jednotlivě. Pro souhrnné vyhodnocení porovnat 28 kompletních dní před/po nasazení (při nízkém počtu poptávek 56), oddělit mobil/desktop a organické návštěvy. Hlavní metrika: skutečně úspěšné `generate_lead` a firmou potvrzené kvalifikované poptávky; podpůrně `form_start`, návštěvy služeb a telefon/e-mail. Kliknutí na chat ani WhatsApp není automaticky přijatá poptávka.

### Podklady, které musí dodat firma

- Vlastní fotografie měření, přístrojů a týmu v provozu, včetně oprávnění k použití. Generované ilustrace nenahrazují dokumentaci skutečných zakázek.
- Tři konkrétní zakázky s ověřeným zadáním, rozsahem a výsledkem; souhlas s názvem klienta nebo schválená anonymizace. Nelze přisuzovat výsledky klientům pouze podle jejich loga.
- Schválená anonymizovaná ukázka protokolu / studie bez osobních a obchodně citlivých dat.
- Schválení případných cenových rozpětí či termínů realizace. Stávající příslib reakce do 24 hodin není příslib hotové nabídky ani provedení měření.

Technické a vizuální výsledky kontroly: viz `B2B-QUALITY-2026-09-22.md`.

## Co považujeme za úspěch

- Primární konverze: úspěšně odeslaná poptávka (`generate_lead`).
- Sekundární signály: `form_start`, kliknutí na telefon a e-mail a kvalifikované kliknutí na CTA.
- Organický růst hodnotíme podle relevantních českých dotazů a cílových stránek, ne pouze podle celkové návštěvnosti.
- Zlepšení SEO nevyhlašujeme bez dostatečných dat. Standardní vyhodnocovací okno je 28 dní; u nízkého objemu 56 dní.
- Během vyhodnocovacího okna neměníme znovu stejný titul, H1, hero ani CTA, pokud nejde o chybu.

## Ověřená výchozí data

Data byla odečtena 23. 8. 2026 z aktuálních přehledů GSC a GA4.

### Google Search Console

Období 25. 7.–21. 8. 2026:

- 128 kliknutí
- 5 375 zobrazení
- CTR 2,4 %
- průměrná pozice 10,8

Předchozích 28 dní:

- 69 kliknutí
- 3 605 zobrazení
- CTR 1,9 %
- průměrná pozice 16,1

Kontrolní snímek odečtený 24. 8. 2026 za období 26. 7.–22. 8. 2026:

- 126 kliknutí
- 5 392 zobrazení
- CTR 2,3 %
- průměrná pozice 10,7

Jde o překrývající se kontrolní období, nikoli o vyhodnocení změn nasazených 23.–24. 8. 2026.

Kontrolní snímek odečtený 26. 8. 2026 za období 27. 7.–23. 8. 2026:

- 128 kliknutí
- 5 444 zobrazení
- CTR 2,4 %
- průměrná pozice 10,7

Data GSC končí 23. 8. 2026, takže stále neobsahují produkční změny nasazené 24. 8. 2026. Tento snímek je pouze kontrola výchozího stavu, nikoli vyhodnocení experimentů.

Kontrolní snímek odečtený 27. 8. 2026 za období 29. 7.–25. 8. 2026:

- 136 kliknutí
- 5 572 zobrazení
- CTR 2,4 %
- průměrná pozice 10,7

Období obsahuje pouze dva dny po změnách nasazených 24. 8. 2026, proto stále nejde o jejich vyhodnocení.

Kontrolní snímek odečtený 29. 8. 2026 za období 27. 5.–26. 8. 2026:

- 287 kliknutí
- 11 751 zobrazení
- CTR 2,4 %
- průměrná pozice 13,0
- zařízení: počítače 239 kliknutí / 9 222 zobrazení, mobily 46 / 2 484 a tablety 2 / 45
- země: Česko 255 kliknutí / 6 338 zobrazení; výrazná část zahraničních zobrazení pochází z obecných produktových a PDF dotazů mimo hlavní českou B2B poptávku

Jde o širší devadesátidenní kontext, nikoli o vyhodnocení změn z 23.–27. 8. 2026. Krátké produkční období tvoří jen malou část tohoto okna.

### GA4

Období 26. 7.–22. 8. 2026:

- 161 aktivních uživatelů
- 270 relací
- 4 události `generate_lead` od 4 uživatelů
- Google organic: 111 relací a 1 přiřazená klíčová událost
- Seznam organic: 23 relací a 0 přiřazených klíčových událostí

Poznámka: přehled GA4 zobrazoval 3 přiřazené klíčové události, zatímco surový počet `generate_lead` byl 4. Pro vyhodnocení zdrojů proto používat atribuci GA4, pro kontrolu funkčnosti formuláře surový počet událostí.

Kontrolní snímek odečtený 24. 8. 2026 za období 27. 7.–23. 8. 2026:

- 159 aktivních uživatelů a 272 relací
- 5 událostí `form_start` od 4 uživatelů
- 4 události `generate_lead` od 4 uživatelů
- homepage byla vstupní stránkou u 155 relací a získala 2 ze 3 přiřazených klíčových událostí

Při současném nízkém objemu dat není dokončení formuláře zjevné úzké místo: formulář zahájili 4 uživatelé a `generate_lead` odeslali rovněž 4 uživatelé. Prioritou zůstává přivést více kvalifikovaných návštěvníků na relevantní službu a kontaktní cestu. Událost `click_cta` se nepoužívá jako čistý krok konverzního trychtýře, protože ji současná implementace odesílá i pro některé interní navigační odkazy.

Kontrolní sedmidenní karta odečtená 26. 8. 2026:

- 66 relací v zobrazeném rozpadu: Organic Search 44, Direct 18 a Referral 4
- 1 událost `form_start`
- 0 klíčových událostí na webové platformě

Jde o krátké klouzavé okno a malý vzorek, nikoli o vyhodnocení změn z 24. 8. 2026. Signál pouze podporuje prioritu přivádět návštěvníky z odborného obsahu do přesné poptávkové cesty.

Kontrolní snímek vstupních stránek odečtený 27. 8. 2026 za období 30. 7.–26. 8. 2026:

- 287 relací, 167 aktivních uživatelů a 3 přiřazené klíčové události
- článek `/poradna/oznameni-zameru-eia-co-to-je-a-kdy-je-potreba` měl 0 měřených vstupních relací a 0 klíčových událostí

Nulový počet v GA4 nevylučuje návštěvy bez analytického souhlasu. Pro EXP-011 jde o měřitelnou výchozí hodnotu, nikoli o tvrzení, že stránku nikdo nenavštívil.

Kontrolní snímek odečtený 29. 8. 2026 za posledních 28 dní:

- 177 aktivních uživatelů, 310 relací a 1 738 událostí
- 8 událostí `form_start` od 7 uživatelů
- 5 surových událostí `generate_lead`, každá od jednoho uživatele
- atribuční přehled vstupních stránek obsahoval 4 klíčové události: homepage 2, `/sluzby/pracovni-prostredi` 1 a `/sluzby/mereni-emisi` 1
- podle kanálu připadly 3 ze 4 atribuovaných klíčových událostí na Organic Search a 1 na Direct
- podle zařízení: desktop 139 aktivních uživatelů, průměrné zapojení 2:00 a 3 klíčové události; mobil 38 uživatelů, zapojení 0:42 a 1 klíčová událost

Surový počet `generate_lead` a atribuovaný počet klíčových událostí se opět liší o jednu, stejně jako v dřívějším kontrolním období. Audit kódu 29. 8. 2026 našel jediný zdroj `generate_lead`: událost se volá až po úspěšné odpovědi kontaktního API a nevzniká u vyplněného honeypotu. Rozdíl proto evidovat jako vlastnost/reportovací nesoulad GA4 a ověřovat proti skutečně přijatým e-mailům a `lead_id`; z dat samotných neurčovat jeho příčinu.

### Stav konverzního měření

- `generate_lead` je v GA4 označen jako klíčová událost; další běžné interakce nejsou zaměňovány za dokončenou poptávku.
- Vlastní dimenze `inquiry_category` a `service_interest` jsou v GA4 zaregistrované od 12. 8. 2026.
- Vlastní dimenze `lead_id` byla v GA4 zaregistrovaná 26. 8. 2026. Dne 31. 8. bylo v období 24.–30. 8. potvrzeno jedno UUID u jedné události pro měření hluku a akustiku. Technické naplnění je pro tento případ ověřené; shoda s interním e-mailem a obchodní kvalifikace ještě ne.
- GA4 je propojeno s doménovou službou Search Console pro naturchem.cz.
- Vstupní stránku vyhodnocovat jako dimenzi relace a konkrétní službu podle `service_interest`.
- Surové události `generate_lead` a atribuované klíčové události zapisovat odděleně; jejich rozdíl nepřičítat automaticky chybě formuláře.

## Aktivní a připravené experimenty

| ID | Stav | Dotaz / stránka | Výchozí hodnota | Hypotéza a změna | Primární vyhodnocení |
|---|---|---|---|---|---|
| EXP-001 | Živý od 23. 8. 2026, pozorovat (`a309218`, obsažen v produkci `926d3e4`) | Homepage `/` | Předzměnový kontext: posledních 7 dní přibližně 60 relací, z toho 43 organic; 0 `form_start`, 0 klíčových událostí | Nová vizuální hierarchie a zkrácený obsah pomohou návštěvníkům rychleji vybrat situaci nebo službu. Homepage neměnit 14–28 dní od nasazení. | `generate_lead`, `form_start` a `click_cta` u relací začínajících na homepage; kvalitativně také rozložení kliknutí na hlavní navigační prvky. |
| EXP-002 | Živý od 23. 8. 2026, pozorovat (`d0e7599`) | `emise a imise` | Před změnou: 168 zobrazení, 0 kliknutí, pozice 12,1 za posledních 28 dní | Nasazená úprava snippetu lépe odpoví na informační záměr a zvýší CTR bez změny odborného významu. | GSC: dotaz, cílová stránka, kliknutí, CTR a pozice po 28 dnech oproti předchozím 28 dnům. |
| EXP-003 | Nasazen 24. 8. 2026 (`b335a8c`) | `hluková studie tepelné čerpadlo` → `/provozy-a-technologie/tepelna-cerpadla-vzt/` | 15 zobrazení, 0 kliknutí, pozice 14,1; varianta „tepelného čerpadla“ 7 zobrazení, pozice 15,1 | Přesnější titul a H1 „Hluková studie pro tepelné čerpadlo a VZT“ posílí shodu se studijním záměrem před instalací. | GSC po 28/56 dnech: obě varianty dotazu, CTR, pozice a cílová stránka. GA4: vstupy na stránku a následný `generate_lead`. |
| EXP-004 | Nasazen 24. 8. 2026 (`0aa4c97`) | `měření vibrací` | 43 zobrazení, 0 kliknutí, pozice 44,8 | Přesný interní odkaz z odborného článku pomůže Googlu i uživateli rozpoznat hlavní službu pro měření vibrací. | GSC po 56 dnech: dotaz a `/sluzby/mereni-vibraci/`; sledovat, zda se cílová URL nemění a zda roste pozice. |
| EXP-005 | Živý od 24. 8. 2026 (`f314b80`, produkce `b849a61`) | `měření hluku tepelného čerpadla` → `/mereni-hluku-tepelneho-cerpadla-vzt/` | 13 zobrazení, 0 kliknutí, pozice 37,0; dotaz s „cena“ 10 zobrazení, 0 kliknutí, pozice 31,2 | Přesná jednotná formulace v title/H1, stručné rozlišení měření a studie, FAQ a jasné podklady pro nabídku zvýší relevanci a kvalifikované poptávky. | GSC po 28/56 dnech: oba dotazy a přesná URL. GA4: vstupy, `form_start` a `generate_lead` s touto landing page jako vstupní stránkou. |
| EXP-006 | Živý od 24. 8. 2026 (`f0bef0f`, produkce `599f7a8`) | `protihluková opatření` → `/poradna/protihlukova-opatreni-pred-merenim-hluku/` | Stránka za 28 dní: 179 zobrazení, 3 kliknutí, CTR 1,7 %, pozice 8,4. Přesný dotaz: 46 zobrazení, 0 kliknutí, pozice 6,3. | Nahradit jediný obecný odkaz „Služby NATURCHEM“ přesným kontextovým odkazem „měření hluku a akustika“ na `/sluzby/mereni-hluku/`; nepřidávat další CTA ani neměnit title/H1, aby se posílila obchodní cesta i tematická vazba bez přehlcení článku. | GSC po 28/56 dnech: přesný dotaz a článek, kliknutí/CTR/pozice; cílová URL služby a případná změna kanibalizace. GA4: posloupnost článek → služba → `generate_lead`. |
| EXP-007 | Živý od 24. 8. 2026 (`4872050`, produkce `599f7a8`) | `/poradna/odborny-posudek-podle-zakona-o-ochrane-ovzdusi-kdy-je-potreba-a-co-musi-obsahovat/` → `/sluzby/odborne-posudky/` | Článek za 28 dní: 46 zobrazení, 3 kliknutí, CTR 6,5 %, pozice 5,8; zároveň 23 zobrazení ve funkcích Googlu s generativní AI. Závěrečná obchodní věta nebyla klikací. | Beze změny odborného textu propojit existující výraz „odborný posudek pro krajský úřad“ s přesnou službou. Návštěvník dostane přímý další krok bez nové CTA nebo prodlužování článku. | GA4 po 28/56 dnech: posloupnost článek → `/sluzby/odborne-posudky/` → `generate_lead`; GSC: článek a cílová služba, jejich zobrazení, kliknutí a pozice. |
| EXP-008 | Živý od 27. 8. 2026 (`e624588`, produkce `9d1f3bc`) | `/poradna/provozni-rad-zdroje-znecistovani-ovzdusi/` → poptávkový formulář pro `Provozní řády` | GSC 27. 7.–23. 8. 2026: 12 kliknutí a 183 zobrazení; GA4 výchozí stav: 4 organické relace, průměrná doba zapojení přibližně 10 s a 0 `generate_lead`. Ve funkcích Googlu s generativní AI měl článek 101 zobrazení. | Po první praktické odpovědi přidat jediný stručný informační box s podklady pro posouzení a odkazem na formulář s předvyplněnou službou. Title, H1 a odborný obsah neměnit; nepřidávat další globální CTA. | GA4 po 28/56 dnech: posloupnost článek → `click_inquiry_cta` → `form_start` → `generate_lead`, včetně `service_interest`. GSC: výkon článku a zobrazení ve funkcích s generativní AI; výsledek nevyvozovat z jednotek návštěv. |
| EXP-009 | Živý od 27. 8. 2026 (`d52ffcf`, produkce `9d1f3bc`) | Produktové stránky PCF → poptávkový formulář | Detail FID měl za 28 dní 67 zobrazení, 2 kliknutí a průměrnou pozici 30,5; původní CTA nepřenášelo konkrétní produkt. | CS/EN/DE CTA zachová kategorii přístroje a lokalizovaný název produktu ve formuláři, aby obchodní poptávka neztratila kontext. | GA4 po 28/56 dnech: produkt → `click_inquiry_cta` → `form_start` → `generate_lead`; ověřit kategorii `pristroj` a název produktu, nehodnotit úspěch podle obecných zahraničních zobrazení. |
| EXP-010 | Živý od 27. 8. 2026 (`9082fbc`, produkce `9d1f3bc`) | `fid detektor` a `detektor fid` | `fid detektor`: 25 zobrazení, 0 kliknutí, pozice 19,0; `detektor fid`: 33 zobrazení, 0 kliknutí, pozice 48,2. | Přesnější český popis kategorie a detailu vysvětluje použití FID pro GC a monitorovací přístroje. | GSC po 28/56 dnech: oba přesné dotazy, obě cílové stránky, kliknutí, CTR a pozice; GA4: vstupní relace a následná poptávková cesta. |
| EXP-011 | Živý od 27. 8. 2026 (`b339a2b`, produkce `9d1f3bc`); produkční CTA ověřeno 29. 8. 2026 | `/poradna/oznameni-zameru-eia-co-to-je-a-kdy-je-potreba/` → poptávkový formulář pro `EIA a oznámení záměru` | GSC 29. 7.–25. 8. 2026: 1 kliknutí, 167 zobrazení, CTR 0,6 % a pozice 5,5. Přesné dotazy `kdy je potřeba eia` a `oznámení záměru eia` měly dohromady 8 zobrazení, 0 kliknutí a pozice 6,3/6,5. GA4 30. 7.–26. 8. 2026: 0 měřených vstupních relací a 0 klíčových událostí. Ve funkcích Googlu s generativní AI měl článek 61 zobrazení. | Za první praktickou odpověď vložit jediný stručný přechod na formulář s předvolenou službou EIA. Title, H1 a odborný výklad neměnit, aby se samostatně měřilo odstranění tření mezi informačním vstupem a poptávkou. | GA4 po 28/56 dnech: `click_inquiry_cta` → `form_start` → `generate_lead` a `service_interest = EIA a oznámení záměru`. GSC: výkon článku a AI zobrazení jako kontrolní metriky, nikoli jako důkaz obchodního výsledku. |
| EXP-012 | Živý od 31. 8. 2026, 11:20 SELČ (`fd26dca`) | `ippc povolení` → `/sluzby/ippc-integrovana-povoleni/` | Nový GSC odečet 31. 8.: 1.–28. 8. = 14 zobrazení, 0 kliknutí, CTR 0 %, pozice 17,4; 4. 7.–28. 8. = 17 zobrazení, 0 kliknutí, pozice 17,6. V obou oknech všechna zobrazení vedou na správnou službu. Historický odečet 29. 8. měl 17 zobrazení / 0 kliknutí / pozici 17,6. | V IPPC článku nahradit jediný obecný odkaz na přehled služeb přesným odkazem na IPPC. Usnadní návaznost článek → služba → předvyplněná poptávka. Kvůli malému vzorku neměnit title, H1 ani odborný výklad. | Po skutečném nasazení zaznamenat datum a porovnat 28/56 dní: GSC přesný dotaz a URL, GA4 cesta do `generate_lead` se službou IPPC. Lokální kontrola odkazu není výsledek SEO. |
| EXP-013 | Živý od 3. 9. 2026, 10:24 SELČ (`397c0c0`) | `autorizované měření emisí` → `/autorizovana-osoba-mereni-emisi/` | GSC 4.–31. 8.: přesný dotaz 2 zobrazení, 0 kliknutí, pozice 49; všechna zobrazení vedou na tuto URL. Stránka celkem 2 kliknutí / 14 zobrazení / CTR 14,3 % / pozice 9,7. | Zachovat cílovou URL, změnit title a H1 na přesný název služby, doplnit ověřitelnou důvěryhodnost, vstupy, proces, FAQ a primární zdroje. Z hlavní služby a tří tematických článků vést přesné interní odkazy. Tím se posílí relevance této stránky bez přepisování obecné `/sluzby/mereni-emisi/`. | GSC po 28/56 dnech, nejdříve 1. 10. / 29. 10. s ohledem na zpoždění dat: přesný dotaz, blízké varianty, cílová URL, zobrazení, CTR a pozice. GA4: vstupy na landing page, přechody do formuláře a skutečně přijaté `generate_lead`. Nízký baseline vyžaduje 56denní okno. |
| EXP-014 | Živý od 3. 9. 2026, 10:24 SELČ (`397c0c0`) | `hluková studie` a komerční varianty → `/sluzby/hlukove-studie/` | GSC 4.–31. 8.: stránka 1 kliknutí / 72 zobrazení / CTR 1,4 % / pozice 10,3. Viditelné dotazy: `hluková studie cena` 5 zobrazení, `hlukové studie` 3 a tři další studijní varianty po 1 zobrazení; všechny bez kliknutí. | Přesný titul a H1 v jednotném čísle vyjasní službu i typické použití pro KHS, stavby a technologie. Meta description a úvod sdělí rozsah a cestu k nabídce bez vymyšlené ceny nebo termínu. Ostatní strukturu a CTA ponechat, aby byl zásah měřitelný. | GSC po 28/56 dnech, nejdříve 1. 10. / 29. 10. s ohledem na zpoždění dat: výkon celé URL a dotazů obsahujících `hlukov` + `studi`, CTR při srovnatelné pozici a přijaté poptávky se službou Hlukové studie. Samotný růst zobrazení není obchodní výsledek. |
| EXP-015 | Lokálně připraven 3. 9. 2026, NENASAZEN | `/poradna/chladova-zatez-na-pracovisti/` → přesná poptávka tepelné a chladové zátěže | GSC 5. 8.–1. 9.: 4 kliknutí / 126 zobrazení. GA4 6. 8.–2. 9.: 6 organických relací, 5 aktivních uživatelů, průměrné zapojení 9 s a 0 atribuovaných klíčových událostí. Specializovaná služba dosud ve formuláři ztrácela přesný kontext a předvolila obecné `Měření pracovního prostředí`. | Beze změny odborného výkladu vložit jediný stručný box po první odpovědi a přidat neveřejnou přesnou předvolbu `Měření tepelné a chladové zátěže`, která se zobrazí jen po příchodu z relevantního CTA. | Po nasazení 28/56 dní: GSC stránka a relevantní dotazy; GA4 `click_inquiry_cta` → `form_start` → `generate_lead` s přesným `service_interest`; obchodní potvrzení podle `lead_id`. |
| TECH-001 | Živý od 24. 8. 2026 (`6962c6b`, produkce `b849a61`) | Jazykový atribut všech HTML dokumentů | Před změnou byl jazyk opravován klientským skriptem | Serverově vykreslený `html lang` odstraní nejednoznačnost pro vyhledávače a asistivní technologie bez zvýšení ISR rozsahu. | Technická kontrola po nasazení: CS/EN/DE `html lang`, canonical, hreflang, 404 `noindex`, počet vygenerovaných stránek a Vercel usage. |
| TECH-002 | Živý od 24. 8. 2026 (`1a4cd30`, produkce `599f7a8`) | Směrování jazyků / Vercel Function CPU | Vercel za 25. 7.–24. 8. 2026: Active CPU 3 h 27 min z 4 h (86,5 %); middleware tvořil 1 h 40 min, tedy 48,4 %. ISR Writes byly současně na 168 564 z 200 000 jednotek (84,3 %). | Přesun českých redirectů a interních locale rewrites z middleware do statických pravidel Next/Vercel zachová veřejné URL a odstraní spuštění middleware funkce při běžném zobrazení stránky. | Po nasazení: CS/EN/DE URL, canonical, hreflang, API a assety; Vercel Active CPU podle typu po 24 h a v klouzavém 30denním okně. Cíl: middleware CPU se nepřičítá k novým požadavkům; celkový pokles nelze vyhlásit, dokud stará data nevypadnou z okna. |
| TECH-003 | Živý od 27. 8. 2026 (`ac9a41e`, produkce `9d1f3bc`) | Kontrast textových odkazů na odborné články na homepage | PageSpeed 27. 8. 2026: přístupnost 97/100 a nevyhovující `.home-editorial-cta`; laboratorní kontrast světlé varianty byl nedostatečný. | Textová CTA používají tmavé varianty stávajících barev s kontrastem 7,24 : 1 až 8,79 : 1, bez změny obsahu nebo rozvržení. | Po nasazení zopakovat PageSpeed mobil/desktop a ověřit odstranění konkrétní kontrastní chyby. |
| TECH-004 | Živý od 27. 8. 2026 (`e74b356`, produkce `9d1f3bc`); 31. 8. ověřeno samostatné 12h okno s 0 zápisy a 0 časovými revalidacemi | Časové ISR / Vercel Hobby Write Units | Vercel okno 28. 7. 17:00–27. 8. 2026: 177 523 z 200 000 ISR Write Units (88,8 %) a přibližně 3 h 13 min ze 4 h Fluid Active CPU. Observability za posledních 12 hodin ukázala dalších 1,4 tis. Write Units a 84 časových revalidací. | Homepage, Poradna, články a sitemap zůstanou mezi deploymenty plně statické. Publish v CMS už vytváří commit a Vercel deployment, takže dnešní článek se zveřejní během buildu bez průběžných ISR zápisů. Budoucí naplánovaný článek vyžaduje v den zveřejnění nový Publish/deployment. | Dále kontrolovat nová oddělená časová okna; výsledek 30. 8. 21:00–31. 8. 09:00 není garance budoucí nulové spotřeby. Staré jednotky budou z klouzavého okna odpadávat postupně, ne na konci měsíce. |
| TECH-005 | Živý od 31. 8. 2026 (`80e8d7d`); mobilní PageSpeed 91–99, medián 95, desktop 100; obchodní vyhodnocení čeká na data | Mobilní načítání homepage a sdílených assetů | PageSpeed 29. 8. 2026: mobilní výkon 87, LCP 3,6 s, CLS 0,013 a TBT 0 ms; desktop výkon 100 a LCP 0,6 s. LCP hero mělo 320 ms zpoždění před načtením, 470 ms načítání a 1 670 ms zpoždění vykreslení; CSS blokovalo vykreslení odhadem 560 ms. GA4 za posledních 28 dní: mobil 38 aktivních uživatelů, průměrné zapojení 42 s a 1 klíčová událost; desktop 139 uživatelů, 2:00 a 3 klíčové události. | Media-specifické AVIF hero obrázky, serverově vykreslený první hero snímek, lazy-load sekundárních obrázků, rozdělení CSS podle rout a serverový náhled referencí sníží objem kritických dat a hydratace bez změny obsahu, URL nebo konverzní cesty. | Opakovaná produkční měření jsou v `POST-RELEASE-2026-08-31.md`; po 28/56 dnech (28. 9. / 26. 10., s ohledem na zpoždění dat) GA4 engagement, `form_start` a `generate_lead` podle zařízení. Jedna mobilní konverze není důkaz zlepšení. |
| TECH-006 | Kód a statický snímek nasazeny 31. 8. 2026 v `fd26dca`; automatika NEAKTIVOVÁNA | Budoucí datum vydání článku / homepage a Poradna | Statické stránky se samy po dosažení data nevystaví; na 2. a 8. 9. jsou v repozitáři naplánované články. | Dvakrát denně porovnat veřejný statický snímek s aktuálním schváleným main a požádat o build jen při nově splatném článku. Bez návštěvnického časového ISR; před prvním zapnutím vyžaduje zvláštní souhlas, správný deploy hook a opt-in proměnnou. | V den vydání ověřit článek, homepage, Poradnu, sitemap a veřejné indexy; sledovat počet deploymentů a Vercel usage. Čas cron ani nepřekročení kvót nelze garantovat. Provozní postup v RELEASE-GROWTH-FOLLOWUPS-2026-08-31.md. |
| TECH-007 | Živý od 31. 8. 2026, 11:20 SELČ (`fd26dca`) | Veřejné indexy článků pro vyhledávání, jazyky a AI | Web a vyhledávání měly 69 českých článků, ale llms-articles.txt a jazyková mapa 71 včetně dvou budoucích URL. Regulární parser krátil víceřádkové titulky a výňatky. | Jeden generátor s plným YAML parserem a stejným pražským datem jako web; pouze aktuálně veřejné články. Zachovat existující URL a úplné titulky. | Technická shoda seznamů CS 69 / EN 56 / DE 56 k 31. 8.; po každém vydání stejný počet a žádné budoucí/draft URL. Dopad na AI citace ani poptávky zatím není prokázán. |
| TECH-008 | Lokálně ověřen 31. 8. 2026, NENASAZEN | Tři pracovní HTML kopie v `/loga-referenci/` | Všechny tři URL vracejí na produkci 200 a zobrazují cizí weby; dohromady 376 848 B. Aplikační kód na ně neodkazuje. Jejich indexace ani dopad na pozice nejsou prokázané. | Přesunout podklady mimo public, zachovat všech 19 log a CMS. Prebuild kontrola odmítne neodsouhlasené HTML ve veřejných assetech. Bez změny obchodního obsahu nebo ISR. | Při schváleném nasazení ověřit 404 původních URL, všechna loga 200, homepage a CMS. Sledovat případné chybné odkazy; nevyhlašovat SEO či rychlostní přínos jen podle odstraněných bajtů. |
| DATA-001 | Živý od 24. 8. 2026 (`e0d93a2`, produkce `b849a61`) | Poptávkový formulář / `generate_lead` | 4 surové události za posledních 28 dní; honeypot vracel záměrně úspěšnou odpověď stejně jako přijatá poptávka | Klient při vyplněném honeypotu neodešle `generate_lead`, takže zablokovaný spam nezvýší počet obchodních konverzí. | Po nasazení průběžně porovnávat počet reálně přijatých poptávek s `generate_lead`; rozdíl musí mít vysvětlitelnou příčinu, například odmítnutý analytický souhlas. |
| DATA-002 | Živý od 24. 8. 2026 (`eddd123`) | Kliknutí do poptávkové cesty | Za 27. 7.–23. 8. 2026 měl široký event `click_cta` 22 událostí od 15 uživatelů, ale zahrnoval také běžné interní odkazy se třídou `button` nebo `section-link-inline`. | Nový event `click_inquiry_cta` se odešle jen pro interní odkazy mířící přímo na `#poptavkovy-formular`; zachová `page_path`, text a URL odkazu a případně `service_interest` nebo `inquiry_category`. Stávající `click_cta` zůstane beze změny pro historickou návaznost. | Od data nasazení sledovat uživatele a relace v posloupnosti `click_inquiry_cta` → `form_start` → `generate_lead`, vždy se souhlasem se statistickými cookies. |
| DATA-003 | Živý od 24. 8. 2026 (`263867b`, produkce `599f7a8`); 1. 9. firma UUID poptávku nezaregistrovala, kvalifikace NEPROBĚHLA | Anonymní identifikace odeslané poptávky | Za 27. 7.–23. 8. 2026 byly zaznamenány 4 události `generate_lead`, ale v měření 0 kvalifikovaných a 0 konvertovaných leadů; skutečná obchodní kvalifikace není ověřená. Interní poptávka a GA4 dosud neměly společný neosobní klíč. | Server po validaci vytvoří náhodné UUID, vloží je do interního e-mailu a vrátí je až po přijetí interního e-mailu Resendem; klient stejné `lead_id` připojí k `generate_lead`. Jméno, e-mail ani telefon se do GA4 neposílají. Přijetí API poskytovatelem ale není důkaz následného doručení do firemní schránky. | Případ z 24.–30. 8. nezapočítávat jako kvalifikovaný lead. V Resend ověřit stav `delivered`, `bounced`, `suppressed`, `failed` nebo `delayed`. Pro další případy je lokálně připraveno krátké ID v předmětu, ID poskytovatele v neosobním serverovém logu a stejné plné ID v potvrzení zákazníkovi; před nasazením znovu ověřit a po něm provést schválený interní test. |
| DATA-004 | Živý od 27. 8. 2026 (`b339a2b`, produkce `9d1f3bc`) | Předvyplněné méně časté služby v poptávkovém formuláři | URL správně předala například `EIA a oznámení záměru` a server by ji přijal ve skrytém poli, ale návštěvník ji mezi zobrazenými volbami neviděl. Stejný problém se týkal například provozních řádů, IPPC, ISPOP nebo školení. | Předvolenou službu, která není v základním stručném seznamu, zobrazit na začátku jako běžnou zaškrtnutou a lokalizovanou volbu. Návštěvník tak vidí zachovaný kontext a může jej před odesláním změnit. | Po nasazení sledovat `service_interest` u `form_start` a `generate_lead`; nevytvářet testovací odeslání. Automatický test a produkční HTML ověřily zachování EIA kontextu. |
| DATA-005 | Živý od 31. 8. 2026, 11:20 SELČ (`fd26dca`) | Dokončení poptávky, přílohy a přesnost `generate_lead` | Přílohy se kontrolovaly až po uploadu; odpověď čekala také na potvrzovací e-mail. Chyběl synchronní zámek dvojkliku a požadavek na `leadId` v klientské podmínce konverze. Bez načteného JS formulář používal výchozí GET; mobilní pole měla 15,2 px. Výskyt ztracených či duplicitních skutečných poptávek není změřen. | Stejná validace souborů před uploadem i na serveru, zachování textu při chybě, zaostření chybějícího kontaktu, mobilní pole 16 px, explicitní POST a pojistka dvojkliku. Úspěch čeká na přijetí interního e-mailu poskytovatelem; zákaznické potvrzení proběhne následně. Konverze vyžaduje serverové `leadId`. | Mockované testy bez e-mailů/GA4 a mobilní kontrola; po nasazení sledovat skutečné chyby API, dokončení formuláře podle zařízení a shodu `lead_id` s přijatými poptávkami. Přijetí poskytovatelem není záruka doručení do schránky ani obchodní kvalifikace. |
| DATA-006 | Kritická produkční závada zjištěna 3. 9. 2026, NENAPRAVENO | Skutečné doručení interního oznámení z formuláře | Resend suppression detail: `naturchem@naturchem.cz`, původ `Complaint`, od 1. 9. 2026 19:23. Novější interní zprávy mají stav `Suppressed`, zatímco potvrzení odesílatelům mohou být `Delivered`. Za 20. 8.–3. 9. Resend eviduje 46 e-mailů, 0 bounce a 1 complaint (2,17 %, riziková úroveň). | Nejdříve potvrdit příjemce a příčinu complaintu; potom odstranit suppression, přidat ověřený záložní firemní příjem, udělat jeden schválený end-to-end test a zavést nízkotřecí bot ochranu. `generate_lead` nesmí být obchodně započten jen podle přijetí API. | Primární důkaz je `Delivered` v Resendu plus skutečné přijetí v firemní schránce a následná kvalifikace podle `lead_id`. Podklad: `AUDIT-RESEND-SUPPRESSION-2026-09-03.md`. |
| DATA-007 | Turnstile kód živý od 4. 9. v `91ed8dc`, produkční ochrana NEAKTIVNÍ; doplňková pojistka lokálně připravena | Automatický spam a potvrzovací e-maily | Produkce nemá Turnstile klíče. Kontrola Resendu 4. 9. potvrdila pokračující automatické odesílání: interní zprávy pro hlavního příjemce jsou `Suppressed`, zatímco potvrzení odesílatelům jsou `Delivered`. | Aktivovat Turnstile pro `naturchem.cz` a `www.naturchem.cz`. Doplňkově posílat zdvořilostní potvrzení pouze po úspěšném ověření a interní kopie odesílat každému příjemci nezávisle, aby suppression jedné adresy nezablokoval záložní. | Po aktivaci: jeden schválený test; interní oznámení musí být `Delivered` a skutečně přijaté u hlavního i záložního příjemce. Dále sledovat suppression/complaint a potvrzení neposílat u odmítnutých či neověřených podání. |

## Pravidla vyhodnocení

1. Zapsat přesný produkční commit a datum nasazení.
2. V GSC filtrovat zároveň dotaz i cílovou stránku; samotný souhrn webu nestačí.
3. Porovnat stejné délky období a zaznamenat i změnu průměrné pozice, aby CTR nebylo vytržené z kontextu.
4. V GA4 oddělit surový `generate_lead` od atribuovaných klíčových událostí podle zdroje.
5. U nízkého objemu nevyvozovat závěr z jednotek zobrazení nebo jedné konverze; prodloužit okno na 56 dní.
6. Každý další zásah do stejné stránky založit jako nový experiment, aby zůstal dohledatelný důvod změny.

## Stránky chráněné podle konverzních dat

Kontrola GSC a GA4 odečtená 29. 8. 2026 za posledních 28 dní:

- `/sluzby/pracovni-prostredi/`: GSC 7 kliknutí / 75 zobrazení, CTR 9,3 % a pozice 3,6; GA4 5 organických vstupních relací a 1 atribuovaná klíčová událost. Dotazy s kliknutími jsou kvůli nízkému objemu v GSC anonymizované. Title, H1 ani hlavní CTA nyní neměnit; stránku použít jako srovnávací příklad přesné služby.
- `/sluzby/mereni-emisi/`: GSC 1 kliknutí / 46 zobrazení, CTR 2,2 % a pozice 3,8; jediný viditelný klik pocházel ze značkového dotazu `naturchem`. GA4 eviduje 1 organickou vstupní relaci a 1 atribuovanou klíčovou událost. Vzorek je příliš malý pro zásah nebo závěr o obecných neznačkových dotazech.
- homepage `/`: GSC 25 kliknutí / 175 zobrazení, CTR 14,3 % a pozice 8,5; dotaz `naturchem` přinesl 19 kliknutí z 26 zobrazení. GA4 připisuje organické homepage 1 klíčovou událost. Homepage zůstává během vyhodnocování EXP-001 a před nasazením TECH-005 bez další obsahové změny.

Tyto hodnoty neprokazují příčinný vliv konkrétního textu nebo rozvržení na poptávku. Slouží jako ochranný baseline, aby další experiment nepoškodil stránky, které už přivedly měřenou organickou klíčovou událost.

## Nejbližší termíny kontroly

- 6. 9. 2026: pouze technická a konverzní kontrola homepage po 14 dnech; bez dalšího redesignu, pokud není zjištěna chyba.
- 20. 9. 2026: první plné 28denní vyhodnocení EXP-001 a EXP-002.
- 21. 9. 2026: první 28denní vyhodnocení EXP-005.
- 19. 10. 2026: 56denní vyhodnocení EXP-005 při nízkém objemu dat.
- 21. 9. 2026: první 28denní kontrola EXP-003 a EXP-004.
- 19. 10. 2026: 56denní vyhodnocení EXP-003 a EXP-004 při nízkém objemu dat.
- 26. 9. 2026: kontrolní GSC a GA4 snímek chráněných stránek. EXP-012 byl nasazen 31. 8. v `fd26dca`; jeho 28/56denní vyhodnocení připadá na 28. 9. / 26. 10. s ohledem na zpoždění dat.
- 28. 9. 2026: první 28denní vyhodnocení TECH-005; při nízkém objemu 26. 10. 2026. Respektovat zpoždění GA4/GSC.
- 2. a 8. 9. 2026: v aktuálním obsahu jsou naplánované články. Statická architektura vyžaduje nasazení v den publikace nebo později; bez zvláštního schválení neprovádět automatický deployment. Detail názvů a URL je v `POST-RELEASE-2026-08-31.md`.

## Záznam produkční kontroly

- 4. 9. 2026, produkce `91ed8dc`: nová homepage je živá a Vercel deployment je `Ready`. Před releasem prošel `npm run verify`; produkční kontrola ověřila desktop, mobil, kontaktní stránku i count-up statistiky. Jde o nový konverzní experiment homepage, proto další obsahový redesign od tohoto data neprovádět bez chyby nebo vyhodnocení.
- 4. 9. 2026, GSC baseline před releasem: 6. 8.–2. 9. = 144 kliknutí, 5,68 tis. zobrazení, CTR 2,5 % a průměrná pozice 10,1. Homepage měla 21 kliknutí / 144 zobrazení / CTR 14,6 % / pozici 7,9. Data končí před releasem a nemohou dokazovat jeho přínos.
- 4. 9. 2026, GA4 baseline: 7. 8.–3. 9. = 316 relací, 204 relací se zapojením a 4 atribuované klíčové události. Tři jsou z Organic Search (homepage, `/sluzby/mereni-emisi/`, `/sluzby/pracovni-prostredi/`) a jedna z Direct na homepage. Surový report `generate_lead` obsahuje 5 událostí od 5 uživatelů; bez shody s přijatou zprávou nejde o ověřené obchodní poptávky.
- 4. 9. 2026, doručení: suppression `naturchem@naturchem.cz` je stále aktivní a produkční Turnstile klíče nejsou nastavené. Nové zjevně automatické formuláře nadále vytvářejí potlačené interní zprávy a doručená potvrzení odesílatelům. Prioritou před dalším SEO releasem je obnovit bezpečnou a ověřitelnou doručovací cestu.

- 3. 9. 2026, produkce `397c0c0`: EXP-013 a EXP-014 jsou živé na `www.naturchem.cz`. Produkční build ve Vercelu je Ready a má přiřazené produkční domény. Veřejná kontrola ověřila nový emisní title/H1, canonical, FAQ schema a primární zdroje; hlukový title/H1; nový článek `/poradna/priprava-na-mereni-emisi/` a jeho přítomnost v sitemap. Produkční smoke prošel 501 adres ze sitemap a 213 dalších interních odkazů bez chyby; routing smoke prošel canonicaly, hreflang, přesměrování, assety, 404/noindex a validační odpověď kontaktního API. Rollback základ je `1b398ce`.
- 3. 9. 2026, GSC: aktuální 28denní okno 5. 8.–1. 9. má 144 kliknutí, 5 672 zobrazení, CTR 2,5 % a průměrnou pozici 10,2. Dotaz `měření hluku české budějovice` má 56 zobrazení a 0 kliknutí; dnešní změny v tomto okně ještě nejsou. Aktuální sitemap se 501 URL byla znovu úspěšně odeslána 3. 9.; GSC před novým zpracováním stále ukazovalo poslední čtení 1. 9. a 498 objevených stránek. Nový článek byl při kontrole Googlu dosud neznámý, což je výchozí indexační stav, nikoli chyba živé stránky.
- 3. 9. 2026, indexace: přehled GSC aktualizovaný 28. 8. ukazuje 506 indexovaných a 126 neindexovaných adres. Osm 404 příkladů je totožných s auditem z 31. 8.; šest dnes vede přes redirect na 200 a dvě technické adresy mají oprávněnou 404, proto se nespouští hromadné „Ověřit opravu“. Z 12 `Procházeno – momentálně neindexováno` nejsou aktuální české obchodní HTML stránky: jde o PDF/obrázky/LLM soubor/font a dvě nekanonické jazykové cesty. Šest `Objeveno – momentálně neindexováno` tvoří dva české články a čtyři jazykové varianty; sledovat po novém zpracování sitemap, bez změny IPPC článku během EXP-012.
- 3. 9. 2026, GA4: za 27. 8.–2. 9. jsou 2 události `form_start` od 2 uživatelů a 1 `generate_lead` od 1 uživatele. Jde o již známé ID poptávky na měření hluku, které firma 1. 9. nepotvrdila ve schránce; v tomto okně je proto 0 ověřených kvalifikovaných leadů. Nová dohledatelnost nasazená 3. 9. se použije až na další skutečné odeslání; bez něj nelze doručení ověřit.
- 3. 9. 2026 večer, srovnatelný 28denní snímek: GSC 5. 8.–1. 9. = 144 kliknutí, 5,67 tis. zobrazení, CTR 2,5 % a pozice 10,2. GA4 6. 8.–2. 9. = 310 relací, 167 aktivních uživatelů, 8 `form_start` od 7 uživatelů, 5 surových `generate_lead` a 4 atribuované klíčové události ve vstupním reportu. Surové leady jsou po jednom ve službách `(not set)`, `Kolaudační měření`, `Měření hluku a akustika`, `mereni` a `nevim`; atribuované vstupy jsou homepage direct, homepage `email.seznam.cz / referral`, `/sluzby/pracovni-prostredi` z Google organic a `/sluzby/mereni-emisi` z Google organic. Pouze hlukový případ byl firmou výslovně nepotvrzen; ostatní nelze bez shody s přijatými e-maily označit za skutečné ani kvalifikované poptávky. Výsledkem je 0 v tomto projektu ověřených kvalifikovaných leadů, nikoli tvrzení, že firma žádné poptávky neobdržela.

- 1. 9. 2026, DATA-003: firma potvrdila, že poptávku s UUID `4994eef1-4e79-4717-9b6b-40bdb2a2bdc7` na měření hluku nezaregistrovala. Nejde proto o kvalifikovanou poptávku ani získanou zakázku. Audit verze nasazené v rozhodném období potvrzuje, že `generate_lead` vznikl až po přijetí interního e-mailu Resend API bez okamžité chyby; následné doručení do cílového poštovního serveru tím prokázáno není. Historický runtime log už Vercel Hobby nezobrazil a účet Resend nebyl přihlášen. Lokálně, bez deploymentu, je připravena lepší neosobní dohledatelnost dalšího případu.
- 31. 8. 2026, 17:16 SELČ: GA4 pro 24.–30. 8. s metrikou pouze `generate_lead` ukazuje 1 atribuovanou konverzi z řádku `/sluzby/pracovni-prostredi` + `google / organic` (1 relace). Surový počet za stejné období je také 1. Přímé párování přes UUID filtr nebylo dokončeno; přijetí a kvalifikace čekají na firmu. Nejde o důkaz příčinného přínosu experimentu. Podklad v AUDIT-ASSETS-A-POPTAVKY-2026-08-31.md; stránku nadále chránit před souběžným přepisováním.
- 31. 8. 2026 odpoledne: DATA-003 má potvrzené první skutečně naplněné UUID v GA4 (24.–30. 8.: 1 událost, služba Měření hluku a akustika). Párování e-mailu a kvalifikace čekají na firemní potvrzení. TECH-008 lokálně archivuje tři veřejně dostupné kopie cizích HTML webů mimo public a přidává prebuild kontrolu. Tento nový balík není nasazen. Důkazy a stav: [AUDIT-ASSETS-A-POPTAVKY-2026-08-31.md](AUDIT-ASSETS-A-POPTAVKY-2026-08-31.md).
- 31. 8. 2026, produkce `80e8d7d`: TECH-005 je nasazen. Tři mobilní PageSpeed běhy 99 / 95 / 91, medián 95 a LCP 2,9 s; desktop třikrát 100. Jde o laboratorní zlepšení, ne zatím obchodní či SEO výsledek.
- 31. 8. 2026, TECH-004: Observability pro 30. 8. 21:00–31. 8. 09:00 ukázala 0 ISR Write Units a 0 časových revalidací. Otevřená 12hodinová kontrola z tabulky výše je tím provedena. Klouzavý součet zůstává 178 107 / 200 000; nulový budoucí růst ani všechny kvóty nelze garantovat.
- 31. 8. 2026: nová provozní priorita – Hobby je podle ověřených podmínek Vercelu osobní/nekomerční plán, zatímco NATURCHEM web získává obchodní poptávky. Rozhodnutí o Pro nebo vhodném alternativním hostingu čeká na uživatele; žádná placená změna nebyla provedena.
- 31. 8. 2026: GA4 za 3.–30. 8. stále 5 surových a 4 atribuované `generate_lead`; atribuované vstupy homepage 2, pracovní prostředí 1, emise 1. Stránky chránit před dalším souběžným přepisováním. Nový snímek a odkazy na zdroje: [POST-RELEASE-2026-08-31.md](POST-RELEASE-2026-08-31.md).
- 31. 8. 2026, DATA-001 / DATA-003: dvě cílená hledání srpnových oznámení formuláře v připojeném Gmailu, druhé včetně spamu a koše, nevrátila žádnou odpovídající zprávu. Není to důkaz nulových poptávek ani nedoručování: cílová firemní schránka nebyla ověřena. K párování chybí přístup k relevantním oznámením nebo anonymizovaný přehled `datum, lead_id, služba, obchodní stav`. Bez osobních údajů v repozitáři; žádné odeslání, označení ani změna e-mailu neproběhly.
- 24. 8. 2026, produkce `b849a61`: nová landing page EXP-005 vrací HTTP 200 a zobrazuje správný H1.
- 24. 8. 2026, TECH-001: živé CS, EN a DE stránky vracejí serverový atribut `html lang` jako `cs`, `en` a `de`.
- 24. 8. 2026: produkční homepage zobrazuje aktuální článek z 24. 8. 2026; před nasazením prošlo 498 URL sitemap a 139 dalších interních odkazů bez chyby.
- 26. 8. 2026: vzdálená větev `main` stále ukazuje na produkční commit `599f7a8`; opakovaný produkční smoke test ověřil 498 URL sitemap a 139 dalších interních odkazů bez chyby, včetně canonical, hreflang, jazykového směrování, assetů, 404 a validační odpovědi kontaktního API bez odeslání formuláře.
- 26. 8. 2026: v GA4 byla zaregistrovaná eventová vlastní dimenze `lead_id`; čeká se na první skutečnou poptávku pro ověření shody s interním e-mailem.
- 26. 8. 2026: kontrolní GSC snímek končí 23. 8. 2026, a proto ještě nemůže vyhodnotit produkční změny z 24. 8. 2026.
- DATA-001 se ověřuje porovnáním skutečných přijatých poptávek a GA4; produkční formulář nebyl při technické kontrole odeslán, aby nevznikla falešná obchodní konverze.

## Příležitosti z GSC auditu 24. 8. 2026

| Priorita | Dotaz / stránka | Důkaz za 28 dní | Rozhodnutí |
|---|---|---|---|
| 1 | `měření hluku české budějovice` | 50 zobrazení, 0 kliknutí, pozice 8,8. Homepage získala 35 zobrazení na pozici 10,3; přesná landing page 13 zobrazení na pozici 7,1. | Jde o kanibalizaci s lepším výkonem přesné landing page. Homepage během EXP-001 neměnit; znovu vyhodnotit 6. a 20. 9. 2026 a následně rozhodnout o přesnějším interním propojení. |
| 2 | `/poradna/protihlukova-opatreni-pred-merenim-hluku/` | Stránka 179 zobrazení, 3 kliknutí, CTR 1,7 %, pozice 8,4. Přesný dotaz `protihluková opatření`: 46 zobrazení, 0 kliknutí, pozice 6,3. | Připravit samostatný experiment s přesným odkazem na `/sluzby/mereni-hluku/`; neměnit současně titulek článku, aby šel vyhodnotit přenos na službu. |
| 3 | EXP-003, studie tepelného čerpadla | `/provozy-a-technologie/tepelna-cerpadla-vzt/`: 46 zobrazení, 0 kliknutí, pozice 11,5. Přesný dotaz má 15 zobrazení na pozici 14,1. | Připravenou úpravu title/H1 ponechat jako samostatný experiment odlišující studii před instalací od měření skutečného provozu. |
| 4 | EXP-004, `měření vibrací` | 43 zobrazení, 0 kliknutí, pozice 44,7; všechna zobrazení vedou na `/sluzby/mereni-vibraci/`. | Přesný interní odkaz z odborného článku je vhodný; cílová URL je stabilní a nedochází ke kanibalizaci. |

## GEO baseline v GSC — funkce s generativní AI

- Období 26. 7.–22. 8. 2026: **1 102 zobrazení** ve funkcích s generativní AI ve Vyhledávání Google. Přehled je v beta verzi a ukazuje pouze zobrazení, nikoli dotazy, kliknutí nebo poptávky; tato hodnota proto není obchodní konverze.
- Nejviditelnější české odborné vstupy: `/poradna/provozni-rad-zdroje-znecistovani-ovzdusi/` (100 zobrazení), `/poradna/emise-vs-imise-proc-provozovatel-resi-oboji/` (59), `/poradna/oznameni-zameru-eia-co-to-je-a-kdy-je-potreba/` (51) a `/poradna/jednotne-environmentalni-stanovisko-podklady-rychlejsi-rizeni/` (35).
- Kontrolní období 27. 7.–23. 8. 2026: **1 104 zobrazení**. Nejsilnějším českým odborným vstupem zůstává článek o provozním řádu (101), následovaný články `emise vs. imise` (62), oznámení záměru EIA (53) a JES (33). Přírůstky jsou příliš malé pro závěr o trendu a období stále předchází změnám z 24. 8. 2026.
- Z komerčních stránek měly nejvyšší viditelnost `/en/sluzby/hlukove-studie/` (30), česká homepage (14), `/mereni-prasnosti/` (14), `/sluzby/pracovni-prostredi/` (13), `/sluzby/akusticke-posudky/` (12) a `/sluzby/hlukove-studie/` (12).
- Pracovní hypotéza: odborné články jsou hlavním vstupem do AI výsledků. Zachovat jejich odbornou přesnost a přidávat pouze tematicky přesné přechody na související služby; úspěch vyhodnocovat až společně s následnými návštěvami a `generate_lead`, ne podle samotných AI zobrazení.
- Další srovnatelná 28denní kontrola: 21. 9. 2026. Sledovat celková zobrazení, podíl obchodně relevantních českých stránek a návazné konverzní cesty v GA4.

Další technické poznatky:

- GSC stále vykazuje starou URL `http://www.naturchem.cz/` (213 zobrazení a 2 kliknutí), ale živá URL se aktuálně přesměruje na `https://www.naturchem.cz/` a výsledná stránka má správný canonical. Sledovat pokles staré varianty, nyní bez zásahu do kódu.
- Mobilní zařízení měla 13 kliknutí z 1 220 zobrazení, CTR 1,1 % a pozici 8,3; počítače 112 kliknutí z 4 151 zobrazení, CTR 2,7 % a pozici 11,4. Mobilní dotazy jsou však z velké části informační a vícejazyčné, takže samotný rozdíl neprokazuje problém mobilního rozhraní.

## Kontrola po nasazení

- Úspěšný produkční build a známý rollback commit.
- HTTP 200 na změněných URL; canonical a hreflang odpovídají produkční doméně.
- Formulář odešle poptávku a `generate_lead` vznikne až po úspěšném přijetí serverem.
- GSC nemá nový indexační problém a sitemap zůstává dostupná.
- Vercel usage a ISR zápisy zůstávají v bezpečné rezervě tarifu.
