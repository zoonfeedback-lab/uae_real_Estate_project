"use client";

import styles from "./StatItem.module.css";

/**
 * Reusable stat counter display item.
 */
export default function StatItem({ value, label }) {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
