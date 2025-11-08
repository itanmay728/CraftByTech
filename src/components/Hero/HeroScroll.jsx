"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroScroll.module.css";
// import heroimg from "../../assets/Image/heroimg.jpg";
import heroimg from "../../assets/Image/heroimg1.png";
import { div } from "framer-motion/client";

const HeroScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // identical logic to your original component
  const scaleDimensions = isMobile ? [0.7, 0.9] : [1.05, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div>
      <div className={styles.heroScrollWrapper}>
        <div ref={containerRef} className={styles.heroScrollContainer}>
          {/* Title Section */}
          <motion.div
            style={{ translateY: translate }}
            className={styles.header}
          >
            <h1 className={styles.title}>
              Unleash the power of <br />
              <span className={styles.highlight}>Scroll Animations</span>
            </h1>
          </motion.div>

          {/* Scroll Card */}
          <motion.div
            style={{
              rotateX: rotate,
              scale,
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className={styles.card}
          >
            <div className={styles.cardInner}>
              <img
                src={heroimg}
                alt="Scroll Animation"
                draggable="false"
                className={styles.image}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroScroll;
