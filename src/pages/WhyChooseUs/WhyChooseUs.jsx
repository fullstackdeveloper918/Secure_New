"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";

import BigText from "@/components/big-text";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FaqArea from "@/components/faq/faq-area";
import AnimationHeader from "@/components/animation_header";
import bannerDiv from "../../../public/assets/img/inner-faq/faq/InnerDiv.png";
import bannerDiv2 from "../../../public/assets/img/inner-faq/faq/InnerDiv_1.png";


import ServiceFour from "@/components/service/service-four";
import FooterFour from "@/layouts/footers/footer-four";

const FaqMain = ({ whyChooseData }) => {
 
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* <AnimationHeader /> */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Secure 365</span>
                        <h2 className="tm-hero-title tp-char-animation">
                         {whyChooseData?.title}{""}
                          <span className="blueColor">{whyChooseData?.why_choose_right_partner_heading_secure}?</span>
                        </h2>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          Expertise, reliability, and a commitment to your
                          success—discover why businesses choose Secure365 for
                          all their IT and security needs
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="heroIntro py-10">
                <div className="container">
                  <div className="row align-center justify-between flex-col-reverse md:gap-0 gap-8">
                    <div className="col-xl-6 col-md-6 col-sm-12  max-w-full md:max-w-2xl">
                      <div className="tm-hero-content">
                        <h2 className="tm-herointro-title tp-char-animation">
                          {whyChooseData?.why_choose_right_partner_heading} <span className="blueColor">{whyChooseData?.why_choose_right_partner_heading_secure}</span> {whyChooseData?.why_choose_right_partner_business}
                        
                        </h2>
                      </div>
                      <div className="instropara tp_title_anim">
                        <p>
                          When it comes to choosing an IT partner, you need more
                          than just someone to set up your systems or install a
                          firewall—you need a trusted advisor who understands
                          your business, anticipates your needs, and has the
                          expertise to solve complex challenges. At Secure365,
                          we bring together years of experience in
                          cybersecurity, IT management, and digital strategy to
                          deliver solutions that are tailored, proactive, and
                          focused on driving results.
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <Image
                        className="rightImage"
                        src={bannerDiv}
                        alt="shape"
                        width={1920}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heroIntro py-10">
                <div className="container">
                  <div className="row align-center justify-between md:gap-0 gap-8">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <Image
                        className="rightImage"
                        src={bannerDiv2}
                        alt="shape"
                        width={1920}
                        height={500}
                      />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12  max-w-full md:max-w-2xl">
                      <div className="tm-hero-content">
                        <h2 className="tm-herointro-title tp-char-animation">
                          {whyChooseData?.our_commitment_section_heading}
                        </h2>
                      </div>
                      <div className="instropara tp_title_anim">
                        <p>
                         {whyChooseData?.our_commitment_section_paragraph}
                        </p>
                        <br />
                        <p>
                         {whyChooseData?.our_commitment_section_paragraph_second}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FaqArea whyChooseData={whyChooseData}/>

              <ServiceFour whyChooseData={whyChooseData}/>

              <BigText whyChooseData={whyChooseData} />
            </main>
            <FooterFour />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqMain;
