import { useState, useEffect } from "react";
import { AboutImg } from "../utils";

// eslint-disable-next-line react/prop-types
export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className={`min-h-screen py-1 relative`}>
      <div
        className="flex flex-col md:flex md:flex-row items-center mb-10 md:mb-20 abt-text relative md:gap-48 text-greyish mt-9"
        style={{ zIndex: 20 }}
      >
        {isMobile && (
          <img
            src={AboutImg}
            alt="Illustrated portrait"
            loading="lazy"
            className={`cursor-pointer`}
            style={{
              zIndex: 1,
              transition: "transform 1.2s ease-out, opacity 1s",
            }}
          />
        )}
        <div className="flex flex-col items-center mx-4 md:mx-36 mt-[70px] font-creato">
          <p className="text-xl md:text-[24px] leading-normal font-normal md:w-[690px] text-line-1">
            Hey there! I’m{" "}
            <span className="font-instrument-serif italic text-2xl md:text-[36px] text-black">
              Mukund Sharma,
            </span>
          </p>

          <p className="leading-normal font-normal w-60 md:w-[690px] text-line-2 mt-[20px] md:mt-[0px] text-base md:text-[18px] ">
            I am committed to ensuring that users truly enjoy using any product.
            I am always seeking ways to{" "}
            <span className="font-instrument-serif italic text-black">
              enhance functionality
            </span>{" "}
            and create a delightful experience with every click.
          </p>
        </div>
        {!isMobile && (
          <img
            src={AboutImg}
            alt="Illustrated portrait"
            loading="lazy"
            className={`cursor-pointer`}
            style={{
              zIndex: 1,
              transition: "transform 1.2s ease-out, opacity 1s",
            }}
          />
        )}
      </div>

      <div
        className="flex flex-col md:flex md:flex-row relative text-greyish mx-16 md:mx-36 w-10 h-3 md:w-20 md:h-6"
        style={{ zIndex: 20 }}
      >
        <p className="text-[14px] md:text-[18px] leading-normal font-normal font-creato  w-20 h-6">
          I excel in:
        </p>
      </div>
    </main>
  );
}
