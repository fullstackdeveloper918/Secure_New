"use client";
// import { Metadata } from "next";
import HomeOnePage from "../pages/homes/homes-1";
import PreLoader from "../components/preLoader";
import AnimationHeader from "../components/animation_header";
import HeroSection from "../components/hero_section";
import HeaderOne from "@/layouts/headers/header-one";
// export const metadata: Metadata = {
//   title: "Secure365 - Home Page",
// };

export default function Home() {
  return (
    <>
      {/* <!--/Preloader -->      */}
      <PreLoader />

      <div className="cd-index cd-main-content">
        {/* <!-- Page Content --> */}
        <div
          id="clapat-page-content"
          className="dark-content"
          data-bgcolor="#ebebeb"
        >
          {/* <!-- Header --> */}
          {/* <HeaderOne /> */}
          <AnimationHeader />
          {/* <!--/Header --> */}

          {/* <!-- Content Scroll --> */}
          <div id="content-scroll">
            {/* <!-- Main --> */}
            <div id="main">
              {/* <!-- Hero Section --> */}
              <HeroSection />
              {/* <!--/Hero Section --> */}

              {/* <!-- Main Content --> */}
              <div id="main-content">
                {/* <!-- Main Page Content --> */}
                <div id="main-page-content">
                  {/* <!-- Fit Thumb Screen Effects -->                                                           */}
                  <div id="itemsWrapperLinks">
                    <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
                      {/* <!-- ClaPat Portfolio --> */}
                      <div className="showcase-portfolio expand-grid filp-grid">
                        <div className="clapat-item not-expanded">
                          <div
                            className="slide-inner trigger-item"
                            data-centerline="OPEN"
                          >
                            <div className="img-mask pixels-cover">
                              <a
                                className="slide-link"
                                data-type="page-transition"
                                href="project01.html"
                              ></a>
                              <div className="section-image trigger-item-link">
                                <img
                                  src="images/01hero.jpg"
                                  className="item-image grid__item-img"
                                  alt=""
                                />
                              </div>
                              <img
                                src="images/01hero.jpg"
                                className="grid__item-img grid__item-img--large"
                                alt=""
                              />
                            </div>
                            <div className="slide-caption trigger-item-link-secondary">
                              <div className="slide-title">
                                <span>Bob's Specials</span>
                              </div>
                              <div className="slide-date">
                                <span>2024</span>
                              </div>
                              <div className="slide-cat">
                                <span>Branding</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="clapat-item expanded">
                          <div
                            className="slide-inner trigger-item"
                            data-centerline="OPEN"
                          >
                            <div className="img-mask pixels-cover">
                              <a
                                className="slide-link"
                                data-type="page-transition"
                                href="project02.html"
                              ></a>
                              <div className="section-image  trigger-item-link">
                                <img
                                  src="images/02hero.jpg"
                                  className="item-image grid__item-img"
                                  alt=""
                                />
                              </div>
                              <img
                                src="images/02hero.jpg"
                                className="grid__item-img grid__item-img--large"
                                alt=""
                              />
                            </div>
                            <div className="slide-caption trigger-item-link-secondary">
                              <div className="slide-title">
                                <span>This is Willo</span>
                              </div>
                              <div className="slide-date">
                                <span>2024</span>
                              </div>
                              <div className="slide-cat">
                                <span>Web Design</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="clapat-item not-expanded">
                          <div
                            className="slide-inner trigger-item"
                            data-centerline="OPEN"
                          >
                            <div className="img-mask pixels-cover">
                              <a
                                className="slide-link"
                                data-type="page-transition"
                                href="project03.html"
                              ></a>
                              <div className="section-image trigger-item-link">
                                <img
                                  src="images/03hero.jpg"
                                  className="item-image grid__item-img"
                                  alt=""
                                />
                              </div>
                              <img
                                src="images/03hero.jpg"
                                className="grid__item-img grid__item-img--large"
                                alt=""
                              />
                            </div>
                            <div className="slide-caption trigger-item-link-secondary">
                              <div className="slide-title">
                                <span>The Infin</span>
                              </div>
                              <div className="slide-date">
                                <span>2024</span>
                              </div>
                              <div className="slide-cat">
                                <span>Photography</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- ClaPat Portfolio -->  */}

                      {/* <!-- Row --> */}
                      <div
                        className="content-row full row_padding_top row_padding_left row_padding_right light-section fadeout-element"
                        data-bgcolor="transparent"
                      >
                        <h1 className="text-align-center">
                          We help businesses{" "}
                          <span
                            className="has-scale-image hide-ball"
                            data-img="images/client-01.png"
                            data-bgcolor="#000"
                          ></span>{" "}
                          to innovate and{" "}
                          <span
                            className="has-scale-image hide-ball"
                            data-img="images/client-02.png"
                            data-bgcolor="#000"
                          ></span>{" "}
                          remain highly relevant to their customers by
                          developing{" "}
                          <span
                            className="has-scale-image hide-ball"
                            data-img="images/client-03.png"
                            data-bgcolor="#000"
                          ></span>{" "}
                          edge digital products
                        </h1>
                      </div>
                      {/* <!--/Row --> */}

                      {/* <!-- Row --> */}
                      <div
                        className="content-row light-section row_padding_bottom "
                        data-bgcolor="#ebebeb"
                      >
                        <hr />

                        <div className="one_half"></div>

                        <div className="one_half last">
                          <p className="bigger has-shuffle">The Challenge</p>
                          <p className="has-opacity" data-delay="0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                          </p>

                          <div className="button-wrap right button-link has-animation">
                            <div className="icon-wrap parallax-wrap">
                              <div className="button-icon parallax-element">
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                            </div>
                            <a
                              className="ajax-link"
                              data-type="page-transition"
                              href="about.html"
                            >
                              <div className="button-text sticky right">
                                <span data-hover="About Us">About Us</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!--/Row --> */}

                      {/* <!-- Row --> */}
                      <div
                        className="content-row full text-align-center dark-section"
                        data-bgcolor="#ebebeb"
                      >
                        <div className="projects-list-wrapper invert-header-color">
                          <ul className="projects-list-captions">
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project04.html"
                              ></a>
                              <span>The Invincibles</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project05.html"
                              ></a>
                              <span>Provenance</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project06.html"
                              ></a>
                              <span>Unbreak</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project07.html"
                              ></a>
                              <span>Kouch Dominion</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project08.html"
                              ></a>
                              <span>VX Lab</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project09.html"
                              ></a>
                              <span>Mimco Blue</span>
                            </li>
                          </ul>

                          <ul className="projects-list-images">
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/04hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                  <div className="hero-video-wrapper">
                                    {/* <video loop muted className="bgvid">
                                                                   <source src="images/04hero.mp4" type="video/mp4"/>
                                                               </video> */}
                                  </div>
                                </div>
                                <img
                                  src="images/04hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/05hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/05hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/06hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/06hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/07hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/07hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/08hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/08hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/09hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/09hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="pixels-cover"></li>
                          </ul>
                        </div>
                      </div>
                      {/* <!--/Row --> */}

                      {/* <!-- Row --> */}
                      <div
                        className="content-row small text-align-center light-section"
                        data-bgcolor="#ebebeb"
                      >
                        <hr />

                        <p className="bigger has-shuffle no-margins">
                          Continue Exploring Our Work
                        </p>

                        <hr />

                        <div
                          className="button-box has-animation"
                          data-delay="100"
                        >
                          <div className="clapat-button-wrap parallax-wrap hide-ball">
                            <div className="clapat-button parallax-element">
                              <div className="button-border rounded parallax-element-second">
                                <a
                                  className="ajax-link"
                                  data-type="page-transition"
                                  href="index-portfolio.html"
                                >
                                  <span data-hover="All Projects">
                                    All Projects
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--/Row --> */}
                    </div>
                  </div>
                  {/* <!-- Fit Thumb Screen Effects --> */}
                </div>
                {/* <!--/Main Page Content --> */}

                {/* <!-- Page Navigation -->  */}
                <div id="page-nav" className="move-nav-onload">
                  <div className="page-nav-wrap">
                    <div className="page-nav-caption nav-full-caption content-full-width text-align-center">
                      <div className="inner">
                        <a
                          className="next-ajax-link-page"
                          data-type="page-transition"
                          data-centerline="GO TO"
                          href="about.html"
                        >
                          <div className="next-hero-title caption-timeline">
                            <span>Creative</span> <span>Design Agency</span>
                          </div>
                        </a>
                        <div className="next-hero-subtitle caption-timeline">
                          <span>We are passionate about</span>{" "}
                          <span>creating memorable experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <!--/Page Navigation --> */}

               
              </div>
              {/* <!--/Main Content -->  */}
            </div>
            {/* <!--/Main --> */}

            {/* <!-- Footer --> */}
            <footer className="clapat-footer hidden">
              <div id="footer-container">
                <div id="backtotop" className="button-wrap left">
                  <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                      <i className="fa-solid fa-angle-up"></i>
                    </div>
                  </div>
                  <div className="button-text sticky left">
                    <span data-hover="Back Top">Back Top</span>
                  </div>
                </div>

                <div className="footer-middle">
                  <div className="copyright">
                    2024 ©{" "}
                    <a
                      className="link"
                      target="_blank"
                      href="https://www.clapat.com/"
                    >
                      ClaPat
                    </a>
                    . All rights reserved.
                  </div>
                </div>

                <div className="socials-wrap">
                  <div className="socials-icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <div className="socials-text">Follow Us</div>
                  <ul className="socials">
                    <li>
                      <span className="parallax-wrap">
                        <a
                          className="parallax-element"
                          href="https://www.dribbble.com/clapat"
                          target="_blank"
                        >
                          Db
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="parallax-wrap">
                        <a
                          className="parallax-element"
                          href="https://www.twitter.com/clapatdesign"
                          target="_blank"
                        >
                          Tx
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="parallax-wrap">
                        <a
                          className="parallax-element"
                          href="https://www.behance.com/clapat"
                          target="_blank"
                        >
                          Be
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="parallax-wrap">
                        <a
                          className="parallax-element"
                          href="https://www.facebook.com/clapat.ro"
                          target="_blank"
                        >
                          Fb
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="parallax-wrap">
                        <a
                          className="parallax-element"
                          href="https://www.instagram.com/clapat.themes/"
                        >
                          In
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            {/* <!--/Footer --> */}
          </div>
          {/* <!--/Content Scroll --> */}

          <div id="app"></div>
        </div>
        {/* <!--/Page Content --> */}
      </div>

      <div className="cd-cover-layer"></div>
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x"></div>
          <div id="ball-drag-y"></div>
          <div id="ball-loader"></div>
        </div>
      </div>
      <div id="clone-image">
        <div className="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
    </>
  );
}
