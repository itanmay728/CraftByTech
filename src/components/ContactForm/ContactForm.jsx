import React from "react";
import styles from "./ContactForm.module.css";
import { FiSend, FiPhoneCall, FiGlobe } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <FiSend className={styles.badgeIcon} />
            <p>Contact Now</p>
          </div>

          <h2 className={styles.title}>Contact Us!</h2>

          <p className={styles.subtitle}>
            Let’s create something amazing together! Reach out — I’d love to
            hear about your project and ideas.
          </p>

          <div className={styles.line}></div>

          <div className={styles.points}>
            <div className={styles.point}>
              <div className={styles.iconWrap}>
                <FiPhoneCall className={styles.icon} />
              </div>
              <p>24/7 Full Time Support</p>
            </div>

            <div className={styles.point}>
              <div className={styles.iconWrap}>
                <FiGlobe className={styles.icon} />
              </div>
              <p>Available Worldwide</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className={styles.right}>
          {/* <div className={styles.indicator}></div> */}
          <form className={styles.form}>
            <input type="text" name="name" placeholder="Name*" required />
            <input type="email" name="email" placeholder="Email*" required />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number*"
              required
            />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" className={styles.submitBtn}>
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
