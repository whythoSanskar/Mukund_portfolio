import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";

export default function Home() {
  const [activeSection, setActiveSection]  =useState('home');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.in" }
    )
    .fromTo(
      '.white-screen',
      {opacity:1, y: 100},
      {opacity:0, duration: 1, ease: "power1.inOut"}
    )
    
  }, [activeSection]);

  return (
    <div className={`${activeSection === 'about' ? 'bg-white' : 'bg-black'} min-h-screen`}>
      <Navbar 
      activeSection={activeSection}
      onProjectsClick={() => setActiveSection('projects')}  onAboutClick={() => setActiveSection('about')} onContactClick={()=>window.open('mailto:email@mishrasanskar60.com?subject=Subject&body=Body%20goes%20here')
      }/>
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
