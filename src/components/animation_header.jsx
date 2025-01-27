import Link from 'next/link'
import React from 'react'

const animation_header = () => {
  return (
    <header 
    // className="clapat-header classic-menu invert-header" 
    className='classic-menu invert-header'
    data-menucolor="#0c0c0c">
             
    {/* <!-- Graidient --> */}
    <div className="header-gradient"></div>
    {/* <!--/Graidient --> */}
    
    <div id="header-container">
      
        {/* <!-- Logo --> */}
        <div id="clapat-logo" className="hide-ball">
            <Link className="ajax-link" data-type="page-transition" href="/">
                <img className="black-logo" src="images/logo.png" alt="Secure Logo"/>
                <img className="white-logo" src="images/logo-white.png" alt="secure Logo"/>
            </Link>
        </div>
        {/* <!--/Logo --> */}
                    
        
        {/* <!-- Navigation --> */}
        <nav className="clapat-nav-wrapper"> 
            <div className="nav-height">          
                <ul data-breakpoint="1025" className="flexnav">
                    {/* <li className="menu-timeline link"><a className="ajax-link active" data-type="page-transition" href="/"><div className="before-span"><span data-hover="Index">Index</span></div></a></li> */}
                    <li className="menu-timeline link"><Link className="ajax-link" data-type="page-transition" href="/about-us"><div className="before-span"><span data-hover="Agency">About Us</span></div></Link></li>
                    <li className="menu-timeline link"><Link className="ajax-link" data-type="page-transition" href="/service"><div className="before-span"><span data-hover="Projects">Service</span></div></Link>
                      <ul>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">Server Management & Cloud Solutions</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">IT Support & Managed Services</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">Cybersecurity Solutions</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">Business SEO & Digital Visibility</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">Content Creation & Marketing Services</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">Inventory Management Solutions</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">UX/UI Design & Website Development</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">Secure Payments & Fraud Detection</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">E-commerce Solutions & Transaction Protection</Link></li>
                            <li><Link className="ajax-link" href="/service-details" data-type="page-transition">IT Detective Services & Scam Recovery</Link></li>
                        </ul>
                    </li>
                    <li className="menu-timeline link"><Link className="ajax-link" data-type="page-transition" href="/Why-Choose-Us"><div className="before-span"><span data-hover="Agency">Why Choose Us</span></div></Link></li>
                    <li className="menu-timeline link"><Link className="ajax-link" data-type="page-transition" href="/contact"><div className="before-span"><span data-hover="Resources">Contact</span></div></Link></li>
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
        <div className="button-wrap right menu burger-lines">
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
        </div>
        {/* <!--/Menu Burger --> */}

    </div>
</header>
  )
}

export default animation_header