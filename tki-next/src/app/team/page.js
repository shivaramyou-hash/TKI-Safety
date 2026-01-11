import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: "Our Team - Toplax",
  description: "Our Team - Toplax Factory & Industry",
};

export default function Team() {
  return (
    <>
      <PageHeader title={<>Our <span>team</span></>} activePage="our team" />

      {/* Page Team Start */}
      <div className="page-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp">
                {/* Team Image Start */}
                <div className="team-image">
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-1.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">ronald richards</Link></h3>
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
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-2.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">brooklyn simmons</Link></h3>
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
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-3.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">cameron williamson</Link></h3>
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
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-4.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">darlene robertson</Link></h3>
                  <p>project manager</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp">
                {/* Team Image Start */}
                <div className="team-image">
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-5.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">sophia white</Link></h3>
                  <p>process engineer</p>
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
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-6.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">laura miller</Link></h3>
                  <p>product engineer</p>
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
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-7.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">olivia walker</Link></h3>
                  <p>machine operator</p>
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
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src="/images/team-8.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                    </figure>
                  </Link>

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
                  <h3><Link href="/team-single">ryan wright</Link></h3>
                  <p>maintenance manager</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Team End */}
    </>
  );
}
