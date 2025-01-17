import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service -1.png";
import ser_img_2 from "@/assets/img/inner-service/service/service -2.png";
import ser_img_3 from "@/assets/img/inner-service/service/service -3.png";
import ser_img_4 from "@/assets/img/inner-service/service/service -4.png";
import ser_img_5 from "@/assets/img/inner-service/service/service -5.png";
import ser_img_6 from "@/assets/img/inner-service/service/service -6.png";
import ser_img_7 from "@/assets/img/inner-service/service/service -7.png";
import ser_img_8 from "@/assets/img/inner-service/service/service -8.png";
import ser_img_9 from "@/assets/img/inner-service/service/service -9.png";
import ser_img_10 from "@/assets/img/inner-service/service/service -10.png";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Management",
    title: "Server Management & Cloud Solutions",
    text: "We provide tailored server management and cloud solutions that align with your budget and specific requirements. Optimize your infrastructure and elevate your business operations.",
    lists: [
      "Server Setup & Configuration",
      "Cloud Migration",
      "Ongoing Server Maintenance",
      "Scalable Cloud Solutions",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "IT Support",
    title: "IT Support & Managed Services",
    text: "We provide IT support and managed services tailored to your budget and specific needs. Enhance your technology infrastructure and ensure seamless operations.",
    lists: [
      "Technical Support",
      "System Monitoring",
      "Network Management",
      "IT Consultancy",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Cybersecurity",
    title: "Cybersecurity Solutions",
    text: "We provide cybersecurity solutions tailored to your budget and specific needs. Protect your digital assets and safeguard your business.",
    lists: [
      "Threat Detection",
      "Data Protection",
      "Network Security",
      "Risk Management",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Business SEO & Digital",
    title: "Business SEO & Digital Visibility",
    text: "We provide SEO and digital visibility solutions tailored to your budget and specific needs. Enhance your online presence and reach your target audience.",
    lists: [
      "Keyword Optimization",
      "Content Strategy",
      "Website Analytics",
      "Search Engine Marketing",
    ],
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "Content Creation",
    title: "Content Creation & Marketing Services",
    text: "We provide content creation and marketing services tailored to your budget and specific needs. Build your brand voice and engage your audience effectively.",
    lists: [
      "Content Writing",
      "Social Media Management",
      "Blog Strategy",
      "Email Campaigns",
    ],
  },
  {
    id: 6,
    img: ser_img_6,
    subtitle: "Inventory Management",
    title: "Inventory Management Solutions",
    text: "We provide inventory management solutions tailored to your budget and specific needs. Streamline your operations and optimize your stock control.",
    lists: [
      "Inventory Tracking",
      "Stock Optimization",
      "Order Management",
      "Supply Chain Integration",
    ],
  },
  {
    id: 7,
    img: ser_img_7,
    subtitle: "UX/UI Design",
    title: "UX/UI Design & Website Development",
    text: "We provide UX/UI design and website development services tailored to your budget and specific needs. Enhance your user experience and create impactful digital platforms.",
    lists: [
      "User Interface Design",
      "User Experience Strategy",
      "Custom Website Development",
      "Responsive Web Design",
    ],
  },
  {
    id: 8,
    img: ser_img_8,
    subtitle: "Secure Payments",
    title: "Secure Payments & Fraud Detection",
    text: "We provide secure payment and fraud detection solutions tailored to your budget and specific needs. Protect your transactions and ensure customer trust.",
    lists: [
      "Payment Gateway Integration",
      "Fraud Monitoring",
      "Transaction Security",
      "Risk Assessment",
    ],
  },
  {
    id: 9,
    img: ser_img_9,
    subtitle: "E-commerce Solutions",
    title: "E-commerce Solutions & Transaction Protection",
    text: "We provide e-commerce solutions and transaction protection tailored to your budget and specific needs. Enhance your online store and secure your customer transactions.",
    lists: [
      "Online Store Development",
      "Secure Payment Processing",
      "Fraud Prevention",
      "Shopping Cart Integration",
    ],
  },
  {
    id: 10,
    img: ser_img_10,
    subtitle: "IT Detective",
    title: "IT Detective Services & Scam Recovery",
    text: "We provide IT detective services and scam recovery solutions tailored to your budget and specific needs. Identify threats and recover from fraudulent activities effectively.",
    lists: [
      "Fraud Investigation",
      "Data Recovery",
      "Scam Analysis",
      "Cyber Threat Resolution",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} 
          className="sv-service-item project-panel-2"
          >
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div 
                      className="sv-service-list"
                      >
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
