import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React.js",
        "JavaScript(ES6)",
        "TypeScript",
        "Tailwind CSS",
        "Shad CN/UI",
      ],
    },
    {
      category: "Backend",
      items: [
        "NodeJs",
        "ExpressJS",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Supabase",
        
      ],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "BootStrap"],
    },
  ];

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Unified Mentor",
      period: "May 2024 - June 2024",
      description:
        "Developed frontend functionalities using HTML, CSS, and modern JavaScript (ES6) to enhance overall user experience. Built dynamic and reusable UI components with React.js, ensuring efficient and maintainable code architecture. Successfully implemented backend services using Node.js and integrated MongoDB for scalable and reliable data management. Seamlessly integrated Firebase to enable features such as user authentication and real-time database interactions.",
    },
    {
      title: "Web Developer Intern",
      company: "PHN Technology",
      period: "April 2023 - June 2023",
      description:
        "Engineered modern, component-based user interfaces with React.js, leveraging Tailwind CSS for consistent, utility-first styling. Integrated Supabase to efficiently handle authentication, database, and API functionalities in a scalable manner. Designed and optimized relational data structures using MySQL, ensuring efficient data retrieval and data integrity. Collaborated in agile development cycles with a strong focus on clean architecture, code reusability, and performance optimization.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Hello! I'm Gaurav Sharma, a passionate full-stack developer
                skilled in ReactJS, NodeJS, ExpressJS, HTML, CSS,
                JavaScript(ES6), Tailwind CSS, Bootstrap, Clerk, Supabase,
                Firebase, MySQL, MongoDB, ShadCN UI, Git, and GitHub.
              </p>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-4">
                I love crafting responsive, user-friendly web applications with
                modern technologies. From frontend styling to backend
                management, I build seamless digital experiences. When I'm not
                coding, I explore new tools, optimize performance, and refine my
                problem-solving skills. Continuous learning drives me to stay
                ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-4 py-2 bg-purple-600/20 rounded-full text-sm text-purple-400"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(147, 51, 234, 0.3)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                <p className="text-purple-400 mb-3">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
