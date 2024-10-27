import { navImg } from "../utils";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// eslint-disable-next-line react/prop-types
export default function Navbar({ activeSection, overlayComplete, onHomeClick, onProjectsClick, onAboutClick, onContactClick }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 639 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-black");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    if (activeSection === 'about') {
      const timer = setTimeout(() => {
        setNavbarColor("bg-white");
        setTextColor("text-black");
      }, 1200); 

      return () => clearTimeout(timer);
    } else {
      setNavbarColor("bg-black");
      setTextColor("text-white");
    }
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (callback) => {
    setIsMenuOpen(false);
    callback();
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/doc/wallpaperflare.com_wallpaper.jpg";
    link.download = "Mukund_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <nav className={`flex justify-between items-center w-full px-6 md:px-10 lg:px-[99px] py-4 ${navbarColor} transition-colors duration-500`}>
      <div className="flex items-center cursor-pointer">
        <img src={navImg} alt="navimage" style={{ zIndex: 1 }} />
        <p className={`text-lg lg:text-xl ${textColor} ml-2`} style={{ zIndex: 2 }} onClick={onHomeClick}>Mukund Sharma</p>
      </div>

      {isSmallScreen && (
        <button
          className={`focus:outline-none ${textColor} md:hidden z-30`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 ${overlayComplete ? 'bg-white' : 'bg-black'} transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full opacity-0'
        } transition-transform duration-300 ease-in-out md:hidden z-20`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li>
            <p className={`${textColor} text-xl cursor-pointer`} onClick={onHomeClick} >
              Home
            </p>
          </li>
          <li>
            <p className={`${textColor} text-xl cursor-pointer`} onClick={() => handleLinkClick(onProjectsClick)}>
              Projects
            </p>
          </li>
          <li>
            <p className={`text-xl cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : textColor}`} onClick={() => handleLinkClick(onAboutClick)}>
              About
            </p>
          </li>
          <li>
            <p className={`${textColor} text-xl cursor-pointer`} onClick={() => handleLinkClick(handleResumeDownload)}>
              Resume
            </p>
          </li>
          <li>
            <p className={`${textColor} text-xl cursor-pointer`} onClick={() => handleLinkClick(onContactClick)}>
              Contact
            </p>
          </li>
        </ul>
      </div>


      {!isSmallScreen && (
        <div className="flex space-x-8 items-center">
          <p className={`text-xl font-normal cursor-pointer ${textColor}`} onClick={onProjectsClick}>Projects</p>
          <p className={`text-xl font-normal cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : textColor}`} onClick={onAboutClick}>About</p>
          <p className={`text-xl font-normal cursor-pointer ${textColor}`} onClick={handleResumeDownload}>Resume</p>
          <p className={`text-xl font-normal cursor-pointer ${textColor}`} onClick={onContactClick}>Contact</p>
        </div>
      )}
    </nav>
  );
}
