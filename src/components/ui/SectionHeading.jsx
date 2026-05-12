"use client";

import styles from "./SectionHeading.module.css";

/**
 * Reusable section heading with optional label, title, and subtitle.
 * @param {"left" | "center"} align
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}) {
  return (
    <div
      className={`${styles.heading} ${styles[`heading--${align}`]} ${
        light ? styles["heading--light"] : ""
      } ${className}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
