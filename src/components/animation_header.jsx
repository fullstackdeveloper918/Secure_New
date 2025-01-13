import React from 'react'

const animation_header = () => {
  return (
    <header className="clapat-header classic-menu invert-header" data-menucolor="#0c0c0c">
             
    {/* <!-- Graidient --> */}
    <div className="header-gradient"></div>
    {/* <!--/Graidient --> */}
    
    <div id="header-container">
      
        {/* <!-- Logo --> */}
        <div id="clapat-logo" className="hide-ball">
            <a className="ajax-link" data-type="page-transition" href="index.html">
                <img className="black-logo" src="images/logo.png" alt="ClaPat Logo"/>
                <img className="white-logo" src="images/logo-white.png" alt="ClaPat Logo"/>
            </a>
        </div>
        {/* <!--/Logo --> */}
                    
        
        {/* <!-- Navigation --> */}
        <nav className="clapat-nav-wrapper"> 
            <div className="nav-height">          
                <ul data-breakpoint="1025" className="flexnav">
                    <li className="menu-timeline link"><a className="ajax-link active" data-type="page-transition" href="index.html"><div className="before-span"><span data-hover="Index">Index</span></div></a></li>
                    <li className="menu-timeline link"><a className="ajax-link" data-type="page-transition" href="#"><div className="before-span"><span data-hover="Projects">Projects</span></div></a>
                      <ul>
                            <li><a className="ajax-link" href="index-highlights.html" data-type="page-transition">Highlights</a></li>
                            <li><a className="ajax-link" href="index-portfolio.html" data-type="page-transition">Portfolio</a></li>
                            <li><a className="ajax-link" href="index-playground.html" data-type="page-transition">Playground</a></li>
                        </ul>
                    </li>
                    <li className="menu-timeline link"><a className="ajax-link" data-type="page-transition" href="about.html"><div className="before-span"><span data-hover="Agency">Agency</span></div></a></li>
                    <li className="menu-timeline link"><a className="ajax-link" data-type="page-transition" href="resources.html"><div className="before-span"><span data-hover="Resources">Resources</span></div></a></li>
                </ul>
            </div>          
        </nav>
        {/* <!--/Navigation --> */}
        
        
        {/* <!-- Header Button --> */}
        <a className="header-button ajax-link" data-type="page-transition" href="contact.html">
            <div className="button-icon-link right">                        
                <div className="icon-wrap-scale">
                    <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="button-text sticky right"><span data-hover="Let's Talk">Let's Talk</span></div>                        
            </div>
        </a>
        {/* <!--/Header Button --> */}
        
        
        {/* <!-- Menu Burger --> */}
        {/* <div className="button-wrap right menu burger-lines">
            <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                    <div id="burger-wrapper">
                        <div id="menu-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-text sticky right"><span data-hover="Menu">Menu</span></div> 
        </div> */}
        {/* <!--/Menu Burger --> */}

    </div>
</header>
  )
}

export default animation_header