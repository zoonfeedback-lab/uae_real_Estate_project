"use client";

import React, { useState } from "react";
import MapView from "./MapView";
import PropertyCard from "./PropertyCard";

const PropertiesContent = () => {
  const [viewMode, setViewMode] = useState("grid");

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      status: "EXCLUSIVE",
      isVerified: true,
      name: "Villa Luminaire",
      location: "Palm Jumeirah",
      price: "42.5M",
      beds: 6,
      baths: 8,
      agentImage: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      status: "NEW LAUNCH",
      isVerified: true,
      name: "Skyline Majesty",
      location: "Business Bay",
      price: "18.9M",
      beds: 4,
      baths: 5,
      agentImage: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      status: "COMING SOON",
      isVerified: false,
      name: "Marina Heights",
      location: "Dubai Marina",
      isComingSoon: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      status: "EXCLUSIVE",
      isVerified: true,
      name: "The Oasis Villa",
      location: "Emirates Hills",
      price: "65.0M",
      beds: 7,
      baths: 9,
      agentImage: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      status: "VERIFIED",
      isVerified: true,
      name: "Azure Penthouse",
      location: "Dubai Marina",
      price: "12.4M",
      beds: 3,
      baths: 4,
      agentImage: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      status: "NEW LAUNCH",
      isVerified: true,
      name: "Saffron Estate",
      location: "Jumeirah Golf Estates",
      price: "28.2M",
      beds: 5,
      baths: 6,
      agentImage: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=800&q=80",
      status: "EXCLUSIVE",
      isVerified: true,
      name: "Crystal Cove",
      location: "Palm Jumeirah",
      price: "55.8M",
      beds: 6,
      baths: 7,
      agentImage: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      status: "VERIFIED",
      isVerified: true,
      name: "The Grand Regal",
      location: "Downtown Dubai",
      price: "34.5M",
      beds: 4,
      baths: 5,
      agentImage: "https://i.pravatar.cc/150?u=8",
    },
  ];

  return (
    <main className="properties-content">
      <MapView />

      <div className="content-header">
        <div className="header-text">
          <h1 className="content-title">Luxury Properties in Dubai</h1>
          <p className="content-subtitle">Showing {properties.length} exclusive listings</p>
        </div>

        <div className="header-controls">
          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button 
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>

          <div className="sort-dropdown">
            <span className="sort-label">Sort:</span>
            <select className="sort-select">
              <option>Price High to Low</option>
              <option>Price Low to High</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      <div className={`property-grid ${viewMode}`}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <style jsx>{`
        .properties-content {
          flex-grow: 1;
          padding: 30px 40px;
          background: var(--color-black);
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
        }

        .content-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--color-white);
          margin-bottom: 8px;
        }

        .content-subtitle {
          color: var(--color-gray-500);
          font-size: 0.95rem;
        }

        .header-controls {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .view-toggle {
          display: flex;
          background: var(--color-black-light);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid var(--color-gray-900);
        }

        .view-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray-500);
          border-radius: 6px;
          transition: var(--transition-fast);
        }

        .view-btn.active {
          background: var(--color-gray-900);
          color: var(--color-gold);
        }

        .sort-dropdown {
          background: var(--color-black-light);
          border: 1px solid var(--color-gray-900);
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sort-label {
          font-size: 0.85rem;
          color: var(--color-gray-400);
        }

        .sort-select {
          background: transparent;
          border: none;
          color: var(--color-white);
          font-size: 0.85rem;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        .property-grid.grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .property-grid.list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (max-width: 1200px) {
          .property-grid.grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .properties-content {
            padding: 20px;
          }
          .content-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .property-grid.grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default PropertiesContent;
