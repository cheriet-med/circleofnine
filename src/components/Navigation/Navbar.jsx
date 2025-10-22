'use client'



import React, { useContext, useRef, useEffect, useState } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import Image from 'next/image'
import SoundButton from '../sound'
import Link from 'next/link'

const Navbar = () => {

  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const [navColor, setNavColor] = useContext(NavbarColorContext)


 const colors = ['#000035', '#4c0000', '#ccac00', '#cbcbcb', '#0b0a0a'] 
  const [currentColor, setCurrentColor] = useState(colors[0])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % colors.length
      setCurrentColor(colors[i])
    }, 2000) // change every 10 seconds

    return () => clearInterval(interval)
  }, [])

    return (
    <div className='z-40 flex items-center fixed top-0 w-full justify-between px-4 lg:px-8 py-3'>
      <div className='flex items-center lg:p-5 p-2'>
        <Link href='/'>
           <div className="relative h-12 lg:h-20 w-45 lg:w-60">
                              <Image
                                src="/6.png" // or "/logo.webp" if using an webp
                                alt="logo"
                                fill
                                sizes='100%'
                                style={{ objectFit: 'contain' }} // Maintain aspect ratio
                                priority // Ensures it loads faster
                              />
                            </div></Link>
            </div>
<div className="hidden lg:flex gap-8 items-center justify-center h-full font-semibold text-white">
  <Link href='/'>
  <p className="relative overflow-hidden group cursor-pointer">
    <span className="relative z-10 px-2 py-1 hover:text-[#4c0000]">Solutions</span>
    <span className="absolute inset-0 bg-[#ccac00]  translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
  </p>
  </Link>
    <div
      className="lg:w-4 w-4 h-1.5 border-white transition-colors duration-1000"
      style={{ backgroundColor: currentColor }}
    ></div>
<Link href='/about-us'>
  <p className="relative overflow-hidden group cursor-pointer">
    <span className="relative z-10 px-2 py-1 hover:text-[#4c0000]">About Us</span>
    <span className="absolute inset-0 bg-[#ccac00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
  </p>
</Link>



    <div
      className="lg:w-4 w-4 h-1.5 border-white transition-colors duration-1000"
      style={{ backgroundColor: currentColor }}
    ></div>
<Link href='/blog'>
  <p className="relative overflow-hidden group cursor-pointer">
    <span className="relative z-10 px-2 py-1 hover:text-[#4c0000]">Blog</span>
    <span className="absolute inset-0 bg-[#ccac00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
  </p>
</Link>
    <div
      className="lg:w-4 w-4 h-1.5 border-white transition-colors duration-1000"
      style={{ backgroundColor: currentColor }}
    ></div>

<Link href='/contact-us'>
  <p className="relative overflow-hidden group cursor-pointer">
    <span className="relative z-10 px-2 py-1 hover:text-[#4c0000]">Book a call</span>
    <span className="absolute inset-0 bg-[#ccac00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
  </p></Link>
</div>

<div className='flex gap-4'>
   <SoundButton />
<div
  onClick={() => setNavOpen(true)}
  onMouseEnter={() => {
    navGreenRef.current.style.height = '100%';
  }}
  onMouseLeave={() => {
    navGreenRef.current.style.height = '0%';
  }}
  className="group lg:h-16 h-10  bg-[#ccac00] cursor-pointer opacity-70 relative lg:w-[16vw] w-32"
>
  <div
    ref={navGreenRef}
    className="bg-[#4c0000] transition-all absolute top-0 h-0 w-full"
  ></div>

  <div className="relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5">
    <div className="lg:w-18 w-12 h-0.5 group-hover:bg-white transition-colors duration-300 bg-[#4c0000]"></div>
    <div className="lg:w-10 w-6 h-0.5 group-hover:bg-white transition-colors duration-300 bg-[#4c0000]"></div>
  </div>
</div>
</div>
 

        </div>
    )
}

export default Navbar