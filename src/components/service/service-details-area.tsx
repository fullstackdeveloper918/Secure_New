import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-1.png";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-2.png";

export default function ServiceDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-10">
              <span className="service-details__subtitle tp-char-animation">
              Secure, Scalable, and Hassle-Free
              </span>
              <h4 className="sv-hero-title tp-char-animation">
              Server & <span className="blueColor">Cloud Management</span>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-20">
                <p className="mb-30 tp_title_anim">
                Optimize your business’s operations
                  <br /> with managed server solutions and secure {" "}
                  <br /> cloud infrastructure.{" "}
                </p>
                <p className="tp_title_anim">
                  Explore our achievements and let yourself be <br /> convinced!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-10">
                <h2 className="tp_title_anim">
                Benefits of Choosing Secure365
                </h2>
                <p>
                Choosing Secure365 ensures your data remains protected, your systems stay resilient, and your peace of mind is guaranteed!
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  <li>
                    <h5>Enhanced Security</h5>
                    <p>Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.</p>
                    </li>
                  <li> <h5>Scalability & Flexibility</h5>
                  <p>Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.</p>
                  </li>
                  <li>
                  <h5>Improved Performance</h5>
                  <p>Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.</p>
                  </li>
                  <li>
                  <h5>Reduced Costs</h5>
                  <p>Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.</p>
                  </li>
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-10">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="service-details__left-text">
                <p>
                  Great user experience design lets users focus on the task they
                  have to complete & evokes emotion without distracting them.
                  Bonus points for when it also looks & feels aesthetically
                  pleasing!{" "}
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <a href="#">Cloud Migration & Setup</a>
                <a  href="#">
                Server Configuration & Optimization
                </a>
                <a href="#">Data Security & Backup Solutions</a>
                <a href="#">Hybrid Cloud & 
                On-Premises Solutions</a>
                <a href="#">Performance Monitoring & 24/7 Support</a>
                <a href="#">Disaster Recovery Planning</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                Why Choose Secure365 <br /> for Server & Cloud Management?
                </h4>
                <p className="mb-20">
                Managing servers and cloud environments can be overwhelming and time-consuming. That’s where Secure365 steps in. Our certified professionals handle every aspect of your server and cloud strategy,
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
