import React, { useEffect } from 'react';
import { gsap } from 'gsap';
const ScrollBanner: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleFactor = Math.min(2, 1 + scrollY / 500);
      const opacityFactor = Math.min(1, scrollY / 500);
      // Image height and maxWidth adjustment, but with a cap to maintain visibility
      const maxHeight = 500; // Maximum height for images
      const heightFactor = Math.min(300, scrollY);  // Limit height increase to 300px
      const widthFactor = Math.min(300, scrollY);  // Limit width increase to 300px
      // Using GSAP to animate the logo scaling and video opacity smoothly
      gsap.to('.logo', {
        scale: scaleFactor,
        ease: 'power1.out',  // Smooth easing for the scaling
      });
      gsap.to('.video', {
        opacity: opacityFactor,
        ease: 'power1.out',  // Smooth easing for the opacity
      });
      // GSAP for smooth height and width adjustment
      gsap.to('.logo img', {
        height: `calc(100px + ${heightFactor}px)`,  // Start with 200px and add scroll-based increase
        maxWidth: `calc(100px + ${widthFactor}px)`,  // Start with 200px and add scroll-based increase
        maxHeight: `${maxHeight}px`,  // Cap the height of images
        ease: 'power1.out',  // Smooth easing for resizing
      });
      // Adjust the container's height to accommodate all images
      gsap.to('.logo-container', {
        height: `calc(100px + ${heightFactor}px)`, // Ensure container grows with images
        ease: 'power1.out',
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      {/* Logo that scales with scroll */}
      <div
        className="logo"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        {/* Container for images to ensure they are placed correctly */}
        <div
          className="logo-container"
          style={{
            display: 'flex',
            gap: '15px', // Adjust the gap between the images
            height: '200px', // Start with an initial height for the container
            justifyContent: 'center',  // Center the images horizontally
            alignItems: 'center',  // Center the images vertically
          }}
        >
          <img
            src="http://clapat.ro/themes/nanotech/images/02hero.jpg"
            alt="Logo"
            style={{
              maxWidth: '200px', // Initial width of images
              width: '100%',
              maxHeight: '500px',  // Cap the max height for the images
            }}
          />
          <img
            src="http://clapat.ro/themes/nanotech/images/01hero.jpg"
            alt="Logo"
            style={{
              maxWidth: '200px',
              width: '100%',
              maxHeight: '500px',  // Cap the max height for the images
            }}
          />
          <img
            src="http://clapat.ro/themes/nanotech/images/03hero.jpg"
            alt="Logo"
            style={{
              maxWidth: '200px',
              width: '100%',
              maxHeight: '500px',  // Cap the max height for the images
            }}
          />
        </div>
      </div>
      {/* Optional Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '20px',
        }}
      >
        Scroll Down
      </div>
    </div>
  );
};
export default ScrollBanner;