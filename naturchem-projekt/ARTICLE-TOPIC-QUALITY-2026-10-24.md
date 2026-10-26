# Správná témata jazykových článků — 24. 10. 2026

Poznámka k navazující etapě: tento dokument zachycuje samostatnou opravu témat před změnou textů. Ve stejné lokální větvi následně vznikl první německý překlad a ochrana adres kapitol, popsané v [ARTICLE-LANGUAGE-REPAIR-2026-10-24.md](ARTICLE-LANGUAGE-REPAIR-2026-10-24.md). Produkce je stále beze změny.

## Stav a účel

Pouze lokální oprava ve větvi `codex/article-topic-quality-2026-10-24`, oddělené pracovní kopii na produkčním základu `6e87fddb24c45b15ec7e95ab94c81b08d682b0c9`. Bez commitu, push, CMS změny nebo produkčního nasazení. Rozpracovaná CI údržba v jiné kopii se nepřenáší. Původní Cursor checkout, `.agents/` a čekající právní úpravy jiných větví zachovány.

Účel: návštěvník má pod tématem pracovního prostředí, hluku nebo dokumentace najít odpovídající články a službu, nikoli nesouvisející emise. Jde o opravu pozorované chyby, ne o nový obsahový experiment, rozšíření jazykových URL nebo slib růstu vyhledávacích pozic.

## Ověřený baseline

Na veřejné německé stránce článku o mikroklimatu byl zobrazen štítek Emissionen, přestože její vlastní metadata obsahují Work environment. Společný resolver přijímal pouze české kanonické hodnoty a starý český Hluk; přeložené hodnoty ignoroval. Následná heuristika hledala česká slova v anglických a německých titulcích a často vrátila výchozí Emise.

Kontrola podle skutečného frontmatter slugu, nikoli názvu souboru, zjistila 55 anglických a 58 německých článků se zařazením odlišným od téhož českého článku. Názvy souborů nelze zaměňovat se slugy: repozitář obsahuje již ošetřené CMS kolize/přejmenování.

## Implementace

- Resolver převádí existující oficiální EN/DE názvy témat zpět na český interní klíč, který již používají filtry, ikony a návaznost na služby.
- Zachována česká témata, pořadí priorit a fallback pro články bez tématu. Doplněny starší varianty Noise a Work environment.
- Alias lookup používá Map: neznámé hodnoty včetně názvů vlastností prototypu nejsou považovány za platné téma.
- Regenerované anglické a německé seznamy poradny nyní nesou správný klíč tématu. Dva obrázkové manifesty přestaly uvádět nepoužívaný emisní thumbnail jako fallback článku; původní obrázky ani jejich publikované URL se nemažou nebo nepřepisují.
- Nový `test:article-topics` je součástí kompletního `verify`. Testuje všechny současné zdroje i kanonické, lokalizované a historické názvy, neznámé hodnoty, statické filtry a související službu pracovního prostředí.

Žádné změny textů, nadpisů, dat vydání, odborných tvrzení, cen, oprávnění, právních zdrojů, slugů, formulářů, analytických událostí, publikačního plánu, hostingu nebo tarifů.

## Ověření

- `npm run verify`: PASS včetně buildu a všech dosavadních regresních kontrol. Devět existujících lint warnings / žádná chyba; build dále hlásí starší metadataBase upozornění na pomocných výstupech, nejde o audit bez upozornění.
- Nový test: 246 zdrojů a dva zachované title fallbacky. Po opravě je 78 EN i 78 DE položek shodných s českým tematickým zařazením při párování podle skutečného slugu.
- Porovnání s uloženým a kryptograficky ověřeným baseline téhož produkčního SHA: stejných 592 veřejných HTML, stejné H1, title/description/canonical/hreflang/robots a ostatní JSON-LD. Pouze zamýšlený Article.articleSection se mění u 113 EN/DE článků.
- Všech 198 českých HTML má stejný normalizovaný obsah. Porovnání vynechává generované JS/RSC skripty, odkazy na sestavené CSS/JS, frameworkové komentáře a pořadí hreflang tagů; přesná množina hreflang tagů je kontrolována samostatně. Není to pixelové srovnání snímků.
- Model gzip přenosu HTML/CSS/JS na CS/EN/DE homepage, českém kontaktu, emisích a německém mikroklimatu: shodné množství JS a CSS. HTML rozdíly −15 až +5 B jsou zanedbatelné, neprezentovat jako naměřené zrychlení či PageSpeed skóre.
- Lokální GET smoke: 585 URL a 302 dalších interních odkazů, žádná chyba. Žádný formulář ani e-mail se neodesílal.
- V prohlížeči ověřen správný štítek Arbeitsumgebung v článku a první stránka výsledků filtru podle stejného tématu. Chrome následně stránku automaticky přeložil do angličtiny; kontrola skutečných href potvrdila očekávaných 12 výsledků a přítomnost mikroklimatu. Nastavení překladače se neměnilo. Výsledky automatického překladu nejsou zdrojem jazykového auditu.

## Samostatný nedořešený problém

Nejméně 20 německých článků má německé titulky/úvody, ale tělo totožné s anglickým protějškem. To bylo ověřeno přímo ve zdrojích, nikoli odvozeno z překládajícího prohlížeče. Tato oprava kategorizace tyto texty nepřekládá a nesmí být vydávána za dokončenou opravu německého obsahu. Inventář a příklady jsou v soukromém podkladu ve výstupech vlákna.

Google doporučuje jednotný zřejmý jazyk hlavního obsahu a navigace; samotné lang/hreflang nenahrazuje skutečný překlad: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites (ověřeno 24. 10. 2026). Nevyvozovat automatickou penalizaci, kauzalitu nízké návštěvnosti nebo zaručené AI doporučení.

## Vyhodnocení a vydání

Hypotéza: správný filtr, štítek a související služba omezí nesprávné směrování návštěvníka. Dopad na kvalifikované poptávky zatím není změřen; české služby zůstávají prioritou. Nevytvářet kvůli této místní opravě novou produkční fázi ani nepřepisovat začátek již probíhajícího měření.

Případné vydání vyžaduje výslovný souhlas, nové porovnání main/produkce a přezkoumání diffu. Rollback: reverzní změna izolovaného budoucího commitu včetně odvozených manifestů, bez rušení článků či jejich URL. Mapa na kontaktu zůstává beze změny do vyjádření vlastníka.
