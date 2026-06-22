# Alvaro's Portfolio ☁️

A personal site built with Next.js, React Three Fiber, and Tailwind CSS, themed after the soft blue skies of Studio Ghibli.

## Sections
- **Hero** — animated 3D clouds + a soft sun (Three.js / R3F)
- **About** — a short intro and four quick facts
- **Photos** — polaroid-style gallery (drop images into `public/photos/`)
- **Anime** — handpicked favorites + a link to my [MyAnimeList](https://myanimelist.net/profile/fv5shi)
- **Projects** — what I've been building
- **Contact** — social links

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- **Add photos**: drop files into `public/photos/` and edit the `photos` array in `app/components/Photos.tsx`.
- **Update anime picks**: edit `picks` in `app/components/AnimeList.tsx`.
- **Edit projects**: edit `projects` in `app/components/Projects.tsx`.
- **Theme colors**: tweak the gradients and CSS variables in `app/globals.css`.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed.

## Tech
- [Next.js 16](https://nextjs.org) (App Router)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) for the 3D sky
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
