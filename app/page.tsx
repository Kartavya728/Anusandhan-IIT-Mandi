
import Carousel from "@/components/main/Carousel";
import Events from "@/components/main/Events";
import Hero from "@/components/main/Hero";
import RegistrationCards from "@/components/main/Registrations";
import Spon from "@/components/main/Spon";
import Registrations from "@/components/sub/RCard";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Maps from "@/components/main/Maps";
import EventDatesTable from "@/components/main/Tables";
import Themes from "@/components/main/Themes";
export default function Home() {
  return (
    <>
    <main className="h-full w-full"> <br/> <br/>
      <div className="flex flex-col items-center">
        <br/> <br/>
      <Carousel/>
        <Hero />
        <Events/>
        
        <div className="max-w-5xl mx-auto px-8" id="speaker">
  <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600   to-blue-400 pt-10 text-center">Speakers
  </h1>
  <HoverEffect items={projects} />
</div>
      </div>
      <div className="max-w-5xl mx-auto px-8 text-black" id="registration">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600   to-blue-400 pt-10 text-center">Registration</h1>
      At least one author of each accepted abstract/full-length paper must register for the submitted work to be presented in the proceedings. Registration fees include hostel accommodation (17th-19th June), food (breakfast, lunch, snacks, conference refreshments and dinner) during conference days (18-19th June), conference gala-dinner, and registration kit:
      <RegistrationCards/>
      </div>

      <Spon/>


      <EventDatesTable/>
      <Maps/>

      <Themes/>
    </main>
    


    </>


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
