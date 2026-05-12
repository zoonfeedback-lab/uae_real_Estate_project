import Image from "next/image";
import styles from "./ExclusiveTerritories.module.css";
import SectionHeading from "../ui/SectionHeading";
import { TERRITORIES } from "@/data/siteData";

export default function ExclusiveTerritories() {
  return (
    <section className="section section--darker" id="territories">
      <div className="container">
        <SectionHeading
          label="Prime Locations"
          title="Exclusive Territories"
          subtitle="Explore the most sought-after neighborhoods where prestige meets unparalleled lifestyle."
        />
        <div className={styles.grid}>
          {TERRITORIES.map((territory, index) => (
            <a
              key={territory.id}
              href="#"
              className={`${styles.card} ${index === 0 ? styles.cardLarge : ""}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={territory.image}
                  alt={territory.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <span className={styles.count}>
                  {territory.properties} Properties
                </span>
                <h3 className={styles.name}>{territory.name}</h3>
                <p className={styles.desc}>{territory.description}</p>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
