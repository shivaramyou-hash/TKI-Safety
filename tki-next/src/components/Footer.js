import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
    {/* Footer Start */}
    <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Footer Header Start */}
                    <div className="footer-header">
                        {/* Section Title Start */}
                        <div className="section-title dark-section">
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Ready to work with us?</h2>
                            <p>Join us to experience cutting-edge industrial solutions that drive innovation, lasting success.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Footer Contact Circle Start */}
                        <div className="footer-contact-circle">
                            <Image src="/images/contact-now-circle.svg" alt="" width={50} height={50} />
                        </div>
                        {/* Footer Contact Circle End */}
                    </div>
                    {/* Footer Header End */}                  
                </div>
                
                <div className="col-lg-6 col-md-12">
                    {/* About Footer Start */}
                    <div className="about-footer">
                        {/* Footer Logo Start */}
                        <div className="footer-logo">
                            <Image src="/images/footer-logo.svg" alt="" width={150} height={40} style={{ width: 'auto', height: 'auto' }} />
                        </div>
                        {/* Footer Logo End */}

                        {/* About Footer Content Start */}
                        <div className="about-footer-content">
                            <p>We are committed to providing personalized industrial solutions.</p>
                        </div>           
                        {/* About Footer Content End */}
                         
                        {/* Footer Social Link Start */}
                        <div className="footer-social-links">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        {/* Footer Social Link End */}
                    </div>
                    {/* About Footer End */}
                </div>
                
                <div className="col-lg-2 col-md-4 col-6">
                    {/* Footer Links Start */}
                    <div className="footer-links">
                        <h3>quick links</h3>
                        <ul>
                            <li><Link href="/">home</Link></li>
                            <li><Link href="/about">about us</Link></li>
                            <li><Link href="/services">services</Link></li>
                            <li><Link href="/blog">blog</Link></li>
                        </ul>
                    </div>
                    {/* Footer Links End */}
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                    {/* Footer Links Start */}
                    <div className="footer-links">
                        <h3>Security</h3>
                        <ul>
                            <li><a href="#">term & condition</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">help</a></li>
                            <li><Link href="/contact">contact us</Link></li>
                        </ul>
                    </div>
                    {/* Footer Links End */}
                </div>

                <div className="col-lg-2 col-md-4 col-12">
                    {/* Footer Links Start */}
                    <div className="footer-links">
                        <h3>Contact</h3>
                        <ul>
                            <li>+91 123654789</li>
                            <li>info@domainname.com</li>
                            <li>520, West Valley, Amin and minim</li>
                        </ul>
                    </div>
                    {/* Footer Links End */}
                </div>
            </div>

            {/* Footer Copyright Section Start */}
            <div className="footer-copyright">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        {/* Footer Copyright Start */}
                        <div className="footer-copyright-text">
                            <p>Copyright © 2024 All Rights Reserved.</p>
                        </div>
                        {/* Footer Copyright End */}
                    </div>
                </div>
            </div>
            {/* Footer Copyright Section End */}
        </div>
     </footer>
    {/* Footer End */}
    </>
  );
}
