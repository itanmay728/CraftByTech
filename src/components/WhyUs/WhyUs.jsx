import React, { useEffect, useRef, useState } from "react";
import styles from "./WhyUs.module.css";
import {
  FaCode,
  FaSmile,
  FaCloud,
  FaLayerGroup,
  FaHeadset,
  FaMoneyBillWave,
  FaBolt,
  FaUsers ,
} from "react-icons/fa";

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // trigger every time user enters the viewport
          if (entry.isIntersecting) {
            setVisible(true);
          } 
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      icon: <FaUsers  />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.whyUsSection} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.headingWrapper}>
        <h2 className={`${styles.heading} ${visible ? styles.fadeUp : ""}`}>
          Why Us <span className={styles.dot}></span>
        </h2>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
