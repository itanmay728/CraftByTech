import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      {/* ===== Page Title ===== */}
      <div className={styles.pageTitle}>
        <h1>Contact</h1>
        <div className={styles.underline}></div>
      </div>

      {/* ===== Contact Form ===== */}
      <ContactForm />

      {/* ===== Company Details ===== */}
      <div className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.infoBox}>
            <FiPhoneCall className={styles.icon} />
            <p>+91 6202907277</p>
            <p>+91 8076390223</p>
          </div>
          <div className={styles.infoBox}>
            <FiMail className={styles.icon} />
            <p>craftbytechh@gmail.com</p>
          </div>
          <div className={styles.infoBox}>
            <FiMapPin className={styles.icon} />
            <p>
              F-6, Street Number 80, near Fouji Model School, Block A3, Uttam
              Nagar, Delhi, 110059, India
            </p>
          </div>
        </div>

        {/* ===== Social Links ===== */}
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/craftbytechh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/craftbytech/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://wa.me/+916202907277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* ===== Google Map Embed ===== */}
      <div className={styles.mapContainer}>
        <iframe
          title="CraftByTech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7956686636944!2d77.06258467495581!3d28.60590608529034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2d000ab8f1%3A0x358bd4390ddde938!2sF-6%2C%20Street%20Number%2080%2C%20near%20Fouji%20Model%20School%2C%20Block%20A3%2C%20Uttam%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1762857743511!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
