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
        { opacity: 1, delay: 2, ease: "power2.in" }
      );
    }
  }, [activeSection]);

  const handleAboutClick = () => {
    setActiveSection('about');
    setActiveAbtSection(true);  
    setActiveeverSection(true);
  }
  return (
    <div className={`min-h-screen main-body bg-black`}>
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
          <About onAboutClick={() => setActiveAbtSection(prevState => !prevState)} style={{ zIndex: 2, position: 'relative' }} />
        )}
      </div>
    </div>
  );
}
