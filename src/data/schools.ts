export type ScoreLevel = "vert" | "orange" | "rouge";

export interface School {
  id: string;
  name: string;
  type: string;
  score: number;
  maxScore: number;
  level: ScoreLevel;
  address?: string;
}

export const schools: School[] = [
  { id: "1", name: "École maternelle Thiers", type: "Maternelle", score: 0, maxScore: 10, level: "vert" },
  { id: "2", name: "École primaire Sainte-Marie Bastide", type: "Primaire", score: 0, maxScore: 10, level: "vert" },
  { id: "3", name: "École maternelle Sainte-Marie Bastide", type: "Maternelle", score: 0, maxScore: 10, level: "vert" },
  { id: "4", name: "Collège Sainte-Marie Bastide", type: "Collège", score: 0, maxScore: 10, level: "vert" },
  { id: "5", name: "Crèche Multi-Accueil 'Au Fil de l'Eau'", type: "Crèche", score: 0, maxScore: 10, level: "vert" },
  { id: "6", name: "Multiaccueil Barreyre", type: "Crèche", score: 0, maxScore: 10, level: "vert" },
  { id: "7", name: "Collège de Lestonac", type: "Collège", score: 0, maxScore: 10, level: "vert" },
  { id: "8", name: "Lycée Général Privé La Sauque", type: "Lycée", score: 0, maxScore: 10, level: "vert" },
  { id: "9", name: "École élémentaire Marcel Pagnol", type: "Élémentaire", score: 0, maxScore: 10, level: "vert" },
  { id: "10", name: "École maternelle Jean Jaurès", type: "Maternelle", score: 0, maxScore: 10, level: "vert" },
  { id: "11", name: "École primaire Gabriel Massias", type: "Primaire", score: 0, maxScore: 10, level: "vert" },
  { id: "12", name: "École élémentaire Carle Vernet", type: "Élémentaire", score: 0, maxScore: 10, level: "vert" },
  { id: "13", name: "École maternelle Carles Vernet", type: "Maternelle", score: 0, maxScore: 10, level: "vert" },
  { id: "14", name: "Groupe scolaire Jean Moulin", type: "Primaire", score: 0, maxScore: 10, level: "vert" },
  { id: "15", name: "Cours secondaire privé Peret", type: "Lycée", score: 0, maxScore: 10, level: "vert" },
  { id: "16", name: "Crèche Coquelicot", type: "Crèche", score: 0, maxScore: 10, level: "vert" },
  { id: "17", name: "Les petits petons", type: "Crèche", score: 0, maxScore: 10, level: "vert" },
  { id: "18", name: "Lycée professionnel Saint-Joseph", type: "Lycée", score: 0, maxScore: 10, level: "vert" },
];

export const schoolTypes = ["Tous les établissements", "Maternelle", "Primaire", "Élémentaire", "Collège", "Lycée", "Crèche"];
