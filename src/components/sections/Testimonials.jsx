import styles from "./Testimonials.module.css";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section className="section section--darker">
      <div className="container">
        <SectionHeading
          label="Client Stories"
          title="Voices of Distinction"
          subtitle="Hear from our distinguished clients about their journey to finding extraordinary properties."
          align="center"
        />
        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
