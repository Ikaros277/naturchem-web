# Redakce webu — návod pro klienta (`/admin`)

> **Web:** https://www.naturchem.cz  
> **Redakce:** https://www.naturchem.cz/admin  
> **Repozitář:** https://github.com/Zluti/naturchem-web  

---

## Co klient potřebuje (a co ne)

| Potřebuje | Nepotřebuje |
|-----------|-------------|
| GitHub účet s **oprávněním zapisovat** do repozitáře `Zluti/naturchem-web` | Přístup do Vercelu |
| Přihlášení v `/admin` přes GitHub | Ruční deploy nebo úpravy kódu |

**Vercel je jen automatický „tiskárna“:** po uložení článku v CMS se změna zapíše do GitHubu a Vercel web sám znovu nasadí (obvykle za 1–3 minuty). Klient do Vercelu vůbec nemusí.

---

## Jak publikovat článek (3 kroky)

1. Otevřete **https://www.naturchem.cz/admin** a přihlaste se přes **GitHub**.
2. V sekci **Poradna** vyberte článek (nebo **New Poradna** u nového).
3. Upravte text a klikněte **Publish** (ne jen zavřít okno).

Po úspěšném Publish:

- v GitHubu vznikne nový commit u souboru v `content/articles/`,
- Vercel spustí deploy (klient to nevidí, ale proběhne automaticky),
- po **1–3 minutách** je změna na webu (ověřte v anonymním okně prohlížeče).

---

## Pole ve formuláři

| Pole | Účel |
|------|------|
| **Nadpis** | Titulek stránky (H1) |
| **Slug** | URL adresa — **neměnit**, pokud už článek běží |
| **Perex** | Box „Stručně“ nahoře pod titulkem |
| **Autor** | Jméno pod titulkem |
| **Datum publikace** | Kdy článek poprvé vyšel |
| **Datum aktualizace** | Zobrazí se u autora — při větší úpravě změňte |
| **Obsah** | Tělo článku (Markdown) |

---

## Když se web po Publish nezmění

Postupujte v tomto pořadí:

1. **Publish znovu** — objevila se červená chyba? (práva, přihlášení, síť)
2. **GitHub** — otevřete soubor článku v repu `Zluti/naturchem-web` → je v něm nový text?
   - **Ne** → úprava se neuložila; napište správci webu.
   - **Ano** → počkejte 3 minuty a obnovte stránku článku (Ctrl+F5 nebo anonymní okno).
3. **Správce webu** ověří ve Vercelu, že poslední deploy běžel **po** tom commitu.

---

## Časté chyby

- **Zavřít editor bez Publish** — změny zůstanou jen v prohlížeči, na web se nedostanou.
- **Úprava jen v editoru, bez commitu** — web čte soubor z GitHubu, ne z redakce přímo.
- **Špatný slug** — změní se adresa článku a stará URL přestane fungovat.
- **Tabulky bez Markdown syntaxe** — na webu se rozbijí; používejte `| sloupec | … |`.

---

## Pro správce webu (jednorázová kontrola)

Všechny tři body musí ukazovat **stejné repo** `Zluti/naturchem-web`, větev `main`:

- [ ] Vercel → Project → Settings → Git → Connected Repository  
- [ ] `public/admin/config.yml` → `backend.repo`  
- [ ] Klient je **collaborator** na GitHubu s write přístupem  

GitHub OAuth App (pro `/admin`):

- Homepage URL: `https://www.naturchem.cz`
- Callback: `https://www.naturchem.cz/api/decap/callback`
- `GITHUB_OAUTH_CLIENT_ID` a `GITHUB_OAUTH_CLIENT_SECRET` ve Vercel env

Po změně `config.yml` je nutný **deploy** — nová konfigurace CMS se načte až z produkce.

---

## Technická podpora

Při problémech s redakcí kontaktujte správce webu. Uveďte:

- URL článku,
- čas kliknutí na Publish,
- screenshot případné chyby v `/admin`.
