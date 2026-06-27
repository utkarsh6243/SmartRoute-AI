function RouteOptions() {
  const routes = [
    {
      id: 0,
      title: "⭐ AI Recommended",
      color: "#1565C0",
      description:
        "AI will analyze traffic patterns, weather conditions and historical travel data to recommend the smartest route for your journey.",
    },
    {
      id: 1,
      title: "⚡ Fastest Route",
      color: "#43A047",
      description:
        "Find the quickest route using live traffic prediction, dynamic rerouting and estimated travel time optimization.",
    },
    {
      id: 2,
      title: "⛽ Fuel Saver",
      color: "#FB8C00",
      description:
        "Reduce fuel consumption using AI-based speed analysis, road conditions and efficient route planning.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        overflowX: "auto",
        paddingBottom: "10px",
      }}
    >
      {routes.map((route) => (
        <div
          key={route.id}
          style={{
            minWidth: "300px",
            background: "#fff",
            borderRadius: "18px",
            border: `2px solid ${route.color}`,
            padding: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            transition: ".3s",
            flexShrink: 0,
          }}
        >
          <h3
            style={{
              color: route.color,
              marginBottom: "15px",
            }}
          >
            {route.title}
          </h3>

          <div
            style={{
              background: "#F8F9FC",
              borderRadius: "12px",
              padding: "15px",
              minHeight: "120px",
            }}
          >
            <p
              style={{
                color: "#555",
                lineHeight: "26px",
                fontSize: "15px",
                margin: 0,
              }}
            >
              {route.description}
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
              background: "#FFF3CD",
              border: "1px solid #FFE69C",
              borderRadius: "10px",
              padding: "12px",
              textAlign: "center",
              color: "#856404",
              fontWeight: "600",
            }}
          >
            🚀 Coming Soon
          </div>

          <button
            disabled
            style={{
              width: "100%",
              marginTop: "18px",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: route.color,
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              opacity: 0.6,
              cursor: "not-allowed",
            }}
          >
            Feature Under Development
          </button>
        </div>
      ))}
    </div>
  );
}

export default RouteOptions;