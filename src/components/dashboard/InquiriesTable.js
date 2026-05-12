"use client";

import React from "react";

const InquiriesTable = () => {
  const inquiries = [
    {
      id: 1,
      property: "Skyline Penthouse",
      location: "Dubai Marina",
      agent: "Elena Vance",
      status: "AGENT RESPONDED",
      statusColor: "gold",
    },
    {
      id: 2,
      property: "Palm Jumeirah Villa",
      location: "Frond J",
      agent: "Omar Sharif",
      status: "VIEWING SCHEDULED",
      statusColor: "blue",
    },
    {
      id: 3,
      property: "Downtown Loft",
      location: "Burj Vista",
      agent: "Sarah Chen",
      status: "OFFER PENDING",
      statusColor: "gray",
    },
  ];

  return (
    <div className="inquiries-section">
      <div className="section-header">
        <h3 className="section-title">Recent Inquiries</h3>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Agent</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="property-cell">
                    <span className="property-name">{item.property}</span>
                    <span className="property-loc">{item.location}</span>
                  </div>
                </td>
                <td>{item.agent}</td>
                <td>
                  <span className={`status-tag status-${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .inquiries-section {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px;
          flex: 2;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-white);
        }

        .view-all-btn {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: transparent;
          cursor: pointer;
        }

        .table-container {
          overflow-x: auto;
        }

        .dashboard-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .dashboard-table th {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dashboard-table td {
          padding: 16px;
          font-size: 0.9rem;
          color: var(--color-gray-300);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .dashboard-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .property-cell {
          display: flex;
          flex-direction: column;
        }

        .property-name {
          font-weight: 600;
          color: var(--color-white);
        }

        .property-loc {
          font-size: 0.75rem;
          color: var(--color-gray-500);
        }

        .status-tag {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .status-gold {
          background: rgba(200, 165, 78, 0.15);
          color: var(--color-gold);
        }

        .status-blue {
          background: rgba(30, 64, 175, 0.2);
          color: #60a5fa;
        }

        .status-gray {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-gray-400);
        }

        .action-btn {
          color: var(--color-gray-600);
          background: transparent;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .action-btn:hover {
          color: var(--color-white);
        }
      `}</style>
    </div>
  );
};

export default InquiriesTable;
