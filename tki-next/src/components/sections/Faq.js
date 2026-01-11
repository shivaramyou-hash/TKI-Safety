import Link from 'next/link';

export default function Faq() {
  return (
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
                  <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
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
                  <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
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
                  <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
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
                  <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
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
                  <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
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
  );
}
