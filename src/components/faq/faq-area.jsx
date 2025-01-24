import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";


export const faq_data = [
  {
    id: 1,
    question: "Decades of Real-World Experience",
    answer:
      "Secure365 was founded by Jonathan Brax, whose background in criminology and years of experience battling digital fraud bring a unique perspective to cybersecurity. Alongside a team of seasoned IT professionals, Jonathan built Secure365 to be more than just a service provider—it’s a response to the frustrations faced by businesses in navigating the complex world of cyber threats and IT management. With our expertise in technology and first-hand understanding of the challenges businesses face, we offer solutions that are practical, effective, and backed by real-world experience.",
  },
  {
    id: 2,
    question: "Customer-Centric Approach",
    answer:
      "Your success is our priority. We take the time to understand your business’s unique needs and tailor our services to support your goals. From small startups to established enterprises, we provide personalized solutions that fit your budget, scale with your growth, and adapt to your changing needs. With Secure365, you’re not just a client—you’re a partner",
  },
  {
    id: 3,
    question: "All-in-One IT Solutions",
    answer:
      "Your success is our priority. We take the time to understand your business’s unique needs and tailor our services to support your goals. From small startups to established enterprises, we provide personalized solutions that fit your budget, scale with your growth, and adapt to your changing needs. With Secure365, you’re not just a client—you’re a partner",
  },
  {
    id: 4,
    question: "Proactive Protection & Support",
    answer:
      "Your success is our priority. We take the time to understand your business’s unique needs and tailor our services to support your goals. From small startups to established enterprises, we provide personalized solutions that fit your budget, scale with your growth, and adapt to your changing needs. With Secure365, you’re not just a client—you’re a partner",
  },
  {
    id: 5,
    question: "Transparent Communication & Reporting",
    answer:
      "Your success is our priority. We take the time to understand your business’s unique needs and tailor our services to support your goals. From small startups to established enterprises, we provide personalized solutions that fit your budget, scale with your growth, and adapt to your changing needs. With Secure365, you’re not just a client—you’re a partner",
  },
];

export default function FaqArea({whyChooseData}) {
  return (
    <div className="fq-faq-area md:pt-20 pt-6">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
              <div className="tm-hero-content">
                       <h2 className="tm-herointro-title tp-char-animation text-center">
                       {whyChooseData?.why_choose_sets_us_main_heading}
                        </h2>
                      </div>
                <div className="accordion" id="accordionExample">
                  {whyChooseData && whyChooseData?.why_choose_sets_data?.map((item,index) => (
                    <FaqItem item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
