import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useEffect } from "react";
import Hero from "./Hero";
import { p1 } from "../utils";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero",
      { opacity: 0 },
      { opacity: 1, duration: 6.5, ease: "power2.in" }
    )
      .to(".hero", { opacity: 0, duration: 1 })
      .fromTo(
        ".project",
        { opacity: 0, y: 100, width: 3, },
        { opacity: 1, y: 0, duration: 2, width: 3, ease: "power2.inOut", borderRadius:"20px"},
      )
    
      .to(
        ".project",
        {opacity:1, y: 0, duration: 0.8, width: 1220, left:120, ease: "power3.in" ,borderRadius: "8px"}
      )
      .fromTo(
        '.projectImg',
        {opacity:0, x:40},
        {opacity:1, x:25, duration:0.3,ease:'power1.in'}
      )
      .fromTo(
        '.projectTitle',
        {opacity:0, h:0},
        {opacity:1, h:66, duration:0.2, ease: 'power1.inOut'}
      )
     
      .fromTo(
        '.pr-txt',
        {opacity:0},
        {opacity:1}
      )
      
      ;
      
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div>
        <div className="hero">
          <Hero />
        </div>
        <div className="w-[194px] h-[66px] projectTitle">
          <p className="text-[55px] absolute top-[15vh] left-[15vh] font-medium text-white font-sf-pro-display">Projects</p>
        </div>
        <div  
          className="bg-white absolute top-[30vh] left-[50vw] w-[1220px] h-[485px] 
    shrink items-center project opacity-0 flex"
        >
          <div className="flex flex-col w-[582px] h-[368px] justify-between flex-start shrink-0 pr-txt my-[63px] mx-[45px]">
            <p className="text-4xl w-full font-medium text-black self-stretch">SafeSquid Labs, Customer Portal</p>
            <p className="text-[22px] w-full text-grayer">Redesigned, Reimagined, and now Responsive. I took customer portal beyond the desktop, crafting a responsive interface that doesn't compromise on functionality. </p>
          </div>
          
          <div className="projectImg">
            <img src={p1} alt="project1.jpg" />
          </div>

        </div>

      </div>
    </div>
  );
}
