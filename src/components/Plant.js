import React from 'react';
import oak from '../assets/plantimages/oak.png';
import maple from '../assets/plantimages/maple.png';
import pine from '../assets/plantimages/pine.jpg';
import birch from '../assets/plantimages/birch.jpg';
import dogwood from '../assets/plantimages/dogwood.png';
import apple from '../assets/plantimages/apple.jpg';
import magnolia from '../assets/plantimages/magnolia.jpg';
import spruce from '../assets/plantimages/spruce.jpg';
import hawthorn from '../assets/plantimages/hawthorn.png';
import lilac from '../assets/plantimages/lilac.png';

function Plant() {
 return (
    <section className="plant">
      <div className="container-xxl py-5 plant" id="plant">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center px-3">Plants</h6>
      <h1 className="mb-5" style={{ marginBottom: "15px !important" }}>
        Popular Plants
      </h1>
    </div>
    <div className="row g-3" id="plant">
      <div className="col-lg-12 col-md-9">
        <div className="row g-3">
          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.1s">
            <a
              className="position-relative d-block overflow-hidden dest"
              href=""
            >
              <img className="img-fluid" src={oak} alt="" />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Oak
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src={maple} alt="" />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Maple
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 wow zoomIn" data-wow-delay="0.5s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid"
                src={pine}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Pine
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 wow zoomIn" data-wow-delay="0.7s">
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={birch}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Birch
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 wow zoomIn" data-wow-delay="0.7s">
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={dogwood}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Dogwood
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.1s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src={apple} alt="" />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Apple
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid"
                src={magnolia}
                alt=""
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Magnolia
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 wow zoomIn" data-wow-delay="0.5s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid"
                src={spruce}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Spruce
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 wow zoomIn" data-wow-delay="0.7s">
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={hawthorn}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Hawthorn
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 wow zoomIn" data-wow-delay="0.7s">
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={lilac}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white3 text-color4 fw-bold position-absolute bottom-0 end-0 m-3 py-0 px-2">
                Lilac
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </section>
  );
}

export default Plant;
