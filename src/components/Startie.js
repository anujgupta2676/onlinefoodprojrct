import React from 'react'
import Navbar from '../Slider/Navbar'
import Hero from '../Slider/Hero'
import Aboutslider from "../Slider/Aboutslider"
import Testimonials from '../Slider/Testimonials'
import Demo from '../Slider/Demo'
import Footer from '../Slider/Footer'
import Slider from '../Carouslider/Slider'



function Startie() {
    return (
      <div>
        
        <Slider/>
        <Hero />
        <Aboutslider/>
        <Testimonials />
        <Demo />
        <Footer />
      </div>
    );
  }
  
  export default Startie;
    
