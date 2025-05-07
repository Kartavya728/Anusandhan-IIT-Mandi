"use client";
import React, { useRef, ReactNode } from "react"; // Added ReactNode
import { BsCalendarEvent } from "react-icons/bs";
import { motion, useScroll, useTransform, Variants as FramerVariants, MotionValue } from "framer-motion"; // Added types

// Interface for event date items
interface EventDateItem {
  id: number;
  event: string;
  date: string;
  previousDate: string | null; // Can be string or null
}

// Event dates data with type
const eventDates: EventDateItem[] = [
  { id: 1, event: "Last Date of Abstract/ Full-Length Paper Submission", date: "08th June 2024", previousDate: null },
  { id: 2, event: "Last Date of Registration", date: "10th June 2024", previousDate: null },
  { id: 3, event: "Last date of full-length camera-ready paper submission", date: "15th June 2024", previousDate: null },
  { id: 4, event: "Date of Events", date: "18th - 19th June 2024", previousDate: null },
];

// Gradient Text Component (reusable)
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Animation Variants - Explicitly typed
const contentBoxVariants: FramerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }, // Adjusted delay
};

const titleVariants: FramerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tableVariants: FramerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ctaVariants: FramerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 }, // Adjusted initial state
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
};

const EventDatesTable = (): JSX.Element => {
  const boxRef = useRef<HTMLDivElement | null>(null); // Typed ref

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({ // Typed scrollYProgress
    target: boxRef,
    offset: ["start end", "center center"],
  });

  const boxScale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1.75, 1]);
  // Optional: Opacity for the box if you want a very quick fade-in
  // const boxOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.15], [0, 1]);


  return (
    // Page background. Using min-h-screen, padding, and flex to center the box.
    <div
      className="h-screen w-full font-sans py-16 md:py-24 overflow-x-hidden flex items-center justify-center"
      style={{ backgroundColor: '#e9e5ff' }} // Corrected background color application
    >
      <motion.div
        ref={boxRef}
        className="max-w-4xl w-full mx-auto bg-slate-900 rounded-3xl shadow-2xl" // Added w-full for responsiveness
        style={{
          scale: boxScale,
          // opacity: boxOpacity, // Uncomment if using boxOpacity
          transformOrigin: "center center",
        }}
      >
        {/* Inner container for content, manages padding and content animations */}
        <motion.div
          className="p-6 md:p-10 lg:p-12"
          variants={contentBoxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Trigger when a bit of the box is visible
        >
          <motion.div className="text-center mb-12" variants={titleVariants}>
            <h2 className="text-3xl font-bold sm:text-4xl mb-3">
              <GradientText>Important Event Dates</GradientText>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <motion.div className="relative" variants={tableVariants}>
            {/* Decorative corner accents - styled for dark theme */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-600 opacity-40 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-600 opacity-40 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-600 opacity-40 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-600 opacity-40 rounded-br-lg"></div>

            <div className="bg-slate-800 shadow-xl rounded-lg overflow-hidden border border-slate-700 m-2 md:m-4">
              <div className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 py-4 px-6">
                <BsCalendarEvent className="text-white mr-3 text-2xl" />
                <h3 className="text-lg font-semibold text-white">Important Dates</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                        Event
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800 divide-y divide-slate-700">
                    {eventDates.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "bg-slate-800 hover:bg-slate-700/70" : "bg-slate-800/60 hover:bg-slate-700/70"} // Subtle hover
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-100">
                          {item.event}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                          <div className="flex flex-col">
                            <span className="font-medium text-slate-100">{item.date}</span>
                            {item.previousDate && (
                              <span className="text-xs text-slate-400 line-through mt-1">
                                Previously: {item.previousDate}
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-10 text-center" variants={ctaVariants}>
            <p className="text-slate-400 mb-4">
              Please ensure to adhere to these important dates for a smooth participation process.
            </p>
            <a
              href="#registration"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventDatesTable;