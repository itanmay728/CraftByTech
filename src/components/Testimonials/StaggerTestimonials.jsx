import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import styles from "./StaggerTestimonials.module.css";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "The custom software built by CraftByTech completely streamlined our workflow. Our team saves hours every week now, and we finally have real-time visibility into all operations.",
    by: "Rohit, Operations Manager",
  },
  {
    tempId: 1,
    testimonial:
      "CraftByTech delivered an incredible mobile app that our users absolutely love. Smooth performance, beautiful UI, and packed with useful features — it’s become the core of our digital presence.",
    by: "Manish, Product Head at Anteris Software",
  },
  {
    tempId: 2,
    testimonial:
      "CraftByTech transformed our website into a high-performing, visually stunning experience that boosted engagement by 60%. Hosting with CraftByTech has been 100% reliable — zero downtime. ",
    by: "Rahul, Marketing Lead",
  },
  {
    tempId: 3,
    testimonial:
      "The video editing team at CraftByTech nailed our brand vision perfectly. The promotional videos they created helped us double our ad engagement and boosted our social reach massively.",
    by: "Neha, social media manager",
  },
  {
    tempId: 4,
    testimonial:
      "Our website revamp by CraftByTech was a total game-changer. The site is lightning-fast, visually stunning, and optimized for conversions. We saw a 60% boost in visitor engagement within weeks!",
    by: "Sameer, Co-Founder at QuantFox",
  },
  {
    tempId: 5,
    testimonial:
      "The design team at CraftByTech gave our brand a fresh identity that truly stands out. Every graphic and animation they delivered feels premium and professional — our clients love it!",
    by: "Maya, Creative Director",
  },
  {
    tempId: 6,
    testimonial:
      "Thanks to CraftByTech’s SEO strategy, we’re ranking on the first page for our most competitive keywords. Organic traffic is up 3x, and our inbound leads have skyrocketed.",
    by: "Amit, Marketing Head",
  },
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`${styles.card} ${
        isCenter ? styles.centerCard : styles.sideCard
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px var(--border-color)" : "none",
      }}
    >
      <span
        className={styles.decorLine}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* ⭐ Stars instead of image */}
      <div
        className={`${styles.starRow} ${isCenter ? styles.centerStars : ""}`}
      >
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={styles.starIcon} />
        ))}
      </div>

      <h3
        className={`${styles.cardText} ${isCenter ? styles.textHighlight : ""}`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p className={`${styles.cardBy} ${isCenter ? styles.textMuted : ""}`}>
        - {testimonial.by}
      </p>
    </div>
  );
};

const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    if (isHovered || !isVisible) return;
    const interval = setInterval(() => handleMove(1), 1500);
    return () => clearInterval(interval);
  }, [isHovered, isVisible, testimonialsList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.innerWidth > 640 ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className={styles.navButtons}>
        <button
          onClick={() => handleMove(-1)}
          className={styles.navButton}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={styles.navButton}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StaggerTestimonials;
