import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayComplete, setOverlayComplete] = useState(false);
  const [delayedBgColor, setDelayedBgColor] = useState("bg-black");
  const rightToLeftTl = useRef(null);
  const heroTl = useRef(null);

  // Overlay animation for the 'about' section
  const startOverlayAnimation = () => {
    rightToLeftTl.current = gsap.timeline();

    rightToLeftTl.current
      .fromTo(
        ".right-to-left-overlay",
        { clipPath: "inset(0% 0% 0% 100%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "expo.inOut",
          onComplete: () => {
            setDelayedBgColor("bg-white");
          },
        }
      )
      .to(".right-to-left-overlay", {
        opacity: 0,
        duration: 0.5,  
        ease: "power2.out",
        onComplete: () => {
          setOverlayComplete(true);
          setOverlayVisible(false);
        },
      });
  };

  useEffect(() => {
    if (overlayVisible) {
      startOverlayAnimation();
    }
  }, [overlayVisible]);

  useEffect(() => {
    if (activeSection === "home" && !heroTl.current) {
      heroTl.current = gsap.timeline();

      heroTl.current.fromTo(
        ".hero",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection !== "about" && overlayComplete) {
      setOverlayComplete(false);
      setDelayedBgColor("bg-black");
    }
  }, [activeSection, overlayComplete]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === "home") {
      window.location.reload();
    }
    if (section === "about") {
      setOverlayVisible(true);
    } else {
      setOverlayVisible(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen w-screen ${delayedBgColor} overflow-hidden`}
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}  
    >
      {overlayVisible && (
        <div
          className="right-to-left-overlay fixed top-0  inset-0 left-0 w-full h-full bg-white"
          style={{
            zIndex: 10,
            pointerEvents: "none",
            clipPath: "inset(0% 0% 0% 100%)",
            opacity: 1,
            height: "100vh",
            width: "100vw",  
          }}
        ></div>
      )}

      <Navbar
        activeSection={activeSection}
        overlayComplete={overlayComplete}
        onHomeClick={() => handleSectionChange("home")}
        onProjectsClick={() => handleSectionChange("projects")}
        onAboutClick={() => handleSectionChange("about")}
        onContactClick={() =>
          window.open(
            "mailto:email@mishrasanskar60.com?subject=Subject&body=Body%20goes%20here"
          )
        }
      />

      {activeSection === "home" && (
        <div className="hero" style={{ height: "100vh", width: "100vw" }}>
          <Hero />
        </div>
      )}
      {activeSection === "projects" && (
        <div style={{ height: "100vh", width: "100vw" }}>
          <Projects />
        </div>
      )}
      {activeSection === "about" && overlayComplete && (
        <div style={{ height: "100vh", width: "100vw" }}>
          <About />
        </div>
      )}
    </div>
  );
}
