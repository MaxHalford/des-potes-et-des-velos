export type Stop = {
  name: string;
  coordinates: [number, number];
  kind?: 'overnight' | 'ferry' | 'milestone';
};

export type Trip = {
  id: string;
  name: string;
  shortName: string;
  year: number;
  dates: string;
  color: string;
  routeVia?: Record<string, [number, number][]>;
  stops: Stop[];
};

export const trips: Trip[] = [
  {
    id: 'brittany',
    name: 'Brittany',
    shortName: 'Brittany',
    year: 2021,
    dates: 'Summer 2021',
    color: '#e85d3f',
    routeVia: {
      Morlaix: [[-3.567, 48.276]],
      Pontchâteau: [[-2.754, 48.177], [-1.6778, 48.1173]],
    },
    stops: [
      { name: 'Avranches', coordinates: [-1.3569, 48.6844], kind: 'milestone' },
      { name: 'Saint-Malo', coordinates: [-2.0257, 48.6493], kind: 'overnight' },
      { name: 'Saint-Brieuc', coordinates: [-2.7608, 48.5142], kind: 'overnight' },
      { name: 'Pontivy', coordinates: [-2.966, 48.068], kind: 'overnight' },
      { name: 'Lorient', coordinates: [-3.37, 47.748], kind: 'overnight' },
      { name: 'Quiberon', coordinates: [-3.1197, 47.4833], kind: 'ferry' },
      { name: 'Le Palais, Belle-Île-en-Mer', coordinates: [-3.154, 47.346], kind: 'ferry' },
      { name: 'Vannes', coordinates: [-2.7608, 47.6582], kind: 'overnight' },
      { name: 'Morlaix', coordinates: [-3.8277, 48.5775], kind: 'overnight' },
      { name: 'Pontchâteau', coordinates: [-2.0873, 47.4379], kind: 'overnight' },
      { name: 'Nantes', coordinates: [-1.5536, 47.2184], kind: 'milestone' },
    ],
  },
  {
    id: 'south-coast',
    name: 'South coast of England',
    shortName: 'South coast',
    year: 2022,
    dates: 'May 2022',
    color: '#147d73',
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
      { name: 'Morlaix', coordinates: [-3.828, 48.577], kind: 'overnight' },
    ],
  },
  {
    id: 'salagou-limousin',
    name: 'Salagou → Limousin',
    shortName: 'Salagou → Limousin',
    year: 2023,
    dates: 'August 2023',
    color: '#b43f72',
    stops: [
      { name: 'Béziers', coordinates: [3.215, 43.344], kind: 'milestone' },
      { name: 'Lac du Salagou', coordinates: [3.367, 43.635], kind: 'overnight' },
      { name: 'Lodève', coordinates: [3.319, 43.731] },
      { name: 'Millau', coordinates: [3.08, 44.1] },
      { name: 'Espalion', coordinates: [2.763, 44.522], kind: 'overnight' },
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
    dates: 'July 2024',
    color: '#6a58a8',
    stops: [
      { name: 'Montluçon', coordinates: [2.603, 46.34], kind: 'milestone' },
      { name: 'La Naute', coordinates: [2.294, 46.055], kind: 'overnight' },
      { name: 'Aubusson', coordinates: [2.168, 45.955] },
      { name: 'Felletin', coordinates: [2.173, 45.883] },
      { name: 'Lac de Vassivière', coordinates: [1.87, 45.79], kind: 'overnight' },
      { name: 'Bugeat', coordinates: [1.928, 45.597], kind: 'overnight' },
      { name: 'Argentat', coordinates: [1.938, 45.093], kind: 'overnight' },
      { name: 'Beaulieu-sur-Dordogne', coordinates: [1.838, 44.979] },
      { name: 'Gluges', coordinates: [1.605, 44.887], kind: 'overnight' },
      { name: 'Lalbenque', coordinates: [1.545, 44.338], kind: 'overnight' },
    ],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    shortName: 'Switzerland',
    year: 2025,
    dates: 'July 2025',
    color: '#de8b22',
    stops: [
      { name: 'Basel', coordinates: [7.5886, 47.5596], kind: 'milestone' },
      { name: 'Sursee', coordinates: [8.108, 47.171], kind: 'overnight' },
      { name: 'Lucerne', coordinates: [8.3093, 47.0502] },
      { name: 'Meiringen', coordinates: [8.185, 46.728], kind: 'overnight' },
      { name: 'Iseltwald', coordinates: [7.964, 46.71] },
      { name: 'Interlaken', coordinates: [7.8632, 46.6863] },
      { name: 'Weissenburg', coordinates: [7.475, 46.658], kind: 'overnight' },
      { name: 'Gstaad', coordinates: [7.286, 46.475] },
      { name: 'Les Diablerets', coordinates: [7.159, 46.352], kind: 'overnight' },
      { name: 'Aigle', coordinates: [6.969, 46.318] },
      { name: 'Yvoire', coordinates: [6.326, 46.37], kind: 'overnight' },
      { name: 'Geneva', coordinates: [6.1432, 46.2044] },
      { name: 'Éloise', coordinates: [5.86, 46.08], kind: 'overnight' },
      { name: 'Chanaz', coordinates: [5.79, 45.808] },
      { name: 'Aix-les-Bains', coordinates: [5.914, 45.688], kind: 'overnight' },
      { name: 'Col du Revard', coordinates: [5.978, 45.682] },
      { name: 'Chambéry', coordinates: [5.9178, 45.5646], kind: 'overnight' },
      { name: 'Col du Granier', coordinates: [5.922, 45.463] },
      { name: 'Saint-Même-d’en-Bas', coordinates: [5.886, 45.4], kind: 'overnight' },
      { name: 'Feyzin', coordinates: [4.859, 45.673], kind: 'overnight' },
    ],
  },
  {
    id: 'uzerche',
    name: 'Uzerche',
    shortName: 'Uzerche',
    year: 2026,
    dates: 'August 2026',
    color: '#2d6ea3',
    stops: [
      { name: 'Uzerche', coordinates: [1.564, 45.424], kind: 'overnight' },
      { name: 'Lubersac', coordinates: [1.404, 45.384] },
      { name: 'Ségur-le-Château', coordinates: [1.306, 45.43] },
      { name: 'Thiviers', coordinates: [0.92, 45.417] },
      { name: 'Saint-Jean-de-Côle', coordinates: [0.84, 45.42] },
      { name: 'Saint-Jory-de-Chalais', coordinates: [0.91, 45.5], kind: 'overnight' },
      { name: 'Bujaleuf', coordinates: [1.628, 45.797] },
      { name: 'Eymoutiers', coordinates: [1.741, 45.738], kind: 'overnight' },
      { name: 'Montluçon', coordinates: [2.603, 46.34], kind: 'overnight' },
      { name: 'Nérondes', coordinates: [2.817, 46.997], kind: 'overnight' },
    ],
  },
];
