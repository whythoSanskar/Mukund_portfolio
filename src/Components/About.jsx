import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { landingSvg, AboutImg, heroImg, AboutImgOnClick } from "../utils";

// eslint-disable-next-line react/prop-types
export default function About({ onAboutClick }) {
  const tl = useRef(null);
  const textTl = useRef(null); 
  const [backgroundBlack, setBackgroundBlack] = useState(false);

  const handleOnClick = () => {
    const tlOverlay = gsap.timeline();

    if (!backgroundBlack) {
      tlOverlay.fromTo(
        ".black-overlay",
        { clipPath: "circle(0% at 50% 50%)", autoAlpha: 1 },
        {
          clipPath: "circle(150% at 50% 50%)",
          duration: 1.5,
          ease: "expo.inOut",
          onComplete: () => {
            setBackgroundBlack(true);
            onAboutClick();
            gsap.set(".black-overlay", { clipPath: "circle(0% at 50% 50%)", autoAlpha: 0 });
            triggerTextAnimation();
          }
        }
      );
    } else {
      tlOverlay.fromTo(
        ".white-overlay",
        { clipPath: "circle(0% at 50% 50%)", autoAlpha: 1 },
        {
          clipPath: "circle(150% at 50% 50%)",
          duration: 1.5,
          ease: "expo.inOut",
          onComplete: () => {
            setBackgroundBlack(false);
            onAboutClick();
            gsap.set(".white-overlay", { clipPath: "circle(0% at 50% 50%)", autoAlpha: 0 });
            triggerTextAnimation();
          }
        }
      );
    }
  };

  const triggerTextAnimation = () => {
    if (!textTl.current) {
      textTl.current = gsap.timeline();
    }

    textTl.current.clear();

    textTl.current
      .fromTo(
        ".text-line-1", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        ".text-line-2", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.3"
      )
      .fromTo(
        ".text-line-3", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.3"
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
            width: "3px",
            ease: "expo.out",
            borderRadius: "20px",
          }
        )
        .to(".white-screen", {
          opacity: 1,
          y: 0,
          duration: 1.2,
          width: "100%",
          ease: "expo.out",
          borderRadius: "0px",
        })
        .fromTo(".abt-text", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })
        .fromTo(".abox-1", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" })
        .fromTo(".abox-2", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })
        .fromTo(".abox-3", { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" });
    }
  }, []);

  return (
    <main className={`min-h-screen mx-auto py-1 ${backgroundBlack ? 'bg-black' : 'bg-white'} white-screen relative`}>
      <div className="abt-text">
        <div
          className="white-overlay fixed top-0 left-0 w-full h-full bg-white"
          style={{ zIndex: 15, pointerEvents: 'none', clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
        ></div>

        <div
          className="black-overlay fixed top-0 left-0 w-full h-full bg-black"
          style={{ zIndex: 10, pointerEvents: 'none', clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
        ></div>

        <div className="flex flex-col items-center mb-20 abox-1 abt-text relative" style={{ zIndex: 20 }}>
          {backgroundBlack && (
            <img
              src={heroImg}
              alt="...."
              className="mt-[-90px] transition-transform duration-1000 ease-out"
              style={{ zIndex: 0, transform: 'scale(1.1)', opacity: 1 }}
            />
          )}
          <img
            src={landingSvg}
            alt="Illustrated portrait"
            className={`${backgroundBlack ? "w-[191.61px] h-[191.61px] mb-8 cursor-pointer mt-[-169px]" : "w-[191.61px] h-[191.61px] mb-8 cursor-pointer mt-[55px]"}`}
            onClick={handleOnClick}
            style={{ zIndex: 1, transition: 'transform 1.2s ease-out, opacity 1s' }}
          />

          <div className={`flex flex-col items-center space-y-6 abox-2 ${backgroundBlack ? 'text-white' : 'text-black'}`}>
            <p className="text-[22px] leading-normal font-normal w-[468px] text-line-1">
              Hey there! I&apos;m Mukund Sharma, a UX designer with a knack for turning &quot;meh&quot; into <span className="font-semibold italic">marvelous</span>.
            </p>

            <p className="text-[22px] leading-normal font-normal w-[468px] text-line-2">
              I&apos;ve spent the last year making sure users actually enjoy using products. I&apos;m like a digital detective, constantly on the lookout for ways to improve functionality and make every click a delightful experience.
            </p>
          </div>
        </div>

        <div className={`flex flex-col items-center abox-3 relative ${backgroundBlack ? 'text-white' : 'text-black'}`} style={{ zIndex: 20 }}>
          <img
            src={`${backgroundBlack ? AboutImgOnClick : AboutImg}`}
            alt="Decorative badge"
            className="w-[115px] h-[115px] mb-8"
          />

          <p className="text-[22px] leading-normal font-normal w-[468px] text-line-3">
            If you&apos;ve got a product that needs some love, I&apos;m your go-to!
          </p>
        </div>
      </div>
    </main>
  );
}
