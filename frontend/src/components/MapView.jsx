import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { useContext, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { LocationContext } from "../context/LocationContext";
import { getRoute } from "../services/routingService";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 12);
  }, [center, map]);

  return null;
}

function MapView() {
  const {
    sourceLocation,
    destinationLocation,
    setRouteInfo,
  } = useContext(LocationContext);

  const [currentLocation, setCurrentLocation] = useState([
    28.6139,
    77.2090,
  ]);

  const [route, setRoute] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      () => {}
    );
  }, []);

  useEffect(() => {
    async function loadRoute() {
      if (!sourceLocation || !destinationLocation) {
        setRoute([]);
        setRouteInfo(null);
        return;
      }

      const result = await getRoute(
        sourceLocation,
        destinationLocation
      );

      if (!result) return;

      const coords = result.geometry.coordinates.map((point) => [
        point[1],
        point[0],
      ]);

      setRoute(coords);

      setRouteInfo({
        distance: result.distance,
        duration: result.duration,
      });
    }

    loadRoute();
  }, [sourceLocation, destinationLocation, setRouteInfo]);

  const center = sourceLocation
    ? [sourceLocation.lat, sourceLocation.lng]
    : currentLocation;

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{
        width: "100%",
        height: "700px",
      }}
    >
      <ChangeView center={center} />

      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!sourceLocation && (
        <Marker position={currentLocation}>
          <Popup>Your Current Location</Popup>
        </Marker>
      )}

      {sourceLocation && (
        <Marker
          position={[
            sourceLocation.lat,
            sourceLocation.lng,
          ]}
        >
          <Popup>{sourceLocation.name}</Popup>
        </Marker>
      )}

      {destinationLocation && (
        <Marker
          position={[
            destinationLocation.lat,
            destinationLocation.lng,
          ]}
        >
          <Popup>{destinationLocation.name}</Popup>
        </Marker>
      )}

      {route.length > 0 && (
        <Polyline
          positions={route}
          pathOptions={{
            color: "#1565C0",
            weight: 6,
          }}
        />
      )}
    </MapContainer>
  );
}

export default MapView;