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
import HeaderEleven from "@/layouts/headers/header-eleven";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FaqArea from "@/components/faq/faq-area";
import AnimationHeader from "@/components/animation_header";
import bannerDiv from "../../../public/assets/img/inner-faq/faq/InnerDiv.png";
import bannerDiv2 from "../../../public/assets/img/inner-faq/faq/InnerDiv_1.png";
import { ServiceItems } from "@/components/service/service-five";
import { Leaf } from "@/components/svg";
import ServiceFour from "@/components/service/service-four";

const FaqMain = () => {
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
      {/* header area start */}
      {/* <HeaderEleven /> */}
      <AnimationHeader />

      {/* header area end */}

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
              {/* faq hero */}
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Secure 365</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Why Choose{" "}
                          <span className="blueColor">Secure365?</span>
                        </h4>
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
              {/* faq hero */}

              {/* {instrductionSec} */}
              <div className="heroIntro py-10">
                <div className="container">
                  <div className="row align-center justify-between flex-col-reverse md:gap-0 gap-8">
                    <div className="col-xl-6 col-md-6 col-sm-12  max-w-full md:max-w-2xl">
                    <div className="tm-hero-content">
                       <h2 className="tm-herointro-title tp-char-animation">
                       Is   <span className="blueColor">Secure365</span> the {" "}
                         Right IT Partner for Your Business?
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
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* {instrductionSec} */}
                            {/* {instrductionSec} */}
                            <div className="heroIntro py-10">
                <div className="container">
                  <div className="row align-center justify-between md:gap-0 gap-8">
                  <div className="col-xl-6 col-md-6 col-sm-12">
                      <Image
                        className="rightImage"
                        src={bannerDiv2}
                        alt="shape"
                      />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12  max-w-full md:max-w-2xl">
                    <div className="tm-hero-content">
                       <h2 className="tm-herointro-title tp-char-animation">
                       Our Commitment to You
                        </h2>
                      </div>
                      <div className="instropara tp_title_anim">
                        <p>
                        We know that choosing an IT partner is a big decision, and we don’t take that responsibility lightly. At Secure365, our commitment goes beyond providing exceptional services—we’re dedicated to building lasting partnerships that empower our clients to succeed. 
                         </p>
                         <br />
                         <p>
                         We promise to always put your needs first, communicate openly, and provide solutions that are not only secure and reliable but also aligned with your business goals. Our aim is simple: to take the hassle out of IT, so you can focus on what matters most—growing your business
                         </p>
                       
                      </div>
                    </div>

                  
                  </div>
                </div>
              </div>
              {/* {instrductionSec} */}

              {/* faq area */}
              <FaqArea />
              {/* faq area */}

                        {/* service area */}

            <ServiceFour />
            {/* service area */}



              {/* big text */}
              <BigText />
              {/* big text */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqMain;
