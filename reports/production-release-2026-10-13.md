# Schválené nasazení — 13. 10. 2026

Uživatel výslovně požádal o nasazení prohlédnuté lokální verze na Naturchem.cz. Souhlas zahrnuje její uložení do správného repozitáře a produkční nasazení; nezahrnuje změnu tarifu ani odeslání testovací poptávky.

## Kontrola základu a rozsahu

- Repozitář: `https://github.com/Ikaros277/naturchem-web.git`.
- Práce pouze ve větvi `codex/visual-cohesion-2026-10-12`, nikoli v rozpracovaném checkoutu Cursoru. Jeho změny včetně `.agents/` zůstávají nedotčené.
- Načtený GitHub `main` i aktuální produkce Vercelu odpovídají `e3d30e1036e37ea1e4d6c3d35ad5b4e08ae089ca`.
- Předchozí funkční deployment: `3hTpz8KVA92NtVNVcM6KQKdWR3C4`, adresa `web-naturchem-pf6zoaztg-ikaros277s-projects.vercel.app`, stav Ready.
- Kontrola změn: sjednocené stránky a navigace, zachované odborné texty a odkazy, korektní autorství a rozsah GHG, přístupnost, statické obrázky a menší fonty/CSS. Žádné změny formulářového backendu, DNS, produkčních proměnných nebo placených služeb.

## Ověření a omezení

Před odesláním musí znovu úspěšně skončit `npm run verify` a relevantní místní HTTP/SEO smoke testy. Výsledky 24 srovnatelných rychlostních běhů a úplného auditu 579 stránek jsou v `seo-geo-performance-polish-2026-10-13.md`. Desktopové laboratorní skóre 100 neznamená mobilní 100 ani zaručené umístění v Googlu. Mobilní skóre není plošně lepší; přenosy jsou menší a reference/FAQ se ve vzorku zlepšily.

## Vercel před nasazením

Projekt `web-naturchem`, tým `ikaros277s-projects`, tarif Hobby. Přehled projektu za posledních 30 dnů (13. 9. – 13. 10.) ukazuje úložiště deploymentů 2,46 GB, Fast Origin Transfer 8,87 / 10 GB a ISR Reads 1,1 milionu. Jde o konkrétní zvolený přehled, nikoli záruku budoucí spotřeby nebo její vynulování nasazením. Tarif se nemění a staré deploymenty se nyní nemažou.

## Jediné nasazení a návrat

Po kontrolách uložit jeden release commit v pracovní větvi a poslat jej fast-forwardem do vzdáleného `main`, bez force a bez přepínání místní větve na main. Vercel Git integrace výslovně uvádí automatické produkční nasazení z main. Nevytvářet další CLI deployment ani zbytečný preview deployment.

Počkat na Ready, ověřit shodný commit a doménu `www.naturchem.cz`, poté provést veřejné GET kontroly důležitých stránek, SEO, souborů a kontaktu; skutečnou poptávku neposílat. Vizuálně zkontrolovat PC a mobil. Konečný výsledek zaznamenat do samostatného výstupního protokolu, aby jeho doplnění nevyvolalo druhý deployment.

Při kritické regresi použít předchozí deployment jako návratový bod; Git případně obnovit nedestruktivním revertem release commitu ve vyhrazené větvi. Předchozí commit a deployment se nesmějí smazat.
