"use client";
import React from "react";
import { StickyScroll, ContentItem } from "./Scroll";

import { motion, Variants } from "framer-motion";

// Gradient Text Component (Unchanged)
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Animation variant for the t
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Content data (Unchanged)
const content: ContentItem[] = [
  {
    title: "Paper Presentation",
    description:
      "Showcase your research findings and innovative ideas through formal presentations. Engage with peers and experts in your field.",
    src: "/Images/paper.jpg",
  },
  {
    title: "Poster Presentation",
    description:
      "Visually communicate your work and interact directly with attendees during dedicated poster sessions. Perfect for detailed discussions.",
    src: "/Images/poster.jpg",
  },
  {
    title: "Panel Discussion",
    description:
      "Participate in or listen to insightful discussions led by industry leaders and academics on current trends and future directions.",
    src: "/Images/panel.jpg",
  },
  {
    title: "Networking & Collaboration",
    description:
      "Connect with fellow researchers, potential collaborators, and industry professionals during structured and informal networking events.",
    src: "/Images/network.jpg",
  },
];

export function Events(): JSX.Element {
  return (
    // MODIFIED: Responsive vertical padding for the section
    <section className="w-full bg-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 relative" id="events">
      <motion.h2
        // MODIFIED: Responsive text size and bottom margin for the title
        className="text-2xl sm:text-3xl lg:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <GradientText>Event Highlights</GradientText>
      </motion.h2>

      {/* This container is well-styled for responsiveness, no changes needed */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}

export default Events;