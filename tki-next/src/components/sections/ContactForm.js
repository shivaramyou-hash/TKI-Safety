export default function ContactForm() {
  return (
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
  );
}
