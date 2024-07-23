import React from "react";

function Booking() {
    return (
<section className="contact">

<div
  className="container-xxl py-5 wow fadeInUp"
  data-wow-delay="0.1s"
  id="contact"
>
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center px-3">Book A Plant</h6>
      <h1 className="mb-5">Online Booking</h1>
    </div>
    <div className="booking p-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-4 text-white">
          <h6 className="text-white text-uppercase">Know More</h6>
          <p className="mb-4">
            Booking a tree planting is easy and helps contribute to a greener
            planet. Please fill out the form with your details to schedule your
            tree planting. We’ll take care of the rest, ensuring your chosen
            trees are planted and nurtured to grow strong and healthy.
          </p>
          <p className="mb-4">
            If you require any assistance or have specific inquiries, feel free
            to reach out to our dedicated support team. Thank you for playing a
            vital role in our environmental mission!
          </p>
        </div>
        <div className="col-md-8">
          <form
            method="POST"
            action=""
            id="contact-form"
            className="contactform"
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-transparent"
                    id="name"
                    placeholder="Your Name"
                    style={{ color: "white" }}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-transparent"
                    id="email"
                    placeholder="Your Email"
                    style={{ color: "white" }}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="mobileno"
                    className="form-control bg-transparent"
                    id="mobileno"
                    placeholder="Enter Whatsapp No"
                    maxLength={10}
                    pattern="[6789][0-9]{9}"
                    required=""
                    style={{ color: "white" }}
                  />
                  <label htmlFor="mobileno">Whatsapp No</label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    name="datetimes"
                    className="form-control bg-transparent datetimepicker-input"
                    id="datetimes"
                    placeholder="Date & Time"
                    data-target="#date3"
                    data-toggle="datetimepicker"
                    style={{ color: "white" }}
                  />
                  <label htmlFor="datetimes">Date &amp; Time</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    name="plant"
                    className="form-control bg-transparent"
                    id="plant"
                    placeholder="Enter Your Selected plant"
                    style={{ color: "white" }}
                  />
                  <label htmlFor="plant">Type of Plant</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    name="message"
                    className="form-control bg-transparent"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100, color: "white"}}
                    defaultValue={""}
    
                  />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-light w-100 py-3"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}

export default Booking;