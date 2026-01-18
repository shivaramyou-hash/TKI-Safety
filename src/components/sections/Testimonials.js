import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <div className="our-testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Our Testimonial Image Start */}
            <div className="our-testimonial-image">
              <figure className="image-anime reveal">
                <img src="/images/testimonial-image.jpg" alt="" />
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
                    {testimonials.map((testimonial) => (
                      <div className="swiper-slide" key={testimonial.id}>
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i className="fa-solid fa-star" key={i}></i>
                            ))}
                          </div>

                          <div className="testimonial-content">
                            <p>{testimonial.text}</p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <img src={testimonial.image} alt={testimonial.name} />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>{testimonial.name}</h3>
                              <p>{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
        </div>

        {/* Testimonial Company Slider Start */}
        <div className="testimonial-company-slider">
          <div className="swiper">
            <div className="swiper-wrapper" data-cursor-text="Drag">
              {/* Company Partner Items (Static for now, can also be componentized) */}
              {/* {[1, 2, 3, 4, 5, 6].map((num) => (
                <div className="swiper-slide" key={num}>
                  <div className="company-logo">
                    <img src={`/images/icon-company-${num}.svg`} alt="" />
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
        {/* Testimonial Company Slider End */}
      </div>
    </div>
  );
}
