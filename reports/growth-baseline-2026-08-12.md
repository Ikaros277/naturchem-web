# Growth baseline — 12. 8. 2026

This report records the evidence used for the first Codex growth branch. It separates measured data from change hypotheses; it is not a claim that rankings or inquiries have already improved.

## Primary outcome

- Primary conversion: successfully submitted inquiry form (`generate_lead`).
- Secondary conversions: phone and email clicks.
- Decision rule: prioritize qualified Czech B2B demand and preserve the exact service context through the inquiry funnel.

## Google Search Console baseline

Period: 10 May–9 August 2026 (Web search, all countries unless stated otherwise).

- 209 clicks, 8,597 impressions, 2.4% CTR, average position 14.0.
- Previous comparable period: 128 clicks, 2,654 impressions, 4.8% CTR, average position 8.0.
- Czechia: 184 clicks, 4,298 impressions, 4.3% CTR, average position 7.8.

Measured opportunities used in this branch:

| Query or page | Clicks | Impressions | CTR | Position | Change hypothesis |
| --- | ---: | ---: | ---: | ---: | --- |
| `emise a imise` | 0 | 227 | 0% | 11.1 | A query-first article title and concise description should make the result clearer and improve relevance/CTR. |
| `imise a emise` | 0 | 106 | 0% | 9.1 | Same article cluster as above. |
| `měření hluku české budějovice` | 0 | 93 | 0% | 9.1 | A useful local landing page should replace the generic homepage as the relevant result. |
| `/poradna/oznameni-zameru-eia-co-to-je-a-kdy-je-potreba/` | 3 | 134 | 2.2% | 5.6 | Shorter title and description should expose the answer before Google truncates the result. |
| `/poradna/protihlukova-opatreni-pred-merenim-hluku/` | 3 | 113 | 2.7% | 8.3 | Put the main query and practical benefit earlier in the title and description. |
| `/poradna/jednotne-environmentalni-stanovisko-podklady-rychlejsi-rizeni/` | 0 | 99 | 0% | 5.5 | A shorter JES title and description should improve result clarity for a commercially relevant topic. |
| legacy `/prodej.php` | 2 | 43 | 4.7% | 8.3 | Redirect to the current sales hub instead of serving the homepage under the obsolete URL. |
| legacy `/about.php` | 0 | 89 | 0% | 3.1 | Redirect to the current company page instead of serving the homepage under the obsolete URL. |
| legacy `/kariera.php` | 4 | 67 | 6.0% | 3.2 | Return a real permanent redirect rather than a homepage rewrite under the obsolete URL. |

The Indexing report (last updated 7 August 2026) showed 483 indexed URLs and 131 excluded URLs. Eight examples were classified as 404. The branch fixes the commercially meaningful examples `about.php`, `kariera.php`, `prodej.php`, `kontakt-Kontakt` and both variants of the broken woodworking-service URL. The obsolete `/$` path and a stale hashed Next.js font remain legitimate 404s rather than being redirected without a relevant destination.

Deliberately not targeted in the first branch:

- The query `ispop` had 118 impressions and average position 5.5 overall, but a Czechia-only check showed 5 impressions, 0 clicks and position 37.8. Most visibility belonged to the English page/international intent, so no speculative Czech change was made.
- The legacy Delta OHM PDF generated 1,387 impressions and 6 clicks, but the current commercial relevance and the correct destination are not verified. It remains a follow-up business decision rather than receiving an unsafe redirect.

## GA4 baseline and measurement changes

Property: NATURCHEM (`G-BTS1KN7M3W`). Last seven days at the time of review:

- Organic Search: 48 sessions.
- Direct: 18 sessions.
- Referral: 7 sessions.
- Paid Search: 3 sessions.
- AI Assistant: 1 session.

Measurement prepared on 12 August 2026:

- `generate_lead` is marked as a key event. This does not convert historical events retroactively.
- Event-scoped custom dimension `inquiry_category` is registered as **Kategorie poptávky**.
- Event-scoped custom dimension `service_interest` is registered as **Konkrétní služba poptávky**.
- The branch preserves the exact CTA service in the form submission and in `service_interest`; the broader form category remains in `inquiry_category`.

These dimensions will receive data only after the corresponding website branch is deployed.

## Evaluation windows

- Redirects and form-context preservation: verify immediately on Vercel Preview, then again after production deployment.
- Lead attribution: review after the first real post-deployment inquiries; do not send a fake production inquiry.
- Query/page CTR: compare 28 complete days after deployment with the preceding 28 complete days, controlling for country (Czechia) and query/page.
- Ranking/local landing changes: use at least 28 days of data and distinguish impressions, clicks, CTR and average position from qualified inquiries.

## Pre-deployment verification

- `npm run verify` passes: lint has 0 errors (19 pre-existing warnings), TypeScript passes and the Next.js 16.2.6 production build generates 537 pages.
- The local production server returns the Czech root and clean Czech URLs without redirect loops; explicit `/cs/` URLs redirect once to the canonical unprefixed form.
- The expanded smoke test checked 489 unique sitemap URLs and 135 additional internal links discovered in rendered pages: 0 sitemap failures and 0 broken internal links.
- Legacy and malformed URLs identified in Search Console, including `about.php`, `prodej.php`, `kariera.php`, `kontakt-Kontakt` and the woodworking-service variants, resolve through permanent redirects to relevant live pages.
