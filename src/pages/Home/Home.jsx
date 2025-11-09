import React from 'react'
import Hero from '../../components/Hero/Hero'
import HeroScroll from '../../components/Hero/HeroScroll';
import WhyUs from '../../components/WhyUs/WhyUs';
import LightningFast from '../../components/LightningFast/LightningFast';

const Home = () => {
  return (
    <div>
        <Hero/>
        <HeroScroll/>
        <WhyUs/>
        <LightningFast/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, obcaecati reiciendis esse nihil nam debitis dolorem in soluta asperiores aliquam officia possimus quae non incidunt quibusdam praesentium explicabo error necessitatibus! Ea eligendi ab aliquam consequatur voluptatum. Nulla possimus accusantium, delectus ducimus sit nostrum assumenda, pariatur ex repellendus et, atque voluptates.</p>
    </div>
  )
}

export default Home;