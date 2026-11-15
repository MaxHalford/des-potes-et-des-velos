# Des potes et des vélos

An interactive map of six cycling trips. Select a trip, stop, or stage to inspect its route and elevation profile. Each full route is available as a GPX download.

## Development

```sh
npm install
npm run routes
npm run dev
```

Open `http://127.0.0.1:4321/des-potes-et-des-velos/` after the server starts.

## Route data

GPX files in `public/routes/` are the source of truth for geometry, distance, ascent, descent, bounds, and elevation profiles. Trip names, dates, colors, and stops live in `src/data/trips.ts`.
