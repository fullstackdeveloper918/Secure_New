import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-3.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
              Comprehensive IT <span className="blueColor">Solutions</span> <br />
                 
              </h4>
              <h3 className="servicesSub tp-char-animation">Tailored for Your Business</h3>
              <p className="tp_fade_bottom">
              From security to support, we handle it all—so you don’t have to.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{height:"auto"}}
                />
              </div>
              <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{height:"auto"}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
