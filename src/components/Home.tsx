import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/greedygaurav" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/greedygaurav" },
    { icon: FaTwitter, link: "https://twitter.com/greadygaurav" },
  ];
  return (
    <div className="min-h-screen pt-16 sm:pt-24 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <motion.div
          className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 sm:mb-12"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/Gaurav1.jpg"
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-purple-500 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full " />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Gaurav Sharma
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer | Crafting Experiences | Code. Build. Innovate.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 sm:space-x-8 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl sm:text-3xl transition-colors duration-300"
              whileHover={{ scale: 1.2, color: "#A855F7" }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#/projects"
            className="px-8 py-4 bg-purple-600 rounded-full font-semibold text-lg sm:text-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/Gaurav_Resume.pdf"
            className="px-8 py-4 border-2 border-purple-600 rounded-full font-semibold text-lg sm:text-xl hover:bg-purple-600/20 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "#A855F7" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-center items-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
