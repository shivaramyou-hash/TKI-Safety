import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: "Our Services - Toplax",
  description: "Our Services - Toplax Factory & Industry",
};

export default function Services() {
  return (
    <>
      <PageHeader title={<>Our <span>services</span></>} activePage="our services" />

      {/* Page Services Start */}
      <div className="page-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-1.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>custom manufacturing solution</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-2.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>industrial automation and robotics</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-3.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>product design and prototyping</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-4.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>equipment maintenance support</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-5.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>research and development</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-6.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>regulatory compliance consulting</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-7.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>quality control and testing</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <Image src="/images/icon-service-8.svg" alt="" width={60} height={60} />
                </div>

                <div className="service-body">
                  <h3>supply chain and management</h3>
                </div>

                <div className="service-footer">
                  <Link href="/service-single" className="service-btn">
                    <Image src="/images/arrow-dark.svg" alt="" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Services End */}

      {/* What We Do Start */}
      <div className="what-we-do">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-6">
              {/* What We Do Content Start */}
              <div className="what-we-do-content">
                {/* Section Title Start */}
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">what we do</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Innovative factory and industry <span>solutions today</span></h2>
                </div>
                {/* Section Title End */}

                {/* What We Do List Start */}
                <div className="what-we-do-list">
                  <div className="what-we-do-list-box-1">
                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <Image src="/images/icon-who-we-do-1.svg" alt="" width={60} height={60} />
                      </div>
                      <div className="what-we-item-content">
                        <h3>automation solutions</h3>
                        <p>Streamlining processes through cutting-edge technology.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}

                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <Image src="/images/icon-who-we-do-2.svg" alt="" width={60} height={60} />
                      </div>
                      <div className="what-we-item-content">
                        <h3>quality control</h3>
                        <p>Ensuring product excellence through rigorous testing.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}
                  </div>

                  <div className="what-we-do-list-box-2">
                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <Image src="/images/icon-who-we-do-3.svg" alt="" width={60} height={60} />
                      </div>
                      <div className="what-we-item-content">
                        <h3>process engineering</h3>
                        <p>Ensuring product excellence through rigorous testing.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}

                    {/* What We Do Item Start */}
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <Image src="/images/icon-who-we-do-4.svg" alt="" width={60} height={60} />
                      </div>
                      <div className="what-we-item-content">
                        <h3>product development</h3>
                        <p>Streamlining processes through cutting-edge technology.</p>
                      </div>
                    </div>
                    {/* What We Do Item End */}
                  </div>
                </div>
                {/* What We Do List Start */}

                {/* What We Do Footer Start */}
                <div className="what-we-do-footer">
                  <p>Lorem ipsum is a placeholder text commonly used <span>to demonstrate</span></p>
                </div>
                {/* What We Do Footer End */}
              </div>
              {/* What We Do Content End */}
            </div>

            <div className="col-lg-6">
              {/* What We Do Image Start */}
              <div className="what-we-do-image">
                <figure className="image-anime">
                  <Image src="/images/what-we-do-image.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                </figure>

                {/* Contact Now Circle Start */}
                <div className="contact-now-circle">
                  <Image src="/images/contact-now-circle.svg" alt="" width={100} height={100} />
                </div>
                {/* Contact Now Circle End */}
              </div>
              {/* What We Do Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* What We Do End */}

      {/* Our Story Start */}
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
                  <Image src="/images/our-story-header-img-1.jpg" alt="" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                </figure>

                <figure className="reveal image-anime">
                  <Image src="/images/our-story-header-img-2.jpg" alt="" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
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
                  <Image src="/images/our-story-img.jpg" alt="" width={500} height={600} style={{ width: '100%', height: 'auto' }} />
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
                        <Image src="/images/story-client-img-1.jpg" alt="" width={60} height={60} />
                      </figure>
                    </div>
                    {/* Client Image End */}

                    {/* Client Image Start */}
                    <div className="client-image">
                      <figure className="image-anime reveal">
                        <Image src="/images/story-client-img-2.jpg" alt="" width={60} height={60} />
                      </figure>
                    </div>
                    {/* Client Image End */}

                    {/* Client Image Start */}
                    <div className="client-image">
                      <figure className="image-anime reveal">
                        <Image src="/images/story-client-img-3.jpg" alt="" width={60} height={60} />
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
      {/* Our Story End */}

      {/* Our Testimonial Section Start */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Testimonial Image Start */}
              <div className="our-testimonial-image">
                <figure className="image-anime reveal">
                  <Image src="/images/testimonial-image.jpg" alt="" width={500} height={600} style={{ width: '100%', height: 'auto' }} />
                </figure>
              </div>
              {/* Our Testimonial Image End */}
            </div>

            <div className="col-lg-6">
              {/* Our Testimonial Content Start */}
              <div className="our-testimonial-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">Our client say</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">What our satisfied clients <span>are saying</span></h2>
                </div>
                {/* Section Title End */}

                {/* Testimonial Slider Start */}
                <div className="testimonial-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"</p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <Image src="/images/author-1.jpg" alt="" width={60} height={60} />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>Brooklyn Simmons</h3>
                              <p>Homeowner</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}

                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"</p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <Image src="/images/author-2.jpg" alt="" width={60} height={60} />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>albert flores</h3>
                              <p>senior engineer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                    <div className="testimonial-btn">
                      <div className="testimonial-button-prev"></div>
                      <div className="testimonial-button-next"></div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
              {/* Our Testimonial Content End */}
            </div>

            <div className="col-lg-12">
              {/* Agency Support Slider Start */}
              <div className="testimonial-company-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src="/images/company-logo-1.svg" alt="" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src="/images/company-logo-2.svg" alt="" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src="/images/company-logo-3.svg" alt="" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src="/images/company-logo-4.svg" alt="" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src="/images/company-logo-5.svg" alt="" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}

                    {/* Agency Support Logo Start */}
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src="/images/company-logo-1.svg" alt="" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                    </div>
                    {/* Agency Support Logo End */}
                  </div>
                </div>
              </div>
              {/* Agency Support Slider End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial Section End */}

      {/* Our FAQs Start */}
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
                            <Link href="/faqs" className="btn-default"><span>all FAQs</span></Link>
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
                                <figure  className="image-anime">
                                    <Image src="/images/our-faqs-image.jpg" alt="" width={500} height={400} style={{ width: '100%', height: 'auto' }} />
                                </figure>
                            </div>
                            {/* Our Faqs Image End */}
    
                            {/* Faqs Image Cta Box Start */}
                            <div className="faqs-img-cta-box">
                                <ul>
                                    <li><a href="#"><Image src="/images/icon-phone-accent.svg" alt="" width={20} height={20} /> +91 1236547890</a></li>
                                    <li><a href="#"><Image src="/images/icon-mail-accent.svg" alt="" width={20} height={20} /> info@domainname.com</a></li>
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
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
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
                                            Can you handle custom manufacturing projects? 
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
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
        {/* Our FAQs End */}
    </>
  );
}
