# Poradna články (Markdown)

Články žijí v této složce (`articles` = CS, `articles-en`, `articles-de`).

## Frontmatter

```yaml
---
title: Název článku
slug: url-slug
excerpt: Krátký perex.
topic: ovzdusi
author: NATURCHEM
publishedAt: 2026-08-15
# volitelně přesný čas (UTC):
# publishedAt: 2026-08-15T08:00:00.000Z
status: published   # draft | scheduled | published (výchozí published)
heroImage: /hero/poradna/example.jpg
---
```

## Odložená publikace

V redakci **https://www.naturchem.cz/admin** → **Poradna** → článek:

1. **Stav publikace** = „Publikovat (podle data níže)“
2. **Datum publikace (i odložené)** = budoucí den
3. **Publish**

Článek zůstane skrytý na webu do zvoleného data.  
**Koncept:** stav „Koncept (skrytý na webu)“ — skrytý, dokud stav nezměníte.

Podrobný návod: `naturchem-projekt/PROVOZ-ADMIN-CMS.md`.

### Frontmatter (pro úpravy mimo CMS)

```yaml
---
title: Název článku
slug: url-slug
excerpt: Krátký perex.
topic: ovzdusi
author: NATURCHEM
publishedAt: 2026-08-15
status: published   # nebo draft
heroImage: /hero/poradna/example.jpg
---
```

Nasazený článek s budoucím `publishedAt` se po uplynutí data zpřístupní sám (obnova stránky cca každých 5 minut). Draft vyžaduje změnu `status` a Publish/nasazení.

Vyhledávání v poradně se aktualizuje při generování search indexu (build / `scripts/generate_poradna_search_index.py`).
