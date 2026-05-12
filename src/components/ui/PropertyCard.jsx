"use client";

import Image from "next/image";
import styles from "./PropertyCard.module.css";
import Button from "./Button";

/**
 * Reusable property card for residences and off-plan projects.
 * @param {"default" | "offplan"} variant
 */
export default function PropertyCard({ property, variant = "default" }) {
  if (variant === "offplan") {
    return (
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
          <div className={styles.overlay} />
          <span className={`${styles.tag} ${styles["tag--gold"]}`}>
            ROI {property.roi}
          </span>
        </div>
        <div className={styles.content}>
          <span className={styles.developer}>{property.developer}</span>
          <h3 className={styles.title}>{property.title}</h3>
          <div className={styles.meta}>
            <span className={styles.metaItem}>🏗 {property.completion}</span>
            <span className={styles.metaItem}>From {property.startPrice}</span>
          </div>
          <Button variant="outline" size="sm" className={styles.cardBtn}>
            View Project →
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
        {property.tag && <span className={styles.tag}>{property.tag}</span>}
      </div>
      <div className={styles.content}>
        <span className={styles.location}>{property.location}</span>
        <h3 className={styles.title}>{property.title}</h3>
        <div className={styles.details}>
          <span>{property.beds} Beds</span>
          <span className={styles.dot}>·</span>
          <span>{property.baths} Baths</span>
          <span className={styles.dot}>·</span>
          <span>{property.area}</span>
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>{property.price}</span>
          <Button variant="ghost" size="sm" href="/property">
            Details →
          </Button>
        </div>
      </div>
    </article>
  );
}
