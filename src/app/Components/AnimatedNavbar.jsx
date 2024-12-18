'use client'

import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
]

const AnimatedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const timeline = useRef(null)

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })

    timeline.current
      .to(menuRef.current, {
        duration: 0.5,
        clipPath: 'circle(100% at 50% 50%)',
        ease: 'power2.inOut',
      })
      .to(
        '.menu-link',
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.3'
      )

    return () => {
      timeline.current?.kill()
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      timeline.current?.play()
    } else {
      timeline.current?.reverse()
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      ref={navRef}
      className="navbar fixed top-0 left-0 w-full z-50 text-white bg-emerald-800 "
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold font-Rimons tracking-wider"> <span className=''> EL-</span>INTERO</div>
        <button
          onClick={toggleMenu}
          className="z-50 focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        ref={menuRef}
        className="fixed inset-0 bg-emerald-500 bg-opacity-90 flex items-center justify-center"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <ul className="text-center space-y-8">
          {links.map((link, index) => (
            <li key={index} className="overflow-hidden">
              <a
                href={link.href}
                className="menu-link text-4xl font-Gilroy text-white font-bold hover:text-emerald-800 transition-colors duration-300 inline-block opacity-0 transform translate-y-8"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default AnimatedNavbar
