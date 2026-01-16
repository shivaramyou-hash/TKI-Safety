"use client";

import Link from 'next/link';
import { faqs } from '@/data/faq';
import { siteDetails } from '@/data/siteDetails';
import { services } from '@/data/services';

export default function ServiceDetails({ service }) {
  if (!service) return null;

  return (
    <div className="page-service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Service Sidebar Start */}
            <div className="service-sidebar">
              {/* Service Category List Start */}
              <div className="service-catagery-list wow fadeInUp">
                <h3>services category</h3>
                <ul>
                  {services.map((item) => (
                    <li key={item.id}>
                      <Link href={`/services/${item.slug}`}>{item.title.toLowerCase()}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Service Category List End */}

              {/* Sidebar CTA Box Start */}
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                {/* Sidebar Image Start */}
                <div className="sidebar-cta-logo">
                  <img src="/images/footer-logo.svg" alt="" />
                </div>
                {/* Sidebar Image End */}

                {/* Sidebar CTA Body Start */}
                <div className="sidebar-cta-Body">
                  {/* Sidebar CTA Content Start */}
                  <div className="sidebar-cta-content">
                    <h3>Need <span>help!</span></h3>
                    <p>Got questions or need assistance with your Industry needs?</p>
                  </div>
                  {/* Sidebar CTA Content End */}

                  {/* Sidebar CTA Contact List Start */}
                  <div className="sidebar-cta-contact-list">
                    {/* Sidebar CTA Contact Item Start */}
                    <div className="sidebar-cta-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-phone-accent.svg" alt="" />
                      </div>

                      <div className="cta-contact-item-title">
                        <h3>{siteDetails.contact.phone}</h3>
                      </div>
                    </div>
                    {/* Sidebar CTA Contact Item End */}

                    {/* Sidebar CTA Contact Item Start */}
                    <div className="sidebar-cta-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-mail-accent.svg" alt="" />
                      </div>

                      <div className="cta-contact-item-title">
                        <h3>{siteDetails.contact.email}</h3>
                      </div>
                    </div>
                    {/* Sidebar CTA Contact Item End */}
                  </div>
                  {/* Sidebar CTA Contact List End */}
                </div>
                {/* Sidebar CTA Body End */}
              </div>
              {/* Sidebar CTA Box End */}
            </div>
            {/* Service Sidebar End */}
          </div>

          <div className="col-lg-8">
            {/* Service Single Content Start */}
            <div className="service-single-content">
              {/* Service Featured Image Start */}
              <div className="service-featured-image">
                <figure className="image-anime reveal">
                  <img src={service.featuredImage || "/images/service-single-img.jpg"} alt={service.title} />
                </figure>
              </div>
              {/* Service Featured Image End */}

              {/* Service Entry Start */}
              <div className="service-entry">
                <p className="wow fadeInUp">{service.description || "Our services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth."}</p>

                {service.extendedDescription && (
                  <p className="wow fadeInUp" data-wow-delay="0.2s">{service.extendedDescription}</p>
                )}
                
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">{service.title.split(' ')[0]} <span>{service.title.split(' ').slice(1).join(' ')}</span></h2>

                {service.features && (
                  <div className="service-entry-box">
                    {service.features.map((feature, index) => (
                      <div className="service-entry-item" key={index}>
                        <div className="icon-box">
                          <img src={feature.icon} alt={feature.title} />
                        </div>
                        <div className="service-entry-item-content">
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <h2 className="wow fadeInUp" data-wow-delay="0.4s">Planning & <span>strategy</span></h2>

                <p className="wow fadeInUp" data-wow-delay="0.2s">Our planning and strategy services focus on designing tailored solutions that align with your business goals.</p>

                <ul>
                  <li>needs assessment</li>
                  <li>Timeline and Milestones</li>
                  <li>Feasibility and ROI</li>
                  <li>Technology Selection</li>
                  <li>Process Optimization</li>
                  <li>Scalability Planning</li>
                </ul>

                {/* Service Entry Images Start */}
                <div className="service-entry-images">
                  {/* Service Entry Img Start */}
                  <div className="service-entry-img">
                    <figure className="image-anime reveal">
                      <img src="/images/service-entry-img-1.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Service Entry Img End */}

                  {/* Service Entry Img Start */}
                  <div className="service-entry-img">
                    <figure className="image-anime reveal">
                      <img src="/images/service-entry-img-2.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Service Entry Img End */}
                </div>
                {/* Service Entry Images End */}
              </div>

              {/* Our FAQ Section Start */}
              <div className="our-faq-section">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
                </div>
                {/* Section Title End */}

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
              {/* Our FAQ Section End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
