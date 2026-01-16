import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Image Start */}
            <div className="about-image">
              {/* About Image Start */}
              <div className="about-img-1">
                <figure className="image-anime reveal">
                  <img src="/images/about-img-1.jpg" alt="" />
                </figure>
              </div>
              {/* About Image End */}

              {/* About Image Start */}
              <div className="about-img-2">
                <figure className="image-anime reveal">
                  <img src="/images/about-img-2.jpg" alt="" />
                </figure>
              </div>
              {/* About Image End */}

              {/* Company Experience Start */}
              <div className="company-experience">
                <div className="company-experience-counter">
                  <h2><span className="counter">25</span>+</h2>
                </div>
                <div className="company-experience-content">
                  <p>years of experience</p>
                </div>
              </div>
              {/* Company Experience End */}
            </div>
            {/* About Us Image End */}
          </div>

          <div className="col-lg-6">
            {/* About Content Start */}
            <div className="about-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Building quality through <span>industrial innovation</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.</p>
              </div>
              {/* Section Title End */}

              <div className="about-content-body">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    {/* About List Btn Box Start */}
                    <div className="about-list-btn">
                      {/* About Content List Start */}
                      <div className="about-content-list wow fadeInUp" data-wow-delay="0.5s">
                        <ul>
                          <li>sustainable manufacturing</li>
                          <li>advanced automation</li>
                          <li>efficient production processes</li>
                          <li>reliable delivery services</li>
                        </ul>
                      </div>
                      {/* About Content List End */}

                      {/* About Content Btn Start */}
                      <div className="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                        <Link href="/contact" className="btn-default"><span>contact us</span></Link>
                      </div>
                      {/* About Content Btn End */}
                    </div>
                    {/* About List Btn Box End */}
                  </div>

                  <div className="col-md-6">
                    {/* About Content Counter Start */}
                    <div className="genuine-rating-counter">
                      {/* About Counter Item Start */}
                      <div className="about-counter-item">
                        <div className="about-counter">
                          <h2><span className="counter">4.9</span></h2>
                        </div>
                        <div className="genuine-rating">
                          <ul>
                            <li>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="genuine-rating-counter-content">
                          <p>15.5K genuine rating</p>
                        </div>
                      </div>
                      {/* About Counter Item End */}
                    </div>
                    {/* About Content Counter End */}
                  </div>
                </div>
              </div>
            </div>
            {/* About Content End */}
          </div>
        </div>
      </div>
    </div>
  );
}
