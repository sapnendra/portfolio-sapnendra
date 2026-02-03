import React from 'react'
import SEO from '../components/SEO'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <SEO 
        title="Sapnendra Jaiswal - Full Stack Web Developer | MERN Stack Expert"
        description="Sapnendra Jaiswal is a Full Stack Web Developer specializing in MERN stack, React, Node.js, MongoDB, and modern web technologies. Expert in building REST APIs, authentication systems, and AI-integrated responsive websites."
        keywords="Sapnendra Jaiswal, Sapnendra, Full Stack Developer, MERN Stack Developer, React Developer, Node.js Developer, Web Developer, JavaScript Developer, Portfolio"
        url="https://sapnendra.tech/"
      />
      <Hero />
      <About />
      <Services />
      <Work />
      <Marquee />
      <CTA />
    </>
  )
}

export default Home