"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion"; // Make sure this path is correct
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // --- CHANGE: Animation triggers when 60% is in view ---
      viewport={{ amount: 0.1, once: false }} // Matched Aboutiit's trigger point and re-animation behavior
      // --- CHANGE: Applied same padding structure as Aboutiit's inner container ---
      // Max-width, centering, responsive horizontal & vertical padding
      className="flex flex-col md:flex-row items-center justify-center w-full z-[20] max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12" // Adopted padding values
    >
      {/* Left Side Content */}
      {/* --- CHANGE: Adjusted right padding for spacing --- */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-start mb-10 md:mb-0 md:pr-8 lg:pr-12"> {/* Increased right padding */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center mt-1 w-max"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
          <h1 className="Welcome-text text-[13px] text-gray-700 dark:text-gray-300">
            By IIT Mandi
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white w-auto h-auto"
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
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-full"
        >
         Anusandhan is a fair of multidisciplinary research and innovation of IIT Mandi, which includes Engineering & Technology (Mechanical Engineering, Civil Engineering, Computing and Electrical Engineering, Electronics Engineering, Robotics, IKSMHA, Computer science, and AI&ML), Basic Sciences (Physics, Chemistry, Mathematics, Biology, and Environmental sciences), Medical Science (Healthcare, Mental health, Physiology, and Medicine), Management and Humanities & Social Sciences (Economics, Literature, History, Sociology, Translation Studies, and Psychology) research, that provide participants to present and discuss their ideas among the research community and related experts in their domains. The Fair aims to open a pathway for collaborative research and innovative ideas among the research community at an international level for the welfare of society and sustainable development of resources.
        </motion.p>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        // --- CHANGE: Adjusted left padding for spacing ---
        className="w-full md:w-1/2 h-full flex justify-center items-center md:pl-8 lg:pl-12" // Increased left padding
      >
        <Image
          src="/Images/c3.jpg"
          alt="Anusandhan 3.0 event visual"
          width={650}
          height={650}
          // Kept original styling (rounded, shadow) as per your provided code
          className="object-contain rounded-lg shadow-lg w-full max-w-md md:max-w-full" // Added responsiveness like in Aboutiit
          priority // Keep priority if it's LCP
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;