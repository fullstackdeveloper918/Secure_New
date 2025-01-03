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
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title">
                Advanced IT and Cyber<br /> <span>  security Services</span>
                </h4>
              </div>
            )}
            {/* {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )} */}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
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
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
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
