"use client";
import React from "react";
import { StickyScroll, ContentItem } from "../ui/sticky-scroll-reveal"; // Adjust path
import { motion, Variants } from "framer-motion"; // Import Variants type

// Gradient Text Component
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Animation variant for the title
const titleVariants: Variants = { // Explicitly type with Variants
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Make sure these images exist in public/Images/
// The ContentItem type comes from your sticky-scroll-reveal component
const content: ContentItem[] = [
  {
    title: "Paper Presentation",
    description:
      "Showcase your research findings and innovative ideas through formal presentations. Engage with peers and experts in your field.",
    src: "/Images/e1.jpeg",
  },
  {
    title: "Poster Presentation",
    description:
      "Visually communicate your work and interact directly with attendees during dedicated poster sessions. Perfect for detailed discussions.",
    src: "/Images/e2.jpeg",
  },
  {
    title: "Panel Discussion",
    description:
      "Participate in or listen to insightful discussions led by industry leaders and academics on current trends and future directions.",
    src: "/Images/e3.jpeg",
  },
  {
    title: "Networking & Collaboration",
    description:
      "Connect with fellow researchers, potential collaborators, and industry professionals during structured and informal networking events.",
    src: "/Images/e4.jpeg",
  },
];

export function Events(): JSX.Element {
  return (
    // Adjusted height: Use min-height if you want it to be at least a certain portion of the viewport,
    // or rely on padding and content. Removed h-1/2.
    // `min-h-[80vh]` or `min-h-screen` could be options if you want it to fill more vertical space.
    // For now, letting padding and StickyScroll's height dictate.
    <section className="w-full bg-slate-900 py-16 md:py-24 relative" id="events">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20" // Increased bottom margin
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <GradientText>Event Highlights</GradientText>
      </motion.h2>

      {/*
        The actual scrolling height and behavior (image pinning, text alignment)
        are primarily controlled by the <StickyScroll /> component's internal implementation.
        This wrapper div mainly constrains its width and provides horizontal padding.
      */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}

export default Events;