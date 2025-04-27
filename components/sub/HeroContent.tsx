"use client";

import React from "react";
// Ensure motion is imported correctly
import { motion } from "framer-motion";
// Ensure your utility functions are correctly imported
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion"; // Make sure this path is correct
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    // Apply whileInView to the main container.
    // Child motion components will inherit the animation trigger.
    <motion.div
      initial="hidden"
      // Use whileInView instead of animate
      whileInView="visible"
      // Add viewport options:
      // - once: true -> Animate only the first time it enters the viewport
      // - amount: 0.5 -> Trigger when 50% of the element is visible (adjust as needed)
      viewport={{ once: true, amount: 0.2 }} // Reduced amount to trigger sooner
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20 mt-40 w-full z-[20]" // Added responsive padding and flex direction
    >
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-start mb-10 md:mb-0 md:mr-10"> {/* Adjusted layout for responsiveness */}
        <motion.div
          variants={slideInFromTop} // This will now trigger based on the parent's whileInView
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center w-max" // Added flex and w-max for better alignment
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" /> {/* Added flex-shrink-0 */}
          <h1 className="Welcome-text text-[13px]">
            About IIT Mandi
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)} // Triggers based on parent
          // Adjusted text size for responsiveness
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-black w-auto h-auto"
        >
          <span>
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Anusandhan 3.0{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)} // Triggers based on parent
          // Changed text color for better contrast, adjusted max-width
          className="text-lg text-gray-600 my-5 max-w-full md:max-w-[600px]"
        >
         Anusandhan is a fair of multidisciplinary research and innovation of IIT Mandi, which includes Engineering & Technology (Mechanical Engineering, Civil Engineering, Computing and Electrical Engineering, Electronics Engineering, Robotics, IKSMHA, Computer science, and AI&ML), Basic Sciences (Physics, Chemistry, Mathematics, Biology, and Environmental sciences), Medical Science (Healthcare, Mental health, Physiology, and Medicine), Management and Humanities & Social Sciences (Economics, Literature, History, Sociology, Translation Studies, and Psychology) research, that provide participants to present and discuss their ideas among the research community and related experts in their domains. The Fair aims to open a pathway for collaborative research and innovative ideas among the research community at an international level for the welfare of society and sustainable development of resources.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)} // Triggers based on parent
          href="#" // Add a placeholder href for accessibility/styling if it's a link
          className="py-2 px-6 button-primary text-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white cursor-pointer rounded-lg max-w-[200px] transition duration-200 ease-in-out" // Improved styling
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)} // Triggers based on parent
        className="w-full md:w-1/2 h-full flex justify-center items-center"
      >
        <Image
          src="/Images/c3.jpg" // Make sure this path is correct relative to your /public folder
          alt="Anusandhan 3.0 Visual representation" // More descriptive alt text
          width={650} // Explicit width
          height={650} // Explicit height
          className="object-contain rounded-lg shadow-lg" // Optional styling
          priority // Consider adding if this image is likely the Largest Contentful Paint element
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;