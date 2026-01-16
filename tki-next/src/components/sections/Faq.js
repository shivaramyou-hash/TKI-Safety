import Link from 'next/link';
import { faqs } from '@/data/faq';
import { siteDetails } from '@/data/siteDetails';

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
                  <li><a href="#"><img src="/images/icon-phone-accent.svg" alt="" /> {siteDetails.contact.phone}</a></li>
                  <li><a href="#"><img src="/images/icon-mail-accent.svg" alt="" /> {siteDetails.contact.email}</a></li>
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
                {faqs.map((faq, index) => (
                  <div className="accordion-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button 
                        className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${faq.id}`} 
                        aria-expanded={index === 0 ? 'true' : 'false'} 
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={`collapse${faq.id}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      aria-labelledby={`heading${faq.id}`} 
                      data-bs-parent="#faqaccordion"
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* FAQ Accordion End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
