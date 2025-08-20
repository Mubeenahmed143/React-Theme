import React from 'react';
// import './pro_detail.css';

const ProjectDetail = () => {
  const handleLike = () => {
    const likeIcon = document.getElementById("likeIcon");
    const likeCount = document.getElementById("likeCount");
    const likeBtn = document.getElementById("likeButton");

    let count = parseInt(likeCount.textContent, 10);
    const liked = likeIcon.classList.contains("fas");

    if (!liked) {
      likeIcon.classList.replace("far", "fas");
      likeCount.textContent = count + 1;
      likeBtn.classList.add("active");
    } else {
      likeIcon.classList.replace("fas", "far");
      likeCount.textContent = count - 1;
      likeBtn.classList.remove("active");
    }
  };

  return (
    <section className="popular-categories">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="project-wrapper">
              {/* Author */}
              <div className="d-flex align-items-center mb-3 gap-3">
                <img
                  src="/images/icon.png"
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: "38px", height: "38px" }}
                />
                <strong>Mubeen Ahmed</strong>
              </div>

              {/* Project image with overlay */}
              <div className="video-container mb-4">
                <img src="/images/ambulance.png" alt="Project Screenshot" />
                <div className="overlay">
                  <a
                    href="https://hawari.pk/LifeLink/index.php"
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
                <h3 className="me-auto m-0" style={{ color: "var(--main-color)" }}>
                  Life Link
                </h3>

                <button className="btn btn-sm" id="likeButton" onClick={handleLike}>
                  <i id="likeIcon" className="far fa-heart"></i>
                  <span id="likeCount">200</span>
                </button>
              </div>

              {/* Description */}
              <p>
                Life Link provides emergency ambulance services at your fingertips!
                Book an e-ambulance instantly through our platform for urgent medical transport.
                With quick response times and reliable service, we ensure patients reach hospitals safely and on time.
                Trust Life Link for 24/7 emergency assistance across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
