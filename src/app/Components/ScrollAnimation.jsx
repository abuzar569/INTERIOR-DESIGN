'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollAnimation = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Main Timeline for Image and Grid Entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

    // Image Scaling Animation
    tl.to(imageRef.current, {
      scale: 0.5,
      y: '25vh',
      duration: 1.5,
      ease: 'power2.out',
    })

    // Grid Fade-in Animation
    tl.to(
      gridRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
      },
      '-=1'
    )

    // Grid Items Animation with Stagger Effect
    const gridItems = gsap.utils.toArray('.grid-item')
    gsap.to(gridItems, {
      y: (index) => `${(index + 1) * -50}px`,
      stagger: 0.1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="h-[150vh] overflow-hidden">
      <h1 className=' text-6xl text-black font-Gilroy mb-10 text-center'>Gallery</h1>
      <div className=" top-0 h-screen flex items-center justify-center overflow-hidden relative">
        <img
          ref={imageRef}
          src="/Image1.jpg"
          alt="Main Image"
          className="w-full h-full object-cover brightness-75"
        />
        <div
          ref={gridRef}
          className="absolute inset-0 flex justify-center items-end pb-20 opacity-0 translate-y-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div
                key={num}
                className="grid-item w-40 h-40 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative"
              >
                <img
                  src={`/Image${num}.jpg`}
                  alt={`Image ${num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollAnimation
