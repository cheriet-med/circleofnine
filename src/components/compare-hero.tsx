'use client'


import React from "react";
import { Compare } from "@/components/ui/compare";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import HomeBottomText from "@/components/home/HomeBottomText";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { cn } from "@/lib/utils";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";



export default function CompareHero() {


  const words = [
    {
      text: "your",
    },
    {
      text: "ideas",
    },
    {
      text: "into",
    },
    {
      text: "powerful",
    },
    
  ];

  const words2 = [
    {
      text: "growth-driven",
      className: "text-[#ccac00] dark:text-[#ccac00]",
    },
     {
      text: "apps.",
      className: "text-[#ccac00] dark:text-[#ccac00]",
    },
  ]

  const words1 = `Transform your idea into a digital experience, share it with the world, and watch your project grow beyond boundaries.`;



  return (
    <div className="mx-auto bg-[#4c0000] pt-32 pb-8">
     <div className="flex flex-col items-center justify-center  ">
    <motion.div className=" mx-2 md:mx-4  flex  items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
           <LayoutTextFlip
             text="We help you to "
             words={["Scale", "build", "Create"]}
           />
         </motion.div>
         <div className="py-4">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth words={words2} />
         </div>
       <div className="mx-3">
          <TextGenerateEffect words={words1}   delayBetweenLoops={3}/>
       </div>
       
            
       </div>
    <div className="w-full max-w-8xl mx-auto h-[60vh] sm:h-[100vh]  md:h-[60vh] lg:h-[100vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(7deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="/idea.jpg"
          secondImage="/result1.jpg"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
   
   
        </div>
  );
}
