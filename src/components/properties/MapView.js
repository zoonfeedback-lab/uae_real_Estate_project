"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic import for Leaflet components to avoid SSR issues in Next.js
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const MapView = () => {
  // We need to import L only on the client side
  const [L, setL] = React.useState(null);

  React.useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  const properties = [
    { id: 1, name: "Villa Luminaire", pos: [25.1124, 55.1390], price: "42.5M" },
    { id: 2, name: "Skyline Majesty", pos: [25.1833, 55.2667], price: "18.9M" },
    { id: 3, name: "Marina Heights", pos: [25.0819, 55.1367], price: "Contact" },
    { id: 4, name: "The Oasis Villa", pos: [25.0683, 55.1764], price: "65.0M" },
    { id: 5, name: "Azure Penthouse", pos: [25.0780, 55.1300], price: "12.4M" },
    { id: 6, name: "Saffron Estate", pos: [25.0253, 55.1956], price: "28.2M" },
    { id: 7, name: "Crystal Cove", pos: [25.1150, 55.1350], price: "55.8M" },
    { id: 8, name: "The Grand Regal", pos: [25.2048, 55.2708], price: "34.5M" },
  ];

  const customIcon = useMemo(() => {
    if (!L) return null;
    return L.divIcon({
      className: "custom-price-marker",
      html: `<div class="marker-container"><span class="price-text">AED 24M</span></div>`,
      iconSize: [80, 30],
      iconAnchor: [40, 15],
    });
  }, [L]);

  const createPriceIcon = (price) => {
    if (!L) return null;
    return L.divIcon({
      className: "custom-price-marker",
      html: `<div class="marker-container"><span class="price-text">${price}</span><div class="pulse"></div></div>`,
      iconSize: [80, 30],
      iconAnchor: [40, 15],
    });
  };

  if (!L) {
    return <div className="map-placeholder">Loading Map...</div>;
  }

  return (
    <div className="map-view">
      <MapContainer
        center={[25.1124, 55.2]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#0d0d0d" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {properties.map((prop) => (
          <Marker
            key={prop.id}
            position={prop.pos}
            icon={createPriceIcon(prop.price)}
          >
            <Popup>
              <div className="map-popup-content">
                <strong>{prop.name}</strong>
                <p>AED {prop.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <style jsx global>{`
        .map-view {
          height: 450px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 40px;
          border: var(--border-subtle);
          position: relative;
          z-index: 10;
        }

        .map-placeholder {
          height: 450px;
          background: var(--color-black-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          font-family: var(--font-heading);
          font-size: 1.2rem;
          border-radius: var(--radius-md);
        }

        .marker-container {
          background: rgba(0, 0, 0, 0.85);
          color: var(--color-gold);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid var(--color-gold-muted);
          backdrop-filter: blur(8px);
          white-space: nowrap;
          text-align: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .marker-container:hover {
          transform: scale(1.1);
          background: var(--color-gold);
          color: var(--color-black);
          border-color: var(--color-gold);
          z-index: 1000;
        }

        .marker-container::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: var(--color-gold);
          border-radius: 50%;
          border: 1px solid var(--color-black);
        }

        .pulse {
          position: absolute;
          width: 30px;
          height: 30px;
          background: var(--color-gold-muted);
          border-radius: 50%;
          z-index: -1;
          animation: mapPulse 2s infinite;
        }

        @keyframes mapPulse {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }

        .map-popup-content {
          color: var(--color-black);
          font-family: var(--font-body);
        }

        .leaflet-popup-content-wrapper {
          background: var(--color-white);
          border-radius: 8px;
        }

        .leaflet-container {
          filter: grayscale(0.2);
        }

        /* Hide leaflet branding for a cleaner look */
        .leaflet-control-attribution {
          font-size: 8px !important;
          background: rgba(0, 0, 0, 0.5) !important;
          color: #444 !important;
        }
        .leaflet-control-attribution a {
          color: #666 !important;
        }
      `}</style>
    </div>
  );
};

export default MapView;
