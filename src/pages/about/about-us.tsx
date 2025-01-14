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
import FooterTwo from "@/layouts/footers/footer-two";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import TeamOne from "@/components/team/team-one";
import FunFactOne from "@/components/fun-fact/fun-fact-one";
import BrandFive from "@/components/brand/brand-five";
import AwardOne from "@/components/award/award-one";
// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import AboutThree from "@/components/about/about-three";
import AboutFour from "@/components/about/about-four";
import FooterFour from "@/layouts/footers/footer-four";
import HeaderOne from "@/layouts/headers/header-one";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderEleven transparent={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <AboutUsHero />

            <AboutUsArea />
            <AboutFour/>
            <AboutThree/>

            <TeamOne spacing="" />

            <FunFactOne />

            <BrandFive />

            <AwardOne cls="ab-award-style pt-120 pb-120" abStyle={true} />
          </main>

          {/* <FooterTwo topCls="" /> */}
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
