"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react"; // Assuming this path is correct for your framer-motion setup
import Image from "next/image";
import { useState } from "react";

export interface ProjectItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: ProjectItem[]; // Use the interface here
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        // --- MODIFIED/ADDED FOR BETTER SPACING ---
        "px-4 sm:px-6 lg:px-8", // Horizontal padding for different screen sizes
        "py-8 sm:py-10 md:py-12 lg:py-16", // Responsive vertical padding for the section
        // --- END MODIFICATIONS ---
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full" // p-2 here creates the visual gap between cards
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-500 opacity-50 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  item,
}: {
  className?: string;
  item: ProjectItem; // Use the interface
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white dark:bg-zinc-900 border border-gray-300 dark:border-black/[0.2] relative z-20",
        "group-hover:border-purple-600 shadow-md dark:shadow-xl",
        className
      )}
    >
      <CardImage imageSrc={item.image} altText={item.title} />
      <div className="p-4"> {/* Content padding */}
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn(
        "text-zinc-800 dark:text-zinc-100 font-bold tracking-wide text-xl",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({ imageSrc, altText }: { imageSrc: string, altText: string }) => {
  return (
    <div className="w-full h-48 relative overflow-hidden"> {/* Consistent image height */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};