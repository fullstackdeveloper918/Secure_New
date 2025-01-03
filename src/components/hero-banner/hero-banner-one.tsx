'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";

const HeroBannerOne = () => {


  useGSAP(() => {
  
    if(typeof window !== 'undefined'){
      setTimeout(() => {
        fadeAnimation();
      },7000)
    }
  }, {}); 

// nothing dvvdssv jhbsdcdbsbs 

  return (
    <div data-theme="dark">
    <div className="tp-hero-area tp-hero-ptb main-slider bannerVideo" >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="tp-hero-shape-1 p-relative videoV">
              <video
                      muted={true}
                      autoPlay={true}
                      playsInline={true}
                      loop={true}
                      width={700}
                      height={700}
                    >
                      <source src="/assets/video/Cyber Security Opener (After Effects template).mp4" type="video/mp4" />
                    </video>
                    {/* <iframe width="1920" height="1080" src="https://www.youtube.com/embed/qqRLBSwhFk4" title="Cyber Security Opener (After Effects template)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe> */}

                    {/* <video
                      muted={true}
                      autoPlay={true}
                      playsInline={true}
                      loop={true}
                      width={700}
                      height={700}
                    >
                      <source src="/assets/video/banner_video.mp4" type="video/mp4" />
                    </video> */}
           
                {/* <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={790}
                  height={700}
                  style={{ height: "auto" }}
                /> */}
              </div>
              <div className="tp-hero-title-box text-center p-relative Zindex100">
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative text-white">
                  IT Service
                    <span className="tp-hero-subtitle d-none d-lg-block ">
                      Hello <br /> People! We’re
                    </span>
                    <span className="tp-hero-shape-2 d-none d-md-block">
                      <Image
                        src="/assets/img/home-01/hero/hero-shape-1-1.png"
                        // src="/assets/img/home-01/hero/bpo.webp"
                        alt="shape"
                        width={40}
                        height={40}
                      />
                    </span>
                  </span>
                  <br />
                  All in 
                  <span className="tp-hero-title-img">
                    {/* <Image
                      className="tp-zoom-img"
                      // src="/assets/img/home-01/hero/hero-1-1.png"
                      src="/assets/img/home-01/hero/bpo.webp"
                      alt="hero-img"
                      width={270}
                      height={160}
                      style={{ height: "auto", borderRadius: '100px' }}
                    /> */}
                    <video
                      muted={true}
                      autoPlay={true}
                      playsInline={true}
                      loop={true}
                      width={260}
                      height={170}
                      style={{ height: "auto", borderRadius: '100px' }}
                    >
                      <source src="/assets/video/Cyber Security Opener (After Effects template).mp4" type="video/mp4" />
                    </video>
                  </span>
                  <span className="textblue">One Place
                  </span>
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp-btn-bounce p-relative Zindex100">
              <p>
                <span></span>
                 We are a design and development agency based in the USA, specializing in cloud-based solutions, SEO services, and cutting-edge development for businesses looking to thrive in the digital world.
              </p>

               <span className="loopArrow"><Image
                      className="tp-zoom-img "
                      
                      src="/assets/img/home-02/award/bannerWraper.gif"
                      alt="hero-img"
                      width={270}
                      height={160}
                      style={{ height: "auto", borderRadius: '100px' }}
                    />
                    </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroBannerOne;
