import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png.png";

// service data
const service_data = [
  {
    id: 1,
    title: "Cybersecurity Solutions",
    desc: "Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.",
    icon: s_1,
  },
  {
    id: 2,
    title: "Cloud & Server Management",
    desc: "Efficiently manage your data and applications in the cloud with our secure, scalable solutions.",
    icon: s_2,
  },
  {
    id: 3,
    title: "E-commerce Security & Fraud Prevention",
    desc: "Safeguard your transactions and customer data with cutting-edge fraud detection and secure payment systems.",
    icon: s_3,
  },
  {
    id: 4,
    title: "IT Support & Business Management",
    desc: "Get 24/7 support from certified professionals who solve problems before they impact your business.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp_fade_bottom">
              
              </span>
              <h4 className="tp-section-title tp_fade_bottom">
              What Makes

                <br />
                <span> Us Different?</span>
              </h4>
            </div>
            <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="#">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" width={60} height={60}/>
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="#">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
