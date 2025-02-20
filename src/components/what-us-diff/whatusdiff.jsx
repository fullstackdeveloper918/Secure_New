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
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const painSection = document.getElementById("pain-section");
      if (!painSection) return;
      
      const rect = painSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";
      lastScrollY = window.scrollY;
      
      const progress = Math.max(0, Math.min(1, Math.abs(rect.top) / windowHeight));
      let minFontSize = 3; // in VW
      let maxFontSize = 800; // Adjusted max zoom size
      let newSize = scrollDirection === "down" 
        ? maxFontSize - (maxFontSize - minFontSize) * progress // Zoom out when scrolling down
        : minFontSize + (minFontSize - minFontSize) * progress; // Zoom in when scrolling up
      setFontSize(`${newSize}vw`);
      
      if (rect.top < 0) {
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
