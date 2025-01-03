"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";
const PageLoad = () => {
  const [isPreloaderVisible, setPreloaderVisible] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const preloaderRef = useRef(null);
  // Helper to simulate percentage animation dsdbs
  const animatePercentage = (start: number, end: number, duration: number) => {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const interval = setInterval(() => {
      current += 1;
      setPercentage(current);
      if (current === end) {
        clearInterval(interval);
      }
    }, stepTime);
  };
  // Main effect for Page Load
  useEffect(() => {
    const preloaderElement = preloaderRef.current;
    if (!preloaderElement) return;
    const animatePreloader = () => {
      imagesLoaded("body", () => {
        gsap.to(".percentage-wrapper", { duration: 0.7, delay: 0.3, ease: "power4.out" });
        gsap.to(".percentage", { duration: 0.7, opacity: 0, xPercent: 101, delay: 0.3, ease: "power4.out" });
        gsap.to(".preloader-wrap", { duration: 0.3, opacity: 0, delay: 1, ease: "power2.inOut", onComplete: () => setPreloaderVisible(false) });
      });
    };
    const estimatedTime = 3000; // Example total animation time in milliseconds
    animatePercentage(0, 100, estimatedTime);
    gsap.to(".loadbar", { width: "100%", duration: estimatedTime / 1000, ease: "linear" });
    setTimeout(animatePreloader, estimatedTime);
  }, []);
  return (
    <div className={`preloader-wrap ${isPreloaderVisible ? "visible" : "hidden"}`} ref={preloaderRef}>
      <div className="percentage-wrapper">
        <span id="percentage">{percentage}%</span>
      </div>
      <div className="loadbar"></div>
    </div>
  );
};
export default PageLoad;