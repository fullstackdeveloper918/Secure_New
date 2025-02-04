"use client";
import PreLoader from "../components/preLoader";
import AnimationHeader from "../components/animation_header";
import HeroSection from "../components/HeroSection";
import AwardOne from "@/components/award/award-one";
import ProjectTextLine from "@/components/project/project-text-line";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import BlogOne from "@/components/blog/blog-one";
import FooterFour from "@/layouts/footers/footer-four";
import React, { useEffect, useState } from "react";

const businessesData = [
  {
    text: "We help businesses",
    image:
      "https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png",
  },
  {
    text: "to innovate and",
    image:
      "https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png",
  },
];

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/home",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PreLoader />

      <div className="cd-index cd-main-content homepage">
        <div
          id="clapat-page-content"
          className="dark-content"
          data-bgcolor="#ebebeb"
        >
          <AnimationHeader />
          <div id="content-scroll">
            <div id="main">
              <HeroSection data={data?.featured_section_heading} />
              <div id="main-content">
                <div id="main-page-content">
                  <div id="itemsWrapperLinks">
                    <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
                      <div className="showcase-portfolio expand-grid filp-grid">
                        <div 
                        className="clapat-item not-expanded"
                        >
                          <div
                            className="slide-inner trigger-item"
                            // data-centerline="OPEN"
                          >
                            <div 
                            className="img-mask pixels-cover"
                            >
                              <a
                                className="slide-link"
                                data-type="page-transition"
                                href="/project"
                              ></a>
                              <div 
                              className="section-image trigger-item-link"
                              >
                                <img
                                  src="images/01hero1.jpg"
                                  className="item-image grid__item-img"
                                  alt=""
                                />
                              </div>
                              <img
                                src="images/01hero1.jpg"
                                className="grid__item-img grid__item-img--large"
                                alt=""
                              />
                            </div>
                            <div 
                            className="slide-caption trigger-item-link-secondary"
                            >
                              <div 
                              className="slide-title"
                              >
                                <span>Esakle</span>
                              </div>
                              <div 
                              className="slide-date"
                              >
                                <span>2024</span>
                              </div>
                              <div 
                              className="slide-cat"
                              >
                                <span> The Sport Wear </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="clapat-item expanded">
                          <div
                            className="slide-inner trigger-item"
                            // data-centerline="OPEN"
                          >
                            <div className="img-mask pixels-cover">
                              <a
                                className="slide-link"
                                data-type="page-transition"
                                href="/project"
                              ></a>
                              <div className="section-image  trigger-item-link">
                                {/* <img
                                  src="images/02hero.jpg"
                                  className="item-image grid__item-img"
                                  alt=""
                                /> */}
                             <video
                    className="play-video"
                    loop={true}
                    muted={true}
                    autoPlay={true}
                    playsInline={true}
                  >
                    <source
                      src="images/Untitled design.mp4"
                      type="video/mp4"
                    />
                  </video>
                              </div>
                              {/* <img
                                src="images/02hero.jpg"
                                className="grid__item-img grid__item-img--large"
                                alt=""
                              /> */}
                         
                            </div>
                            <div className="slide-caption trigger-item-link-secondary">
                              <div className="slide-title">
                                <span>Work Showcase</span>
                              </div>
                              <div className="slide-date">
                                <span>2024</span>
                              </div>
                              <div className="slide-cat">
                                <span>Templates</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="clapat-item not-expanded">
                          <div
                            className="slide-inner trigger-item"
                            // data-centerline="OPEN"
                          >
                            <div className="img-mask pixels-cover">
                              <a
                                className="slide-link"
                                data-type="page-transition"
                                href="/project"
                              ></a>
                              <div className="section-image trigger-item-link">
                                <img
                                  src="images/03hero.png"
                                  className="item-image grid__item-img"
                                  alt=""
                                />
                              </div>
                              <img
                                src="images/03hero.png"
                                className="grid__item-img grid__item-img--large"
                                alt=""
                              />
                            </div>
                            <div className="slide-caption trigger-item-link-secondary">
                              <div className="slide-title">
                                <span>B2B</span>
                              </div>
                              <div className="slide-date">
                                <span>2024</span>
                              </div>
                              <div className="slide-cat">
                                <span>
                                  The AI For B2B Growth
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-row full row_padding_top row_padding_left row_padding_right light-section fadeout-element"
                        data-bgcolor="#ebebeb"
                      >
                        <h1 className="text-align-center">
                          {data?.we_empower_businesses_data?.map(
                            (item, index) => (
                              <React.Fragment key={index}>
                                {item.we_empower_businesses_heading}{" "}
                                {item.we_empower_businesses_image && (
                                  <span
                                    className="has-scale-image hide-ball"
                                    data-img={item.we_empower_businesses_image}
                                    data-bgcolor="#000"
                                  >
                                    <div
                                      class="hidden-image"
                                      style={{
                                        backgroundImage: `url(${item.we_empower_businesses_image})`,
                                        backgroundColor: "rgb(0, 0, 0)",
                                      }}
                                    ></div>
                                  </span>
                                )}
                              </React.Fragment>
                            )
                          )}
                        </h1>
                      </div>

                      <div
                        className="content-row light-section row_padding_bottom "
                        data-bgcolor="#ebebeb"
                      >
                        <hr />

                        <div className="one_half"></div>

                        <div className="one_half last">
                          <p className="bigger has-shuffle">
                            {data?.home_page_challenge_section_challenge}
                          </p>
                          <p className="has-opacity" data-delay="0">
                            {data?.home_page_challenge_section_paragraph}
                          </p>

                          <div className="button-wrap right button-link has-animation">
                            <div className="icon-wrap parallax-wrap">
                              <div className="button-icon parallax-ele  ment">
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

                      {/* <div
                        className="content-row full text-align-center dark-section"
                        data-bgcolor="#ebebeb"
                      >
                        <div className="projects-list-wrapper invert-header-color">
                          <ul className="projects-list-captions">
                            {data &&
                              data?.home_page_projects_list_captions_data?.map(
                                (item, index) => (
                                  <React.Fragment key={index}>
                                    <li data-centerline="OPEN">
                                      <a
                                        className="list-link"
                                        data-type="page-transition"
                                        href="project05.html"
                                      ></a>
                                      <span>
                                        {item?.projects_list_captions_title}
                                      </span>
                                    </li>
                                  </React.Fragment>
                                )
                              )}
                          </ul>

                          <ul className="projects-list-images">
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="/images/011hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                  <div className="hero-video-wrapper"></div>
                                </div>
                                <img
                                  src="images/011hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/012hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/012hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/013hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/013hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/014hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/014hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/015hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/015hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/016hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/016hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="pixels-cover"></li>
                          </ul>
                        </div>
                      </div> */}

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
                              <span>Artificial Intelligence</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project05.html"
                              ></a>
                              <span>Blockchain Solution</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project06.html"
                              ></a>
                              <span>Network Solutions</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project07.html"
                              ></a>
                              <span>Cybersecurity</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project08.html"
                              ></a>
                              <span>Data & Analytics</span>
                            </li>
                            <li data-centerline="OPEN">
                              <a
                                className="list-link"
                                data-type="page-transition"
                                href="project09.html"
                              ></a>
                              <span>SEO & Marketing</span>
                            </li>
                          </ul>

                          <ul 
                          className="projects-list-images"
                          >
                            <li 
                            className="trigger-item"
                            >
                              <div 
                              className="img-mask"
                              >
                                <div 
                                className="section-image trigger-item-link"
                                >
                                  <img
                                    src="images/011hero.jpg"
                                    
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                  <div 
                                  className="hero-video-wrapper"
                                  >
                                  
                                  </div>
                                </div>
                                <img
                                  src="images/011hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div 
                              className="img-mask"
                              >
                                <div 
                                className="section-image trigger-item-link"
                                >
                                  <img
                                    src="images/012hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/012hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/013hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/013hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/014hero.png"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/014hero.png"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/015hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/015hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <img
                                    src="images/016hero.jpg"
                                    className="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="images/016hero.jpg"
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

                    </div>
                  </div>
                </div>
              </div>
            </div>

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
          </div>

          <div id="app"></div>
        </div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="awardsSec">
              <AwardOne data={data} />
            </div>

            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <ProjectTextLine data={data} />
                </div>
              </div>
            </div>

            <TeamOne data={data} />
            <TestimonialOne data={data} />
            <div className="awardsSec">
              <BlogOne />
            </div>
          </main>
          <FooterFour />
        </div>
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
