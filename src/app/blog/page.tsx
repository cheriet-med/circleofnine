'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className=" mx-auto px-8 bg-[#ccac00] pt-32">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "How Smart Design Turns Browsers into Buyers",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/blog/1",
    image:"/idea.jpg",
  },
  {
    title: "Building Brands That Break Through the Noise in 2025",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/blog/2",
    image:"/result.jpg",
  },
  {
    title: "The Secret to Scaling Your Website Like a 7-Figure Agency",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/blog/3",
        image:"/office.jpg",
  },
  {
    title: "From Concept to Conversion: The Modern Web Design Playbook",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/blog/4",
        image:"/code.jpg",
  },
  
];
