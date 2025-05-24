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
    <div className="w-full py-12 md:py-16" id="sponsors">
      {/* Optional Title Section Example
      <motion.div 
        variants={titleSectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 text-center" // Added margin-bottom for spacing if title is used
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <GradientText>Places to Visit Nearby</GradientText>
        </h2>
      </motion.div>
      */}
      <div
        className="group scroller w-full overflow-hidden"
      >
        <div
          className="flex flex-nowrap w-max animate-scrollLeft group-hover:animate-pause"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              // MODIFIED: Reduced horizontal margins
              className="flex-shrink-0 mx-1.5 md:mx-2.5 flex flex-col items-center justify-center text-center"
            >
              <div className="h-24 md:h-32 w-40 md:w-56 mb-2 flex items-center justify-center overflow-hidden rounded-lg shadow-md"> {/* Added rounded-lg and shadow-md for better visual separation of images */}
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  height={100}
                  width={200}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <p className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 mt-1 px-2">
                {sponsor.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Spon;