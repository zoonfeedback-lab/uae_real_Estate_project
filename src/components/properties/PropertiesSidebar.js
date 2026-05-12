"use client";

import React, { useState } from "react";

const PropertiesSidebar = () => {
  const [transaction, setTransaction] = useState("buy");
  const [propertyType, setPropertyType] = useState("penthouse");
  const [priceRange, setPriceRange] = useState(45);
  const [isApplying, setIsApplying] = useState(false);
  const [amenities, setAmenities] = useState({
    pool: true,
    view: false,
    smart: false,
  });

  const toggleAmenity = (key) => {
    setAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => setIsApplying(false), 800);
  };

  return (
    <aside className="properties-sidebar">
      <div className="filter-section">
        <h4 className="filter-label">Filters</h4>
        <p className="filter-sublabel">REFINE YOUR SELECTION</p>
      </div>

      {/* Transaction Toggle */}
      <div className="filter-group">
        <label className="group-label">Transaction</label>
        <div className="toggle-container">
          <button
            className={`toggle-btn ${transaction === "buy" ? "active" : ""}`}
            onClick={() => setTransaction("buy")}
          >
            Buy
          </button>
          <button
            className={`toggle-btn ${transaction === "rent" ? "active" : ""}`}
            onClick={() => setTransaction("rent")}
          >
            Rent
          </button>
        </div>
      </div>

      {/* Location */}
      <div className="filter-group">
        <label className="group-label">Location</label>
        <div className="input-with-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <input
            type="text"
            placeholder="Dubai Marina, Palm..."
            className="filter-input"
          />
        </div>
      </div>

      {/* Property Type */}
      <div className="filter-group">
        <label className="group-label">Property Type</label>
        <div className="selectable-list">
          <div
            className={`selectable-item ${
              propertyType === "penthouse" ? "active" : ""
            }`}
            onClick={() => setPropertyType("penthouse")}
          >
            <div className="item-content">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <path d="M7 14h10" />
                <path d="M7 10h10" />
                <path d="M7 6h10" />
                <path d="M12 2v20" />
              </svg>
              <span>Penthouse</span>
            </div>
            {propertyType === "penthouse" && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>

          <div
            className={`selectable-item ${
              propertyType === "villa" ? "active" : ""
            }`}
            onClick={() => setPropertyType("villa")}
          >
            <div className="item-content">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Luxury Villa</span>
            </div>
            {propertyType === "villa" && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <label className="group-label">Price Range (AED)</label>
        <div className="range-slider-container">
          <input
            type="range"
            min="5"
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="price-slider"
          />
          <div className="range-labels">
            <span>5M</span>
            <span>{priceRange}M</span>
            <span>100M+</span>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="filter-group">
        <label className="group-label">Amenities</label>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={amenities.pool}
              onChange={() => toggleAmenity("pool")}
            />
            <span className="checkmark"></span>
            <span>Private Pool</span>
          </label>
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={amenities.view}
              onChange={() => toggleAmenity("view")}
            />
            <span className="checkmark"></span>
            <span>Sea View</span>
          </label>
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={amenities.smart}
              onChange={() => toggleAmenity("smart")}
            />
            <span className="checkmark"></span>
            <span>Smart Home</span>
          </label>
        </div>
      </div>

      <button
        className={`apply-filters-btn ${isApplying ? "applying" : ""}`}
        onClick={handleApply}
        disabled={isApplying}
      >
        {isApplying ? "Applying..." : "Apply Filters"}
      </button>

      <style jsx>{`
        .properties-sidebar {
          width: 360px;
          background: var(--color-black-light);
          padding: 30px 20px;
          height: calc(100vh - 80px);
          position: sticky;
          top: 80px;
          overflow-y: auto;
          border-right: var(--border-subtle);
        }

        .filter-section {
          margin-bottom: 30px;
        }

        .filter-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .filter-sublabel {
          font-size: 0.65rem;
          color: var(--color-gray-500);
          letter-spacing: 0.05em;
        }

        .filter-group {
          margin-bottom: 28px;
        }

        .group-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-gray-300);
          margin-bottom: 12px;
        }

        .toggle-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid var(--color-gray-900);
        }

        .toggle-btn {
          padding: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 6px;
          color: var(--color-gray-500);
          transition: var(--transition-fast);
        }

        .toggle-btn.active {
          background: var(--color-gold);
          color: var(--color-black);
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-with-icon svg {
          position: absolute;
          left: 12px;
          color: var(--color-gray-600);
        }

        .filter-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-gray-900);
          border-radius: 8px;
          padding: 10px 10px 10px 40px;
          color: var(--color-white);
          font-size: 0.85rem;
          outline: none;
          transition: var(--transition-fast);
        }

        .filter-input:focus {
          border-color: var(--color-gold-muted);
          background: rgba(255, 255, 255, 0.05);
        }

        .selectable-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .selectable-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-gray-900);
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .selectable-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-gray-700);
        }

        .selectable-item.active {
          border-color: var(--color-gold-muted);
          background: rgba(200, 165, 78, 0.05);
        }

        .item-content {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-gray-300);
        }

        .selectable-item.active .item-content {
          color: var(--color-gold);
        }

        .price-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          background: var(--color-gray-900);
          border-radius: 2px;
          outline: none;
          margin-bottom: 15px;
        }

        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: var(--color-gold);
          border: 2px solid var(--color-black);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(200, 165, 78, 0.4);
          transition: var(--transition-fast);
        }

        .price-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          background: var(--color-gold-light);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-gray-500);
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          color: var(--color-gray-300);
          cursor: pointer;
          position: relative;
        }

        .checkbox-item input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          height: 18px;
          width: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-gray-800);
          border-radius: 4px;
          position: relative;
          transition: var(--transition-fast);
        }

        .checkbox-item:hover .checkmark {
          border-color: var(--color-gray-600);
        }

        .checkbox-item input:checked ~ .checkmark {
          background: var(--color-gold);
          border-color: var(--color-gold);
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid var(--color-black);
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-item input:checked ~ .checkmark:after {
          display: block;
        }

        .apply-filters-btn {
          width: 100%;
          background: var(--color-gold);
          color: var(--color-black);
          padding: 12px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-top: 10px;
          transition: var(--transition-fast);
        }

        .apply-filters-btn.applying {
          background: var(--color-gray-800);
          color: var(--color-gray-500);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
          position: relative;
          overflow: hidden;
        }

        .apply-filters-btn.applying::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          100% { left: 200%; }
        }

        @media (max-width: 1024px) {
          .properties-sidebar {
            display: none; /* Hide on tablets/mobile for now, or implement a drawer */
          }
        }
      `}</style>
    </aside>
  );
};

export default PropertiesSidebar;
