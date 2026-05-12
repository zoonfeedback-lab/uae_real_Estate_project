import Image from "next/image";
import styles from "./MarketIntelligence.module.css";
import SectionHeading from "../ui/SectionHeading";
import { MARKET_INSIGHTS } from "@/data/siteData";

export default function MarketIntelligence() {
  return (
    <section className="section section--darker" id="market">
      <div className="container">
        <SectionHeading
          label="Data-Driven Decisions"
          title="Market Intelligence"
          subtitle="Stay ahead with real-time analytics and comprehensive market reports across key UAE territories."
          align="center"
        />
        <div className={styles.grid}>
          {MARKET_INSIGHTS.map((insight) => (
            <div key={insight.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{insight.title}</h3>
                  <span
                    className={`${styles.change} ${
                      insight.trend === "up" ? styles.changeUp : styles.changeDown
                    }`}
                  >
                    {insight.change}
                  </span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Avg. Price</span>
                  <span className={styles.priceValue}>{insight.avgPrice}</span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${parseFloat(insight.change)}0%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
