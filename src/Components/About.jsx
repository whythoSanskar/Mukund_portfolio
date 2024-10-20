import { gsap } from 'gsap';
import { useEffect } from 'react';
import { landingSvg } from "../utils";
import { AboutImg } from "../utils";


export default function About() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl
    // .fromTo(

    //   '.box-1', 
    //   { opacity: 0 }, 
    //   { opacity: 1 }
    // )
    // .fromTo(  
    //   '.box-2',
    //   { opacity: 0 },
    //   { opacity: 1, duration: 3.2, ease: "power1.inOut" }
    // )
    // .fromTo(
    //   '.box-3',
    //   { opacity: 0 }, 
    //   { opacity: 1, duration: 0.5, ease: "power1.inOut" }
    // )
    // .fromTo(
    //   '.box-4',
    //   { opacity: 0 }, 
    //   { opacity: 1, duration: 1.5, ease: "power1.inOut" }
    // );
  }, []);
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 bg-white">
      <div className="flex flex-col items-center mb-20">
        <img 
          src={landingSvg}
          alt="Illustrated portrait" 
          className="w-[191.61px] h-[191.61px] mb-8"
        />
        
        <div className="flex flex-col items-center space-y-6">
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

      <div className="flex flex-col items-center">
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
    </main>

  )
}
