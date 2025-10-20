import React from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import type { MotionValue } from "motion/react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ScrollVelocityContext = React.createContext<MotionValue<number> | null>(null);

function ScrollVelocityContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ScrollVelocityContext.Provider value={velocityFactor}>
      <div className={`relative w-full ${className}`}>
        {children}
      </div>
    </ScrollVelocityContext.Provider>
  );
}

function ScrollVelocityRow({ 
  children, 
  baseVelocity = 5, 
  direction = 1, 
  className = "", 
  velocityFactor 
}: { 
  children: React.ReactNode; 
  baseVelocity?: number; 
  direction?: 1 | -1; 
  className?: string; 
  velocityFactor: MotionValue<number>;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const blockRef = React.useRef<HTMLDivElement>(null);
  const [numCopies, setNumCopies] = React.useState(1);

  const baseX = useMotionValue(0);
  const baseDirectionRef = React.useRef(direction >= 0 ? 1 : -1);
  const currentDirectionRef = React.useRef(direction >= 0 ? 1 : -1);
  const unitWidth = useMotionValue(0);

  const isInViewRef = React.useRef(true);
  const isPageVisibleRef = React.useRef(true);
  const prefersReducedMotionRef = React.useRef(false);

  React.useEffect(() => {
    const container = containerRef.current;
    const block = blockRef.current;
    if (!container || !block) return;

    const updateSizes = () => {
      const ch = container.offsetHeight || 0;
      const bh = block.scrollHeight || 0;
      unitWidth.set(bh);
      const nextCopies = bh > 0 ? Math.max(3, Math.ceil(ch / bh) + 2) : 1;
      setNumCopies((prev) => (prev === nextCopies ? prev : nextCopies));
    };

    updateSizes();

    const ro = new ResizeObserver(updateSizes);
    ro.observe(container);
    ro.observe(block);

    const io = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;
    });
    io.observe(container);

    const handleVisibility = () => {
      isPageVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility, {
      passive: true,
    });
    handleVisibility();

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handlePRM = () => {
      prefersReducedMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", handlePRM);
    handlePRM();

    return () => {
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      mq.removeEventListener("change", handlePRM);
    };
  }, [children, unitWidth]);

  const y = useTransform([baseX, unitWidth], ([v, bh]) => {
    const height = Number(bh) || 1;
    const offset = Number(v) || 0;
    return `${-wrap(0, height, offset)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (!isInViewRef.current || !isPageVisibleRef.current) return;
    const dt = delta / 1000;
    const vf = velocityFactor.get();
    const absVf = Math.min(5, Math.abs(vf));
    const speedMultiplier = prefersReducedMotionRef.current ? 1 : 1 + absVf;

    if (absVf > 0.1) {
      const scrollDirection = vf >= 0 ? 1 : -1;
      currentDirectionRef.current = baseDirectionRef.current * scrollDirection;
    }

    const bh = unitWidth.get() || 0;
    if (bh <= 0) return;
    const pixelsPerSecond = (bh * baseVelocity) / 100;
    const moveBy = currentDirectionRef.current * pixelsPerSecond * speedMultiplier * dt;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className={`h-screen overflow-hidden ${className}`}>
      <motion.div
        className="inline-flex flex-col transform-gpu will-change-transform select-none"
        style={{ y }}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? blockRef : null}
            aria-hidden={i !== 0}
            className="inline-flex flex-col shrink-0"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ScrollVelocityRowWithContext(props: { 
  children: React.ReactNode; 
  baseVelocity?: number; 
  direction?: 1 | -1; 
  className?: string;
}) {
  const sharedVelocityFactor = React.useContext(ScrollVelocityContext);
  const { scrollY } = useScroll();
  const localVelocity = useVelocity(scrollY);
  const localSmoothVelocity = useSpring(localVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const localVelocityFactor = useTransform(localSmoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ScrollVelocityRow
      {...props}
      velocityFactor={sharedVelocityFactor || localVelocityFactor}
    />
  );
}

export default function App() {
const media = [
  { type: 'image', src: '/im1.png' },
  { type: 'image', src: '/im2.png' },
  { type: 'image', src: '/im3.png' },
  { type: 'video', src: '/videos/1.mp4' },
  { type: 'video', src: '/videos/2.mp4' },
  { type: 'video', src: '/videos/3.mp4' },
  { type: 'video', src: '/videos/4.mp4' },
  { type: 'image', src: '/im3.png' },
  { type: 'image', src: '/im2.png' },
];

  const firstColumn = media.slice(0, 3);
  const secondColumn = media.slice(3, 6);
  const thirdColumn = media.slice(6, 9);

  const renderMediaItem = (item: { type: 'image' | 'video'; src: string }, index: number) => {
    if (item.type === 'video') {
      return (
        <video
          key={index}
          src={item.src}
          className="w-full h-auto rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
    return (
      <img
        key={index}
        src={item.src}
        alt={`Media ${index + 1}`}
        className="w-full h-auto rounded-lg "
      />
    );
  };

  return (
   
      <div className="h-[500px] md:h-screen sticky top-0 overflow-hidden">
        <ScrollVelocityContainer>
          <div className="grid grid-cols-3  md:grid-cols-4 gap-1 md:gap-4 h-screen ">
            <div className='col-span-1 hidden md:block'>
<ScrollVelocityRowWithContext baseVelocity={3} direction={1}>
              <div className="flex flex-col gap-2 md:gap-4 py-2">
                {firstColumn.map((item, idx) => (
                  <div key={idx} className="shrink-0">
                    {renderMediaItem(item as any, idx)}
                  </div>
                ))}
              </div>
            </ScrollVelocityRowWithContext>

            </div>
            
  <div className='col-span-2'>
     <ScrollVelocityRowWithContext baseVelocity={2} direction={-1}>
             <div className="flex flex-col gap-2 md:gap-4 py-2">
                {secondColumn.map((item, idx) => (
                  <div key={idx} className="shrink-0">
                    {renderMediaItem(item as any, idx)}
                  </div>
                ))}
              </div>
            </ScrollVelocityRowWithContext>
</div>
           
  <div className='col-span-1'>
            <ScrollVelocityRowWithContext baseVelocity={4} direction={1}>
            <div className="flex flex-col gap-2 md:gap-4 py-2">
                {thirdColumn.map((item, idx) => (
                  <div key={idx} className="shrink-0">
                    {renderMediaItem(item as any, idx)}
                  </div>
                ))}
              </div>
            </ScrollVelocityRowWithContext>

</div>

          </div>
        </ScrollVelocityContainer>
      </div>

  );
}