export default function OurStory() {
  return (
    <div className="our-story">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">our story</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Transforming industries <span>with innovative efficient solutions</span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Our Story Header Image Start */}
            <div className="our-story-header-img">
              <figure className="reveal image-anime">
                <img src="/images/our-story-header-img-1.jpg" alt="" />
              </figure>

              <figure className="reveal image-anime">
                <img src="/images/our-story-header-img-2.jpg" alt="" />
              </figure>
            </div>
            {/* Our Story Header Image End */}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Our Story Image Start */}
            <div className="our-story-img">
              <figure className="reveal image-anime">
                <img src="/images/our-story-img.jpg" alt="" />
              </figure>
            </div>
            {/* Our Story Image End */}
          </div>

          <div className="col-lg-6">
            <div className="our-story-content">
              <div className="our-story-content-body">
                <p>We specialize in revolutionizing industries by delivering innovative, efficient solutions that enhance productivity and streamline processes. Through advanced technologies, precision engineering, and sustainable practices.</p>
              </div>

              <div className="our-story-counters">
                {/* Our Story Counter Start */}
                <div className="our-story-counter">
                  <h3><span className="counter">10</span>k+</h3>
                  <p>completed project</p>
                </div>
                {/* Our Story Counter End */}

                {/* Our Story Counter Start */}
                <div className="our-story-counter">
                  <h3><span className="counter">15</span>+</h3>
                  <p>satisfied customer</p>
                </div>
                {/* Our Story Counter End */}

                {/* Our Story Counter Start */}
                <div className="our-story-counter">
                  <h3><span className="counter">10</span>k+</h3>
                  <p>years of mastery</p>
                </div>
                {/* Our Story Counter End */}
              </div>

              {/* Our Story Intro Video Start */}
              <div className="our-story-intro-video">
                {/* Our Story Client Image Start */}
                <div className="our-story-client-img">
                  {/* Client Image Start */}
                  <div className="client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/story-client-img-1.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Client Image End */}

                  {/* Client Image Start */}
                  <div className="client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/story-client-img-2.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Client Image End */}

                  {/* Client Image Start */}
                  <div className="client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/story-client-img-3.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Client Image End */}
                </div>
                {/* Our Story Client Image End */}

                {/* Intro Video Box Start */}
                <div className="intro-video-box">
                  {/* Video Play Button Start */}
                  <div className="video-play-button">
                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <p>watch intro</p>
                  </div>
                  {/* Video Play Button End */}
                </div>
                {/* Intro Video Box End */}
              </div>
              {/* Our Story Intro Video End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
