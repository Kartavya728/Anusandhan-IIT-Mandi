"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ContentItem {
  title: string;
  description: string;
  src: string;
  content?: React.ReactNode | any;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // --- CHANGE: Track for the full duration the element is visible ---
    // This often gives a more intuitive 0-1 range relative to the content.
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clampedLatest = Math.max(0, Math.min(1, latest));

    // --- CHANGE: Use "closest breakpoint" logic for potentially better sync ---
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(clampedLatest - breakpoint);
        const accDistance = Math.abs(clampedLatest - cardsBreakpoints[acc]);
        return distance < accDistance ? index : acc;
      },
      0
    );

    // Update active card only if it changed
    if (closestBreakpointIndex !== activeCard) {
      setActiveCard(closestBreakpointIndex);
    }
  });


  return (
    <motion.div
      ref={ref}
      className="relative flex w-full justify-center space-x-6 md:space-x-10 p-6 md:p-10 min-h-screen" // Ensure enough scroll height
    >
      {/* Left Column: Scrollable Text Content */}
      <div className="div flex items-start pt-10 md:pt-20">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            // --- OPTIONAL: Adjust vertical margin if sync feels off ---
            // Try slightly smaller (e.g., my-16 md:my-24) or larger margins
            <div key={item.title + index} className="my-20 md:my-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-base md:text-lg mt-6 md:mt-8 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* --- OPTIONAL: Adjust spacer height if last item doesn't trigger well --- */}
          <div className="h-[40vh]" />
        </div>
      </div>

      {/* Right Column: Sticky Image Panel */}
      <div
        className={cn(
          // --- CHANGE: Reduced height. Adjust `top-` if needed for alignment ---
          // Example: Reduced from h-[30rem] to h-[24rem] (384px). Adjust as desired.
          "sticky top-20 hidden lg:block h-[24rem] w-[24rem] xl:w-[30rem] rounded-lg overflow-hidden shadow-xl",
          contentClassName
        )}
        style={{
           backgroundColor: '#334155', // Optional subtle background
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative h-full w-full" // Fills the sticky container
          >
            <br/><br/><br/><br/><br/>
            {content[activeCard]?.src && (
              <Image
                src={content[activeCard].src}
                layout="fill"
                objectFit="cover"
                alt={content[activeCard].title}
                className="h-full w-full"
                priority={activeCard <= 1} // Prioritize first couple of images
                unoptimized // If using external URLs or disabling optimization
              />
            )}
            {/* Optional: Overlay content[activeCard].content here */}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};