import { useMemo } from "react";

interface MapViewProps {
  selectedLat?: number;
  selectedLng?: number;
}

const MapView = ({ selectedLat, selectedLng }: MapViewProps) => {
  const src = useMemo(() => {
    if (selectedLat && selectedLng) {
      const loc = `${selectedLat}%2C${selectedLng}%2C16z`;
      return `https://felt.com/embed/map/Untitled-Map-trd59Cqj4RuKu8WX9Cw2eYCD?loc=${loc}&legend=1&cooperativeGestures=1&link=1&geolocation=0&zoomControls=1&scaleBar=1`;
    }
    return "https://felt.com/embed/map/Untitled-Map-trd59Cqj4RuKu8WX9Cw2eYCD?loc=44.8044%2C-0.5287%2C11.06z&legend=1&cooperativeGestures=1&link=1&geolocation=0&zoomControls=1&scaleBar=1";
  }, [selectedLat, selectedLng]);

  return (
    <div className="flex-1 h-screen relative">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="Felt Map"
        src={src}
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full z-0"
      />
    </div>
  );
};

export default MapView;
