import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/R1.png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 10) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    document.querySelector('.menu').classList.toggle('display');
  };

  return (
    <div className={`container ${navActive ? 'active' : ''}`}>
      <div className="nav">
        <img src={logo} alt="menu-icon" />
        <h1 onClick={toggleMenu} className="dash">Menu</h1>
        <ul className="menu">
          <li><a href="#">Home</a></li> 
          <li><a href="#">About</a></li> 
          <li><a href="#">Projects</a></li> 
          <li><a href="#">Skills</a></li> 
          <li><a href="#">Contact</a></li> 
        </ul>                        
      </div>
    </div>
  );
}

export default Navbar;
