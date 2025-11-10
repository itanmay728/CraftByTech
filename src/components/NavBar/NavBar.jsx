import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/Image/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  const handleSetActive = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // close menu on click (mobile)
  };

  // ✅ Detect current route and set active link accordingly
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/" || currentPath === "/home") {
      setActiveLink("home");
    } else if (currentPath.includes("/services")) {
      setActiveLink("Services");
    } else if (currentPath.includes("/about")) {
      setActiveLink("About");
    } else if (currentPath.includes("/contact")) {
      setActiveLink("contact");
    }
  }, [location.pathname]);

  // Optional: Scroll spy (detect section in view)
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
        {/* Left side: Logo + Brand */}
        <Link to="/" className={styles.brandLink}>
          <div className={styles.left}>
            <img src={logo} alt="CraftByTech Logo" className={styles.logo} />
            <h2 className={styles.brand}>
              {"CraftByTech".split("").map((char, index) => (
                <span
                  key={index}
                  className={styles.brandLetter}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.links} ${isMenuOpen ? styles.showMenu : ""}`}>
          {["home", "Services", "About", "contact"].map((item) => {
            const path = item === "home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={path}
                className={`${styles.link} ${
                  activeLink === item ? styles.active : ""
                }`}
                onClick={() => handleSetActive(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            );
          })}

          {/* Let’s Talk Button */}
          <button className={styles.talkButton}>Let’s Talk</button>
        </div>
      </div>
    </nav>
  );
}
