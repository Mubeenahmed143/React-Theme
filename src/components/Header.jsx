import React, { useEffect } from "react"; // ✅ useEffect imported here

import Navbar from './Navbar';
// import './Header.css';

const Header = () => {

    useEffect(() => {
        const menuIcon = document.querySelector("#menu-icon");
        const navbar = document.querySelector(".navbar");
    
        const handleClick = () => {
          menuIcon.classList.toggle("bx-x");
          navbar.classList.toggle("active");
        };
    
        menuIcon?.addEventListener("click", handleClick);
    
        return () => menuIcon?.removeEventListener("click", handleClick);
      }, []);

  return (
    <header className="header">
      <a href="/" className="logo">Mubeen Ahmed Sheikh</a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <Navbar />
    </header>
  );
};

export default Header;