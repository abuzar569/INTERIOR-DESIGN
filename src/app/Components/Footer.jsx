"use client";
import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";

const Footer = () => {
  useEffect(() => {
    // Footer animation using GSAP
    gsap.from(".footer-text", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".footer-icons i", {
      opacity: 0,
      x: -20,
      duration: 1,
      stagger: 0.3,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-10 border h-96 text-center relative overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="footer-text opacity-0 mb-4 text-lg font-light tracking-wide">
          <p>Interior Design by YourCompany</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer-icons flex gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl opacity-0 transform -translate-x-5 transition-all hover:text-emerald-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl opacity-0 transform -translate-x-5 transition-all hover:text-emerald-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl opacity-0 transform -translate-x-5 transition-all hover:text-emerald-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-2xl opacity-0 transform -translate-x-5 transition-all hover:text-emerald-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
