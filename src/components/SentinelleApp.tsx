import { useState, useMemo } from "react";
import { Search, ChevronDown, Leaf } from "lucide-react";
import { schools, schoolTypes, statutOptions, School } from "@/data/schools";
import SchoolCard from "./SchoolCard";
import MapView from "./MapView";
import sentinelleLogo from "@/assets/sentinelle-logo.png";

const SentinelleApp = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Tous les types");
  const [selectedStatut, setSelectedStatut] = useState("Tous");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedType === "Tous les types" || s.type === selectedType;
      const matchesStatut =
        selectedStatut === "Tous" ||
        (selectedStatut === "Public" && s.statut === "public") ||
        (selectedStatut === "Privé" && s.statut === "privé");
      return matchesSearch && matchesType && matchesStatut;
    });
  }, [search, selectedType, selectedStatut]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[380px] h-screen flex flex-col bg-card border-r border-border shadow-sm shrink-0">
        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-border">
          <div className="flex items-center gap-3 mb-5">
            <img src={sentinelleLogo} alt="Sentinelle" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold leading-tight text-foreground font-display">
                Sentinelle
              </h1>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Bordeaux · Diagnostic Chaleur
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Rechercher
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Nom d'école ou adresse..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-9 pr-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
            </div>

            {/* Type filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full h-10 pl-3 pr-8 rounded-lg bg-secondary border border-border text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              >
                {schoolTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Statut filter (Public / Privé) */}
            <div className="flex gap-2">
              {statutOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedStatut(opt)}
                  className={`flex-1 h-10 rounded-lg text-sm font-medium transition-all border
                    ${selectedStatut === opt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-secondary-foreground border-border hover:bg-accent"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* School List */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-5 py-3 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Écoles
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin px-2 py-2 space-y-0.5">
            {filtered.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
                isSelected={selectedSchool === school.id}
                onClick={() => setSelectedSchool(school.id === selectedSchool ? null : school.id)}
              />
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-8 text-sm text-muted-foreground">
                Aucun établissement trouvé
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Map */}
      <MapView schools={filtered} selectedSchool={selectedSchool} />
    </div>
  );
};

export default SentinelleApp;
