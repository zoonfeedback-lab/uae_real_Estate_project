"use client";

import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import InquiriesTable from "@/components/dashboard/InquiriesTable";
import MarketInsightsWidget from "@/components/dashboard/MarketInsightsWidget";
import DashboardPropertyCard from "@/components/dashboard/DashboardPropertyCard";

const DashboardPage = () => {
  const curatedProperties = [
    {
      id: 1,
      name: "The Crystal Mansion",
      location: "Emirates Hills, Dubai",
      price: "18,500,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      tag: "EXCLUSIVE",
    },
    {
      id: 2,
      name: "Observation Loft",
      location: "Palm Jumeirah, Dubai",
      price: "9,200,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      tag: "NEW LAUNCH",
    },
    {
      id: 3,
      name: "Sunset Sanctuary",
      location: "Jumeirah Golf Estates",
      price: "24,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
  ];

  const recentlyViewed = [
    { id: 1, name: "The Pearl Suite", location: "Downtown Dubai", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&q=80" },
    { id: 2, name: "Azure Residence", location: "Blue Waters Island", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80" },
    { id: 3, name: "The Oasis Villa", location: "Arabian Ranches", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=80" },
  ];

  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      
      <main className="dashboard-main">
        <DashboardHeader />
        
        <div className="dashboard-content">
          <div className="welcome-section">
            <h1 className="welcome-title">Marhaba, Khalid Al-Mansouri</h1>
            <p className="welcome-text">
              Welcome back to your private portfolio. The Dubai luxury market has seen a 
              4.2% uptick in your preferred sectors this week.
            </p>
          </div>

          <StatsCards />

          <div className="data-sections">
            <InquiriesTable />
            <MarketInsightsWidget />
          </div>

          <div className="curated-section">
            <div className="section-header">
              <div>
                <h3 className="section-title">Curated For You</h3>
                <p className="section-subtitle">Based on your interest in Waterfront Properties</p>
              </div>
              <div className="carousel-controls">
                <button className="control-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <button className="add-btn">+</button>
              </div>
            </div>

            <div className="property-carousel">
              {curatedProperties.map(prop => (
                <DashboardPropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>

          <div className="recently-viewed">
            <h4 className="section-label">Recently Viewed</h4>
            <div className="viewed-list">
              {recentlyViewed.map(item => (
                <div key={item.id} className="viewed-item">
                  <img src={item.image} alt={item.name} />
                  <div className="viewed-info">
                    <span className="viewed-name">{item.name}</span>
                    <span className="viewed-loc">{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          background: #080808;
          min-height: 100vh;
        }

        .dashboard-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dashboard-content {
          padding: 40px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .welcome-section {
          margin-bottom: 40px;
        }

        .welcome-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 12px;
        }

        .welcome-text {
          font-size: 1rem;
          color: var(--color-gray-400);
          max-width: 700px;
          line-height: 1.6;
        }

        .data-sections {
          display: flex;
          gap: 24px;
          margin-bottom: 60px;
        }

        .curated-section {
          margin-bottom: 60px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 4px;
        }

        .section-subtitle {
          font-size: 0.9rem;
          color: var(--color-gray-500);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .control-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .add-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-gold);
          color: var(--color-black);
          font-size: 1.5rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-left: 8px;
        }

        .property-carousel {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          padding-bottom: 20px;
          scrollbar-width: none;
        }

        .property-carousel::-webkit-scrollbar {
          display: none;
        }

        .recently-viewed {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 40px;
        }

        .section-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-gray-600);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .viewed-list {
          display: flex;
          gap: 40px;
        }

        .viewed-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .viewed-item img {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .viewed-name {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 2px;
        }

        .viewed-loc {
          font-size: 0.75rem;
          color: var(--color-gray-500);
        }

        @media (max-width: 1200px) {
          .data-sections { flex-direction: column; }
        }

        @media (max-width: 1024px) {
          .dashboard-container { flex-direction: column; }
          .dashboard-sidebar { width: 100%; height: auto; position: static; }
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
