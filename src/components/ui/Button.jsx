"use client";

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
      <a href={href} className={classes} {...props}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
