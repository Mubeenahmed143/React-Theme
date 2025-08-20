import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading"><span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className='bx bx-code-alt'></i>
          <h3>Website Development</h3>
          <p>"Crafting digital experiences that seamlessly blend creativity and functionality, I am a website developer dedicated to transforming visions into captivating online realities."</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <div className="services-box">
          <i className='bx bx-code-curly'></i>
          <h3>Website Designing</h3>
          <p>"Crafting digital experiences that seamlessly blend creativity and functionality, I am a website developer dedicated to transforming visions into captivating online realities."</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <div className="services-box">
          <i className='bx bx-customize'></i>
          <h3>Customizing Website</h3>
          <p>"Crafting digital experiences that seamlessly blend creativity and functionality, I am a website developer dedicated to transforming visions into captivating online realities."</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
      <div className="portfolio-btn-wrapper">
        <a href="/services"><input type="submit" value="Show More" className="btn" /></a>
      </div>
    </section>
  );
};

export default Services;