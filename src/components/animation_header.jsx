// "use client"
import React from "react";

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
                <a className="ajax-link" data-type="page-transition" href="/">
                  <img
                    className="black-logo"
                    src="/images/logo.png"
                    alt="ClaPat Logo"
                  />
                  <img
                    className="white-logo"
                    src="/images/logo-white.png"
                    alt="ClaPat Logo"
                  />
                </a>
              </div>

              <nav className="clapat-nav-wrapper">
                <div className="nav-height">
                  <ul data-breakpoint="1025" className="flexnav">
                    <li className="menu-timeline link">
                      <a
                        className="ajax-link"
                        data-type="page-transition"
                        href="/about-us"
                      >
                        <div className="before-span">
                        
                          <span data-hover="About Us" data-text="About Us">About Us</span>
                        </div>
                      </a>
                    </li>
                   
                    <li className="menu-timeline link">
                      <a
                        className="ajax-link"
                        data-type="page-transition"
                        href="/service"
                      >
                        <div className="before-span">
                          <span data-hover="Service" data-text="Service">Service</span>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Server Management & Cloud Solutions
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            IT Support & Managed Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Cybersecurity Solutions
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Business SEO & Digital Visibility
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajax-link"
                            href="/service-details"
                            data-type="page-transition"
                          >
                            Content Creation & Marketing Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajax-link"
                            href="index-portfolio.html"
                            data-type="page-transition"
                          >
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajax-link"
                            href="index-playground.html"
                            data-type="page-transition"
                          >
                            Playground
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-timeline link">
                      <a
                        className="ajax-link"
                        data-type="page-transition"
                        href="/Why-Choose-Us"
                      >
                        <div className="before-span">
                          <span data-hover="Why Choose Us" data-text="Why Choose Us">Why-Choose-Us</span>
                        </div>
                      </a>
                    </li>
                    <li className="menu-timeline link">
                      <a
                        className="ajax-link"
                        data-type="page-transition"
                        href="/contact"
                      >
                        <div className="before-span">
                          <span data-hover="Contact" data-text="Contact">Contact</span>
                        </div>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </nav>

              <a
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
              </a>

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