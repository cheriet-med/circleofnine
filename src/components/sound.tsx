'use client';
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { HiSpeakerWave } from "react-icons/hi2";
import { TiLocationArrow } from "react-icons/ti";
import { GiSoundOn } from "react-icons/gi";
import { PiDotsThreeOutlineBold } from "react-icons/pi";


export default function SoundButton() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div className="flex items-center cursor-pointer select-none  pointer-events-auto" onClick={toggleAudioIndicator}>
      <audio
        ref={audioElementRef}
        className="hidden"
        src="/audio/loop.mp3"
        loop
      />
      {isAudioPlaying ? (
        <>

          <div className="flex ml-2 h-6 items-end">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={clsx(
                  "w-1 mx-0.5 rounded bg-white transition-all duration-300",
                  isAudioPlaying ? "animate-bar" : "opacity-40 h-2"
                )}
                style={
                  isAudioPlaying
                    ? { animationDelay: `${bar * 0.1}s` }
                    : { height: '0.5rem' }
                }
              />
            ))}
          </div>
        </>
      ) : (
        <span className="text-white text-2xl">
          <PiDotsThreeOutlineBold size={32}/>
        </span>
      )}
    </div>
  );
}

/* Add this to your global CSS or Tailwind config:
@keyframes bar {
  0%, 100% { height: 0.5rem; }
  20% { height: 1.5rem; }
  40% { height: 2.2rem; }
  60% { height: 1.2rem; }
  80% { height: 1.8rem; }
}
.animate-bar {
  animation: bar 1s infinite linear;
  height: 2rem;
  opacity: 1 !important;
}
*/