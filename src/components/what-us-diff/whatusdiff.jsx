"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./whatus.module.css";

export default function PainSection() {
  const [fontSize, setFontSize] = useState("3vw");
  const [opacity, setOpacity] = useState(1);
  const [background, setBackground] = useState("#F5F5F5");
  const [textColor, setTextColor] = useState("#000");

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY;
      let blackSectionTop = document.getElementById("black-section").offsetTop;
      let windowHeight = window.innerHeight;
      let progress = scrollPos / (blackSectionTop - windowHeight / 20);

      let minFontSize = 3; // in VW
      let maxFontSize = 1000; // in VW
      let newSize = minFontSize + (maxFontSize - minFontSize) * progress;
      setFontSize(`${Math.min(newSize, maxFontSize)}vw`);

      if (progress > 0.3) {
        setBackground("#000");
        setTextColor("#000");
      } else {
        setBackground("#F5F5F5");
        setTextColor("#000");
      }

      if (progress > 0.5) {
        setOpacity(Math.max(1 - (progress - 0.5) * 2, 0));
      } else {
        setOpacity(1);
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
          {[
            {
              src: "/security-icon.png",
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
          ].map((card, index) => (
            <div key={index} className={styles.card}>
              <Image src={card.src} alt={card.alt} width={50} height={50} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
