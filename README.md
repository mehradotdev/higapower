# Higa Power

A static website for [Higa Power](https://higapower.org) built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Project Structure

- `src/components/` — Modular UI sections and interactive components.
- `src/data/` — Site copy, gallery/testimonial collections, and TypeScript interfaces.
- `src/layouts/` — Base HTML layout with SEO, OpenGraph tags, and JSON-LD schema.
- `src/pages/` — Page entrypoints and static route composition.
- `src/styles/` — Global stylesheet and Tailwind v4 `@theme` design tokens.
- `public/assets/` — Photographs, videos, brand logos, and icons.

## Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`, ready for Cloudflare Pages, Vercel, or Netlify.
