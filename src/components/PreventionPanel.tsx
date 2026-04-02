import { UserRole, roles } from "@/data/preventions";
import { ShieldCheck, X } from "lucide-react";

interface PreventionPanelProps {
  role: UserRole;
  open: boolean;
  onClose: () => void;
}

const PreventionPanel = ({ role, open, onClose }: PreventionPanelProps) => {
  const info = roles[role];

  if (!open) return null;

  return (
    <div className="absolute top-4 right-4 z-[1000] w-80 bg-card border border-border rounded-xl shadow-lg overflow-hidden animate-in slide-in-from-right-5 fade-in duration-300">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-accent/50">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            Prévention · {info.label}
          </span>
        </div>
        <button onClick={onClose} className="p-1 rounded-md hover:bg-secondary transition-colors">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      <div className="p-4 space-y-2.5 max-h-80 overflow-y-auto scrollbar-thin">
        {info.preventions.map((text, i) => (
          <div key={i} className="flex gap-2.5 text-sm">
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
              {i + 1}
            </span>
            <p className="text-foreground/85 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreventionPanel;
