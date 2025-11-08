import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/Image/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // close menu on click (for mobile)
  };

  // Optional: Auto-detect active link while scrolling (basic version)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          setActiveLink(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Left side: logo + glossy brand */}
        <div className={styles.left}>
          <img src={logo} alt="CraftByTech Logo" className={styles.logo} />
          <h2 className={styles.brand}>CraftByTech</h2>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Nav links */}
        <div
          className={`${styles.links} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          {["home", "Services", "About", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`${styles.link} ${
                activeLink === item ? styles.active : ""
              }`}
              onClick={() => handleSetActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* Let’s Talk Button */}
          <button className={styles.talkButton}>Let’s Talk</button>
        </div>
      </div>
    </nav>
  );
}
