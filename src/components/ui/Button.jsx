"use client";

import Link from "next/link";
import styles from "./Button.module.css";

/**
 * Reusable Button component with multiple variants.
 * @param {"primary" | "secondary" | "outline" | "ghost"} variant
 * @param {"sm" | "md" | "lg"} size
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  className = "",
  ...props
}) {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
