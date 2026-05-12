"use client";

import React from "react";
import Link from "next/link";

const DashboardSidebar = () => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "grid", active: true },
    { id: "favorites", label: "Favorites", icon: "heart" },
    { id: "searches", label: "Saved Searches", icon: "search" },
    { id: "visits", label: "Scheduled Visits", icon: "calendar" },
    { id: "mortgage", label: "Mortgage Requests", icon: "home" },
    { id: "messages", label: "Messages", icon: "message" },
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-top">
        <Link href="/" className="logo">
          LUXE REALTY
        </Link>

        <div className="user-profile">
          <div className="avatar-wrapper">
            <img src="https://i.pravatar.cc/150?u=khalid" alt="Khalid" />
            <div className="status-dot"></div>
          </div>
          <div className="user-info">
            <h4 className="user-name">Khalid Al-Mansouri</h4>
            <span className="user-status">PREMIUM MEMBER</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`nav-item ${item.active ? "active" : ""}`}
            >
              <span className={`icon icon-${item.icon}`}></span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <nav className="secondary-nav">
          <Link href="#settings" className="nav-item">
            <span className="icon icon-settings"></span>
            Settings
          </Link>
          <Link href="#support" className="nav-item">
            <span className="icon icon-support"></span>
            Support
          </Link>
        </nav>
        <button className="concierge-btn">Book Concierge</button>
      </div>

      <style jsx>{`
        .dashboard-sidebar {
          width: 320px;
          background: #0d0d0d;
          height: 100vh;
          position: sticky;
          top: 0;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }

        .logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          text-decoration: none;
          display: block;
          margin-bottom: 40px;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          margin-bottom: 40px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .user-profile:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(200, 165, 78, 0.3);
        }

        .avatar-wrapper {
          position: relative;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
        }

        .avatar-wrapper img {
          width: 100%;
          height: 100%;
          border-radius: 14px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .status-dot {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 12px;
          height: 12px;
          background: #10b981;
          border: 2px solid #0d0d0d;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .user-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .user-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.2;
        }

        .user-status {
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          border-radius: 12px;
          color: var(--color-gray-400);
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .nav-item:hover {
          color: var(--color-white);
          background: rgba(255, 255, 255, 0.03);
        }

        .nav-item.active {
          background: rgba(200, 165, 78, 0.12);
          color: var(--color-gold);
          font-weight: 600;
          border: 1px solid rgba(200, 165, 78, 0.1);
        }

        .icon {
          width: 20px;
          height: 20px;
          display: inline-block;
          background: currentColor;
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .icon {
          transform: scale(1.1);
        }

        /* Mock icons using background masks */
        .icon-grid { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'); }
        .icon-heart { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'); }
        .icon-search { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'); }
        .icon-calendar { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'); }
        .icon-home { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'); }
        .icon-message { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>'); }
        .icon-settings { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1V11a2 2 0 0 1-2-2 2 2 0 0 1 2-2v.09A1.65 1.65 0 0 0 5.6 4.6a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H11a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2v-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'); }
        .icon-support { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'); }

        .sidebar-bottom {
          margin-top: 40px;
        }

        .secondary-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 24px;
        }

        .concierge-btn {
          width: 100%;
          background: var(--color-gold);
          color: var(--color-black);
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .concierge-btn:hover {
          background: var(--color-gold-light);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(200, 165, 78, 0.3);
        }
      `}</style>
    </aside>
  );
};

export default DashboardSidebar;
