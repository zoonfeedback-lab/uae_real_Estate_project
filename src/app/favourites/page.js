import Image from "next/image";
import Link from "next/link";
import styles from "./favourites.module.css";

const savedProperties = [
  {
    title: "The Royal Penthouse",
    location: "Downtown Dubai",
    price: "AED 24,500,000",
    beds: 5,
    area: "8,450 sq.ft.",
    status: "Off-Plan Exclusive",
    roi: "7.8%",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    note: "High capital appreciation potential due to upcoming metro expansion nearby. High floor priority requested.",
    selected: true,
  },
  {
    title: "Azure Waterfront Villa",
    location: "Palm Jumeirah",
    price: "AED 45,000,000",
    beds: 6,
    area: "12,200 sq.ft.",
    status: "Ready to Move",
    roi: "6.5%",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    note: "Secondary market opportunity. Private beach access is a strong rental advantage.",
    selected: false,
  },
  {
    title: "Hillside Estate",
    location: "Emirates Hills",
    price: "AED 118,000,000",
    beds: 8,
    area: "24,000 sq.ft.",
    status: "Limited Collection",
    roi: "8.2%",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    note: "Asset preservation strategy. Area sales are up 15% year over year.",
    selected: true,
  },
  {
    title: "Five Luxe Residence",
    location: "JBR",
    price: "AED 12,250,000",
    beds: 3,
    area: "3,200 sq.ft.",
    status: "Sold Out",
    roi: "5.9%",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    note: "",
    selected: false,
  },
];

function Icon({ name }) {
  const icons = {
    dashboard: (
      <>
        <path d="M4 4h6v6H4z" />
        <path d="M14 4h6v6h-6z" />
        <path d="M4 14h6v6H4z" />
        <path d="M14 14h6v6h-6z" />
      </>
    ),
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.7 8.8-8.7a5.5 5.5 0 0 0 0-7.8Z" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    calendar: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
        <rect x="3" y="5" width="18" height="16" rx="2" />
      </>
    ),
    bank: (
      <>
        <path d="M3 10h18" />
        <path d="M5 10v9" />
        <path d="M9 10v9" />
        <path d="M15 10v9" />
        <path d="M19 10v9" />
        <path d="M2 19h20" />
        <path d="M12 3 3 8h18z" />
      </>
    ),
    message: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 .9-1.6V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6.9h.1a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.7.9Z" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.5 9a2.7 2.7 0 1 1 4.7 1.8c-.8.7-1.2 1.1-1.2 2.2" />
        <path d="M12 17h.01" />
      </>
    ),
    bed: (
      <>
        <path d="M4 11V5h6a3 3 0 0 1 3 3v3" />
        <path d="M3 18v-6h18a2 2 0 0 1 2 2v4" />
        <path d="M3 18h20" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4" />
        <path d="m15.4 6.5-6.8 4" />
      </>
    ),
    trash: (
      <>
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export default function FavouritesPage() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.logo}>LUXE REALTY</Link>
        <div className={styles.memberCard}>
          <div className={styles.avatar}>
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&q=80" alt="Khalid Al-Mansouri" fill sizes="40px" />
          </div>
          <div>
            <strong>Khalid Al-Mansouri</strong>
            <span>Premium Member</span>
          </div>
        </div>

        <nav className={styles.sideNav} aria-label="Dashboard">
          <Link href="/portfolio"><Icon name="dashboard" />Dashboard</Link>
          <Link href="/favourites" className={styles.activeNav}><Icon name="heart" />Favorites</Link>
          <Link href="/portfolio"><Icon name="search" />Saved Searches</Link>
          <Link href="/portfolio"><Icon name="calendar" />Scheduled Visits</Link>
          <Link href="/portfolio"><Icon name="bank" />Mortgage Requests</Link>
          <Link href="/portfolio"><Icon name="message" />Messages</Link>
        </nav>

        <div className={styles.sideFooter}>
          <Link href="/portfolio"><Icon name="settings" />Settings</Link>
          <Link href="/portfolio"><Icon name="help" />Support</Link>
          <button>Book Concierge</button>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.topbar}>
          <nav>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/property">Browse Properties</Link>
          </nav>
          <Link href="/property" className={styles.listButton}>List Property</Link>
        </header>

        <div className={styles.inner}>
          <div className={styles.pageHeader}>
            <div>
              <p>Private Collection</p>
              <h1>Favorite Properties</h1>
              <span>{savedProperties.length} exclusive properties saved by Khalid Al-Mansouri</span>
            </div>
            <div className={styles.headerActions}>
              <button>Share Collection</button>
              <button>Compare Selected (2)</button>
            </div>
          </div>

          <div className={styles.filterBar}>
            <label>
              <Icon name="search" />
              <input placeholder="Search saved properties..." />
            </label>
            <button>All Locations</button>
            <button>Price High to Low</button>
          </div>

          <section className={styles.grid}>
            {savedProperties.map((property) => (
              <article className={styles.card} key={property.title}>
                <div className={styles.imageWrap}>
                  <Image src={property.image} alt={property.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
                  <span className={styles.checkMark}>{property.selected ? <Icon name="check" /> : null}</span>
                  <strong>{property.roi} ROI Estimate</strong>
                  <div>
                    <small>{property.location}</small>
                    <h2>{property.title}</h2>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.priceRow}>
                    <span>
                      <small>AED</small>
                      <strong>{property.price.replace("AED ", "")}</strong>
                    </span>
                    <span className={styles.beds}><Icon name="bed" />{property.beds} Beds</span>
                  </div>

                  <div className={styles.metaRow}>
                    <span>
                      <small>Square Footage</small>
                      <strong>{property.area}</strong>
                    </span>
                    <span>
                      <small>Status</small>
                      <strong>{property.status}</strong>
                    </span>
                  </div>

                  {property.note ? (
                    <div className={styles.note}>
                      <small>Investor Note</small>
                      <p>{property.note}</p>
                    </div>
                  ) : (
                    <button className={styles.addNote}>Add Investor Note</button>
                  )}

                  <div className={styles.cardActions}>
                    <button>Quick Contact</button>
                    <button aria-label={`Share ${property.title}`}><Icon name="share" /></button>
                    <button aria-label={`Remove ${property.title}`}><Icon name="trash" /></button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
