import { mkdir, writeFile } from 'node:fs/promises';
import { trips } from '../src/data/trips.ts';

const ROUTER = 'https://valhalla1.openstreetmap.de';
const outDir = new URL('../public/routes/', import.meta.url);
const routeOverrides = {
  brittany: {
    Vannes: [
      { coordinates: [-3.1197, 47.4833], mode: 'ferry' },
    ],
  },
};

function decodePolyline(encoded, precision = 6) {
  const coordinates = [];
  let index = 0;
  let lat = 0;
  let lon = 0;
  const factor = 10 ** precision;
  while (index < encoded.length) {
    let result = 0;
    let shift = 0;
    let byte;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    lat += result & 1 ? ~(result >> 1) : result >> 1;
    result = 0;
    shift = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    lon += result & 1 ? ~(result >> 1) : result >> 1;
    coordinates.push([lon / factor, lat / factor]);
  }
  return coordinates;
}

async function post(path, payload) {
  const response = await fetch(`${ROUTER}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`${path}: ${response.status} ${await response.text()}`);
  return response.json();
}

async function createRoute(trip) {
  const locations = trip.stops.map(({ coordinates }) => ({
    lon: coordinates[0],
    lat: coordinates[1],
    type: 'break',
  }));
  const points = [];
  for (let index = 0; index < locations.length - 1; index++) {
    const isFerry = trip.stops[index].kind === 'ferry' && trip.stops[index + 1].kind === 'ferry';
    if (isFerry) {
      appendStraightLine(points, locations[index], locations[index + 1]);
      continue;
    }
    const routeVia = routeOverrides[trip.id]?.[trip.stops[index + 1].name] ?? [];
    const routeLocations = [
      { ...locations[index], mode: 'ride' },
      ...routeVia.map(({ coordinates: [lon, lat], mode }) => ({ lon, lat, type: 'break', mode })),
      { ...locations[index + 1], mode: 'ride' },
    ];

    for (let routeIndex = 0; routeIndex < routeLocations.length - 1; routeIndex++) {
      if (routeLocations[routeIndex + 1].mode === 'ferry') {
        appendStraightLine(points, routeLocations[routeIndex], routeLocations[routeIndex + 1]);
        continue;
      }
      const routed = await post('/route', {
        locations: [routeLocations[routeIndex], routeLocations[routeIndex + 1]],
        costing: 'bicycle',
        costing_options: { bicycle: { use_ferry: 0 } },
        directions_options: { units: 'kilometers' },
      });
      const profile = await post('/height', {
        encoded_polyline: routed.trip.legs[0].shape,
        shape_format: 'polyline6',
        range: true,
        resample_distance: 40,
        height_precision: 1,
      });
      const coordinates = decodePolyline(profile.encoded_polyline);
      points.push(...coordinates.map(([lon, lat], pointIndex) => ({
        lon,
        lat,
        ele: profile.range_height[pointIndex]?.[1] ?? 0,
      })).slice(points.length ? 1 : 0));
    }
  }
  return { points };
}

function appendStraightLine(points, start, end) {
  const steps = 40;
  for (let step = points.length ? 1 : 0; step <= steps; step++) {
    points.push({
      lon: start.lon + (end.lon - start.lon) * step / steps,
      lat: start.lat + (end.lat - start.lat) * step / steps,
      ele: 0,
    });
  }
}

function toGpx(trip, points) {
  const trackPoints = points.map(({ lat, lon, ele }) =>
    `      <trkpt lat="${lat.toFixed(6)}" lon="${lon.toFixed(6)}"><ele>${ele.toFixed(1)}</ele></trkpt>`
  ).join('\n');
  const waypoints = trip.stops.map((stop) =>
    `  <wpt lat="${stop.coordinates[1]}" lon="${stop.coordinates[0]}"><name>${escapeXml(stop.name)}</name></wpt>`
  ).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="des-potes-et-des-velos" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata><name>${escapeXml(trip.name)}</name></metadata>
${waypoints}
  <trk><name>${escapeXml(trip.name)}</name><trkseg>
${trackPoints}
  </trkseg></trk>
</gpx>\n`;
}

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

const requestedTrips = new Set(process.argv.slice(2));
const selectedTrips = requestedTrips.size ? trips.filter((trip) => requestedTrips.has(trip.id)) : trips;

await mkdir(outDir, { recursive: true });
for (const trip of selectedTrips) {
  process.stdout.write(`Routing ${trip.name}… `);
  const { points } = await createRoute(trip);
  await writeFile(new URL(`${trip.id}.gpx`, outDir), toGpx(trip, points));
  console.log(`${points.length} track points`);
}
