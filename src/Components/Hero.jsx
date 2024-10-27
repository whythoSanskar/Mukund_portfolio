import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "ease.out" } });

    tl.fromTo(
      ".word-creating",
      { opacity: 1, rotation: 9.487, x: 0 },
      { opacity: 1, rotation: 0, x: 0 },
      4
    );

    tl.fromTo(
      ".word-meaningful",
      { opacity: 0, fontSize: '1px', x: -150 },
      { opacity: 1, fontSize: '61px', x: 0 },
      4
    );

    tl.fromTo(
      ".word-moments",
      { opacity: 1, scaleY:-1, x: -50 },
      { opacity: 1, scaleY:1, x: 0 },
      4
    );

    tl.fromTo(
      ".word-where",
      { opacity: 1, scaleY:-1},
      { opacity: 1, scaleY: 1},
      4
    );

    tl.fromTo(
      ".word-every",
      { opacity: 1, rotation: 90, fontWeight:800, y:70},
      { opacity: 1, rotation: 0, fontWeight:400 , y:0},
      4
    );

    tl.fromTo(
      ".word-detail",
      { opacity: 1, y: -50, fontWeight: 265 },
      { opacity: 1,  y: 0, fontWeight:400 },
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
      { opacity: 1, fontSize: '61px', y: 0 },
      4 
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-[61px] font-creato">
      <div className="flex items-center justify-center w-[500.75px] h-[108.6px] gap-3">
        <span className="word-creating text-white">Creating</span>
        <span className="word-meaningful text-white italic ml-2 font-instrument-serif">Meaningful</span>
        <span className="word-moments text-white ml-2">Moments,</span>
      </div>

      <div className="flex justify-center w-[1079px] h-[272px] gap-3 mt-[-15px]">
        <span className="word-where text-white w-[180px] h-[72px]">Where</span>
        <span className="word-every text-white ml-2 w-[170px] h-[72px]">Every</span>
        <div className="flex justify-center w-[140px] h-[272px]">
          <span className="word-detail text-[61px] text-white">Detail</span>
        </div>
        <span className="word-has text-white ml-2 w-[100px] h-[72px]">Has</span>
        <span className="word-purpose text-white italic ml-2  font-instrument-serif">Purpose.</span>
      </div>
    </div>
  );
}
