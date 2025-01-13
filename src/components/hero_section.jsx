import React from 'react'

const hero_section = () => {
  return (
    <div id="hero">
    <div id="hero-styles">
        <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center hero-full-caption landing-page-title">
            <div className="inner">
            
                <h1 className="hero-title caption-timeline">
                    <span>Nanotech</span>
                </h1>
                
                <div className="hero-subtitle caption-timeline onload-shuffle">
                    <span>Bringing brands to life</span> <span>through creative web solutions</span>
                </div>                                   
            </div>
        </div>
        <div id="hero-footer" className="has-border">
          <div className="hero-footer-left">
              <div className="button-wrap left scroll-down">
                    <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                            <i className="fa-solid fa-arrow-down"></i>
                        </div>
                    </div>
                    <div className="button-text sticky left"><span data-hover="Scroll to Explore">Scroll to Explore</span></div> 
                </div>
            </div>
            <div className="hero-footer-right">
        <span>Featured Projects</span>
            </div>
        </div>                                                              
    </div>
</div> 
  )
}

export default hero_section