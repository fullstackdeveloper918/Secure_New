"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";

const HeroBannerOne = () => {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        fadeAnimation();
      }, 7000);
    }
  }, {});

  // nothing dvvdssv jhbsdcdbsbs

  return (
    <div>
      <div className="tp-hero-area tp-hero-ptb main-slider bannerVideo">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="tp-hero-title-wrap mb-35 p-relative">
                {/* <div className="tp-hero-shape-1 p-relative videoV">
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
                    
              </div> */}
                <div className="tp-hero-title-box text-center p-relative Zindex100">
                  <h1 className="tp-hero-title">
                    <div className="overflow-hidden">

                    <motion.div
                      initial={{ opacity: 0, y: 200 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 11 }}
                      className="p-relative "
                      >
                      Your <b>Ultimate</b> Gateway to
                      <br />
                      <span className="boldHeading">
                        <b>Everything  </b>
                      </span>
                    </motion.div>
                      </div>
                    <motion.div
                      initial={{ opacity: 0,  y: 450 }}
                      animate={{ opacity: 1, y: 0, }}
                      transition={{ duration: 0.9, delay: 12 }}
                      className="p-relative "
                    >
                      <span className="boldHeading">
                        <b className="textblue"> Secure</b>
                      </span>
                    </motion.div>
                  </h1>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 200  }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.8, delay: 13 }}
                className="tp-hero-content p-relative Zindex100"
              >
                <p>
                  Your Global Digital Partner, Empowering the Brands of Tomorrow
                  with Security and Innovation.
                </p>
              </motion.div>
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
