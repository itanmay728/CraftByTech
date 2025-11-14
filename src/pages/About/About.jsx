// About.jsx
import React from "react";
import styles from "./About.module.css";
import aboutHero from '../../assets/Image/aboutHero.png'

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.pageTitle}>
        <h1>About</h1>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.row}>
        {/* Left - Image */}
        <div className={styles.left}>
          <img
            src={aboutHero}
            alt="CraftByTech Team"
            className={styles.aboutImage}
          />
        </div>

        {/* Right - Content */}
        <div className={styles.right}>
          <h2 className={styles.companyName}>About CraftByTech</h2>

          <p className={styles.description}>
            At CraftByTech, we specialize in creating modern, scalable, and
            user-friendly software solutions tailored to your business needs.
            Our mission is to combine creativity with technology to deliver
            digital products that leave a long-lasting impact. Whether it's
            web development, automation, or enterprise-level systems – we
            craft technology that grows with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
