"use client";
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const [isForceClosed, setIsForceClosed] = React.useState(false);

  const closeMenu = () => {
    setIsForceClosed(true);
    if (typeof window !== 'undefined' && window.jQuery) {
      window.jQuery('#menu').slicknav('close');
    }
  };

  const handleMouseEnter = () => {
    setIsForceClosed(false);
  };

  return (
    <>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="site-logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="TKI Safety" />
                </Link>
              </div>
              {/* Logo End */}
            </div>

            <div className="col-lg-9 col-md-12">
              {/* Topbar Contact Information Start */}
              <div className="topbar-contact-info">
                <ul>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <img src="/images/icon-phone.svg" alt="" />
                      </div>
                      <p>(+230) 5942 4281</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <img src="/images/icon-mail.svg" alt="" />
                      </div>
                      <p>info@tkisafety.com</p>
                    </a>
                  </li>
                </ul>
                {/* Topbar Qoute Button Start */}
                <div className="topbar-qoute-btn">
                  <Link href="/contact" className="btn-default"><span>Contact Us</span></Link>
                </div>
                {/* Topbar Qoute Button End */}
              </div>
              {/* Topbar Contact Information End */}
            </div>
          </div>
        </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <Link className="navbar-brand" href="/">
                <img src="/images/footer-logo.svg" alt="Logo" />
              </Link>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li 
                      className={`nav-item`}
                      onMouseEnter={handleMouseEnter}
                    >
                      <Link onClick={closeMenu} className="nav-link" href="/">Home</Link>
                     
                    </li>           
                       <li 
                      className={`nav-item submenu mega-menu ${isForceClosed ? 'force-hide' : ''}`}
                      onMouseEnter={handleMouseEnter}
                    >
                      <Link onClick={closeMenu} className="nav-link" href="/products">Products</Link>
                      <ul className="mega-menu-wrapper">
                        <li>
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Specialised Vehicles, Machinery & Equipment</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=fire-fighting">Fire Fighting</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=environmental-protection">Environmental Protection</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=disaster-management">Disaster Management</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=communication">Communication</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=aerial-rescue">Aerial Rescue</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Police and Military Equipment & Machinery</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=police-tactical">Police Tactical</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=environmental-protection">Environmental Protection</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=disaster-management">Disaster Management</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=communication">Communication</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=enforcement-monitoring">Enforcement and Monitoring</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Firefighting Equipment</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=detection-system">Detection System</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=alarm-system">Alarm System</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=fixed-installation">Fixed Installation</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=portable-firefighting">Portable Firefighting</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=signage">Signage</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                       <li 
                      className={`nav-item submenu mega-menu ${isForceClosed ? 'force-hide' : ''}`}
                      onMouseEnter={handleMouseEnter}
                    >
                      <Link onClick={closeMenu} className="nav-link" href="/training">Training</Link>
                      <ul className="mega-menu-wrapper">
                        <li>
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Specialised Vehicles, Machinery & Equipment</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=fire-fighting">Fire Fighting</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=environmental-protection">Environmental Protection</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=disaster-management">Disaster Management</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=communication">Communication</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=aerial-rescue">Aerial Rescue</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Police and Military Equipment & Machinery</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=police-tactical">Police Tactical</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=environmental-protection">Environmental Protection</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=disaster-management">Disaster Management</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=communication">Communication</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=enforcement-monitoring">Enforcement and Monitoring</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Firefighting Equipment</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=detection-system">Detection System</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=alarm-system">Alarm System</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=fixed-installation">Fixed Installation</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=portable-firefighting">Portable Firefighting</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=signage">Signage</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>        
                       <li 
                      className={`nav-item submenu mega-menu ${isForceClosed ? 'force-hide' : ''}`}
                      onMouseEnter={handleMouseEnter}
                    >
                      <Link onClick={closeMenu} className="nav-link" href="/products">Services</Link>
                      <ul className="mega-menu-wrapper">
                        <li>
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Specialised Vehicles, Machinery & Equipment</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=fire-fighting">Fire Fighting</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=environmental-protection">Environmental Protection</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=disaster-management">Disaster Management</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=communication">Communication</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=aerial-rescue">Aerial Rescue</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Police and Military Equipment & Machinery</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=police-tactical">Police Tactical</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=environmental-protection">Environmental Protection</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=disaster-management">Disaster Management</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=communication">Communication</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=enforcement-monitoring">Enforcement and Monitoring</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="mega-menu-section">
                                  <h4>Firefighting Equipment</h4>
                                  <ul>
                                    <li><Link onClick={closeMenu} href="/products?type=detection-system">Detection System</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=alarm-system">Alarm System</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=fixed-installation">Fixed Installation</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=portable-firefighting">Portable Firefighting</Link></li>
                                    <li><Link onClick={closeMenu} href="/products?type=signage">Signage</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>             
                    <li className="nav-item"><Link onClick={closeMenu} className="nav-link" href="/about">About Us</Link></li>
                  
                             
                  </ul>
                </div>

                {/* Header Social Box Start */}
                <div className="header-social-box d-inline-flex">
                  {/* Header Social Links Start */}
                  <div className="header-social-links">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="https://wa.me/23059424281?text=HI" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                      
                    </ul>
                  </div>
                  {/* Header Social Links End */}
                </div>     
                {/* Header Social Box End */}                   
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
}
