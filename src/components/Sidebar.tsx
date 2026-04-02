import { useState, useMemo } from "react";
import { Search, ChevronDown, Leaf } from "lucide-react";
import { schools, schoolTypes } from "@/data/schools";
import SchoolCard from "./SchoolCard";
import sentinelleLogo from "@/assets/sentinelle-logo.png";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Tous les établissements");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedType === "Tous les établissements" || s.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [search, selectedType]);

  return (
    <aside className="w-[380px] h-screen flex flex-col bg-card border-r border-border shadow-sm">
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

        {/* Search */}
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

          {/* Filter */}
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

          {/* Search Button */}
          <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Rechercher
          </button>
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
  );
};

export default Sidebar;
