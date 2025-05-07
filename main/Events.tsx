"use client";
import React from "react";
import { StickyScroll, ContentItem } from "../ui/sticky-scroll-reveal"; // Adjust path

// Make sure these images exist in public/Images/
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

export function Events() {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20" id="events">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-16">
        Event Highlights
      </h2>
      <StickyScroll content={content} />
    </section>
  );
}

export default Events;