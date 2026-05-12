import styles from "./StatsBar.module.css";
import StatItem from "../ui/StatItem";
import { STATS } from "@/data/siteData";

export default function StatsBar() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        {STATS.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
