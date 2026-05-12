import styles from "./MarketPalm.module.css";
import Button from "../ui/Button";

export default function MarketPalm() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <span className={styles.label}>Mobile Experience</span>
          <h2 className={styles.title}>
            The Market in the Palm of Your Hand
          </h2>
          <p className={styles.subtitle}>
            Track real-time market data, receive instant property alerts, and
            manage your portfolio — all from our award-winning mobile app.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>📊</span>
              <div>
                <h4 className={styles.featureTitle}>Live Analytics</h4>
                <p className={styles.featureDesc}>Real-time market insights and trend analysis</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🔔</span>
              <div>
                <h4 className={styles.featureTitle}>Smart Alerts</h4>
                <p className={styles.featureDesc}>Personalized notifications for matching properties</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🏠</span>
              <div>
                <h4 className={styles.featureTitle}>Virtual Tours</h4>
                <p className={styles.featureDesc}>Immersive 3D property walkthroughs</p>
              </div>
            </div>
          </div>
          <Button variant="primary" size="lg" icon="→">
            Download App
          </Button>
        </div>
        <div className={styles.phoneWrapper}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneHeader}>
                <span className={styles.phoneHeaderDot} />
                <span className={styles.phoneHeaderTitle}>LuxEstate</span>
                <span className={styles.phoneHeaderDot} />
              </div>
              <div className={styles.phoneContent}>
                <div className={styles.phoneCard}>
                  <div className={styles.phoneCardLabel}>Portfolio Value</div>
                  <div className={styles.phoneCardValue}>AED 48.2M</div>
                  <div className={styles.phoneCardChange}>+12.4% ↑</div>
                </div>
                <div className={styles.phoneCard}>
                  <div className={styles.phoneCardLabel}>Active Listings</div>
                  <div className={styles.phoneCardValue}>3 Properties</div>
                </div>
                <div className={styles.phoneCard}>
                  <div className={styles.phoneCardLabel}>Market Index</div>
                  <div className={styles.phoneCardValue}>1,847</div>
                  <div className={styles.phoneCardChange}>+2.1% ↑</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.glow} />
        </div>
      </div>
    </section>
  );
}
