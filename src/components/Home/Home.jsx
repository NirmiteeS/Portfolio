import React, { useEffect, useState } from 'react';
import "./Home.css";
import hero from "../../assets/hero.png";
import Typewriter from "typewriter-effect";
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home() {
  useEffect(() => {
    Aos.init()
},[])

  return (
    <section className="home">
      <section className="container">
      <div className="content" data-aos="zoom-in-right" data-aos-duration="1000">
        <p className='subtitle'>Hii <span class="waving-hand">👋</span></p>
        <h1 className='head'>I am Nirmitee Sarode</h1>
        <p>
        <Typewriter
        options={{
        strings: ['Front End Devoloper', 'Programmer'], // Array of strings to be typed
        autoStart: true, 
        loop: true, 
        wrapperClassName: 'typewriter-wrapper', 
        cursorClassName: 'typewriter-cursor', 
    }}
    />
    </p>
      </div>
      <img
        src={hero}
        alt=" "
        className="heroImg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"/>
    </section> 
    </section>
  )
}

export default Home


