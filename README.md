# BUMBLYZ

Premium, editorial ecommerce storefront for BUMBLYZ Drop 01.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Updating products and assets

- Product names, prices, colours, sizes, descriptions, availability and image paths live in `data/products.ts`.
- Campaign and placeholder product photography lives in `public/images/`.
- The provided BUMBLYZ bee logo is stored as `public/brand-logo.webp` and rendered through the shared `components/brand-logo.tsx` component.
- Checkout is intentionally a non-transactional handoff page and is ready for a real payment provider to be connected later.

## Photography credits

Temporary campaign photography is sourced from Unsplash and Pexels and is organized for straightforward replacement with BUMBLYZ-owned imagery:

- Diego López / Unsplash
- Matt Hardy / Pexels
- Tnarg / Pexels
- Mediamodifier / Unsplash
- Hannah Morgan / Unsplash
- Clem Onojeghuo / Unsplash
- freestocks / Unsplash
