'use client'
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const title = titleRef.current;
        const button = buttonRef.current;
        const cards = cardRefs.current;

        gsap.set([title, button, ...cards], { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(title, 
            { x: -50 },
            { duration: 1, x: 0, autoAlpha: 1, ease: "power3.out" }
        )
        .fromTo(button,
            { scale: 0 },
            { duration: 0.5, scale: 1, autoAlpha: 1, ease: "back.out(1.7)" },
            "-=0.5"
        )
        .fromTo(cards,
            { y: 50, rotationX: -15 },
            { 
                duration: 0.8, 
                y: 0, 
                rotationX: 0, 
                autoAlpha: 1, 
                ease: "power3.out",
                stagger: 0.2
            },
            "-=0.5"
        );

        cards.forEach((card, index) => {
            // Removed rotation animation for the image here

            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                },
                y: -20,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-32' ref={containerRef}>
            {/* first row */}
            <div className='flex flex-col md:flex-row items-center justify-between md:mb-16'>
                <div ref={titleRef} className="text-center md:text-left">
                    <h3 className='text-2xl md:text-3xl font-medium text-gray-800 mb-2 font-Gilroy'>Service</h3>
                    <h1 className='text-3xl md:text-5xl font-semibold font-Gilroy mb-4 bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent'>We do it best.</h1>
                </div>
                <div ref={buttonRef}>
                    <button
                        type="submit"
                        className="flex justify-center gap-2 mb-4 items-center shadow-xl text-lg backdrop-blur-md font-Gilroy isolation-auto border-emerald-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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

            {/* second row */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16'>
                {[ 
                    { icon: "/Icon1.png", title: "Space Planning", color: "from-emerald-400 to-emerald-600" },
                    { icon: "/Icon2.png", title: "Custom Furniture", color: "from-emerald-400 to-emerald-600" },
                    { icon: "/Icon3.png", title: "Interior Design", color: "from-emerald-400 to-emerald-600" },
                ].map((service, index) => (
                    <div 
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        className='bg-white border-4 border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
                    >
                        <div className="mb-6 icon">
                            <Image src={service.icon} width={50} height={50} alt={service.title} className="mx-auto" />
                        </div>
                        <h2 className={`mt-4 mb-4 text-2xl font-bold text-center font-Rimons bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.title}</h2>
                        <p className="mb-6 text-base text-center text-gray-600 font-Gilroy">
                            Transforming spaces with innovative design solutions. Our expert team brings your vision to life, creating harmonious and functional environments.
                        </p>
                        <button
                            type="submit"
                            className="flex justify-center gap-2 items-center shadow-xl text-base backdrop-blur-md font-Gilroy isolation-auto border-emerald-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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
                ))}
            </div>
        </div>
    );
}

export default Service;
