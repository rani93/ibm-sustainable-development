import React from 'react';
import image1 from '../assets/plantimages/gallery1.png';
import image2 from '../assets/plantimages/gallery2.jpeg';
import image3 from '../assets/plantimages/gallery3.jpg';
import image4 from '../assets/plantimages/gallery4.jpg';
import image5 from '../assets/plantimages/gallery5.png';
import image6 from '../assets/plantimages/galllery6.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div
  className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
  data-wow-delay="0.1s"
  id="footer"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Company</h4>
        <a className="btn btn-link" href="">
          About Us
        </a>
        <a className="btn btn-link" href="">
          Contact Us
        </a>
        <a className="btn btn-link" href="">
          Privacy Policy
        </a>
        <a className="btn btn-link" href="">
          Terms &amp; Condition
        </a>
        <a className="btn btn-link" href="">
          FAQs &amp; Help
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Contact</h4>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt me-3" />
          Ghaziabad, India
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt me-3" />
          +91 XXXXXXXXXX
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope me-3" />
          plant@gmail.com
        </p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-youtube" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Gallery</h4>
        <div className="row g-2 pt-2">
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1 gallery-img"
              src={image1}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={image2}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={image3}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={image4}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={image5}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={image6}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" id="emaild">
        <h4 className="text-white mb-3">News Letter</h4>
        <p>
          Stay informed with our newsletter! Get the latest updates on tree
          planting initiatives, exclusive environmental tips, and inspiring
          stories of how your contributions make a difference. Sign up today to
          stay connected and be part of our green mission!
        </p>
        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
          <input
            className="form-control border-primary w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
            id="newsletter"
          />
          <label htmlFor="newsletter">News Letter</label>
          <button
            type="button"
            className="btn btn-primary py-0 position-absolute top-0 end-0 mt-1 me-1"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="" href="#">
            Plant
          </a>
          , All Right Reserved. Designed By 
          <a>: </a>
          <a className="" href="">
            HelloWorld3.0
          </a>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <a href="">Home</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;
