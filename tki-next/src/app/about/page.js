
import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'About Us | Toplax - Factory & Industry HTML Template',
  description: 'About Toplax Factory & Industry',
}

export default function About() {
  return (
    <>
      <PageHeader title={<>About <span>Us</span></>} activePage="about us" />

      {/* About Us Start */}
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
      {/* About Us End */}

      {/* Our Mission Vision Section Start */}
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
      {/* Our Mission Vision Section End */}

      {/* Our History Section Start */}
      <div className="our-history">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our history</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Foundation of excellences <span>in industry</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Built on a legacy of quality and innovation, we have established a strong foundation in the industrial sector, consistently delivering reliable solutions that drive progress and set industry standards.</p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Our History Box Start */}
              <div className="our-history-box tab-content wow fadeInUp" data-wow-delay="0.25s" id="historybox">
                {/* Sidebar Our History Nav start */}
                <div className="our-history-nav">
                  <ul className="nav nav-tabs" id="historyTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="1920-tab" data-bs-toggle="tab" data-bs-target="#1920" type="button" role="tab" aria-selected="true">In 1920 - Planning</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="1922-tab" data-bs-toggle="tab" data-bs-target="#1922" type="button" role="tab" aria-selected="false">In 1922 - Journey Started</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="1925-tab" data-bs-toggle="tab" data-bs-target="#1925" type="button" role="tab" aria-selected="false">In 1925 - Journey Progress</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="1930-tab" data-bs-toggle="tab" data-bs-target="#1930" type="button" role="tab" aria-selected="false">In 1930 - Global Reach</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="1940-tab" data-bs-toggle="tab" data-bs-target="#1940" type="button" role="tab" aria-selected="false">In 1940 - Industry Leadership</button>
                    </li>
                  </ul>
                </div>
                {/* Sidebar Our History Nav End */}

                {/* Our History Item Start */}
                <div className="our-history-item tab-pane fade show active" id="1920" role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Our History Content Start */}
                      <div className="our-history-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h2 className="text-anime-style-2" data-cursor="-opaque">Company <span>started</span></h2>
                          <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                        </div>
                        {/* Section Title End */}

                        <div className="our-history-list">
                          <ul>
                            <li>Quality Control System</li>
                            <li>Building Quality Industrial</li>
                            <li>Environmental Responsibility</li>
                            <li>Building Quality Industrial</li>
                          </ul>
                        </div>
                      </div>
                      {/* Our History Content End */}
                    </div>

                    <div className="col-lg-6">
                      {/* Our History Image Start */}
                      <div className="our-history-image">
                        <figure className="image-anime">
                          <img src="/images/history-image-1.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Our History Image End */}
                    </div>
                  </div>
                </div>
                {/* Our History Item End */}

                {/* Our History Item Start */}
                <div className="our-history-item tab-pane fade" id="1922" role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Our History Content Start */}
                      <div className="our-history-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h2 className="text-anime-style-2" data-cursor="-opaque">Journey <span>started</span></h2>
                          <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                        </div>
                        {/* Section Title End */}

                        <div className="our-history-list">
                          <ul>
                            <li>Quality Control System</li>
                            <li>Building Quality Industrial</li>
                            <li>Environmental Responsibility</li>
                            <li>Building Quality Industrial</li>
                          </ul>
                        </div>
                      </div>
                      {/* Our History Content End */}
                    </div>

                    <div className="col-lg-6">
                      {/* Our History Image Start */}
                      <div className="our-history-image">
                        <figure className="image-anime">
                          <img src="/images/history-image-1.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Our History Image End */}
                    </div>
                  </div>
                </div>
                {/* Our History Item End */}

                {/* Our History Item Start */}
                <div className="our-history-item tab-pane fade" id="1925" role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Our History Content Start */}
                      <div className="our-history-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h2 className="text-anime-style-2" data-cursor="-opaque">Journey <span>progress</span></h2>
                          <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                        </div>
                        {/* Section Title End */}

                        <div className="our-history-list">
                          <ul>
                            <li>Quality Control System</li>
                            <li>Building Quality Industrial</li>
                            <li>Environmental Responsibility</li>
                            <li>Building Quality Industrial</li>
                          </ul>
                        </div>
                      </div>
                      {/* Our History Content End */}
                    </div>

                    <div className="col-lg-6">
                      {/* Our History Image Start */}
                      <div className="our-history-image">
                        <figure className="image-anime">
                          <img src="/images/history-image-1.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Our History Image End */}
                    </div>
                  </div>
                </div>
                {/* Our History Item End */}

                {/* Our History Item Start */}
                <div className="our-history-item tab-pane fade" id="1930" role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Our History Content Start */}
                      <div className="our-history-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h2 className="text-anime-style-2" data-cursor="-opaque">Global <span>reach</span></h2>
                          <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                        </div>
                        {/* Section Title End */}

                        <div className="our-history-list">
                          <ul>
                            <li>Quality Control System</li>
                            <li>Building Quality Industrial</li>
                            <li>Environmental Responsibility</li>
                            <li>Building Quality Industrial</li>
                          </ul>
                        </div>
                      </div>
                      {/* Our History Content End */}
                    </div>

                    <div className="col-lg-6">
                      {/* Our History Image Start */}
                      <div className="our-history-image">
                        <figure className="image-anime">
                          <img src="/images/history-image-1.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Our History Image End */}
                    </div>
                  </div>
                </div>
                {/* Our History Item End */}

                {/* Our History Item Start */}
                <div className="our-history-item tab-pane fade" id="1940" role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Our History Content Start */}
                      <div className="our-history-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h2 className="text-anime-style-2" data-cursor="-opaque">Industry <span>leader</span></h2>
                          <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                        </div>
                        {/* Section Title End */}

                        <div className="our-history-list">
                          <ul>
                            <li>Quality Control System</li>
                            <li>Building Quality Industrial</li>
                            <li>Environmental Responsibility</li>
                            <li>Building Quality Industrial</li>
                          </ul>
                        </div>
                      </div>
                      {/* Our History Content End */}
                    </div>

                    <div className="col-lg-6">
                      {/* Our History Image Start */}
                      <div className="our-history-image">
                        <figure className="image-anime">
                          <img src="/images/history-image-1.jpg" alt="" />
                        </figure>
                      </div>
                      {/* Our History Image End */}
                    </div>
                  </div>
                </div>
                {/* Our History Item End */}
              </div>
              {/* Our History Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our History Section End */}

      {/* What We Do Start */}
      <div className="what-we-do">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-6">
              {/* What We Do Content Start */}
              <div className="what-we-do-content">
                {/* Section Title Start */}
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">what we do</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Innovative factory and industry <span>solutions today</span></h2>
                </div>
                {/* Section Title End */}

                {/* What We Do List Start */}
                <div className="what-we-do-list">
                  <div className="what-we-do-list-box-1">
                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-1.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>automation solutions</h3>
                        <p>Streamlining processes through cutting-edge technology.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}

                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-2.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>quality control</h3>
                        <p>Ensuring product excellence through rigorous testing.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}
                  </div>

                  <div className="what-we-do-list-box-2">
                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-3.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>process engineering</h3>
                        <p>Ensuring product excellence through rigorous testing.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}

                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-4.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>product development</h3>
                        <p>Streamlining processes through cutting-edge technology.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}
                  </div>
                </div>
                {/* What We Do List Start */}

                {/* What We Do Footer Start */}
                <div className="what-we-do-footer">
                  <p>Lorem ipsum is a placeholder text commonly used <span>to demonstrate</span></p>
                </div>
                {/* What We Do Footer End */}
              </div>
              {/* What We Do Content End */}
            </div>

            <div className="col-lg-6">
              {/* What We Do Image Start */}
              <div className="what-we-do-image">
                <figure className="image-anime">
                  <img src="/images/what-we-do-image.jpg" alt="" />
                </figure>

                {/* Contact Now Circle Start */}
                <div className="contact-now-circle">
                  <img src="/images/contact-now-circle.svg" alt="" />
                </div>
                {/* Contact Now Circle End */}
              </div>
              {/* What We Do Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* What We Do End */}

      {/* Our Features Section Start */}
      <div className="our-features">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our key feature</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Core strengths in <span>industrial innovation</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Our expertise in industrial innovation combines advanced technology, sustainable practices, and a skilled workforce to deliver efficient, future-ready solutions that drive industry progress.</p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row no-gutters">
            {/* Our Features Boxes Start */}
            <div className="our-features-boxes">
              {/* Our Features Item Start */}
              <div className="our-features-item">
                <div className="icon-box">
                  <img src="/images/icon-features-1.svg" alt="" />
                </div>
                <div className="features-item-content">
                  <h3>Advanced Technology Integration</h3>
                  <p>We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.</p>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item">
                <div className="icon-box">
                  <img src="/images/icon-features-2.svg" alt="" />
                </div>
                <div className="features-item-content">
                  <h3>Uncompromising Quality Standards</h3>
                  <p>We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.</p>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item">
                <div className="icon-box">
                  <img src="/images/icon-features-3.svg" alt="" />
                </div>
                <div className="features-item-content">
                  <h3>Continuous Innovation and R&D</h3>
                  <p>We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.</p>
                </div>
              </div>
              {/* Our Features Item End */}

              {/* Our Features Item Start */}
              <div className="our-features-item features-image-box">
                <figure className="image-anime">
                  <img src="/images/features-box-image.jpg" alt="" />
                </figure>
              </div>
              {/* Our Features Item End */}
            </div>
            {/* Our Features Boxes End */}
          </div>
        </div>
      </div>
      {/* Our Features Section End */}

      {/* Our Process Section Start */}
      <div className="our-process">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our process</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Streamlined processes <span>for optimal efficiency</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.</p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Process Image Start */}
              <div className="our-process-image">
                <figure className="image-anime reveal">
                  <img src="/images/our-process-image.jpg" alt="" />
                </figure>
              </div>
              {/* Our Process Image End */}
            </div>

            <div className="col-lg-6">
              {/* Process Step Box Start */}
              <div className="process-steps-box">
                {/* Process Step Item Start */}
                <div className="process-step-item wow fadeInUp">
                  <div className="process-step-no">
                    <h2>01</h2>
                  </div>
                  <div className="process-step-content">
                    <h3>understanding your needs</h3>
                    <p>We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.</p>
                  </div>
                </div>
                {/* Process Step Item End */}

                {/* Process Step Item Start */}
                <div className="process-step-item active wow fadeInUp" data-wow-delay="0.25s">
                  <div className="process-step-no">
                    <h2>02</h2>
                  </div>
                  <div className="process-step-content">
                    <h3>design and planning</h3>
                    <p>Our team collaborates to create detailed project plans, ensuring all aspects of the process.</p>
                  </div>
                </div>
                {/* Process Step Item End */}

                {/* Process Step Item Start */}
                <div className="process-step-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="process-step-no">
                    <h2>03</h2>
                  </div>
                  <div className="process-step-content">
                    <h3>implementation</h3>
                    <p>Utilizing advanced technologies and skilled personnel, we execute the project</p>
                  </div>
                </div>
                {/* Process Step Item End */}
              </div>
              {/* Process Step Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Process Section End */}

      {/* Our Team Section Start */}
      <div className="our-team">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our team</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Core strengths in <span>industrial innovation</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Button Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                <Link href="/team" className="btn-default"><span>all member</span></Link>
              </div>
              {/* Section Button End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp">
                {/* Team Image Start */}
                <div className="team-image">
                  <div data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/team-1.jpg" alt="" />
                    </figure>
                  </div>

                  {/* Team Social Icon Start */}
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3><Link href="#">ronald richards</Link></h3>
                  <p>manufacturing executive</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Team Image Start */}
                <div className="team-image">
                  <div data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/team-2.jpg" alt="" />
                    </figure>
                  </div>

                  {/* Team Social Icon Start */}
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3><Link href="#">brooklyn simmons</Link></h3>
                  <p>industrial engineer</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp" data-wow-delay="0.5s">
                {/* Team Image Start */}
                <div className="team-image">
                  <div data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/team-3.jpg" alt="" />
                    </figure>
                  </div>

                  {/* Team Social Icon Start */}
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3><Link href="#">cameron williamson</Link></h3>
                  <p>production supervisor</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp" data-wow-delay="0.5s">
                {/* Team Image Start */}
                <div className="team-image">
                  <div data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/team-4.jpg" alt="" />
                    </figure>
                  </div>

                  {/* Team Social Icon Start */}
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3><Link href="#">darlene robertson</Link></h3>
                  <p>project manager</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Team Section End */}

      {/* Our Testimonial Section Start */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Testimonial Image Start */}
              <div className="our-testimonial-image">
                <figure className="image-anime reveal">
                  <img src="/images/testimonial-image.jpg" alt="" />
                </figure>
              </div>
              {/* Our Testimonial Image End */}
            </div>

            <div className="col-lg-6">
              {/* Our Testimonial Content Start */}
              <div className="our-testimonial-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">Our client say</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">What our satisfied clients <span>are saying</span></h2>
                </div>
                {/* Section Title End */}

                {/* Testimonial Slider Start */}
                <div className="testimonial-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>"The team&apos;s attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"</p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <img src="/images/author-1.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>Brooklyn Simmons</h3>
                              <p>Homeowner</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}

                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>"The team&apos;s attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"</p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <img src="/images/author-2.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>albert flores</h3>
                              <p>senior engineer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                    <div className="testimonial-btn">
                      <div className="testimonial-button-prev"></div>
                      <div className="testimonial-button-next"></div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
              {/* Our Testimonial Content End */}
            </div>

            <div className="col-lg-12">
              {/* Agency Support Slider Start */}
              <div className="testimonial-company-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="/images/company-logo-1.svg" alt="" />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="/images/company-logo-2.svg" alt="" />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="/images/company-logo-3.svg" alt="" />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="/images/company-logo-4.svg" alt="" />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="/images/company-logo-5.svg" alt="" />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <img src="/images/company-logo-1.svg" alt="" />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}
                  </div>
                </div>
              </div>
              {/* Agency Support Slider End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial Section End */}

      {/* Our Faqs Section Start */}
      <div className="our-faqs">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-5">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">FAQs</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-7">
              {/* Section Button Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                <Link href="#" className="btn-default"><span>all FAQs</span></Link>
              </div>
              {/* Section Button End */}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Faqs Images Start */}
              <div className="our-faqs-images">
                {/* Our Faqs Image Start */}
                <div className="our-faqs-img">
                  <figure className="image-anime">
                    <img src="/images/our-faqs-image.jpg" alt="" />
                  </figure>
                </div>
                {/* Our Faqs Image End */}

                {/* Faqs Image Cta Box Start */}
                <div className="faqs-img-cta-box">
                  <ul>
                    <li><a href="#"><img src="/images/icon-phone-accent.svg" alt="" /> +91 1236547890</a></li>
                    <li><a href="#"><img src="/images/icon-mail-accent.svg" alt="" /> info@domainname.com</a></li>
                  </ul>
                </div>
                {/* Faqs Image Cta Box End */}
              </div>
              {/* Our Faqs Images End */}
            </div>

            <div className="col-lg-6">
              <div className="our-faq-section">
                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="faqaccordion">
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What industries do you serve?
                      </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How do you ensure product quality?
                      </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        What sustainability practices do you follow?
                      </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Do you offer customized solutions?
                      </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        How do you handle safety in the workplace?
                      </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                </div>
                {/* FAQ Accordion End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Faqs Section End */}
    </>
  );
}
