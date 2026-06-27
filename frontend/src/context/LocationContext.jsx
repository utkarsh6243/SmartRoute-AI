import { createContext, useState } from "react";

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [sourceLocation, setSourceLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);

  const [routeInfo, setRouteInfo] = useState(null);

  // Selected route option
  const [selectedRoute, setSelectedRoute] = useState(0);

  return (
    <LocationContext.Provider
      value={{
        sourceLocation,
        setSourceLocation,

        destinationLocation,
        setDestinationLocation,

        routeInfo,
        setRouteInfo,

        selectedRoute,
        setSelectedRoute,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}