"use client";

import { useState } from "react";
import styles from "./ArchitectureLifestyle.module.css";
import SectionHeading from "../ui/SectionHeading";
import { LIFESTYLE_FILTERS } from "@/data/siteData";

export default function ArchitectureLifestyle() {
  const [active, setActive] = useState("Contemporary");

  return (
    <section className="section section--darker">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <SectionHeading
              label="Personalized Search"
              title="Find Your Match by Architecture & Lifestyle"
              subtitle="Filter properties by your preferred architectural style and find the home that truly reflects your identity."
            />
            <div className={styles.filters}>
              {LIFESTYLE_FILTERS.map((filter) => (
                <button
                  key={filter.label}
                  className={`${styles.filterBtn} ${
                    active === filter.label ? styles.filterBtnActive : ""
                  }`}
                  onClick={() => setActive(filter.label)}
                >
                  <span className={styles.filterIcon}>{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.preview}>
              <div className={styles.previewInner}>
                <div className={styles.previewLabel}>
                  Selected Style
                </div>
                <h3 className={styles.previewTitle}>{active}</h3>
                <p className={styles.previewDesc}>
                  Browse our curated selection of {active.toLowerCase()} properties
                  designed by award-winning architects across the UAE.
                </p>
                <div className={styles.previewStats}>
                  <div className={styles.previewStat}>
                    <span className={styles.previewStatValue}>48</span>
                    <span className={styles.previewStatLabel}>Properties</span>
                  </div>
                  <div className={styles.previewStat}>
                    <span className={styles.previewStatValue}>12</span>
                    <span className={styles.previewStatLabel}>Communities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
