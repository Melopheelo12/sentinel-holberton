import { School } from "@/data/schools";
import { MapPin } from "lucide-react";

interface SchoolCardProps {
  school: School;
  isSelected?: boolean;
  onClick?: () => void;
}

const levelConfig = {
  vert: { label: "Vert", bg: "bg-success-light", text: "text-accent-foreground", dot: "bg-primary" },
  orange: { label: "Orange", bg: "bg-warning-light", text: "text-warning", dot: "bg-warning" },
  rouge: { label: "Rouge", bg: "bg-danger-light", text: "text-danger", dot: "bg-danger" },
};

const SchoolCard = ({ school, isSelected, onClick }: SchoolCardProps) => {
  const config = levelConfig[school.level];

  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group
        ${isSelected 
          ? "bg-accent shadow-sm ring-1 ring-primary/20" 
          : "hover:bg-secondary"
        }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full shrink-0 ${config.dot}`} />
            <h3 className="text-sm font-medium text-foreground truncate">
              {school.name}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 ml-4">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {school.type} · {school.statut === "public" ? "Public" : "Privé"}
            </span>
          </div>
        </div>
        <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${config.bg} ${config.text}`}>
          {config.label} {school.score}/{school.maxScore}
        </span>
      </div>
    </button>
  );
};

export default SchoolCard;
