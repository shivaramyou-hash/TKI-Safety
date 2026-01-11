import Link from 'next/link';

export default function Team() {
  return (
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
  );
}
