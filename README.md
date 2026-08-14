# Higa Power

A static Astro website for Higa Power, ready for Cloudflare Pages or Vercel.

## Update the site

- Main page copy and section structure: `src/pages/index.astro`
- Testimonials and gallery captions: `src/data/content.ts`
- Brand styles and responsive layout: `src/styles/global.css`
- Photographs, logo, favicon, and social card: `public/assets/images`

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The deployable static site is generated in `dist/`.

For Cloudflare Pages or Vercel, use `npm run build` as the build command and `dist` as the output directory.
