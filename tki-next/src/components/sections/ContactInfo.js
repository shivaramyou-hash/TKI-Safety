export default function ContactInfo() {
  return (
    <div className="contact-information">
      {/* Section Title Start */}
      <div className="section-title">
        <h3 className="wow fadeInUp">contact us</h3>
        <h2 className="text-anime-style-3" data-cursor="-opaque">Get in touch <span>with us</span></h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.</p>
      </div>
      {/* Section Title End */}

      {/* Contact Info Box Start */}
      <div className="contact-info-box">
        {/* Page Contact Item Start */}
        <div className="contact-info-item wow fadeInUp">
          <div className="icon-box">
            <img src="/images/icon-phone.svg" alt="" />
          </div>
          <div className="contact-info-content">
            <h3>contact</h3>
            <p>+1.809.120.670</p>
          </div>
        </div>
        {/* Page Contact Item End */}

        {/* Page Contact Item Start */}
        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
          <div className="icon-box">
            <img src="/images/icon-mail.svg" alt="" />
          </div>
          <div className="contact-info-content">
            <h3>Email</h3>
            <p>info@domain.com</p>
          </div>
        </div>
        {/* Page Contact Item End */}

        {/* Page Contact Item Start */}
        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
          <div className="icon-box">
            <img src="/images/icon-location.svg" alt="" />
          </div>
          <div className="contact-info-content">
            <h3>Our Address</h3>
            <p>37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
          </div>
        </div>
        {/* Page Contact Item End */}
      </div>
    </div>
  );
}
