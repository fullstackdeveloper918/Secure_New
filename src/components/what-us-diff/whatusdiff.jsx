"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import whatusImage3 from "../../../public/images/1.svg"
import whatusImage4 from "../../../public/images/4.svg"
import whatusImage5 from "../../../public/images/5.svg"
import styles from "./whatus.module.css";
export default function PainSection() {
  const [fontSize, setFontSize] = useState("3vw");
  const [opacity, setOpacity] = useState(1);
  const [background, setBackground] = useState("#F5F5F5");
  const [textColor, setTextColor] = useState("#000");
  // let lastScrollY = 0;
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const painSection = document.getElementById("pain-sec");
      if (!painSection) return;
      const rect = painSection.getBoundingClientRect();
      console.log("rect",rect)
      const windowHeight = window.innerHeight;
      console.log("rectwindowHeight",windowHeight)
      const scrollDirection = window.scrollY >= lastScrollY ? "down" : "up";
      lastScrollY = window.scrollY;
      const progress = Math.max(0, Math.min(1, Math.abs(rect.top) / windowHeight));
      let minFontSize = 3; // Minimum font size in VW
      let maxFontSize = 200; // Maximum font size in VW
      // **Fix: Ensure font size scales properly**
      let newSize = minFontSize + (maxFontSize - minFontSize) * (1 - progress);
      // **Clamp newSize to avoid going too small or too large**
      // newSize = Math.max(minFontSize, Math.min(maxFontSize, newSize));
      console.log("newSize",newSize)
      console.log("reactTop",rect.top)
      console.log("progress",progress)
      if (rect.top < 480) {
        newSize = minFontSize; // Keep it small once it reaches a certain point
      }
      setFontSize(`${newSize}vw`);
      // **Background color change logic**
      if (rect.top < 800) {
        setBackground("#101010");
        setTextColor("#101010");
      } else {
        setBackground("#F5F5F5");
        setTextColor("#101010");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* Pain Section */}
      <section
        id="pain-section"
        className={styles.painSection}
        style={{ backgroundColor: background }}
      >
        <h2
          id="pain-title"
          className={styles.painTitle}
          style={{ fontSize, opacity, color: textColor }}
        >
          We Understand Your Pain
        </h2>
      </section>
          <span className="" id="pain-sec"></span>
      {/* Black Section */}
      <section id="black-section" className={styles.blackSection}>
        <h2 className={styles.blackTitle}>What Makes Us Different?</h2>
        <div className={styles.cardContainer}>
          {/* {[
            {
              src: {whatusImage},
              alt: "Security Icon",
              title: "Information Security Solutions",
              description:
                "Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.",
            },
            {
              src: "/comprehensive-icon.png",
              alt: "Comprehensive Icon",
              title: "Comprehensive Solutions",
              description:
                "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.",
            },
            {
              src: "/victim-icon.png",
              alt: "Victim Icon",
              title: "Victim Approach",
              description:
                "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.",
            },
            {
              src: "/comprehensive-icon.png",
              alt: "Comprehensive Icon",
              title: "Comprehensive Solutions",
              description:
                "Secure365 provides innovative approaches to combat cyber threats, ensuring the highest security standards.",
            },
          ].map((card, index) => ( */}
            <div className={styles.card}>
              <Image src={whatusImage4} alt='Security_Icon' width={80} height={80} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Information Security Solutions</h3>
              <p className={styles.cardDescription}>Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.</p>
            </div>
            <div className={styles.card}>
              <Image src={whatusImage5} alt='Security_Icon' width={80} height={80} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Comprehensive Solutions</h3>
              <p className={styles.cardDescription}>Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.</p>
            </div>
            <div className={styles.card}>
              <Image src={whatusImage3} alt='Security_Icon' width={80} height={80} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Victim Approach</h3>
              <p className={styles.cardDescription}>Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.</p>
            </div>
            <div className={styles.card}>
              <Image src={whatusImage5} alt='Security_Icon' width={80} height={80} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Comprehensive Solutions</h3>
              <p className={styles.cardDescription}>Secure365 provides innovative approaches to combat cyber threats, ensuring the highest security standards.</p>
            </div>
          {/* ))} */}
        </div>
      </section>
    </div>
  );
}