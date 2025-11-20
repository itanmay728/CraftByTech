"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceSection.module.css";
import {
  FiSettings,
  FiPenTool,
  FiCode,
  FiMonitor,
  FiShoppingCart,
} from "react-icons/fi";

import { FaMobileRetro, FaCloudArrowUp  } from "react-icons/fa6";

const services = [
  {
    icon: <FiSettings />,
    title: "Strategy",
    desc: "We craft data-driven digital strategies that align with your business goals, helping you reach the right audience, boost engagement, and scale effectively with measurable results.",
  },
  {
    icon: <FaCloudArrowUp />,
    title: "Hosting",
    desc: "We offer secure, lightning-fast, and reliable hosting solutions with 99.9% uptime — ensuring your website and applications run smoothly around the clock with zero interruptions.",
  },
  {
    icon: <FiCode />,
    title: "Software Development",
    desc: "From custom tools to enterprise-grade systems, we build scalable, efficient, and secure software solutions tailored to your business processes and long-term growth.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Development",
    desc: "We design and develop high-performing, responsive, and SEO-optimized websites that deliver exceptional user experiences and help your brand stand out online.",
  },
  {
    icon: <FaMobileRetro />,
    title: "App Development",
    desc: "We create sleek, user-friendly mobile apps for Android and iOS that enhance user engagement, streamline operations, and bring your digital vision to life.",
  },
  {
    icon: <FiShoppingCart />,
    title: "Ecommerce",
    desc: "We build feature-rich e-Commerce platforms with secure payment gateways, modern design, and seamless shopping experiences to drive your online business success.",
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
        viewport={{ once: false }}
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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
