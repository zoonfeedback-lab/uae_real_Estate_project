import Image from "next/image";
import Link from "next/link";
import styles from "./agent.module.css";

const navItems = [
  ["dashboard", "Dashboard"],
  ["user", "Leads (CRM)"],
  ["home", "Listings"],
  ["calendar", "Appointments"],
  ["message", "Messages"],
  ["wallet", "Revenue"],
  ["trend", "Analytics"],
];

const metrics = [
  ["Total Leads", "142", "users"],
  ["Active Listings", "24", "building"],
  ["Conversion Rate", "18.5%", "trend"],
  ["Avg Response", "12m", "timer"],
];

const pipeline = [
  {
    title: "New Inquiries",
    count: "08",
    cards: [
      ["John Smith", "The Royal Penthouse, Palm", "High Priority", "red"],
      ["Sarah Al-Zayani", "Marina Gate Mansion", "Medium", "muted"],
    ],
  },
  {
    title: "Qualified",
    count: "05",
    cards: [["Dimitri Volkov", "One Za'abeel Sky Villa", "Exclusive", "gold"]],
  },
  {
    title: "Viewings",
    count: "03",
    cards: [],
  },
  {
    title: "Closing",
    count: "02",
    cards: [["Amira Al-Maktoum", "Jumeirah Bay Island Plot", "Contract Stage", "blue"]],
  },
];

const leads = [
  ["JS", "John Smith", "john@investments.com", "Qualified", "WhatsApp", "2 hours ago"],
  ["MA", "Marco Rossi", "marco.r@luxuryestate.it", "Viewing", "Web Portal", "1 day ago"],
  ["HE", "Helena E.", "helena@globalfunds.de", "Negotiation", "Referral", "4 hours ago"],
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
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    home: (
      <>
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
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
    message: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    wallet: (
      <>
        <path d="M20 7H5a2 2 0 0 0 0 4h15v8H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h13v4" />
        <path d="M16 13h2" />
      </>
    ),
    trend: (
      <>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    building: (
      <>
        <path d="M5 21V4h10v17" />
        <path d="M15 9h4v12" />
        <path d="M8 8h1" />
        <path d="M11 8h1" />
        <path d="M8 12h1" />
        <path d="M11 12h1" />
        <path d="M3 21h18" />
      </>
    ),
    timer: (
      <>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v5l3 2" />
        <path d="M9 2h6" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
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
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    upload: (
      <>
        <path d="M16 16 12 12 8 16" />
        <path d="M12 12v9" />
        <path d="M20.4 16.5A5 5 0 0 0 18 7h-1.3A8 8 0 1 0 4 15.3" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function MetricCard({ label, value, icon }) {
  return (
    <article className={styles.metricCard}>
      <div>
        <span>{label}</span>
        <Icon name={icon} />
      </div>
      <strong>{value}</strong>
      <div className={styles.miniBars}>
        <i />
        <i />
        <i />
        <i />
      </div>
    </article>
  );
}

export default function AgentDashboardPage() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.logo}>LUXE REALTY</Link>

        <div className={styles.memberCard}>
          <div className={styles.avatar}>
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&q=80" alt="Khalid Al-Mansouri" fill sizes="40px" />
          </div>
          <div>
            <span>Premium Member</span>
            <strong>Khalid Al-Mansouri</strong>
          </div>
        </div>

        <nav className={styles.sideNav} aria-label="Agent navigation">
          {navItems.map(([icon, label], index) => (
            <Link href="/agent" className={index === 0 ? styles.activeNav : ""} key={label}>
              <Icon name={icon} />
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.sideFooter}>
          <Link href="/agent"><Icon name="settings" />Settings</Link>
          <Link href="/agent"><Icon name="help" />Support</Link>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.topbar}>
          <h1>Welcome back, Agent Ahmed</h1>
          <div>
            <Link href="/property" className={styles.listButton}><Icon name="plus" />List Property</Link>
            <button aria-label="Notifications"><Icon name="bell" /></button>
            <button aria-label="Account"><Icon name="user" /></button>
          </div>
        </header>

        <div className={styles.inner}>
          <section className={styles.metrics} aria-label="Agent metrics">
            {metrics.map(([label, value, icon]) => (
              <MetricCard key={label} label={label} value={value} icon={icon} />
            ))}
          </section>

          <section className={styles.performanceGrid}>
            <article className={styles.revenuePanel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>Annual Revenue Performance</span>
                  <h2>AED 25,000,000 <small>YTD</small></h2>
                </div>
                <div className={styles.periodToggle}>
                  <button>Monthly</button>
                  <button>Quarterly</button>
                </div>
              </div>
              <div className={styles.chart}>
                <svg viewBox="0 0 620 260" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="agentGoldFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f5c948" stopOpacity="0.36" />
                      <stop offset="100%" stopColor="#f5c948" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className={styles.area} d="M0 190 C85 175 130 132 205 126 C285 120 300 178 375 166 C455 154 450 72 545 62 C585 58 600 82 620 102 L620 260 L0 260 Z" />
                  <path className={styles.line} d="M0 190 C85 175 130 132 205 126 C285 120 300 178 375 166 C455 154 450 72 545 62 C585 58 600 82 620 102" />
                  <circle cx="155" cy="144" r="4" />
                  <circle cx="315" cy="154" r="4" />
                  <circle cx="465" cy="91" r="4" />
                  <circle cx="620" cy="102" r="4" />
                </svg>
                <div className={styles.months}>
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>
            </article>

            <aside className={styles.toolsPanel}>
              <h2>Active Property Tools</h2>
              <div className={styles.dropZone}>
                <Icon name="upload" />
                <span>Drop property media here</span>
              </div>
              <div className={styles.mapImage}>
                <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80" alt="Palm Jumeirah map" fill sizes="280px" />
              </div>
              <div className={styles.checklist}>
                <span>Premium Amenities Checklist</span>
                <button>Infinity Pool</button>
                <button>Private Gym</button>
                <button className={styles.checked}>Concierge</button>
              </div>
            </aside>
          </section>

          <section className={styles.pipelineSection}>
            <div className={styles.sectionHeader}>
              <h2>CRM Sales Pipeline</h2>
              <Link href="/agent">View Full CRM</Link>
            </div>
            <div className={styles.pipeline}>
              {pipeline.map((column) => (
                <article className={styles.pipelineColumn} key={column.title}>
                  <header>
                    <span>{column.title}</span>
                    <small>{column.count}</small>
                  </header>
                  {column.cards.length ? (
                    column.cards.map(([name, property, tag, tone]) => (
                      <div className={`${styles.leadCard} ${styles[tone]}`} key={name}>
                        <strong>{tag}</strong>
                        <h3>{name}</h3>
                        <p>{property}</p>
                      </div>
                    ))
                  ) : (
                    <div className={styles.emptyColumn}>Drag leads here...</div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className={styles.leadsPanel}>
            <div className={styles.leadsHeader}>
              <h2>Recent Leads</h2>
              <label>
                <Icon name="search" />
                <input placeholder="Search leads..." />
              </label>
            </div>
            <div className={styles.table}>
              <div className={styles.tableHead}>
                <span>Client Name</span>
                <span>Status</span>
                <span>Source</span>
                <span>Last Contact</span>
                <span>Actions</span>
              </div>
              {leads.map(([initials, name, email, status, source, contact]) => (
                <div className={styles.tableRow} key={email}>
                  <div className={styles.clientCell}>
                    <span>{initials}</span>
                    <div>
                      <strong>{name}</strong>
                      <small>{email}</small>
                    </div>
                  </div>
                  <span className={styles.status}>{status}</span>
                  <span>{source}</span>
                  <span>{contact}</span>
                  <span className={styles.actions}>
                    <button aria-label={`Call ${name}`}><Icon name="phone" /></button>
                    <button aria-label={`Email ${name}`}><Icon name="mail" /></button>
                  </span>
                </div>
              ))}
            </div>
            <footer>
              <span>Showing 3 of 142 leads</span>
              <div>
                <button>Prev</button>
                <button>Next</button>
              </div>
            </footer>
          </section>
        </div>
      </section>
    </main>
  );
}
