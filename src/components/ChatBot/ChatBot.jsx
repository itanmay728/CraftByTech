"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";
import styles from "./ChatBot.module.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can send data to your backend here (API call)
    setIsFormSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ===== Floating Button ===== */}
      <motion.button
        className={styles.chatButton}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </motion.button>

      {/* ===== Popup ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.chatBox}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className={styles.header}>
              <h3>{isFormSubmitted ? "Chat with Us 💬" : "Let’s Get Started"}</h3>
              <button onClick={() => setOpen(false)} className={styles.closeBtn}>
                <FiX size={18} />
              </button>
            </div>

            {/* ===== Show Form First ===== */}
            {!isFormSubmitted ? (
              <motion.form
                className={styles.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number*"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className={styles.submitBtn}>
                  Continue to Chat
                </button>
              </motion.form>
            ) : (
              /* ===== Chat Window After Form ===== */
              <motion.div
                className={styles.chatContent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p>
                  👋 Hi <strong>{formData.name}</strong>!  
                  <br />Thanks for reaching out from <strong>{formData.email}</strong>.  
                  <br />A member of the <strong>CraftByTech team</strong> contact you soon.
                </p>
                {/* <div className={styles.footer}>
                  <input type="text" placeholder="Type your message..." />
                  <button>Send</button>
                </div> */}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
