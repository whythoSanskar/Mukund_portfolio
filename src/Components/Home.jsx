import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeAbtSection, setActiveAbtSection] = useState(false);
  const [activeeverSection, setActiveeverSection] = useState(false);

  const tl = useRef(null);

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline();

      tl.current.fromTo(
        ".hero",
        { opacity: 0 },
        { opacity: 1, delay: 0.5, ease: "power2.in" } 
      );
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeSection]);

  const handleAboutClick = () => {
    setActiveSection('about');
    setActiveAbtSection(true);  
    setActiveeverSection(true);
  };

  return (
    <div className="min-h-screen w-screen bg-black overflow-hidden">
      <Navbar
        activeSection={activeSection}
        activeAbtSection={activeAbtSection}
        activeeverSection={activeeverSection}
        onProjectsClick={() => setActiveSection('projects')}
        onAboutClick={handleAboutClick}
        onContactClick={() =>
          window.open(
            'mailto:email@mishrasanskar60.com?subject=Subject&body=Body%20goes%20here'
          )
        }
        style={{ zIndex: 1, position: 'relative' }}
      />

      {activeSection === 'home' && (
        <Hero />
      )}

      {activeSection === 'projects' && (
        <Projects />
      )}

      {activeSection === 'about' && (
        <About onAboutClick={() => setActiveAbtSection(prevState => !prevState)} />
      )}
    </div>
  );
}
