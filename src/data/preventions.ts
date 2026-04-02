export type UserRole = "infrastructure" | "famille" | "citoyen" | "école";

export interface RoleInfo {
  label: string;
  icon: string;
  description: string;
  preventions: string[];
}

export const roles: Record<UserRole, RoleInfo> = {
  infrastructure: {
    label: "Infrastructure",
    icon: "🏗️",
    description: "Gestionnaire d'infrastructures urbaines",
    preventions: [
      "Installer des revêtements perméables pour limiter les îlots de chaleur",
      "Végétaliser les toitures et façades des bâtiments publics",
      "Créer des zones d'ombre avec pergolas et auvents dans les espaces publics",
      "Mettre en place des brumisateurs et fontaines d'eau potable",
      "Utiliser des matériaux à forte réflectance (albédo élevé) pour les chaussées",
      "Planifier des corridors de ventilation naturelle dans l'urbanisme",
    ],
  },
  famille: {
    label: "Famille",
    icon: "👨‍👩‍👧‍👦",
    description: "Parents et familles avec enfants scolarisés",
    preventions: [
      "Hydrater régulièrement les enfants avant, pendant et après l'école",
      "Privilégier des vêtements légers, clairs et en matières naturelles",
      "Appliquer de la crème solaire avant chaque sortie extérieure",
      "Éviter les activités physiques intenses entre 11h et 16h",
      "Préparer un kit canicule : brumisateur, chapeau, bouteille d'eau",
      "Vérifier que l'école dispose d'un protocole chaleur activé",
    ],
  },
  citoyen: {
    label: "Citoyen",
    icon: "🏘️",
    description: "Habitant du quartier ou de la ville",
    preventions: [
      "Fermer volets et rideaux en journée pour garder la fraîcheur",
      "S'hydrater régulièrement sans attendre la soif",
      "Éviter l'alcool et les boissons sucrées en période de forte chaleur",
      "Prendre des nouvelles des personnes vulnérables (âgées, isolées)",
      "Se rendre dans les lieux climatisés (bibliothèques, centres commerciaux)",
      "Signaler les personnes en difficulté au 115 (numéro d'urgence sociale)",
    ],
  },
  école: {
    label: "École",
    icon: "🏫",
    description: "Personnel éducatif et direction d'établissement",
    preventions: [
      "Activer le protocole canicule dès l'alerte orange Météo-France",
      "Adapter les horaires de récréation pour éviter les heures les plus chaudes",
      "Assurer un accès permanent à l'eau potable dans toutes les classes",
      "Installer des protections solaires extérieures (stores, voiles d'ombrage)",
      "Former le personnel aux gestes de premiers secours liés à la chaleur",
      "Communiquer quotidiennement avec les familles sur les mesures prises",
    ],
  },
};
