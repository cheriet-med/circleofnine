'use client';

import dynamic from 'next/dynamic';
import { GlobeDemo } from "@/components/3d";
import { TypewriterEffectSmoothDemo } from "@/components/headline";
import VideoSection from '@/components/VideoSection';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Compare } from "@/components/ui/compare";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Timeline } from "@/components/ui/timeline";
import FAQAccordion from '@/components/faq';
import Appscroll from '@/components/list';

import { IconCloud } from "@/components/ui/icon-cloud"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

import { Safari } from "@/components/ui/safari"


const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => (
    <div className="flex-center h-dvh w-screen overflow-hidden bg-violet-50">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  )
});


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

const Page = () => {

 const imagesss = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <>
        <main className='bg-[#000035] overflow-x-hidden'>


   <Hero />

     
    </main>
    <GlobeDemo />
<HeroParallax products={products} />


<div className='overflow-x-hidden'>





 <div className="relative flex w-full  flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-5xl font-extrabold tracking-[-0.02em] md:text-9xl  md:leading-[8rem] uppercase text-[#4c0000]">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
           We build with precision.
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
        scalability, and performance in mind.
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>

<div className='mx-4 md:mx-8 lg:mx-16 xl:mx-76 py-16 '>
   <p className='lg:w-82 w-64  text-[#0b0a0a]  font-roboto lg:text-sm text-xs lg:leading-relaxed leading-tight font-medium'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
       Our development process is built on the latest technology frameworks to maintain modern standards and best practices.</p>
<div className='flex justify-center py-12 md:py-6  lg:py-1'> 
<IconCloud images={imagesss} />
</div>
<div className='flex justify-end '> 
   <p className='lg:w-82 w-64  text-[#0b0a0a] font-roboto lg:text-sm text-xs lg:leading-relaxed leading-tight font-medium'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        We work across multiple programming languages to develop robust solutions for blockchain, web, and mobile platforms.</p>
</div>
</div>



    



<div className='pb-16 '>
   
    <div className="relative flex w-full  flex-col items-center justify-center overflow-hidden">
    <ScrollVelocityContainer className="text-5xl font-extrabold tracking-[-0.02em] md:text-9xl  md:leading-[8rem] uppercase text-[#ccac00]">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          All your digital needs in one place.
        </ScrollVelocityRow>
        
      </ScrollVelocityContainer>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
     <Terminal>
      <TypingAnimation className='text-[#ccac00] text-xl font-bold'>~$ Our Services</TypingAnimation>
      <TypingAnimation className='text-white md:text-lg'>&gt; After reviewing your idea or project needs, </TypingAnimation>
 <TypingAnimation className='text-white md:text-lg'>&gt; We perform a detailed technical analysis </TypingAnimation>
<TypingAnimation className='text-white md:text-lg'>&gt; and provide a free consultation to identify areas for improvement.</TypingAnimation>


<TypingAnimation className='text-[#cbcbcb] md:text-lg'>&gt; We begin the process with the design phase.</TypingAnimation>



     

      <AnimatedSpan className="text-green-500">
        ✔ System Architecture Design.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Graphic Design.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Web App.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ SaaS Platform.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Android App.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ iOS App.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ API.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ UI/UX.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ 3D Design & Visualization.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Animation Design.
      </AnimatedSpan>



    <TypingAnimation className='text-[#cbcbcb] md:text-lg'>&gt; After finalizing the design, we begin development</TypingAnimation>
   <TypingAnimation className='text-[#cbcbcb] md:text-lg'>&gt; building the frontend and backend with clean, scalable code</TypingAnimation>
      <AnimatedSpan className="text-green-500">
        ✔ Building user interfaces with modern frameworks.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Creating robust APIs, server logic, and databases.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Connecting frontend and backend.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Third-party services, or APIs.
      </AnimatedSpan>
            <AnimatedSpan className="text-green-500">
        ✔ Testing & Quality Assurance.
      </AnimatedSpan>

<TypingAnimation className='text-[#cbcbcb] md:text-lg'>&gt; We deploy your project and launch it seamlessly on your preferred server.</TypingAnimation>
<TypingAnimation className='text-[#ccac00] md:text-lg'>&gt; Maintenance & Support</TypingAnimation>
<TypingAnimation className='text-[#cbcbcb] '>&gt; We provide updates, bug fixes, and ongoing improvements</TypingAnimation>
<TypingAnimation className='text-[#cbcbcb] '>&gt; to keep your product running smoothly.</TypingAnimation>
<TypingAnimation className='text-[#ccac00] md:text-lg'>&gt; Performance & Future Growth</TypingAnimation>
<TypingAnimation className='text-[#cbcbcb] '>&gt; Continuous monitoring and scaling to handle growth and new features.</TypingAnimation>
   
     <AnimatedSpan className="text-[#ccac00]">
        We offer unlimited revisions until you’re completely satisfied.
      </AnimatedSpan>
    </Terminal>

</div>




      <div className="mx-auto  bg-[#ccac00]  ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      
  <Appscroll/>
    </div>


<FAQAccordion/>

    </div>
    </>

  );
}

export default Page;

//<VideoSection/>



export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Editorially",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Algochurn",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Goamico",
    link: "https://goamico.com",
    thumbnail:
      "/im1.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "Creme Digital",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];



const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


   const images = [
      "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
      "https://assets.aceternity.com/animated-modal.png",
      "https://assets.aceternity.com/animated-testimonials.webp",
      "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
      "https://assets.aceternity.com/github-globe.png",
      "https://assets.aceternity.com/glare-card.png",
      "https://assets.aceternity.com/layout-grid.png",
      "https://assets.aceternity.com/flip-text.png",
      "https://assets.aceternity.com/hero-highlight.png",
      "/im1.png",
      "/im2.png",
      "/im3.png",
      "/im4.png",
      "/im1.png",
      "/im2.png",
      "/im3.png",
      "/im4.png",
      "/im1.png",
      "/im2.png",
      "/im3.png",
      "/im4.png",
      "/im1.png",
      "/im2.png",
      "/im3.png",
      "/im4.png",
      "/im1.png",
      "/im2.png",
      "/im3.png",
      "/im4.png",
      "https://assets.aceternity.com/wobble-card.png",
      "https://assets.aceternity.com/world-map.webp",
    ];




   const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

   const imagess = [
    {
      image: "/framworks/1.png",
      alt: "Mountain landscape"
    },
    {
      image: "/framworks/2.png",
      alt: "Nature scene"
    },
    {
      image: "/framworks/3.png",
      alt: "Beautiful vista"
    },
    {
      image: "/framworks/4.png",
      alt: "Scenic view"
    },
    {
      image: "/framworks/5.png",
      alt: "Landscape photo"
    },
    {
      image: "/framworks/6.png",
      alt: "Landscape photo"
    }
    ,
    {
      image: "/framworks/7.png",
      alt: "Landscape photo"
    }
    ,
    {
      image: "/framworks/8.png",
      alt: "Landscape photo"
    },
    {
      image: "/framworks/9.png",
      alt: "Landscape photo"
    },
   
    {
      image: "/framworks/10.png",
      alt: "Landscape photo"
    },
   
    {
      image: "/framworks/11.png",
      alt: "Landscape photo"
    },
   
    {
      image: "/framworks/12.png",
      alt: "Landscape photo"
    },
   
    {
      image: "/framworks/13.png",
      alt: "Landscape photo"
    },
   
    {
      image: "/framworks/14.png",
      alt: "Landscape photo"
    },
   
  ];






  
   // <div className="relative w-full overflow-clip">
    //  <Timeline data={data} />
//<ThreeDMarquee images={images} />
  //  </div> 



  /**
   *   <div className="flex bg-[#cbcbcb]  w-full items-center justify-center ">
      <MaskContainer
        revealText={
          <p className="mx-16 text-center text-5xl  lg:text-9xl font-bold uppercase text-[#4c0000] dark:text-white">
            We build with precision, scalability, and performance in mind.
          </p>
        }
        className="h-[40rem] "
      >
        We use world-class frameworks to build {" "} 
        <span className='text-[#4c0000]'>
          smooth
          </span>, 
          <span className='text-[#cbcbcb]'>
         fast
          </span>
          , and 
         <span className='text-[#000035]'>
            future-ready platforms
          </span>
          .
        
      </MaskContainer>
    </div>



     <div className="pb-16 flex flex-col antialiased bg-[#cbcbcb] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
          items={imagess}
          direction="right"
          speed="fast"
          pauseOnHover={true}
        />
    </div>
   */




/***
 *   <div className="w-full">
      <Safari
        url="magicui.design"
        videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
      />
    </div>
 */