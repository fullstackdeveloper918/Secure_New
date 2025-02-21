import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo,FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree({aboutResponse}) {

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
              {aboutResponse?.data?.about_our_story_section_heading}
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h2 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
             {aboutResponse?.data?.about_our_story_section_experienced_heading}
                <span>
                 
                  <br />{aboutResponse?.data?.about_our_story_experienced_heading_second}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className=" about-img">
            <Image src="/images/about-us.png"  alt="shape" width={500} height={300} style={{ width: "auto", height: "auto" }} 
/>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
             {aboutResponse?.data?.about_our_story_section_paragraph}
              </p>
              <p className="mb-45 tp_fade_bottom">
            {aboutResponse?.data?.about_our_story_section_paragraph_second}
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                {aboutResponse?.data?.about_our_story_section_button}
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
