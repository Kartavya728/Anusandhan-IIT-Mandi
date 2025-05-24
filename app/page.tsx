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
      image: "/Images/bhera2.avif",
      title: "Prof. Laxmidhar Behera",
      description: "Chief Patron(Director,IIT Mandi)",
      link: "/",
    },
    {
      image: "/Images/dean.jpg",
      title: "Dr. Tushar Jain",
      description: "Patron(Dean Students,IIT Mandi)",
      link: "/",
    },
    {
      image: "/Images/reddy.avif",
      title: "Dr. G. Shrikanth Reddy",
      description: "General Chair(Chair-SAP,IIT Mandi)",
      link: "/",
    },
    {
      image: "/Images/r-fa.jpeg.jpg",
      title: "Dr. Sarthak Nag",
      description: "Genral Chair(Faculty Advisor Research Society,IIT Mandi)",
      link: "/",
    },
    {
      image: "/Images/f.jpeg.jpg",
      title: "Dr. Kaushik Halder",
      description: "Faculty Advisor Anusandhan 3.O(Assistant Professor,IIT Mandi)",
      link: "/",
    },
    {
      image: "/Images/santu.jpg",
      title: "Mr. Santu Shit",
      description: "Student Genral Chair(Research Secretary,IIT Mandi)",
      link: "/",
    },
    {
      image: "/Images/s-co.jpeg.jpg",
      title: "Mr. Jeet Bandhu Lahiri",
      description: "Student Genral Chair(SCRI Coordinator,IIT Mandi)",
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