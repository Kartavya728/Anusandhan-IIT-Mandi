// src/components/Spon.tsx
import React from 'react';
import Image from 'next/image';

// Define your sponsor images here
// IMPORTANT: Place these images in your `public` directory (e.g., public/sponsors/logo1.png)
const sponsors = [
  { id: 1, src: '/Images/c3.jpg', alt: 'Sponsor 1 Logo' },
  { id: 2, src: '/Images/c3.jpg', alt: 'Sponsor 2 Logo' },
  { id: 3, src: '/Images/c3.jpg', alt: 'Sponsor 3 Logo' },
  { id: 4, src: '/Images/c3.jpg', alt: 'Sponsor 4 Logo' },
  { id: 5, src: '/Images/c3.jpg', alt: 'Sponsor 5 Logo' },
  { id: 6, src: '/Images/c3.jpg', alt: 'Sponsor 6 Logo' },
  { id: 7, src: '/Images/c3.jpg', alt: 'Sponsor 7 Logo' },
  // Add more sponsors as needed
];

// Duplicate the array for seamless looping
const duplicatedSponsors = [...sponsors, ...sponsors];

function Spon() {
  return (
    <div className="w-full py-8 md:py-12" id="contact"> {/* Optional background */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-violet-400">Our Sponsors</h2>
        <p className="text-gray-600 mt-2">Powering innovation together.</p>
      </div>

      {/* Reel 1 (Scroll Left) */}
      <div
        // group utility allows controlling children state on parent hover
        // scroller class is for the CSS mask (see step 3)
        className="group scroller w-full overflow-hidden"
      >
        <div
          // flex-nowrap is important so items don't wrap
          // group-hover:animate-pause uses the utility (requires Tailwind v3.1+)
          // animate-scrollLeft uses the custom animation from tailwind.config.js
          className="flex flex-nowrap w-max animate-scrollLeft group-hover:animate-pause"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={`left-${sponsor.id}-${index}`} className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                height={60} // Adjust height as needed (e.g., 60px)
                width={150} // Adjust width or keep it flexible based on height
                className="object-contain h-12 md:h-16 w-auto" // control display size
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reel 2 (Scroll Right) - Add some margin-top */}
      <div
        className="group scroller w-full overflow-hidden mt-6 md:mt-8" // Added mt-6
      >
        <div
          // Use animate-scrollRight for opposite direction
          className="flex flex-nowrap w-max animate-scrollRight group-hover:animate-pause"
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={`right-${sponsor.id}-${index}`} className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center">
               <Image
                src={sponsor.src}
                alt={sponsor.alt}
                height={60} // Keep consistent or vary if desired
                width={150}
                className="object-contain h-12 md:h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spon;