"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./property.module.css";

const properties = [
  {
    title: "Villa Luminaire",
    location: "Palm Jumeirah",
    price: "AED 42.5M",
    beds: 6,
    baths: 8,
    transaction: "Buy",
    type: "Penthouse",
    amenities: ["Private Pool", "Sea View", "Smart Home"],
    priceValue: 42.5,
    tag: "Exclusive",
    status: "Verified",
    agent: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
  },
  {
    title: "Skyline Majesty",
    location: "Business Bay",
    price: "AED 18.9M",
    beds: 4,
    baths: 5,
    transaction: "Buy",
    type: "Penthouse",
    amenities: ["Sea View", "Smart Home"],
    priceValue: 18.9,
    tag: "New Launch",
    status: "Verified",
    agent: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80",
  },
  {
    title: "Marina Heights",
    location: "Dubai Marina",
    price: "Contact for Price",
    beds: null,
    baths: null,
    transaction: "Rent",
    type: "Luxury Villa",
    amenities: ["Private Pool"],
    priceValue: 85,
    tag: "Coming Soon",
    status: "",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&q=80",
  },
];

const amenityOptions = ["Private Pool", "Sea View", "Smart Home"];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 11V5h6a3 3 0 0 1 3 3v3" />
      <path d="M3 18v-6h18a2 2 0 0 1 2 2v4" />
      <path d="M3 18h20" />
      <path d="M7 18v2" />
      <path d="M20 18v2" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10V6a3 3 0 0 1 6 0" />
      <path d="M5 10h16v4a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-4Z" />
      <path d="M8 19v2" />
      <path d="M18 19v2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V4h10v17" />
      <path d="M15 9h4v12" />
      <path d="M8 8h1" />
      <path d="M11 8h1" />
      <path d="M8 12h1" />
      <path d="M11 12h1" />
      <path d="M8 16h1" />
      <path d="M11 16h1" />
      <path d="M3 21h18" />
    </svg>
  );
}

function VillaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21V10l9-7 9 7v11" />
      <path d="M7 21v-8h10v8" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h6v6H4z" />
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6H4z" />
      <path d="M14 14h6v6h-6z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h1" />
      <path d="M3 12h1" />
      <path d="M3 18h1" />
    </svg>
  );
}

function PropertyCard({ property, muted }) {
  return (
    <article className={`${styles.card} ${muted ? styles.cardMuted : ""}`}>
      <div className={styles.cardImage}>
        <Image src={property.image} alt={property.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
        <div className={styles.cardShade} />
        <div className={styles.badges}>
          <span className={styles.badge}>{property.tag}</span>
          {property.status ? <span className={styles.verify}>{property.status}</span> : null}
        </div>
        <button className={styles.favorite} aria-label={`Save ${property.title}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.7 8.8-8.7a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
        <div className={styles.cardTitleBlock}>
          <h2>{property.title}</h2>
          <p>
            <MapPinIcon />
            {property.location}
          </p>
        </div>
        {property.agent ? (
          <div className={styles.agent}>
            <Image src={property.agent} alt="" fill sizes="48px" />
          </div>
        ) : null}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.priceRow}>
          <strong>{property.price}</strong>
          {property.beds ? (
            <span className={styles.facts}>
              <BedIcon /> {property.beds}
              <BathIcon /> {property.baths}
            </span>
          ) : null}
        </div>
        <div className={styles.cardActions}>
          <button>Details</button>
          {property.beds ? <button className={styles.primaryAction}>Inquire</button> : <button>Register Interest</button>}
        </div>
      </div>
    </article>
  );
}

export default function PropertyPage() {
  const [transaction, setTransaction] = useState("Buy");
  const [locationQuery, setLocationQuery] = useState("");
  const [propertyType, setPropertyType] = useState("Penthouse");
  const [amenities, setAmenities] = useState(["Private Pool"]);
  const [priceRange, setPriceRange] = useState([15, 45]);
  const [sortOrder, setSortOrder] = useState("high");

  const filteredProperties = useMemo(() => {
    return properties
      .filter((property) => property.transaction === transaction)
      .filter((property) => property.type === propertyType)
      .filter((property) => {
        const query = locationQuery.trim().toLowerCase();
        return !query || property.location.toLowerCase().includes(query) || property.title.toLowerCase().includes(query);
      })
      .filter((property) => property.priceValue >= priceRange[0] && property.priceValue <= priceRange[1])
      .filter((property) => amenities.every((amenity) => property.amenities.includes(amenity)))
      .sort((a, b) => (sortOrder === "high" ? b.priceValue - a.priceValue : a.priceValue - b.priceValue));
  }, [transaction, locationQuery, propertyType, amenities, priceRange, sortOrder]);

  const toggleAmenity = (amenity) => {
    setAmenities((current) =>
      current.includes(amenity) ? current.filter((item) => item !== amenity) : [...current, amenity]
    );
  };

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.logo}>LUXE ESTATE</Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link className={styles.active} href="/property">Properties</Link>
          <Link href="/">Insights</Link>
          <Link href="/">Concierge</Link>
          <Link href="/">Management</Link>
        </nav>
        <div className={styles.headerActions}>
          <label className={styles.search}>
            <SearchIcon />
            <input
              placeholder="Search locations.."
              value={locationQuery}
              onChange={(event) => setLocationQuery(event.target.value)}
            />
          </label>
          <Link href="/" className={styles.signIn}>Sign In</Link>
          <Link href="/" className={styles.listButton}>List Property</Link>
        </div>
      </header>

      <div className={styles.shell}>
        <aside className={styles.filters}>
          <div className={styles.filterHeader}>
            <strong>Filters</strong>
            <span>Refine Your Selection</span>
          </div>

          <section className={styles.filterBlock}>
            <h3>Transaction</h3>
            <div className={styles.segmented}>
              <button
                className={transaction === "Buy" ? styles.selected : ""}
                onClick={() => setTransaction("Buy")}
                type="button"
              >
                Buy
              </button>
              <button
                className={transaction === "Rent" ? styles.selected : ""}
                onClick={() => setTransaction("Rent")}
                type="button"
              >
                Rent
              </button>
            </div>
          </section>

          <section className={styles.filterBlock}>
            <h3>Location</h3>
            <div className={styles.locationInput}>
              <MapPinIcon />
              <input
                placeholder="Dubai Marina, Palm..."
                value={locationQuery}
                onChange={(event) => setLocationQuery(event.target.value)}
              />
            </div>
          </section>

          <section className={styles.filterBlock}>
            <h3>Property Type</h3>
            <button
              className={`${styles.typeOption} ${propertyType === "Penthouse" ? styles.typeSelected : ""}`}
              onClick={() => setPropertyType("Penthouse")}
              type="button"
            >
              <span className={styles.typeIcon}><BuildingIcon /></span>
              <span>Penthouse</span>
              <span className={styles.check}>{propertyType === "Penthouse" ? <CheckIcon /> : null}</span>
            </button>
            <button
              className={`${styles.typeOption} ${propertyType === "Luxury Villa" ? styles.typeSelected : ""}`}
              onClick={() => setPropertyType("Luxury Villa")}
              type="button"
            >
              <span className={styles.typeIcon}><VillaIcon /></span>
              <span>Luxury Villa</span>
              <span className={styles.check}>{propertyType === "Luxury Villa" ? <CheckIcon /> : null}</span>
            </button>
          </section>

          <section className={styles.filterBlock}>
            <h3>Price Range (AED)</h3>
            <div className={styles.range} style={{ "--range-start": `${((priceRange[0] - 15) / 70) * 100}%`, "--range-end": `${((priceRange[1] - 15) / 70) * 100}%` }}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.rangeControls}>
              <label>
                Min
                <select
                  value={priceRange[0]}
                  onChange={(event) => {
                    const nextMin = Number(event.target.value);
                    setPriceRange([nextMin, Math.max(nextMin, priceRange[1])]);
                  }}
                >
                  <option value="15">15M</option>
                  <option value="20">20M</option>
                  <option value="30">30M</option>
                  <option value="45">45M</option>
                </select>
              </label>
              <label>
                Max
                <select
                  value={priceRange[1]}
                  onChange={(event) => {
                    const nextMax = Number(event.target.value);
                    setPriceRange([Math.min(priceRange[0], nextMax), nextMax]);
                  }}
                >
                  <option value="20">20M</option>
                  <option value="45">45M</option>
                  <option value="60">60M</option>
                  <option value="85">85M</option>
                </select>
              </label>
            </div>
            <div className={styles.rangeLabels}>
              <span>{priceRange[0]}M</span>
              <span>{priceRange[1]}M</span>
            </div>
          </section>

          <section className={styles.filterBlock}>
            <h3>Amenities</h3>
            {amenityOptions.map((amenity) => (
              <label className={styles.checkbox} key={amenity}>
                <input
                  type="checkbox"
                  checked={amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                />
                <span />
                {amenity}
              </label>
            ))}
          </section>

          <button
            className={styles.apply}
            onClick={() => {
              setTransaction("Buy");
              setLocationQuery("");
              setPropertyType("Penthouse");
              setAmenities(["Private Pool"]);
              setPriceRange([15, 45]);
              setSortOrder("high");
            }}
            type="button"
          >
            Reset Filters
          </button>
        </aside>

        <section className={styles.results}>
          <div className={styles.mapPanel}>
            <div className={styles.mapGrid} />
            <button className={styles.nearby}>
              <span><SearchIcon /></span>
              Show Nearby Properties
            </button>
            <span className={`${styles.mapMarker} ${styles.cluster}`}>12</span>
            <span className={`${styles.priceMarker} ${styles.priceOne}`}>AED 24M <i /></span>
            <span className={`${styles.priceMarker} ${styles.priceTwo}`}>AED 85M <i /></span>
            <div className={styles.mapTools} aria-label="Map tools">
              <button aria-label="Zoom in">+</button>
              <button aria-label="Zoom out">-</button>
              <button aria-label="Layers">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m12 3 9 6-9 6-9-6 9-6Z" />
                  <path d="m3 15 9 6 9-6" />
                  <path d="m3 11 9 6 9-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.listingHeader}>
            <div>
              <h1>Luxury Properties in Dubai</h1>
              <p>Showing {filteredProperties.length} exclusive listing{filteredProperties.length === 1 ? "" : "s"}</p>
            </div>
            <div className={styles.viewControls}>
              <div className={styles.toggle} aria-label="View layout">
                <button className={styles.toggleActive} aria-label="Grid view"><GridIcon /></button>
                <button aria-label="List view"><ListIcon /></button>
              </div>
              <button
                className={styles.sort}
                onClick={() => setSortOrder((current) => (current === "high" ? "low" : "high"))}
                type="button"
              >
                Sort: {sortOrder === "high" ? "Price High to Low" : "Price Low to High"}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.cards}>
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.title} property={property} muted={index === 2} />
            ))}
            {!filteredProperties.length ? (
              <div className={styles.emptyState}>
                <h2>No matching properties</h2>
                <p>Adjust the location, amenities, price, or property type to broaden the selection.</p>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
