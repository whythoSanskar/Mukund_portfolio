import { AboutImg } from "../utils";

// eslint-disable-next-line react/prop-types
export default function About() {
  return (
    <main
      className={`min-h-screen py-1 relative`}>
      <div
        className="flex flex-row items-center mb-20 abox-1 abt-text relative gap-48 text-greyish mt-9"
        style={{ zIndex: 20 }}
      >

        <div className="flex flex-col items-center mx-36 mt-[70px] font-creato">
          <p className="text-[24px] leading-normal font-normal w-[690px] text-line-1">
          Hey there! I’m <span className="font-instrument-serif italic text-[36px] text-black">Mukund Sharma,</span> 
          </p>

          <p className="leading-normal font-normal w-[690px] text-line-2 text-[18px] ">
          I am committed to ensuring that users truly enjoy using any product. I am always seeking ways to <span className="font-instrument-serif italic text-black">enhance functionality</span> and create a delightful experience with every click.
          </p>
        </div>
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

      </div>

      <div
        className="flex flex-row relative text-greyish mx-36"
        style={{ zIndex: 20 }}
      > 
        <p className="text-[18px] leading-normal font-normal w-20 h-6 font-creato">
        I excel in:
        </p>
      </div>
    </main>
  );
}
