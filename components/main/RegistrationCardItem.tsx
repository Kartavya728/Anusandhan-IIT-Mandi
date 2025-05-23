"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RegistrationItemData {
  id: string | number;
  title: string;
  registrationLink: string; // Kept for potential future use
  price: string;
}

interface RegistrationCardItemProps {
  item: RegistrationItemData;
  index: number;
}

function RegistrationCardItem({ item, index }: RegistrationCardItemProps) {
  const ref = useRef(null);
  // Using the same useInView settings as before
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-slate-800 rounded-2xl border-2 z-40 shadow-xl overflow-hidden px-4 py-3 flex flex-col sm:flex-row justify-between items-center"
      // Applying the new theme gradient to the border
      style={{
        borderImageSource: 'linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%)',
        borderImageSlice: 1,
        // borderWidth: '2px', // Already handled by border-2 class
        // borderStyle: 'solid', // Already handled by border-2 class
      }}
    >
      {/* Title Section */}
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-0"> {/* Light text color for title */}
          {item.title}
        </h3>
      </div>

      {/* Price Section */}
      <div className="text-base sm:text-lg font-bold text-pink-300 mt-2 sm:mt-0 sm:ml-4"> {/* Light, accented color for price */}
        {item.price}
      </div>
    </motion.li>
  );
}

export default RegistrationCardItem;