// src/components/main/Spon.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // For title animation (if you add a title)

// Interface for individual sponsor data
interface Sponsor {
  id: number;
  src: string;
  alt: string; // This will be used as the name below the image
  link?: string; // Optional: if you want to link the sponsor logo/name
}

// Define your sponsor images and names
// IMPORTANT: Place these images in your `public` directory (e.g., public/sponsors/logo1.png)
const sponsors: Sponsor[] = [
  { id: 1, src: '/Images/p.jpg', alt: 'Parashar Lake (35 Kms.)' },
  { id: 2, src: '/Images/kullu.jpg', alt: 'Kullu (57 Kms.)' },
  { id: 3, src: '/Images/manali.jpg', alt: 'Manali (94 Kms.)' },
  { id: 4, src: '/Images/mak.jpg', alt: 'Manikaran (79 Kms.)' },
  { id: 5, src: '/Images/bar.jpg', alt: 'Barot Valley (62 Kms.)' },
  { id: 6, src: '/Images/atal.jpg', alt: 'Atal Valley (121 Kms.)' },
  { id: 7, src: '/Images/sol.jpg', alt: 'Solang Valley (107 Kms.)' },
  { id: 8, src: '/Images/d.jpg', alt: 'Dharamshaala (125 Kms.)' },
  { id: 9, src: '/Images/pal.jpg', alt: 'Palampur (91 Kms.)' },
  { id: 10, src: '/Images/jog.jpg', alt: 'Jogini Water Falls (98 Kms.)' },
  { id: 11, src: '/Images/hid.jpg', alt: 'Hidimba Temple (84 Kms.)' },
  { id: 12, src: '/Images/gana.jpg', alt: 'Kheerganga (98 Kms.)' },
];


// Duplicate the array for seamless looping
const duplicatedSponsors: Sponsor[] = [...sponsors, ...sponsors];

// Gradient Text Component (if you add a title like "Our Sponsors")
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Optional: Animation variant for a title section if you add one
const titleSectionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
function Spon(): JSX.Element {
  return (
    // Section container
    // Consider adding a title section here if desired
    // <motion.div variants={titleSectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
    //   <h2 className="text-3xl font-bold mb-8 text-center">
    //     <GradientText>Our Valued Sponsors</GradientText>
    //   </h2>
    // </motion.div>
    <div className="w-full py-12 md:py-16" id="sponsors"> {/* Changed id to "sponsors" */}
      {/* Single Scrolling Reel */}
      <div
        className="group scroller w-full overflow-hidden"
        // data-direction="left" // Or "right", depending on your CSS animation
      >
        <div
          className="flex flex-nowrap w-max animate-scrollLeft group-hover:animate-pause" // Or animate-scrollRight
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div 
              key={`${sponsor.id}-${index}`} 
              className="flex-shrink-0 mx-6 md:mx-10 flex flex-col items-center justify-center text-center"
            >
              <div className="h-24 md:h-32 w-40 md:w-56 mb-2 flex items-center justify-center overflow-hidden"> {/* Container for image */}
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt} // Alt text is important for accessibility
                  height={100} // Adjust as needed for desired logo size
                  width={200}  // Adjust as needed
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <p className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 mt-1 px-2"> {/* Styling for the name */}
                {sponsor.alt} {/* Displaying the alt text as the name */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Spon;