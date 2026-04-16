import { useState, useEffect, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh", // Full screen height
};

const defaultCenter = {
  lat: 51.1657, // Germany Default
  lng: 10.4515,
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const calculateBoundingCircle = (locations) => {
  if (!locations || locations.length === 0) return null;

  // Calculate center point (average of all coordinates)
  const center = locations.reduce(
    (acc, shop) => {
      return {
        lat: acc.lat + parseFloat(shop.latitude),
        lng: acc.lng + parseFloat(shop.longitude),
      };
    },
    { lat: 0, lng: 0 },
  );

  center.lat /= locations.length;
  center.lng /= locations.length;

  // Calculate radius (maximum distance from center to any point)
  let maxRadius = 0;
  locations.forEach((shop) => {
    const distance = calculateDistance(
      center.lat,
      center.lng,
      parseFloat(shop.latitude),
      parseFloat(shop.longitude),
    );
    maxRadius = Math.max(maxRadius, distance);
  });

  return {
    center,
    radius: maxRadius * 1100, // Convert km to meters for Google Maps
  };
};

const Map = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [zoomLevel, setZoomLevel] = useState(6); // Initial zoom level for all Germany
  const [radius, setRadius] = useState(5);
  const [shops, setShops] = useState([]);
  const [nearbyShops, setNearbyShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [showResults, setShowResults] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBMFfmTUPok8HD1ZviaBfQfs2XFJKSB6LA",
  });
  const base_url = import.meta.env.VITE_BASE_URL;

  // Calculate bounding circle for all shops
  const boundingCircle = useMemo(() => {
    return calculateBoundingCircle(shops);
  }, [shops]);

  // Adjust zoom level based on bounding circle
  useEffect(() => {
    if (shops.length > 0 && !showResults && boundingCircle) {
      // Adjust zoom level based on the radius
      // Larger radius = lower zoom level (more zoomed out)
      const newZoom = Math.max(6, 12 - Math.log2(boundingCircle.radius / 1000));
      setZoomLevel(newZoom);
      setMapCenter(boundingCircle.center);
    }
  }, [shops, showResults, boundingCircle]);

  // Load all shops in Germany on component mount
  useEffect(() => {
    const fetchAllShops = async () => {
      try {
        setIsLoading(true);
        const latitude = 51.1657;
        const longitude = 10.4515;
        const radius = 1000.0;

        const response = await fetch(
          `${base_url}/photobooth/shops-nearby/?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("All shops data:", data);

        setShops(data);
      } catch (error) {
        console.error(
          "❗ Fehler beim Abrufen aller Fotostudios:",
          error.message,
          error,
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (isChecked) {
      fetchAllShops();
    }
  }, [isChecked, base_url]);

  const handleCheckboxChange = () => setIsChecked(!isChecked);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSliderChange = (e) => setRadius(e.target.value);

  // Fetch location based on user input
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (!inputValue) {
        alert("Bitte geben Sie eine gültige Adresse, Stadt oder PLZ ein.");
        return;
      }

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          inputValue,
        )}&key=AIzaSyBMFfmTUPok8HD1ZviaBfQfs2XFJKSB6LA`,
      );

      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Standortdaten");
      }

      const data = await response.json();

      if (data.status === "ZERO_RESULTS") {
        alert("❌ Standort nicht gefunden. Bitte überprüfen Sie die Eingabe.");
        return;
      }

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setMapCenter({ lat, lng });
        setZoomLevel(8); // Zoom in when location is found
        fetchNearbyShops(lat, lng, radius);
      } else {
        alert("❌ Standort nicht gefunden. Bitte überprüfen Sie die Eingabe.");
      }
    } catch (error) {
      console.error("❗Fehler beim Abrufen des Standorts:", error);
      alert("❗Fehler beim Abrufen des Standorts.");
    }
  };

  // Fetch nearby shops from API
  const fetchNearbyShops = async (latitude, longitude, radius) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${base_url}/photobooth/shops-nearby/?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
      );

      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Fotostudios");
      }

      const data = await response.json();

      const seenCoordinates = new Set();
      const formattedData = data.map((shop) => {
        let lat = parseFloat(shop.latitude);
        let lng = parseFloat(shop.longitude);
        const key = `${lat}-${lng}`;

        if (seenCoordinates.has(key)) {
          lat += Math.random() * 0.0001 - 0.00005;
          lng += Math.random() * 0.0001 - 0.00005;
        }
        seenCoordinates.add(`${lat}-${lng}`);

        const distance = calculateDistance(latitude, longitude, lat, lng);

        return {
          ...shop,
          latitude: lat,
          longitude: lng,
          distance: distance.toFixed(2),
        };
      });

      setNearbyShops(formattedData);
      setShowResults(true);
    } catch (error) {
      console.error("❗ Fehler beim Abrufen der Fotostudios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative h-3/4 mb-20 mt-12" id="map">
        {!isChecked && (
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-8">
            <div className="bg-yellow-300 text-white text-center py-2 rounded-t-lg font-bold text-lg">
              E-Passbild in der Nähe finden – von zertifizierten Fotografen
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 mb-4">
                Suchen Sie einen zertifizierten Fotografen für Ihr biometrisches
                E-Passbild? Mit unserer Standortsuche finden Sie schnell
                Fotostudios in Ihrer Nähe.
              </p>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="findDealer"
                  className="mr-2"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="findDealer" className="text-sm text-gray-700">
                  Finden Sie einen Fotografen
                </label>
              </div>
            </div>
          </div>
        )}

        {isChecked && (
          <div className="w-full h-full">
            <div className="w-full h-full relative">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={mapCenter}
                  zoom={zoomLevel}
                >
                  {/* Show all Germany shops as red dots when not in results view */}
                  {!showResults && shops.length > 0 && (
                    <>
                      {shops.map((shop) => (
                        <Marker
                          key={`all-${shop.id}`}
                          position={{
                            lat: parseFloat(shop.latitude),
                            lng: parseFloat(shop.longitude),
                          }}
                          onClick={() => {
                            setSelectedShop(shop);
                            setMapCenter({
                              lat: parseFloat(shop.latitude),
                              lng: parseFloat(shop.longitude),
                            });
                            setZoomLevel(6);
                          }}
                        />
                      ))}

                      {!showResults && boundingCircle && (
                        <Circle
                          center={boundingCircle.center}
                          radius={boundingCircle.radius}
                          options={{
                            fillColor: "#f4d65f",
                            fillOpacity: 0.2,
                            strokeColor: "#fbcc0e",
                            strokeOpacity: 0.5,
                            strokeWeight: 2,
                          }}
                        />
                      )}
                    </>
                  )}

                  {/* Show search radius circle when searching (inputValue exists) */}
                  {/* {inputValue && (
                    <Circle
                      center={mapCenter}
                      radius={radius * 400}
                      options={{
                        fillColor: "#f4d65f",
                        fillOpacity: 0.2,
                        strokeColor: "#fbcc0e",
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                      }}
                    />
                  )} */}

                  {/* Render nearby shop markers in results view */}
                  {showResults &&
                    nearbyShops.map((shop) => (
                      <Marker
                        key={`nearby-${shop.id}`}
                        position={{ lat: shop.latitude, lng: shop.longitude }}
                        onClick={() => setSelectedShop(shop)}
                      />
                    ))}

                  {/* InfoWindow for selected shop */}
                  {selectedShop &&
                    selectedShop.latitude &&
                    selectedShop.longitude &&
                    !isNaN(selectedShop.latitude) &&
                    !isNaN(selectedShop.longitude) && (
                      <InfoWindow
                        position={{
                          lat: parseFloat(selectedShop.latitude),
                          lng: parseFloat(selectedShop.longitude),
                        }}
                        onCloseClick={() => setSelectedShop(null)}
                      >
                        <div className="w-[400px] text-sm font-sans">
                          <div className="border-b border-yellow-300 relative mb-2">
                            <p className="text-yellow-300 p-2 font-bold inline-block px-2 border-t-4 border-x-2 border-yellow-300">
                              Infos
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="font-semibold">
                                {selectedShop.name}
                              </p>
                              <p>{selectedShop.address}</p>
                              <p>
                                {selectedShop.zipcode} {selectedShop.city}
                              </p>
                              <p>Deutschland</p>
                              <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedShop.latitude},${selectedShop.longitude}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-300 hover:underline"
                              >
                                Route berechnen
                              </a>
                            </div>
                            <div>
                              {selectedShop.distance && (
                                <p>
                                  <span className="">Entfernung:</span>{" "}
                                  <span className="text-gray-700">
                                    {selectedShop.distance} km
                                  </span>
                                </p>
                              )}
                              <p>
                                <span className="">Telefonnummer:</span>{" "}
                                <span className="text-gray-700">
                                  {selectedShop.shop_phone}
                                </span>
                              </p>
                              <p>
                                <span className="">Webseite:</span>{" "}
                                <span className="text-gray-700">
                                  <a
                                    href={
                                      selectedShop.website.startsWith(
                                        "http://",
                                      ) ||
                                      selectedShop.website.startsWith(
                                        "https://",
                                      )
                                        ? selectedShop.website
                                        : `https://${selectedShop.website}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                  >
                                    {selectedShop.website}
                                  </a>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                </GoogleMap>
              ) : (
                <p>Loading Map...</p>
              )}

              {/* Loading indicator */}
              {/* {isLoading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-black">Loading...</p>
                  </div>
                </div>
              )} */}

              {/* Search Form Inside Map */}
              <div className="lg:absolute top-4 left-4 bg-white mt-12 rounded-lg shadow-lg p-8 w-11/12 mx-4 sm:w-1/4 md:w-1/5 lg:w-1/4 z-10">
                {!showResults ? (
                  <>
                    <h2 className="text-center bg-yellow-300 text-black font-bold text-md py-2 px-4 rounded-t-lg">
                      PASSBILDSTUDIO SUCHEN
                    </h2>

                    <form className="pt-6" onSubmit={handleSearch}>
                      <div className="mb-6">
                        <h3 className="text-md font-bold text-center text-black mb-2">
                          MEIN STANDORT
                        </h3>
                        <div className="flex items-center justify-between text-center">
                          <input
                            type="text"
                            placeholder="Straße, Ort, PLZ"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-md font-bold text-black mb-2 text-center">
                          UMKREIS
                        </h3>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={radius}
                          onChange={handleSliderChange}
                          className="w-full text-yellow-300"
                        />
                        <div className="text-center mt-2 text-yellow-300 font-medium">
                          {radius} km
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="bg-yellow-300 text-black py-3 px-6 rounded-full shadow hover:bg-yellow-200"
                        >
                          Suche Starten
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="pt-0">
                    <div className="bg-yellow-300 text-white text-center font-bold py-2 mb-2 rounded">
                      ERGEBNISSE
                    </div>
                    <h3 className="text-sm font-semibold mb-3 text-center">
                      Händler in{" "}
                      <span className="text-black font-bold">Ihrer Nähe</span>
                    </h3>

                    <div className="max-h-[260px] overflow-y-auto divide-y">
                      {nearbyShops.map((shop) => (
                        <div
                          key={shop.id}
                          className={`px-3 py-2 text-sm cursor-pointer ${
                            selectedShop?.id === shop.id
                              ? "bg-gray-200"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedShop(shop)}
                        >
                          <p className="font-semibold">{shop.name}</p>
                          <p>{shop.address}</p>
                          <p>
                            {shop.zipcode} {shop.city}
                          </p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-gray-600">
                              ca. {shop.distance} km
                            </span>
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&destination=${shop.latitude},${shop.longitude}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-yellow-300 font-semibold hover:underline"
                            >
                              Route
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() => {
                          setShowResults(false);
                          setZoomLevel(6); // Zoom back out to Germany view
                        }}
                        className="text-yellow-300 underline"
                      >
                        Zurück zur Suche
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Map;
