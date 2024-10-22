import { navImg } from "../utils";
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
export default function Navbar({ activeSection,activeAbtSection,activeeverSection, onProjectsClick, onAboutClick, onContactClick }) { 
  const [aboutVisited, setAboutVisited] = useState(false);
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = "/doc/wallpaperflare.com_wallpaper.jpg";  
    link.download = "Mukund_Sharma_Resume.pdf";  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  let textColor = activeSection === 'about'  ? 'text-black' : 'text-white';
  let bgColor = activeSection === 'about'  ? 'bg-white' : 'bg-black';
  if(activeSection === 'about') {
    bgColor = activeAbtSection != true ? 'bg-black':'bg-white';
    textColor = activeAbtSection != true ? 'text-white' : 'text-black';
  }
  useEffect(() => {
    if (activeeverSection) {
      setAboutVisited(true);
    }
  }, [activeeverSection]);
  return (
    <div className={`${aboutVisited ?  
      `${bgColor==="bg-white" ? `nav flex justify-between items-center w-full pl-[99px] pr-[99px] py-4 ${bgColor} ease-in-out transition-colors delay-[500ms]`
      : 
      `nav flex justify-between items-center w-full pl-[99px] pr-[99px] py-4 ${bgColor} ease-in-out transition-colors delay-[500ms]`}
      `: `nav flex justify-between items-center w-full pl-[99px] pr-[99px] py-4 ${bgColor} ease-in-out transition-colors delay-[3000ms]`}
      `}>
      <div className="flex items-center">
        <img src={navImg} alt="navimage" style={{ zIndex: 1 }} />
        <p className={`text-xl ${textColor}`} style={{ zIndex: 2 }}>Mukund Sharma</p>
      </div>
      <div className="flex space-x-8 items-center flex-none cursor-pointer text-greyish">
        <p className="text-xl font-normal cursor-pointer" onClick={onProjectsClick}>Projects</p>
        <p className={`text-xl font-normal cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : ''}`} onClick={onAboutClick}>About</p>
        <p className="text-xl font-normal cursor-pointer" onClick={handleResumeDownload}>Resume</p>
        <p className="text-xl font-normal cursor-pointer" onClick={onContactClick}>Contact</p>
      </div>
    </div>
  );
}
