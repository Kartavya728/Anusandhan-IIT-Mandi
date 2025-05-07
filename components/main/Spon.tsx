// src/components/main/Spon.tsx (or your actual path)
"use client"; // Add if client-side interactions/hooks are used, or if animations require it.

import React from 'react'; // React import
import Image from 'next/image';
import { motion } from 'framer-motion'; // For title animation

// Interface for individual sponsor data
interface Sponsor {
  id: number;
  src: string;
  alt: string;
}

// Define your sponsor images here
// IMPORTANT: Place these images in your `public` directory (e.g., public/sponsors/logo1.png)
const sponsors: Sponsor[] = [
  { id: 1, src: '/Images/c3.jpg', alt: 'Sponsor 1 Logo' },
  { id: 2, src: '/Images/c3.jpg', alt: 'Sponsor 2 Logo' }, // Using same image for example
  { id: 3, src: '/Images/c3.jpg', alt: 'Sponsor 3 Logo' },
  { id: 4, src: '/Images/c3.jpg', alt: 'Sponsor 4 Logo' },
  { id: 5, src: '/Images/c3.jpg', alt: 'Sponsor 5 Logo' },
  { id: 6, src: '/Images/c3.jpg', alt: 'Sponsor 6 Logo' },
  { id: 7, src: '/Images/c3.jpg', alt: 'Sponsor 7 Logo' },
  // Add more sponsors as needed
];

// Duplicate the array for seamless looping
const duplicatedSponsors: Sponsor[] = [...sponsors, ...sponsors];

// Gradient Text Component (define or import if not globally available)
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Animation variant for the title section
const titleSectionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


function Spon(): JSX.Element {
  return (
    // Section container: Assuming this sits on a light page background (e.g., #e9e5ff)
    // If this section itself needs a dark background like bg-slate-900, apply it here.
    // For now, assuming transparent background to inherit page background.
    <div className="w-full py-12 md:py-20" id="contact">
      <motion.div
        className="text-center mb-10 md:mb-12"
        variants={titleSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className='text-3xl sm:text-4xl font-bold text-center'> {/* Removed inline text color */}
          <GradientText>Our Sponsors</GradientText>
        </h1>
        <p className="text-slate-600 mt-3 text-lg"> {/* Changed text-gray-600 to text-slate-600 for consistency */}
          Powering innovation together.
        </p>
      </motion.div>

      {/* Reel 1 (Scroll Left) */}
      <div
        className="group scroller w-full overflow-hidden"
        // Add data-direction attribute if your CSS animation relies on it
        // data-direction="left"
      >
        <div
          className="flex flex-nowrap w-max animate-scrollLeft group-hover:animate-pause"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={`left-${sponsor.id}-${index}`} className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center h-28 md:h-36"> {/* Added fixed height to container */}
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                // It's better to provide layout="intrinsic" or "fixed" and actual dimensions,
                // or "fill" with a sized parent if aspect ratio is unknown or varies.
                // For logos, often intrinsic or fixed dimensions work well.
                // Using width/height props will define the intrinsic size.
                height={100} // Intrinsic height
                width={250}  // Intrinsic width (adjust based on typical logo aspect ratios)
                className="object-contain max-h-full max-w-full" // Ensure it fits within the parent's height and its own intrinsic width
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reel 2 (Scroll Right) - Add some margin-top */}
      <div
        className="group scroller w-full overflow-hidden mt-6 md:mt-10"
        // data-direction="right"
      >
        <div
          className="flex flex-nowrap w-max animate-scrollRight group-hover:animate-pause"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={`right-${sponsor.id}-${index}`} className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center h-28 md:h-36"> {/* Added fixed height */}
               <Image
                src={sponsor.src}
                alt={sponsor.alt}
                height={100}
                width={250}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spon;