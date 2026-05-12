"use client";

import styles from "./TestimonialCard.module.css";

/**
 * Reusable testimonial card with rating, quote, and author info.
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <span key={i} className={styles.star}>★</span>
        ))}
      </div>
      <blockquote className={styles.quote}>"{testimonial.text}"</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className={styles.name}>{testimonial.name}</p>
          <p className={styles.role}>{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
