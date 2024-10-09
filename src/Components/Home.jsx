import Navbar from './Navbar';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import Hero from './Hero';
import Projects from './Projects';

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero',
      { opacity: 0 },
      { opacity: 1, duration: 6.5, ease: 'power2.in' } 
    )
    .to(
      '.hero', {opacity:0, duration:1}
    )
    .fromTo(
      '.project',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.in'},
    );
    
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="min-h-screen">
      <div className='hero'>
        <Hero />
      </div>
      <div className='project'>
        <Projects />
      </div>
    </div>
    </div>
  );
}
