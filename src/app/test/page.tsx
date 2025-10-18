
import { GlobeDemo } from "@/components/3d";
import HomeBottomText from "../../components/home/HomeBottomText"
import { TypewriterEffectSmoothDemo } from "@/components/headline";

import VideoSection from '@/components/VideoSection';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Compare } from "@/components/ui/compare";
import { HeroParallax } from "@/components/ui/hero-parallax";



export default function LayoutTextFlipDemos() {


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
      "https://assets.aceternity.com/carousel.webp",
      "https://assets.aceternity.com/placeholders-and-vanish-input.png",
      "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
      "https://assets.aceternity.com/signup-form.png",
      "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
      "https://assets.aceternity.com/spotlight-new.webp",
      "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
      "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
      "https://assets.aceternity.com/tabs.png",
      "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
      "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
      "https://assets.aceternity.com/glowing-effect.webp",
      "https://assets.aceternity.com/hover-border-gradient.png",
      "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
      "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
      "https://assets.aceternity.com/macbook-scroll.png",
      "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
      "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
      "https://assets.aceternity.com/multi-step-loader.png",
      "https://assets.aceternity.com/vortex.png",
      "https://assets.aceternity.com/wobble-card.png",
      "https://assets.aceternity.com/world-map.webp",
    ];
  
  
  return (
    <div >
      
    
      <GlobeDemo />
            <div className="mx-auto  bg-gray-800 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>


    <div className=" h-[85vh] px-1 md:px-8 flex items-center bg-gray-800 mx-auto w-full justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-[#F0F600]    border-[#F0F600]  dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="https://assets.aceternity.com/notes-dark.png"
          secondImage="https://assets.aceternity.com/linear-dark.png"
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
