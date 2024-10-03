import Navbar from "./Navbar";

export default function Home() {
    return (
      <div className="relative min-h-screen bg-black ">
        <Navbar />
        <div className="absolute inset-0 flex justify-center items-center  min-h-screen">
          <p className="typewriter text-8xl italic text-white text-center leading-none w-[828px]">
            <span className="font-semibold">Crafting</span>{" "}
            <span className="font-instrument-serif">Experiences</span>{" "}
            <span className="font-light">that</span>{" "}
            <span className="font-instrument-serif">matters</span>
          </p>
        </div>
      </div>
    );
  }
  