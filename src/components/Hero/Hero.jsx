import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => [
      "Websites",
      "Mobile Apps",
      "Software Solutions",
      "Web Apps",
      "Chat Bots",
      "SaaS Products",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [titleNumber, titles]);

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>
          {/* ✨ Brand intro animation */}
          <p className={styles.brandIntro}>CraftByTech</p>

          <span className={styles.primaryText}>We Craft Digital Solutions</span>

          <div className={styles.animatedTextWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={titleNumber}
                className={styles.animatedText}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {titles[titleNumber]}
              </motion.div>
            </AnimatePresence>
          </div>
        </h1>

        <p className={styles.heroDescription}>
          We empower businesses to simplify operations, accelerate growth, and
          stay ahead with smart, modern software solutions. <br />
          Transform your business with technology that saves time, reduces
          complexity, and drives real results.
        </p>

        <div className={styles.buttonGroup}>
          <a href="tel:+916202907277" className={`${styles.btn} ${styles.btnOutline}`}>
            Jump on a call <FaPhoneAlt size={16} />
          </a>
          <Link to="/service" className={`${styles.btn} ${styles.btnPrimary}`}>
            Services <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
