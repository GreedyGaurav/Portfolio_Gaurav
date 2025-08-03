import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Define a type for project properties
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

// Define props type for ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  github,
  live,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:shadow-purple-500/20"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-600/20 rounded-full text-xs sm:text-sm text-purple-400"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-lg" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="text-lg" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Recroot AI",
      description:
        "Developed a comprehensive AI-powered web application for generating and optimizing job descriptions using Google's Gemini AI technology.",
      tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "Gemini API"],
      image: "/Project0.png",
      github: "https://github.com/GreedyGaurav/RECROOT_AI",
      live: "https://recroot-ai.vercel.app/",
    },
    {
      title: "Hiring Hub",
      description:
        "Hiring Hub simplifies job hunting and recruitment by connecting job seekers with employers. It streamlines applications, postings, and management, enhancing efficiency. Built with React, Clerk, Tailwind and Supabase for seamless performance.",
      tech: ["React", "Supabase", "Clerk", "Tailwind"],
      image: "/Project1.jpg",
      github: "https://github.com/GreedyGaurav/Hiring-Hub-React",
      live: "https://hiring-hub-react.vercel.app/",
    },
    {
      title: "India is Innovating",
      description:
        "India Is Innovating is a tech fest platform enabling students to explore events seamlessly. With 30,000+ users, it offers a dynamic UI with smooth animations. Built with React, Tailwind, and GSAP for an interactive experience.",
      tech: ["React", "GSAP", "Tailwind"],
      image: "/Project2.jpg",
      github: "https://github.com/GreedyGaurav/Tech-Fest-Website-SGVU",
      live: "https://www.sgvutechfest.online/",
    },
    {
      title: "Train Trippers",
      description:
        "Train Trippers enhances train travel by helping users discover routes, schedules, and nearby tourist spots. It provides a seamless search experience with a clean, intuitive UI. Built with Firebase, JavaScript, and Tailwind for efficiency.",
      tech: ["Firebase", "JS", "Tailwind"],
      image: "/Project3.jpg",
      github:
        "https://github.com/GreedyGaurav/TrainTrippers/tree/main/TrainTrippers-main",
      live: "https://greedygaurav.github.io/TrainTrippers/TrainTrippers-main/index.html",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 sm:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          My Projects
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          passion for development.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
