import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo,FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {

  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                Our story
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
              While running Techable, Jonathan experienced{" "}
                <span>
                  {" "}
                  <br />firsthand how damaging and pervasive cybercrime could be.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
              He encountered sophisticated scams, fraudulent buyers using stolen credit cards, and deceptive chargebacks that threatened his business. 
              </p>
              <p className="mb-45 tp_fade_bottom">
              Despite meticulously documenting each incident and providing evidence to the authorities, he was met with a disappointing lack of support—cases were dismissed as either too complex or too low-priority to pursue. This frustration drove him to seek solutions that went beyond just preventing crime, focusing on supporting victims and helping them recover.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                About Us
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
