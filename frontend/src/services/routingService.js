export async function getRoute(source, destination) {
  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${source.lng},${source.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`
    );

    const data = await response.json();

    if (!data.routes || data.routes.length === 0) {
      return null;
    }

    return data.routes[0];
  } catch (err) {
    console.error("Routing Error:", err);
    return null;
  }
}