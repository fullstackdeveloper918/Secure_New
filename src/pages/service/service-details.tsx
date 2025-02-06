"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ServiceDetailsArea from "@/components/service/service-details-area";
import LineImgSlider from "@/components/line-text/line-img-slider";
// import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import { Leaf } from "@/components/svg";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import AnimationHeader from "@/components/animation_header";
import { ServiceItems } from "@/components/service/service-five";
import ServiceFour from "@/components/service/service-four";
import ServiceThree from "@/components/service/service-three";
import FooterFour from "@/layouts/footers/footer-four";
import { servicePanel } from "@/utils/panel-animation";


const ServiceDetailsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      titleAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* <AnimationHeader /> */}


      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
           
            <ServiceDetailsArea />       
                <ServiceThree />
          </main>
           <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsMain;
