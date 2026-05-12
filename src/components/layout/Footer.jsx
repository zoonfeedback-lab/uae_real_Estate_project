import styles from "./Footer.module.css";
import { FOOTER_LINKS } from "@/data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoIcon}>◆</span>
              LUXESTATE
            </a>
            <p className={styles.tagline}>
              Defining luxury real estate across the United Arab Emirates with
              an uncompromising commitment to architectural excellence and
              investment performance.
            </p>
          </div>

          <div className={styles.columns}>
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className={styles.column}>
                <h4 className={styles.columnTitle}>{title}</h4>
                <ul className={styles.columnList}>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.columnLink}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} LuxEstate. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.social} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="#" className={styles.social} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className={styles.social} aria-label="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l16 16M20 4L4 20"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
