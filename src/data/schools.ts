export type ScoreLevel = "vert" | "orange" | "rouge";
export type Statut = "public" | "privé";

export interface School {
  id: string;
  name: string;
  type: string;
  statut: Statut;
  score: number;
  maxScore: number;
  level: ScoreLevel;
  lat: number;
  lng: number;
}

export const schools: School[] = [
  { id: "1", name: "École maternelle Thiers", type: "Maternelle", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8378, lng: -0.5792 },
  { id: "2", name: "École primaire Sainte-Marie Bastide", type: "Primaire", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8412, lng: -0.5580 },
  { id: "3", name: "École maternelle Sainte-Marie Bastide", type: "Maternelle", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8415, lng: -0.5575 },
  { id: "4", name: "Collège Sainte-Marie Bastide", type: "Collège", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8418, lng: -0.5568 },
  { id: "5", name: "Crèche Multi-Accueil 'Au Fil de l'Eau'", type: "Crèche", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8520, lng: -0.5630 },
  { id: "6", name: "Multiaccueil Barreyre", type: "Crèche", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8350, lng: -0.5700 },
  { id: "7", name: "Collège de Lestonac", type: "Collège", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8380, lng: -0.5810 },
  { id: "8", name: "Lycée Général Privé La Sauque", type: "Lycée", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8290, lng: -0.5650 },
  { id: "9", name: "École élémentaire Marcel Pagnol", type: "Élémentaire", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8450, lng: -0.5900 },
  { id: "10", name: "École maternelle Jean Jaurès", type: "Maternelle", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8480, lng: -0.5750 },
  { id: "11", name: "École primaire Gabriel Massias", type: "Primaire", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8330, lng: -0.5680 },
  { id: "12", name: "École élémentaire Carle Vernet", type: "Élémentaire", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8300, lng: -0.5620 },
  { id: "13", name: "École maternelle Carles Vernet", type: "Maternelle", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8305, lng: -0.5615 },
  { id: "14", name: "Groupe scolaire Jean Moulin", type: "Primaire", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8500, lng: -0.5850 },
  { id: "15", name: "Cours secondaire privé Peret", type: "Lycée", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8360, lng: -0.5770 },
  { id: "16", name: "Crèche Coquelicot", type: "Crèche", statut: "public", score: 0, maxScore: 10, level: "vert", lat: 44.8440, lng: -0.5830 },
  { id: "17", name: "Les petits petons", type: "Crèche", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8470, lng: -0.5720 },
  { id: "18", name: "Lycée professionnel Saint-Joseph", type: "Lycée", statut: "privé", score: 0, maxScore: 10, level: "vert", lat: 44.8395, lng: -0.5740 },
];

export const schoolTypes = ["Tous les types", "Maternelle", "Primaire", "Élémentaire", "Collège", "Lycée", "Crèche"];
export const statutOptions = ["Tous", "Public", "Privé"];
