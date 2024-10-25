import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });

    tl.fromTo(
      ".word-creating",
      { opacity: 1, rotation: 19.487, x: 0 },
      { opacity: 1, rotation: 0, x: 0 },
      4
    );

    tl.fromTo(
      ".word-meaningful",
      { opacity: 0, fontSize: '1px', x: -150 },
      { opacity: 1, fontSize: '75px', x: 0 },
      4
    );

    tl.fromTo(
      ".word-moments",
      { opacity: 1, rotation: 180, x: 200 },
      { opacity: 1, rotation: 0, x: 0 },
      4
    );

    tl.fromTo(
      ".word-where",
      { opacity: 1, rotation: 180, x: -150 },
      { opacity: 1, rotation: 0, x: 0 },
      4
    );

    tl.fromTo(
      ".word-every",
      { opacity: 1, rotation: 90, y: -50 },
      { opacity: 1, rotation: 0, y: 0 },
      4
    );

    tl.fromTo(
      ".word-detail",
      { opacity: 1, scale: 0, y: -100 },
      { opacity: 1, scale: 1, y: 0 },
      4
    );

    tl.fromTo(
      ".word-has",
      { opacity: 1, y: -50 },
      { opacity: 1, y: 0 },
      4
    );

    tl.fromTo(
      ".word-purpose",
      { opacity: 0, fontSize: '1px', y: 50 },
      { opacity: 1, fontSize: '75px', y: 0 },
      4 
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-[61px] ">
      <div className="flex items-center justify-center w-[500.75px] h-[108.6px] gap-7">
        <span className="word-creating text-white font-bold">Creating</span>
        <span className="word-meaningful text-white italic ml-2">Meaningful</span>
        <span className="word-moments text-white ml-2">Moments,</span>
      </div>

      <div className="flex justify-center w-[1079px] h-[272px] gap-7">
        <span className="word-where text-white">Where</span>
        <span className="word-every text-white ml-2">Every</span>
        <div className="flex justify-center w-[140px] h-[272px]">
          <span className="word-detail text-[61px] text-white">Detail</span>
        </div>
        <span className="word-has text-white ml-2">Has</span>
        <span className="word-purpose text-white italic ml-2 mt-[-14px]">Purpose.</span>
      </div>
    </div>
  );
}
