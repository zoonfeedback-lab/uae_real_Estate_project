import styles from "./EliteResidences.module.css";
import SectionHeading from "../ui/SectionHeading";
import PropertyCard from "../ui/PropertyCard";
import { ELITE_RESIDENCES } from "@/data/siteData";

export default function EliteResidences() {
  return (
    <section className="section" id="properties">
      <div className="container">
        <SectionHeading
          label="Curated Collection"
          title="Elite Residences"
          subtitle="Handpicked properties that redefine luxury living across the UAE's most prestigious addresses."
        />
        <div className={styles.grid}>
          {ELITE_RESIDENCES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
