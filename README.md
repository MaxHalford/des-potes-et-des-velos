# Des potes et des vélos

An interactive map of six bikepacking trips by Max and Clément. Select a trip, a stop, or a stage to see its story and elevation profile. Each full route is available as a GPX download.

## Development

```sh
npm install
npm run routes
npm run dev
```

Open `http://127.0.0.1:4321/des-potes-et-des-velos/` after the server starts.

## Route data

GPX files in `public/routes/` are the source of truth for geometry, distance, ascent, descent, bounds, and elevation profiles. Trip stories and stop annotations live in `src/data/trips.ts`.

The current GPX files are route reconstructions generated between diary waypoints with Valhalla and OpenStreetMap data. The interface labels this provenance explicitly. They can be replaced with original recordings later without changing the application code.
