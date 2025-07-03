

export default function Hero() {
  return (
    <>
      <div className="w-full container mx-auto">
        <div className="w-[1200px] mx-auto relative">
          <img
            src="/thumbs.svg"
            alt="Logo"
            className=" absolute left-[-9rem] top-[-1rem] z-0"
          />
          <img
            src="/smili.svg"
            alt="Logo"
            className="absolute left-[12.8rem] top-[-0.5rem] overflow=hidden z-0"
          />
          <img
            src="/alien.svg"
            alt="Logo"
            className=" absolute right-[-3rem] top-[-14rem] overflow=hidden z-0"
          />
          <div className="flex justify-center mt-36 z-10">
            <div className="flex flex-col items-center font-albert-900 text-8xl font-extrabold uppercase">
              <span>PRODUCT DESIGNER, </span>
              <span> Caffeinated & </span>
              <span>CREATIVELY HIGH</span>
            </div>
          </div>
          <img
            src="/figma.svg"
            alt="Logo"
            className=" absolute left-[13rem] top-[17rem] overflow-hidden z-0"
          />
          <img
            src="/brain.svg"
            alt="Logo"
            className=" absolute right-[-3rem] top-[14rem] overflow-hidden z-0"
          />
        </div>
        
      </div>

      
    </>
  );
}
