import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/mr.mubeen.png" alt="About Me" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Website Developer</h3>
        <p>Mubeen Ahmed Sheikh is a proficient website developer with a passion for crafting dynamic and user-friendly online experiences. With a keen eye for design and a knack for coding, Mubeen specializes in creating responsive websites that resonate with clients and users alike. His commitment to staying abreast of the latest trends and technologies ensures that each project is executed with precision and innovation. Whether it's building from scratch or enhancing existing platforms, Mubeen brings creativity and expertise to every aspect of web development.</p>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
    </section>
  );
};

export default About;