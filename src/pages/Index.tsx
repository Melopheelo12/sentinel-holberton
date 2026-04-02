import Sidebar from "@/components/Sidebar";
import MapView from "@/components/MapView";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MapView />
    </div>
  );
};

export default Index;
