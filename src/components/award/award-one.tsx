"use client";
import React from "react";
import Image from "next/image";

// award images ddbsvsdvsvsdvsd
import a_1 from "@/assets/img/home-01/award/award-1.webp";
import a_2 from "@/assets/img/home-01/award/award-2.webp";
import a_3 from "@/assets/img/home-01/award/award-3.webp";
import a_4 from "@/assets/img/home-01/award/award-4.png";
import a_5 from "@/assets/img/home-01/award/award-5.webp";
import a_6 from "@/assets/img/home-01/award/award-6.webp";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: a_1,
    subtitle: "01",
    title: "Artificial Intelligence",
    date: "See More",
  },
  {
    id: 2,
    img: a_2,
    subtitle: "02",
    title: "Cloud",
    date: "See More",
  },
  {
    id: 3,
    img: a_3,
    subtitle: "03",
    title: "Cognitive Business Operations",
    date: "See More",
  },
  {
    id: 4,
    img: a_4,
    subtitle: "04",
    title: "Consulting",
    date: "See More",
  },
  {
    id: 5,
    img: a_5,
    subtitle: "05",
    title: "Cybersecurity",
    date: "See More",
  },
  {
    id: 6,
    img: a_6,
    subtitle: "06",
    title: "Data & Analytics",
    date: "See More",
  },
  {
    id: 7,
    subtitle: "07",
    title: "Enterprise Solutions",
    date: "See More",
  },
  {
    id: 8,
    subtitle: "08",
    title: "Network Solutions and Service",
    date: "See More",
  },
  {
    id: 9,

    subtitle: "09",
    title: "SEO & Marketing",
    date: "See More",
  },
  {
    id: 10,
    subtitle: "10",
    title: "Blockchain Solution",
    date: "See More",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({cls="pt-125 pb-125",abStyle=false}: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        {/* <div className="row">
          <div className="col-xxl-12 col-xl-12">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title">
                Advanced IT and Cyber<br /> <span>  security Services</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )}
          </div>
        </div> */}
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12">
            {/* <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div> */}
                <div className="tp-award-title-box">
                <span className="aboutIcon"><svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" width="20" height="20"></path></svg><span>Industries</span></span>
                <h4 className="tp-section-title">
                Advanced <br />IT and Cyber<br /> <span>  security Services</span>
                </h4>
                <p className="awardsContent">
                We unite with big brands and startups in various industries to create memorable experiences driven by user-centered design that drives productivity and increases revenue.
                </p>
              </div>
          </div>
          
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
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

export default AwardOne;
