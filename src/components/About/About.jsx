import React, { useEffect, useState } from 'react';
import './About.css'
import img2 from '../../assets/img-2.png'
import Pdf from '../../assets/NirmiteeSarode_resume.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      const openPDF = () => {
        window.open(Pdf, '_blank'); // Open the PDF in a new tab
      };

      useEffect(() => {
          Aos.init()
      },[])

  return (
    <div className="about">
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">About</h1>
      <section className="about-container">
      <img
        src={img2}
        alt="..."
        className="img2" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"/>
      <div className="about-content" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <p className='about-subtitle'>Hi! I'm Nirmitee Sarode, dedicatedly studying computer engineering student at Sardar Patel Institute of Technology. My passion lies in software development, particularly within the realms of web development and project management. Eager to immerse myself further in the dynamic world of technology, I aspire to contribute my skills and creativity to impactful projects that shape the future.</p>
        <div className="frame">
        <button onClick={openPDF}  className="custom-btn btn-1">My Resume</button>
        <button  onClick={() => openInNewTab('https://bobbyhadz.com')} className="custom-btn btn-2" >Github Repos</button></div>
        </div>
    </section> 
    </div>
  )
}

export default About