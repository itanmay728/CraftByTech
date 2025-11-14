import React from "react";
import styles from "./Service.module.css";
import { Link } from "react-router-dom";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import heroImage from "../../assets/Image/serviceHero.png";

const Service = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          {/* ===== LEFT CONTENT ===== */}
          <div className={styles.left}>
            <h1 className={styles.title}>
              Boost <span>Personal Productivity</span>
            </h1>

            <p className={styles.subtitle}>
              Empowering businesses with smart digital solutions designed for growth, performance, and productivity.
            </p>

            <div className={styles.buttons}>
              <Link to="/contact" className={styles.primaryBtn}>
                Start A Project
              </Link>

              <a href="tel:+916202907277" className={styles.secondaryBtn}>
                Call us for any query <br />
                <strong>+91 62029 07277</strong>
              </a>
            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className={styles.right}>
            <img
              src={heroImage}
              alt="Service"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <ServiceSection />
    </div>
  );
};

export default Service;
