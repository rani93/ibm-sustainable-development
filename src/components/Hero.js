import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import image1 from '../assets/plantimages/bg1.jpg';
import image2 from '../assets/plantimages/bg2.png';
import image3 from '../assets/plantimages/bg3.jpg';
import image4 from '../assets/plantimages/bg4.jpg';

function Hero() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 4000,
      });
    }
  }, []);

  return (
    <section id="home" className="home">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
            <div className="carousel-content">
              <h1>PLANTING TREES IS PLANTING HOPE</h1>
              <h3>Let's grow a greener tomorrow</h3>
            </div>
          </div>
          <div className="carousel-item" style={{backgroundColor: "#F6BB42"}}>
            <img src={image2} className="d-block w-100" alt="..." />
            <div className="carousel-content">
              <h1>THE EARTH LAUGHS IN FLOWERS AND TREES</h1>
              <h3>Be part of the joy</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
            <div className="carousel-content">
              <h1>EVERY TREE PLANTED IS A GIFT TO THE FUTURE</h1>
              <h3>Join us in giving</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="..." />
            <div className="carousel-content">
              <h1>PLANT A TREE AND WATCH IT GROW</h1>
              <h3>Leave a legacy of green</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;