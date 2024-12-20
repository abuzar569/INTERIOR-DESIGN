'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeroAndAbout = () => {


    useEffect(() => {
        const videoElement = heroRefs.video2.current;
    
        const playVideo = () => {
            if (videoElement && videoElement.paused) {
                videoElement.play().catch((error) => {
                    console.error("Video autoplay failed:", error);
                });
            }
        };
    
        // Add event listeners for user interaction
        window.addEventListener("touchstart", playVideo);
        window.addEventListener("click", playVideo);
    
        return () => {
            window.removeEventListener("touchstart", playVideo);
            window.removeEventListener("click", playVideo);
        };
    }, []);
    




    const containerRef = useRef(null);
    const sectionsRef = useRef([]);

    const heroRefs = {
        container: useRef(null),
        overlay: useRef(null),
        video1: useRef(null),
        video2: useRef(null),
        textWrapper: useRef(null),
        title: useRef(null),
        subtitle: useRef(null),
        btn: useRef(null)
    };

    const aboutRefs = {
        container: useRef(null),
        bgImage: useRef(null),
        contentWrapper: useRef(null),
        heading: useRef(null),
        subHeading: useRef(null),
        paragraph: useRef(null),
        btn: useRef(null)
    };

    const [isVideo1Playing, setIsVideo1Playing] = useState(true);

    useEffect(() => {
        const sections = sectionsRef.current;

        // Horizontal Scroll Setup with Advanced Configurations
        const horizontalScroll = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                anticipatePin: 1,
                scrub: 1.5,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    duration: { min: 0.2, max: 1 },
                    delay: 0.1,
                    ease: "power3.inOut"
                },
                end: () => "+=" + containerRef.current.offsetWidth
            }
        });

        // Hero Section Complex Animations
        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: heroRefs.container.current,
                start: "left center",
                end: "right center",
                toggleActions: "play none none reverse"
            }
        });

        heroTimeline
            .fromTo(
                heroRefs.overlay.current,
                { scaleY: 1, backgroundColor: "rgba(0,0,0,0.8)" },
                {
                    scaleY: 0,
                    backgroundColor: "rgba(0,0,0,0)",
                    transformOrigin: 'top',
                    duration: 1.5,
                    ease: "elastic.out(1, 0.75)"
                })
            .fromTo(
                [heroRefs.video1.current, heroRefs.video2.current],
                {
                    opacity: 0,
                    scale: 1.3,
                    filter: "blur(20px)",
                    rotation: (index) => index === 0 ? -10 : 10
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    rotation: 0,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power3.out"
                },
                "-=1"
            )
            .fromTo(
                heroRefs.textWrapper.current?.children,
                {
                    y: 100,
                    opacity: 0,
                    rotationX: -90,
                    transformOrigin: 'top center',
                    scale: 0.8
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                },
                "-=0.5"
            );

        // About Section Sophisticated Animations
        const aboutTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRefs.container.current,
                start: "top bottom",  // Trigger when the top of the section is at the bottom of the viewport
                end: "bottom top",    // End when the bottom of the section is at the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        aboutTimeline
            .fromTo(
                aboutRefs.bgImage.current,
                {
                    scale: 1.3,
                    x: '-100%',
                    opacity: 0,
                    filter: "brightness(50%) blur(10px)"
                },
                {
                    scale: 1,
                    x: 0,
                    opacity: 1,
                    filter: "brightness(100%) blur(0px)",
                    duration: 1.5,
                    ease: "power3.inOut"
                })
            .fromTo(
                aboutRefs.contentWrapper.current?.children,
                {
                    x: '100%',
                    opacity: 0,
                    rotationY: 90,
                    transformOrigin: 'left center',
                    scale: 0.8
                },
                {
                    x: 0,
                    opacity: 1,
                    rotationY: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power4.out"
                },
                "-=1"
            );

        // Cleanup
        return () => {
            horizontalScroll.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const handleVideoClick = () => {
        setIsVideo1Playing(false);
        gsap.to(heroRefs.video1.current, {
            opacity: 0,
            scale: 1.3,
            filter: "blur(20px)",
            duration: 1.5,
            ease: "power3.inOut"
        });
        gsap.to(heroRefs.video2.current, {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.inOut"
        });
    };

    return (
        <div
            ref={containerRef}
            className="h-screen w-full overflow-hidden relative"
        >
            <div className="flex h-full w-[200%]">
                {/* Hero Section */}
                <section
                    ref={el => (sectionsRef.current[0] = el)}
                    className="section w-screen h-full flex-shrink-0 relative bg-black"
                >
                   
                    <div ref={heroRefs.container} className="relative h-full overflow-hidden">
                  
                        <div ref={heroRefs.overlay} className="absolute inset-0 bg-black z-20" />
                        <video
                            ref={heroRefs.video1}
                            src="/Videos/Video1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            id="current-video"
                            className="video fixed top-0 left-0 w-1/2 h-full object-cover"
                            
                        />
                        <video
                            ref={heroRefs.video2}
                            src="/Videos/Video2.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            id="current-video"
                            className="fixed top-0 right-0 w-1/2 h-full object-cover"
                        />
                        <div
                            ref={heroRefs.textWrapper}
                            className="absolute z-30 inset-0 flex flex-col items-center justify-center text-white text-center px-4"
                        >
                              <div className="absolute inset-0 bg-black bg-opacity-65" />
                            <h1
                                ref={heroRefs.title}
                                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent tracking-wide uppercase font-Aghita transform hover:scale-105 transition-transform duration-300"
                            >
                                El-Intero
                            </h1>
                            <p
                                ref={heroRefs.subtitle}
                                className="text-2xl md:text-3xl mt-4 opacity-80 hover:opacity-100 mb-6 font-Gilroy transition-opacity duration-300"
                            >
                                Transforming <span className=' bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent '>Spaces</span>, Crafting <span className='bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent '>Experiences</span>
                            </p>
                            <button
                                ref={heroRefs.btn}
                                className="flex justify-center gap-2 items-center shadow-xl text-lg backdrop-blur-md font-Gilroy isolation-auto border-emerald-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                            >
                                View all services
                                <svg
                                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                    viewBox="0 0 16 19"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                        className="fill-gray-800 group-hover:fill-gray-800"
                                    ></path>
                                </svg>
                            </button>
                            
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section
                    ref={el => sectionsRef.current[1] = el}
                    className="section w-screen h-full flex-shrink-0 relative"
                >
                    <div
                        ref={aboutRefs.container}
                        className="relative h-full"
                    >
                        <div
                            ref={aboutRefs.bgImage}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url("/BG1.jpg")',
                            }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-65" />

                        <div
                            ref={aboutRefs.contentWrapper}
                            className="relative z-10 flex items-center justify-center h-full text-white px-8"
                        >
                            <div className="max-w-2xl text-center w-full">
                                <h1
                                    ref={aboutRefs.heading}
                                    className="text-4xl sm:text-5xl md:text-6xl font-Gilroy mb-6 tracking-wide"
                                >
                                    About  <span className=' font-Aghita bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent'>EL-INTERO</span>
                               </h1>
                                <h2
                                    ref={aboutRefs.subHeading}
                                    className="text-xl sm:text-2xl font-Gilroy md:text-3xl mb-6 opacity-80"
                                >
                                    Designing <span className=' bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent '>Dreams</span>, Crafting <span className=' bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent '>Realities</span>
                                </h2>
                                <p
                                    ref={aboutRefs.paragraph}
                                    className="text-lg sm:text-xl mb-8 font-Gilroy leading-relaxed"
                                >
                                    We are passionate creators who transform ordinary spaces into extraordinary experiences.
                                    Every design tells a story, and we're here to help you tell yours.
                                </p>
                                <button
                                    ref={heroRefs.btn}
                                    className="flex mx-auto justify-center gap-2 items-center shadow-xl text-lg backdrop-blur-md font-Gilroy isolation-auto text-emerald-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                                >
                                    View all services
                                    <svg
                                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            className="fill-gray-800 group-hover:fill-gray-800"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AnimatedHeroAndAbout;
