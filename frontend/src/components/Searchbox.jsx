import { useState, useContext } from "react";
import { searchLocation } from "../services/locationService";
import { LocationContext } from "../context/LocationContext";

function SearchBox() {
  const {
    setSourceLocation,
    setDestinationLocation,
  } = useContext(LocationContext);

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [sourceResults, setSourceResults] = useState([]);
  const [destinationResults, setDestinationResults] = useState([]);

  async function handleSource(e) {
    const value = e.target.value;
    setSource(value);

    if (value.length < 3) {
      setSourceResults([]);
      return;
    }

    const data = await searchLocation(value);
    setSourceResults(data);
  }

  async function handleDestination(e) {
    const value = e.target.value;
    setDestination(value);

    if (value.length < 3) {
      setDestinationResults([]);
      return;
    }

    const data = await searchLocation(value);
    setDestinationResults(data);
  }

  function selectSource(place) {
    const location = {
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
      name: place.display_name,
    };

    setSource(place.display_name);
    setSourceResults([]);
    setSourceLocation(location);
  }

  function selectDestination(place) {
    const location = {
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
      name: place.display_name,
    };

    setDestination(place.display_name);
    setDestinationResults([]);
    setDestinationLocation(location);
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 10px 30px rgba(0,0,0,.10)",
      }}
    >
      <h2
        style={{
          color: "#1565C0",
          marginBottom: "20px",
        }}
      >
        🚗 Smart Route Planner
      </h2>

      {/* SOURCE */}

      <input
        type="text"
        placeholder="📍 Enter Source"
        value={source}
        onChange={handleSource}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "16px",
        }}
      />

      {sourceResults.length > 0 && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            maxHeight: "180px",
            overflowY: "auto",
            marginTop: "6px",
          }}
        >
          {sourceResults.map((place) => (
            <div
              key={place.place_id}
              onClick={() => selectSource(place)}
              style={{
                padding: "12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              📍 {place.display_name}
            </div>
          ))}
        </div>
      )}

      {/* DESTINATION */}

      <input
        type="text"
        placeholder="🏁 Enter Destination"
        value={destination}
        onChange={handleDestination}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "16px",
        }}
      />

      {destinationResults.length > 0 && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            maxHeight: "180px",
            overflowY: "auto",
            marginTop: "6px",
          }}
        >
          {destinationResults.map((place) => (
            <div
              key={place.place_id}
              onClick={() => selectDestination(place)}
              style={{
                padding: "12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              🏁 {place.display_name}
            </div>
          ))}
        </div>
      )}

      <button
        style={{
          width: "100%",
          marginTop: "25px",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          background: "#1565C0",
          color: "#fff",
          fontSize: "17px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        🚗 Find Best Route
      </button>
    </div>
  );
}

export default SearchBox;