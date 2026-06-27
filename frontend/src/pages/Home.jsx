import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import RouteCards from "../components/RouteCards";
import AISuggestion from "../components/AISuggestion";
import TrafficCard from "../components/TrafficCard";
import RouteOptions from "../components/RouteOptions";
import NavigationPanel from "../components/NavigationPanel";
import RoadPrediction from "../components/RoadPrediction";
import MapView from "../components/MapView";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#F4F7FC",
          height: "calc(100vh - 80px)",
        }}
      >
        {/* LEFT SIDEBAR */}

        <div
          style={{
            width: "340px",
            minWidth: "340px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            overflowY: "auto",
          }}
        >
          <SearchBox />

          <RouteCards />

          <RoadPrediction />

          <AISuggestion />

          <TrafficCard />
        </div>

        {/* RIGHT PANEL */}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            overflowY: "auto",
          }}
        >
          {/* MAP */}

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              minHeight: "700px",
              flexShrink: 0,
            }}
          >
            <MapView />
          </div>

          {/* ROUTE OPTIONS */}

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                color: "#1565C0",
                marginBottom: "20px",
              }}
            >
              🛣 Route Options
            </h2>

            <RouteOptions />
          </div>

          {/* NAVIGATION */}

          <NavigationPanel />
        </div>
      </div>
    </>
  );
}

export default Home;