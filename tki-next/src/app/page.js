import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    {/* Hero Section Start */}
    <div className="hero parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    {/* Hero Content Start */}
                    <div className="hero-content">
                        {/* Section Title Start */}
                        <div className="section-title dark-section">
                            <h3 className="wow fadeInUp">welcome our industry</h3>
                            <h1 className="text-anime-style-2" data-cursor="-opaque">Excellence innovating <span>industry for today</span></h1>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes. </p>
                        </div>
                        {/* Section Title End */}

                        {/* Hero Button Start */}
                        <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/contact" className="btn-default"><span>explore more</span></Link>
                        </div>
                        {/* Hero Button End */}
                    </div>
                    {/* Hero Content End */}
                </div>

                <div className="col-lg-12">
                    {/* Excellence Innovating List Start */}
                    <div className="excellence-innovating-list wow fadeInUp" data-wow-delay="0.6s">
                        <ul>
                            <li>Advanced Manufacturing Solutions</li>
                            <li>Quality Assurance Systems</li>
                            <li>State-of-the-Art Technology</li>
                        </ul>
                    </div>
                    {/* Excellence Innovating List End */}
                </div>
            </div>
        </div>
    </div>
    {/* Hero Section End */}

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
                                <Image src="/images/about-img-1.jpg" alt="" width={400} height={500} style={{ width: '100%', height: 'auto' }} />
                            </figure>
                        </div>
                        {/* About Image End */}

                        {/* About Image Start */}
                        <div className="about-img-2">
                            <figure className="image-anime reveal">
                                <Image src="/images/about-img-2.jpg" alt="" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                            </figure>
                        </div>
                        {/* About Image End */}

                        {/* Company Experience Start */}
                        <div className="company-experience">
                            <div className="company-experience-counter">
                                <h2><span className="counter">25</span>+</h2>
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
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Building quality through <span>industrial innovation</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.</p>
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
                                                <li>sustainable manufacturing</li>
                                                <li>advanced automation</li>
                                                <li>efficient production processes</li>
                                                <li>reliable delivery services</li>
                                            </ul>
                                        </div>
                                        {/* About Content List End */}
                
                                        {/* About Content Btn Start */}
                                        <div className="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                                            <Link href="/about" className="btn-default"><span>learn more</span></Link>
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
                                                <h2><span className="counter">4.9</span></h2>
                                            </div>
                                            <div className="genuine-rating">
                                                <ul>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="genuine-rating-counter-content">
                                                <p>15.5K genuine rating</p>
                                            </div>
                                        </div>
                                        {/* About Counter Item End */}
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
    <div className="our-services-list">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Services List Box Start */}
                    <div className="services-list-box">
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
                                    <img src="/images/arrow-dark.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        {/* Service Item End */}

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
                                    <img src="/images/arrow-dark.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        {/* Service Item End */}

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
                                    <img src="/images/arrow-dark.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        {/* Service Item End */}
                    </div>
                    {/* Services List Box End */}
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

    {/* Our Work Section Start */}
    <div className="our-work">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our work</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Our successful project <span>initiatives</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Our successful project initiatives showcase our commitment to excellence and innovation across various industries.</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/* Choose Our Project Nav start */}
                    <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
                        <ul>
                            <li><a href="#" className="active-btn" data-filter="*">all</a></li>
                            <li><a href="#" data-filter=".manufacturing">manufacturing</a></li>
                            <li><a href="#" data-filter=".automation">automation</a></li>
                            <li><a href="#" data-filter=".sustainability">sustainability</a></li>
                            <li><a href="#" data-filter=".development">development</a></li>
                            <li><a href="#" data-filter=".infrastructure">infrastructure</a></li>
                        </ul>
                    </div>
                    {/* Choose Our Project Nav End */}
                </div>

                <div className="col-lg-12">
                    {/* Project Item Boxes start */}
                    <div className="row project-item-boxes align-items-center">
                        <div className="col-md-6 project-item-box manufacturing automation">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <Image src="/images/project-1.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <Link href="/project-single">manufacturing</Link>
                                </div>
                                
                                <div className="project-content">
                                    <h3><Link href="/project-single">Total Quality Management Implementation</Link></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>

                        <div className="col-md-6 project-item-box automation sustainability development infrastructure">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <Image src="/images/project-2.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <Link href="/project-single">automation</Link>
                                </div>
                                
                                <div className="project-content">
                                    <h3><Link href="/project-single">Advanced Research in Materials Sciences</Link></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>

                        <div className="col-md-6 project-item-box sustainability infrastructure">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <Image src="/images/project-3.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <Link href="/project-single">sustainability</Link>
                                </div>
                                
                                <div className="project-content">
                                    <h3><Link href="/project-single">Workplace Safety Enhancement Initiative</Link></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>

                        <div className="col-md-6 project-item-box manufacturing development">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <Image src="/images/project-4.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <Link href="/project-single">infrastructure</Link>
                                </div>
                                
                                <div className="project-content">
                                    <h3><Link href="/project-single">Robotic Process Automation Deployment</Link></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>
                    </div>
                    {/* Project Item Boxes End */}
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
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our process</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Streamlined processes <span>for optimal efficiency</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Our Process Image Start */}
                    <div className="our-process-image">
                        <figure className="image-anime reveal">
                            <Image src="/images/our-process-image.jpg" alt="" width={600} height={800} style={{ width: '100%', height: 'auto' }} />
                        </figure>
                    </div>
                    {/* Our Process Image End */}
                </div>

                <div className="col-lg-6">
                    {/* Process Step Box Start */}
                    <div className="process-steps-box">
                        {/* Process Step Item Start */}
                        <div className="process-step-item wow fadeInUp">
                            <div className="process-step-no">
                                <h2>01</h2>
                            </div>
                            <div className="process-step-content">
                                <h3>understanding your needs</h3>
                                <p>We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.</p>
                            </div>
                        </div>
                        {/* Process Step Item End */}

                        {/* Process Step Item Start */}
                        <div className="process-step-item active wow fadeInUp" data-wow-delay="0.25s">
                            <div className="process-step-no">
                                <h2>02</h2>
                            </div>
                            <div className="process-step-content">
                                <h3>design and planning</h3>
                                <p>Our team collaborates to create detailed project plans, ensuring all aspects of the process.</p>
                            </div>
                        </div>
                        {/* Process Step Item End */}

                        {/* Process Step Item Start */}
                        <div className="process-step-item wow fadeInUp" data-wow-delay="0.5s">
                            <div className="process-step-no">
                                <h2>03</h2>
                            </div>
                            <div className="process-step-content">
                                <h3>implementation</h3>
                                <p>Utilizing advanced technologies and skilled personnel, we execute the project</p>
                            </div>
                        </div>
                        {/* Process Step Item End */}
                    </div>
                    {/* Process Step Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Process Section End */}

    {/* Our Pricing Section Start */}
    <div className="our-pricing">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">pricing plan</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Transparent pricing for <span>every solution</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>We believe in providing clear and upfront pricing to ensure that you understand the value of our services.</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6">
                    {/* Pricing Box Start */}
                    <div className="pricing-box box-1 wow fadeInUp">
                        {/* Pricing Title Start */}
                        <div className="pricing-title">
                            <h2><sup>$</sup>29<sub>/month</sub></h2>
                            <h3>basic plan</h3>
                        </div>
                        {/* Pricing Title End */}

                        {/* Pricing List Start */}
                        <div className="pricing-list">
                            <ul>
                                <li>Standard Manufacturing Services</li>
                                <li>Quality Control Checks</li>
                                <li>Technical Support</li>
                                <li>Monthly Progress Reports</li>
                            </ul>
                        </div>
                        {/* Pricing List End */}

                        {/* Pricing Button Start */}
                        <div className="pricing-btn">
                            <Link href="#" className="btn-default"><span>purchase now</span></Link>
                        </div>
                        {/* Pricing Button End */}
                    </div>
                    {/* Pricing Box End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Pricing Box Start */}
                    <div className="pricing-box highlighted-box box-2 wow fadeInUp" data-wow-delay="0.2s">
                        {/* Pricing Title Start */}
                        <div className="pricing-title">
                            <h2><sup>$</sup>39<sub>/month</sub></h2>
                            <h3>advanced plan</h3>
                        </div>
                        {/* Pricing Title End */}

                        {/* Pricing List Start */}
                        <div className="pricing-list">
                            <ul>
                                <li>Standard Manufacturing Services</li>
                                <li>Quality Control Checks</li>
                                <li>Technical Support</li>
                                <li>Monthly Progress Reports</li>
                            </ul>
                        </div>
                        {/* Pricing List End */}

                        {/* Pricing Button Start */}
                        <div className="pricing-btn">
                            <a href="#" className="btn-default btn-highlighted"><span>purchase now</span></a>
                        </div>
                        {/* Pricing Button End */}
                    </div>
                    {/* Pricing Box End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Pricing Box Start */}
                    <div className="pricing-box box-3 wow fadeInUp" data-wow-delay="0.4s">
                        {/* Pricing Title Start */}
                        <div className="pricing-title">
                            <h2><sup>$</sup>49<sub>/month</sub></h2>
                            <h3>premium plan</h3>
                        </div>
                        {/* Pricing Title End */}

                        {/* Pricing List Start */}
                        <div className="pricing-list">
                            <ul>
                                <li>Standard Manufacturing Services</li>
                                <li>Quality Control Checks</li>
                                <li>Technical Support</li>
                                <li>Monthly Progress Reports</li>
                            </ul>
                        </div>
                        {/* Pricing List End */}

                        {/* Pricing Button Start */}
                        <div className="pricing-btn">
                            <a href="#" className="btn-default"><span>purchase now</span></a>
                        </div>
                        {/* Pricing Button End */}
                    </div>
                    {/* Pricing Box End */}
                </div>

                <div className="col-lg-12">
                    {/* Pricing Benifit List Start */}
                    <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.6s">
                        <ul>
                            <li><Image src="/images/icon-pricing-benefit-1.svg" alt="" width={20} height={20} />Get 30 day free trial</li>
                            <li><Image src="/images/icon-pricing-benefit-2.svg" alt="" width={20} height={20} />No any hidden fees pay</li>
                            <li><Image src="/images/icon-pricing-benefit-3.svg" alt="" width={20} height={20} />You can  cancel anytime </li>
                        </ul>
                    </div>
                    {/* Pricing Benifit List End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Pricing Section End */}

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

    {/* Our Blog Section Start */}
    <div className="our-blog">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-5">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">latest blog</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Insights from our <span>latest blogs</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-7">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Stay updated with the latest trends, innovations, and expert insights in the manufacturing and industrial sectors</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <figure>
                                <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                                    <Image src="/images/blog-1.jpg" alt="" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                                </Link>
                            </figure>
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Sustainable Practices Reducing Waste in Industrial Production</Link></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single"><Image src="/images/arrow-white.svg" alt="" width={12} height={12} /></Link>
                            </div>
                            {/* Post Item Button End */}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>

                <div className="col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <figure>
                                <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                                    <Image src="/images/blog-2.jpg" alt="" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                                </Link>
                            </figure>
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Advance Robotics Revolutionizing Industrial Workflow</Link></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single"><Image src="/images/arrow-white.svg" alt="" width={12} height={12} /></Link>
                            </div>
                            {/* Post Item Button End */}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Blog Section End */}
    </>
  );
}
