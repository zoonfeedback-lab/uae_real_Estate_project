"use client";

import React from "react";

const MarketInsightsWidget = () => {
  const bars = [40, 60, 50, 75, 95, 80];

  return (
    <div className="insights-widget">
      <h3 className="section-title">Market Insights</h3>
      <p className="widget-subtitle">Dubai Real Estate ROI Index (24h)</p>

      <div className="chart-container">
        <div className="bar-chart">
          {bars.map((height, i) => (
            <div 
              key={i} 
              className="chart-bar" 
              style={{ height: `${height}%`, background: i >= 4 ? 'var(--color-gold)' : 'rgba(255,255,255,0.1)' }}
            ></div>
          ))}
        </div>
      </div>

      <div className="insight-stats">
        <div className="insight-row">
          <span>Avg. Rental Yield</span>
          <span className="insight-val">7.2%</span>
        </div>
        <div className="insight-row">
          <span>Annual Appreciation</span>
          <span className="insight-val gold">+12.4%</span>
        </div>
      </div>

      <button className="detailed-btn">Detailed Analysis</button>

      <style jsx>{`
        .insights-widget {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px;
          flex: 1;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 4px;
        }

        .widget-subtitle {
          font-size: 0.75rem;
          color: var(--color-gray-500);
          margin-bottom: 30px;
        }

        .chart-container {
          height: 120px;
          margin-bottom: 30px;
        }

        .bar-chart {
          height: 100%;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }

        .chart-bar {
          flex: 1;
          border-radius: 4px;
          transition: transform 0.3s ease;
        }

        .chart-bar:hover {
          transform: scaleY(1.1);
        }

        .insight-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 30px;
        }

        .insight-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--color-gray-400);
          font-weight: 500;
        }

        .insight-val {
          color: var(--color-white);
          font-weight: 700;
        }

        .insight-val.gold {
          color: var(--color-gold);
        }

        .detailed-btn {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--color-white);
          padding: 12px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .detailed-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default MarketInsightsWidget;
