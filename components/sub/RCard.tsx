"use client"; // If needed in your setup

import React from "react";

// Define the expected props for the Card component
interface CardProps {
  index: number; // For animation delay stagger
  src: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

// Base delay for stagger effect (in seconds)
const staggerDelay = 0.05;

export function RCard({
  index,
  src,
  title,
  description,
  ctaText,
  ctaLink,
}: CardProps) {
  return (
    // List item: handles animation, hover context (group), base styling
    <li
      className="group list-none rounded-xl bg-white dark:bg-neutral-900 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md opacity-0 animate-fadeInSlideUp" // Base styles, group, transition, INITIAL opacity-0, apply animation class
      // Apply animation delay inline for staggering effect
      style={{ animationDelay: `${index * staggerDelay}s` }}
    >
      {/* Anchor tag wraps ALL content, making the whole card clickable */}
      {/* It receives padding and uses flexbox to arrange its children */}
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        // Block level, padding, no underline, pointer cursor
        // Add transform classes for hover effect here, reacting to parent hover
        className="block p-4 no-underline cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-[1.02] group-hover:-translate-y-1" // Added hover scale/translate
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Part: Image + Text */}
          <div className="flex flex-row items-center gap-4 w-full md:w-auto">
            <img
              src={src}
              alt={title} // Use title for alt text
              width={60} // Explicit width
              height={60} // Explicit height
              className="h-16 w-16 rounded-lg object-cover flex-shrink-0" // Fixed size, prevent shrinking
            />
            {/* Text container */}
            <div className="flex-grow min-w-0"> {/* Allow text to grow but wrap */}
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-left truncate"> {/* Prevent extremely long titles from breaking layout */}
                {title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
                {description}
              </p>
            </div>
          </div>

          {/* Right Part: "Button" (visual cue) */}
          <div
            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 mt-4 md:mt-0 transition-colors duration-200 ease-in-out group-hover:bg-green-500 group-hover:text-white flex-shrink-0 whitespace-nowrap" // Styles, transition, hover effect via group, prevent shrinking/wrapping
          >
            {ctaText}
          </div>
        </div>
      </a>
    </li>
  );
}
export default RCard; // Export the component for use in other files