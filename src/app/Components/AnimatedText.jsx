"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './global.css'; 

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  useEffect(() => {
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="Animate container font-Rimons">
      <h1 className="text">ELEVATE YOUR<span>SPACE</span></h1>
      <h1 className="text">DESIGN YOUR<span>DREAM HOME</span></h1>
      <h1 className="text">CREATE A<span>MASTERPIECE</span></h1>
      <h1 className="text">NEED HELP<span><a href="https://yourwebsite.com/contact" target="_blank" rel="noopener noreferrer">CONTACT US</a></span></h1>
      <h1 className="text">WANT TO WORK<span><a href="https://yourwebsite.com/portfolio" target="_blank" rel="noopener noreferrer">VIEW PORTFOLIO</a></span></h1>
    </div>
  );
};

export default AnimatedText;
