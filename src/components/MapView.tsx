const MapView = () => {
  return (
    <div className="flex-1 h-screen relative">
      <iframe
        title="Carte Sentinelle Bordeaux"
        src="https://felt.com/embed/map/Untitled-Map-trd59Cqj4RuKu8WX9Cw2eYCD?loc=44.84005,-0.57987,12z&legend=0&link=1&geolocation=0&cooperativeGestures=1"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
};

export default MapView;
