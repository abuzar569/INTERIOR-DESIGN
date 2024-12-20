"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: "power2.out",
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-8xl font-medium bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text text-transparent mb-6 font-Aghita">Gallery</h1>
      <div className="h-screen w-full flex items-center justify-center bg-[#b6916d]">
        <div className="reveal relative w-4/5 h-4/5 max-w-md overflow-hidden">
          <img
            src="/Image1.jpg"
            alt="Image 1"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-[#bcb8ad]">
        <div className="reveal relative w-4/5 h-4/5 max-w-md overflow-hidden">
          <img
            src="/Image2.jpg"
            alt="Image 2"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-[#b69187]">
        <div className="reveal relative w-4/5 h-4/5 max-w-md overflow-hidden">
          <img
            src="/Image3.jpg"
            alt="Image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-[#3c564f]">
        <div className="reveal relative w-4/5 h-4/5 max-w-md overflow-hidden">
          <img
            src="/Image4.jpg"
            alt="Image 4"
            className="h-full w-full object-cover"
          />
        </div>
       
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-[#f2ffd2]">
        <div className="reveal relative w-4/5 h-4/5 max-w-md overflow-hidden">
          <img
            src="/Image5.jpg"
            alt="Image 5"
            className="h-full w-full object-cover"
          />
        </div>
       
      </div>
    </div>
  );
};

export default ScrollAnimation;
