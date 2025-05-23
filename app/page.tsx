// app/page.tsx
import HomeClient from "../components/main/Home-clent"; // Import the new client component
import { ProjectItem } from "../components/ui/card-hover-effect"; // Import type if needed here

// This function would ideally fetch data from an API.
// For demonstration, we'll return the hardcoded projects data.
// This function will run on the server during `next build`.
async function getProjectsData(): Promise<ProjectItem[]> {
  // Simulate an API fetch for projects
  // const res = await fetch('https://api.example.com/projects');
  // if (!res.ok) {
  //   throw new Error('Failed to fetch projects');
  // }
  // const projects = await res.json();
  // return projects;

  // For now, using the hardcoded data:
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
  return projects;
}

// This is now a Server Component
export default async function Page() {
  // This fetch/data retrieval will run on the server during `next build`
  const projectsData = await getProjectsData();
  // You could fetch other data here as well:
  // const otherData = await fetch('https://api.example.com/other').then(res => res.json());

  // Pass the fetched data to the client component
  return <HomeClient projects={projectsData} /* otherData={otherData} */ />;
}