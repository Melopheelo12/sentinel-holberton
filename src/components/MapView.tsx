import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { School } from "@/data/schools";
import "leaflet/dist/leaflet.css";

interface MapViewProps {
  schools: School[];
  selectedSchool: string | null;
}

const levelColors = {
  vert: "#22c55e",
  orange: "#f59e0b",
  rouge: "#ef4444",
};

const FitBounds = ({ schools }: { schools: School[] }) => {
  const map = useMap();
  useEffect(() => {
    if (schools.length > 0) {
      const bounds = schools.map((s) => [s.lat, s.lng] as [number, number]);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }
  }, [schools, map]);
  return null;
};

const MapView = ({ schools, selectedSchool }: MapViewProps) => {
  return (
    <div className="flex-1 h-screen relative">
      <MapContainer
        center={[44.8378, -0.5792]}
        zoom={13}
        className="w-full h-full z-0"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {schools.map((school) => {
          const isSelected = selectedSchool === school.id;
          return (
            <CircleMarker
              key={school.id}
              center={[school.lat, school.lng]}
              radius={isSelected ? 10 : 7}
              pathOptions={{
                color: isSelected ? "#166534" : levelColors[school.level],
                fillColor: levelColors[school.level],
                fillOpacity: 0.85,
                weight: isSelected ? 3 : 2,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <strong>{school.name}</strong>
                  <br />
                  <span className="text-muted-foreground">{school.type} · {school.statut === "public" ? "Public" : "Privé"}</span>
                  <br />
                  <span className="font-medium" style={{ color: levelColors[school.level] }}>
                    {school.level.charAt(0).toUpperCase() + school.level.slice(1)} {school.score}/{school.maxScore}
                  </span>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
