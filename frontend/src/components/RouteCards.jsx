import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

function RouteCards() {
  const { routeInfo } = useContext(LocationContext);

  if (!routeInfo) return null;

  const distance = (routeInfo.distance / 1000).toFixed(2);
  const duration = Math.ceil(routeInfo.duration / 60);

  let traffic = "🟢 Low";
  let score = 98;
  let routeType = "Fastest Route";

  if (duration > 25) {
    traffic = "🟡 Moderate";
    score = 90;
    routeType = "Balanced Route";
  }

  if (duration > 45) {
    traffic = "🔴 Heavy";
    score = 78;
    routeType = "Alternative Route";
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "22px",
        marginTop: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3
            style={{
              color: "#1565C0",
              marginBottom: "5px",
            }}
          >
            ⭐ {routeType}
          </h3>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            AI Recommended
          </p>
        </div>

        <div
          style={{
            background: "#1565C0",
            color: "white",
            padding: "10px 15px",
            borderRadius: "12px",
            fontWeight: "bold",
          }}
        >
          {score}/100
        </div>
      </div>

      <hr style={{ margin: "18px 0" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span>📏 Distance</span>
        <strong>{distance} km</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span>⏱ ETA</span>
        <strong>{duration} mins</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span>🚦 Traffic</span>
        <strong>{traffic}</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>🤖 AI Confidence</span>
        <strong>94%</strong>
      </div>
    </div>
  );
}

export default RouteCards;