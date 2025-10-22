'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import SoundButton from "./sound"
import VideoPreview from "./VideoPreview";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Video from 'next-video';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [topTextIndex, setTopTextIndex] = useState(0);
  const [bottomTextIndex, setBottomTextIndex] = useState(0);
  const [showTop, setShowTop] = useState(true);

  const totalVideos = 4;
  const words1 = `Build, launch, and scale`;
  const words2 = `From idea to reality in one place.`;
  const words3 = `Scale your business to the next level`;
  const texts = [
    { text: "Idea", color: "text-white" },
    { text: "Development", color: "text-[#4c0000]" },
    { text: "Security", color: "text-[#ccac00]" },
    { text: "Innovation", color: "text-[#000035]" },
  
  ];
  const texts1 = [

    { text: "Technology", color: "text-[#ccac00]" },
    { text: "Project", color: "text-[#cbcbcb]" },
    { text: "Dream", color: "text-white" }
  ];

  useEffect(() => {
    const topInterval = setInterval(() => {
      setTopTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);
    const bottomInterval = setInterval(() => {
      setBottomTextIndex(prevIndex => (prevIndex + 1) % texts1.length);
    }, 3000);
    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, []);
  const nextVdRef = useRef(null);
  const currentVdRef = useRef(null);
  const mainVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === 3) { // We only need to load 3 initial videos
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current?.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0% 0%, 98% 0%, 100% 100%, 0% 98%)",
       borderRadius: "0% 0% 0% 40%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []); // Add empty dependency array to run only once on mount

  const getVideoSrc = (index) => `videos/${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="size-64 cursor-pointer overflow-hidden rounded-lg">
              <VideoPreview>
                <div
                  onClick={handleMiniVdClick}
                  className="origin-center scale-75 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100"
                >
                  <video
                    ref={currentVdRef}
                    src={getVideoSrc((currentIndex % totalVideos) + 1)}
                    loop
                    muted
                    id="current-video"
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                  />
                </div>
              </VideoPreview>
            </div>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            ref={mainVdRef}
            id="main-video"
            src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

<style jsx>{`
          @keyframes slideTopIn {
            0% { opacity: 0; transform: translateY(-40px) scale(0.9); filter: blur(10px); }
            30% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            70% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(10px); }
          }
          @keyframes slideBottomIn {
            0% { opacity: 0; transform: translateX(40px) scale(0.9); filter: blur(10px); }
            30% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
            70% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translateX(-40px) scale(0.9); filter: blur(10px); }
          }
          .glow {
            text-shadow: 0 0 10px currentColor;
          }
        `}</style>

        <div className="absolute bottom-12 right-10 z-40 overflow-hidden">
          <h1 
            key={`bottom-${bottomTextIndex}`}
            className={`font-extrabold text-5xl lg:text-9xl uppercase transition-all duration-500  ${texts1[bottomTextIndex].color} font-montserrat glow`}
            style={{
              animation: 'slideBottomIn 2s cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'center right',
              WebkitTextStroke: '2px #cbcbcb',
            }}
          >
            {texts1[bottomTextIndex].text}
          </h1>
        </div>
        <div className="mb-5 absolute bottom-1 right-10 z-40 font-bold">
       
            <TextGenerateEffect words={words3}   delayBetweenLoops={4}/> 
         </div>



        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-40 px-5 sm:px-10">
            { showTop && (
              <h1 
                key={`top-${topTextIndex}`}
                className={`font-extrabold text-5xl lg:text-9xl uppercase transition-all duration-500 ${texts[topTextIndex].color} font-montserrat font-[font2] glow`}
                style={{
                  animation: 'slideTopIn 2s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center left',
                  WebkitTextStroke: '2px #cbcbcb',
                }}
              >
                {texts[topTextIndex].text}
              </h1>
            )}
            <div className="mb-5 text-start font-bold">
              <TextGenerateEffect words={words1}   delayBetweenLoops={2}/>
<TextGenerateEffect words={words2}   delayBetweenLoops={3}/> 
            </div>

          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
