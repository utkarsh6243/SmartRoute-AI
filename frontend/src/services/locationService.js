export async function searchLocation(query) {

    if (!query || query.length < 3) return [];

    try {

        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                query
            )}&format=json&limit=5&countrycodes=in`
        );

        if (!response.ok) {
            throw new Error("Search failed");
        }

        return await response.json();

    } catch (err) {
        console.error(err);
        return [];
    }
}