import Link from 'next/link';
import { teamMembers } from '@/data/team';

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
          {teamMembers.map((member) => (
            <div className="col-lg-3 col-md-6" key={member.id}>
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp" data-wow-delay={`${(member.id - 1) * 0.25}s`}>
                {/* Team Image Start */}
                <div className="team-image">
                  <div data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={member.image} alt={member.name} />
                    </figure>
                  </div>

                  {/* Team Social Icon Start */}
                  <div className="team-social-icon">
                    <ul>
                      <li><a href={member.social.twitter}><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href={member.social.facebook}><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href={member.social.instagram}><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href={member.social.pinterest}><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3><Link href="#">{member.name}</Link></h3>
                  <p>{member.role}</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
