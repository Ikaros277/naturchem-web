# NATURCHEM website operating rules

## Objective

Grow qualified B2B inquiries for NATURCHEM through organic search and a clear conversion path. Traffic alone is not success. The primary conversion is a successfully submitted inquiry form; phone and email clicks are secondary conversions.

## Sources of truth

- Use current production behavior, current repository code, Google Search Console, analytics and verified business facts as the source of truth.
- Project documents under `naturchem-projekt/` are valuable context but may be stale. Verify their status against the current code and live site before acting.
- Prefer measured opportunities over speculative redesigns. Record the baseline and expected effect for every growth change.

## Audience and writing

- Prioritize Czech B2B visitors: EHS/OZP managers, owners of smaller industrial companies, public-sector specialists, project designers and investors.
- Follow `naturchem-projekt/00-strategie/tone-of-voice.md` and `personas.md`.
- Address visitors formally as `Vy` in Czech copy.
- Never invent expertise, authorizations, deadlines, prices, references, statistics, legal claims or technical details. Mark uncertain factual copy `[OVERIT S HEZINOU]` and do not publish it until verified.
- For legal or technical articles, use primary authoritative sources and retain source links where appropriate.
- Use short, descriptive article headings. Remove rhetorical add-ons and AI-like filler such as "a proč nestačil jeden údaj" or comments about what "this article" does. Keep useful explanations and essential qualifications, but never pad text to reach a word count.
- Serve photographs and raster illustrations in appropriately sized WebP/AVIF variants. Prefer build-time static variants over repeated on-demand image transformations. Retain SVG for vector graphics and tiny PNG assets when conversion would be larger or less suitable; preserve source files and published immutable URLs.
- Never use article illustrations with added text labels, arrows, measurement annotations or other explanatory overlays. Inspect the full-size source, not just its thumbnail. Keep any necessary explanation in the caption outside the image.
- Before publication, verify every legal number, paragraph, standard edition, numerical limit and procedural claim against the applicable primary source. Record the source, effective date and scope of applicability; do not treat old guidance, search snippets or another client's protocol as proof of current requirements. Claims about our own work must match the actual job documents and any reference photograph. Unverified claims remain unpublished pending Ing. Hezina's expert review.

## SEO and conversion priorities

- Protect existing indexed URLs, redirects, canonicals, hreflang and structured data.
- Optimize first for qualified Czech demand and commercial intent, then for relevant informational traffic.
- Every article should lead naturally to the most relevant service or inquiry action. Do not add generic or intrusive CTAs.
- Treat index bloat, duplicate language pages and unrelated PDF traffic as quality issues to evaluate, not vanity traffic to maximize.
- Track successful form submissions with `generate_lead`; never count a button click as a completed inquiry.

## Working agreement

- Never work directly on `main`. Use a dedicated `codex/*` branch or Codex worktree.
- Preserve unrelated user changes, especially Cursor activity files under `.agents/`.
- Do not commit secrets or real environment values. Keep `.env*` local and use Vercel environment variables.
- Do not push, merge, publish CMS content, change DNS or deploy to production without an explicit production instruction or an agreed deployment policy.
- Prefer small, reversible changes with a stated hypothesis and verification evidence.
- Before proposing a merge, run `npm run verify`. Also run the relevant SEO smoke checks when network and certificates permit.
- A production deployment requires a successful build, review of the diff, and a rollback path.

## Reporting

- Report outcomes in business language: affected query/page, baseline, change, expected lead impact and how the result will be measured.
- Do not claim SEO improvement before enough post-change data exists. Separate observed results from hypotheses.
