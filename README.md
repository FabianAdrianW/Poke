# Pokémon Hub

A four-view Pokémon browser built to get hands-on with the current
React stack: **Next.js 16 (App Router) · React 19 · TypeScript ·
Tailwind CSS 4**.


---

## What it does

| View | What's in it |
|---|---|
| **Galeria** | Grid of all Pokémon — image-first browsing |
| **Pokédex** | Auto-cycling detail view: stats, type, sprite |
| **Lista** | Full tabular overview |
| **Wygaszacz** | Fullscreen screensaver mode |

Pokémon data is served by an internal route handler (`app/api/route.ts`)
as a fixed dataset — the client components fetch from that endpoint
rather than holding the data themselves. Sprites are loaded from the
public PokéAPI sprite repository. The dataset is deliberately static:
the exercise was about the boundary, not the source.

## Why it exists

A study project, not a product. I wanted a small but complete surface to
work through the things that actually matter in an App Router project:
where the server/client component boundary falls, route handlers as a
data layer, typed state across views, and one shared layout serving four
views with genuinely different rendering needs.

Interface text is in Polish.

## Running it

```bash
npm install
npm run dev
```

Opens on `http://localhost:3000`.

---

Adrian Wojtasik · [eyelingo.app](https://eyelingo.app)
