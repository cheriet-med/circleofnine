"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delayBetweenLoops = 1.5, // pause before restarting
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delayBetweenLoops?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    let isActive = true;

    const animateWords = async () => {
      while (isActive) {
        // --- Fade In ---
        await animate(
          "span",
          { opacity: 1, filter: filter ? "blur(0px)" : "none" },
          {
            duration: duration ?? 0.5,
            delay: stagger(0.15),
          }
        );

        // --- Small pause ---
        await new Promise((r) => setTimeout(r, delayBetweenLoops * 1000));

        // --- Fade Out (same order) ---
        const spans = Array.from(
          scope.current?.querySelectorAll("span") || []
        ) as HTMLElement[];

        for (let i = 0; i < spans.length; i++) {
          const span = spans[i];
          await animate(
            span,
            { opacity: 0, filter: filter ? "blur(10px)" : "none" },
            { duration: duration ?? 0.5 }
          );

          // small delay for stagger effect
          await new Promise((r) => setTimeout(r, 150));
        }

        // --- Wait before restarting ---
        await new Promise((r) => setTimeout(r, delayBetweenLoops * 1000));
      }
    };

    animateWords();

    return () => {
      isActive = false;
    };
  }, [scope, animate, filter, duration, delayBetweenLoops]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
 <motion.span
  key={word + idx}
  className="dark:text-white text-white opacity-0 inline-block mr-2"
  style={{
    filter: filter ? "blur(10px)" : "none",
  }}
>
  {word}
</motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-base sm:text-xl mx-1  md:max-w-5xl ", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-white leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
