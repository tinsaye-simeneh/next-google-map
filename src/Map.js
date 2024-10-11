import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 24.7136,
  lng: 46.6753,
};

// Coordinates for the three different roads
const road1Coordinates = [
  { lat: 24.7136, lng: 46.6753 }, // Start of road 1
  { lat: 24.715, lng: 46.68 }, // End of road 1
];

const road2Coordinates = [
  { lat: 24.713, lng: 46.673 }, // Start of road 2
  { lat: 24.7145, lng: 46.677 }, // End of road 2
];

const road3Coordinates = [
  { lat: 24.712, lng: 46.674 }, // Start of road 3
  { lat: 24.714, lng: 46.6785 }, // End of road 3
];

const options = {
  tilt: 45,
  heading: 45,
  mapTypeId: "hybrid",
  zoom: 16, // Slightly zoomed out to better view the lines
};

const MapComponent = () => {
  const polylineOptionsRoad1 = {
    strokeColor: "#FF0000", // Red color for road 1
    strokeOpacity: 1.0,
    strokeWeight: 6, // Thicker line for visibility
  };

  const polylineOptionsRoad2 = {
    strokeColor: "#0000FF", // Blue color for road 2
    strokeOpacity: 1.0,
    strokeWeight: 6, // Thicker line for visibility
  };

  const polylineOptionsRoad3 = {
    strokeColor: "#00FF00", // Green color for road 3
    strokeOpacity: 1.0,
    strokeWeight: 6, // Thicker line for visibility
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyC3TxwdUzV5gbwZN-61Hb1RyDJr0PRSfW4">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          options={options}
          zoom={16} // Adjusted zoom level
        >
          <Marker position={center} />

          <Polyline
            key="road1"
            path={road1Coordinates}
            options={polylineOptionsRoad1}
            onLoad={() => console.log("Road 1 loaded")}
          />
          <Polyline
            key="road2"
            path={road2Coordinates}
            options={polylineOptionsRoad2}
            onLoad={() => console.log("Road 2 loaded")}
          />
          <Polyline
            key="road3"
            path={road3Coordinates}
            options={polylineOptionsRoad3}
            onLoad={() => console.log("Road 3 loaded")}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
