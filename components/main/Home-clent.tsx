// app/home-client.tsx
"use client";

import React, { useState, useEffect } from "react";
import Carousel from "../main/Carousel";
import { Events } from "../main/EventsScroll";
import Hero from "../main/Hero";
import RegistrationCards from "../main/Registrations";
import Spon from "../main/Spon";
import { HoverEffect, ProjectItem } from "../ui/card-hover-effect";
import Maps from "../main/Maps";
import EventDatesTable from "../main/Tables";
import Themes from "../main/Themes";
import AnusandhanLoader from "../main/AnusandhanLoader";

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

// Define the props for HomeClient, including projects
interface HomeClientProps {
  projects: ProjectItem[];
  // You could add other fetched data here if needed
}

// Custom hook to detect media queries (client-side only)
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQueryList.matches);
    handleChange(); // Set initial state

    try {
      mediaQueryList.addEventListener('change', handleChange);
    } catch (e) {
      mediaQueryList.addListener(handleChange); // Fallback
    }

    return () => {
      try {
        mediaQueryList.removeEventListener('change', handleChange);
      } catch (e) {
        mediaQueryList.removeListener(handleChange); // Fallback
      }
    };
  }, [query]);

  return matches;
};

export default function HomeClient({ projects }: HomeClientProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Simulating loading
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AnusandhanLoader />;
  }

  const MobileSpecificWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (isMobile) {
      return <div className="w-full">{children}</div>;
    }
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
          <MobileSpecificWrapper><Carousel /></MobileSpecificWrapper>
          <MobileSpecificWrapper><Hero /></MobileSpecificWrapper>

          {isMobile ? (
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
              <div className="overflow-x-auto rounded-lg shadow">
                <EventDatesTable />
              </div>
            </section>
          ) : (
            <EventDatesTable />
          )}

          <MobileSpecificWrapper><Themes /></MobileSpecificWrapper>
          <MobileSpecificWrapper><Events /></MobileSpecificWrapper>

          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16" id="speaker">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Organising Commitee</GradientText>
            </h1>
            <HoverEffect items={projects} /> {/* Use projects from props */}
          </section>
          


          <div className="w-full  text-slate-700" id="registration">
            <RegistrationCards />
          </div>
                    <div className="w-full">
             <Maps />
          </div>
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Travel Destinatinons</GradientText></h1>
              <Spon/>
          </div>
        </div>
      </main>
    </>
  );
}