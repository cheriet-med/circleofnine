"use client"

import React, { HTMLAttributes, useState, useEffect } from "react"
import { motion } from "motion/react"

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ")

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  perspective?: number
  beamsPerSide?: number
  beamSize?: number
  beamDelayMax?: number
  beamDelayMin?: number
  beamDuration?: number
  gridColor?: string
}

interface BeamData {
  x: number
  delay: number
  hue: number
  aspectRatio: number
}

const Beam = ({
  width,
  x,
  delay,
  duration,
  hue,
  aspectRatio,
}: {
  width: string | number
  x: string | number
  delay: number
  duration: number
  hue: number
  aspectRatio: number
}) => {
  return (
    <motion.div
      style={
        {
          "--x": `${x}`,
          "--width": `${width}`,
          "--aspect-ratio": `${aspectRatio}`,
          "--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
        } as React.CSSProperties
      }
      className={`absolute top-0 left-[var(--x)] [aspect-ratio:1/var(--aspect-ratio)] [width:var(--width)] [background:var(--background)]`}
      initial={{ y: "100cqmax", x: "-50%" }}
      animate={{ y: "-100%", x: "-50%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
  children,
  perspective = 100,
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = "white",
  ...props
}) => {
  const [mounted, setMounted] = useState(false)
  const [beams, setBeams] = useState<{
    top: BeamData[]
    right: BeamData[]
    bottom: BeamData[]
    left: BeamData[]
  }>({ top: [], right: [], bottom: [], left: [] })

  useEffect(() => {
    const generateBeams = () => {
      const beams: BeamData[] = []
      const cellsPerSide = Math.floor(100 / beamSize)
      const step = cellsPerSide / beamsPerSide

      for (let i = 0; i < beamsPerSide; i++) {
        const x = Math.floor(i * step)
        const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin
        const hue = Math.floor(Math.random() * 360)
        const aspectRatio = Math.floor(Math.random() * 10) + 1
        beams.push({ x, delay, hue, aspectRatio })
      }
      return beams
    }

    setBeams({
      top: generateBeams(),
      right: generateBeams(),
      bottom: generateBeams(),
      left: generateBeams(),
    })
    setMounted(true)
  }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin])

  return (
    <div className={cn("relative rounded border border-white bg-black p-20", className)} {...props}>
      <div
        style={
          {
            "--perspective": `${perspective}px`,
            "--grid-color": gridColor,
            "--beam-size": `${beamSize}%`,
          } as React.CSSProperties
        }
        className={
          "[container-type:size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] [perspective:var(--perspective)] [transform-style:preserve-3d]"
        }
      >
        {/* top side */}
        <div className="[container-type:inline-size] absolute z-20 [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]">
          {mounted && beams.top.map((beam, index) => (
            <Beam
              key={`top-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              aspectRatio={beam.aspectRatio}
            />
          ))}
        </div>
        {/* bottom side */}
        <div className="[container-type:inline-size] absolute top-full [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]">
          {mounted && beams.bottom.map((beam, index) => (
            <Beam
              key={`bottom-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              aspectRatio={beam.aspectRatio}
            />
          ))}
        </div>
        {/* left side */}
        <div className="[container-type:inline-size] absolute top-0 left-0 [height:100cqmax] [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]">
          {mounted && beams.left.map((beam, index) => (
            <Beam
              key={`left-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              aspectRatio={beam.aspectRatio}
            />
          ))}
        </div>
        {/* right side */}
        <div className="[container-type:inline-size] absolute top-0 right-0 [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]">
          {mounted && beams.right.map((beam, index) => (
            <Beam
              key={`right-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              aspectRatio={beam.aspectRatio}
            />
          ))}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

// Demo
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
     
    </div>
  )
}