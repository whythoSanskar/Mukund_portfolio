import { landingSvg, AboutImg } from "../utils";

// eslint-disable-next-line react/prop-types
export default function About() {
  return (
    <main
      className={`min-h-screen mx-auto py-1 relative bg-white`}>
      <div
        className="flex flex-col items-center mb-20 abox-1 abt-text relative"
        style={{ zIndex: 20 }}
      >
        <img
          src={landingSvg}
          alt="Illustrated portrait"
          loading="lazy"
          className={`w-[191.61px] h-[191.61px] mb-8 cursor-pointer mt-[55px]`}
          style={{
            zIndex: 1,
            transition: "transform 1.2s ease-out, opacity 1s",
          }}
        />

        <div className="flex flex-col items-center space-y-6 abox-2 text-black">
          <p className="text-[22px] leading-normal font-normal w-[468px] text-line-1">
            Hey there! I&apos;m Mukund Sharma, a UX designer with a knack for
            turning &quot;meh&quot; into{" "}
            <span className="font-semibold italic">marvelous</span>.
          </p>

          <p className="text-[22px] leading-normal font-normal w-[468px] text-line-2">
            I&apos;ve spent the last year making sure users actually enjoy
            using products. I&apos;m like a digital detective, constantly on
            the lookout for ways to improve functionality and make every click
            a delightful experience.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col items-center abox-3 relative text-black"
        style={{ zIndex: 20 }}
      >
        <img
          src={AboutImg}
          alt="Decorative badge"
          loading="lazy"
          className="w-[115px] h-[115px] mb-8"
        />

        <p className="text-[22px] leading-normal font-normal w-[468px] text-line-3">
          If you&apos;ve got a product that needs some love, I&apos;m your go-to!
        </p>
      </div>
    </main>
  );
}
