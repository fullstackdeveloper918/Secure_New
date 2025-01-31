"use client"
// import ClapatSlider from '@/components/sliderProject/sliderProject';
import React, { useEffect } from 'react';
import Justfor from "../../../public/images/just-for.png"
const page = () => {
  useEffect(() => {
    // Example DOM manipulation (ensure elements exist before accessing them)
    const preloaderWrap = document.querySelector('.preloader-wrap');
    if (preloaderWrap) {
      preloaderWrap.classList.add('loaded'); // Add a class to indicate loaded state
    }
  }, []);

  return (
    <>
         <main>
        <div className="preloader-wrap" data-centerLine="Loading">
          <div id="text-container">
            <div className="word">Brewing some cool things</div>
            <div className="word">Hang tight, magic is happening</div>
            <div className="word">Loading your adventure</div>
          </div>

         
        </div>

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
                  <a
                    className="ajax-link"
                    data-type="page-transition"
                    href="index.html"
                  >
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
                          href="index.html"
                        >
                          <div className="before-span">
                            <span data-hover="Index">Index</span>
                          </div>
                        </a>
                      </li>
                      <li className="menu-timeline link">
                        <a
                          className="ajax-link active"
                          data-type="page-transition"
                          href="#"
                        >
                          <div className="before-span">
                            <span data-hover="Projects">Projects</span>
                          </div>
                        </a>
                        <ul>
                          <li>
                            <a
                              className="ajax-link"
                              href="index-highlights.html"
                              data-type="page-transition"
                            >
                              Highlights
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
                          href="about.html"
                        >
                          <div className="before-span">
                            <span data-hover="Agency">Agency</span>
                          </div>
                        </a>
                      </li>
                      <li className="menu-timeline link">
                        <a
                          className="ajax-link"
                          data-type="page-transition"
                          href="resources.html"
                        >
                          <div className="before-span">
                            <span data-hover="Resources">Resources</span>
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

            <div id="content-scroll">
              <div id="main">
                <div id="hero" className="has-image autoscroll">
                  <div id="hero-styles">
                    <div
                      id="hero-caption"
                      className="content-full-width parallax-scroll-caption"
                    >
                      <div className="inner">
                        <h1 className="hero-title caption-timeline">
                          <span>Sport's</span> <span>Specials</span>
                        </h1>
                        <div className="hero-subtitle caption-timeline onload-shuffle">
                          <span>Branding</span>
                        </div>
                      </div>

                      <div id="hero-footer">
                        <div className="hero-footer-left">
                          <div className="button-wrap left scroll-down">
                            <div className="icon-wrap parallax-wrap">
                              <div className="button-icon parallax-element">
                                <i className="fa-solid fa-arrow-down"></i>
                              </div>
                            </div>
                            <div className="button-text sticky left">
                              <span data-hover="SCROLL TO EXPLORE">
                                SCROLL TO EXPLORE
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer-right">
                          <div
                            id="share"
                            className="page-action-content"
                            data-text="SHARE:"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="hero-image-wrapper"
                  className="change-header-color hero-pixels-cover parallax-scroll-image"
                >
                  <div id="hero-background-layer" className="parallax-scroll-image">
                    <div
                      id="hero-bg-image"
                      style={{ backgroundImage: "url('/images/iphone-15-pro.png')" }}
                    ></div>
                  </div>
                </div>

                <div id="main-content" >
                  <div id="main-page-content">
                    <div className="bg-liner marginTBo width90">
                    <div
                      className="content-row small row_padding_top light-section"
                      // data-bgcolor="#ebebeb"
                    >
                      <figure>
                        <a href="/images/just-for.png" className="image-link">
                          <img
                            src={Justfor.src}
                            alt="Image Title"
                          />
                        </a>
                        <figcaption>Caption</figcaption>
                      </figure>
                    </div>

                    <div
                      className="content-row small row_padding_bottom light-section text-align-center"
                      // data-bgcolor="#ebebeb"
                    >
                      <hr />
                      <hr className="destroy" />
                      <p className="bigger has-opacity">
                        Web PROJECT eskale
                        Gear up for victory with our exclusive range of Brazil-inspired apparel. 
                      </p>
                    </div>
                    </div>
                    <div className="content-row full light-section disable-header-gradient change-header-color" data-bgcolor="#ebebeb">
          <figure className="has-parallax">
            <img 
              src="/images/our-process.png" 
              alt="Image Title" 
              width={1920} // Adjust width based on your image
              height={750} // Adjust height based on your image
              className="parallax-image"
            />
          </figure>
        </div>


        <div className="content-row small row_padding_top row_padding_bottom light-section text-align-center" data-bgcolor="#ebebeb">
      <div className="pin-spacer">
        <div className="pinned-lists-wrapper scale-mode" data-duration="3x">
          <p className="smaller">Characteristics</p>
          <ul className="pinned-lists">
            {["Flavorful", "Aromatic", "Spicy", "Savory", "Delicious"].map((item, index) => (
              <li key={index} className="pinned-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* <ClapatSlider /> */}
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
