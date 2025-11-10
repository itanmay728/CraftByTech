import React from "react";
import { motion } from "framer-motion";
import styles from "./LightningFast.module.css";
import { FaFolder, FaHandshake, FaStarOfLife } from "react-icons/fa6";

const LightningFast = () => {
  return (
    <div className={styles.layout}>
      {/* LEFT SIDE — slides in from left */}
      <motion.div
        className={styles.left}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={styles.wrapper}>
          <div className={styles.backgroundGlow}></div>

          {/* SVG Section */}
          <svg
            className={styles.svg}
            viewBox="0 0 200 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Animated Blue Paths */}
            <g
              stroke="currentColor"
              fill="none"
              strokeWidth="0.4"
              strokeDasharray="100 100"
              pathLength="100"
            >
              <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
              <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
              <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
              <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
              <animate
                attributeName="stroke-dashoffset"
                values="100;0;100"
                keyTimes="0;0.5;1"
                dur="3s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.25,0.1,0.5,1;0.25,0.1,0.5,1"
              />
            </g>

            {/* Static Grey Paths */}
            <g
              stroke="#c3c5c660"
              fill="none"
              strokeWidth="0.4"
              strokeDasharray="100 100"
              pathLength="100"
            >
              <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
              <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
              <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
              <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
            </g>

            {/* Buttons Row */}
            <g stroke="currentColor" fill="none" strokeWidth="0.4">
              <Button x="14" y="5" text="GET" />
              <Button x="60" y="5" text="POST" />
              <Button x="108" y="5" text="PUT" />
              <Button x="150" y="5" width="40" text="DELETE" />
            </g>

            <defs>
              <radialGradient id="blue-grad" fx="1">
                <stop offset="0%" stopColor="#00A6F5" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>

          {/* Top Label */}
          <div className={styles.titleBox}>
            <FaStarOfLife className={styles.icon} />
            <span>Data exchange using a customized REST API</span>
          </div>

          {/* Badges + Pulsing Circles */}
          <div className={styles.content}>
            <div className={`${styles.badge} ${styles.leftBadge}`}>
              <FaHandshake />
              <span>LegionDev</span>
            </div>
            <div className={`${styles.badge} ${styles.rightBadge}`}>
              <FaFolder />
              <span>v2_updates</span>
            </div>

            <motion.div
              className={`${styles.circle} ${styles.c1}`}
              animate={{ scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className={`${styles.circle} ${styles.c2}`}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className={`${styles.circle} ${styles.c3}`}
              animate={{ scale: [1, 1.02, 0.98, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Bottom Circle */}
          <div className={styles.bottomCircle}>SVG</div>
        </div>
      </motion.div>

      {/* RIGHT SIDE — slides in from right */}
      <motion.div
        className={`${styles.right} ${styles.shimmer}`}
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span>It takes 7 days to launch your project.</span>
        <p>Lightning-fast delivery without compromising quality.</p>
      </motion.div>
    </div>
  );
};

/* ✅ Button component restored */
const Button = ({ x, y, text, width = 34 }) => (
  <g>
    <rect fill="#18181B" x={x} y={y} width={width} height="10" rx="5" />
    <DatabaseIcon x={parseInt(x) + 4} y={parseInt(y) + 2.5} />
    <text
      x={parseInt(x) + 14}
      y={parseInt(y) + 7}
      fill="white"
      stroke="none"
      fontSize="5"
      fontWeight="500"
    >
      {text}
    </text>
  </g>
);

const DatabaseIcon = ({ x = "0", y = "0" }) => (
  <svg
    x={x}
    y={y}
    width="5"
    height="5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

export default LightningFast;
