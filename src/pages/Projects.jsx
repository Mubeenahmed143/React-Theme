import React from "react";


const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="images/ambulance.png" alt="Life Link" />
          <div className="portfolio-layer">
            <h4>Life Link</h4>
            <a href="/project-detail">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/portfolio6.png" alt="Simplon's Beauty Care" />
          <div className="portfolio-layer">
            <h4>Simplon's Beauty Care</h4>
            <a href="/simplons-project">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/portfolio5.png" alt="Elegance Man's Salon" />
          <div className="portfolio-layer">
            <h4>Elegance Man's Salon</h4>
            <a href="pro_detail.html">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/portfolio6.png" alt="Simplon's Beauty Care" />
          <div className="portfolio-layer">
            <h4>Simplon's Beauty Care</h4>
            <a href="pro_detail.html">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/portfolio5.png" alt="Elegance Man's Salon" />
          <div className="portfolio-layer">
            <h4>Elegance Man's Salon</h4>
            <a href="pro_detail.html">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="images/portfolio6.png" alt="Simplon's Beauty Care" />
          <div className="portfolio-layer">
            <h4>Simplon's Beauty Care</h4>
            <a href="pro_detail.html">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
