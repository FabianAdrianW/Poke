# Pokémon Hub

A four-view Pokémon browser built to get hands-on with the current
React stack: **Next.js 16 (App Router) · React 19 · TypeScript ·
Tailwind CSS 4 · Supabase**.

**Demo:** _(wklej link po deployu)_

---

## What it does

| View | What's in it |
|---|---|
| **Galeria** | Grid of all Pokémon — image-first browsing |
| **Pokédex** | Per-Pokémon detail: stats, types, sprites |
| **Lista** | Full tabular overview |
| **Wygaszacz** | Fullscreen screensaver mode, auto-cycling |

Data comes from PokéAPI through a server-side route handler, so the
client never calls the external API directly.

## Why it exists

A deliberate exercise, not a product. I wanted a small but complete
surface to work through the things that actually matter in an App Router
project: server vs. client component boundaries, typed API responses,
route handlers as a proxy layer, and shared layout across views with
genuinely different rendering needs.

Interface text is in Polish.

## Running it

```bash
npm install
npm run dev
```

Opens on `http://localhost:3000`.

---

Adrian Wojtasik · [eyelingo.app](https://eyelingo.app)
