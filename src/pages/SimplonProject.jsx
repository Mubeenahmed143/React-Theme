import React from 'react';


const SimplonProject = () => {
  return (
    <section className="popular-categories">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="project-wrapper">
              {/* Author */}
              <a href="#" style={{ color: 'var(--text-color)' }}>
                <div className="d-flex align-items-center mb-3 gap-3">
                  <img
                    src="/images/icon.png"
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{ width: '38px', height: '38px' }}
                  />
                  <strong>Mubeen Ahmed</strong>
                </div>
              </a>

              {/* Project Image */}
              <div className="video-container mb-4">
                <img src="/images/portfolio6.png" alt="Project Screenshot" />
                <div className="overlay">
                  <a
                    href="https://simplons-beauty-care.netlify.app/"
                    className="btn-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-eye me-2"></i> Live Preview
                  </a>
                </div>
              </div>

              {/* Title & Like */}
              <div className="d-flex align-items-center mb-2 flex-wrap gap-3">
                <h3 className="me-auto m-0" style={{ color: 'var(--main-color)' }}>
                  SIMPLON'S BEAUTY CARE
                </h3>

                <button
                  className="btn btn-sm"
                  id="likeButton"
                  onClick={() => {
                    const icon = document.getElementById('likeIcon');
                    const count = document.getElementById('likeCount');
                    const liked = icon.classList.contains('fas');
                    let number = parseInt(count.textContent, 10);

                    if (!liked) {
                      icon.classList.replace('far', 'fas');
                      count.textContent = number + 1;
                    } else {
                      icon.classList.replace('fas', 'far');
                      count.textContent = number - 1;
                    }
                  }}
                >
                  <i id="likeIcon" className="far fa-heart"></i>
                  <span id="likeCount">150</span>
                </button>
              </div>

              {/* Description */}
              <p>
                SIMPLON’s Beauty care centre is very big shop of cosmetics and accessories in the
                city. With the success of the shop, owner had opened few more shops in the
                different cities also. Simplon product is known for our quality of the service which
                we are providing since 1985. Beauty care is basically the science of beauty
                treatment that involves skin care, hair care, manicure, pedicure, Anti-aging
                treatments, facials, styling and so on. It aims at giving you a well groomed look
                that makes you more attractive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplonProject;
