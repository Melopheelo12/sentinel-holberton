import { UserRole, roles } from "@/data/preventions";
import sentinelleLogo from "@/assets/sentinelle-logo.png";

interface RoleSelectorProps {
  onSelectRole: (role: UserRole) => void;
}

const RoleSelector = ({ onSelectRole }: RoleSelectorProps) => {
  const roleEntries = Object.entries(roles) as [UserRole, typeof roles[UserRole]][];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <img src={sentinelleLogo} alt="Sentinelle" className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-bold text-foreground font-display mb-2">
            Sentinelle
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mb-4">
            Bordeaux · Diagnostic Chaleur
          </p>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Identifiez-vous pour accéder à la carte et recevoir des recommandations adaptées à votre profil.
          </p>
        </div>

        {/* Role Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roleEntries.map(([key, role]) => (
            <button
              key={key}
              onClick={() => onSelectRole(key)}
              className="group relative flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span className="text-4xl">{role.icon}</span>
              <div className="text-center">
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent-foreground">
                  {role.label}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {role.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
