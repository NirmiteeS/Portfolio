import React from 'react'
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer">
    
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/NirmiteeS">
      <IoLogoGithub />

        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/nirmitee-sarode-2b09ba251">
      <FaLinkedin />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="mailto:nirmiteesarode04@gmail.com">
      <IoMail />

        </a></li>
      {/* <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaInstagram />

        </a></li> */}
    </ul>
    
    
    <p>Made with ❤️ by Nirmitee</p>
  </footer>

  )
}

export default Footer