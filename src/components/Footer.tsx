import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {[
            { icon: FaGithub, link: "https://github.com/greedygaurav" },
            { icon: FaLinkedin, link: "https://linkedin.com/in/greedygaurav" },
            { icon: FaTwitter, link: "https://twitter.com/greadygaurav" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Gaurav Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
