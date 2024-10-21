import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { landingSvg } from "../utils";
import { AboutImg } from "../utils";

export default function About() {
  const tl = useRef(null);
  const [backgroundBlack, setBackgroundBlack] = useState(false);
  const handleOnClick = () => {
    const tlBlack = gsap.timeline();
    tlBlack.fromTo(
      ".black-overlay",
      { clipPath: "circle(0% at 50% 50%)" },
      {
        clipPath: "circle(150% at 50% 50%)",
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          setBackgroundBlack(true); 
        }
      }
    );
  };

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline();
      tl.current
        .fromTo(
          ".white-screen",
          { opacity: 0, y: 100, width: "3px" },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            width: "2px",
            ease: "power2.inOut",
            borderRadius: "20px",
          }
        )
        
        .to(".white-screen", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          width: "100%",
          ease: "power3.in",
          borderRadius: "0px",
        })
        .fromTo(".abt-text",{
          opacity:0
        },{opacity:1})
        .fromTo(".abox-1", { opacity: 0 }, { opacity: 1 })
        .fromTo(".abox-2", { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power1.inOut" })
        .fromTo(".abox-3", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.inOut" });
    }
  }, []);

  return (
    <main className={`min-h-screen mx-auto py-1 ${backgroundBlack ? 'bg-black' : 'bg-white'} white-screen relative`}>
      <div className='abt-text'>
      <div
        className="black-overlay fixed top-0 left-0 w-full h-full bg-black"
        style={{ zIndex: 10, pointerEvents: 'none', clipPath: 'circle(0% at 50% 50%)' }}
      ></div>

      <div className="flex flex-col items-center mb-20 abox-1 abt-text relative" style={{ zIndex: 20 }}>
        <img
          src={landingSvg}
          alt="Illustrated portrait"
          className="w-[191.61px] h-[191.61px] mb-8 cursor-pointer"
          onClick={handleOnClick}
        />
        
        <div className="flex flex-col items-center space-y-6 abox-2">
          <p className="text-[22px] leading-normal font-normal w-[468px]">
            Hey there! I&apos;m Mukund Sharma, a UX designer with
            a knack for turning &quot;meh&quot; into <span className="font-semibold italic">marvelous</span>.
          </p>
          
          <p className="text-[22px] leading-normal font-normal w-[468px]">
            I&apos;ve spent the last year making sure users actually
            enjoy using products. I&apos;m like a digital detective,
            constantly on the lookout for ways to improve
            functionality and make every click a delightful
            experience.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center abox-3 relative" style={{ zIndex: 20 }}>
        <img
          src={AboutImg}
          alt="Decorative badge"
          className="w-[115px] h-[115px] mb-8"
        />
        
        <p className="text-[22px] leading-normal font-normal w-[468px]">
          If you&apos;ve got a product that needs some love, I&apos;m
          your go-to!
        </p>
      </div>
      </div>
    </main>
  );
}
