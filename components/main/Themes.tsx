"use client";
import React, { useState, useRef, ReactNode } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, Variants as FramerVariants, MotionValue } from 'framer-motion';

// Interface for individual theme data
interface ThemeItem {
  id: string;
  title: string;
  subThemes: string[];
  isSingleColumn?: boolean;
}

// Data for themes with type (kept from previous correct version)
const themesData: ThemeItem[] = [
  {
    id: 'engineering',
    title: 'A: Engineering & Technologies',
    subThemes: [
      "Industry 4.0 and Smart Manufacturing", "Advancement in materials and their processing", "Computer-aided manufacturing, robotics, and automation", "Multiphase flows", "Combustion and Radiation", "Alternate clean energy sources", "Design and analysis of mechanical components", "Biomechanics and Bioengineering",
      "Sustainable Infrastructure Development", "Urban Planning and Smart Cities", "Resilient structures", "Artificial Intelligence for Sustainability", "Power system and power electronics & drives", "Electric Transportation", "Communications & Signal Processing","Machine Learning and Artificial Intelligence"
    ],
  },
  {
    id: 'sciences',
    title: 'B: Fundamental Sciences',
    subThemes: [
      "Bioinformatics and Sustainable Agriculture", "Waste Management and Sustainability", "Nanomaterials & Nanocomposites", "Biopolymers & Biomaterials", "Advanced Functional Materials", "Theoretical & Computational Chemistry", "Photocatalysis & Electrocatalysis",
      "Condensed matter physics", "Algebra, Analysis and Topology", "Statistics, Optimization, and Data Analytics", "Systems Biology and Multi-OMICS", "Nanobiotechnology", "Molecular and Cellular Biology", "Bioinspired materials and simulation",
    ],
  },
  {
    id: 'humanities',
    title: 'C: Humanities & Social Sciences and Management',
    isSingleColumn: true,
    subThemes: [
      "AI and ML approach in Urban studies", "Environmental economics and agriculture", "Technology intervention in Himalayan cultures and conservation", "Sustainable cities and communities", "Climate Change Impacts on Agriculture and Food Security", "Carbon Pricing and Emissions Trading Schemes",
    ],
  },
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

// Animation Variants - Explicitly typed (no changes to animation logic)
const titleVariants: FramerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const paragraphVariants: FramerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
};

const accordionListVariants: FramerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.7,
    },
  },
};

const accordionItemVariants: FramerVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "circOut" } },
  exit: { opacity: 0, x: 80, transition: { duration: 0.3, ease: "circIn" } }
};


export default function Themes(): JSX.Element {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundScale: MotionValue<number> = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1.8, 1, 1, 1.8]);
  const backgroundOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const toggleTheme = (themeId: string) => {
    setExpandedTheme(expandedTheme === themeId ? null : themeId);
  };

  const viewportConfig = { once: false, amount: 0.1 };

  return (
    // Page background - using inline style for the hex color, keeping w-screen h-screen as instructed
    <div
      ref={containerRef}
      className="w-screen h-screen font-sans py-12 md:py-20 overflow-x-hidden"
      style={{ backgroundColor: '#e9e5ff' }} // YOUR ORIGINAL PAGE BACKGROUND
    >
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background Element - Color remains as YOUR ORIGINAL */}
        <motion.div
          className="absolute inset-0 bg-[#e9e5ff] rounded-3xl z-0" // YOUR ORIGINAL ANIMATED BACKGROUND COLOR
          style={{
            scale: backgroundScale,
            opacity: backgroundOpacity,
            transformOrigin: "center center",
          }}
        />

        {/* Main Content with its own animations, sitting above the animated background */}
        <motion.div
          className="relative z-10 py-8 md:py-12 max-w-6xl w-full"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={viewportConfig}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-center" // Removed text-purple-700
            variants={titleVariants}
          >
            <GradientText>Research Themes</GradientText> {/* Applied GradientText */}
          </motion.h2>

          <motion.p
            // Text color for paragraph - needs to be readable against the '#e9e5ff' when animated bg is transparent
            // and also against the accordion items if they are light.
            // Using a darker text color here, assuming the primary content area background (accordions) is light.
            className="text-gray-700 mb-8 text-lg leading-relaxed max-w-3xl mx-auto text-center" // Kept text-gray-700 as per your original for this paragraph
            variants={paragraphVariants}
          >
            We are inviting participants for paper presentations, poster proposals and interactive sessions addressing one of the following themes:
          </motion.p>

          <motion.h3
            className="text-3xl font-bold mb-10 text-center" // Removed text-purple-600
            variants={titleVariants}
            viewport={{ ...viewportConfig, amount: 0.2 }}
          >
            <GradientText>Theme: Interdisciplinary Research: Goals for Sustainable Future</GradientText> {/* Applied GradientText */}
          </motion.h3>

          <motion.div
            className="space-y-8 max-w-4xl mx-auto"
            variants={accordionListVariants}
            viewport={{ ...viewportConfig, amount: 0.1 }}
          >
            {themesData.map((theme) => (
              <motion.div
                key={theme.id}
                variants={accordionItemVariants}
                // Accordion item styling - KEEPING YOUR ORIGINAL BACKGROUNDS
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-purple-200 hover:shadow-purple-400/50 bg-purple-50" // YOUR ORIGINAL ACCORDION ITEM BG
              >
                <button
                  onClick={() => toggleTheme(theme.id)}
                  // Accordion button styling - KEEPING YOUR ORIGINAL BACKGROUNDS
                  className="w-full flex justify-between items-center p-5 md:p-6 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75" // YOUR ORIGINAL BUTTON BG & TEXT
                >
                  <h3 className="text-xl font-semibold">{theme.title}</h3> {/* Text color is text-purple-700 from parent button */}
                  <ChevronDown
                    className={`transform transition-transform duration-300 text-purple-500 ${expandedTheme === theme.id ? 'rotate-180' : ''}`} // YOUR ORIGINAL ICON COLOR
                    size={28}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedTheme === theme.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 bg-white"> {/* YOUR ORIGINAL ACCORDION CONTENT BG */}
                    <div className={`${theme.isSingleColumn ? 'block' : 'grid md:grid-cols-2'} gap-x-8 gap-y-4`}>
                      {theme.isSingleColumn ? (
                        <ul className="space-y-3">
                          {theme.subThemes.map((subTheme, index) => (
                            <li key={index} className="flex items-start">
                              <ArrowRight size={20} className="mt-0.5 mr-3 text-purple-600 flex-shrink-0" /> {/* YOUR ORIGINAL ICON COLOR */}
                              <span className="text-gray-800">{subTheme}</span> {/* YOUR ORIGINAL TEXT COLOR */}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>
                          <ul className="space-y-3">
                            {theme.subThemes.slice(0, Math.ceil(theme.subThemes.length / 2)).map((subTheme, index) => (
                              <li key={`col1-${index}`} className="flex items-start">
                                <ArrowRight size={20} className="mt-0.5 mr-3 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-800">{subTheme}</span>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-3">
                            {theme.subThemes.slice(Math.ceil(theme.subThemes.length / 2)).map((subTheme, index) => (
                              <li key={`col2-${index}`} className="flex items-start">
                                <ArrowRight size={20} className="mt-0.5 mr-3 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-800">{subTheme}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}