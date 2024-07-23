import React, { useState } from 'react';

function Service() {
   // State to manage which button is clicked
   const [openSection, setOpenSection] = useState(null);

   // Handler for button clicks
   const handleButtonClick = (sectionId) => {
     setOpenSection(prev => (prev === sectionId ? null : sectionId));
   };
  return (
    <section className="service">
      <div className="container-xxl py-5" id="service">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center px-3">Services</h6>
      <h1 className="mb-5">Our Services</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa-solid fa-seedling text-color mb-4" />
            <h5>Tree Planting</h5>
            <p>
              Our tree planting service enables you to contribute to a greener
              future by selecting the number of trees you wish to plant and
              making a secure donation. Our team plants the
              <span style={{ display: openSection === '1' ? 'none' : 'inline' }}>...</span>
                    <span style={{ display: openSection === '1' ? 'inline' : 'none' }}>
                trees in optimal locations and provides regular updates,
                including geotagged photos, so you can track the growth and
                impact of your contribution.
              </span>
            </p>
            <button
                    className="btn btn-primary rounded-pill py-2 px-4"
                    onClick={() => handleButtonClick('1')}
                  >
                    {openSection === '1' ? 'Read less' : 'Read more'}
                  </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa-solid fa-person text-color mb-4" />
            <h5>Volunteer Opportunities</h5>
            <p>
              Participate in our tree planting events and drives to make a
              direct impact. These opportunities allow you to engage with local
              communities, schools, and organizations,
              <span style={{ display: openSection === '2' ? 'none' : 'inline' }}>...</span>
              <span style={{ display: openSection === '2' ? 'inline' : 'none' }}>
                fostering collaboration and environmental stewardship. Join us
                individually or as a group to help spread awareness and plant
                trees.
              </span>
            </p>
            <button
                    className="btn btn-primary rounded-pill py-2 px-4"
                    onClick={() => handleButtonClick('2')}
                  >
                    {openSection === '2' ? 'Read less' : 'Read more'}
                  </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa-solid fa-school text-color mb-4" />
            <h5>Educational Workshops</h5>
            <p>
              Attend our educational workshops, including webinars and seminars,
              to learn about environmental conservation, sustainability, and the
              importance of trees. We
              <span style={{ display: openSection === '3' ? 'none' : 'inline' }}>...</span>
              <span style={{ display: openSection === '3' ? 'inline' : 'none' }}>
                also collaborate with schools to bring these programs to
                students, inspiring them to take an active role in protecting
                the environment.
              </span>
            </p>
            <button
                    className="btn btn-primary rounded-pill py-2 px-4"
                    onClick={() => handleButtonClick('3')}
                  >
                    {openSection === '3' ? 'Read less' : 'Read more'}
                  </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa-solid fa-building text-color mb-4" />
            <h5>Corporate Sponsorships</h5>
            <p>
              Businesses can support our mission through corporate sponsorships,
              gaining recognition on our website and promotional materials.
              Sponsoring a tree planting drive
              <span style={{ display: openSection === '4' ? 'none' : 'inline' }}>...</span>
              <span style={{ display: openSection === '4' ? 'inline' : 'none' }}>
                demonstrates corporate social responsibility and provides unique
                team-building opportunities for employees.
              </span>
            </p>
            <button
                    className="btn btn-primary rounded-pill py-2 px-4"
                    onClick={() => handleButtonClick('4')}
                  >
                    {openSection === '4' ? 'Read less' : 'Read more'}
                  </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa-brands fa-pagelines text-color mb-4" />
            <h5>Tree Adoption Program</h5>
            <p>
              Adopt a tree and receive regular updates on its growth and health.
              This program allows individuals and families to create a personal
              connection with their tree and makes for a
              <span style={{ display: openSection === '5' ? 'none' : 'inline' }}>...</span>
              <span style={{ display: openSection === '5' ? 'inline' : 'none' }}>
                meaningful gift for special occasions, promoting environmental
                consciousness.
              </span>
            </p>
            <button
                    className="btn btn-primary rounded-pill py-2 px-4"
                    onClick={() => handleButtonClick('5')}
                  >
                    {openSection === '5' ? 'Read less' : 'Read more'}
                  </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa-solid fa-leaf text-color mb-4" />
            <h5>Customized Planting Solutions</h5>
            <p>
              We offer tailored tree planting solutions for communities,
              schools, and organizations. Our team provides expert consultation
              to design and implement projects that meet
              <span style={{ display: openSection === '6' ? 'none' : 'inline' }}>...</span>
              <span style={{ display: openSection === '6' ? 'inline' : 'none' }}>
                specific goals and environments, ensuring successful and
                sustainable tree planting initiatives.
              </span>
            </p>
            <button
                    className="btn btn-primary rounded-pill py-2 px-4"
                    onClick={() => handleButtonClick('6')}
                  >
                    {openSection === '6' ? 'Read less' : 'Read more'}
                  </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default Service;
