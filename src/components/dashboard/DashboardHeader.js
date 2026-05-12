"use client";

import React from "react";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <nav className="header-nav">
          <Link href="#market" className="nav-link">Market Insights</Link>
          <Link href="#launches" className="nav-link">New Launches</Link>
        </nav>
      </div>

      <div className="header-right">
        <div className="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search Listings..." />
        </div>

        <div className="action-icons">
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <div className="notification-badge"></div>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>

        <button className="list-property-btn">List Property</button>
      </div>

      <style jsx>{`
        .dashboard-header {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          background: #0d0d0d;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 0;
          z-index: 100;
          width: calc(100% - 0px); /* Ensure it spans the width correctly */
        }

        .header-nav {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-gray-400);
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--color-white);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 10px 20px;
          border-radius: 30px;
          width: 260px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--color-gray-500);
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--color-white);
          font-size: 0.9rem;
          width: 100%;
        }

        .action-icons {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray-400);
          border-radius: 50%;
          transition: all 0.2s ease;
          background: transparent;
          cursor: pointer;
        }

        .icon-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-white);
        }

        .notification-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 8px;
          height: 8px;
          background: var(--color-gold);
          border-radius: 50%;
          border: 2px solid #0d0d0d;
        }

        .list-property-btn {
          background: var(--color-gold);
          color: var(--color-black);
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .list-property-btn:hover {
          background: var(--color-gold-light);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(200, 165, 78, 0.2);
        }

        @media (max-width: 1024px) {
          .header-nav, .search-box { display: none; }
        }
      `}</style>
    </header>
  );
};

export default DashboardHeader;
