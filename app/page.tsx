import Carousel from "@/components/main/Carousel";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";

import Spon from "@/components/main/Spon";
import Registrations from "@/components/sub/RCard";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {
  return (
    <main className="h-full w-full"> <br/> <br/>
      <div className="flex flex-col items-center">
        <br/> <br/>
      <Carousel/>
        <Hero />
        <Projects />
        
        <div className="max-w-5xl mx-auto px-8" id="speaker">
  <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
    Speakers
  </h1>
  <HoverEffect items={projects} />
</div>

      </div>
      <div className="relative z-10">
  <Registrations />
</div>

      
      <Spon/>

      
    </main>
  );
}
const projects = [
  {
    image: "/Images/c3.jpg", // <-- changed imageSrc to image
    title: "Jobidon kahn",
    description: "A technology company that builds eco.",
    link: "/",
  },
  {
    image: "/Images/c7.jpg",
    title: "Jeff Bezos",
    description: "A streaming service that offers a wide variety of movies and shows.",
    link: "/",
  },
  {
    image: "/Images/c6.jpg",
    title: "veer Savarkar",
    description: "A multinational technology company.",
    link: "/",
  },
  {
    image: "/Images/c1.jpg",
    title: "jethala gada",
    description: "A technology company that focuses on social media and virtual reality.",
    link: "/",
  },
  {
    image: "/Images/c2.jpg",
    title: "Kartavya singh",
    description: "A multinational technology company focusing on e-commerce and AI.",
    link: "/",
  },
  {
    image: "/Images/c4.jpg",
    title: "Dr. Bhera",
    description: "A multinational technology company offering software and related services.",
    link: "/",
  },
];
