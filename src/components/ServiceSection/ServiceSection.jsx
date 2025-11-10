"use client";
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./ServiceSection.module.css";
import img1 from "../../assets/Image/ServiceSection/img1.jpg";
import img2 from "../../assets/Image/ServiceSection/img2.jpg";
import img3 from "../../assets/Image/ServiceSection/img3.jpg";
import img4 from "../../assets/Image/ServiceSection/img4.jpg";
import img5 from "../../assets/Image/ServiceSection/img5.jpg";
import img6 from "../../assets/Image/ServiceSection/img6.jpg";
import img7 from "../../assets/Image/ServiceSection/img7.jpg";
import overimg from "../../assets/Image/ServiceSection/overImg.svg";

const TABS = [
  {
    id: "webSolutions",
    title: "Web Solutions",
    line: "Building modern, high-performance websites that convert.",
    desc: "We design and develop stunning, responsive, and SEO-optimized websites that not only look great but also deliver measurable business results. From portfolio sites to enterprise web apps — we’ve got you covered.",
    img: img1,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    line: "Turning your ideas into powerful, user-friendly apps.",
    desc: "We craft cross-platform mobile apps that deliver seamless performance, modern UI, and engaging user experiences. Whether it’s Android, iOS, or hybrid — we build apps that your users will love using.",
    img: img2,
  },
  {
    id: "software",
    title: "Software Development",
    line: "Smart, scalable, and secure custom software solutions.",
    desc: "We build tailor-made software to streamline your business operations, improve efficiency, and enhance productivity. From enterprise-grade tools to startup MVPs — our solutions are built to scale with your growth.",
    img: img3,
  },
  {
    id: "video",
    title: "Video Editing",
    line: "Crafting engaging videos that tell your brand’s story.",
    desc: "We produce visually stunning video edits designed to captivate audiences and boost engagement. Whether it’s for your website, social media, or marketing campaigns — we bring your vision to life through powerful storytelling.",
    img: img4,
  },
  {
    id: "graphics",
    title: "Graphic Design",
    line: "Designs that define your brand and inspire action.",
    desc: "Our creative team delivers high-quality designs that elevate your brand identity. From logos to digital campaigns, we create visuals that connect with your audience and make your business stand out.",
    img: img5,
  },
  {
    id: "Hosting",
    title: "Hosting",
    line: "Reliable, fast, and secure hosting for your online presence.",
    desc: "We offer top-tier web hosting services with lightning-fast performance, guaranteed uptime, and 24/7 support — so your business stays online and accessible at all times.",
    img: img6,
  },
  {
    id: "seo",
    title: "SEO Optimization",
    line: "Boosting your visibility and ranking across search engines.",
    desc: "We help you grow your digital reach with data-driven SEO strategies — from keyword optimization and content strategy to technical audits — so your website ranks higher and attracts the right audience.",
    img: img7,
  },
];

const ServiceSection = () => {
  const [active, setActive] = useState("webSolutions");
  const [loadedImages, setLoadedImages] = useState({});

  const toggleTab = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  // Auto reopen webSolutions if everything closed
  useEffect(() => {
    if (active === null) {
      const timer = setTimeout(() => setActive("webSolutions"), 400);
      return () => clearTimeout(timer);
    }
  }, [active]);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={styles.section}>
      {/* ==== HEADING ==== */}
      <motion.div
        className={styles.headingWrapper}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>
          Services <span className={styles.dot}></span>
        </h2>
      </motion.div>

      {/* ==== MAIN ==== */}
      <div className={styles.main}>
        {/* ==== LEFT SIDE ==== */}
        <motion.div
          className={styles.tabsCol}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <div
                key={tab.id}
                className={`${styles.tab} ${isActive ? styles.active : ""}`}
                onClick={() => toggleTab(tab.id)}
              >
                <div
                  className={`${styles.sideLine} ${
                    isActive ? styles.sideLineActive : styles.sideLineInactive
                  }`}
                ></div>

                <div className={styles.tabContent}>
                  <div className={styles.titleRow}>
                    <h3>{tab.title}</h3>
                    <div className={styles.icon}>
                      {isActive ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>

                  {!isActive && <p className={styles.mutedLine}>{tab.line}</p>}
                  {isActive && <p className={styles.desc}>{tab.desc}</p>}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ==== RIGHT IMAGE ==== */}
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {TABS.map(
            (tab) =>
              active === tab.id && (
                <div key={tab.id} className={styles.imageFrame}>
                  <div className={styles.imageWrap}>
                    {/* Shimmer Effect */}
                    {!loadedImages[tab.id] && (
                      <div className={styles.shimmer}></div>
                    )}

                    <img
                      src={tab.img}
                      alt={tab.title}
                      onLoad={() => handleImageLoad(tab.id)}
                      className={`${styles.image} ${
                        loadedImages[tab.id] ? styles.visible : styles.hidden
                      }`}
                    />

                    <div className={styles.vignetteTop}></div>
                    <div className={styles.vignetteBottom}></div>
                    <div className={styles.overlayChart}>
                      <img src={overimg} alt="chart" />
                    </div>
                  </div>
                </div>
              )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
