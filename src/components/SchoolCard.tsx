import { School } from "@/data/schools";
import { MapPin, Mail, Globe, Hash, Thermometer } from "lucide-react";

interface SchoolCardProps {
  school: School;
  isSelected?: boolean;
  onClick?: () => void;
}

const levelConfig = {
  vert: { label: "Vert", bg: "bg-success-light", text: "text-accent-foreground", dot: "bg-primary", desc: "Faible exposition chaleur" },
  orange: { label: "Orange", bg: "bg-warning-light", text: "text-warning", dot: "bg-warning", desc: "Exposition modérée" },
  rouge: { label: "Rouge", bg: "bg-danger-light", text: "text-danger", dot: "bg-danger", desc: "Forte exposition chaleur" },
};

const SchoolCard = ({ school, isSelected, onClick }: SchoolCardProps) => {
  const config = levelConfig[school.level];

  return (
    <div>
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

      {/* Détails expandés */}
      {isSelected && (
        <div className="mx-4 mb-2 mt-1 p-3 rounded-lg bg-secondary/50 border border-border space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2">
            <Thermometer className={`w-4 h-4 ${config.text === "text-accent-foreground" ? "text-primary" : config.text}`} />
            <span className="text-xs font-medium text-foreground">
              Indice chaleur : <span className={config.text}>{school.score}/{school.maxScore}</span> — {config.desc}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{school.lat.toFixed(4)}, {school.lng.toFixed(4)}</span>
          </div>

          {school.email && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${school.email}`} className="text-primary hover:underline truncate">
                {school.email}
              </a>
            </div>
          )}

          {school.website && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="w-3.5 h-3.5" />
              <a href={school.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate">
                {school.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            </div>
          )}

          {school.ref_uai && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Hash className="w-3.5 h-3.5" />
              <span>UAI : {school.ref_uai}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SchoolCard;
