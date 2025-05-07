"use client"; // Add if any child components use client-side hooks or if this page itself does

import React from "react"; // Import React
import Carousel from "@/components/main/Carousel";
import { Events } from "@/components/main/Events"; // Assuming named export based on previous examples
import Hero from "@/components/main/Hero";
import RegistrationCards from "@/components/main/Registrations"; // Assuming default
import Spon from "@/components/main/Spon";
// import Registrations from "@/components/sub/RCard"; // This seems like a duplicate or alternative, choose one
import { HoverEffect, ProjectItem } from "@/components/ui/card-hover-effect"; // Import ProjectItem type
import Maps from "@/components/main/Maps";
import EventDatesTable from "@/components/main/Tables"; // Assuming default
import Themes from "@/components/main/Themes"; // Assuming default

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

// Data for HoverEffect, now typed with ProjectItem
// Make sure the ProjectItem interface in card-hover-effect.tsx matches this structure
// (especially 'image' vs 'imageSrc')
const projects: ProjectItem[] = [
  {
    image: "/Images/p1.jpeg", // Ensure ProjectItem expects 'image'
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
    title: "Veer Savarkar", // Corrected name
    description: "A multinational technology company.",
    link: "/",
  },
  {
    image: "/Images/p4.jpeg",
    title: "Jethalal Gada", // Corrected name
    description: "A technology company that focuses on social media and virtual reality.",
    link: "/",
  },
  {
    image: "/Images/p5.jpeg",
    title: "Kartavya Singh", // Corrected name
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
  return (
    <>
      <main className="min-h-screen w-full" style={{ backgroundColor: '#e9e5ff' }}>
        {/* pt-[65px] assumes a fixed navbar of 65px height. Adjust if different or no fixed navbar. */}
        <div className="flex flex-col items-center pt-[65px] pb-12 md:pb-20"> {/* Added bottom padding */}
          
          <Carousel />
          <Hero />
          <EventDatesTable />
          <Themes />
          <Events /> {/* Ensure this is the correct casing and import type */}

          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16" id="speaker">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Speakers</GradientText>
            </h1>
            <HoverEffect items={projects} />
          </section>
          
          {/* Maps component can be full width or constrained like other sections */}
          <div className="w-full"> {/* Optional: if Maps handles its own max-width & padding */}
             <Maps />
          </div>


          <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-700" id="registration">
            <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
              <GradientText>Registration</GradientText>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-center md:text-left"> {/* Centered on mobile, left on md+ */}
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