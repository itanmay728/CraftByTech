import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./Footer.module.css";
import logo from "../../assets/Image/logo.png";

const Footer = () => {
  const [animateText, setAnimateText] = useState(false);
  const logoTextRef = useRef(null);

  useEffect(() => {
    const el = logoTextRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateText(true); // start animation
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.35 } // ~35% in view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const navigation = [
    {
      title: "Site Map",
      links: [
        { name: "About", href: "/about" },
        { name: "Service", href: "/service" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Site Developement", href: "/service" },
        { name: "App Developement", href: "/service" },
        { name: "Software Developement", href: "/service" },
        { name: "Hosting", href: "/service" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "6202907277 | 8076390223", href: "/contact" },
        { name: "craftbytechh@gmail.com", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="CraftByTech Logo" className={styles.logoImg} />
          <h2 className={styles.logoText} ref={logoTextRef}>
            {"CraftByTech".split("").map((ch, i) => (
              <span
                key={i}
                className={`${styles.letter} ${
                  animateText ? styles.bumpOnce : ""
                }`}
                style={
                  animateText ? { animationDelay: `${i * 0.09}s` } : undefined
                }
              >
                {ch}
              </span>
            ))}
          </h2>
        </Link>

        <p className={styles.about}>
          CraftByTech — Where creativity meets precision. We help businesses
          stand out with unique designs, modern websites, and digital
          experiences that make a lasting impression.
        </p>
      </div>

      <div className={styles.navGrid}>
        {navigation.map((section, idx) => (
          <div key={idx} className={styles.navColumn}>
            <h4 className={styles.navTitle}>{section.title}</h4>
            <div className={styles.navLinks}>
              {section.links.map((link, i) => (
                <Link key={i} to={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.socials}>
        <a
          href="mailto:craftbytechh@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/craftbytechh/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/craftbytech/?viewAsMember=true"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className={styles.bottom}>
        <p>
          Built with ❤️ by —
          <a
            href="https://iamtanmay-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tanmay Kumar
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} All rights reserved —{" "}
          <a
            href="https://www.linkedin.com/company/craftbytech/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
          >
            <span>CraftByTech</span>
          </a>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
