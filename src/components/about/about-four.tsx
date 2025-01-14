import React from "react";
import { BallRound } from "../svg";

export default function AboutFour() {
  return (
    <div className="tp-about-5-area black-bg pt-150 pb-120">
      <div className="container container-1560">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-about-5-title-box pb-90">
              <h4 className="tp-about-5-title p-relative tp_fade_bottom">
                <span className="tp-about-5-subtitle tp_fade_left">
                Our Services
                </span>
                <span className="text-space"></span>
                We offer expert  <br />solutions  
                 <span>
                  <BallRound />
                </span>
                in web development, digital marketing, branding,
                <span>
                  <BallRound />
                </span>
                and e-commerce to meet your needs.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-category">
            <span className="tp_fade_bottom">Cybersecurity Solutions</span>
              <span className="tp_fade_bottom">IT Support & Managed Services</span>
              <span className="tp_fade_bottom">Cloud & Server Management</span>
              <span className="tp_fade_bottom">Innovation & Growth</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-text">
              <p className="mb-30 tp_fade_bottom">
              Despite meticulously documenting each incident and providing evidence to the authorities, he was met with a disappointing lack of support—cases were dismissed as either too complex or too low-priority to pursue. 
              </p>
              <p className="mb-30 tp_fade_bottom">
              This frustration drove him to seek solutions that went beyond just preventing crime, focusing on supporting victims and helping them recover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
