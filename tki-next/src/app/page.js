"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSlider from '@/components/sections/HeroSlider';

export default function Home() {
  useEffect(() => {
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        new window.Swiper('.services-carousel .swiper', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          observer: true,
          observeParents: true,
          duration: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.services-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.services-next',
            prevEl: '.services-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      }

      if (typeof window !== 'undefined' && window.Swiper) {
        // Forward Marquee
        new window.Swiper('.marquee-forward', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          loop: true,
          speed: 6000,
          allowTouchMove: false,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          observer: true,
          observeParents: true,
        });

        // Reverse Marquee
        new window.Swiper('.marquee-reverse', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          loop: true,
          speed: 7000,
          allowTouchMove: false,
          reverseDirection: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          },
          observer: true,
          observeParents: true,
        });
      }

      if (typeof window !== 'undefined' && window.Swiper) {
        // ... existing swiper inits if any
      } else {
        // Retry if Swiper is not yet available
        setTimeout(initSwiper, 500);
      }
    };

    initSwiper();
  }, []);

  const services = [
    {
      title: "PERSONAL PROTECTIVE EQUIPMENT",
      desc: "Comprehensive range of high-performance gear designed for maximum safety in industrial environments.",
      image: "/images/rescue_harness_premium.png",
      badge: "CERTIFIED",
      link: "/service-single"
    },
    {
      title: "Specialised Vehicles, Machinery & Equipment",
      desc: "Elite specialized response vehicles and heavy machinery for emergency and industrial logistics.",
      image: "/images/specialised_vehicles_premium.png",
      badge: "ELITE",
      link: "/service-single"
    },
    {
      title: "POLICE AND MILITARY EQUIPMENT & MACHINERY",
      desc: "Strategic tactical gear and advanced machinery engineered for defense and mission-critical safety.",
      image: "/images/tactical_armour_premium.png",
      badge: "CERTIFIED",
      link: "/service-single" 
    },
    {
      title: "FIREFIGHTING EQUIPMENT",
      desc: "World-class firefighting technology and protective solutions approved by global safety standards.",
      image: "/images/fire_tunic_premium.png",
      badge: "CERTIFIED",
      link: "/service-single"
    },
    {
      title: "TRAINING and DEVELOPMENT",
      desc: "Expert-led safety training and professional development programs for industrial and emergency teams.",
      image: "/images/training_development_premium.png",
      badge: "ACCREDITED",
      link: "/service-single"
    }
  ];

  return (
    <>
      <HeroSlider />

      {/* About Us Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* About Us Image Start */}
              <div className="about-image">
                {/* About Image Start */}
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-1.jpg" alt="" />
                  </figure>
                </div>
                {/* About Image End */}

                {/* About Image Start */}
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-2.jpg" alt="" />
                  </figure>
                </div>
                {/* About Image End */}

                {/* Company Experience Start */}
                <div className="company-experience">
                  <div className="company-experience-counter">
                    <h2><span className="counter">9</span>+</h2>
                  </div>
                  <div className="company-experience-content">
                    <p>years of experience</p>
                  </div>
                </div>
                {/* Company Experience End */}
              </div>
              {/* About Us Image End */}
            </div>

            <div className="col-lg-6">
              {/* About Content Start */}
              <div className="about-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Protecting life, property & the environment through certified <span>fire & safety solutions</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    TKI Fire and Health Safety Co. Ltd is a trusted supplier and integrator of fire safety,
                    health safety equipment, consultancy, training, and specialised response vehicles across Mauritius and the Indian Ocean region.
                    With over 30 years of combined expertise, we deliver world-class safety solutions backed by international standards.
                  </p>
                </div>
                {/* Section Title End */}

                <div className="about-content-body">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      {/* About List Btn Box Start */}
                      <div className="about-list-btn">

                        {/* About Content List Start */}
                        <div className="about-content-list wow fadeInUp" data-wow-delay="0.5s">
                          <ul>
                            <li>Fire & Health Safety Consultancy</li>
                            <li>Certified Firefighting Equipment & Systems</li>
                            <li>Training & Emergency Response Services</li>
                            <li>Specialised Vehicles & Machinery</li>
                          </ul>
                        </div>
                        {/* About Content List End */}

                        {/* About Content Btn Start */}
                        <div className="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                          <Link href="/about" className="btn-default btn-red"><span>learn more</span></Link>
                        </div>
                        {/* About Content Btn End */}

                      </div>
                      {/* About List Btn Box End */}
                    </div>

                    <div className="col-md-6">
                      {/* About Content Counter Start */}
                      <div className="genuine-rating-counter">

                        {/* About Counter Item Start */}
                        <div className="about-counter-item">
                          <div className="about-counter">
                            <h2><span className="counter">30</span>+</h2>
                          </div>

                          <div className="genuine-rating-counter-content">
                            <p>years of combined expertise</p>
                          </div>
                        </div>
                        {/* About Counter Item End */}

                        {/* Client / Projects */}
                        <div className="about-counter-item">
                          <div className="about-counter">
                            <h2><span className="counter">120</span>+</h2>
                          </div>
                          <div className="genuine-rating-counter-content">
                            <p>successful installations & projects</p>
                          </div>
                        </div>

                      </div>
                      {/* About Content Counter End */}
                    </div>
                  </div>
                </div>
              </div>

              {/* About Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us End */}


      {/* Our Service Start */}
      <div className="our-services parallaxie">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">services</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Comprehensive solutions <span>for industrial excellence</span></h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content dark-section wow fadeInUp" data-wow-delay="0.25s">
                <p>We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.</p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Service End */}

      {/* Our Service List Start */}
      <div className="our-services-list services-carousel">
        <div className="container">
          <div className="swiper">
            <div className="swiper-wrapper">
              {services.map((service, index) => (
                <div className="swiper-slide" key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="premium-service-card"
                  >
                    <div className="card-image-box">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="card-img"
                      />
                      <div className="card-badge">
                        {service.badge}
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-desc">{service.desc}</p>
                      <div className="card-footer">
                        <Link href={service.link} className="details-btn">
                          Details <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            {/* Carousel Navigation & Pagination */}
            <div className="services-controls">
              <div className="services-pagination"></div>
              <div className="services-navigation">
                <div className="services-prev"><i className="fas fa-chevron-left"></i></div>
                <div className="services-next"><i className="fas fa-chevron-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Service List End */}

      {/* Our Story Start */}
      <div className="our-story">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our journey</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Delivering certified fire & safety solutions <span>that protect life, property & the environment</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              <div className="our-story-header-img">
                <figure className="reveal image-anime">
                  <img src="/images/our-story-header-img-1.jpg" alt="" />
                </figure>

                <figure className="reveal image-anime">
                  <img src="/images/our-story-header-img-2.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-story-img">
                <figure className="reveal image-anime">
                  <img src="/images/our-story-img.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-story-content">
                <div className="our-story-content-body">
                  <p>
                    Founded in Mauritius in 2017, TKI Fire and Health Safety Co. Ltd has grown into a reputable supplier and integrator of fire safety equipment, health & safety solutions, specialised vehicles, consultancy and training services across the Indian Ocean region.
                    Our mission is to empower industries to operate safely by providing innovative, certified and high–performance solutions that meet international standards.
                  </p>
                </div>

                <div className="our-story-counters">

                  <div className="our-story-counter">
                    <h3><span className="counter">30</span>+</h3>
                    <p>years of combined expertise</p>
                  </div>

                  <div className="our-story-counter">
                    <h3><span className="counter">120</span>+</h3>
                    <p>successful projects delivered</p>
                  </div>

                  <div className="our-story-counter">
                    <h3><span className="counter">50</span>+</h3>
                    <p>public & private sector clients</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story End */}

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
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Certified fire & safety <span>solutions for every industry</span>
                  </h2>
                </div>
                {/* Section Title End */}

                {/* What We Do List Start */}
                <div className="what-we-do-list">

                  <div className="what-we-do-list-box-1">
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-1.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>Fire & Health Safety Consultancy</h3>
                        <p>Helping organisations meet compliance, improve safety and protect assets through expert audits, planning & certifications.</p>
                      </div>
                    </div>

                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-2.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>Installation & Commissioning</h3>
                        <p>Deployment of fire alarm systems, suppression systems, emergency lighting, extinguishers & hydrant networks.</p>
                      </div>
                    </div>
                  </div>

                  <div className="what-we-do-list-box-2">
                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-3.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>Equipment Supply</h3>
                        <p>Supplying certified firefighting equipment, PPE, medical devices & specialised emergency vehicles.</p>
                      </div>
                    </div>

                    <div className="what-we-do-item">
                      <div className="icon-box">
                        <img src="/images/icon-who-we-do-4.svg" alt="" />
                      </div>
                      <div className="what-we-item-content">
                        <h3>Training & Capability Building</h3>
                        <p>Developing skilled responders through accredited firefighting, first aid, evacuation & emergency response training.</p>
                      </div>
                    </div>
                  </div>

                </div>
                {/* What We Do List End */}

                {/* What We Do Footer Start */}
                <div className="what-we-do-footer">
                  <p>Committed to safety excellence, compliance and protection across public & private sectors.</p>
                </div>
                {/* What We Do Footer End */}
              </div>
              {/* What We Do Content End */}
            </div>

            <div className="col-lg-6">
              {/* What We Do Image Start */}
              <div className="what-we-do-image">
                <figure className="image-anime">
                  <img src="/images/what-we-do-image.jpg" alt="" />
                </figure>

                <div className="contact-now-circle">
                  <img src="/images/contact-now-circle.svg" alt="" />
                </div>
              </div>
              {/* What We Do Image End */}
            </div>
          </div>
        </div>
      </div>

      {/* What We Do End */}

      {/* Our Work Section Start */}
      <div className="our-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">our work</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  delivering mission-critical <span>fire & safety projects</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Our completed deployments, installations and consultancy engagements span industries such as hospitality, aviation, municipal operations, education, marine and governmental emergency services.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li><a href="#" className="active-btn" data-filter="*">all</a></li>
                  <li><a href="#" data-filter=".installation">installation</a></li>
                  <li><a href="#" data-filter=".equipment">equipment</a></li>
                  <li><a href="#" data-filter=".training">training</a></li>
                  <li><a href="#" data-filter=".public">Consultancy</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row project-item-boxes align-items-center">

                {/* Project 1 */}
                <div className="col-md-6 project-item-box installation private">
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-shangrila.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="project-tag">
                      <Link href="/project-single">installation</Link>
                    </div>
                    <div className="project-content">
                      <h3><Link href="/project-single">Firefighting System Deployment — Shangri-La Hotel</Link></h3>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="col-md-6 project-item-box equipment public">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-ports.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="project-tag">
                      <Link href="/project-single">equipment</Link>
                    </div>
                    <div className="project-content">
                      <h3><Link href="/project-single">Thermal Imaging Systems — Mauritius Ports Fire & Rescue</Link></h3>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="col-md-6 project-item-box training public">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-training.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="project-tag">
                      <Link href="/project-single">training</Link>
                    </div>
                    <div className="project-content">
                      <h3><Link href="/project-single">Emergency Response Training — Rodrigues Fire & Rescue Services</Link></h3>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="col-md-6 project-item-box consultancy public installation">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-school.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="project-tag">
                      <Link href="/project-single">consultancy</Link>
                    </div>
                    <div className="project-content">
                      <h3><Link href="/project-single">Addressable Fire Alarm System — Ministry of Education Facilities</Link></h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work Section End */}

      {/* Our Process Section Start */}
      <div className="our-process">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">our process</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  systematic approach to <span>fire & safety excellence</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>
                  From assessment to training and maintenance, our end-to-end methodology ensures compliance, operational safety and reliable long-term performance across public and private sectors.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-process-image">
                <figure className="image-anime reveal">
                  <img src="/images/our-process-image.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="process-flow-container">
                <div className="process-path-line"></div>
                <div className="process-steps-box">

                  <div className="process-step-item wow fadeInUp">
                    <div className="process-step-no">
                      <span>01</span>
                    </div>
                    <div className="process-step-content">
                      <h3>Assessment & Risk Analysis</h3>
                      <p>
                        We begin by evaluating hazards, regulatory requirements and operational risks to define the correct fire & safety strategy.
                      </p>
                    </div>
                  </div>

                  <div className="process-step-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="process-step-no">
                      <span>02</span>
                    </div>
                    <div className="process-step-content">
                      <h3>System Design & Planning</h3>
                      <p>
                        Our experts design compliant fire protection systems, equipment layouts and emergency procedures based on international standards.
                      </p>
                    </div>
                  </div>

                  <div className="process-step-item active wow fadeInUp" data-wow-delay="0.4s">
                    <div className="process-step-no">
                      <span>03</span>
                    </div>
                    <div className="process-step-content">
                      <h3>Supply, Installation & Commissioning</h3>
                      <p>
                        Certified equipment and systems are supplied, installed and tested to ensure full operational readiness and performance reliability.
                      </p>
                    </div>
                  </div>

                  <div className="process-step-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="process-step-no">
                      <span>04</span>
                    </div>
                    <div className="process-step-content">
                      <h3>Training & Certification</h3>
                      <p>
                        Personnel are trained in operation, emergency response and maintenance to build internal capabilities and regulatory compliance.
                      </p>
                    </div>
                  </div>

                  <div className="process-step-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="process-step-no">
                      <span>05</span>
                    </div>
                    <div className="process-step-content">
                      <h3>Maintenance & Support</h3>
                      <p>
                        We provide ongoing inspection, servicing and audits to ensure long-term system integrity and certification validity.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Our Testimonial Section Start */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-testimonial-image">
                <figure className="image-anime reveal">
                  <img src="/images/testimonial-image.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-testimonial-content">

                <div className="section-title">
                  <h3 className="wow fadeInUp">client feedback</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Trusted by leading <span>institutions & industries</span>
                  </h2>
                </div>

                <div className="testimonial-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">

                      {/* Testimonial 1 */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>
                              “TKI delivered and commissioned advanced fire protection systems across multiple hotel facilities. Their professionalism, training and after-service support have proven invaluable to our safety operations.”
                            </p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-content">
                              <h3>Shangri-La Hotel Group</h3>
                              <p>Hospitality Sector</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial 2 */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>
                              “Their training on emergency response and use of breathing apparatus considerably enhanced our operational readiness during real incidents. Highly competent and responsive team.”
                            </p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-content">
                              <h3>Rodrigues Fire & Rescue Services</h3>
                              <p>Public Emergency Services</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial 3 */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <div className="testimonial-content">
                            <p>
                              “TKI ensured full compliance and safety upgrades across multiple school facilities through proper fire alarm installations and commissioning. We appreciate their attention to standards.”
                            </p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-content">
                              <h3>Ministry of Education</h3>
                              <p>Government Sector</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="testimonial-btn">
                      <div className="testimonial-button-prev"></div>
                      <div className="testimonial-button-next"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-12">
              <div className="dual-marquee-container">
                {/* Row 1: Forward Motion */}
                <div className="marquee-wrapper forward">
                  <div className="swiper marquee-forward">
                    <div className="swiper-wrapper">
                      {["Shangri-La Touessrok", "Lux Hotels", "Victoria Beachcomber", "Anantara Hotel", "Outrigger Hotel", "The Residence", "Mauritius Ports Fire & Rescue", "Airports of Mauritius Ltd", "National Coast Guard", "Rodrigues Fire & Rescue", "Ministry of Education", "Ministry of Youth & Sports"].map((client, idx) => (
                        <div key={idx} className="swiper-slide">
                          <div className="company-logo">
                            <img src="/images/company-logo-1.svg" alt="" />
                            {client}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2: Reverse Motion */}
                <div className="marquee-wrapper reverse">
                  <div className="swiper marquee-reverse">
                    <div className="swiper-wrapper">
                      {["Public Service Commission", "Discipline Forces Service Commission", "Government Schools", "Central Electricity Board", "Mauritius Police Force", "Special Mobile Force (SMF)", "Emergency Response Service (ERS)", "Grays Inc Ltd", "Grays Distilling Ltd", "MADP Food Processing", "Royal Curve and Cut Ltd", "Cernol Chemicals Ltd", "Pharmacie Nouvelle", "Chantier Naval de l’Ocean Indien", "United Bus Service Ltd", "Domaine de Labourdonnais", "Good Living Mauritius", "Solon India"].map((client, idx) => (
                        <div key={idx} className="swiper-slide">
                          <div className="company-logo variant">
                            <img src="/images/company-logo-1.svg" alt="" />
                            {client}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Testimonial Section End */}

    </>
  );
}
