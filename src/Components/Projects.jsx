import { p1 } from "../utils";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    const tl = gsap.timeline();
    const isMobile = window.innerWidth < 768;
    const width1 = isMobile ? '15rem' : '81rem';

    tl.fromTo(
      ".project",
      { opacity: 0, y: 100, width: 3 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        width: 3,
        ease: "power2.inOut",
        borderRadius: "20px",
      }
    )
      .to(".project", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        left: 120,
        width: width1,
        ease: "power3.in",
        borderRadius: "8px",
      })
      .fromTo(
        ".projectImg",
        { opacity: 0, x: 110 },
        { opacity: 1, x: 99,y:10, duration: 0.3, ease: "power1.in" }
      )
      .fromTo(
        ".projectTitle",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: -100,
          duration: 0.2,
          ease: "circ.inOut",
          borderRadius: "2px",
        }
      )
      .fromTo(".pr-txt", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div>
      <div className="projectTitle font-creato">
        <p className="text-[42px] md:text-[55px] absolute top-[15vh] left-[11vw] md:left-[8vw] font-medium text-white font-sf-pro-display">
          Work
        </p>
      </div>
      <div
        className="bg-white relative top-[15vh] left-[10vw] md:left-[50vw] w-10 md:w-96 h-[200px] md:h-[485px] 
            shrink items-center project flex"
      >
        <div className="flex flex-col w-[200px] h-[126px] md:w-[582px] md:h-[368px] justify-between flex-start shrink-0 pr-txt mx-[20px] my-[10px] md:my-[55px] md:mx-[45px] font-creato">
          <p className="text-lg md:text-4xl w-full font-medium text-black self-stretch font-creato">
            SafeSquid Labs, Customer Portal
          </p>
          <p className="text-[10px] md:text-[22px] w-full text-grayer font-creato">
            Redesigned, Reimagined, and now Responsive. I took customer portal
            beyond the desktop, crafting a responsive interface that
            doesn&apos;t compromise on functionality.
          </p>
        </div>

        <div className="projectImg w-[150px] h-[60px] md:w-[518px] md:h-[452px]">
          <img src={p1} alt="project1.jpg" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
