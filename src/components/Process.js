import React from 'react';

function Process() {
    return (
      <section className="process" id="process">

  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center px-3">Process</h6>
        <h1 className="mb-5">3 Easy Steps</h1>
      </div>
      <div className="row gy-5 gx-4 justify-content-center">
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-circle-dollar-to-slot fa-3x text-white" />
            </div>
            <h5 className="mt-4">Donate</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0" style={{ textAlign: "justify" }}>
              Choose how many trees with their respective types you would like
              to plant and make your contribution to support our initiative.
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-tree fa-3x text-white" />
            </div>
            <h5 className="mt-4">We Plant</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0" style={{ textAlign: "justify" }}>
              Our skilled team plants the trees in thoughtfully chosen
              locations, ensuring they have the best chance for healthy growth
              and long-term sustainability.
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-location-dot fa-3x text-white" />
            </div>
            <h5 className="mt-4">Track</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0" style={{ textAlign: "justify" }}>
              Stay connected with regular updates on the growth and health of
              your trees. Each tree is geotagged, so you can see its exact
              location and monitor its progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="card border-primary mb-3 wow fadeInLeftBig"
    data-wow-delay="1.5s"
    style={{ maxWidth: "83%", margin: "auto" }}
  >
    <div className="card-header">
      <i className="fa-solid fa-truck-fast text-color" />
    </div>
    <div className="card-body text-primary">
      <h5 className="card-title">So why wait?</h5>
      <p className="card-text" style={{ color: "rgb(0, 228, 0)" }}>
        Book your tree planting today, make your contribution online, and join
        us in making a positive impact on the environment!
      </p>
    </div>
  </div>
      </section>
  );
}

export default Process;