"use client";
import React from "react";
import styles from "./WhyUs.module.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaSmile,
  FaCloud,
  FaLayerGroup,
  FaHeadset,
  FaMoneyBillWave,
  FaBolt,
  FaUsers,
} from "react-icons/fa";

const WhyUs = () => {
  const features = [
    {
      title: "Best-in-class Work",
      description:
        "Combining creativity and engineering to deliver outstanding results.",
      icon: <FaCode />,
    },
    {
      title: "User-Friendly Design",
      description:
        "Our software is crafted to be simple, intuitive, and easy to adapt to any workflow.",
      icon: <FaSmile />,
    },
    {
      title: "Reliable Uptime",
      description:
        "We ensure 100% uptime with robust cloud solutions and optimized systems.",
      icon: <FaCloud />,
    },
    {
      title: "Smart Architecture",
      description:
        "Built with scalability and performance in mind to support business growth.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Dedicated Support",
      description:
        "Our support team is always ready — real people helping real businesses.",
      icon: <FaHeadset />,
    },
    {
      title: "Transparent Pricing",
      description:
        "Affordable pricing with no hidden charges or unnecessary complexity.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Fast & Secure",
      description:
        "Lightning-fast performance with enterprise-level security in every line of code.",
      icon: <FaBolt />,
    },
    {
      title: "Expert team",
      description:
        "We love what we do — delivering software that makes businesses thrive.",
      icon: <FaUsers />,
    },
  ];

  return (
    <motion.section
      className={styles.whyUsSection}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }} // same behavior as observer
    >
      <div className={styles.headingWrapper}>
        <motion.p
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false}}
        >
          Why Us <span className={styles.dot}></span>
        </motion.p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.1, // same timing as your CSS
            }}
            viewport={{ once: false }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyUs;
