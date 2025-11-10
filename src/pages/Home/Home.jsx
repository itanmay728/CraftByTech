import React from 'react'
import Hero from '../../components/Hero/Hero'
import HeroScroll from '../../components/Hero/HeroScroll';
import WhyUs from '../../components/WhyUs/WhyUs';
import LightningFast from '../../components/LightningFast/LightningFast';
import Testimonials from '../../components/Testimonials/Testimonials';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ClientsMarquee from '../../components/ClientsMarquee/ClientsMarquee';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
  return (
    <div>
        <Hero/>
        <HeroScroll/>
        <WhyUs/>
        <LightningFast/>
        <ServiceSection/>
        <Testimonials/>
        <ContactForm/>
        <ClientsMarquee/>
    </div>
  )
}

export default Home;