"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const projects = gsap.utils.toArray(".project");

    // Iterate through all projects
    projects.forEach((project, index) => {
      ScrollTrigger.create({
        trigger: project,
        start: "top top", // Start when the top of the project hits the top of the viewport
        end: "bottom top", // End when the bottom of the project hits the top of the viewport
        pin: index !== projects.length - 1, // Pin all but the last project
        pinSpacing: false, // Prevent extra spacing
        scrub: true, // Smooth scrubbing effect
        markers: false, // Disable markers (you can enable for debugging)
      });
    });

    // Scroll animation for the last project to scroll up
    const lastProject = projects[projects.length - 1];
    gsap.to(lastProject, {
      y: "-100%", // Scroll up effect for the last project
      ease: "none",
      scrollTrigger: {
        trigger: lastProject,
        start: "top bottom", // Start when the top of the last project hits the bottom of the viewport
        end: "bottom top", // End when the bottom of the last project hits the top of the viewport
        scrub: true, // Smooth scrubbing effect
        markers: false, // Disable markers (you can enable for debugging)
      },
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: "Luxury Abode",
      subtitle: "Elegance in Every Detail",
      image: "/Project1.jpg",
      gradient: "from-indigo-500/50 to-teal-500/50",
    },
    {
      title: "Urban Retreat",
      subtitle: "Modern Living Redefined",
      image: "/Project2.jpg",
      gradient: "from-green-500/50 to-yellow-500/50",
    },
    {
      title: "Eco Bliss",
      subtitle: "Harmony with Nature",
      image: "/Project3.jpg",
      gradient: "from-orange-500/50 to-purple-500/50",
    },
    {
      title: "Bold Perspectives",
      subtitle: "Innovative Designs",
      image: "/Project4.jpg",
      gradient: "from-pink-500/50 to-red-500/50",
    },
    {
      title: "Timeless Charm",
      subtitle: "Classic Meets Contemporary",
      image: "/Project5.jpg",
      gradient: "from-blue-500/50 to-gray-500/50",
    },
    {
      title: "Visionary Spaces",
      subtitle: "Architectural Masterpieces",
      image: "/Project6.jpg",
      gradient: "from-cyan-500/50 to-lime-500/50",
    },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project relative w-full h-screen overflow-hidden`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              quality={85}
              priority={index === 0}
              className="object-cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="#cccccc"/></svg>'
              ).toString("base64")}`}
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 overlay bg-gradient-to-r ${project.gradient} opacity-60`}
          />

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
            <h2 className="font-Aghita text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              {project.title}
            </h2>
            <p className="font-Gilroy text-xl sm:text-2xl md:text-3xl text-white/90">
              {project.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
