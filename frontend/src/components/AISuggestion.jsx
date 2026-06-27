import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

function AISuggestion() {
  const { routeInfo } = useContext(LocationContext);

  if (!routeInfo) return null;

  const distance = routeInfo.distance / 1000;
  const duration = routeInfo.duration / 60;

  let suggestions = [];

  if (duration < 20) {
    suggestions = [
      "✅ Fastest route currently available",
      "✅ Very low traffic expected",
      "✅ Fuel efficient route",
      "✅ Good road conditions",
      "✅ Recommended departure: Now",
    ];
  } else if (duration < 40) {
    suggestions = [
      "⚠ Moderate traffic expected",
      "✅ Alternative roads available",
      "⛽ Medium fuel consumption",
      "🌤 Weather looks clear",
      "🕒 Best departure: Within 15 minutes",
    ];
  } else {
    suggestions = [
      "🚫 Heavy traffic detected",
      "🚗 Consider delaying departure",
      "⚠ Multiple traffic signals ahead",
      "⛽ Higher fuel consumption",
      "🛣 Alternative route recommended",
    ];
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "20px",
        marginTop: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,.12)",
      }}
    >
      <h3
        style={{
          color: "#1565C0",
          marginBottom: "15px",
        }}
      >
        🤖 AI Recommendation
      </h3>

      {suggestions.map((item, index) => (
        <p
          key={index}
          style={{
            marginBottom: "12px",
            color: "#555",
            fontSize: "15px",
          }}
        >
          {item}
        </p>
      ))}

      <hr
        style={{
          margin: "15px 0",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>AI Confidence</span>

        <strong
          style={{
            color: "#1565C0",
          }}
        >
          96%
        </strong>
      </div>
    </div>
  );
}

export default AISuggestion;