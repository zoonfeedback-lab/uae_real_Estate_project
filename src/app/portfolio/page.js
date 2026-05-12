import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const navItems = [
  ["dashboard", "Dashboard", "/portfolio"],
  ["heart", "Favorites", "/favourites"],
  ["search", "Saved Searches", "/portfolio"],
  ["calendar", "Scheduled Visits", "/portfolio"],
  ["bank", "Mortgage Requests", "/portfolio"],
  ["message", "Messages", "/portfolio"],
];

const inquiries = [
  ["Skyline Penthouse", "Dubai Marina", "Elena Vance", "Agent Responded", "gold"],
  ["Palm Jumeirah Villa", "Frond J", "Omar Sharif", "Viewing Scheduled", "blue"],
  ["Downtown Loft", "Burj Vista", "Sarah Chen", "Offer Pending", "muted"],
];

const curated = [
  {
    title: "The Crystal Mansion",
    location: "Emirates Hills, Dubai",
    price: "AED 18,500,000",
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
  },
  {
    title: "Observation Loft",
    location: "Palm Jumeirah, Dubai",
    price: "AED 9,200,000",
    tag: "New Launch",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
  },
  {
    title: "Sunset Sanctuary",
    location: "Jumeirah Golf Estates",
    price: "AED 24,000,000",
    tag: "",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
];

const recent = [
  ["The Pearl Suite", "Downtown Dubai", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&q=80"],
  ["Azure Residence", "Blue Waters Island", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80"],
  ["The Oasis Villa", "Arabian Ranches", "https://images.unsplash.com/photo-1615873968403-89e068629265?w=200&q=80"],
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
    message: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
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
    wallet: (
      <>
        <path d="M20 7H5a2 2 0 0 0 0 4h15v8H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h13v4" />
        <path d="M16 13h2" />
      </>
    ),
    arrowRight: <path d="m9 18 6-6-6-6" />,
    arrowLeft: <path d="m15 18-6-6 6-6" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function MetricCard({ label, value, detail, type }) {
  return (
    <article className={`${styles.metricCard} ${type === "portfolio" ? styles.portfolioMetric : ""}`}>
      <div className={styles.metricTop}>
        <span>{label}</span>
        {type === "portfolio" ? <Icon name="wallet" /> : type === "visits" ? <Icon name="calendar" /> : <Icon name="dashboard" />}
      </div>
      <strong>{value}</strong>
      {type === "chart" ? (
        <div className={styles.sparkline}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <p>{detail}</p>
      )}
    </article>
  );
}

export default function PortfolioPage() {
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
          {navItems.map(([icon, label, href], index) => (
            <Link href={href} className={index === 0 ? styles.activeNav : ""} key={label}>
              <Icon name={icon} />
              {label}
            </Link>
          ))}
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
            <Link href="/portfolio">Market Insights</Link>
            <Link href="/portfolio">New Launches</Link>
          </nav>
          <div className={styles.topActions}>
            <label className={styles.searchBox}>
              <input placeholder="Search Listings..." />
              <Icon name="search" />
            </label>
            <button aria-label="Notifications"><Icon name="bell" /></button>
            <button aria-label="Account"><Icon name="user" /></button>
            <Link href="/property" className={styles.listButton}>List Property</Link>
          </div>
        </header>

        <div className={styles.inner}>
          <section className={styles.hero}>
            <h1>Marhaba, Khalid Al-Mansouri</h1>
            <p>Welcome back to your private portfolio. The Dubai luxury market has seen a 4.2% uptick in your preferred sectors this week.</p>
          </section>

          <section className={styles.metrics} aria-label="Portfolio metrics">
            <MetricCard label="Active Inquiries" value="12" detail="" />
            <MetricCard label="Saved Properties" value="28" type="chart" />
            <MetricCard label="Scheduled Visits" value="4" detail="Next: Tomorrow, 14:00" type="visits" />
            <MetricCard label="Estimated Portfolio" value="AED 42.5M" detail="+1.8% this month" type="portfolio" />
          </section>

          <section className={styles.midGrid}>
            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>Recent Inquiries</h2>
                <Link href="/portfolio">View All</Link>
              </div>
              <div className={styles.table}>
                <div className={styles.tableHead}>
                  <span>Property</span>
                  <span>Agent</span>
                  <span>Status</span>
                  <span>Action</span>
                </div>
                {inquiries.map(([property, location, agent, status, tone]) => (
                  <div className={styles.tableRow} key={property}>
                    <div>
                      <strong>{property}</strong>
                      <small>{location}</small>
                    </div>
                    <span>{agent}</span>
                    <span className={`${styles.status} ${styles[tone]}`}>{status}</span>
                    <button aria-label={`Open ${property}`}><Icon name="arrowRight" /></button>
                  </div>
                ))}
              </div>
            </article>

            <article className={`${styles.panel} ${styles.marketPanel}`}>
              <h2>Market Insights</h2>
              <p>Dubai Real Estate ROI Index (24h)</p>
              <div className={styles.barChart}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <dl className={styles.marketStats}>
                <div>
                  <dt>Avg. Rental Yield</dt>
                  <dd>7.2%</dd>
                </div>
                <div>
                  <dt>Annual Appreciation</dt>
                  <dd>+12.4%</dd>
                </div>
              </dl>
              <button>Detailed Analysis</button>
            </article>
          </section>

          <section className={styles.curatedSection}>
            <div className={styles.sectionTitle}>
              <div>
                <h2>Curated For You</h2>
                <p>Based on your interest in Waterfront Properties</p>
              </div>
              <div className={styles.floatControls}>
                <button aria-label="Add property"><Icon name="plus" /></button>
                <span>
                  <button aria-label="Previous"><Icon name="arrowLeft" /></button>
                  <button aria-label="Next"><Icon name="arrowRight" /></button>
                </span>
              </div>
            </div>

            <div className={styles.curatedGrid}>
              {curated.map((item) => (
                <article className={styles.curatedCard} key={item.title}>
                  <div className={styles.curatedImage}>
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                    {item.tag ? <span>{item.tag}</span> : null}
                    <strong>{item.price}</strong>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.recentSection}>
            <h2>Recently Viewed</h2>
            <div className={styles.recentGrid}>
              {recent.map(([title, location, image]) => (
                <article className={styles.recentCard} key={title}>
                  <div>
                    <Image src={image} alt="" fill sizes="54px" />
                  </div>
                  <span>
                    <strong>{title}</strong>
                    <small>{location}</small>
                  </span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
