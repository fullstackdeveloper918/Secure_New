"use client";
import React from "react";




const AwardOne = ({cls="pt-md-125 pb-md-125 pt-50 pb-50",abStyle=false, data}) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container-1630 mx-auto">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="tp-award-title-box">
                <span className="aboutIcon"><svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" width="20" height="20"></path></svg><span>{data?.home_advanced_it_and_cyber_security_first_heading}</span></span>
                <h4 className="tp-section-title">
                {data?.home_advanced_it_and_cyber_security_second} <br />{data?.home_advanced_it_and_cyber_security_third}<br /> <span>  {data?.home_advanced_it_and_cyber_security_fourth}</span>
                </h4>
                <p className="awardsContent">
               {data?.home_advanced_it_and_cyber_security_paragraph}
                </p>
              </div>
          </div>
          
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="tp-award-list-wrap">
              {data && data?.home_page_service_section_loop_data?.map((item,index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{index > 9 ? "0"+index+1 : index+1}</span>
                    <p>{item?.home_page_service_section_loop}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>See More</span>
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
