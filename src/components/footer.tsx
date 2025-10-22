'use client'




import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import dynamic from "next/dynamic";
import { useState } from "react";

import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { InteractiveHoverButton } from './ui/interactive-hover-button';





const Footer = () => {
  const router = useRouter(); // Initialize the router







  const words = [
    {
      text: "Let’s ",
    },
    {
      text: "build",
    },
       {
      text: "something",
    },
    {
      text: "great",
      className: "text-[#ccac00] dark:text-[#ccac00]",
    },
    
  ];






  const words1 = [
    {
      text: "Let’s ",
    },
    {
      text: "build",
    },
       {
      text: "something",
    }
  ];




  const words2 = [
    {
      text: "great",
      className: "text-[#ccac00] dark:text-[#ccac00]",
    },
    
  ];





    return (
        <footer className="bg-[#0b0a0a] text-gray-50 ">
        <div className="mx-6 md:mx-16 custom:mx-80 py-20 font-montserrat">
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Contact & Follow Section */}
            <div className="col-span-1 hover:bg-gray-800 p-3">
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

            <div className="py-3">
               <p>Your full-stack partner crafting fast, scalable, <br /> and stunning web solutions that drive growth.</p>

   
            
            </div>
           

        


            </div>
            <div className=" p-3 flex flex-col justify-center">
            
            
            </div>
<div>


<div className='flex flex-wrap justify-around font-roboto text-2xl font-semibold uppercase'>
<div className='space-y-4'>
    <Link href='/'> <p className='hover:text-[#ccac00]'>Home</p></Link>
  <Link href='/about-us'> <p className='hover:text-[#ccac00]'>About Us</p></Link>
           
           <Link href='/blog'><p className='hover:text-[#ccac00]'>Blog</p> </Link>  
         <Link href='/contact-us'><p className='hover:text-[#ccac00]'>Contact Us</p></Link>
            </div>


<div className='space-y-4'>
          <Link href='/'><p className='hover:text-[#ccac00]'>Instagram</p></Link>
            <Link href='/'><p className='hover:text-[#ccac00]'>LinkeDin</p></Link>
            <Link href='/'><p className='hover:text-[#ccac00]'>Youtube</p></Link>
            </div>


</div>

<p className='text-center items-center pt-8 text-lge'>42 Nikis Avenue, Thessaloniki 54622, Greece</p>
</div>

            {/* Footer Text Spanning All Columns */}
        
        
          </div>
       
         
 
          </div>
        <div className="bg-black pb-20 text-gray-400 space-y-8">
            <div className='flex flex-col justify-center items-center space-y-4'>

               <div className='hidden sm:block'>
                   <TypewriterEffectSmooth words={words} />
              </div>
               <div className='block sm:hidden'>
                   <TypewriterEffectSmooth words={words1} /> 
                    <TypewriterEffectSmooth words={words2} />
               </div>
                  <InteractiveHoverButton>let’s talk</InteractiveHoverButton>

            </div>
          
 <div className="flex flex-wrap-reverse sm:justify-center mx-6 md:mx-16 custom:mx-72">
      <div className="flex  flex-wrap text-xs gap-4  text-gray-100 ">
                 <p className='font-bold'>2025 &copy; All rights reserved</p>
                <p>|</p>
                 <Link href="/privacy-policy"><p className="cursor-pointer hover:text-[#ccac00] hover:underline">Privacy Policy </p></Link>
              
            <p>|</p>
                <Link href="/terms-and-conditions"> <p className="cursor-pointer hover:text-[#ccac00] hover:underline">Terms and Conditions</p></Link>

                 <p>|</p>
                  <Link href="/cookies-policy"> <p className="cursor-pointer hover:text-[#ccac00] hover:underline">Cookies Policy</p></Link>

              </div>

 </div>
          
           
      </div>
      </footer>
      
    );
  };
  
  export default Footer;
  