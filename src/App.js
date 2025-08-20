import React, { useEffect } from "react"; // ✅ useEffect imported here
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './style.css';
import ScrollReveal from "scrollreveal";
import Main from './pages/Main';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import SimplonProject from "./pages/SimplonProject";

const App = () => {


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            const match = document.querySelector(`header nav a[href*=${id}]`);
            if (match) match.classList.add("active");
          });
        }
      });

      header.classList.toggle("sticky", top > 100);

      // Remove toggle nav on scroll
      const menuIcon = document.querySelector("#menu-icon");
      const navbar = document.querySelector(".navbar");
      menuIcon?.classList.remove("bx-x");
      navbar?.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
useEffect(() => {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
  ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
}, []);



  return (
    <>
      <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Main/>} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/simplons-project" element={<SimplonProject/>} />
          </Route>
        </Routes>
    </>
  );
};

export default App;

