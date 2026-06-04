Vygeneruj stručný přehled stavu projektu naturchem.cz. Bez implementace, jen status briefing.

**Postup:**

1. Spusť `git log --oneline -8` abys viděl poslední commity — zjistíš kdy a na čem se naposledy pracovalo.
2. Přečti `naturchem-projekt/ROADMAPA.md` — úplný stav projektu a všechny oblasti. *(Soubor je v `.gitignore`, ale lokálně existuje a musí být čitelný.)*
3. Přečti nejnovější sezení z `reports/report.md` — co bylo uděláno a v jakém kontextu.

Z těchto tří zdrojů urči: (a) poslední commit = kde přesně se skončilo, (b) jaký úkol z ROADMAPA.md to odpovídá, (c) co logicky navazuje.

**Výstup — přehledný briefing v češtině:**

```
## Status — naturchem.cz [dnešní datum]

**Roadmapa:** [naturchem-projekt/ROADMAPA.md](naturchem-projekt/ROADMAPA.md)

### Kde jsme skončili
[1 věta — konkrétní poslední provedená věc: která stránka, která sekce, co přesně bylo naposledy dokončeno. Vychází z posledního commitu + report.md.]

### Co bylo v posledním sezení uděláno
[2–3 věty shrnutí posledního sezení z report.md — co a proč.]

### Aktuální fáze projektu
[Z ROADMAPA.md — v jaké oblasti se teď pracuje, kolik % hotovo odhadem.]

### Co zbývá — prioritní položky
[5–6 nejdůležitějších zbývajících položek z ROADMAPA.md označených 🔲, seřazených dle dopadu. Formát: "• [oblast] — konkrétní úkol".]

### Doporučeno: pokračovat zde
[Konkrétní 1 úkol pro toto sezení — logické pokračování od místa kde se skončilo, s nejvyšším dopadem. Uveď: která stránka, která komponenta, co konkrétně udělat. Max 3 věty.]

**Nepředkládat jako další úkol** stránky už označené ✅ v ROADMAPA Oblast 2 (např. O společnosti = C2, Akreditace = C3). Navazuj na první 🔲 z copy sprintu C4–C9 nebo launch/SEO.

### Otevřené otázky (čeká na Hezinu)
[Vše z ROADMAPA.md označené jako ❓ — jen seznam, bez komentáře.]
```

Výstup pouze v češtině. Žádný kód ani technické detaily — briefing pro okamžité navázání na práci. Odkaz na roadmapu v hlavičce výstupu vždy ponech beze změny (klikací cesta k `naturchem-projekt/ROADMAPA.md`).
k `naturchem-projekt/ROADMAPA.md`).

k `naturchem-projekt/ROADMAPA.md`).
