import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1a.png";
import ab_2 from "@/assets/img/inner-about/about/about-3.png";
import ab_3 from "@/assets/img/inner-about/about/about-2.png";

export default function AboutUsArea({aboutResponse}) {
  console.log(aboutResponse, 'aboutResponse')
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
              {/* Our Core Values */}
              {aboutResponse?.data?.about_our_core_headning_main}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h2 className="ab-about-category-title">
                    {aboutResponse?.data?.about_our_core_something_section} <br />
                    <span>{aboutResponse?.data?.about_our_core_what_i_do}</span>
                  </h2>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        {
                        aboutResponse &&  aboutResponse?.data?.about_page_customer_approach_data?.map((item,index) => (
                          <React.Fragment key={index}>

                          <li>
                          <h3 className="h5-title">{item?.about_page_customer_first_approach}</h3>
                          <p>{item?.about_page_customer_integrity_transparency}</p>
                        </li>
                          </React.Fragment>
                        ) )
                        }
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                      {
                        aboutResponse &&  aboutResponse?.data?.about_page_security_responsibility_data?.map((item,index) => (
                          <React.Fragment key={index}>

                          <li>
                          <h3 className="h5-title">{item?.about_page_security_heading}</h3>
                          <p>{item?.about_page_security_paragraph}</p>
                        </li>
                          </React.Fragment>
                        ) )
                        }

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
