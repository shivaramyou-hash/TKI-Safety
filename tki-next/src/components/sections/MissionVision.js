export default function MissionVision() {
  return (
    <div className="our-mission-vision">
      <div className="mission-vision-bg parallaxie">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">our approach</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Empowering sustainable <span>growth in industry</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content dark-section wow fadeInUp" data-wow-delay="0.25s">
                <p>We drive sustainable solutions in factory and industrial settings, focusing on efficiency, innovation, and environmental responsibility to support long-term growth.</p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Mission Vision Box Start */}
            <div className="mission-vision-box tab-content wow fadeInUp" data-wow-delay="0.25s" id="missionvision">
              {/* Sidebar Mission Vision Nav start */}
              <div className="mission-vision-nav">
                <ul className="nav nav-tabs" id="mvTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="remodeling-tab" data-bs-toggle="tab" data-bs-target="#mission" type="button" role="tab" aria-selected="true"><img src="/images/icon-mission-nav.svg" alt="" /> our mission</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="installation-tab" data-bs-toggle="tab" data-bs-target="#vision" type="button" role="tab" aria-selected="false"><img src="/images/icon-vision-nav.svg" alt="" /> our vision</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="value-tab" data-bs-toggle="tab" data-bs-target="#value" type="button" role="tab" aria-selected="false"><img src="/images/icon-value-nav.svg" alt="" /> our value</button>
                  </li>
                </ul>
              </div>
              {/* Sidebar Mission Vision Nav End */}

              {/* Mission Vision Item Start */}
              <div className="mission-vision-item tab-pane fade show active" id="mission" role="tabpanel">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* Mission Vision Content Start */}
                    <div className="mission-vision-content">
                      <div className="mission-vision-content-header">
                        <p>Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.</p>
                      </div>

                      <div className="mission-vision-content-list">
                        <ul>
                          <li>Sustainable Manufacturing Practices</li>
                          <li>Advanced Technology Integration</li>
                          <li>Community Environmental Responsibility</li>
                          <li>Innovation-Driven Growth</li>
                        </ul>
                      </div>
                    </div>
                    {/* Mission Vision Content End */}
                  </div>

                  <div className="col-lg-6">
                    {/* Mission Vision Image Start */}
                    <div className="mission-vision-image">
                      <figure className="image-anime">
                        <img src="/images/mission-image.jpg" alt="" />
                      </figure>
                    </div>
                    {/* Mission Vision Image End */}
                  </div>
                </div>
              </div>
              {/* Mission Vision Item End */}

              {/* Mission Vision Item Start */}
              <div className="mission-vision-item tab-pane fade" id="vision" role="tabpanel">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* Mission Vision Content Start */}
                    <div className="mission-vision-content">
                      <div className="mission-vision-content-header">
                        <p>Our vision is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.</p>
                      </div>

                      <div className="mission-vision-content-list">
                        <ul>
                          <li>Sustainable Manufacturing Practices</li>
                          <li>Advanced Technology Integration</li>
                          <li>Community Environmental Responsibility</li>
                          <li>Innovation-Driven Growth</li>
                        </ul>
                      </div>
                    </div>
                    {/* Mission Vision Content End */}
                  </div>

                  <div className="col-lg-6">
                    {/* Mission Vision Image Start */}
                    <div className="mission-vision-image">
                      <figure className="image-anime">
                        <img src="/images/vision-image.jpg" alt="" />
                      </figure>
                    </div>
                    {/* Mission Vision Image End */}
                  </div>
                </div>
              </div>
              {/* Mission Vision Item End */}

              {/* Mission Vision Item Start */}
              <div className="mission-vision-item tab-pane fade" id="value" role="tabpanel">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* Mission Vision Content Start */}
                    <div className="mission-vision-content">
                      <div className="mission-vision-content-header">
                        <p>Our value is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.</p>
                      </div>

                      <div className="mission-vision-content-list">
                        <ul>
                          <li>Sustainable Manufacturing Practices</li>
                          <li>Advanced Technology Integration</li>
                          <li>Community Environmental Responsibility</li>
                          <li>Innovation-Driven Growth</li>
                        </ul>
                      </div>
                    </div>
                    {/* Mission Vision Content End */}
                  </div>

                  <div className="col-lg-6">
                    {/* Mission Vision Image Start */}
                    <div className="mission-vision-image">
                      <figure className="image-anime">
                        <img src="/images/value-image.jpg" alt="" />
                      </figure>
                    </div>
                    {/* Mission Vision Image End */}
                  </div>
                </div>
              </div>
              {/* Mission Vision Item End */}
            </div>
            {/* Mission Vision Box End */}
          </div>
        </div>
      </div>
    </div>
  );
}
