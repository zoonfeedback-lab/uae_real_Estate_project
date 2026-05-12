"use client";

import React from "react";

const DashboardPropertyCard = ({ property }) => {
  return (
    <div className="dash-prop-card">
      <div className="image-container">
        <img src={property.image} alt={property.name} />
        {property.tag && <span className="tag">{property.tag}</span>}
        <div className="price-overlay">
          <span className="price">AED {property.price}</span>
        </div>
      </div>
      <div className="info">
        <h4 className="prop-name">{property.name}</h4>
        <p className="prop-loc">{property.location}</p>
      </div>

      <style jsx>{`
        .dash-prop-card {
          min-width: 320px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .dash-prop-card:hover {
          transform: translateY(-8px);
          border-color: rgba(200, 165, 78, 0.2);
        }

        .image-container {
          position: relative;
          height: 200px;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--color-gold);
          color: var(--color-black);
          font-size: 0.65rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .price-overlay {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .price {
          color: var(--color-white);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .info {
          padding: 20px;
        }

        .prop-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 4px;
        }

        .prop-loc {
          font-size: 0.8rem;
          color: var(--color-gray-500);
        }
      `}</style>
    </div>
  );
};

export default DashboardPropertyCard;
