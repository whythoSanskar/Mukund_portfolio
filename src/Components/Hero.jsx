  import { useEffect } from 'react';
  import { gsap } from 'gsap';

  export default function Hero() {
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "ease.out" } });

      const updateAnimation = () => {
        const isMobile = window.innerWidth < 768;
        const fontSize = isMobile ? '1.39rem' : '3.8rem';  
        
        gsap.set(".word-meaningful, .word-purpose", { fontSize: '1rem' });

        tl.clear();

        tl.fromTo(
          ".word-creating",
          { opacity: 1, y:-60, x:20, rotation: 9.487,  },
          { opacity: 1, y:0, rotation: 0, x: 0 },
          4
        )
        .fromTo(
          ".word-meaningful",
          { opacity: 0, scale:0 },
          { opacity: 1, scale: 1, fontSize: fontSize },
          4
        )
        .fromTo(
          ".word-moments",
          { opacity: 1, y:-50,scaleY: -1, x: -50 },
          { opacity: 1, y:0, scaleY: 1, x: 0 },
          4
        )
        .fromTo(
          ".word-where",
          { opacity: 1, scaleY: -1,x:20 },
          { opacity: 1, scaleY: 1, x:0 },
          4
        )
        .fromTo(
          ".word-every",
          { opacity: 1, rotation: 90, fontWeight: 800, y: 10 },
          { opacity: 1, rotation: 0, fontWeight: 400, y: 0 },
          4
        )
        .fromTo(
          ".word-detail",
          { opacity: 1, y: -50, fontWeight: 100 },
          { opacity: 1, y: 0, fontWeight: 400 },
          4
        )
        .fromTo(
          ".word-has",
          { opacity: 1 },
          { opacity: 1 },
          4
        )
        .fromTo(
          ".word-purpose",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, fontSize: fontSize },
          4
        );
      };

      updateAnimation();
      window.addEventListener('resize', updateAnimation);

      return () => {
        window.removeEventListener('resize', updateAnimation);
      };
    }, []);

    return (
      <div className="flex flex-col items-center justify-center mt-[350px] md:mt-[220px] w-full bg-black text-[1.39rem] md:text-[3.8rem] font-creato">
        <div className="flex items-center justify-center gap-1 md:gap-3">
          <span className="word-creating text-white">Creating</span>
          <span className="word-meaningful text-white italic font-instrument-serif">Meaningful</span>
          <span className="word-moments text-white">Moments,</span>
        </div>

        <div className="flex justify-center gap-1 md:gap-3 mt-[-5px] md:mt-[-15px]">
          <span className="word-where text-white">Where</span>
          <span className="word-every text-white">Every</span>
          <div className="flex justify-center">
            <span className="word-detail text-white">Detail</span>
          </div>
          <span className="word-has text-white">Has</span>
          <span className="word-purpose text-white italic font-instrument-serif">Purpose.</span>
        </div>
      </div>
    );
  }
