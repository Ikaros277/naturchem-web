# Hosting — alternativy k Vercelu

> **Kontext:** Web naturchem.cz je Next.js (App Router) s API routami (`/api/contact`, `/api/decap/*`).  
> **Požadavek:** Bezplatný nebo levný provoz **s povoleným komerčním využitím** (firemní web).  
> **Poslední aktualizace:** 2026-06-05

---

## Proč ne Vercel Hobby (zdarma)

Vercel Hobby tarif je podle [Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines) určen pro **nekomerční** projekty. Firemní web NATURCHEM je komerční využití → oficiálně **Vercel Pro** (~20 USD/měsíc).

Pro malý B2B web technicky Hobby často stačí, ale při formálním předání klientovi je to riziko.

---

## Srovnání alternativ

| Platforma | Free + komerční? | Next.js API routes | Decap OAuth | Obtížnost migrace |
|-----------|------------------|--------------------|-------------|-------------------|
| **Vercel Pro** | Placené, správně | ✅ Nativní | ✅ Funguje | — (aktuální stav) |
| **Cloudflare Pages + Workers** | ✅ Ano | ⚠️ Přes OpenNext adapter | ⚠️ Nutno otestovat | Střední–vysoká |
| **Netlify** | ✅ Ano (limity) | ✅ Podpora Next.js | ⚠️ Nutno otestovat | Střední |
| **Vedos VPS / vlastní server** | Platí se VPS | ✅ Plný Node.js | ✅ | Vysoká (správa serveru) |
| **GitHub Pages** | ✅ | ❌ Jen statický export | ❌ | Nevhodné (API chybí) |
| **Render / Railway free** | Omezené / často zrušené | ✅ | ✅ | Střední |

---

## 1. Cloudflare Pages (nejlepší free + komerční)

- **Free tier:** komerční provoz povolen, velmi štědrý bandwidth ([Cloudflare Pages](https://www.cloudflare.com/developer-platform/products/pages/))
- **Limity:** např. 500 buildů/měsíc na free
- **Next.js:** vyžaduje adaptaci přes `@opennextjs/cloudflare` — ne nativní jako na Vercelu
- **API routes:** běží na Workers (jiné runtime než Node.js — nutné otestovat Resend SDK, OAuth)
- **Doména u Vedosu:** DNS lze směřovat na Cloudflare (klient přesune DNS k Cloudflare, nebo CNAME)

**Vhodné když:** klient chce 0 Kč hosting a akceptuje jednorázovou migraci.

---

## 2. Netlify

- **Free tier:** komerční provoz **povolen** (na rozdíl od Vercel Hobby)
- **Limity free:** řádově 100 GB bandwidth, 125k function invocations/měsíc (dost pro malý firemní web)
- **Next.js:** podporováno, ale ne tak hluboká integrace jako Vercel
- **Migrace:** přepojení Git repo, env proměnné, upravit OAuth callback URL

**Vhodné když:** chcete „Vercel-like“ DX bez poplatku a s komerčním provozem.

---

## 3. Vercel Pro (doporučení při zachování současného stacku)

- **Cena:** ~20 USD/měsíc / seat
- **Výhoda:** žádná migrace, vše už funguje včetně `/admin`
- **Formálně:** v pořádku pro komerční web

**Vhodné když:** priorita je rychlé předání a minimální riziko.

---

## 4. Vedos VPS / vlastní hosting

- Klient už má Vedos — teoreticky VPS s Node.js
- **Nevýhoda:** správa serveru, SSL, deploy skripty, zálohy — pro tento projekt zbytečná zátěž
- **Cena:** VPS není zdarma

**Nevhodné** pro tento typ projektu, pokud není důvod držet vše u jednoho providera.

---

## 5. Co není vhodné

| Řešení | Proč ne |
|--------|---------|
| **GitHub Pages** | Chybí serverless API (formulář, Decap OAuth) |
| **Čistý statický export** | Stejný problém — `/api/contact` a `/api/decap` by nefungovaly |
| **Vercel Hobby pro klienta** | Porušení ToS u komerčního webu |

---

## Praktické doporučení pro NATURCHEM

| Priorita | Varianta | Roční náklad (řádově) |
|----------|----------|------------------------|
| **1. (nejméně práce)** | Zůstat na **Vercel Pro** | ~5 000 Kč/rok |
| **2. (zdarma + správně)** | **Cloudflare Pages** po migraci | 0 Kč (free tier) |
| **3. (kompromis)** | **Netlify** free po migraci | 0 Kč (free tier) |

Migrace na Cloudflare/Netlify není triviální — odhad **1–2 dny** práce včetně testu formuláře a `/admin`.

---

## Služby nezávislé na hostingu

Tyto služby zůstávají stejné bez ohledu na hosting:

- **Resend** — e-mail (free tier: omezený počet e-mailů/den)
- **GitHub** — kód + Decap CMS (free pro veřejné/privátní repo dle plánu)
- **Vedos** — doména (platí se obnovení domény)
- **Google Search Console** — zdarma
