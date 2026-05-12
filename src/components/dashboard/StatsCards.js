"use client";

import React from "react";

const StatsCards = () => {
  return (
    <div className="stats-grid">
      {/* Active Inquiries */}
      <div className="stats-card">
        <div className="card-header">
          <span className="card-label">Active Inquiries</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="label-icon">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="card-value">12</div>
        <div className="card-chart">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>

      {/* Saved Properties */}
      <div className="stats-card">
        <div className="card-header">
          <span className="card-label">Saved Properties</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="label-icon">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div className="card-value">28</div>
        <div className="sparkline-wrapper">
          <svg className="sparkline" viewBox="0 0 100 30">
            <path d="M0,25 Q10,15 20,20 T40,10 T60,15 T80,5 T100,20" fill="none" stroke="var(--color-gold)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Scheduled Visits */}
      <div className="stats-card">
        <div className="card-header">
          <span className="card-label">Scheduled Visits</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="label-icon">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <div className="card-value">4</div>
        <div className="card-footer-text">Next: Tomorrow, 14:00</div>
      </div>

      {/* Estimated Portfolio */}
      <div className="stats-card">
        <div className="card-header">
          <span className="card-label">Estimated Portfolio</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="label-icon">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div className="card-value-group">
          <span className="card-value">AED 42.5M</span>
          <span className="value-trend">+1.8% this month</span>
        </div>
      </div>

      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 160px;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(200, 165, 78, 0.2);
          transform: translateY(-4px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .card-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-gray-400);
          max-width: 80%;
          line-height: 1.2;
        }

        .label-icon {
          color: var(--color-gray-600);
          flex-shrink: 0;
          margin-top: -2px;
        }

        .card-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .card-value-group {
          display: flex;
          flex-direction: column;
        }

        .value-trend {
          font-size: 0.75rem;
          font-weight: 600;
          color: #10b981;
        }

        .progress-bar {
          height: 4px;
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--color-gold);
          border-radius: 2px;
        }

        .sparkline-wrapper {
          height: 30px;
        }

        .sparkline {
          width: 100%;
          height: 100%;
        }

        .card-footer-text {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-gray-500);
        }

        @media (max-width: 1200px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default StatsCards;
