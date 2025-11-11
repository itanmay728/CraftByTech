"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceSection.module.css";
import {
  FiSettings,
  FiPenTool,
  FiCode,
  FiMonitor,
  FiShare2,
  FiShoppingCart,
} from "react-icons/fi";

const services = [
  {
    icon: <FiSettings />,
    title: "Strategy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: <FiPenTool />,
    title: "Branding",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: <FiCode />,
    title: "Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: <FiShare2 />,
    title: "Social Media",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: <FiShoppingCart />,
    title: "Ecommerce",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
];

export default function ServiceSection() {
  return (
    <section className={styles.section}>
      {/* ===== TOP LABEL ===== */}
      <motion.div
        className={styles.topLabel}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className={styles.dot}></span>
        <p>Services</p>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.contentRow}>
          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className={styles.mainHeading}>
              We provide a lot of cool services
            </h2>
            <p className={styles.description}>
              At <strong>CraftByTech</strong>, we specialize in creating powerful
              digital solutions that help businesses stand out. From website
              design to app development, we focus on performance, creativity, and
              precision — helping brands connect with their audience through
              technology and design.
            </p>
          </motion.div>

          {/* ===== RIGHT SERVICE GRID ===== */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.grid}>
              {services.map((service, index) => (
                <motion.div
                  className={styles.card}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1 + 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <div className={styles.icon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
