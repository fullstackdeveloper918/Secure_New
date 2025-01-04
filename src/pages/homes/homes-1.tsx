"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import PreLoad from "@/components/PreLoad/PreLoad";
import ZoomEffect from "@/components/ZoomEffect/ZoomEffect";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import ServiceOne from "@/components/service/service-one";
import ProjectFour from "@/components/project/project-four";
import AwardOne from "@/components/award/award-one";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import FooterOne from "@/layouts/footers/footer-one";

import shape_1 from "@/assets/img/home-01/footer/footer-circle-shape-1.png";
import shape_2 from "@/assets/img/home-01/footer/footer-circle-shape-2.png";

import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";

import CounterOne from "@/components/counter/counter-one";
import ProjectTextLine from "@/components/project/project-text-line";
import AwardTwo from "@/components/award/award-two";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import ProjectOne from "@/components/project/project-one";
import VideOne from "@/video/video-one";
import BrandOne from "@/components/brand/brand-one";

const HomeMain = () => {
  const comp = useRef(null);

  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();

      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });

      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
      awardAnimOne();
      charAnimation();
      instagramAnim();
      titleAnimation();
      projectThreeAnimation();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Wrapper showBackToTop={false}>
        <div id="magic-cursor">
          <div id="ball"></div>
        </div>

        <PreLoad />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <HeaderOne />
              <HeroBannerOne />
              <VideOne />

              <BrandOne />

              <ServiceOne />

        

              <ProjectOne />

              <AwardOne />

              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-xl-12">
                    <ProjectTextLine />
                  </div>
                </div>
              </div>

              {/* <CounterOne /> */}

              <TeamOne />

              <TestimonialOne />
            </main>

            <FooterOne />
          </div>
        </div>

        <div className="tp-footer-shape-wrap z-index-5 smooth">
          <Link href="#">
            <div className="tp-footer-shape p-relative">
              <Image className="img-1" src={shape_1} alt="shape" />
              <Image className="img-2" src={shape_2} alt="shape" />
              <span></span>
            </div>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default HomeMain;
