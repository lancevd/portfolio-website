import { useState } from "react";
import ProjectCard from "../components/Portfolio/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import BannerLayout from "../components/Common/BannerLayout";

let projects = [
  {
    name: "Lost and Found",
    image: "/images/lost-n-found.png",
    description:
      "Lost N Found is a community for University students to connect with other students and recover missing items.",
    link: "https://lost-and-found-five.vercel.app",
    category: "fullstack",
    skills: ["JavaScript", "TypeScript", "Next.js", "Express.js", "Node.js", "MongoDB"],
  },
  {
    name: "Designer's Portfolio",
    image: "/images/emmy.png",
    description: "A porfolio website for a senior product designer.",
    link: "https://emmanuel-designs.vercel.app/",
    category: "frontend development",
    skills: ["JavaScript", "TypeScript", "Next.js"],
  },
  {
    name: "KedvisMart",
    image: "/images/kedvismart.png",
    description:
      "KedvisMart is an AI-assited ecommerce platform, where you can perform operations with voice commands to make accessibility easier",
    link: "https://kedvismart.vercel.app/",
    category: "frontend development",
    skills: ["JavaScript", "React", "Next.js", "REST API", "AI"],
  },
  {
    name: "Chatter App",
    image: "/images/chatter.png",
    description:
      "Chatter is a mini blogging app, where you can create contents, interacts with posts, drop comments, and meet new people",
    link: "https://chatter-winner.vercel.app/",
    category: "fullstack",
    skills: ["TypeScript", "React", "Firebase"],
  },
  {
    name: "Youtube Clone",
    image: "/images/youtube.png",
    description:
      "A youtube clone where you can search for videos, watch them, and read comments",
    link: "https://youtube-clone-lancevd.vercel.app",
    category: "frontend development",
    skills: ["JavaScript", "React", "Bootstrap"],
  },
  {
    name: "MovRent",
    image: "/images/movrent.png",
    description:
      "Movrent is the place for movies enthusiasts, where they can check upcoming and latest movies, read plots, and view trailers",
    link: "https://movie-app-one-tau.vercel.app/",
    category: "frontend development",
    skills: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    name: "Vue Github",
    image: "/images/vue-github.png",
    description: "Search for git hub profiles and display their repositories!",
    link: "https://github-project-vue.vercel.app/",
    category: "frontend development",
    skills: ["JavaScript", "Vue"],
  },
  // Add
];

const categories = ["ALL", "FRONTEND DEVELOPMENT", "FULLSTACK"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <BannerLayout>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
        <div className="flex space-x-4 mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-[#78787C] text-sm ${
                selectedCategory === category
                  ? "font-bold text-white"
                  : "font-semibold"
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Portfolio;
