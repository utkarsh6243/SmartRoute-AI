import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

function RouteInfo() {
  const { routeInfo } = useContext(LocationContext);

  if (!routeInfo) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,.12)",
      }}
    >
      <h3 style={{ color: "#1565C0", marginBottom: "15px" }}>
        🚗 Route Details
      </h3>

      <p style={{ marginBottom: "10px" }}>
        📏 Distance: {(routeInfo.distance / 1000).toFixed(2)} km
      </p>

      <p>
        ⏱ ETA: {Math.ceil(routeInfo.duration / 60)} mins
      </p>
    </div>
  );
}

export default RouteInfo;