function NavigationPanel() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "50px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        🛰️
      </div>

      <h2
        style={{
          color: "#1565C0",
          marginBottom: "15px",
        }}
      >
        Smart Navigation Dashboard
      </h2>

      <p
        style={{
          color: "#666",
          lineHeight: "30px",
          fontSize: "17px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Live navigation, turn-by-turn voice guidance, dynamic rerouting,
        lane assistance, ETA optimization and real-time traffic intelligence
        will be available in the upcoming release.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "inline-block",
          background: "#1565C0",
          color: "#fff",
          padding: "12px 30px",
          borderRadius: "30px",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        🚀 Coming Soon
      </div>
    </div>
  );
}

export default NavigationPanel;