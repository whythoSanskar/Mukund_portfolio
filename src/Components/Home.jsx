import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const tl = useRef(null);

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline();

      tl.current.fromTo(
        ".hero",
        { opacity: 0 },
        { opacity: 1, delay: 2, ease: "power2.in" }
      );
    }
  }, [activeSection]);

  return (
    <div className="bg-black min-h-screen main-body">
    <Navbar
        activeSection={activeSection}
        onProjectsClick={() => setActiveSection('projects')}
        onAboutClick={() => setActiveSection('about')}
        onContactClick={() =>
          window.open(
            'mailto:email@mishrasanskar60.com?subject=Subject&body=Body%20goes%20here'
          )
        }
        className="nav"
      />
      <div>
        {activeSection === 'home' && (
          <div className="hero">
            <Hero />
          </div>
        )}

        {activeSection === 'projects' && (
          <>
            <Projects />
          </>
        )}
        {activeSection === 'about' && (
          <>
            <About />
          </>
        )}
      </div>
    </div>
  );
}
