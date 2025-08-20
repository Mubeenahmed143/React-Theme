import React from "react";
// import "../styles/Skills.css"; // Make sure to create this file and add styles

const Skills = () => {
  return (
    <section className="services" id="skills">
      <h2 className="heading">
        <span>Skills</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-laptop"></i>
          <h3>Frontend Skills</h3>
          <p>HTML, CSS, JavaScript, Angular, React</p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-server"></i>
          <h3>Backend & Database</h3>
          <p>PHP, DotNet (MVC), C#, C, SQL Server, Firebase, MongoDB</p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-code"></i>
          <h3>App & Tools</h3>
          <p>Flutter/Dart, Git/GitHub, MS Office</p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
