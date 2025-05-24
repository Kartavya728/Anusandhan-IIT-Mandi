"use client";
import React, { useRef, ReactNode } from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { motion, useScroll, useTransform, Variants as FramerVariants, MotionValue } from "framer-motion";

// Interface for event date items
interface EventDateItem {
  id: number;
  event: string;
  date: string;
  previousDate: string | null;
}

// Event dates data
const eventDates: EventDateItem[] = [
  { id: 1, event: "Last date of Abstract Submission", date: "5th June, 2025", previousDate: null },
  { id: 2, event: "Notification of acceptance", date: "10th June, 2025", previousDate: null },
  { id: 3, event: "Last date of full-length camera-ready publication", date: "20th June, 2025", previousDate: null },
  { id: 4, event: "Date of event", date: "18th-19th June, 2025", previousDate: null },
];

// Gradient Text Component
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Animation Variants
const contentBoxVariants: FramerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
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
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
};

const EventDatesTable = (): JSX.Element => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: boxRef,
    offset: ["start end", "center center"],
  });

  const boxScale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1.75, 1]);

  return (
    <div
      className="min-h-screen z-10 w-full font-sans px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-x-hidden"
      style={{ backgroundColor: '#e9e5ff' }}
    >
      <motion.div
        ref={boxRef}
        className="max-w-4xl w-full mx-auto bg-slate-900 rounded-3xl shadow-2xl"
        style={{
          scale: boxScale,
          transformOrigin: "center center",
        }}
      >
        <motion.div
          className="p-6 sm:p-8 md:p-10 lg:p-12"
          variants={contentBoxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div className="text-center mb-8 sm:mb-10 md:mb-12" variants={titleVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
              <GradientText>Important Event Dates</GradientText>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <motion.div className="relative" variants={tableVariants}>
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-600 opacity-40 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-600 opacity-40 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-600 opacity-40 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-600 opacity-40 rounded-br-lg"></div>

            <div className="bg-slate-800 shadow-xl rounded-lg overflow-hidden border border-slate-700 m-2 sm:m-3 md:m-4">
              <div className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 py-3 px-4 sm:py-4 sm:px-6">
                <BsCalendarEvent className="text-white mr-2 sm:mr-3 text-xl sm:text-2xl" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Important Dates</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th scope="col" className="px-4 py-3 sm:px-6 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                        Event
                      </th>
                      <th scope="col" className="px-4 py-3 sm:px-6 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800 divide-y divide-slate-700">
                    {eventDates.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "bg-slate-800 hover:bg-slate-700/70" : "bg-slate-800/60 hover:bg-slate-700/70"}
                      >
                        <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-medium text-slate-100">
                          {item.event}
                        </td>
                        <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm text-slate-300">
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

          <motion.div className="mt-8 sm:mt-10 md:mt-12 text-center" variants={ctaVariants}>
            <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6">
              Please ensure to adhere to these important dates for a smooth participation process.
            </p>
            {/* MODIFIED: Wrapper div for buttons with flex properties */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="https://docs.google.com/document/d/1E5Y_Ug-ZfCeXrS2IHQi7vn5-kJX9n9ok/edit"
                className="inline-flex items-center px-10 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Final Schedule
              </a>
              <a
                href="https://forms.gle/EadMwK1BFwd6a2gq6"
                // MODIFIED: Removed ml-8 as gap is now used in the parent div
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Submit Your Abstract
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventDatesTable;