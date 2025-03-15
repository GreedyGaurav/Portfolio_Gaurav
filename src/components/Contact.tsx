import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "greedygaurav@gmail.com",
      link: "mailto:greedygaurav@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91 7424924307",
      link: "tel:+917424924307",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/gauravsharma",
      link: "https://linkedin.com/in/greedygaurav",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      content: "github.com/GreedyGaurav",
      link: "https://github.com/GreedyGaurav",
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      content: "@greedygaurav",
      link: "https://twitter.com/greadygaurav",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400">Let's connect and collaborate!</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-4 bg-purple-600/20 rounded-full mr-4">
                <info.icon className="text-2xl text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{info.title}</h3>
                <p className="text-gray-400">{info.content}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your message"
              />
            </div>
            <motion.button
              type="button"
              className="w-full px-8 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(formData);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       icon: FaEnvelope,
//       title: "Email",
//       content: "your.email@example.com",
//       link: "mailto:your.email@example.com",
//     },
//     {
//       icon: FaPhone,
//       title: "Phone",
//       content: "+1 234 567 890",
//       link: "tel:+1234567890",
//     },
//     {
//       icon: FaMapMarkerAlt,
//       title: "Location",
//       content: "City, Country",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//         <p className="text-gray-400">
//           Feel free to reach out to me for any questions or opportunities!
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-12">
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="space-y-8"
//         >
//           {contactInfo.map((info, index) => (
//             <motion.a
//               key={index}
//               href={info.link}
//               className="flex items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="p-4 bg-purple-600/20 rounded-full mr-4">
//                 <info.icon className="text-2xl text-purple-400" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">{info.title}</h3>
//                 <p className="text-gray-400">{info.content}</p>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={6}
//                 className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 required
//               />
//             </div>
//             <motion.button
//               type="submit"
//               className="w-full px-8 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
