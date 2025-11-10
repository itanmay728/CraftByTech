import React from "react";
import styles from "./Testimonials.module.css";
import StaggerTestimonials from "./StaggerTestimonials";

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ==== HEADING (Styled like ServiceSection) ==== */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Our Customers Reviews <span className={styles.dot}></span>
          </h2>
        </div>

        <p className={styles.subtitle}>
          Don&apos;t just take our word for it — hear from our satisfied customers
        </p>

        <StaggerTestimonials />
      </div>
    </section>
  );
};

export default Testimonials;
