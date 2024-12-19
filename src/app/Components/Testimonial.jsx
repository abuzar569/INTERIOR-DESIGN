"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const testimonials = gsap.utils.toArray(".testimonial");

    // Fade in and animate testimonials on scroll
    testimonials.forEach((testimonial, index) => {
      gsap.from(testimonial, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%", // Start the animation when the top of the testimonial is 80% from the top of the viewport
          end: "bottom top", // End the animation when the bottom of the testimonial reaches the top of the viewport
          scrub: true, // Smooth scrubbing effect
          markers: false, // Disable markers (you can enable for debugging)
        },
      });
    });

    // Fade in the section header
    gsap.from(".section-header", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      testimonial: "This service changed the way we approach development. Highly recommended!",
      image: "/Testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager, GlobalInc",
      testimonial: "An amazing experience from start to finish. Truly a game-changer for our team.",
      image: "/Testimonial2.jpg",
    },
    {
      name: "Alexa Johnson",
      role: "Lead Developer, CodeFactory",
      testimonial: "The team is professional and dedicated. We saw great results immediately.",
      image: "/Testimonial3.jpg",
    },
  ];

  return (
    <div ref={testimonialsRef} className="h-screen py-40 px-4 bg-gray-100">
      <h2 className="section-header text-center text-6xl md:text-8xl bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent font-Rimons mb-12">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial bg-white p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="font-Gilroy">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
