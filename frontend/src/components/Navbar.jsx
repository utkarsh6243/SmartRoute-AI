function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        width: "100%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        borderBottom: "1px solid #E6ECF5",
        boxShadow: "0 3px 15px rgba(0,0,0,.06)",
      }}
    >
      <div>
        <h2
          style={{
            color: "#1565C0",
            fontSize: "28px",
          }}
        >
          🚗 SmartRoute AI
        </h2>

        <p
          style={{
            color: "#777",
            fontSize: "13px",
          }}
        >
          Intelligent Route Planner for India
        </p>
      </div>

      <button
        style={{
          background: "#1565C0",
          color: "white",
          border: "none",
          padding: "12px 28px",
          borderRadius: "10px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;