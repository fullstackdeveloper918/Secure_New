"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
import FooterTwo from "@/layouts/footers/footer-two";
import AnimationHeader from "@/components/animation_header";

// animation
import { charAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";

const ContactMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
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
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Secure 365</span>
                        <h4 className="tm-hero-title-big tp-char-animation">
                        How to Reach Us
                        </h4>
                        <p>We make it easy for you to get in touch, whether you prefer a quick phone call, a detailed email, or scheduling a consultation at a time that works for you.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <ContactTwo/>
              {/* contact area */}

              {/* contact location */}
              <ContactLocation/>  
              {/* contact location */}
            </main>

            {/* footer area */}
            {/* <FooterTwo topCls="" whiteFooter={true} /> */}
                      <FooterFour />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
