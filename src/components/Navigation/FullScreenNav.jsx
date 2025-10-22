'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { NavbarContext } from '../../context/NavContext'
import Image from 'next/image'
const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)





    function gsapAnimation() {
        if (!fullScreenRef.current) return
        const tl = gsap.timeline()
        const root = fullScreenRef.current
        const stairEls = root.querySelectorAll('.stairing')
        const linkEls = root.querySelectorAll('.link')
        const navlinkEls = root.querySelectorAll('.navlink')

        // ensure it's visible
        gsap.set(root, {display: 'block'})

        tl.to(stairEls, {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to(linkEls, {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to(navlinkEls, {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        if (!fullScreenRef.current) return
        const tl = gsap.timeline()
        const root = fullScreenRef.current
        const stairEls = root.querySelectorAll('.stairing')
        const linkEls = root.querySelectorAll('.link')
        const navlinkEls = root.querySelectorAll('.navlink')

        tl.to(linkEls, {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(stairEls, {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(navlinkEls, {
            opacity: 0
        })
        tl.add(() => gsap.set(root, {display: 'none'}))
    }


    useGSAP(function () {
        // debug log to confirm navOpen changes
        if (typeof window !== 'undefined') console.log('FullScreenNav useGSAP navOpen=', navOpen)
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-[#4c0000]'></div>
                    <div className='stairing h-full w-1/5 bg-[#4c0000]'></div>
                    <div className='stairing h-full w-1/5 bg-[#4c0000]'></div>
                    <div className='stairing h-full w-1/5 bg-[#4c0000]'></div>
                    <div className='stairing h-full w-1/5 bg-[#4c0000]'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
      <div className='flex items-center lg:p-5 p-2'>

            <div className="relative h-12 lg:h-20 w-45 lg:w-60">
                               <Image
                                 src="/6.png" // or "/logo.webp" if using an webp
                                 alt="logo"
                                 fill
                                 sizes='100%'
                                 style={{ objectFit: 'contain' }} // Maintain aspect ratio
                                 priority // Ensures it loads faster
                               />
                             </div>

            </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#ccac00]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#ccac00]'></div>

                    </div>
                </div>
                <div className=' pt-32 sm:pt-0 lg:pt-24'>
                      <Link href='/' onClick={() => setNavOpen(false)}>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-montserrat font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Solutions</h1>
                        <div className='moveLink absolute text-[#4c0000] flex top-0 bg-[#ccac00]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase '>Kickstart Your Idea</h2>
                                <img className='lg:h-36 h-8 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Let’s Build Something Great</h2>
                                <img className='lg:h-36 h-8 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/2.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Start Your Development Journey</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Journey</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/2.jpg" alt="" />
                            </div>
                        </div>

                    </div></Link>
                    <Link href='/about-us' onClick={() => setNavOpen(false)}>   
                    <div className='link origin-top relative border-t-1 border-white'>
                      <h1 className='font-montserrat font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>About Us</h1>
                       
                        <div className='moveLink absolute text-[#4c0000] flex top-0 bg-[#ccac00]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Web & Mobile Apps</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/3.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Desktop </h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/4.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Mobile</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/3.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Desktop </h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/4.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    </Link>
                    <Link href='/blog' onClick={() => setNavOpen(false)}>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-montserrat font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Blog</h1>
                        <div className='moveLink absolute text-[#4c0000] flex top-0 bg-[#ccac00]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Startups & Entrepreneurship</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/5.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Guide and Advice</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/6.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Trends & Innovations</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/5.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Case Studies</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/6.jpg" alt="" />
                            </div>
                        </div>

                    </div></Link>  
                    <Link href='/contact-us' onClick={() => setNavOpen(false)}>
                    <div className='link origin-top relative border-y-1 border-white'>
                        <h1 className='font-montserrat font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Book a call</h1>
                        <div className='moveLink absolute text-[#4c0000] flex top-0 bg-[#ccac00]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Schedule a Consultation</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/7.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Talk to Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/8.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Get Started Today</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/7.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Let’s Chat</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/menu/8.jpg" alt="" />
                            </div>
                        </div>

                    </div>  
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav