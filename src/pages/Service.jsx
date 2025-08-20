import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading"><span>Services</span></h2>

      <div className="services-container">
        <div className="services-box">
          <i className='bx bx-code-alt'></i>
          <h3>Website Development</h3>
          <p>I build fast, responsive, and fully functional websites using HTML, CSS, JavaScript, PHP, and SQL.</p>
          <a href="/#contact" className="btn">Contact Me</a>
        </div>

        <div className="services-box">
          <i className='bx bx-paint'></i>
          <h3>Website Designing</h3>
          <p>I design visually appealing and user-friendly web interfaces using modern UI/UX principles.</p>
          <a href="/#contact" className="btn">Contact Me</a>
        </div>

        <div className="services-box">
          <i className='bx bx-mobile'></i>
          <h3>Mobile App Development</h3>
          <p>I develop cross-platform mobile apps using Flutter and Dart with Firebase or MongoDB as backend.</p>
          <a href="/#contact" className="btn">Contact Me</a>
        </div>

        <div className="services-box">
          <i className='bx bx-customize'></i>
          <h3>Customizing Websites</h3>
          <p>I modify, upgrade, and enhance existing websites to meet specific business needs and branding.</p>
          <a href="/#contact" className="btn">Contact Me</a>
        </div>

        <div className="services-box">
          <i className='bx bx-cog'></i>
          <h3>Website Management</h3>
          <p>I maintain and manage websites, ensuring smooth updates, backups, SEO optimization and performance.</p>
          <a href="/#contact" className="btn">Contact Me</a>
        </div>

        <div className="services-box">
          <i className='bx bx-code-curly'></i>
          <h3>Full Stack Development</h3>
          <p>With knowledge of DotNet MVC, PHP, JavaScript, Firebase & MongoDB, I handle frontend + backend projects.</p>
          <a href="/#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
