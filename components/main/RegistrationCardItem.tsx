"use client"; // If this component is in its own file

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// You might want to move this interface to a shared types file if used elsewhere
interface RegistrationItemData {
  id: string | number;
  title: string;
  registrationLink: string;
  price: string;
}

interface RegistrationCardItemProps {
  item: RegistrationItemData;
  index: number; // For the animation delay
}

function RegistrationCardItem({ item, index }: RegistrationCardItemProps) {
  const ref = useRef(null);
  // Each RegistrationCardItem now correctly has its own ref and useInView call
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.li
      ref={ref} // Assign the ref to the motion component
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl border-2 z-40 shadow-lg overflow-hidden p-6 flex flex-col sm:flex-row justify-between items-center"
      style={{
        borderImage: "linear-gradient(to right, #7C3AED, #60A5FA) 1",
      }}
    >
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
          {item.title}
        </h3>
        <p className="text-base font-medium text-red-600">{item.price}</p>
      </div>

      <motion.a
        href={item.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-0 sm:ml-6 px-6 py-2 z-50 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-400 hover:from-purple-700 hover:to-blue-500 transition-all shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register
      </motion.a>
    </motion.li>
  );
}