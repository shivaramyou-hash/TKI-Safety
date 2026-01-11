export default function Features() {
  return (
    <div className="our-features">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">our key feature</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Empowering industry with <span>key features</span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
              <p>Driving industrial success through innovation, efficiency, and sustainability. Our key features empower businesses with advanced solutions, ensuring growth and operational excellence.</p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Our Features Box Start */}
            <div className="our-features-box">
              {/* Our Features Item Start */}
              <div className="our-features-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-our-features-1.svg" alt="" />
                </div>
                <div className="our-features-content">
                  <h3>Best Quality Support</h3>
                  <p>Exceptional support ensuring reliability and satisfaction.</p>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="icon-box">
                  <img src="/images/icon-our-features-2.svg" alt="" />
                </div>
                <div className="our-features-content">
                  <h3>Smart Technology</h3>
                  <p>Innovative solutions for efficient, automated operations.</p>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item features-image-box">
                <div className="our-features-image">
                  <figure className="image-anime reveal">
                    <img src="/images/our-features-img.jpg" alt="" />
                  </figure>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="icon-box">
                  <img src="/images/icon-our-features-3.svg" alt="" />
                </div>
                <div className="our-features-content">
                  <h3>Ontime Delivery</h3>
                  <p>Consistent, timely service you can always count on.</p>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item wow fadeInUp" data-wow-delay="0.75s">
                <div className="icon-box">
                  <img src="/images/icon-our-features-4.svg" alt="" />
                </div>
                <div className="our-features-content">
                  <h3>Certified Engineers</h3>
                  <p>Expert professionals delivering top-tier technical solutions.</p>
                </div>
              </div>
              {/* Our Features Item End */}
            </div>
            {/* Our Features Box End */}
          </div>
        </div>
      </div>
    </div>
  );
}
