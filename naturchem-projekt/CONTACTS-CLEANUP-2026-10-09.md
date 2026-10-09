# Úprava veřejných kontaktů 9. 10. 2026 — lokální

Na přímé zadání vlastníka odstraněna kontaktní karta Markéty Žilkové z veřejného týmu CS/EN/DE. Zůstává Ing. František Hezina se stávajícími dvěma telefony a Petra Svátová s dosavadním telefonem a e-mailem. Sdílené kontaktní karty používají stejný dvoučlenný seznam.

WhatsApp dříve odkazoval na číslo odstraněného kontaktu; nyní se jeho komponenta vůbec nemountuje na žádné stránce. Není to pouze CSS skrývání nebo změna Vercel proměnné. Tawk.to, firemní telefon/e-mail, formulář, consent a `generate_lead` zachovány. Původní ilustrace a immutable soubory nejsou mazány; změna je vratná. Odborné profily zbývajících osob se nepřepisují.

Jde o aktuálnost kontaktů podle vlastníka, nikoli nový růstový experiment nebo tvrzení o konverzním/SEO přínosu. Poptávky směřují na zbývající ověřené kontakty a hlavní formulář.

`npm run verify` a produkční build PASS včetně nových guardů: přesně dva schválené kontakty, všechny jejich telefonní odkazy ve vykresleném HTML všech tří jazyků, absence odstraněného kontaktu a zákaz mountování WhatsAppu při zachování Tawk.to. Dosavadní source/SEO/performance testy zachovány. Routing/canonical/hreflang/redirect a neplatná lokální formulářová validace bez chyby; žádná skutečná poptávka nebyla odeslána.

Finální sitemap smoke na portu 3123: 521 adres a 237 dalších interních odkazů, bez chyby. `git diff --check` PASS.

Ruční vizuální kontrola lokální stránky po interakci a načtení odložených widgetů: dvě kontaktní karty, tři správné telefonní odkazy, žádný odkaz `wa.me` ani `.live-chat-whatsapp`, bez horizontálního přetečení. Snímek `naturchem-contacts-cleanup-2026-10-09.png` uložen pouze do soukromých výstupů.

Aktuální sestavený náhled: `http://127.0.0.1:3123/o-spolecnosti-naturchem/`. Starší mnou spuštěný náhled na portu 3124 ukončen, aby neukazoval staré kontakty. Vlastník dne 9. 10. výslovně schválil společné vydání všech úprav článků i odstranění kontaktu na Žilkovou. Pracovní větev `codex/article-reading-layout-2026-10-09` proto vydá oba schválené celky současně, včetně dříve zadaného skrytí WhatsAppu. Hlavní checkout s Cursor změnami nebyl upravován. Nasazení musí projít novým kompletním verify, kontrolou diffu a potvrzením konkrétního produkčního SHA. Rollback: dosavadní Ready `9f9864a` / `BCaTFA3r3nZhoBcQ28F9Q14Fcgy6`; žádný rollback se nyní neprovádí.
