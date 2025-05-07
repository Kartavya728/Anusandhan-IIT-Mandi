"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  // slideInFromTop, // Not used
} from "@/utils/motion";
import Image from "next/image";

const Aboutiit = () => {
  return (
    // REVISED: Significantly increased horizontal padding for more empty space.
    // Original: px-4 sm:px-6 lg:px-8
    // Previous Attempt: px-8 sm:px-12 lg:px-16
    // New Drastic Attempt: px-8 sm:px-16 lg:px-24 (or even more if needed for testing)
    // This means:
    // - Default: 32px padding on each side (was 16px)
    // - Small screens (sm): 64px padding on each side (was 24px)
    // - Large screens (lg): 96px padding on each side (was 32px)
    <div className="w-full bg-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 rounded-b-3xl px-8 sm:px-16 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: false }}
        // This inner div remains max-w-screen-xl and mx-auto, so it will center within the new, more padded space.
        className="flex flex-col md:flex-row items-center justify-center w-full z-[20] max-w-screen-xl mx-auto rounded-xl bg-slate-900 px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 shadow-lg shadow-gray-900"
      >
        {/* Image on the Left */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="w-full md:w-1/2 h-full flex justify-center items-center mb-10 md:mb-0 md:pr-8 lg:pr-12"
        >
          <Image
            src="/Images/c2.jpg"
            alt="IIT Mandi Campus Visual representation"
            width={650}
            height={650}
            className="object-contain rounded-lg w-full max-w-md md:max-w-full"
            priority
          />
        </motion.div>

        {/* Text Content on the Right */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center text-start md:pl-8 lg:pl-12">
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
            className="text-base sm:text-lg text-gray-300 max-w-full"
          >
            The Indian Institute of Technology Mandi is one among the eighth newer second generation of IITs. IIT Mandi is a research university now located in Kamand Valley, Mandi city in Mandi district of Himachal Pradesh. IIT Mandi's campus (about 14 km from Mandi) is on the left bank of the Uhl River at Kamand and Salgi villages. Mandi has an average elevation of 1044 meters (3425 feet) and is situated on the banks of Beas. Mandi town falls in the lower most climatic zone of the Himalayas. These regions enjoys a wet-sub temperate climate of the foot hills (450-900 meters) as against the dry-cold alpine climate with snowfall at higher altitudes (2400-4800 meters). Average annual rainfall of Mandi is 1380 mm. The institute became an IIT under The Institutes of Technology (Amendment) Act, 2011, with the intention to expand the reach and to enhance the quality of technical education in the country.
          </motion.p>

          <motion.a
            variants={slideInFromRight(1)}
            href="#"
            className="py-2.5 px-5 sm:py-3 sm:px-6 button-primary text-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white cursor-pointer rounded-lg transition duration-200 ease-in-out self-start"
          >
            Learn More!
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutiit;