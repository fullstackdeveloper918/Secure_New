import React from "react";
import Image from "next/image";

export default function ProjectSix() {
  return (
 

<section className="showcasePportfolio">
<h2 className="main_heading">
    Latest Projects
  </h2>
<div className="showcase-portfolio expand-grid filp-grid flip-completed">



<div className="clapat-item ">
  <div className="slide-inner trigger-item">
    <div className="img-mask pixels-cover animated">
      <a className="slide-link" data-type="page-transition" href="project01.html"></a>
      <img src="/images/01hero.jpg" className="item-image grid__item-img" alt="" />
      <div className="flip-thumb-inner" data-flip-id="auto-1">
        <div className="flip-thumb-effects">
          <div className="section-image trigger-item-link">
          </div>
        </div>
      </div>
    </div>
    <div className="slide-caption trigger-item-link-secondary">
      <div className="slide-title">
        <span data-text="Bob's Specials">Bob's Specials</span>
      </div>
      <div className="slide-date"><span>2024</span></div>
      <div className="slide-cat">
        <span data-text="Branding">Branding</span>
      </div>
    </div>
  </div>
</div>


<div className="clapat-item expanded">
  <div className="slide-inner trigger-item" data-centerline="OPEN">
    <div className="img-mask pixels-cover animated">
      <a className="slide-link" data-type="page-transition" href="project02.html"></a>
      {/* <img src="/assets/img/home-01/project/project-1-2.jpg" className="grid__item-img grid__item-img--large" alt="" /> */}
      <div className="flip-thumb-inner" data-flip-id="auto-2">
        <div className="flip-thumb-effects">
          <img src="/assets/img/home-01/project/project-1-2.jpg" className="item-image grid__item-img" alt="" />
        </div>
      </div>
    </div>
    <div className="slide-caption trigger-item-link-secondary">
      <div className="slide-title">
        <span data-text="This is Willo">This is Willo</span>
      </div>
      <div className="slide-date"><span>2024</span></div>
      <div className="slide-cat">
        <span data-text="Web Design">Web Design</span>
      </div>
    </div>
  </div>
</div>


<div className="clapat-item ">
  <div className="slide-inner trigger-item" data-centerline="OPEN">
    <div className="img-mask pixels-cover animated">
      <a className="slide-link" data-type="page-transition" href="project03.html"></a>
      <img src="/images/03hero.jpg" className="item-image grid__item-img" alt="" />
      <div className="flip-thumb-inner" data-flip-id="auto-3">
        <div className="flip-thumb-effects">
          <div className="section-image trigger-item-link">
            {/* <img src="/assets/img/home-01/project/project-1-3.jpg" className="item-image grid__item-img" alt="" />
             */}
          {/* <img src="/images/03hero.jpg" className="item-image grid__item-img" alt="" /> */}

          </div>
        </div>
      </div>
    </div>
    <div className="slide-caption trigger-item-link-secondary">
      <div className="slide-title">
        <span data-text="The Infin">The Infin</span>
      </div>
      <div className="slide-date"><span>2024</span></div>
      <div className="slide-cat">
        <span data-text="Photography">Photography</span>
      </div>
    </div>
  </div>
</div>

</div>

</section>


  );
}
