# Zain Movers and Packers — Website

Lead-generation site for a licensed UAE moving company. Next.js App Router,
Tailwind CSS v4, shadcn/ui on Base UI primitives, TypeScript.

## Getting started

```bash
pnpm install
cp .env.example .env     # then fill in the values
pnpm dev
```

Open <http://localhost:3000>.

## Environment

See `.env.example`. Two things matter before going live:

- **`APP_URL`** must be the production origin. Canonical URLs, OG tags,
  `sitemap.xml` and `robots.txt` are all derived from it.
- **`RESEND_API_KEY`** powers the quote form. Without it the form fails closed —
  the visitor is told to call or WhatsApp instead, and the error is logged.

## How content works

Content lives in `../content/*.md` as the **source of truth for copy only**.
It is not parsed at build or runtime — there is no `gray-matter`, no MDX
pipeline. Every heading, paragraph, FAQ, price and stat is hardcoded into the
relevant `page.tsx`. When the markdown changes, edit the corresponding page.

Page-type templates live alongside the routes:

| Page type   | Route             | Section components        |
| ----------- | ----------------- | ------------------------- |
| Home        | `/`               | `components/home/`        |
| Service     | `/services/*`     | `components/service/`     |
| Emirate     | `/locations/*`    | `components/location/`    |
| Dubai area  | `/dubai/*`        | `components/dubai-area/`  |
| About       | `/about`          | `components/about/`       |
| Contact     | `/contact`        | `components/contact/`     |
| Legal       | `/privacy-policy`, `/terms-and-conditions` | `components/shared/LegalPage.tsx` |

Each page type has a deliberately different section arrangement — they share
primitives (`QuoteForm`, `FAQSection`, `CTASection`, `TrustBadges`,
`ProcessSteps`, `StatsBar`, `Breadcrumbs`) but not their layout.

## Design system

`lib/DESIGN.md` is the authority: Source Serif 4 headings, Inter body, terracotta
primary used only for actions, and **zero border radius everywhere** (the radius
scale is pinned to `0px` in `app/globals.css`; `rounded-full` is reserved for
avatars and the WhatsApp FAB).

Reference renders are in `../designs/`.

## Images

All imagery currently renders through `components/shared/PlaceholderImage.tsx`,
which draws a neutral block at the exact final dimensions. To drop in real
photography, pass `src` — the intrinsic size stays the same, so nothing shifts:

```tsx
<PlaceholderImage src="/photos/villa-move.jpg" width={720} height={540} alt="…" />
```

OG cards in `public/og/` are generated placeholders; replace them with real
artwork at 1200×630 using the same filenames.

## SEO

- Metadata comes from `MetadataTemplate()` in every `page.tsx`.
- `MovingCompany` JSON-LD renders once per page from the root layout.
- Inner pages add `BreadcrumbList`; service, location and area pages add
  `Service`; every page with FAQs adds `FAQPage`.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt`.

## Checks

```bash
pnpm build          # typechecks and prerenders all 22 routes
npx tsc --noEmit
npx eslint app components lib actions data
```
