import React from 'react';
import useraccount from '../assets/plantimages/useraccount.png';
import treetracking from '../assets/plantimages/treetracking.jpg';
import reward from '../assets/plantimages/reward.jpg';
import education from '../assets/plantimages/education.jpg';

function Features() {
  return (
    <section className="features">
      <div className="container-xxl py-5" id="features">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center px-3">Features</h6>
      <h1 className="mb-5">We Provide</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="features-item">
          <div className="overflow-hidden">
            <img
              className="img-fluid feature-img"
              src={useraccount}
              alt=""
            />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-8px", marginBottom: "-14px" }}
          >
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-seedling" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fas fa-book-reader" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-location-crosshairs" />
            </a>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">User Account &amp; Profiles</h5>
            <small>
              Track donations and tree progress with a personal account and
              dashboard.
            </small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.3s">
        <div className="features-item">
          <div className="overflow-hidden">
            <img
              className="img-fluid feature-img"
              src={treetracking}
              alt=""
            />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-8px", marginBottom: "-14px" }}
          >
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-seedling" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fas fa-book-reader" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-location-crosshairs" />
            </a>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">Complete Tree Tracking</h5>
            <small>
              View each tree's exact location and receive updates with photos
              and growth reports.
            </small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.5s">
        <div className="features-item">
          <div className="overflow-hidden">
            <img
              className="img-fluid feature-img"
              src={reward}
              alt=""
            />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-8px", marginBottom: "-14px" }}
          >
            <a className="btn btn-square mx-1" href="">
              <i className="fa-sharp fa-solid fa-seedling" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fas fa-book-reader" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-location-crosshairs" />
            </a>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">Gamification &amp; Rewards</h5>
            <small>
              Earn badges and compete on a leaderboard for milestones and
              contributions.
            </small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.7s">
        <div className="features-item">
          <div className="overflow-hidden">
            <img
              className="img-fluid feature-img"
              src={education}
              alt=""
            />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-8px", marginBottom: "-14px" }}
          >
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-seedling" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fas fa-book-reader" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fa-solid fa-location-crosshairs" />
            </a>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">Educational Resources</h5>
            <small>
              Participate in online workshops about tree planting and
              sustainability.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default Features;
