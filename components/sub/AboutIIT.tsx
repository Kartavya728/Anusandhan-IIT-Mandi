"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop, // Note: slideInFromTop is imported but not used in this component
} from "@/utils/motion"; // Make sure this path is correct
import Image from "next/image";

const Aboutiit = () => {
  return (
    // Outer div for full-width background and vertical margin/padding
    // Removed horizontal padding here, letting the inner container handle it
    <div className="w-full bg-black py-4 sm:py-8 rounded-b-3xl">

      <motion.div
        initial="hidden"
        whileInView="visible"
        // --- CHANGE: Animation triggers when 60% is in view ---
        viewport={{ amount: 0.3, once: false }} // once: false makes it re-animate on scroll if needed, remove if you want it only once
        // Inner container: Max width, centered, rounded corners, content padding, flex layout
        // --- CHANGE: Adjusted padding for different screen sizes ---
        className="flex flex-col md:flex-row items-center justify-center w-full z-[20] max-w-screen-xl mx-auto rounded-xl bg-black px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 shadow-lg shadow-gray-900" // Increased padding progressively
      >
        {/* Image on the Left */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          // --- CHANGE: Adjusted padding/margin for spacing ---
          className="w-full md:w-1/2 h-full flex justify-center items-center mb-10 md:mb-0 md:pr-8 lg:pr-12" // Increased right padding on medium/large screens
        >
          <Image
            src="/Images/c2.jpg" // Ensure this path is correct
            alt="IIT Mandi Campus Visual representation"
            width={650}
            height={650}
            className="object-contain rounded-lg w-full max-w-md md:max-w-full" // Added max-width for smaller screens if needed, ensure responsiveness
            priority
          />
        </motion.div>

        {/* Text Content on the Right */}
        {/* --- CHANGE: Adjusted padding/margin for spacing --- */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-start md:pl-8 lg:pl-12"> {/* Increased left padding on medium/large screens */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-white w-auto h-auto"
          >
            <span>
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                IIT Mandi{" "}
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromRight(0.8)}
            className="text-lg text-gray-300 max-w-full" // Light gray text for readability
          >
            The Indian Institute of Technology Mandi is one among the eighth newer second generation of IITs. IIT Mandi is a research university now located in Kamand Valley, Mandi city in Mandi district of Himachal Pradesh. IIT Mandi's campus (about 14 km from Mandi) is on the left bank of the Uhl River at Kamand and Salgi villages. Mandi has an average elevation of 1044 meters (3425 feet) and is situated on the banks of Beas. Mandi town falls in the lower most climatic zone of the Himalayas. These regions enjoys a wet-sub temperate climate of the foot hills (450-900 meters) as against the dry-cold alpine climate with snowfall at higher altitudes (2400-4800 meters). Average annual rainfall of Mandi is 1380 mm. The institute became an IIT under The Institutes of Technology (Amendment) Act, 2011, with the intention to expand the reach and to enhance the quality of technical education in the country.
          </motion.p>

          <motion.a
            variants={slideInFromRight(1)}
            href="#" // Add a real link
            className="py-2 px-6 button-primary text-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white cursor-pointer rounded-lg max-w-[200px] transition duration-200 ease-in-out"
          >
            Learn More!
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutiit;