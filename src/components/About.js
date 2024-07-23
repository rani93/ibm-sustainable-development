import React from 'react';
import image1 from '../assets/plantimages/img1.jpg';

function About() {
  return (
    <section className="about">
      <div className="container-xxl py-0" id="about" style={{ marginTop: '4.5%' }}>
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: '400px' }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={image1}
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start pe-3">About Us</h6>
              <h1 className="mb-4">
                Welcome to <span className="text-color">Plant</span>
              </h1>
              <p
                className="mb-4"
                style={{ lineHeight: '1', textAlign: 'justify', color: 'rgb(114, 113, 113)' }}
              >
                Our mission is to create a greener future by connecting people
                who want to contribute to tree planting with a dedicated team
                that will plant and maintain the trees. Join us in our journey
                to make the world a better place, one tree at a time.
              </p>
              <p
                className="mb-4"
                style={{ lineHeight: '1', textAlign: 'justify', color: 'rgb(114, 113, 113)' }}
              >
                Trees are vital to our ecosystem. They provide oxygen, improve
                air quality, conserve water, preserve soil, and support
                wildlife. Planting trees is one of the simplest and most
                effective ways to positively impact the environment and combat
                climate change.
              </p>
              <p
                className="mb-4"
                style={{ lineHeight: '1', textAlign: 'justify', color: 'rgb(114, 113, 113)' }}
              >
                We envision a world where everyone takes an active role in
                restoring and preserving nature. By planting trees, we can
                reduce carbon footprints, improve air quality, and create
                greener communities. Together, we can make a significant
                difference.
              </p>
              <p
                className="mb-4"
                style={{ lineHeight: '1', textAlign: 'justify', color: 'rgb(114, 113, 113)' }}
              >
                Become a part of our growing community of environmentally
                conscious individuals and organizations. Whether you're a
                student, a business, or simply someone who cares about the
                planet, there's a place for you in our movement.
              </p>

              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
