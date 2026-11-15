import { readFile } from 'node:fs/promises';
import { XMLParser } from 'fast-xml-parser';

export type TrackPoint = { lat: number; lon: number; ele: number; distance: number };
export type Track = {
  points: TrackPoint[];
  coordinates: [number, number, number][];
  distanceKm: number;
  ascentM: number;
  descentM: number;
  bounds: [[number, number], [number, number]];
};

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });

export async function parseGpx(path: URL): Promise<Track> {
  const xml = await readFile(path, 'utf8');
  const document = parser.parse(xml);
  const segments = asArray(document.gpx.trk).flatMap((track: any) => asArray(track.trkseg));
  const raw = segments.flatMap((segment: any) => asArray(segment.trkpt)).map((point: any) => ({
    lat: Number(point.lat),
    lon: Number(point.lon),
    ele: Number(point.ele ?? 0),
  }));
  let distance = 0;
  const points: TrackPoint[] = raw.map((point, index) => {
    if (index) distance += haversine(raw[index - 1], point);
    return { ...point, distance };
  });
  const smoothed = smooth(points.map((point) => point.ele), 7);
  let ascentM = 0;
  let descentM = 0;
  for (let index = 1; index < smoothed.length; index++) {
    const delta = smoothed[index] - smoothed[index - 1];
    if (delta > 1) ascentM += delta;
    if (delta < -1) descentM -= delta;
  }
  const lons = points.map((point) => point.lon);
  const lats = points.map((point) => point.lat);
  return {
    points,
    coordinates: points.map((point) => [point.lon, point.lat, point.ele]),
    distanceKm: distance,
    ascentM,
    descentM,
    bounds: [[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]],
  };
}

function asArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

function smooth(values: number[], width: number) {
  const radius = Math.floor(width / 2);
  return values.map((_, index) => {
    const slice = values.slice(Math.max(0, index - radius), Math.min(values.length, index + radius + 1));
    return slice.reduce((sum, value) => sum + value, 0) / slice.length;
  });
}

function haversine(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const radius = 6371;
  const toRadians = (degrees: number) => degrees * Math.PI / 180;
  const deltaLat = toRadians(b.lat - a.lat);
  const deltaLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}
