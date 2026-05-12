"use client";

import React from "react";

const PropertyCard = ({ property }) => {
  const {
    image,
    status,
    isVerified,
    name,
    location,
    price,
    beds,
    baths,
    agentImage,
    isComingSoon,
  } = property;

  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={image} alt={name} className="property-image" />
        <div className="property-tags">
          {status && <span className="tag tag-status">{status}</span>}
          {isVerified && (
            <span className="tag tag-verified">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              VERIFIED
            </span>
          )}
        </div>
        <button className="favorite-btn">
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
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        {agentImage && (
          <div className="agent-avatar">
            <img src={agentImage} alt="Agent" />
          </div>
        )}
      </div>

      <div className="property-info">
        <h3 className="property-name">{name}</h3>
        <p className="property-location">
          <svg
            width="14"
            height="14"
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
          {location}
        </p>

        <div className="property-details-row">
          <div className="property-price">
            {isComingSoon ? (
              <span className="contact-price">Contact for Price</span>
            ) : (
              <>
                <span className="currency">AED</span> {price}
              </>
            )}
          </div>
          {!isComingSoon && (
            <div className="property-specs">
              <span className="spec">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 5h18v4H3V5Z" />
                  <path d="M3 9v2" />
                  <path d="M21 9v2" />
                </svg>
                {beds}
              </span>
              <span className="spec">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0l-1.88 1.88a1.5 1.5 0 0 0 0 2.12L5 10" />
                  <path d="M10 5 8.5 6.5a1.5 1.5 0 0 1-2.12 0l-1.88-1.88a1.5 1.5 0 0 1 0-2.12L6 1" />
                  <path d="M2 13h20" />
                  <path d="M18 13v1" />
                  <path d="M6 13v1" />
                  <path d="M2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2" />
                </svg>
                {baths}
              </span>
            </div>
          )}
        </div>

        <div className="property-actions">
          <button className="btn-outline btn-details">DETAILS</button>
          <button className="btn-primary btn-inquire">
            {isComingSoon ? "REGISTER INTEREST" : "INQUIRE"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .property-card {
          background: var(--color-black-card);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: var(--border-subtle);
          transition: var(--transition-base);
          display: flex;
          flex-direction: column;
        }

        .property-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold-muted);
          box-shadow: var(--shadow-elevated);
        }

        .property-image-container {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .property-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .property-card:hover .property-image {
          transform: scale(1.05);
        }

        .property-tags {
          position: absolute;
          top: 15px;
          left: 15px;
          display: flex;
          gap: 8px;
        }

        .tag {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .tag-status {
          background: var(--color-gold);
          color: var(--color-black);
        }

        .tag-verified {
          background: rgba(30, 41, 59, 0.7);
          color: #94a3b8;
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .favorite-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: var(--transition-fast);
        }

        .favorite-btn:hover {
          background: rgba(200, 165, 78, 0.8);
          color: var(--color-black);
        }

        .agent-avatar {
          position: absolute;
          bottom: -20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--color-black-card);
          overflow: hidden;
          z-index: 2;
        }

        .agent-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .property-info {
          padding: 24px 20px 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .property-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--color-white);
          margin-bottom: 6px;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--color-gray-500);
          margin-bottom: 20px;
        }

        .property-details-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .property-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-gold);
        }

        .contact-price {
          color: var(--color-gold);
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .currency {
          font-size: 0.75rem;
          font-weight: 500;
          margin-right: 4px;
        }

        .property-specs {
          display: flex;
          gap: 15px;
        }

        .spec {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--color-gray-400);
        }

        .property-actions {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 10px;
        }

        .btn-outline {
          padding: 10px;
          border: 1px solid var(--color-gray-800);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-gray-400);
          transition: var(--transition-fast);
        }

        .btn-outline:hover {
          border-color: var(--color-gray-600);
          color: var(--color-white);
          background: rgba(255, 255, 255, 0.03);
        }

        .btn-primary {
          padding: 10px;
          background: var(--color-gold);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-black);
          transition: var(--transition-fast);
        }

        .btn-primary:hover {
          background: var(--color-gold-light);
          box-shadow: var(--shadow-gold);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default PropertyCard;
