import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data:IFaq[] = [
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

export default function FaqArea() {
  return (
    <div className="fq-faq-area md:pt-20 pt-6">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
              <div className="tm-hero-content">
                       <h2 className="tm-herointro-title tp-char-animation text-center">
                       What Sets Us Apart
                        </h2>
                      </div>
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search product" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
