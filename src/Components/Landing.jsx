import { useEffect } from 'react';
import { gsap } from 'gsap';
import { landingSvg } from '../utils';
import Home from './Home';

export default function Landing() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.landing-image-text', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    
    .fromTo(
      '.black-screen',
      { y: '100%' },
      { y: 0, duration: 1.5, ease: 'power3.inOut' }, "+=0.5"  
    )
    
    .to('.landing-image-text', { opacity: 0, duration: 0.5, ease: 'power3.in' })

   
    .fromTo(
      '.home-transition',
      { opacity: 0, y: 0 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'ease.in' }
    )
    .to('.black-screen', { opacity: 0, duration: 1 }, "+=0.5")
   
  }, []);

  return (
    <div className="relative min-h-screen bg-white"> 
      <div className="grid items-center min-h-screen justify-center landing">
        <div className="container-landing flex content-between justify-center landing-image-text">
          <img className="landing-image" src={landingSvg} alt="landing svg" />
          <div className="text-black w-[337px] h-[74px] text-3xl my-[100px]">
            <p className='font-sf-pro-display'>
              I love to improve the <span className="font-semibold italic">functionality</span> of products
            </p>
          </div>
        </div>
      </div>

      <div className="black-screen fixed top-0 left-0 w-full min-h-screen bg-black"></div>

      <div className="home-transition absolute inset-0">
        <Home />
      </div>
    </div>
  );
}
