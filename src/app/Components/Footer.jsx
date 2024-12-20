"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaPalette, FaCouch, FaLightbulb, FaRuler } from "react-icons/fa";
import { RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const q = gsap.utils.selector(footerRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer content
      gsap.fromTo(
        q(".footer-content"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate service icons
      gsap.fromTo(
        q(".service-icon"),
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: q(".services-grid"),
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate social icons
      gsap.fromTo(
        q(".social-icon"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: q(".social-icons"),
            start: "top bottom-=30",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert(); // cleanup animations on unmount
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-16 mt-5 font-Gilroy bg-gradient-to-br from-emerald-200 to-emerald-400 text-emerald-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="footer-content md:col-span-5 space-y-6">
            <h3 className="text-5xl font-bold font-Aghita text-emerald-950">Amber Essence</h3>
            <p className="text-base max-w-md">
              Elevating spaces with a touch of warmth and sophistication. We
              bring your interior visions to life, one room at a time.
            </p>
            <div className="services-grid grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <FaPalette className="service-icon text-2xl text-emerald-950" />
                <span>Color Consulting</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCouch className="service-icon text-2xl text-emerald-950" />
                <span>Furniture Selection</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLightbulb className="service-icon text-2xl text-emerald-950" />
                <span>Lighting Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRuler className="service-icon text-2xl text-emerald-950" />
                <span>Space Planning</span>
              </div>
            </div>
          </div>
          <div className="footer-content md:col-span-3">
            <h4 className="text-2xl font-semibold font-Aghita text-emerald-950">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-emerald-600 transition-colors duration-300 flex items-center"
                >
                  <span className="bg-emerald-950 w-2 h-2 rounded-full mr-2"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-emerald-600 transition-colors duration-300 flex items-center"
                >
                  <span className="bg-emerald-950 w-2 h-2 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-600 transition-colors duration-300 flex items-center"
                >
                  <span className="bg-emerald-950 w-2 h-2 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-600 transition-colors duration-300 flex items-center"
                >
                  <span className="bg-emerald-950 w-2 h-2 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-content md:col-span-4">
            <h4 className="text-2xl font-semibold mb-6 font-Aghita text-emerald-950">
              Stay Connected
            </h4>
            <p className="text-base mb-4">
              Join our mailing list for inspiration and exclusive offers.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 pr-10 bg-white border-2 border-emerald-800 focus:outline-none focus:border-emerald-500 transition-colors duration-300 rounded-md"
                />
                <MdEmail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500 text-xl" />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-emerald-600 text-white hover:bg-emerald-400 transition-colors duration-300 font-semibold rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-content relative">
          <div className="absolute left-0 right-0 h-px bg-emerald-950" />
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Amber Essence. All rights reserved.
            </p>
            <div className="social-icons flex space-x-6">
              <a
                href="#"
                className="social-icon text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
              >
                <RiInstagramLine size={24} />
              </a>
              <a
                href="#"
                className="social-icon text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
              >
                <RiTwitterLine size={24} />
              </a>
              <a
                href="#"
                className="social-icon text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
              >
                <RiLinkedinLine size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300 opacity-20 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-300 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2" />
    </footer>
  );
};

export default Footer;
