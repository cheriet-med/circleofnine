"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";


export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-[#4C1A57]  pt-40">
 <motion.div className="relative mx-4  flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="We help you to "
          words={["Create", "Scale", "build", "Growth"]}
        />
      </motion.div>
      <TypewriterEffectSmooth words={words} />
          <p className="text-gray-100 dark:text-neutral-200 text-xs sm:text-base  max-w-3xl text-center">
        The road to freedom starts from here The road to freedom starts from here The road to freedom starts from here The road to freedom starts from here
      </p>
    </div>
  );
}
