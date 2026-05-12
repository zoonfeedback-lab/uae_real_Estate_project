import styles from "./OffPlanProjects.module.css";
import SectionHeading from "../ui/SectionHeading";
import PropertyCard from "../ui/PropertyCard";
import { OFFPLAN_PROJECTS } from "@/data/siteData";

export default function OffPlanProjects() {
  return (
    <section className="section" id="offplan">
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            label="Investment Opportunities"
            title="High-Yield Off-Plan Projects"
            subtitle="Secure your stake in Dubai's most promising developments with exceptional returns on investment."
          />
        </div>
        <div className={styles.grid}>
          {OFFPLAN_PROJECTS.map((project) => (
            <PropertyCard
              key={project.id}
              property={project}
              variant="offplan"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
