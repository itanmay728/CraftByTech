import React from "react";
import styles from "./ClientsMarquee.module.css";

import trust from "../../assets/Image/ClientsLogo/trustLogo.png"
import AnterisLogo from "../../assets/Image/ClientsLogo/AnterisLogo.png"
import quantfoxLogo from "../../assets/Image/ClientsLogo/QuantfoxLogo.png"
import webGrowLogo from "../../assets/Image/ClientsLogo/webGrowLogo.jpg"
import gyanExe from "../../assets/Image/ClientsLogo/gyanExe.jpg"
import transExpertLogo from "../../assets/Image/ClientsLogo/transExpertLogo.jpg"


const clients = [
  trust,
  AnterisLogo,
  quantfoxLogo,
  webGrowLogo,
  gyanExe,
  transExpertLogo
  
];

export default function ClientsMarquee() {
  return (
    <section className={styles.section}>
      {/* ==== HEADING (matches ServiceSection) ==== */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
          Our Clients <span className={styles.dot}></span>
        </h2>
      </div>
      <p className={styles.subtitle}>Trusted by industry leaders worldwide</p>

      {/* ==== MARQUEE ==== */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className={styles.logoGroup}>
              {clients.map((logo, i) => (
                <div key={`${groupIndex}-${i}`} className={styles.logoCard}>
                  <img src={logo} alt={`Client logo ${i + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
