export type Stop = {
  name: string;
  coordinates: [number, number];
  note?: string;
  kind?: 'overnight' | 'ferry' | 'milestone';
};

export type Trip = {
  id: string;
  name: string;
  shortName: string;
  year: number;
  dates: string;
  color: string;
  tagline: string;
  story: string;
  source: string;
  confidence: 'recorded' | 'planned' | 'reconstructed';
  stops: Stop[];
};

export const trips: Trip[] = [
  {
    id: 'brittany',
    name: 'Brittany beginnings',
    shortName: 'Brittany',
    year: 2021,
    dates: 'Summer 2021',
    color: '#e85d3f',
    tagline: 'The first loaded bikes, westbound.',
    story: 'Our first tour was the one that made the ritual stick. The surviving diary entry places us on Belle-Île; the earlier stages are reconstructed from the original Paris-to-Brittany plan and remain open to correction.',
    source: 'Diary archive · partial reconstruction',
    confidence: 'reconstructed',
    stops: [
      { name: 'Paris', coordinates: [2.3522, 48.8566], note: 'The original westbound plan.', kind: 'milestone' },
      { name: 'Chartres', coordinates: [1.489, 48.4469] },
      { name: 'Le Mans', coordinates: [0.1996, 48.0061] },
      { name: 'Angers', coordinates: [-0.5632, 47.4784] },
      { name: 'Nantes', coordinates: [-1.5536, 47.2184] },
      { name: 'Vannes', coordinates: [-2.7608, 47.6582] },
      { name: 'Quiberon', coordinates: [-3.1197, 47.4833], kind: 'ferry' },
      { name: 'Le Palais, Belle-Île', coordinates: [-3.154, 47.346], note: 'Sightseeing on Belle-Île with Chloé.', kind: 'overnight' },
    ],
  },
  {
    id: 'south-coast',
    name: 'The long way to Plymouth',
    shortName: 'South coast',
    year: 2022,
    dates: '6–18 May 2022',
    color: '#147d73',
    tagline: 'Two ferries, thirteen days, one English coast.',
    story: 'From Gisors to Dieppe, across to Brighton, then west until the land ran out. The diary preserves every overnight stop—and the emotional train ride home from Morlaix.',
    source: 'Diary itinerary · 13 daily stops',
    confidence: 'reconstructed',
    stops: [
      { name: 'Gisors', coordinates: [1.7776, 49.2818], kind: 'overnight' },
      { name: 'Forges-les-Eaux', coordinates: [1.544, 49.613], kind: 'overnight' },
      { name: 'Dieppe', coordinates: [1.078, 49.922], kind: 'ferry' },
      { name: 'Newhaven', coordinates: [-0.055, 50.793], kind: 'ferry' },
      { name: 'Brighton', coordinates: [-0.1372, 50.8225], kind: 'overnight' },
      { name: 'Southampton', coordinates: [-1.4044, 50.9097], kind: 'overnight' },
      { name: 'Swanage', coordinates: [-1.957, 50.609], kind: 'overnight' },
      { name: 'Dorchester', coordinates: [-2.437, 50.711], kind: 'overnight' },
      { name: 'Bridport', coordinates: [-2.758, 50.733], kind: 'overnight' },
      { name: 'Beer', coordinates: [-3.093, 50.699], kind: 'overnight' },
      { name: 'Dawlish', coordinates: [-3.466, 50.581], kind: 'overnight' },
      { name: 'Dartington', coordinates: [-3.71, 50.451], kind: 'overnight' },
      { name: 'Plymouth', coordinates: [-4.143, 50.376], kind: 'ferry' },
      { name: 'Roscoff', coordinates: [-3.986, 48.727], kind: 'ferry' },
      { name: 'Morlaix', coordinates: [-3.828, 48.577], note: 'The train home, and the trip recap.', kind: 'overnight' },
    ],
  },
  {
    id: 'salagou-limousin',
    name: 'Red earth to green country',
    shortName: 'Salagou → Limousin',
    year: 2023,
    dates: '12–19 August 2023',
    color: '#b43f72',
    tagline: 'From the red shore of Salagou to Limoges.',
    story: 'A hard, high route north from Béziers and Lac du Salagou. Komoot preserves the shared 417 km plan and four recorded legs; the diary remembers setting off into the Béziers feria.',
    source: 'Komoot plan reference · GPX reconstructed from diary stops',
    confidence: 'reconstructed',
    stops: [
      { name: 'Béziers', coordinates: [3.215, 43.344], note: 'Meeting Clément during the feria.', kind: 'milestone' },
      { name: 'Lac du Salagou', coordinates: [3.367, 43.635], kind: 'overnight' },
      { name: 'Lodève', coordinates: [3.319, 43.731] },
      { name: 'Millau', coordinates: [3.08, 44.1] },
      { name: 'Espalion', coordinates: [2.763, 44.522], note: 'One of the recorded Komoot legs ended here.', kind: 'overnight' },
      { name: 'Aurillac', coordinates: [2.44, 44.93] },
      { name: 'Beaulieu-sur-Dordogne', coordinates: [1.838, 44.979] },
      { name: 'Limoges', coordinates: [1.261, 45.833], kind: 'overnight' },
    ],
  },
  {
    id: 'vagabonde',
    name: 'La Vagabonde',
    shortName: 'La Vagabonde',
    year: 2024,
    dates: '13–19 July 2024',
    color: '#6a58a8',
    tagline: 'South from Montluçon, following the plateau.',
    story: 'Rain, campsite mini-golf, the Dordogne gorge and the pleasure of being back on the road together. We followed La Vagabonde south until a birthday near Lalbenque brought us back to civilisation.',
    source: 'Daily diary notes',
    confidence: 'reconstructed',
    stops: [
      { name: 'Montluçon', coordinates: [2.603, 46.34], kind: 'milestone' },
      { name: 'La Naute', coordinates: [2.294, 46.055], note: 'A hippyish campsite and an evening concert.', kind: 'overnight' },
      { name: 'Aubusson', coordinates: [2.168, 45.955] },
      { name: 'Felletin', coordinates: [2.173, 45.883] },
      { name: 'Lac de Vassivière', coordinates: [1.87, 45.79], kind: 'overnight' },
      { name: 'Bugeat', coordinates: [1.928, 45.597], note: 'Mini-golf in the rain; Clément won 6–4.', kind: 'overnight' },
      { name: 'Argentat', coordinates: [1.938, 45.093], note: '85 km, a borrowed slice of pizza and two pints.', kind: 'overnight' },
      { name: 'Beaulieu-sur-Dordogne', coordinates: [1.838, 44.979] },
      { name: 'Gluges', coordinates: [1.605, 44.887], note: 'A guinguette beneath the cliffs.', kind: 'overnight' },
      { name: 'Lalbenque', coordinates: [1.545, 44.338], kind: 'overnight' },
    ],
  },
  {
    id: 'switzerland',
    name: 'Across Switzerland',
    shortName: 'Switzerland',
    year: 2025,
    dates: '14–24 July 2025',
    color: '#de8b22',
    tagline: 'Warmshowers, clear lakes and the high way home.',
    story: 'From Basel across the lakes and passes, then around Léman and into the Chartreuse. Hosts, fellow bikepackers and hard climbs turned a line on a map into the richest trip yet.',
    source: 'Daily diary notes · distances by stage',
    confidence: 'reconstructed',
    stops: [
      { name: 'Basel', coordinates: [7.5886, 47.5596], kind: 'milestone' },
      { name: 'Sursee', coordinates: [8.108, 47.171], note: '85 km · 1,000 m. Hosted by Lea and Christof.', kind: 'overnight' },
      { name: 'Lucerne', coordinates: [8.3093, 47.0502] },
      { name: 'Meiringen', coordinates: [8.185, 46.728], note: '95 km · 1,250 m. A garage, beers and Markus.', kind: 'overnight' },
      { name: 'Iseltwald', coordinates: [7.964, 46.71] },
      { name: 'Interlaken', coordinates: [7.8632, 46.6863] },
      { name: 'Weissenburg', coordinates: [7.475, 46.658], note: 'Camped with Aude and Sophie.', kind: 'overnight' },
      { name: 'Gstaad', coordinates: [7.286, 46.475] },
      { name: 'Les Diablerets', coordinates: [7.159, 46.352], note: 'The Col du Pillon behind us.', kind: 'overnight' },
      { name: 'Aigle', coordinates: [6.969, 46.318] },
      { name: 'Yvoire', coordinates: [6.326, 46.37], kind: 'overnight' },
      { name: 'Geneva', coordinates: [6.1432, 46.2044] },
      { name: 'Éloise', coordinates: [5.86, 46.08], kind: 'overnight' },
      { name: 'Chanaz', coordinates: [5.79, 45.808] },
      { name: 'Aix-les-Bains', coordinates: [5.914, 45.688], note: '62 km · 410 m and the fourth Warmshowers host.', kind: 'overnight' },
      { name: 'Col du Revard', coordinates: [5.978, 45.682] },
      { name: 'Chambéry', coordinates: [5.9178, 45.5646], note: '44 km · 1,230 m, matouille and lasagna.', kind: 'overnight' },
      { name: 'Col du Granier', coordinates: [5.922, 45.463] },
      { name: 'Saint-Même-d’en-Bas', coordinates: [5.886, 45.4], note: 'A hike to the cirque and waterfalls.', kind: 'overnight' },
      { name: 'Feyzin', coordinates: [4.859, 45.673], kind: 'overnight' },
    ],
  },
  {
    id: 'uzerche',
    name: 'Uzerche and beyond',
    shortName: 'Uzerche',
    year: 2026,
    dates: '24–28 August 2026',
    color: '#2d6ea3',
    tagline: 'Rain northbound, records tumbling.',
    story: 'Four fast days through familiar country with a bigger group. The first three stages were recorded on Komoot; the last day followed the canal to Nérondes before the others carried on to Paris.',
    source: 'Komoot stage statistics · GPX reconstructed from diary stops',
    confidence: 'reconstructed',
    stops: [
      { name: 'Uzerche', coordinates: [1.564, 45.424], note: 'Rain at the campsite before the start.', kind: 'overnight' },
      { name: 'Lubersac', coordinates: [1.404, 45.384] },
      { name: 'Ségur-le-Château', coordinates: [1.306, 45.43] },
      { name: 'Thiviers', coordinates: [0.92, 45.417] },
      { name: 'Saint-Jean-de-Côle', coordinates: [0.84, 45.42] },
      { name: 'Saint-Jory-de-Chalais', coordinates: [0.91, 45.5], note: '90 km. Homemade pizza at a pristine campsite.', kind: 'overnight' },
      { name: 'Bujaleuf', coordinates: [1.628, 45.797] },
      { name: 'Eymoutiers', coordinates: [1.741, 45.738], note: '101 km and dinner with family.', kind: 'overnight' },
      { name: 'Montluçon', coordinates: [2.603, 46.34], note: '122 km—a new personal record.', kind: 'overnight' },
      { name: 'Nérondes', coordinates: [2.817, 46.997], note: 'The final, flatter canal day.', kind: 'overnight' },
    ],
  },
];
