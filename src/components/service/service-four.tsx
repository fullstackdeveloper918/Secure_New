import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Unique Blend of Skills",
    desc: "Our team combines expertise in criminology, cybersecurity, digital strategy, and IT management, allowing us to tackle challenges from multiple angles",
    category: ["innovative", "user-centric solutions"],
  },
  {
    id: 2,
    title: "Flexible & Scalable Solutions",
    desc: "Whether you’re a small business or a large enterprise, our solutions are designed to scale with your needs and evolve as your business grows",
    category: ["FlexibleScalable", "SolutionsTailored"],
  },
  {
    id: 3,
    title: "Unmatched Support",
    desc: "With 24/7 availability and a dedicated support team, we’re always here when you need us, providing quick resolutions and strategic advice",
    category: ["dedicated", "customer-focused support"],
  },
];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area md:py-20 py-10 tm-herointro">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-20 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
              Our Core Strengths
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
