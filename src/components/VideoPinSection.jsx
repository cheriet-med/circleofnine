"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const sectionRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // register plugin once
    if (typeof window !== 'undefined' && !gsap.plugins?.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const root = sectionRef.current;
    const videoBox = root.querySelector('.video-box');

    // set initial clipPath depending on device
    if (videoBox) {
      gsap.set(videoBox, { clipPath: isMobile ? 'circle(100% at 50% 50%)' : 'circle(6% at 50% 50%)' });
    }

    if (!isMobile && videoBox) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          markers: true, // Debug markers
        },
      });

      tl.to(videoBox, {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section ref={sectionRef} className="vd-pin-section md:h-[110vh] h-dvh overflow-hidden md:!-translate-y-[15%] md:mt-0 mt-20">
      <div
        className="size-full video-box relative"
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
      >
        <video src="/video.mp4" playsInline muted loop autoPlay className="size-full absolute inset-0 object-cover" />

        <div className="abs-center md:scale-100 scale-200">
          <img src="/circle-text.svg" alt="" className="spin-circle size-[15vw]" />
          <div className="play-btn size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
            <img
              src="/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;