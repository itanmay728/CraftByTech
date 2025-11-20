"use client";
import React from "react";
import styles from "./Testimonials.module.css";
import StaggerTestimonials from "./StaggerTestimonials";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false}}
    >
      <div className={styles.container}>

        {/* ==== HEADING (Animated with Framer Motion) ==== */}
        <motion.div
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className={styles.heading}>
            Our Customers Reviews <span className={styles.dot}></span>
          </h2>
        </motion.div>

        {/* SUBTITLE */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
          Don&apos;t just take our word for it — hear from our satisfied customers
        </motion.p>

        <StaggerTestimonials />
      </div>
    </motion.section>
  );
};

export default Testimonials;
