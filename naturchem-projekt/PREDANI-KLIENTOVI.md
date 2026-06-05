# Předání projektu klientovi — checklist

> **Účel:** Kompletní seznam kroků pro formální předání webu naturchem.cz klientovi.  
> **Architektura:** Next.js na Vercelu · doména u Vedosu · články přes Decap CMS (`/admin`) · e-mail přes Resend.  
> **Poslední aktualizace:** 2026-06-05

---

## Jak web technicky funguje

| Služba | Účel | Kdo musí být vlastník po předání |
|--------|------|-----------------------------------|
| **Vercel** | Hosting webu (Next.js, API formuláře, OAuth pro `/admin`) | Klient |
| **GitHub** | Zdrojový kód, články v `content/articles`, Decap CMS backend | Klient |
| **GitHub OAuth App** | Přihlášení do `/admin` přes GitHub | Klient |
| **Vedos** | Registrace domény `naturchem.cz`, DNS záznamy | Klient |
| **Resend** | Odesílání e-mailů z kontaktního formuláře | Klient |
| **Google Search Console** | Indexace, SEO monitoring (po launchi) | Klient |
| **Google Analytics 4** | Návštěvnost (volitelné, po launchi) | Klient |

**Windows / webhosting u Vedosu pro tento web nepotřebujete.** Web neběží na WEDOS hostingu — jen doména a DNS (případně e-mail `@naturchem.cz`, pokud ho hostujete u Vedosu).

---

## Fáze 1 — Launch na produkční doméně (před předáním)

Proveďte ještě pod vlastním účtem, pak teprve převádějte služby.

| ☐ | Úkol | Poznámka |
|---|------|----------|
| ☐ | DNS u Vedosu směřuje na Vercel | A/CNAME dle instrukcí ve Vercel → Domains |
| ☐ | `www.naturchem.cz` i `naturchem.cz` fungují s HTTPS | |
| ☐ | Env na Vercelu: `NEXT_PUBLIC_SITE_URL=https://www.naturchem.cz` | |
| ☐ | `public/admin/config.yml` — `base_url: https://www.naturchem.cz` | |
| ☐ | GitHub OAuth App — callback `https://www.naturchem.cz/api/decap/callback` | |
| ☐ | Resend — ověřená doména, `RESEND_API_KEY` v env | |
| ☐ | Kontaktní formulář otestován na produkci | Doručení na `naturchem@naturchem.cz` |
| ☐ | `/admin` — přihlášení a publikace testovacího článku | |
| ☐ | Finální QA (desktop + mobil) | Hlavní stránky, poradna, navigace |
| ☐ | `robots.txt`, `sitemap.xml` na produkci | |
| ☐ | Rozhodnutí GDPR / GA4 | Viz ROADMAPA, Oblast 5 |

---

## Fáze 2 — Převod vlastnictví služeb

### 2.1 GitHub (kód + Decap CMS)

| ☐ | Krok |
|---|------|
| ☐ | Převést repozitář na účet/organizaci klienta (`Settings → Transfer ownership`) |
| ☐ | Ověřit v `public/admin/config.yml`: `repo`, `branch: main`, správná `base_url` |
| ☐ | Klient má GitHub účet s **write** přístupem do repa (pro `/admin`) |
| ☐ | Po převodu: odebrat sebe jako vlastníka, nebo zůstat jako collaborator dle smlouvy |

### 2.2 GitHub OAuth App (přihlášení do `/admin`)

Často se na to zapomene — bez toho klient nemůže editovat články.

| ☐ | Krok |
|---|------|
| ☐ | Vytvořit novou OAuth App pod **účtem klienta** (nebo převést existující) |
| ☐ | Homepage URL: `https://www.naturchem.cz` |
| ☐ | Authorization callback URL: `https://www.naturchem.cz/api/decap/callback` |
| ☐ | Zapsat `GITHUB_OAUTH_CLIENT_ID` a `GITHUB_OAUTH_CLIENT_SECRET` do Vercel env klienta |
| ☐ | Redeploy + test `/admin` pod klientovým GitHub účtem |
| ☐ | Starou OAuth App (pod vaším účtem) zrušit, až klientova funguje |

### 2.3 Vercel (hosting)

| ☐ | Krok |
|---|------|
| ☐ | Převést projekt na Vercel tým/účet klienta (`Project Settings → Transfer`) |
| ☐ | Billing a platební karta na klientovi | Viz poznámka o tarifu níže |
| ☐ | Předat a znovu nastavit všechny env proměnné (viz tabulka) |
| ☐ | Redeploy a smoke test na produkci |
| ☐ | Odebrat svůj přístup z týmu klienta (po předání) |

**Environment variables k předání** (tajné hodnoty předávejte bezpečně — ne v běžném e-mailu):

```
NEXT_PUBLIC_SITE_URL=https://www.naturchem.cz
GITHUB_OAUTH_CLIENT_ID=
GITHUB_OAUTH_CLIENT_SECRET=
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAILS=
NEXT_PUBLIC_GA_MEASUREMENT_ID=    # volitelné, až bude GA4
```

### 2.4 Vedos (doména)

| ☐ | Krok |
|---|------|
| ☐ | Klient má přístup do Vedosu (login + 2FA) |
| ☐ | DNS záznamy pro Vercel jsou správně a dokumentované |
| ☐ | **Webhosting / Windows hosting u Vedosu** — lze zrušit, pokud sloužil jen starému webu |
| ☐ | **E-mail `@naturchem.cz`** — pokud běží u Vedosu, nechat; nesouvisí s Vercel hostingem |

### 2.5 Resend (formulář)

| ☐ | Krok |
|---|------|
| ☐ | Účet Resend pod klientem (nebo klient jako owner) |
| ☐ | Ověřená doména `naturchem.cz` |
| ☐ | API klíč v Vercel env |
| ☐ | Test odeslání z `/kontakt` |

### 2.6 Google nástroje (po launchi)

| ☐ | Krok |
|---|------|
| ☐ | Search Console — vlastnictví pod Google účtem klienta |
| ☐ | Odeslat sitemap: `https://www.naturchem.cz/sitemap.xml` |
| ☐ | GA4 (pokud schváleno) — property pod klientem, `NEXT_PUBLIC_GA_MEASUREMENT_ID` ve Vercelu |

---

## Fáze 3 — Dokumentace a předání klientovi

### Krátký provozní návod (předat klientovi)

1. **Články v poradně:** `https://www.naturchem.cz/admin` → Login with GitHub → sekce Poradna → New / Edit.
2. **Publikace článku:** Po uložení v CMS vznikne `.md` soubor v repu → Vercel automaticky nasadí (1–2 min).
3. **Poptávky z webu:** Chodí na e-mail nastavený v `CONTACT_TO_EMAILS`.
4. **Technické problémy:** [kontakt na správce / vás dle smlouvy].

### Seznam přístupů k předání

| Služba | URL | Poznámka |
|--------|-----|----------|
| Web | https://www.naturchem.cz | |
| Redakce | https://www.naturchem.cz/admin | GitHub login klienta |
| Vercel | https://vercel.com/dashboard | Projekt klienta |
| GitHub | https://github.com/…/naturchem-web | Repo klienta |
| Vedos | https://client.wedos.com | Doména + DNS |
| Resend | https://resend.com/emails | API klíč |
| Search Console | https://search.google.com/search-console | Po launchi |

### Šablona předávacího e-mailu

```
Předmět: Předání webu naturchem.cz — přístupy a návod

Dobrý den,

předávám Vám dokončený web naturchem.cz. Níže přístupy a stručný návod.

WEB
- Adresa: https://www.naturchem.cz
- Redakce článků: https://www.naturchem.cz/admin (přihlášení přes Váš GitHub účet)

PŘÍSTUPY
- Vercel (hosting): [login / pozvánka]
- GitHub (zdrojový kód): [login / pozvánka]
- Vedos (doména): [váš stávající přístup]
- Resend (e-maily z formuláře): [login / pozvánka]
- Google Search Console: [po nastavení]

PROVOZ
- Nový článek: /admin → Poradna → přidat článek → publikovat
- Poptávky z kontaktního formuláře chodí na: [e-mail]
- Technická podpora: [kontakt]

POZNÁMKY
- Web běží na Vercelu; webhosting u Vedosu pro tento web není potřeba (stačí doména a DNS).
- [GDPR / Analytics — dle dohody]

S pozdravem,
[jméno]
```

---

## Fáze 4 — Závěrečné ověření (podpis předání)

| ☐ | Kontrola |
|---|----------|
| ☐ | Všechny kritické služby jsou pod účty **klienta** |
| ☐ | Vy nemáte jediný klíč, bez kterého by web přestal fungovat |
| ☐ | Klient umí publikovat článek přes `/admin` |
| ☐ | Formulář na produkci doručuje e-maily |
| ☐ | Klient má písemně potvrzené rozhodnutí k GDPR/GA4 (pokud relevantní) |

---

## Vercel — tarif při předání

| Tarif | Komerční web | Doporučení |
|-------|--------------|------------|
| **Hobby (zdarma)** | Podle ToS Vercelu **ne** — komerční weby vyžadují Pro | Riziko porušení podmínek |
| **Pro (~20 USD/měsíc)** | Ano | **Doporučeno** pro formálně správné předání firemního webu |

Alternativy s bezplatným komerčním provozem: viz `HOSTING-ALTERNATIVY.md`.

---

## Související dokumenty

- `README.md` — technické nastavení (Resend, Decap CMS, Vercel)
- `ROADMAPA.md` — Oblast 5: Launch checklist
- `PROJEKT-STATUS.md` — přehled stacku
- `HOSTING-ALTERNATIVY.md` — alternativy k Vercelu (free + komerční provoz)
