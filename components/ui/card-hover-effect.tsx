"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image"; // Import the Image component from Next.js
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
     // Add image URL to each item
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
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

        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  item, // Receive the whole item object
}: {
  className?: string;
  item: {
    image: string;
    title: string;
    description: string;
    link: string; // link isn't used here but good practice to type it if passed
  };
}) => {
  return (
    // Apply overall card styling here
    <div
      className={cn(
        // Base styles similar to the reference, keeping original rounded corners
        "rounded-2xl h-full w-full overflow-hidden bg-white dark:bg-zinc-900 border border-gray-300 dark:border-black/[0.2] relative z-20",
        // Keep the group-hover effect for the border
        "group-hover:border-purple-600 shadow-md dark:shadow-xl", // Added shadow
        className
      )}
    >
      {/* Image Component takes the top part */}
      <CardImage imageSrc={item.image} altText={item.title} />

      {/* Content Section below the image */}
      <div className="p-4"> {/* Padding applied only to the content area */}
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </div>
    </div>
  );
};

// Updated CardTitle
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    // Styles closer to reference: larger text, not centered, less margin
    <h4 className={cn(
        "text-zinc-800 dark:text-zinc-100 font-bold tracking-wide text-xl", // Adjusted size and color
        className
      )}
    >
      {children}
    </h4>
  );
};

// Updated CardDescription
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
        // Styles closer to reference: smaller top margin, standard text color
        "mt-2 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm", // Reduced margin-top, adjusted color
        className
      )}
    >
      {children}
    </p>
  );
};

// Updated CardImage to use fill and cover
export const CardImage = ({ imageSrc, altText }: { imageSrc: string, altText: string }) => {
  return (
    // Container with fixed height for the image
    <div className="w-full h-48 relative overflow-hidden"> {/* Adjust h-48 if needed */}
      <Image
        src={imageSrc}
        alt={altText} // Use item title for better alt text
        fill // Use fill to cover the container
        className="object-cover" // Ensure the image covers the area, cropping if necessary
        // Optional: Add sizes for optimization
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};