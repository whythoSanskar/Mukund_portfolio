import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeAbtSection, setActiveAbtSection] = useState(false);

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

  const handleAboutClick = () => {
    setActiveSection('about');
    setActiveAbtSection(true);  
  };

  return (
    <div className={`min-h-screen main-body bg-black`}>
      <Navbar
        activeSection={activeSection}
        activeAbtSection={activeAbtSection}
        onProjectsClick={() => setActiveSection('projects')}
        onAboutClick={handleAboutClick}
        onContactClick={() =>
          window.open(
            'mailto:email@mishrasanskar60.com?subject=Subject&body=Body%20goes%20here'
          )
        }
      />
      <div>
        {activeSection === 'home' && (
          <div className="hero">
            <Hero />
          </div>
        )}

        {activeSection === 'projects' && (
          <Projects />
        )}

        {activeSection === 'about' && (
          <About onAboutClick={() => setActiveAbtSection(prevState => !prevState)} />
        )}
      </div>
    </div>
  );
}
