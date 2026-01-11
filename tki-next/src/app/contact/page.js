
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Toplax - Factory & Industry HTML Template',
  description: 'Contact Toplax Factory & Industry',
}

export default function Contact() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">Contact <span>us</span></h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/* Contact Information Start */}
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
              {/* Contact Information End */}
            </div>

            <div className="col-lg-7">
              {/* Page Contact Form Start */}
              <div className="contact-us-form">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Contact <span>me</span></h2>
                </div>

                <div className="contact-form">
                  {/* Contact Form Start */}
                  <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter first name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter last name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <input type="email" name ="email" className="form-control" id="email" placeholder="Enter your e-mail" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter your phone no." required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <textarea name="message" className="form-control" id="message" rows="4" placeholder="Write Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn-default"><span>submit message</span></button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </form>
                  {/* Contact Form End */}
                </div>
              </div>
              {/* Page Contact Form End */}
            </div> 
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}

      {/* Google Map Start */}
      <div className="google-map">
        <div className="container-flude">
          <div className="row">
            <div className="col-lg-12">
              {/* Google Map Start */}
              <div className="google-map-iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              {/* Google Map End */}
            </div>
          </div>
        </div>
      </div>
      {/* Google Map End */}
    </>
  );
}
