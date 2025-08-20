//working on here 


import React from 'react';
import useTyped from "../hooks/useTyped";

const Home = () => {

  useTyped(".multiple-text", {
    strings: ['Website Developer', 'Website Designer', 'React Developer', 'Flutter App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Mubeen Ahmed Sheikh</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Seeking challenging and rewarding position in a progressive organization commensurate with my qualification and experience that will encourage me to give the best of my abilities and keep my abreast of my latest trends and advancement.</p>
        <div className="social-media">
          <a href="https://www.facebook.com/sheikh.mubeen.5496" target="_blank" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/sheikhmubeenahmed/" target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://tiktok.com/@mubeenahmed429" target="_blank" rel="noreferrer"><i className='bx bxl-tiktok'></i></a>
          <a href="https://www.linkedin.com/in/mubeen-ahmed-sheikh-078144265/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
        </div>
        <a href="/images/mubeen cv.pdf" download className="btn">Download CV</a>
      </div>

      <div className="home-img">
        <img src="/images/owner.png" alt="Owner" />
      </div>
    </section>
  );
};

export default Home;