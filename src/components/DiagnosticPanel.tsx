import { useEffect, useState } from "react";
import {
  Thermometer, Leaf, Building2, Droplets, AlertTriangle,
  TrendingUp, Euro, X, Loader2, ChevronDown, ChevronUp
} from "lucide-react";

const API_BASE = "https://holbertonschool-hackathon-tbm.onrender.com";

interface DiagnosticData {
  nom: string;
  adresse: string;
  score_alerte: number;
  barometre: string;
  recommandation: Record<string, string[]>;
  alea_argile: string;
  details_stats: {
    Veg: number;
    Bati: number;
    Bitume: number;
    Delta_thermique: number;
    Dimension_LCZ: string;
  };
  surface: number;
  cout_estime: number;
  investissement: number;
  economie: number;
  bilan: number;
}

interface DiagnosticPanelProps {
  schoolName: string;
  role: string;
  onClose: () => void;
}

const scoreColor = (score: number) => {
  if (score >= 70) return { bg: "bg-red-100", text: "text-red-700", bar: "bg-red-500", border: "border-red-200" };
  if (score >= 40) return { bg: "bg-orange-100", text: "text-orange-700", bar: "bg-orange-500", border: "border-orange-200" };
  return { bg: "bg-green-100", text: "text-green-700", bar: "bg-green-500", border: "border-green-200" };
};

const argileColor = (alea: string) => {
  if (!alea) return "text-muted-foreground";
  const a = alea.toLowerCase();
  if (a.includes("fort") || a.includes("très")) return "text-red-600";
  if (a.includes("moyen")) return "text-orange-500";
  return "text-green-600";
};

const DiagnosticPanel = ({ schoolName, role, onClose }: DiagnosticPanelProps) => {
  const [data, setData] = useState<DiagnosticData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recoOpen, setRecoOpen] = useState(true);
  const [finOpen, setFinOpen] = useState(false);

  const categorie = role === "infrastructure" || role === "école" ? "pro" : "public";

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`${API_BASE}/diagnostic/recherche/${encodeURIComponent(schoolName)}?categorie=${categorie}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Impossible de contacter le serveur");
        setLoading(false);
      });
  }, [schoolName, categorie]);

  const colors = data ? scoreColor(data.score_alerte) : null;

  return (
    <div className="absolute top-4 right-4 z-[1000] w-96 bg-card border border-border rounded-xl shadow-xl overflow-hidden animate-in slide-in-from-right-5 fade-in duration-300 flex flex-col max-h-[90vh]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-accent/50 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Thermometer className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm font-semibold text-foreground truncate">
            Diagnostic Chaleur
          </span>
        </div>
        <button onClick={onClose} className="p-1 rounded-md hover:bg-secondary transition-colors ml-2 shrink-0">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="overflow-y-auto scrollbar-thin flex-1">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground">Analyse en cours…</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Data */}
        {data && colors && (
          <div className="p-4 space-y-4">
            {/* Nom + adresse */}
            <div>
              <h2 className="font-bold text-foreground text-base leading-tight">{data.nom}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{data.adresse}</p>
            </div>

            {/* Score baromètre */}
            <div className={`rounded-lg p-3 border ${colors.bg} ${colors.border}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-semibold ${colors.text}`}>{data.barometre}</span>
                <span className={`text-2xl font-bold ${colors.text}`}>{data.score_alerte}<span className="text-sm font-medium">/100</span></span>
              </div>
              <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${colors.bar}`}
                  style={{ width: `${data.score_alerte}%` }}
                />
              </div>
            </div>

            {/* Stats thermiques */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-2 rounded-lg bg-green-50 border border-green-100">
                <Leaf className="w-4 h-4 text-green-600 mb-1" />
                <span className="text-xs font-bold text-green-700">{data.details_stats.Veg}%</span>
                <span className="text-[10px] text-green-600 mt-0.5">Végétation</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                <Building2 className="w-4 h-4 text-slate-600 mb-1" />
                <span className="text-xs font-bold text-slate-700">{data.details_stats.Bati}%</span>
                <span className="text-[10px] text-slate-600 mt-0.5">Bâti</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-stone-50 border border-stone-100">
                <Droplets className="w-4 h-4 text-stone-500 mb-1" />
                <span className="text-xs font-bold text-stone-700">{data.details_stats.Bitume}%</span>
                <span className="text-[10px] text-stone-600 mt-0.5">Bitume</span>
              </div>
            </div>

            {/* Delta + LCZ */}
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded-md bg-secondary border border-border">
                🌡️ +{data.details_stats.Delta_thermique}°C vs campagne
              </span>
              <span className="px-2 py-1 rounded-md bg-secondary border border-border">
                Zone LCZ : {data.details_stats.Dimension_LCZ}
              </span>
            </div>

            {/* Aléa argile */}
            <div className="flex items-center gap-2 text-sm">
              <AlertTriangle className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">Aléa argile :</span>
              <span className={`font-medium ${argileColor(data.alea_argile)}`}>
                {data.alea_argile || "Non disponible"}
              </span>
            </div>

            {/* Recommandations */}
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setRecoOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-accent/30 hover:bg-accent/50 transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Recommandations
                </span>
                {recoOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
              </button>
              {recoOpen && (
                <div className="p-3 space-y-3">
                  {Object.entries(data.recommandation).map(([cat, items]) => (
                    <div key={cat}>
                      <p className="text-xs font-semibold text-primary mb-1.5">{cat}</p>
                      <ul className="space-y-1.5">
                        {items.map((item, i) => (
                          <li key={i} className="flex gap-2 text-xs text-foreground/85">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-0.5">
                              {i + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Simulation financière */}
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setFinOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-accent/30 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Euro className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Simulation financière
                  </span>
                </div>
                {finOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
              </button>
              {finOpen && (
                <div className="p-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Surface estimée</span>
                    <span className="font-medium">{data.surface.toLocaleString("fr-FR")} m²</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Investissement</span>
                    <span className="font-medium">{data.investissement.toLocaleString("fr-FR")} €</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Économies estimées</span>
                    <span className="font-medium text-green-600">{data.economie.toLocaleString("fr-FR")} €</span>
                  </div>
                  <div className="h-px bg-border my-1" />
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      Bilan net
                    </span>
                    <span className={data.bilan >= 0 ? "text-green-600" : "text-red-600"}>
                      {data.bilan >= 0 ? "+" : ""}{data.bilan.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticPanel;
