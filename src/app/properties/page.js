"use client";

import React from "react";
import Link from "next/link";
import PropertiesSidebar from "@/components/properties/PropertiesSidebar";
import PropertiesContent from "@/components/properties/PropertiesContent";

const PropertiesPage = () => {
  return (
    <div className="properties-page-container">
      {/* Navbar Mockup (to match image exactly) */}
      <header className="properties-navbar">
        <div className="nav-left">
          <div className="logo">LUXE ESTATE</div>
          <nav className="main-nav">
            <Link href="/properties" className="nav-link active">Properties</Link>
            <Link href="#" className="nav-link">Insights</Link>
            <Link href="#" className="nav-link">Concierge</Link>
            <Link href="#" className="nav-link">Management</Link>
          </nav>
        </div>
        
        <div className="nav-right">
          <div className="search-container">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input type="text" placeholder="Search locations.." className="search-input" />
          </div>
          <Link href="#" className="sign-in-link">Sign In</Link>
          <button className="list-property-btn">List Property</button>
        </div>
      </header>

      <div className="properties-layout">
        <PropertiesSidebar />
        <PropertiesContent />
      </div>

      <style jsx>{`
        .properties-page-container {
          background: var(--color-black);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .properties-navbar {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          border-bottom: var(--border-subtle);
          background: var(--color-black);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--color-gold);
          letter-spacing: 0.05em;
        }

        .main-nav {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-gray-400);
          transition: var(--transition-fast);
          position: relative;
          padding: 8px 0;
        }

        .nav-link:hover {
          color: var(--color-white);
        }

        .nav-link.active {
          color: var(--color-white);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-gold);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 30px;
          padding: 0 20px;
          height: 44px;
          width: 240px;
          border: 1px solid var(--border-subtle);
        }

        .search-container svg {
          color: var(--color-gray-500);
          margin-right: 12px;
        }

        .search-input {
          background: transparent;
          border: none;
          color: var(--color-white);
          font-size: 0.9rem;
          outline: none;
          width: 100%;
        }

        .sign-in-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-white);
        }

        .list-property-btn {
          background: var(--color-gold);
          color: var(--color-black);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .list-property-btn:hover {
          background: var(--color-gold-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-gold);
        }

        .properties-layout {
          display: flex;
          flex: 1;
        }

        @media (max-width: 1200px) {
          .nav-left { gap: 30px; }
          .search-container { width: 180px; }
        }

        @media (max-width: 1024px) {
          .properties-navbar { padding: 0 20px; }
          .main-nav, .search-container, .sign-in-link { display: none; }
        }
      `}</style>
    </div>
  );
};

export default PropertiesPage;
