"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./portfolio.module.css";

const SAVED_PROPERTIES = [
  {
    id: 1,
    title: "The Royal Penthouse",
    location: "Downtown Dubai",
    price: 24500000,
    beds: 5,
    sqft: "8,450",
    status: "Off-Plan Exclusive",
    type: "Penthouse",
    roi: "7.8%",
    amenities: ["Pool", "Gym", "Concierge"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    note: "High capital appreciation potential due to upcoming metro expansion nearby. High floor priority requested.",
    checked: true
  },
  {
    id: 2,
    title: "Azure Waterfront Villa",
    location: "Palm Jumeirah",
    price: 45000000,
    beds: 6,
    sqft: "12,200",
    status: "Ready to Move",
    type: "Villa",
    roi: "6.5%",
    amenities: ["Pool", "Beach Access", "Gym"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    note: "Secondary market opportunity. Owners are highly motivated. Private beach access is a huge rental USP.",
    checked: false
  },
  {
    id: 3,
    title: "Hillside Estate",
    location: "Emirates Hills",
    price: 118000000,
    beds: 8,
    sqft: "24,000",
    status: "Limited Collection",
    type: "Estate",
    roi: "8.2%",
    amenities: ["Pool", "Gym", "Home Cinema", "Spa"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    note: "Asset preservation strategy. Property holds value exceptionally well. Previous sales in area up 15% YoY.",
    checked: true
  },
  {
    id: 4,
    title: "Five Luxe Residence",
    location: "JBR",
    price: 12250000,
    beds: 3,
    sqft: "3,200",
    status: "Sold Out",
    type: "Residence",
    roi: "5.9%",
    amenities: ["Pool", "Gym"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    note: null,
    checked: false
  }
];

const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under 15M", min: 0, max: 15000000 },
  { label: "15M - 30M", min: 15000000, max: 30000000 },
  { label: "30M - 50M", min: 30000000, max: 50000000 },
  { label: "50M+", min: 50000000, max: Infinity },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Property Type");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedBeds, setSelectedBeds] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const filteredProperties = useMemo(() => {
    return SAVED_PROPERTIES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "All" || p.type === selectedType;
      const matchesLocation = selectedLocation === "All" || p.location === selectedLocation;
      const matchesBeds = selectedBeds === "All" || p.beds === parseInt(selectedBeds);
      const matchesStatus = selectedStatus === "All" || p.status === selectedStatus;
      const matchesPrice = p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max;
      const matchesAmenities = selectedAmenities.length === 0 || 
                              selectedAmenities.every(a => p.amenities.includes(a));
      
      return matchesSearch && matchesType && matchesLocation && matchesBeds && matchesStatus && matchesPrice && matchesAmenities;
    });
  }, [searchQuery, selectedType, selectedLocation, selectedBeds, selectedStatus, selectedPriceRange, selectedAmenities]);

  const locations = ["All", ...new Set(SAVED_PROPERTIES.map(p => p.location))];
  const types = ["All", ...new Set(SAVED_PROPERTIES.map(p => p.type))];
  const beds = ["All", ...new Set(SAVED_PROPERTIES.map(p => p.beds.toString()))];
  const statuses = ["All", ...new Set(SAVED_PROPERTIES.map(p => p.status))];
  const allAmenities = [...new Set(SAVED_PROPERTIES.flatMap(p => p.amenities))];

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.filterHeader}>
            <h2>FILTERS</h2>
            <p>Refine your selection</p>
          </div>
          <ul className={styles.filterList}>
            {/* Search */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Search" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Search")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              Search
            </li>
            {activeFilter === "Search" && (
              <div style={{ padding: "0 0 16px 32px" }}>
                <input 
                  type="text" 
                  placeholder="Search properties..." 
                  className={styles.filterInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            )}

            {/* Location */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Location" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Location")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              Location
            </li>
            {activeFilter === "Location" && (
              <div style={{ padding: "0 0 16px 32px" }}>
                <select 
                  className={styles.filterSelect}
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            )}

            {/* Property Type */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Property Type" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Property Type")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </span>
              Property Type
            </li>
            {activeFilter === "Property Type" && (
              <div style={{ padding: "0 0 16px 32px" }}>
                <select 
                  className={styles.filterSelect}
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            )}

            {/* Bedrooms */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Bedrooms" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Bedrooms")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
              </span>
              Bedrooms
            </li>
            {activeFilter === "Bedrooms" && (
              <div style={{ padding: "0 0 16px 32px" }}>
                <select 
                  className={styles.filterSelect}
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                >
                  {beds.map(b => <option key={b} value={b}>{b === "All" ? "All" : `${b} Beds`}</option>)}
                </select>
              </div>
            )}

            {/* Price Range */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Price Range" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Price Range")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </span>
              Price Range
            </li>
            {activeFilter === "Price Range" && (
              <div style={{ padding: "0 0 16px 32px" }}>
                <select 
                  className={styles.filterSelect}
                  value={selectedPriceRange.label}
                  onChange={(e) => setSelectedPriceRange(PRICE_RANGES.find(r => r.label === e.target.value))}
                >
                  {PRICE_RANGES.map(range => <option key={range.label} value={range.label}>{range.label}</option>)}
                </select>
              </div>
            )}

            {/* Amenities */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Amenities" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Amenities")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h5"></path><path d="M17 12h5"></path><path d="M12 2v5"></path><path d="M12 17v5"></path><path d="M4.93 4.93l3.54 3.54"></path><path d="M15.53 15.53l3.54 3.54"></path><path d="M4.93 19.07l3.54-3.54"></path><path d="M15.53 8.47l3.54-3.54"></path></svg>
              </span>
              Amenities
            </li>
            {activeFilter === "Amenities" && (
              <div style={{ padding: "0 0 16px 32px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {allAmenities.map(amenity => (
                  <label key={amenity} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", cursor: "pointer" }}>
                    <input 
                      type="checkbox" 
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            )}

            {/* Status */}
            <li 
              className={`${styles.filterItem} ${activeFilter === "Status" ? styles.filterItemActive : ""}`}
              onClick={() => setActiveFilter("Status")}
            >
              <span className={styles.filterIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </span>
              Status
            </li>
            {activeFilter === "Status" && (
              <div style={{ padding: "0 0 16px 32px" }}>
                <select 
                  className={styles.filterSelect}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}
          </ul>
          <button 
            className={styles.applyFiltersBtn}
            onClick={() => {
              setSearchQuery("");
              setSelectedType("All");
              setSelectedLocation("All");
              setSelectedBeds("All");
              setSelectedStatus("All");
              setSelectedPriceRange(PRICE_RANGES[0]);
              setSelectedAmenities([]);
            }}
          >
            Clear Filters
          </button>
        </aside>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.contentHeader}>
            <div className={styles.headerTitle}>
              <h1>My Portfolio: Saved Properties</h1>
              <p>{filteredProperties.length} EXCLUSIVE ITEMS SAVED</p>
            </div>
            <div className={styles.headerActions}>
              <button className={styles.actionBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                Share Collection
              </button>
              <button className={`${styles.actionBtn} ${styles.actionBtnGold}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>
                Compare Selected (3)
              </button>
            </div>
          </div>

          {/* Property Grid */}
          <div className={styles.propertyGrid}>
            {filteredProperties.map((property) => (
              <div key={property.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={property.image} 
                    alt={property.title} 
                    fill 
                    className={styles.cardImage} 
                  />
                  <div className={styles.checkbox}>
                    {property.checked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </div>
                  <div className={styles.roiBadge}>{property.roi} ROI ESTIMATE</div>
                  <div className={styles.locationTag}>{property.location.toUpperCase()}</div>
                  <div className={styles.cardTitle}>{property.title}</div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.priceRow}>
                    <div>
                      <div className={styles.priceLabel}>AED</div>
                      <div className={styles.priceValue}>{property.price.toLocaleString()}</div>
                    </div>
                    <div className={styles.bedsInfo}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                      {property.beds} Beds
                    </div>
                  </div>

                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <span>SQUARE FOOTAGE</span>
                      <span>{property.sqft} sq.ft.</span>
                    </div>
                    <div className={styles.statItem}>
                      <span>STATUS</span>
                      <span className={styles.statusHighlight}>{property.status}</span>
                    </div>
                  </div>

                  {property.note ? (
                    <div className={styles.investorNote}>
                      <div className={styles.noteHeader}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                        INVESTOR NOTE
                      </div>
                      <p className={styles.noteText}>"{property.note}"</p>
                    </div>
                  ) : (
                    <button className={styles.addNoteBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      ADD INVESTOR NOTE
                    </button>
                  )}

                  <div className={styles.cardActions}>
                    <button className={styles.quickContactBtn}>Quick Contact</button>
                    <button className={styles.iconBtn}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                    <button className={styles.iconBtn}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
