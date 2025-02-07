// "use client"
import Link from "next/link";
import React from "react";
import Image from 'next/image';

const AnimationHeader = () => {
 return(
    <>
    
      <div className="word"></div>
      <div className="cd-index cd-main-content">
        <div
          id="clapat-page-content"
          className="dark-content"
          data-bgcolor="#ebebeb"
        >
          <header
            className="clapat-header classic-menu invert-header"
            data-menucolor="#0c0c0c"
          >
            <div className="header-gradient"></div>

            <div id="header-container">
              <div id="clapat-logo" className="hide-ball">
                <Link className="ajax-link" data-type="page-transition" href="/">
                  <Image
                    className="black-logo"
                    src="/images/logo.png"
                    alt="ClaPat Logo"
                    width= {210}
                    height= {21}
                  />
                  <Image
                    className="white-logo"
                    src="/images/logo-white.png"
                    alt="ClaPat Logo"
                    width= {210}
                    height= {21}
                  />
                </Link>
              </div>

              <nav className="clapat-nav-wrapper">
                <div className="nav-height">
                  <ul data-breakpoint="1025" className="flexnav">
                    <li className="menu-timeline link">
                      <Link
                        className="ajax-link"
                        data-type="page-transition"
                        href="/about-us"
                      >
                        <div className="before-span">
                        
                          <span data-hover="About Us" data-text="About Us">About Us</span>
                        </div>
                      </Link>
                    </li>
                   
                    <li className="menu-timeline link">
                      <Link
                        className="ajax-link"
                        data-type="page-transition"
                        href="/service"
                      >
                        <div className="before-span">
                          <span data-hover="Service" data-text="Service">Service</span>
                        </div>
                      </Link>
                      <ul>
                        <li>
                          <Link
                            className="ajax-link"
                            href="/service/"
                            data-type="page-transition"
                          >
                            Server Management & Cloud Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            IT Support & Managed Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Cybersecurity Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Business SEO & Digital Visibility
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Content Creation & Marketing Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ajax-link"
                            href="index-portfolio.html"
                            data-type="page-transition"
                          >
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="ajax-link"
                            href="index-playground.html"
                            data-type="page-transition"
                          >
                            Playground
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-timeline link">
                      <Link
                        className="ajax-link"
                        data-type="page-transition"
                        href="/Why-Choose-Us"
                      >
                        <div className="before-span">
                          <span data-hover="Why Choose Us" data-text="Why Choose Us">Why-Choose-Us</span>
                        </div>
                      </Link>
                    </li>
                    <li className="menu-timeline link">
                      <Link
                        className="ajax-link"
                        data-type="page-transition"
                        href="/contact"
                      >
                        <div className="before-span">
                          <span data-hover="Contact" data-text="Contact">Contact</span>
                        </div>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </nav>

              <Link
                className="header-button ajax-link"
                data-type="page-transition"
                href="contact.html"
              >
                <div className="button-icon-link right">
                  <div className="icon-wrap-scale">
                    <div className="icon-wrap parallax-wrap">
                      <div className="button-icon parallax-element">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="button-text sticky right">
                    <span data-hover="Let's Talk">Let's Talk</span>
                  </div>
                </div>
              </Link>

              <div className="button-wrap right menu burger-lines">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <div id="burger-wrapper">
                      <div id="menu-burger">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-text sticky right">
                  <span data-hover="Menu">Menu</span>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      {/* </main> */}
    </>
  );
};

export default AnimationHeader;