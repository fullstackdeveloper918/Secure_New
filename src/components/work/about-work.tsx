import React from "react";
import Image from "next/image";
import shape from '@/assets/img/inner-about/about/shape-1.png';

const work_data = [
  {
    id: 1,
    title: "Real-World Experience",
    // subtitle: "Design Studio",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
  {
    id: 2,
    title: "Comprehensive Solutions",
    // subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 3,
    title: "Victim-Centric Approach",
    // subtitle: "Design Studio",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
  {
    id: 4,
    title: "Expert Team",
    // subtitle: "Design Studio",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-5">
            <div className="ab-2-work-title-box p-relative text-left w-full">
              <h2 className="ab-2-work-title tp_title_anim text-left">
              Why Choose <span className="blueColor">Secure365?</span>
              </h2>
              {/* <span className="ab-2-work-subtitle tp_title_anim">
                About My Biography
              </span> */}
              <Image
                className="ab-2-work-shape d-none d-lg-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-7 row pt-20 grid grid-cols-2 gap-5">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom col-xl-12 col-lg-12 col-md-12">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      {/* {item.subtitle} */}
                    </span>
                    <h4 className="sv-service-title">{item.title}</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
