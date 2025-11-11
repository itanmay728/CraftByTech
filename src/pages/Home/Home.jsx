import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroScroll from "../../components/Hero/HeroScroll";
import WhyUs from "../../components/WhyUs/WhyUs";
import LightningFast from "../../components/LightningFast/LightningFast";
import Testimonials from "../../components/Testimonials/Testimonials";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import ClientsMarquee from "../../components/ClientsMarquee/ClientsMarquee";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      {/* ==== HERO SECTION ==== */}
      <Hero />

      {/* ==== SCROLL INDICATOR / SUB HERO ==== */}
      <HeroScroll />

      {/* ==== WHY CHOOSE US ==== */}
      <WhyUs />

      {/* ==== PERFORMANCE SECTION ==== */}
      <LightningFast />

      {/* ==== SERVICES ==== */}
      <ServiceSection />

      {/* ==== TESTIMONIALS ==== */}
      <Testimonials />

      {/* ==== CONTACT FORM ==== */}
      <ContactForm />

      {/* ==== CLIENTS ==== */}
      <ClientsMarquee />
    </main>
  );
};

export default Home;
