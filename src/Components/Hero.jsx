import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.box-1', 
      { opacity: 0 }, 
      { opacity: 1 }
    )
    .fromTo(  
      '.box-2',
      { opacity: 0 },
      { opacity: 1, duration: 3.2, ease: "power1.inOut" }
    )
    .fromTo(
      '.box-3',
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5, ease: "power1.inOut" }
    )
    .fromTo(
      '.box-4',
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, ease: "power1.inOut" }
    );
  }, []);

  return (
    <div className='flex justify-center items-center my-[212px]'>
      <p className="typewriter text-8xl italic text-white text-center leading-none w-[828px]">
        <span className="font-semibold box-1">Crafting</span>{" "}
        <span className="font-instrument-serif box-2">Experiences</span>{" "}
        <span className="font-light box-3">that</span>{" "}
        <span className="font-instrument-serif box-4">matter</span>
      </p>
    </div>
  );
}
