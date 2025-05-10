"use client";

import React, { useState, useEffect } from "react";
import Carousel from "../components/main/Carousel";
import { Events } from "../components/main/EventsScroll";
import Hero from "../components/main/Hero";
import RegistrationCards from "../components/main/Registrations";
import Spon from "../components/main/Spon";
import { HoverEffect, ProjectItem } from "../components/ui/card-hover-effect";
import Maps from "../components/main/Maps";
import EventDatesTable from "../components/main/Tables";
import Themes from "../components/main/Themes";
import AnusandhanLoader from "../components/main/AnusandhanLoader";

// Gradient Text Component (as provided)
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Projects data (as provided)
const projects: ProjectItem[] = [
  {
    image: "/Images/p1.jpeg",
    title: "Jobidon kahn",
    description: "A technology company that builds eco.",
    link: "/",
  },
  {
    image: "/Images/p2.jpeg",
    title: "Jeff Bezos",
    description: "A streaming service that offers a wide variety of movies and shows.",
    link: "/",
  },
  {
    image: "/Images/p3.jpeg",
    title: "Veer Savarkar",
    description: "A multinational technology company.",
    link: "/",
  },
  {
    image: "/Images/p4.jpeg",
    title: "Jethalal Gada",
    description: "A technology company that focuses on social media and virtual reality.",
    link: "/",
  },
  {
    image: "/Images/p5.jpeg",
    title: "Kartavya Singh",
    description: "A multinational technology company focusing on e-commerce and AI.",
    link: "/",
  },
  {
    image: "/Images/p6.jpeg",
    title: "Dr. Bhera",
    description: "A multinational technology company offering software and related services.",
    link: "/",
  },
];

// Custom hook to detect media queries (client-side only)
const useMediaQuery = (query: string): boolean => {
  // Initialize to false to ensure server-rendered output matches non-mobile (desktop) view,
  // preventing hydration mismatches. useEffect will correct this on the client.
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // This effect runs only on the client
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQueryList.matches);

    // Set the initial state correctly on the client
    handleChange();

    // Listen for changes
    try {
      mediaQueryList.addEventListener('change', handleChange);
    } catch (e) {
      // Fallback for older browsers (e.g., Safari < 14)
      mediaQueryList.addListener(handleChange);
    }

    // Cleanup listener on component unmount
    return () => {
      try {
        mediaQueryList.removeEventListener('change', handleChange);
      } catch (e) {
        // Fallback for older browsers
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]); // Re-run effect if query changes

  return matches;
};


export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  // Determine if the view is mobile.
  // Tailwind's 'md' breakpoint is 768px. Mobile is typically < 768px.
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AnusandhanLoader />;
  }

  // Helper component for conditionally wrapping direct children with a div.w-full on mobile
  // This captures 'isMobile' from the Home component's scope.
  const MobileSpecificWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (isMobile) {
      return <div className="w-full">{children}</div>;
    }
    // On non-mobile, render children directly without an extra wrapper
    return <>{children}</>;
  };

  return (
    <>
      <main
        className={`min-h-screen w-full ${isMobile ? 'overflow-x-hidden' : ''}`}
        style={{ backgroundColor: '#e9e5ff' }}
      >
        <div
          className={`flex flex-col items-center pt-[65px] pb-12 md:pb-20 ${isMobile ? 'w-full' : ''}`}
        >
          {/* Components that get a w-full wrapper only on mobile */}
          <MobileSpecificWrapper><Carousel /></MobileSpecificWrapper>
          <MobileSpecificWrapper><Hero /></MobileSpecificWrapper>

          {/* EventDatesTable: Special layout for mobile, direct rendering for others */}
          {isMobile ? (
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
              {/* Optional title for this section, as in your "fixed" code example */}
              {/* <h2 className="text-2xl sm:text-3xl font-bold pb-4 md:pb-6 text-center"><GradientText>Event Schedule</GradientText></h2> */}
              <div className="overflow-x-auto rounded-lg shadow"> {/* This div allows the table inside to scroll horizontally */}
                <EventDatesTable />
              </div>
            </section>
          ) : (
            <EventDatesTable /> // Rendered directly on non-mobile views
          )}

          <MobileSpecificWrapper><Themes /></MobileSpecificWrapper>
          <MobileSpecificWrapper><Events /></MobileSpecificWrapper>

          {/* Speakers Section: Structure is identical in both mobile and non-mobile layouts provided */}
          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16" id="speaker">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Speakers</GradientText>
            </h1>
            <HoverEffect items={projects} />
          </section>
          
          {/* Maps Section: The <div className="w-full"> wrapper is present in both mobile and non-mobile versions from your examples */}
          <div className="w-full">
             <Maps />
          </div>

          {/* Registration Section: Structure is identical in both mobile and non-mobile layouts provided */}
          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-700" id="registration">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Registration</GradientText>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              At least one author of each accepted abstract/full-length paper must register for the submitted work to be presented in the proceedings. Registration fees include hostel accommodation (17th-19th June), food (breakfast, lunch, snacks, conference refreshments and dinner) during conference days (18-19th June), conference gala-dinner, and registration kit:
            </p>
            <RegistrationCards />
          </section>

          <MobileSpecificWrapper><Spon /></MobileSpecificWrapper>
        </div>
      </main>
    </>
  );
}