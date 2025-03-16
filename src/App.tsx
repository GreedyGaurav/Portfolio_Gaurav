import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Apply smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <Home />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
