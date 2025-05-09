"use client";

import React, { useState, useEffect } from "react"; // Import useState, useEffect
import Carousel from "../components/main/Carousel";
import { Events } from "../components/main/EventsScroll";
import Hero from "../components/main/Hero";
import RegistrationCards from "../components/main/Registrations";
import Spon from "../components/main/Spon";
import { HoverEffect, ProjectItem } from "../components/ui/card-hover-effect";
import Maps from "../components/main/Maps";
import EventDatesTable from "../components/main/Tables";
import Themes from "../components/main/Themes";
import AnusandhanLoader from "../components/main/AnusandhanLoader"; // Import the loader

// Gradient Text Component (define or import if not globally available)
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

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

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., for fetching data, loading assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Adjust time as needed (e.g., 3.5 seconds)

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  if (isLoading) {
    return <AnusandhanLoader />;
  }

  return (
    <>
      <main className="min-h-screen w-full" style={{ backgroundColor: '#e9e5ff' }}>
        <div className="flex flex-col items-center pt-[65px] pb-12 md:pb-20">
          
          <Carousel />
          <Hero />
          <EventDatesTable />
          <Themes />
          <Events/>

          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16" id="speaker">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Speakers</GradientText>
            </h1>
            <HoverEffect items={projects} />
          </section>
          
          <div className="w-full">
             <Maps />
          </div>

          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-700" id="registration">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Registration</GradientText>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              At least one author of each accepted abstract/full-length paper must register for the submitted work to be presented in the proceedings. Registration fees include hostel accommodation (17th-19th June), food (breakfast, lunch, snacks, conference refreshments and dinner) during conference days (18-19th June), conference gala-dinner, and registration kit:
            </p>
            <RegistrationCards />
          </section>

          <Spon />
        </div>
      </main>
    </>
  );
}